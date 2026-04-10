const booksList = [
  {id: 0, name: 'study guide', image: '', link: ''},
  {id: 1, name: 'church manual', image: '', link: ''},
  {id: 2, name: 'church heritage', image: '', link: ''},
  {id: 3, name: 'the great controversy', image: '', link: ''}
]

export default function ResourcesComponent() {
  return (
    <section className="church-resources p-10 bg-orange-700 rounded-4xl">
      <div className="">
        <p className="uppercase">church books and manuals</p>
        <h2>resources</h2>

        <div>
          {booksList.map(book => (
            <Book key={book.id} name={book.name}/>
          ))}
        </div>
      </div>
    </section>
  )
}

const Book = ({name}) => {
  return (
    <div className="p-20 bg-neutral-50 text-neutral-900">
      <h3>{name}</h3>
    </div>  
  )
}
