import React from 'react'

const Contact = () => {
  return (
    <section className="py-6  bg-white w-screen">
      <div className="grid  grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-5xl font-bold">Bizimle iletişime geçin</h1>
          <div className="space-y-4 mt-10">
            <a
              href="https://maps.app.goo.gl/tiuKR4tcPmVmc8H3A"
              target="_blank"
              className="flex w-fit items-center text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>Çarşı Mah. Seral Sk. No 17 ANTALYA/ALANYA</span>
            </a>
            <a
              href="tel:+905439466"
              target='_blank'
              className="flex w-fit items-center text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+90 543 9466</span>
            </a>
            <a
              href="mailto:info@aquaactive.com"
              target='_blank'
              className="flex w-fit items-center text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>info@aquaactive.com</span>
            </a>
          </div>
        </div>
        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          <div className='flex justify-between gap-10'>
            <label className='w-full'>
              <span className="mb-1">Adınız</span>
              <input type="text" className="block w-full p-4 rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </label>
            <label className='w-full'>
              <span className="mb-1">Soyadınız</span>
              <input type="text" className="block p-4 w-full  rounded-md shadow-sm focus:ring outline-none focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
            </label>
          </div>
          <label className="block">
            <span className="mb-1">Email</span>
            <input type="email" className="block p-4 w-full rounded-md shadow-sm focus:ring outline-none focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea rows={5} className="block outline-none w-full p-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
          </label>
          <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Gönder</button>
        </form>
      </div>
    </section >
  )
}

export default Contact