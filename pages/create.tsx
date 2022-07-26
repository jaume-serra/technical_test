import type { NextPage } from 'next'
import Head from 'next/head'
import { Icon } from '@iconify/react';
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useState } from 'react';





const CreateBook: NextPage = () => {

  const { register,handleSubmit, formState:{isSubmitting} } = useForm()
  const [submit, setSubmit] = useState(false)



  const submitForm = async (formData) => {

    const data = {
      title: formData.title,
      author: formData.author,
      description: formData.description,
      price: formData.price,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = `/api/createBook`
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSONdata,
    }
    try{
      const res = await fetch(endpoint, options)
      
    }catch(error){
      console.log('error :>> ', error);
    }
  }
  return (
    <div  style={{  
      height:"100%",
      backgroundImage: "url(/bg.png)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
     
    }}>
      <Head>
        <title >Llibre</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="flex flex-col h-full py-20">
       
        <section className='w-6/12 mx-auto'>

        <div className='flex items-center '>
          <Link href={`/`}>
            <Icon icon="akar-icons:arrow-back" className='bg-white  invisible sm:visible rounded-full p-2 h-8 w-8 text-amber-800 text-xl transition ease-in-out hover:scale-110 hover:cursor-pointer' />
          </Link>
          <h1 className="font-bold mx-auto shadow-xl text-4xl bg-white  text-amber-800 py-4 px-12  rounded-2xl">
                Informació del llibre
          </h1>
        </div>

          <div className='grid grid-cols-1  gap-6 my-10 bg-white p-6 rounded-lg '>

            <form onSubmit={ handleSubmit(submitForm) }>
              <div className='flex flex-col bg-gray-100  pb-5 gap-y-2 rounded-xl shadow-xl '>
                <div className='w-full h-64  rounded-t-lg'>
                  <img className='w-full h-full rounded-t-xl' src="/llibre3.jpeg" />
                </div>
                <div id="bookInfo" className='grid gap-y-2 px-4 py-2 text-xl '>
                  <label htmlFor="title" >Títol</label>
                  <input type="text" className='w-11/12 rounded-xl p-2' {...register("title", {required: true})} />
                  <label htmlFor="author" >Autor</label>
                  <input type="text" className='w-11/12 rounded-xl p-2' {...register("author", {required: true})} />
                  <label htmlFor="description" >Descripció</label>
                  <input type="text" className='w-11/12 rounded-xl p-2' {...register("description", {required: true})} />
                  <label htmlFor="price" >Preu</label>
                  <input type="text" className='w-11/12 rounded-xl p-2' {...register("price", {required: true})} />
                  { submit && <p className='text-sm text-green-700'>El llibre s&aposha creat correctament</p>  }
                  <div className='flex gap-x-6 my-5 mx-auto'>
                    <button className="flex w-36  my-5 px-4 py-2 shadow-xl hover:shadow-3xl bg-white text-xl gap-4 items-center rounded-2xl hover:bg-green-500 hover:text-white  transition ease-in-out hover:scale-105 hover:cursor-pointer" disabled={isSubmitting} onClick={()=>setSubmit(true)} type='submit'>
                      {isSubmitting ? <div className='flex gap-4 px-2'>
                        Loading... 
                        </div> : "Guardar"}
                      <Icon icon="bi:save" />

                    </button>
                    <div className='flex gap-4 items-center w-36 shadow-xl hover:shadow-3xl my-5 px-4 py-2 bg-white text-xl  rounded-2xl hover:bg-amber-800 hover:text-white   transition ease-in-out hover:scale-105 hover:cursor-pointer'>
                     <Link href={`/`}>
                        <button>Tornar</button>
                     </Link>
                     <Link href={'/'}>
                        <Icon icon="akar-icons:arrow-back" />
                     </Link>

                    </div>
                  </div>

                 
                </div>
              </div>
            </form>            
          </div>
        </section>   
      </main>

    </div>
  )
}

export default CreateBook



