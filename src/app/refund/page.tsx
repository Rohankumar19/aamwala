import Link from "next/link"

export default function RefundPage() {
  return (
    <div className="max-w-[800px] mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-dark mb-4">Refund Policy</h1>
        <p className="text-muted text-sm">Last updated: May 2026</p>
      </div>

      <div className="bg-green-3 rounded-2xl p-6 border border-green/20 mb-10">
        <p className="text-green text-sm font-medium leading-relaxed">
          🛡️ <strong>Our Promise:</strong> We stand behind the quality of every mango we ship. If you receive damaged or spoiled fruit, we will make it right — guaranteed.
        </p>
      </div>

      <div className="prose prose-sm max-w-none space-y-8 text-dark/80">
        <section>
          <h2 className="font-serif text-xl text-dark mb-3">1. Perishable Goods — No Physical Returns</h2>
          <p className="leading-relaxed">Since mangoes are a highly perishable agricultural product, we do <strong>not accept physical returns</strong>. Instead, we offer refunds or free replacements based on photographic evidence of damage or spoilage. This policy ensures we can resolve issues quickly without requiring you to ship back perishable fruit.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">2. When Are You Eligible for a Refund?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Damaged in transit:</strong> If more than 15% of the mangoes in your box arrive visibly crushed, punctured, or leaking.</li>
            <li><strong>Spoiled on arrival:</strong> If mangoes arrive rotten, fermented, or with fungal growth that clearly occurred before delivery.</li>
            <li><strong>Wrong product:</strong> If you receive a different variety or box size than what you ordered.</li>
            <li><strong>Missing items:</strong> If fewer boxes were delivered than what you paid for.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">3. What Is NOT Covered?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Natural variation in mango size, color, or sweetness — these are inherent to natural farming.</li>
            <li>Mangoes that arrived firm/unripe — these are intentionally packed semi-ripe for safe transit and will ripen in 2-3 days (see our <Link href="/faq" className="text-green hover:underline">storage tips</Link>).</li>
            <li>Spoilage caused by improper storage after delivery (e.g., leaving mangoes in direct sunlight or extreme heat).</li>
            <li>Claims raised after the 12-hour reporting window.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">4. How to Report an Issue</h2>
          <div className="bg-yellow-3 rounded-xl p-5 border border-yellow/30">
            <p className="text-dark text-sm font-medium mb-3">⏰ You must report within <strong>12 hours</strong> of receiving your delivery.</p>
            <ol className="list-decimal pl-6 space-y-2 text-sm">
              <li>Take clear photographs of the damaged/spoiled mangoes and the outer packaging.</li>
              <li>Email us at <strong>samarthafarm@gmail.com</strong> or WhatsApp us at <strong>+91 93347 42670</strong>.</li>
              <li>Include your <strong>Order ID</strong>, delivery date, and a brief description of the issue.</li>
              <li>Our team will review and respond within 4-6 hours.</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">5. Refund or Replacement — Your Choice</h2>
          <p className="leading-relaxed mb-3">Once your claim is verified, you can choose:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-border rounded-xl p-5">
              <h4 className="font-semibold text-dark mb-2">💰 Full/Partial Refund</h4>
              <p className="text-sm text-muted">Refund is processed to your original payment method within 24 hours of approval. It reflects in your account within 3-5 business days.</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-5">
              <h4 className="font-semibold text-dark mb-2">📦 Free Replacement</h4>
              <p className="text-sm text-muted">We will dispatch a fresh replacement box at zero additional cost, typically within 24-48 hours of claim approval.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">6. Refund Processing Timeline</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Payment Method</th>
                  <th className="text-left py-3 font-semibold text-dark">Refund Timeline</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">UPI (GPay, PhonePe, Paytm)</td>
                  <td className="py-3">1-2 business days</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Credit / Debit Card</td>
                  <td className="py-3">3-5 business days</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Net Banking</td>
                  <td className="py-3">3-7 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">7. Order Cancellation Refunds</h2>
          <p className="leading-relaxed">If you cancel your order within the 2-hour cancellation window (see our <Link href="/terms" className="text-green hover:underline">Terms of Service</Link>), a full refund will be issued within 24 hours. After the 2-hour window, cancellations are not possible as orders are already being prepared.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">8. Contact Us</h2>
          <p className="leading-relaxed">For any refund-related queries, please contact us at <strong>samarthafarm@gmail.com</strong> or visit our <Link href="/faq" className="text-green hover:underline">FAQ page</Link>.</p>
        </section>
      </div>
    </div>
  )
}
