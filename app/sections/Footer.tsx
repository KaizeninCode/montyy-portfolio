import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Footer = () => {
  const footerLinks = [
    {
      icon: <FiInstagram />,
      url: 'https://www.instagram.com/montayyne'
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/254741026083'
    },
    {
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/phil-wekullo'
    },
    // {
    //   icon: <MdEmail />,
    //   url: 'mailto:philwekullo@gmail.com'
    // }
  ]
  return (
    <footer className='footer'>
      <div className="border-t w-full">
        <div className="flex items-center justify-between mx-auto mt-4">
            <h1 className='text-xl'>&copy; Philip Wekullo {new Date().getFullYear()}</h1>
            <div className='flex justify-between items-center px-2 py-1 gap-4 lg:text-2xl text-lg'>
          {footerLinks.map(({ icon, url }, index) => (
            <a key={index} href={url} target='_blank' rel='noreferrer' className='hover:text-red-300 transition-colors ease-in-out duration-500'>
              {icon}
            </a>
          ))}
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
