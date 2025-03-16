import CategoryItem from "../components/CategoryItem";


const categories = [
  { href: "/backpack", name: "BackPack", imageUrl: "/backpack.jpg"},
  { href: "/bicycle", name:"Bicycle", imageUrl: "/bicycle.jpg"},
  { href: "/boots", name: "Boots", imageUrl: "/boots.jpg"},
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.jpg"},
  { href: "/phone", name: "Phone", imageUrl: "/phone.jpg"},
  { href: "/toys", name: "Toys", imageUrl: "/toys.jpg"},
]

const HomePage = () => {
  return(
    <div className='relative min-h-screen text-black overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16'>
        <h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
          Explore Our Categories
        </h1>
        <p className='text-center text-xl text-gray-300 mb-12'>
          Find the latest products & trends
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {categories.map(category => (
            <CategoryItem
              category={category}
              key={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage;