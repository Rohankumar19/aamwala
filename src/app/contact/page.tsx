import Link from "next/link"
import {
  ArrowRight,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp Orders",
    detail: "+91 93347 42670",
    note: "Fastest for mango orders, gifting, and dispatch updates.",
    href: "https://wa.me/919334742670",
  },
  {
    icon: Phone,
    title: "Sales Desk",
    detail: "+91 93347 42670",
    note: "Speak with us for box availability, pricing, and delivery questions.",
    href: "tel:+919334742670",
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "samarthafarm@gmail.com",
    note: "Best for order support, enquiries, invoices, and feedback.",
    href: "mailto:samarthafarm@gmail.com",
  },
]

const enquiryTypes = [
  {
    icon: PackageCheck,
    title: "Home Orders",
    copy: "Fresh mango boxes for families, gifting, and seasonal enquiries.",
  },
  {
    icon: ShieldCheck,
    title: "Grade A & Grade B",
    copy: "Choose premium Grade A boxes or value-focused Grade B boxes.",
  },
  {
    icon: Clock3,
    title: "June-July Season",
    copy: "All mango varieties are planned for availability during June and July.",
  },
  {
    icon: Sparkles,
    title: "Gift Enquiries",
    copy: "Ask about seasonal boxes for friends, family, and festive gifting.",
  },
]

const servicePoints = [
  "All mangoes available in June-July",
  "Grade A and Grade B box options",
  "Careful hay packing",
  "No bulk orders offered right now",
]

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <section className="mx-auto max-w-[1200px] px-6 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl bg-dark p-8 text-white md:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,92,42,0.95)_0%,rgba(26,26,26,0.9)_58%,rgba(245,166,35,0.34)_100%)]" />
            <div className="relative z-10 flex min-h-[500px] flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow/40 bg-yellow/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow">
                  <Headphones size={15} />
                  Contact SNS Javik Farm
                </div>
                <h1 className="max-w-2xl font-serif text-4xl font-bold leading-[1.06] md:text-6xl">
                  Mango orders, support, and enquiries in one place.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/78 md:text-lg">
                  Whether you are ordering a family box, planning a gift, or checking availability, our team helps you get the right mangoes during the June-July harvest window.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/12 bg-white/8 p-4">
                  <PackageCheck className="mb-3 text-yellow" size={22} />
                  <p className="text-sm font-semibold text-white">Fresh Packing</p>
                  <p className="mt-1 text-xs text-white/65">Sorted close to dispatch</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/8 p-4">
                  <ShieldCheck className="mb-3 text-yellow" size={22} />
                  <p className="text-sm font-semibold text-white">Quality Promise</p>
                  <p className="mt-1 text-xs text-white/65">Support after delivery</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/8 p-4">
                  <Clock3 className="mb-3 text-yellow" size={22} />
                  <p className="text-sm font-semibold text-white">Quick Response</p>
                  <p className="mt-1 text-xs text-white/65">10 AM to 7 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 shadow md:p-8">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-green">Enquiry form</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-dark">Tell us what you need</h2>
            </div>

            <form action="mailto:samarthafarm@gmail.com" method="post" encType="text/plain" className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Name
                  <input name="name" className="h-12 rounded-xl border border-border bg-white px-4 text-sm font-normal outline-none transition-colors focus:border-green" type="text" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Phone
                  <input name="phone" className="h-12 rounded-xl border border-border bg-white px-4 text-sm font-normal outline-none transition-colors focus:border-green" type="tel" placeholder="+91" />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-dark">
                Email
                <input name="email" className="h-12 rounded-xl border border-border bg-white px-4 text-sm font-normal outline-none transition-colors focus:border-green" type="email" placeholder="you@company.com" />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Inquiry Type
                  <select name="inquiryType" className="h-12 rounded-xl border border-border bg-white px-4 text-sm font-normal outline-none transition-colors focus:border-green">
                    <option>Order support</option>
                    <option>New mango box enquiry</option>
                    <option>Grade A mango enquiry</option>
                    <option>Grade B mango enquiry</option>
                    <option>Gift box enquiry</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Quantity
                  <select name="quantity" className="h-12 rounded-xl border border-border bg-white px-4 text-sm font-normal outline-none transition-colors focus:border-green">
                    <option>1-5 boxes</option>
                    <option>6-25 boxes</option>
                    <option>Need guidance</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-dark">
                Message
                <textarea name="message" className="min-h-32 resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm font-normal leading-6 outline-none transition-colors focus:border-green" placeholder="Share your city, mango variety, grade preference, quantity, or preferred delivery week." />
              </label>

              <button className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-2 hover:shadow-[0_8px_24px_rgba(26,92,42,0.22)]" type="submit">
                Send Inquiry
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-8 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-border bg-white p-6 shadow transition-all hover:-translate-y-1 hover:border-green/30 hover:shadow-2"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-3 text-green">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold text-dark">{card.title}</h3>
                <p className="mt-2 text-sm font-semibold text-green">{card.detail}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{card.note}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-dark transition-colors group-hover:text-green">
                  Connect now
                  <ArrowRight size={16} />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-8 px-6 pb-16 pt-4 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-green">Seasonal mango support</p>
          <h2 className="mt-3 max-w-lg font-serif text-3xl font-bold leading-tight text-dark md:text-4xl">
            Built for households, gifting, and seasonal mango lovers.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
            We coordinate availability, packing, dispatch timing, and post-delivery support so customers can plan confidently through mango season. Bulk orders are not offered right now.
          </p>

          <div className="mt-8 rounded-2xl border border-green/15 bg-green-3 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-green">
                <MapPin size={21} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-dark">Farm Office</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  SNS Javik Farm, Samartha, Samastipur, Bihar
                </p>
                <p className="mt-3 text-sm font-semibold text-green">
                  Support hours: 10 AM to 7 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {enquiryTypes.map((type) => {
            const Icon = type.icon

            return (
              <div key={type.title} className="rounded-2xl border border-border bg-white p-6 shadow">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-2 text-orange">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold text-dark">{type.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{type.copy}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-10 md:px-8">
        <div className="rounded-3xl bg-dark p-6 text-white md:p-8">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-yellow">Before harvest gets booked</p>
              <h2 className="mt-2 font-serif text-3xl font-bold">Plan your mango requirement early.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {servicePoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm font-medium text-white/82">
                  <ShieldCheck className="shrink-0 text-yellow" size={18} />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
