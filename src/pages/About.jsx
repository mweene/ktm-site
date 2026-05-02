function Jumbotron() {
  return (
    <div className="h-[50dvh] px-20 py-15 text-white bg-[#101c2b] grid">
      <h1 className="capitalize text-[4.5rem] font-semibold leading-none self-end">About us</h1>
    </div>
  )
}

export default function About() {
	return (
		<section className="text-[#101c2b]">
      <Jumbotron />
		</section>
	)
}

