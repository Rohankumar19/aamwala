export interface PriceVariant {
  id: string;
  weight: number;
  price: number; // in paise
  grade: "Grade A" | "Grade B";
  label: string;
}

export interface MangoProduct {
  id: string;
  name: string;
  slug: string;
  origin: string;
  tasteNote: string;
  status: "IN_SEASON" | "PREORDER" | "SOLD_OUT" | "COMING_SOON";
  sweetness: number;
  aroma: number;
  fiberLevel: number;
  isGITagged: boolean;
  season: string;
  shelfLife: string;
  packingType: string;
  bestFor: string;
  priceVariants: PriceVariant[];
  nutritionInfo?: string;
  imageUrl?: string;
}

const defaultPriceVariants: PriceVariant[] = [
  { id: "v1", weight: 3, price: 90000, grade: "Grade A", label: "A grade mango 3kg approx 12 mangos" },
  { id: "v2", weight: 5, price: 150000, grade: "Grade A", label: "A grade mango 5kg approx 20 mangos" },
  { id: "v3", weight: 10, price: 300000, grade: "Grade A", label: "A grade mango 10kg approx 40 mangos" },
  { id: "v4", weight: 3, price: 60000, grade: "Grade B", label: "B grade mango 3kg approx 15 mangos" },
  { id: "v5", weight: 5, price: 100000, grade: "Grade B", label: "B grade mango 5kg approx 25 mangos" },
  { id: "v6", weight: 10, price: 200000, grade: "Grade B", label: "B grade mango 10kg approx 50 mangos" }
];

const varietiesList = [
  "Dudhiya Maldah",
  "Langra",
  "Maldah",
  "Dushehri",
  "Swarnrekha",
  "Chausa",
  "Malika",
  "Sinduri",
  "Shukul",
  "Bambaiya"
];

export const products: MangoProduct[] = varietiesList.map((name, i) => ({
  id: String(i + 1),
  name: name,
  slug: name.toLowerCase().replace(/ /g, '-'),
  origin: "India",
  tasteNote: "Delicious authentic Indian mango.",
  status: "SOLD_OUT",
  sweetness: 90 + (i % 5),
  aroma: 85 + (i % 5),
  fiberLevel: 5 + (i % 3),
  isGITagged: false,
  season: "June-July",
  shelfLife: "4-6 days",
  packingType: "Carton Box",
  bestFor: "Eating fresh",
  priceVariants: defaultPriceVariants,
  nutritionInfo: `**Calories**: Approximately 60 calories
**Carbohydrates**: About 15g, primarily from natural sugars
**Dietary Fiber**: Roughly 1.6g, beneficial for digestive health
**Protein**: Approximately 0.8g
**Fat**: Minimal, less than 0.4g
**Vitamin C**: Provides about 36mg, essential for immune function and skin health
**Vitamin A**: Offers around 54 µg RAE, crucial for vision and immune health`
}));
