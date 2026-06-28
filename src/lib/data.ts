export interface PriceVariant {
  id: string;
  weight: number;
  price: number; // in paise
  grade: "Grade A" | "Grade B";
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
  { id: "v1", weight: 3, price: 90000, grade: "Grade A" },
  { id: "v2", weight: 5, price: 150000, grade: "Grade A" },
  { id: "v3", weight: 10, price: 300000, grade: "Grade A" },
  { id: "v4", weight: 3, price: 60000, grade: "Grade B" },
  { id: "v5", weight: 5, price: 100000, grade: "Grade B" },
  { id: "v6", weight: 10, price: 200000, grade: "Grade B" }
];

export const products: MangoProduct[] = [
  {
    id: "1",
    name: "Dudhiya Maldah",
    slug: "dudhiya-maldah",
    origin: "Samartha, Samastipur",
    imageUrl: "/Dudhiya_maldah.jpg",
    tasteNote: "The 'Milky Malda' offers exceptional juiciness with a completely fiberless, creamy texture and sweet flavor.",
    status: "SOLD_OUT",
    sweetness: 92,
    aroma: 85,
    fiberLevel: 2,
    isGITagged: false,
    season: "June-July",
    shelfLife: "4-6 days",
    packingType: "Carton Box",
    bestFor: "Eating fresh, Desserts",
    priceVariants: defaultPriceVariants,
    nutritionInfo: `**Calories**: Approximately 60 calories
**Carbohydrates**: About 15g, primarily from natural sugars
**Dietary Fiber**: Roughly 1.6g, beneficial for digestive health
**Protein**: Approximately 0.8g
**Fat**: Minimal, less than 0.4g
**Vitamin C**: Provides about 36mg, essential for immune function and skin health
**Vitamin A**: Offers around 54 µg RAE, crucial for vision and immune health
**Vitamin E**: Contains approximately 0.9mg, contributing to skin and eye health
**Folate (Vitamin B9)**: Around 43µg, important for cell growth and metabolism
**Potassium**: Contains about 168mg, vital for maintaining electrolyte balance and nerve function
**Magnesium**: Provides about 10mg, necessary for muscle and nerve functions
**Calcium**: Approximately 11mg, important for bone health
**Antioxidants**: Rich in aromatic and antioxidant compounds; its fiberless, creamy nature and exceptionally sweet flavor with minimal acidity justify its "milky" designation.

*Note: The exact nutritional content can vary based on the mango's size, ripeness, and growing conditions. Dudhiya Malda-specific lab data is limited; values are based on standard mango composition.*`
  },
  {
    id: "2",
    name: "Mallika",
    slug: "mallika",
    origin: "Samartha, Samastipur",
    imageUrl: "/malika.png",
    tasteNote: "Fiberless fruit with prominent citrus, melon, and honey notes and is exceptionally sweet.",
    status: "IN_SEASON",
    sweetness: 90,
    aroma: 88,
    fiberLevel: 3,
    isGITagged: false,
    season: "June-July",
    shelfLife: "5-7 days",
    packingType: "Carton Box",
    bestFor: "Eating fresh, Smoothies",
    priceVariants: defaultPriceVariants,
    nutritionInfo: `**Calories**: Approximately 60 calories
**Carbohydrates**: About 15g, primarily from sugars
**Dietary Fiber**: Roughly 1.6g, beneficial for digestive health
**Protein**: Approximately 0.8g
**Fat**: Minimal, less than 0.4g
**Vitamin C**: Provides about 45mg, essential for immune function and skin health
**Vitamin A**: Offers around 1000 IU, crucial for vision and immune health
**Vitamin E**: Contains trace amounts, contributing to skin and eye health
**Folate (Vitamin B9)**: Around 43µg, important for cell growth and metabolism
**Potassium**: Contains about 170mg, vital for maintaining electrolyte balance and nerve function
**Magnesium**: Provides about 10mg, necessary for muscle and nerve functions
**Calcium**: Approximately 11mg, important for bone health
**Antioxidants**: Rich in antioxidants and phytochemicals that fight free radicals and prevent cell damage; the fiber content also helps regulate blood sugar levels and promote satiety.

*Note: The exact nutritional content can vary based on the mango's size, ripeness, and growing conditions.*`
  },
  {
    id: "3",
    name: "Sinduri",
    slug: "sinduri",
    origin: "Samartha, Samastipur",
    imageUrl: "/sindoori.png",
    tasteNote: "Pale orange flesh that is dense, creamy, and slightly fibrous with a tender, succulent consistency.",
    status: "IN_SEASON",
    sweetness: 85,
    aroma: 80,
    fiberLevel: 10,
    isGITagged: false,
    season: "June-July",
    shelfLife: "4-6 days",
    packingType: "Carton Box",
    bestFor: "Eating fresh, Juicing",
    priceVariants: defaultPriceVariants,
    nutritionInfo: `**Calories**: Approximately 60–65 calories
**Carbohydrates**: About 15–16g, primarily from natural sugars
**Dietary Fiber**: Roughly 1.6g, supporting gut health
**Protein**: Approximately 0.8g
**Fat**: Minimal, less than 0.4g
**Vitamin C**: Provides about 60–66% of the daily value, supporting immune function and collagen formation
**Vitamin A**: Offers around 15–21% of the daily value, essential for vision and immunity
**Vitamin B6**: A notable source of Vitamin B6, which supports brain health and metabolism
**Folate (Vitamin B9)**: Around 43µg, important for cell growth
**Potassium**: Contains about 168mg, vital for heart and nerve function
**Magnesium**: Provides about 10mg, necessary for muscle functions
**Calcium**: Approximately 11mg, supporting bone health
**Antioxidants**: Releases a subtle, fruity, and sweet aroma reminiscent of apricots and honey; rich in carotenoids, especially notable for the high red-pigment content in its skin.

*Note: The exact nutritional content can vary based on the mango's size, ripeness, sun exposure, and growing conditions.*`
  },
  {
    id: "4",
    name: "Dushehri",
    slug: "dushehri",
    origin: "Samartha, Samastipur",
    imageUrl: "/dusheri.png",
    tasteNote: "Exquisite taste and pleasant aroma with sweet and firm fiberless flesh.",
    status: "SOLD_OUT",
    sweetness: 88,
    aroma: 92,
    fiberLevel: 4,
    isGITagged: false,
    season: "June-July",
    shelfLife: "5-7 days",
    packingType: "Carton Box",
    bestFor: "Eating fresh, Aamras",
    priceVariants: defaultPriceVariants,
    nutritionInfo: `**Calories**: Approximately 60 calories
**Carbohydrates**: About 15g, primarily from natural sugars
**Dietary Fiber**: Roughly 1.6g
**Protein**: Approximately 0.8g
**Fat**: Minimal
**Vitamin C**: Good source for immune health
**Vitamin A**: Important for vision and skin
**Potassium**: Helps maintain electrolyte balance

*Note: Dushehri is highly prized for its exceptionally sweet and fragrant profile.*`
  },
  {
    id: "5",
    name: "Chausa",
    slug: "chausa",
    origin: "Samartha, Samastipur",
    imageUrl: "/chausa.jpg",
    tasteNote: "Exceptionally sweet and juicy with a rich aroma.",
    status: "IN_SEASON",
    sweetness: 95,
    aroma: 90,
    fiberLevel: 2,
    isGITagged: false,
    season: "July-August",
    shelfLife: "4-6 days",
    packingType: "Carton Box",
    bestFor: "Eating fresh, Juicing",
    priceVariants: defaultPriceVariants,
    nutritionInfo: `**Calories**: Approximately 60 calories
**Carbohydrates**: About 15g, primarily from natural sugars
**Dietary Fiber**: Roughly 1.6g
**Protein**: Approximately 0.8g
**Fat**: Minimal
**Vitamin C**: Good source for immune health
**Vitamin A**: Important for vision and skin
**Potassium**: Helps maintain electrolyte balance

*Note: Chausa is famous for its exceptional sweetness and rich aroma.*`
  }
]
