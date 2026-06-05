import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-10 sm:px-8 sm:py-16">
      <div className="mb-12">
        <h1 className="font-serif text-3xl text-dark mb-4 sm:text-4xl">Terms of Service</h1>
        <p className="text-muted text-sm">Last updated: May 2026</p>
      </div>

      <div className="prose prose-sm max-w-none space-y-8 text-dark/80">
        <section>
          <h2 className="font-serif text-xl text-dark mb-3">1. Introduction</h2>
          <p className="leading-relaxed">Welcome to SNS Javik Farm. These Terms of Service govern your use of our website and purchase of products. By accessing our website or placing an order, you agree to be bound by these terms. Please read them carefully before making a purchase.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">2. Eligibility</h2>
          <p className="leading-relaxed">You must be at least 18 years of age or have parental/guardian consent to place an order on our website. By placing an order, you represent that the information you provide is accurate and complete.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">3. Products & Availability</h2>
          <p className="leading-relaxed">All products listed on our website are subject to seasonal availability. We make every effort to ensure accurate product descriptions, images, and pricing. However, since mangoes are a natural agricultural product, slight variations in size, color, and taste are inherent and do not constitute a defect. We reserve the right to limit quantities and discontinue any product without prior notice.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">4. Pricing & Payment</h2>
          <p className="leading-relaxed">All prices are listed in Indian Rupees (₹) and include applicable taxes. Fresh mangoes are currently exempt from GST under Indian tax law. Payment must be made in full at the time of ordering through our secure payment gateway (Razorpay). We accept UPI, Credit/Debit Cards, and Net Banking. We do not offer Cash on Delivery (COD) due to the perishable nature of our products.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">5. Orders & Cancellation</h2>
          <p className="leading-relaxed">Once an order is placed and payment is confirmed, it enters our processing queue. Orders can only be modified or cancelled within 2 hours of placement, as we begin harvest-to-dispatch preparation quickly. After this window, cancellations are not possible. We reserve the right to cancel orders due to stock unavailability, in which case a full refund will be issued.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">6. Shipping & Delivery</h2>
          <p className="leading-relaxed">We ship pan-India. Estimated delivery timelines are provided at checkout and are indicative. Delays may occur due to weather, courier disruptions, or remote pin codes. SNS Javik Farm is not liable for delays caused by third-party logistics partners, but we will actively assist in tracking and resolving delivery issues.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">7. Perishable Goods Disclaimer</h2>
          <p className="leading-relaxed">Mangoes are highly perishable natural products. We pack them at optimal ripeness for transit, but once delivered, proper storage is the customer&apos;s responsibility. We are not responsible for spoilage caused by incorrect storage after delivery. Please refer to our storage guidelines on each product page.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">8. Intellectual Property</h2>
          <p className="leading-relaxed">All content on this website — including text, images, logos, and design — is the property of SNS Javik Farm and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">9. Limitation of Liability</h2>
          <p className="leading-relaxed">To the maximum extent permitted by law, SNS Javik Farm shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount paid for the specific order in question.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">10. Governing Law</h2>
          <p className="leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Samastipur, Bihar.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">11. Changes to Terms</h2>
          <p className="leading-relaxed">We reserve the right to update these Terms at any time. Changes will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">12. Contact Us</h2>
          <p className="leading-relaxed">If you have any questions about these Terms, please contact us at <strong>samarthafarm@gmail.com</strong> or visit our <Link href="/faq" className="text-green hover:underline">FAQ page</Link>.</p>
        </section>
      </div>
    </div>
  )
}
