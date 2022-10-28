import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TitleSection } from "./TitleSection";
import contact from "../../public/Frame 19.png";
import Image from "next/future/image";

import axios from 'axios'
import AOS from "aos";

import Alert from "@mui/material/Alert";

import CloseRounded from "@mui/icons-material/CloseRounded";
import { FadeCircle } from "./Circles";
import { RedesSociais } from "./RedesSociais";


export function Contact() {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const { register, handleSubmit, reset, watch, resetField, formState: { errors } } = useForm()

  const varName = errors?.name?.message
  const varEmail = errors?.email?.message
  const varFeedback = errors?.feedback?.message

  const name = watch("name")
  const email = watch("email")
  const feedback = watch("feedback")

  async function submit(values: any) {
    let config = {
      method: "post",
      url: `/api/contact`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: values,
    }

    try {
      const response = await axios(config)
      console.log(response)
      if (response.status == 200) {
        reset()
        setModalSuccess(true)
      }

    } catch (error) {
      setModalError(true)
      console.error(error)
    }
  }

  const [size, setSize] = useState(0)

  function checkMaxLength(value:string){
    setSize(value.length)
  }

  useEffect(() => { AOS.init() }, [])

  return (
    <section
      className="contact"
    >
      <TitleSection title="Contato" />

      <FadeCircle />

      <div className="flex flex-row-reverse items-center gap-4 md:gap-0">

        <div
          data-aos="fade-up"
          className="w-[95%] h-fit max-w-3xl bg-contact my-10 mx-auto rounded-xl
        flex items-center overflow-hidden
        md:h-[400px] lg:w-[70%]"
        >
          <Image
            src={contact}
            alt="contact image"
            className="flex-1 object-cover overflow-hidden hidden md:block"
          />

          <form
            onSubmit={handleSubmit(submit)}
            className="flex-[1.3] flex flex-col gap-3 p-6 px-5 md:px-10"
          >
            <label className="relative">
              <input
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Qual o seu nome?"
                  }
                })}
                placeholder="nome"
                className="py-2 px-3 w-full rounded-md text-articles tracking-wider"
                spellCheck={false}
                translate="yes"
                name="name"
              />
              <CloseRounded
                fontSize="small"
                className={`absolute top-1/2 -translate-y-1/2 right-2
                  text-articles rounded-full shadow-sm
                  ${name?.length > 0 ? 'visible' : 'invisible'}`}
                onClick={() => resetField("name")}
              />

              <span data-aos="fade-right">{varName?.toString()}</span>
            </label>

            <label>
              <div className="relative">
                <input
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Insira um email válido"
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Por favor, insira um email válido"
                    }
                  })}
                  placeholder="max@exemplo.com"
                  className="py-2 px-3 w-full rounded-md text-articles tracking-wider"
                  translate="yes"
                  name="email"
                />
                <CloseRounded
                  fontSize="small"
                  className={`absolute top-1/2 -translate-y-1/2 right-2
                  ${email?.length > 0 ? 'visible' : 'invisible'}
                  text-articles rounded-full shadow-sm
                  `}
                  onClick={() => resetField("email")}

                />
              </div>
              <span data-aos="fade-right">{varEmail?.toString()}</span>
            </label>

            <label>
              <div className="relative">

                <textarea
                  {...register("feedback", {
                    required: {
                      value: true,
                      message: ""
                    },
                    maxLength: {
                      value: 600,
                      message: "Por favor, mande uma mensagem mais curta"
                    }
                  })}
                  placeholder="mensagem"
                  className="py-2 px-3 pr-5 w-full rounded-md text-articles tracking-wider"
                  rows={5}
                  onChange={(event) => checkMaxLength(event.target.value)}
                  translate="yes"
                  name="feedback"
                />

                <CloseRounded
                  fontSize="small"
                  className={`absolute top-2 right-2
                  ${feedback?.length > 0 ? 'visible' : 'invisible'}
                  text-articles rounded-full shadow-sm`}
                  onClick={() => resetField("feedback")}
                />
              </div>
              <span className={`${size >= 600 ? "font-bold" : "text-nav"}`}>
                {size}/600
              </span>
              <span data-aos="fade-right"> {varFeedback?.toString()}</span>
            </label>

            <input
              type="submit"
              value="enviar"
              className="bg-secondary w-fit p-2 px-4 rounded-md ml-auto
            text-sm font-inter tracking-wide
            transition-all cursor-pointer uppercase
            hover:bg-hover-btn
            focus:bg-hover-btn
            hover:-translate-y-1"
              translate="yes"
            />
          </form>
        </div>

        <RedesSociais />
      </div>

      {/*MODAL SUCCESS */}
      <Alert
        onClose={() => { setModalSuccess(false) }}
        className={`m-2 fixed right-0 bottom-0 bg-green-500 transition-all
        shadow-lg w-fit
        md:m-5
        ${modalSuccess ? 'visible translate-x-0 opacity-1' : 'invisible opacity-0'}`}
        color="success"
        translate="yes"
      >
        Mensagem enviada. Fico feliz que se interessou pelo meu trabalho !
      </Alert>
      {/*MODAL SUCCESS */}

      {/*MODAL ERROR */}
      <Alert
        onClose={() => { setModalError(false) }}
        className={`m-2 fixed right-0 bottom-0 bg-red-400 transition-all
        shadow-lg w-fit
        md:m-5
        ${modalError ? 'visible translate-x-0 opacity-1' : 'invisible opacity-0'} `}
        color="error"
        translate="yes"
      >
        Infelizmente ocorreu algum erro.
      </Alert>
      {/*MODAL ERROR */}


    </section>
  )
}
