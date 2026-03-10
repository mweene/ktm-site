import Logo from "../assets/footerLogo.png"
export default function Footer() {
  return (
    <div className="p-4 bg-neutral-300 grid grid-cols-3 gap-4">
		<img src={Logo} alt="logo" className="h-[20rem]" />
		<div className="p-4 bg-pink-300"></div>
		<div className="p-4 bg-pink-100"></div>
    </div>
  )
}
