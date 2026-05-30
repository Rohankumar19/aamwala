import { redirect } from "next/navigation"

const farmMapUrl =
  "https://www.google.com/maps/place/Suresh+Nandan+Sinha%27s+Farm/data=!4m2!3m1!1s0x0:0x1186862d9eaf9566?sa=X&ved=1t:2428&ictx=111"

export default function AboutPage() {
  redirect(farmMapUrl)
}
