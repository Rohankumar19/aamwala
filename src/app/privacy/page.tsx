import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="max-w-[800px] mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-dark mb-4">Privacy Policy</h1>
        <p className="text-muted text-sm">Last updated: May 2026</p>
      </div>

      <div className="prose prose-sm max-w-none space-y-8 text-dark/80">
        <section>
          <h2 className="font-serif text-xl text-dark mb-3">1. Introduction</h2>
          <p className="leading-relaxed">SNS Javik Farm (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or place an order with us.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">2. Information We Collect</h2>
          <p className="leading-relaxed mb-3">We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and shipping address — provided when you place an order or create an account.</li>
            <li><strong>Payment Information:</strong> Payment details are processed securely through Razorpay. We do NOT store your credit card numbers, CVV, or UPI PINs on our servers.</li>
            <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages — collected automatically for analytics and site improvement.</li>
            <li><strong>Communication Data:</strong> Any messages, feedback, or support queries you send us via email, WhatsApp, or our contact form.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To process and fulfill your orders, including shipping notifications and delivery tracking.</li>
            <li>To communicate with you about your orders, send order confirmations, and respond to inquiries.</li>
            <li>To send seasonal updates, promotions, and harvest notifications (you can opt out at any time).</li>
            <li>To improve our website, products, and customer experience through analytics.</li>
            <li>To detect, prevent, and address fraud or technical issues.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">4. Sharing Your Information</h2>
          <p className="leading-relaxed mb-3">We do NOT sell your personal information. We may share limited data with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Logistics Partners:</strong> Your name, phone number, and address are shared with our courier partners solely for delivery purposes.</li>
            <li><strong>Payment Processor (Razorpay):</strong> Payment data is handled directly by Razorpay under their PCI DSS-compliant security standards.</li>
            <li><strong>Legal Authorities:</strong> If required by law, court order, or governmental request.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">5. Data Security</h2>
          <p className="leading-relaxed">We implement industry-standard security measures including SSL encryption for all data transmission, secure database storage, and limited access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">6. Cookies</h2>
          <p className="leading-relaxed">Our website uses essential cookies to maintain your cart session and preferences. We may also use analytics cookies (such as Google Analytics) to understand site usage. You can disable cookies in your browser settings, but this may affect website functionality.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">7. Your Rights</h2>
          <p className="leading-relaxed">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
          <p className="leading-relaxed mt-3">To exercise any of these rights, please contact us at <strong>samarthafarm@gmail.com</strong>.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">8. Third-Party Links</h2>
          <p className="leading-relaxed">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">9. Children&apos;s Privacy</h2>
          <p className="leading-relaxed">Our website is not intended for children under 18. We do not knowingly collect personal information from minors.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">10. Changes to This Policy</h2>
          <p className="leading-relaxed">We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date. Continued use of our website constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-dark mb-3">11. Contact Us</h2>
          <p className="leading-relaxed">If you have questions or concerns about this Privacy Policy, please reach out to us at <strong>samarthafarm@gmail.com</strong> or visit our <Link href="/faq" className="text-green hover:underline">FAQ page</Link>.</p>
        </section>
      </div>
    </div>
  )
}
