import Image from 'next/future/image';
import contact from '../../public/Frame 19.png';
import Circle3 from '../../public/contact.svg';


import { TitleSection } from "./TitleSection";
import { useForm } from 'react-hook-form';

export function Contact() {

  const {register, handleSubmit} = useForm();

  function submit(d:any){
    const data = JSON.stringify(d)
    console.log(data)
    d.value = ''
  }

  return (
    <section>
      <TitleSection title='Contato' />

      <div 
      className='w-[90%] my-10 flex items-center h-[500px] mx-auto bg-contact overflow-hidden rounded-xl border border-skills'
      >
        <Image
        src={contact}
        alt="contact image"
        className='flex-1 object-cover hidden md:block'
        />
        <form 
        onSubmit={handleSubmit(submit)}
        className='flex-[1.3] flex flex-col gap-4 p-6 px-10'
        >
          <label>
            <input 
            type="text" 
            {...register('name')} 
            placeholder='name'
            className='py-2 px-3 w-full rounded-md'
            required
            />
          </label>

          <label>
            <input 
            type="text" 
            {...register('email')} 
            placeholder='email'
            className='py-2 px-3 w-full rounded-md'
            required
            />
          </label>

          <label>
            <textarea 
            {...register('feedback')}  
            placeholder='mensagem'
            className='py-2 px-3 w-full rounded-md '
            rows={5}
            required
            />
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
      className='absolute right-0 -top-40 -z-50'
      />
    </section>
  )
}
