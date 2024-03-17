import CountryCard from '@/components/CounrtyCard'
import Search from '@/components/Search'
import { fetchCountries } from '@/lib/action'

export default async function Home({
  searchParams: { search }
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const data = await fetchCountries()
  const filteredData = data.filter(item => {
    if (!search) {
      return data
    }
    //@ts-ignore
    return item.name.common.toLocaleLowerCase().includes(search)
  })
  return (
    <main className='container '>
      <Search />
      <section className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {filteredData.map(item => (
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
