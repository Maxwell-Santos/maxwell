
import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from "next";

export default async (req:NextApiRequest, res:NextApiResponse) => {

  const { name, email, feedback } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `VAI DAR TUDO CERTO, FÉ. de ${name}`,
      html: `<p>De: ${name}</p></br>
      <p>Feedback:${feedback}</p>`
    })


    console.log('mensagem enviada com sucesso', emailResponse)
  
  } catch (error) {
    console.error(error)
  }

  res.status(200).json(req.body)
}