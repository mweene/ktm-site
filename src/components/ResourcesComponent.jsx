const booksList = [
  {id: 0, name: 'study guide', imageSrc: 'https://picsum.photos/501', link: ''},
  {id: 1, name: 'church manual', imageSrc: 'https://picsum.photos/502', link: ''},
  {id: 2, name: 'church heritage', imageSrc: 'https://picsum.photos/503', link: ''},
  {id: 3, name: 'the great controversy', imageSrc: 'https://picsum.photos/504', link: ''},
  {id: 4, name: 'the desire of ages', imageSrc: 'https://picsum.photos/505', link: ''}
]

import { ArrowLineDownIcon, CaretRightIcon } from "@phosphor-icons/react"

export default function ResourcesComponent() {
  return (
    <section className="church-resources place-self-center">
      <div className="text-[#101c2b]">
        <div className="mb-15 flex">
          <div className="w-fit">
            <p className="capitalize text-xl font-medium mb-5">resources</p>
            <h2 className="text-[4.5rem] md:w-4/6 font-semibold leading-none">Books and reference materials</h2>
          </div>
          <p className="place-self-end flex place-items-center">More resources <CaretRightIcon /> </p>
        </div>

        <div className="flex gap-4 mt-10">
          {booksList.map(book => (
            <Book 
              key={book.id} 
              name={book.name} 
              src={book.imageSrc}
              link={book.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const Book = ({name, src, link}) => {
  return (
    <div className="">
      <div className={`
        text-neutral-900 h-[17rem] bg-[#f7fbff] rounded-2xl
        w-[14rem] grid relative hover:bg-[#c2c8ce]
        transition-transform duration-500 hover:scale-102
      `}>
        <img src={src} alt={name} className="absolute h-full object-cover rounded-2xl z-2"/>
        <a link={link} className={`
          p-2 w-fit h-fit bg-[#fff] text-[#101c2b]
          cursor-pointer rounded-full self-end m-6 z-3
          transition-all duration-500 hover:bg-[#e5e6e8]
        `}>
          <ArrowLineDownIcon size={20} weight="bold"/>
        </a>
      </div>
    </div>
  )
}
