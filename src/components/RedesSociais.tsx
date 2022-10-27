import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

interface RedesSociaisProps {
  mobile?: boolean;
}

export function RedesSociais({ mobile }: RedesSociaisProps) {

  return (
    <>
      {
        mobile ? (
          <>

            <a href="https://api.whatsapp.com/send?phone=5511977761749&text=Me%20interessei%20pelo%20seu%20trabalho%2C%20vamos%20conversar%20%3F"
              rel="noreferrer"
              target="_blank"
            >
              <span
                className="flex items-center p-2 bg-cards rounded-md text-green-500 gap-2"
              >
                <WhatsAppIcon
                  fontSize="large"
                />
              </span>
            </a>

            <a href="https://www.instagram.com/this_maxwell/"
              rel="noreferrer"
              target="_blank"
            >
              <span
                className="flex items-center p-2 bg-cards rounded-md text-pink-700 gap-2"
              >
                <InstagramIcon
                  fontSize="large"
                />
              </span>
            </a>

            <a href="https://www.linkedin.com/in/maxwell-santos-2ab722210"
              rel="noreferrer"
              target="_blank"
            >
              <span
                className="flex items-center p-2 bg-cards rounded-md text-sky-500 gap-1"
              >
                <LinkedInIcon
                  fontSize="large"
                />
              </span>
            </a>
          </>

        ) : (

          <div className='flex-col gap-3 hidden md:flex'>
            <a href="https://api.whatsapp.com/send?phone=5511977761749&text=Me%20interessei%20pelo%20seu%20trabalho%2C%20vamos%20conversar%20%3F"
              rel="noreferrer"
              target="_blank"
            >
              <span
                className="flex items-center p-2 text-green-500 gap-2 hover:bg-nav/10 rounded-full transition-all hover:-translate-y-1"
              >
                <WhatsAppIcon
                  fontSize="large"
                />
              </span>
            </a>

            <a href="https://www.instagram.com/this_maxwell/"
              rel="noreferrer"
              target="_blank"
            >
              <span
                className="flex items-center p-2 text-pink-700 gap-2 hover:bg-nav/10 rounded-full transition-all hover:-translate-y-1"
              >
                <InstagramIcon
                  fontSize="large"
                />
              </span>
            </a>

            <a href="https://www.linkedin.com/in/maxwell-santos-2ab722210"
              rel="noreferrer"
              target="_blank"
            >
              <span
                className="flex items-center p-2 text-sky-500 gap-1 hover:bg-nav/10 rounded-full transition-all hover:-translate-y-1"
              >
                <LinkedInIcon
                  fontSize="large"
                />
              </span>

            </a>
          </div>
        )
      }
    </>
  )
}
