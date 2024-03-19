import CountryCard from '@/components/CounrtyCard'
import Search from '@/components/Search'
import { Skeleton } from '@/components/ui/skeleton'
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
    } else if (item.name.common === 'Israel') {
      return null
    }

    return (
      item.name.common
        .toLocaleLowerCase()
        //@ts-ignore
        .includes(search.toLocaleLowerCase())
    )
  })
  return (
    <main className='container '>
      <Search />
      <section className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {!data ? (
          <div className='flex flex-col space-y-3'>
            <Skeleton className='h-[125px] w-[250px] rounded-xl' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-[250px]' />
              <Skeleton className='h-4 w-[200px]' />
            </div>
          </div>
        ) : (
          filteredData.map(item => (
            <CountryCard
              key={item.cca3}
              name={item.name.common}
              flag={item.flags.png}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          ))
        )}
      </section>
    </main>
  )
}
