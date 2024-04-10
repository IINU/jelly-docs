import Image from "next/image"
import logo from "../app/logo.png"

function LogomarkPaths() {
  return (
    <g fill="none" stroke="#38BDF8" strokeLinejoin="round" strokeWidth={3}>
      <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
      <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
    </g>
  )
}

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (

      <Image width={120} height={80} src={logo} alt="Jelly" />
  )
}

