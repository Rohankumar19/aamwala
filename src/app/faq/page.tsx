import Link from "next/link"

const faqs = [
  {
    category: "🛒 Orders & Purchasing",
    questions: [
      {
        q: "How do I place an order?",
        a: "Simply browse our Shop, select your desired mango variety and box size (3kg, 5kg, or 10kg), click 'Add to Cart', and proceed to checkout where you can securely pay via UPI, Card, or Netbanking."
      },
      {
        q: "Can I modify or cancel my order after placing it?",
        a: "Orders can only be modified or cancelled within 2 hours of placement, as we begin processing and packing quickly. Please contact support immediately if you need to make changes."
      },
      {
        q: "Do you offer bulk orders right now?",
        a: "No, we do not offer bulk orders right now. Please order from the available box sizes listed on the Shop page."
      },
      {
        q: "Is there a seasonal availability calendar?",
        a: "Yes. All mango varieties are planned for availability in June and July. You can check the specific season for each variety on its product page."
      },
      {
        q: "How do I know which mango variety to choose?",
        a: "If you want exceptional juiciness, choose Dudhiya Maldah. For a rich, melon/honey sweetness, go for Mallika. For a dense, slightly fibrous and colorful mango, try Sinduri. If you love classic, firm, and extremely fragrant mangoes, Dushehri is perfect."
      }
    ]
  },
  {
    category: "🚚 Shipping & Delivery",
    questions: [
      {
        q: "Which cities/states do you deliver to?",
        a: "We deliver pan-India to all major cities and pin codes. If your location is extremely remote, delivery might take an extra 1-2 days."
      },
      {
        q: "How long does delivery take after ordering?",
        a: "Orders are dispatched within 24 hours of harvest. Standard delivery takes 2-4 business days depending on your location."
      },
      {
        q: "Do you offer same-day or next-day delivery?",
        a: "Next-day delivery is available for select metro cities. Same-day delivery is currently only available for local orders near our farm."
      },
      {
        q: "How are the mangoes packed to prevent damage during transit?",
        a: "We use sturdy, eco-friendly corrugated carton boxes lined with natural hay. This cushions the fruit against impact and allows them to breathe and naturally ripen during transit."
      },
      {
        q: "What happens if my order is delayed?",
        a: "We closely track all shipments. If an unavoidable transit delay occurs, our customer support team will notify you. We guarantee that if mangoes spoil due to extended courier delays, we will issue a replacement."
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, we only ship within India due to complex agricultural export regulations for fresh produce."
      },
      {
        q: "Can I schedule a specific delivery date?",
        a: "You can request a specific week for delivery in the order notes (ideal for gifting), and we will dispatch it to align as closely with that date as possible."
      }
    ]
  },
  {
    category: "💳 Payment & Pricing",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major Credit/Debit Cards, UPI (GPay, PhonePe, Paytm), and Net Banking via our secure Razorpay gateway."
      },
      {
        q: "Is Cash on Delivery (COD) available?",
        a: "No, we do not offer COD. Because mangoes are highly perishable, we only process prepaid orders to ensure fast, confirmed deliveries."
      },
      {
        q: "Are there any hidden charges or delivery fees?",
        a: "The prices listed on our product pages are transparent. A flat delivery fee of ₹700 is added at checkout, with no hidden charges."
      },
      {
        q: "Is GST included in the price?",
        a: "Yes, fresh agricultural produce like mangoes are currently exempt from GST, so the price you see is final."
      }
    ]
  },
  {
    category: "🥭 Product Quality & Varieties",
    questions: [
      {
        q: "Are your mangoes naturally ripened or chemically treated?",
        a: "Our mangoes are 100% naturally ripened. We NEVER use Calcium Carbide or any artificial ripening chemicals. They are packed semi-ripe and ripen naturally in the hay during transit."
      },
      {
        q: "What is the difference between Dudhiya Malda, Sinduri, and Mallika mangoes?",
        a: "Dudhiya Malda is known for its completely fiberless, 'milky' texture. Sinduri is smaller, visually striking with a red blush, and slightly fibrous. Mallika is a hybrid offering a unique honey and citrus flavor profile."
      },
      {
        q: "How do I know which season each variety is available in?",
        a: "Our website clearly marks availability on product pages. All mangoes are planned for availability in June and July."
      },
      {
        q: "What grades/sizes do you offer?",
        a: "We offer Grade A and Grade B mango boxes. Box sizes are available in 3kg, 5kg, and 10kg variants."
      },
      {
        q: "Are your mangoes organic?",
        a: "We practice natural farming. While we are not commercially certified 'Organic', we use traditional cow-dung compost, zero harmful chemical pesticides, and natural harvesting techniques."
      },
      {
        q: "How much pulp/weight is edible per fruit?",
        a: "Varieties like Dudhiya Malda and Mallika have a very thin seed (stone), yielding up to 75-80% edible pulp per fruit."
      }
    ]
  },
  {
    category: "📦 Packaging & Storage",
    questions: [
      {
        q: "How should I store the mangoes after receiving them?",
        a: "If they are still firm, leave them in the box with the hay at room temperature. Once they yield slightly to a gentle squeeze and smell sweet, they are ripe. Only refrigerate them AFTER they are fully ripe to extend their shelf life."
      },
      {
        q: "How long will the mangoes stay fresh after delivery?",
        a: "Once fully ripe, they will stay fresh for 4-6 days in the refrigerator. At room temperature, consume within 2-3 days of ripening."
      },
      {
        q: "How do I ripen mangoes at home if they arrive raw?",
        a: "We intentionally pack them semi-ripe to survive transit. Keep them inside the carton box in the natural hay, in a warm, dry place. Check them daily; they usually ripen perfectly in 2-3 days."
      },
      {
        q: "What kind of packaging do you use? Is it eco-friendly?",
        a: "Yes! We strictly avoid single-use plastics. We use biodegradable corrugated cardboard and natural dried hay from our farm for cushioning."
      }
    ]
  },
  {
    category: "🔁 Returns & Refunds",
    questions: [
      {
        q: "What if I receive damaged or spoiled mangoes?",
        a: "We stand by our quality. Since mangoes are perishable, slight transit bruising can happen. However, if more than 15% of your box is spoiled or completely damaged upon arrival, please take photos immediately and contact us within 12 hours of delivery."
      },
      {
        q: "What is your return/refund policy?",
        a: "Because this is fresh food, we do not accept physical returns. Instead, we offer partial or full refunds (or replacements) based on the photographic evidence of transit damage or spoilage provided within 12 hours of receiving the box."
      },
      {
        q: "How do I raise a complaint or claim?",
        a: "Email us at samarthafarm@gmail.com or WhatsApp us with your Order ID and clear pictures of the damaged fruit and the outer box."
      },
      {
        q: "How long does a refund take to process?",
        a: "Once approved, refunds are processed within 24 hours and will reflect in your original payment method in 3-5 business days."
      },
      {
        q: "Do you offer replacements instead of refunds?",
        a: "Yes, for heavily damaged boxes, we strongly prefer sending you a fresh replacement box immediately at zero additional cost to ensure you get to enjoy our mangoes."
      }
    ]
  },
  {
    category: "📞 Support & Contact",
    questions: [
      {
        q: "How can I contact customer support?",
        a: "You can reach us at samarthafarm@gmail.com or via our Contact page. We usually reply within a few hours."
      },
      {
        q: "What are your working hours?",
        a: "Our support team is available Monday to Saturday, 9:00 AM to 7:00 PM IST."
      },
      {
        q: "Do you have a WhatsApp or helpline number?",
        a: "Yes, you can WhatsApp us at +91 93347 42670 for quick queries regarding your order."
      },
      {
        q: "How do I track my order?",
        a: "Once dispatched, you will receive a tracking link via Email and WhatsApp. You can also log into your SNS Javik Farm account to view real-time status."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-10 sm:px-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-3xl text-dark mb-4 sm:text-4xl">Frequently Asked Questions</h1>
        <p className="text-muted">Everything you need to know about our mangoes, shipping, and policies.</p>
      </div>

      <div className="space-y-12">
        {faqs.map((section, idx) => (
          <div key={idx}>
            <h2 className="font-serif text-2xl text-green mb-6 border-b border-border pb-2">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((item, qIdx) => (
                <details key={qIdx} className="group bg-white border border-border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 p-4 text-dark font-medium hover:bg-green-3/30 transition-colors sm:p-5">
                    {item.q}
                    <span className="shrink-0 rounded-full bg-green-3 p-1.5 text-green sm:p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted border-t border-border/50 pt-4 bg-white">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-cream rounded-2xl p-5 border border-border text-center sm:mt-16 sm:rounded-3xl sm:p-8">
        <h3 className="font-serif text-xl mb-4">Quick Policy Links</h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <Link href="/terms" className="text-green hover:underline">Terms of Service</Link>
          <span className="hidden text-muted/30 sm:inline">|</span>
          <Link href="/privacy" className="text-green hover:underline">Privacy Policy</Link>
          <span className="hidden text-muted/30 sm:inline">|</span>
          <Link href="/refund" className="text-green hover:underline">Refund Policy</Link>
          <span className="hidden text-muted/30 sm:inline">|</span>
          <Link href="/shipping" className="text-green hover:underline">Shipping Policy</Link>
        </div>
      </div>
    </div>
  )
}
