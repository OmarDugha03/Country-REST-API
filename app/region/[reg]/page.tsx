import CountryCard from '@/components/CounrtyCard'
import Search from '@/components/Search'
import { fetchByReg } from '@/lib/action'

const page = async ({
  params: { reg },
  searchParams: { search }
}: {
  params: { reg: string }
  searchParams: { search: string }
}) => {
  const data = await fetchByReg(reg)
  const filteredData = data.filter(item => {
    if (!search) {
      return data
    }
    //@ts-ignore
    return item.name.common
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase())
  })
  return (
    <>
      <Search reg={reg} />
      <div className='container mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {filteredData.map((i: any) => (
          <CountryCard
            key={i.name.common}
            name={i.name.common}
            flag={i.flags.png}
            population={i.population}
            region={i.region}
            capital={i.capital}
          />
        ))}
      </div>
    </>
  )
}

export default page
