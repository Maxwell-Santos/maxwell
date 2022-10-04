import AOS from 'aos';
import Image from 'next/future/image';
import Circle3 from '../../public/contact.svg';
import contact from '../../public/Frame 19.png';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TitleSection } from "./TitleSection";

export function Contact() {

  useEffect(() => {AOS.init()},[])


  const {register, handleSubmit, formState:{errors} } = useForm();

  function submit(event: any){
    const data = JSON.stringify(event)
    console.log(data)
    event.value = ''
  }
  
  const varName = errors?.name?.message
  const varEmail = errors?.email?.message
  const varFeedback = errors?.feedback?.message
  
  return (
    <section>
      <TitleSection title='Contato' />

      <div 
      className='w-[95%] lg:w-[70%] max-w-4xl my-10 flex items-center h-fit md:h-[400px] mx-auto bg-contact overflow-hidden rounded-xl'
      data-aos="fade-up"
      >
        <Image
        src={contact}
        alt="contact image"
        className='flex-1 object-cover overflow-hidden hidden md:block'
        />

        <form 
        onSubmit={handleSubmit(submit)}
        className='flex-[1.3] flex flex-col gap-3 p-6 px-5 md:px-10'
        >
          <label>
            <input 
            type="text" 
            {...register('name',{
              required: {
                value: true,
                message: "Qual seu vulgo?"
              }
            })} 
            placeholder='name'
            className='py-2 px-3 w-full rounded-md'
            />
          <span data-aos="fade-right">{varName?.toString()}</span>   
          </label>

          <label>
            <input 
            type="text" 
            {...register('email', {
              required: {
                value: true,
                message: "Insira um email válido"
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Por favor, insira um email válido"
              }
            })} 
            placeholder='max@exemplo.com'
            className='py-2 px-3 w-full rounded-md'
            />
          <span data-aos="fade-right">{varEmail?.toString()}</span>   
          </label>

          <label>
            <textarea 
            {...register('feedback', {
              required: {
                value: true,
                message: ""
              },
              maxLength: {
                value: 600,
                message: "Por favor, mande uma mensagem mais curta"
              }
            })}  
            placeholder='mensagem'
            className='py-2 px-3 w-full rounded-md '
            rows={5}
            />
          <span data-aos="fade-right">{varFeedback?.toString()}</span>   
          </label>

          <input 
          type="submit" 
          value="enviar" 
          className='bg-secondary hover:bg-hover-btn focus:bg-hover-btn transition-colors cursor-pointer w-fit py-1 px-4 rounded-md ml-auto'
          />
        </form>
      </div>

      <Image
      src={Circle3}
      alt="circle 3"
      className='absolute right-0 -top-[500px] -z-50'
      />
    </section>
  )
}
