import CountryCard from '@/components/CounrtyCard'
import Search from '@/components/Search'
import { fetchCountries } from '@/lib/action'

export default async function Home({}) {
  const data = await fetchCountries()
  console.log(data)
  return (
    <main className='container '>
      <Search />
      <section className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {data.map(item => (
          <CountryCard
            key={item.cca3}
            name={item.name.common}
            flag={item.flags.png}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        ))}
      </section>
    </main>
  )
}
