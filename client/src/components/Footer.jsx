import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { sendEmail } from '../utils/Emailjs';

export default function Footer() {
  const form = useRef();

  const handleSubscribe = (e) => {
    e.preventDefault();

    sendEmail(form.current)
      .then(() => {
        toast.success('Thank you for subscribing!', {
          position: 'top-center',
          autoClose: 2000,
        });
        form.current.reset();
      })
      .catch(() => {
        toast.error('Error subscribing. Please try again.');
      });
  };

  return (
    <footer className='bg-gray-800 text-white py-6 mt-4'>
      <div className='max-w-6xl mx-auto flex flex-col items-center'>
        <div className='py-5  md:py-4 lg:py-7'>
          <div className='container mx-auto px-5 rounded-lg xl:max-w-screen-xl'>
            <div className='p-5 rounded-lg bg-gray-800 lg:p-2'>
              <div>
                <h1 className='text-xl font-bold text-center text-white md:text-2xl'>
                  Sign up for our newsletter
                </h1>
                <form
                  ref={form}
                  onSubmit={handleSubscribe}
                  className='mt-5 sm:mx-auto sm:flex sm:max-w-lg lg:mx-0'
                >
                  <input
                    className='block w-full px-12 py-3 outline-none border rounded shadow-sm text-gray-300 border-[#3c3c3c] bg-[#121212] focus:border-white focus:ring-1 focus:ring-white'
                    type='email'
                    name='email'
                    placeholder='Your e-mail'
                    required
                  />
                  <button
                    type='submit'
                    className='w-full mt-2.5 px-5 py-3 transition border rounded border-primary bg-primary shadow-sm focus:outline-none font-medium text-white bg-blue-600  hover:opacity-90 sm:flex-shrink-0 sm:w-auto sm:mt-0 sm:ml-5'
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className='w-full mt-5 sm:w-auto lg:mt-0 lg:ml-5'>
                <div className='flex justify-center space-x-2.5 lg:mt-7'>
                  {/* GitHub */}
                  <a
                    href='https://github.com/ADHITHYAAMARAGONDA'
                    className='p-2.5 rounded-full border-2 border-white transition-colors hover:bg-blue-600'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-6 h-6 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 32 32'
                    >
                      <path d='M16 2.3999C8.32 2.3999 2 8.7199 2 16.3999C2 22.4799 6.28 27.5199 12 29.1999C12.8 29.3199 13.08 28.8399 13.08 28.4199C13.08 28.0399 13.08 27.1199 13.08 25.9999C8.72 26.9199 7.68 24.1199 7.68 24.1199C6.96 22.3199 6 21.8799 6 21.8799C4.64 20.9599 6.12 20.9799 6.12 20.9799C7.64 21.0799 8.44 22.5399 8.44 22.5399C9.8 24.7999 12.04 24.1599 12.88 23.7999C13 22.7999 13.4 22.1199 13.84 21.7599C10.64 21.3999 7.32 20.1599 7.32 14.5999C7.32 13.0799 7.84 11.8999 8.68 10.9999C8.56 10.6399 8.12 9.1199 8.8 7.1999C8.8 7.1999 9.88 6.8199 13.08 8.7599C14.08 8.4799 15.12 8.3399 16.16 8.3399C17.2 8.3399 18.24 8.4799 19.24 8.7599C22.44 6.8199 23.52 7.1999 23.52 7.1999C24.2 9.1199 23.76 10.6399 23.64 10.9999C24.48 11.8999 25 13.0799 25 14.5999C25 20.1799 21.68 21.3999 18.48 21.7599C19.04 22.2399 19.52 23.1999 19.52 24.5999C19.52 26.5199 19.52 27.9199 19.52 28.4199C19.52 28.8399 19.8 29.3199 20.6 29.1999C26.32 27.5199 30.6 22.4799 30.6 16.3999C30.6 8.7199 24.28 2.3999 16 2.3999Z' />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href='https://www.linkedin.com/in/amaragonda-adhithya-863a23251/'
                    className='p-2.5 rounded-full border-2 border-white transition-colors hover:bg-blue-600'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-6 h-6 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 32 32'
                    >
                      <path d='M29.3333 0H2.66667C1.19333 0 0 1.19333 0 2.66667V29.3333C0 30.8067 1.19333 32 2.66667 32H29.3333C30.8067 32 32 30.8067 32 29.3333V2.66667C32 1.19333 30.8067 0 29.3333 0ZM9.6 27.2H5.33333V12.8H9.6V27.2ZM7.46667 11.2C6.02667 11.2 4.85333 10.0267 4.85333 8.58667C4.85333 7.14667 6.02667 5.97333 7.46667 5.97333C8.90667 5.97333 10.08 7.14667 10.08 8.58667C10.08 10.0267 8.90667 11.2 7.46667 11.2ZM27.2 27.2H22.9333V20.2667C22.9333 18.6667 22.9067 16.6 20.8 16.6C18.6667 16.6 18.3467 18.3733 18.3467 20.1467V27.2H14.08V12.8H18.1333V14.6667H18.1867C18.72 13.68 20.0267 12.64 21.8133 12.64C26.0267 12.64 27.2 15.2933 27.2 18.5733V27.2Z' />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href='https://www.instagram.com/adhithya__amaragonda/'
                    className='p-2.5 rounded-full border-2 border-white transition-colors hover:bg-blue-600'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      className='w-6 h-6 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 32 32'
                    >
                      <path d='M16 7.46667C11.3733 7.46667 7.46667 11.3733 7.46667 16C7.46667 20.6267 11.3733 24.5333 16 24.5333C20.6267 24.5333 24.5333 20.6267 24.5333 16C24.5333 11.3733 20.6267 7.46667 16 7.46667ZM16 22.4C12.64 22.4 9.6 19.36 9.6 16C9.6 12.64 12.64 9.6 16 9.6C19.36 9.6 22.4 12.64 22.4 16C22.4 19.36 19.36 22.4 16 22.4ZM26.6667 6.4C26.6667 7.14667 26.08 7.73333 25.3333 7.73333C24.5867 7.73333 24 7.14667 24 6.4C24 5.65333 24.5867 5.06667 25.3333 5.06667C26.08 5.06667 26.6667 5.65333 26.6667 6.4ZM28.8 9.06667C28.8 7.06667 27.2 5.46667 25.2 5.46667C23.2 5.46667 21.6 7.06667 21.6 9.06667C21.6 11.0667 23.2 12.6667 25.2 12.6667C27.2 12.6667 28.8 11.0667 28.8 9.06667ZM16 0C7.16333 0 0 7.16333 0 16C0 24.8367 7.16333 32 16 32C24.8367 32 32 24.8367 32 16C32 7.16333 24.8367 0 16 0ZM16 29.8667C8.96 29.8667 2.13333 23.04 2.13333 16C2.13333 8.96 8.96 2.13333 16 2.13333C23.04 2.13333 29.8667 8.96 29.8667 16C29.8667 23.04 23.04 29.8667 16 29.8667Z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link to='/'>
            <h1 className='flex font-bold text-2xl'>
              <span className='text-blue-600'>Telangana</span>
              <span className='text-slate-500 ml-1'>RealEstate</span>
            </h1>
          </Link>
        </div>
        <div className=' flex mt-8 gap-5 text-normal sm:text-lg'>
          <a href='/' className='hover:text-gray-400 '>
            Home
          </a>
          <a href='/about' className='hover:text-gray-400 '>
            About
          </a>
          <a href='/show-listings' className='hover:text-gray-400 '>
            Listings
          </a>
          <a href='/profile' className='hover:text-gray-400 '>
            Profile
          </a>
          <a href='/contact' className='hover:text-gray-400 '>
            Contact
          </a>
        </div>
      </div>
      <hr className='mt-5' />
      <div className=' flex mt-8 gap-3 justify-center text-xs sm:text-sm text-gray-400 '>
        <a href='/' className='hover:text-white '>
          FAQ
        </a>
        <a href='/about' className='hover:text-white '>
          Cookies
        </a>
        <a href='/show-listings' className='hover:text-white '>
          Term Of Use
        </a>
        <a href='/profile' className='hover:text-white '>
          Privacy Policy
        </a>
        <a href='/profile' className='hover:text-white '>
          Support Policy
        </a>
      </div>
      <p className='text-center text-xs text-gray-500 mt-3'>
        Copyright © 2025 Telangana RealEstate
      </p>
    </footer>
  );
}
