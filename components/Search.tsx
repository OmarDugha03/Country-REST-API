'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState } from 'react'

const formSchema = z.object({
  countryNames: z.string().min(2)
})

const Search = ({ reg }: { reg?: string }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace, push } = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('search', term)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  const regions = [
    {
      id: 1,
      name: 'Africa'
    },
    {
      id: 2,
      name: 'America'
    },
    {
      id: 3,
      name: 'Asia'
    },
    {
      id: 4,
      name: 'Europe'
    },
    {
      id: 5,
      name: 'Oceania'
    }
  ]
  const [open, setOpen] = useState(false)
  return (
    <section className='mt-12   flex w-full flex-col gap-x-3 gap-y-4 lg:flex-row'>
      <div className='flex w-full items-center gap-x-3 gap-y-4'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full space-y-8 lg:w-[50%]'
          >
            <FormField
              control={form.control}
              name='countryNames'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Enter country name'
                      className='w-full'
                      {...field}
                      onChange={e => {
                        handleSearch(e.target.value)
                      }}
                      defaultValue={searchParams.get('query')?.toString()}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button>Search</Button>
      </div>
      <div className='relative me-5'>
        <Button
          onClick={() => setOpen(!open)}
          className='group h-12 w-44 bg-slate-100 text-xl text-black  dark:bg-slate-900  dark:text-slate-100'
        >
          <span className='text-center group-hover:text-black'>
            {reg || 'All '}
          </span>
        </Button>
        {open && (
          <div className='absolute top-[55px] z-20 flex h-[200px] w-44 cursor-pointer flex-col gap-y-3 rounded-md px-3 py-4   dark:bg-slate-900 dark:text-slate-100'>
            {regions.map(regs => (
              <span
                className='cursor-pointer hover:underline'
                key={regs.id}
                onClick={() => push(`/region/${regs.name}`)}
              >
                {regs.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Search
