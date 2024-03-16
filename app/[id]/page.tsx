import BackButton from '@/components/BackButton'
import { fetchBorderNames, fetchCountryByName } from '@/lib/action'
import { Border } from '@/types/CountryData'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({
  params: { id }
}: {
  params: { id: string }
}) {
  const country = await fetchCountryByName(id)
  return {
    title: `${country.map((i: any) => i.name.common)}`,
    description: `This ${country.map((i: any) => i.name.common)} Page`,
    icons: {
      icon: `${country.map((i: any) => i.flags.svg)}`
    }
  }
}

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const country = await fetchCountryByName(id)
  const borders = country.map(
    (border: any) => border.borders?.slice(0, 3).join(',') || ''
  )

  let borderData: any = null
  if (borders[0] !== '') {
    //@ts-ignore
    borderData = await fetchBorderNames(borders)
  }
  return (
    <div>
      <BackButton />
      <div className='flex flex-col py-1 lg:px-20 lg:py-32 '>
        {country.map((i: any) => (
          <div
            key={i.common}
            className='flex flex-col px-4 md:grid md:grid-cols-2 md:px-12 '
          >
            <Image
              src={i.flags.svg}
              alt={i.flags.alt || 'the' + i.name.common + 'flag'}
              className='w-full rounded '
              width={1}
              height={1}
            />
            <div className='m-2 ml-7 flex flex-col items-start justify-center p-2 text-left md:p-8 lg:grid lg:grid-cols-2 lg:p-4'>
              <div className='flex flex-col items-start pb-12'>
                <p className='mt-6 pb-3 text-3xl font-bold lg:pb-6 lg:text-5xl '>
                  {i.name.common}
                </p>
                {i.name.nativeName ? (
                  <p className='py-1 font-medium lg:py-4 lg:text-xl'>
                    Native Name :
                    {Object.keys(i.name.nativeName)
                      .slice(0, 1)
                      .map(nativeCode => (
                        <span
                          key={nativeCode}
                          className='pl-3 font-normal opacity-90'
                        >
                          {i.name.nativeName[nativeCode].common}
                        </span>
                      ))}
                  </p>
                ) : (
                  <p className='py-1 font-semibold lg:py-4 lg:text-xl'>
                    Native Name:{' '}
                    <span className='pl-3 font-normal opacity-90'>N/A</span>
                  </p>
                )}
                <p className='py-1 font-medium lg:py-4 lg:text-xl'>
                  population
                  <span className='pl-3 font-normal opacity-90'>
                    {i.population.toLocaleString()}
                  </span>
                </p>
                <p className='font-medium lg:text-xl'>
                  Region :{' '}
                  <span className='pl-3 font-normal opacity-90'>
                    {i.region}
                  </span>
                </p>
                {i.subregion ? (
                  <p className='py-1 font-semibold lg:py-4 lg:text-xl'>
                    Sub Region:{' '}
                    <span className='pl-3 font-normal opacity-90'>
                      {i.subregion}
                    </span>
                  </p>
                ) : (
                  <p className='py-1 font-semibold lg:py-4 lg:text-xl'>
                    Sub Region:{' '}
                    <span className='pl-3 font-normal opacity-90'>N/A</span>
                  </p>
                )}
                {i.capital ? (
                  <p className='py-1 font-semibold lg:py-4 lg:text-xl'>
                    Capital:
                    <span className='font-normal opacity-90'>
                      {i.capital && i.capital[0]}
                    </span>
                  </p>
                ) : (
                  <p className='py-1 font-semibold lg:py-4 lg:text-xl'>
                    Capital:{' '}
                    <span className='pl-3 font-normal opacity-90'>N/A</span>
                  </p>
                )}
              </div>
              <div>
                <div className='lg:py-24'>
                  <p className='py-1 font-semibold lg:py-4 lg:text-xl'>
                    Top Level Domain:{' '}
                    <span className='pl-3 font-normal opacity-90'>{i.tld}</span>
                  </p>
                  {i.currencies ? (
                    <p className='py-1 font-semibold lg:py-4 lg:text-xl'>
                      Currencies:
                      {Object.keys(i.currencies).map(currencyCode => (
                        <span
                          key={currencyCode}
                          className='pl-3 font-normal opacity-90 '
                        >
                          {i.currencies[currencyCode].name}
                        </span>
                      ))}
                    </p>
                  ) : (
                    <p className='py-1 font-semibold lg:py-4 lg:text-xl'>
                      Currencies:{' '}
                      <span className='font-normal opacity-90'>N/A</span>
                    </p>
                  )}
                  {i.languages ? (
                    <p className='py-1 pb-10 font-semibold lg:py-4 lg:text-xl'>
                      Languages:{' '}
                      {Object.keys(i.languages)
                        .slice(0, 3)
                        .map(
                          (
                            languageKey: any,
                            index: number,
                            array: string[]
                          ) => (
                            <span
                              key={languageKey}
                              className='font-normal opacity-90'
                            >
                              {i.languages[languageKey]}
                              {index !== array.length - 1 && ', '}
                            </span>
                          )
                        )}
                    </p>
                  ) : (
                    <p className='py-1 font-semibold lg:py-4 lg:text-xl'>
                      Languages:{' '}
                      <span className='font-normal opacity-90'>N/A</span>
                    </p>
                  )}
                  <p className='whitespace-nowrap py-7 font-semibold lg:text-xl'>
                    Border Countries:
                  </p>
                  {borderData &&
                    borderData.map((border: Border) => (
                      <div className='flex' key={border.name.common}>
                        <Link
                          href={`/${border.name.common}`}
                          key={border.name.common}
                          className=' m-1 w-full rounded-md border bg-white px-4  py-2 text-center font-light shadow-md dark:border-none dark:bg-[#2b3945] lg:py-4'
                        >
                          {border.name.common}
                        </Link>
                      </div>
                    ))}
                  {!borderData && (
                    <h2 className='lg:text-xl'>No border countries 😟</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
