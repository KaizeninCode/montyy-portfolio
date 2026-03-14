import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="border-t w-full">
        <div className="flex items-center mx-auto">
            <h1 className='text-xl'>&copy; Philip Wekullo {new Date().getFullYear()}</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
