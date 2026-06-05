import { z } from "zod"

// ─── Shipping Address ────────────────────────────────────────────────
export interface ShippingAddress {
  fullName: string
  phone: string
  addressLine: string
  city: string
  state: string
  pincode: string
}

export const EMPTY_ADDRESS: ShippingAddress = {
  fullName: "",
  phone: "",
  addressLine: "",
  city: "",
  state: "",
  pincode: "",
}

// ─── Validation Schema ──────────────────────────────────────────────
export const shippingAddressSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  addressLine: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address is too long"),
  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City name is too long"),
  state: z
    .string()
    .min(2, "Please select or enter a state")
    .max(50, "State name is too long"),
  pincode: z
    .string()
    .regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
})

export type ShippingAddressErrors = Partial<Record<keyof ShippingAddress, string>>

// ─── Payment Types ──────────────────────────────────────────────────
export type PaymentMethod = "upi" | "razorpay"

// ─── Create-Order Request ───────────────────────────────────────────
export const createOrderRequestSchema = z.object({
  orderId: z.string().min(1, "orderId is required"),
  amount: z.number().int("Amount must be an integer (paise)").min(100, "Minimum order is ₹1"),
  subtotal: z.number().int().min(0).optional(),
  shipping: z.number().int().min(0).optional(),
  address: shippingAddressSchema.optional(),
  items: z
    .array(
      z.object({
        productId: z.string(),
        variantId: z.string(),
        name: z.string(),
        price: z.number().int(),
        weight: z.number(),
        quantity: z.number().int().min(1),
        imageUrl: z.string().optional(),
      })
    )
    .optional(),
})

export type CreateOrderRequest = z.infer<typeof createOrderRequestSchema>

// ─── Indian States (for dropdown) ───────────────────────────────────
export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman & Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
] as const
