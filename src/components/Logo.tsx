import Image from 'next/future/image'

export default function Logo() {

  return (
    <Image
      src='/icons/logoMaxCompletoClaro.png'
      alt="Logo do site do Maxwell"
      height={0}
      width={150}
    />
  )
}
