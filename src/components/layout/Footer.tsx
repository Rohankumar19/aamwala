import Link from "next/link"

const farmMapUrl = "https://www.google.com/maps/place/Suresh+Nandan+Sinha's+Farm/data=!4m2!3m1!1s0x0:0x1186862d9eaf9566?sa=X&ved=1t:2428&ictx=111"

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 pt-12 pb-6 mt-16 rounded-t-3xl px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1200px] mx-auto mb-8">
        <div className="md:col-span-2">
          <h4 className="text-white font-serif text-xl mb-3">SNS Javik Farm</h4>
          <p className="text-sm">
            SNS Javik Farm, Samartha, Samastipur, Bihar.
          </p>
          <Link href={farmMapUrl} className="mt-3 inline-flex text-sm text-yellow hover:underline" target="_blank" rel="noreferrer">
            View farm on Google Maps
          </Link>
        </div>
        
        <div>
          <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Explore</h5>
          <ul className="flex flex-col gap-2">
            <li><Link href="/shop" className="text-sm hover:text-yellow transition-colors">All Mangoes</Link></li>
            <li><Link href="/about" className="text-sm hover:text-yellow transition-colors">Our Story</Link></li>
            <li><Link href="/faq" className="text-sm hover:text-yellow transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="text-sm hover:text-yellow transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Legal</h5>
          <ul className="flex flex-col gap-2">
            <li><Link href="/terms" className="text-sm hover:text-yellow transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="text-sm hover:text-yellow transition-colors">Privacy Policy</Link></li>
            <li><Link href="/refund" className="text-sm hover:text-yellow transition-colors">Refund Policy</Link></li>
            <li><Link href="/shipping" className="text-sm hover:text-yellow transition-colors">Shipping Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-xs pt-6 mt-6 border-t border-white/10">
        &copy; {new Date().getFullYear()} SNS Javik Farm. All rights reserved.
      </div>
    </footer>
  )
}
