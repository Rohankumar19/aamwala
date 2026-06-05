import Link from "next/link"

export default function ShippingPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-10 sm:px-8 sm:py-16">
      <div className="mb-12">
        <h1 className="font-serif text-3xl text-dark mb-4 sm:text-4xl">Shipping Policy</h1>
        <p className="text-muted text-sm">Last updated: May 2026</p>
      </div>

      <div className="bg-green-3 rounded-2xl p-6 border border-green/20 mb-10">
        <p className="text-green text-sm font-medium leading-relaxed">
          🚚 <strong>Farm-to-Door Promise:</strong> Every box is harvested, packed, and dispatched within 24 hours to ensure maximum freshness.
        </p>
      </div>

      <div className="prose prose-sm max-w-none space-y-8 text-dark/80">
        <section>
          <h2 className="font-serif text-xl text-dark mb-3">1. Where We Ship</h2>
          <p className="leading-relaxed">We currently deliver to serviceable pin codes across India. Major metro cities (Delhi, Mumbai, Bangalore, Kolkata, Chennai, Hyderabad, Pune, Ahmedabad) receive priority shipping. For remote or rural pin codes, delivery may take an additional 1-2 business days.</p>
          <p className="leading-relaxed mt-2"><strong>International Shipping:</strong> We do not currently ship outside India due to fresh agricultural produce export regulations.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">2. Shipping Charges</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Order Type</th>
                  <th className="text-left py-3 font-semibold text-dark">Shipping Fee</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Standard Order (any size)</td>
                  <td className="py-3">₹700 flat</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2">* No hidden charges. A flat delivery fee of ₹700 is shown at checkout before payment.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">3. Estimated Delivery Times</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-dark">Region</th>
                  <th className="text-left py-3 font-semibold text-dark">Estimated Delivery</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Bihar, Jharkhand, UP, West Bengal</td>
                  <td className="py-3">1-2 business days</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Delhi NCR, Mumbai, Pune, Kolkata</td>
                  <td className="py-3">2-3 business days</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Bangalore, Chennai, Hyderabad, Ahmedabad</td>
                  <td className="py-3">3-4 business days</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">North East, Remote / Rural Areas</td>
                  <td className="py-3">4-6 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2">* These are estimates. Actual delivery may vary due to weather, holidays, or courier disruptions.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">4. How We Pack Your Mangoes</h2>
          <p className="leading-relaxed">We take extreme care to ensure your mangoes arrive in perfect condition:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Eco-friendly corrugated carton boxes</strong> — sturdy enough to withstand courier handling.</li>
            <li><strong>Natural dried hay lining</strong> — cushions each mango individually against impact and allows the fruit to breathe.</li>
            <li><strong>No plastic wrapping</strong> — we are committed to sustainable, biodegradable packaging.</li>
            <li><strong>Semi-ripe packing</strong> — mangoes are packed at optimal semi-ripe stage so they ripen naturally during transit and arrive at perfect eating ripeness.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">5. Order Tracking</h2>
          <p className="leading-relaxed">Once your order is dispatched, you will receive:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>An <strong>email notification</strong> with your tracking number and courier partner details.</li>
            <li>A <strong>WhatsApp message</strong> with a direct tracking link.</li>
            <li>You can also track your order by logging into your account on our website.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">6. Delivery Attempts</h2>
          <p className="leading-relaxed">Our courier partners will attempt delivery up to 2 times. If both attempts fail (e.g., no one available at the address, incorrect address, phone unreachable), the shipment may be returned. In such cases, the shipping fee is non-refundable. We strongly recommend providing an accurate phone number so the courier can coordinate delivery with you.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">7. What If My Order Is Delayed?</h2>
          <p className="leading-relaxed">If your order is significantly delayed beyond the estimated delivery window:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Our support team will proactively notify you and provide updated tracking information.</li>
            <li>If mangoes spoil due to an extended courier delay (beyond 48 hours past the expected delivery date), we will issue a full replacement at no cost.</li>
            <li>Contact us at <strong>samarthafarm@gmail.com</strong> or WhatsApp us at <strong>+91 93347 42670</strong> for immediate assistance.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">8. Scheduled Delivery</h2>
          <p className="leading-relaxed">If you need mangoes delivered by a specific date (e.g., for gifting or an event), you can add a delivery note during checkout with your preferred delivery week. We will plan our harvest and dispatch schedule to align as closely as possible with your requested date. Note that exact-day delivery cannot be guaranteed due to courier logistics.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">9. Contact Us</h2>
          <p className="leading-relaxed">For any shipping-related queries, please contact us at <strong>samarthafarm@gmail.com</strong> or visit our <Link href="/faq" className="text-green hover:underline">FAQ page</Link>.</p>
        </section>
      </div>
    </div>
  )
}
