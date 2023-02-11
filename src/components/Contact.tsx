import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TitleSection } from "./TitleSection";

import axios from 'axios'

import Alert from "@mui/material/Alert";

import CloseRounded from "@mui/icons-material/CloseRounded";
import { FadeCircle } from "./Circles";
import { RedesSociais } from "./RedesSociais";
import { CircularProgress } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactVariant = {
  visible: {opacity:1, y:0, transition: { duration: 0.5 }},
  hidden: {opacity:0, y:200}
}

export function Contact() {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const { register, handleSubmit, reset, watch, resetField, formState: { errors } } = useForm()

  const [loading, setLoading] = useState(false)

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
      setLoading(true)
      const response = await axios(config)
      console.log(response)
      if (response.status == 200) {
        reset()
        setModalSuccess(true)
        setLoading(false)
      }

    } catch (error) {
      setModalError(true)
      console.error(error)
    }
  }

  const [messageLength, setMessageLength] = useState(0)
  function checkMaxLength(value: string) {
    setMessageLength(value.length)
  }

  modalSuccess && setTimeout(() => {
    setModalSuccess(false)
  }, 5000)

  
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if(inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  },[control, inView])


  return (
    <section
      className="contact"
    >
      <TitleSection title="Contato" />

      <FadeCircle />

      <div className="flex flex-row-reverse items-center gap-4 md:gap-0">
        <motion.div
          className="w-[95%] h-fit max-w-xl bg-contact my-10 mx-auto p-6 px-5 md:px-10 gap-5 rounded-xl
        flex items-center overflow-hidden
        md:min-h-[400px] lg:w-[70%]"
        ref={ref}
        variants={contactVariant}
        initial="hidden"
        animate={control} 
        >

          <form
            onSubmit={handleSubmit(submit)}
            className="flex-1 flex flex-col gap-3"
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
                className="py-2 px-3 w-full rounded-sm text-articles tracking-wider"
                spellCheck={false}
                name="name"
              />
              <CloseRounded
                fontSize="small"
                className={`absolute top-1/2 -translate-y-1/2 right-2
                  text-articles rounded-full shadow-sm
                  ${name?.length > 0 ? 'visible' : 'invisible'}`}
                onClick={() => resetField("name")}
              />

              <span className="alert">{varName?.toString()}</span>
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
                  className="py-2 px-3 w-full rounded-sm text-articles tracking-wider"

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
              <span className="alert">{varEmail?.toString()}</span>
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
                  className="py-2 px-3 pr-5 w-full rounded-sm text-articles tracking-wider"
                  rows={5}
                  onChange={(event) => checkMaxLength(event.target.value)}

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
              <span className={`text-sm ${messageLength >= 600 ? "font-bold text-red-700" : "text-nav"}`}>
                {messageLength}/600
              </span>
              <span> {varFeedback?.toString()}</span>
            </label>

            <button
              type="submit"
              className={`bg-secondary w-24 p-3 px-4 rounded-md ml-auto
            text-sm font-inter tracking-wide
            flex items-center justify-center
            transition-all cursor-pointer uppercase
            hover:bg-hover-btn
            focus:bg-hover-btn
            hover:-translate-y-1
            ${loading && "pointer-events-none bg-secondary/40"}
            `}
            >
              {
                loading ? <CircularProgress color="inherit" size={20} /> : "enviar"
              }
            </button>
          </form>
        </motion.div>

        <RedesSociais />
      </div>

      {/*MODAL SUCCESS */}
      <Alert
        onClose={() => { setModalSuccess(false) }}
        className={`m-2 fixed right-0 bottom-0 bg-green-500 transition-all shadow-lg w-fit md:m-5 ease-in
        ${modalSuccess ? 'translate-x-0 animate-showAlert' : 'opacity-0 translate-x-40'}`}
        color="success"

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

      >
        Infelizmente ocorreu algum erro.
      </Alert>
      {/*MODAL ERROR */}


    </section>
  )
}
