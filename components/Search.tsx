'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { fetchCountries } from '@/lib/action'

const formSchema = z.object({
  countryNames: z.string().min(2)
})

const Search = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  const reg = [
    { id: 1, name: 'All', unavailable: false },
    { id: 2, name: 'Africa', unavailable: false },
    { id: 3, name: 'Asia', unavailable: false },
    { id: 4, name: 'America', unavailable: false },
    { id: 5, name: 'Europe', unavailable: false },
    { id: 6, name: 'Oceanian', unavailable: false }
  ]
  const { data: CountriesData } = useQuery({
    queryKey: ['countries'],
    queryFn: () => fetchCountries
  })
  console.log(typeof CountriesData)
  return (
    <section className='mx-4 mt-12 flex flex-col gap-y-4 lg:flex-row lg:justify-between'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div>
        <Select>
          <SelectTrigger className=' w-full'>
            <SelectValue placeholder='All' />
          </SelectTrigger>
          <SelectContent>
            {reg.map(item => (
              <SelectItem
                className='relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50'
                key={item.id}
                value='all'
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div></div>
    </section>
  )
}

export default Search
