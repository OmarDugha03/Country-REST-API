'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import Link from 'next/link'

import { fetchCountries } from '@/lib/action'
import { Button } from './ui/button'

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

  return (
    <section className='mx-4 mt-12 flex  flex-col gap-x-3 gap-y-4 lg:flex-row'>
      <div className='flex w-full items-center gap-x-3 gap-y-4'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-[50%] space-y-8'
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
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button>Search</Button>
      </div>
    </section>
  )
}

export default Search
