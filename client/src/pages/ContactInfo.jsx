import { useRef } from 'react';
import { toast } from 'react-toastify';
import { sendMessage } from '../utils/Emailjs';

export default function ContactInfo() {
  const form = useRef();

  const sendMessageHandler = (e) => {
    e.preventDefault();

    sendMessage(form.current)
      .then(() => {
        toast.success('Your message has been sent', {
          position: 'top-center',
          autoClose: 2000,
        });
        form.current.reset();
      })
      .catch(() => {
        toast.error('Error. Please try again.', {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  return (
    <section className='relative z-10 overflow-hidden bg-white dark:bg-dark py-20 lg:py-[120px]'>
      <div className='container mr-4 ml-3 sm:mx-auto sm:ml-4'>
        <div className='flex flex-wrap -mx-4 lg:justify-between'>
          <div className='w-full px-4 lg:w-1/2 xl:w-6/12 lg:ml-10'>
            <div className='mb-12 max-w-[570px] lg:mb-0'>
              <span className='block mb-4 text-base font-semibold text-primary'>
                Contact Us
              </span>
              <h2 className='text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]'>
                GET IN <span className='text-blue-600'>TOUCH</span> WITH US
              </h2>
              <p className='text-base leading-relaxed text-body-color dark:text-dark-6 mb-9 mr-4'>
                Have a question, feedback, or just want to say hello? We'd love
                to hear from you! Feel free to reach out using the contact
                information below:
              </p>
              {/* Location */}
              <div className='mb-8 flex w-full max-w-[370px]'>
                <div className='bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]'>
                  {/* Location Icon */}
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-blue-700'
                  >
                    <path
                      d='M16 2.66667C9.56 2.66667 4 8.22667 4 14.6667C4 23.04 15.04 29.04 15.52 29.28C15.68 29.36 15.84 29.4 16 29.4C16.16 29.4 16.32 29.36 16.48 29.28C16.96 29.04 28 23.04 28 14.6667C28 8.22667 22.44 2.66667 16 2.66667ZM16 27.0667C13.12 25.44 6.66667 20.6133 6.66667 14.6667C6.66667 9.57333 10.9067 5.33333 16 5.33333C21.0933 5.33333 25.3333 9.57333 25.3333 14.6667C25.3333 20.6133 18.88 25.44 16 27.0667ZM16 8.66667C13.0533 8.66667 10.6667 11.0533 10.6667 14C10.6667 16.9467 13.0533 19.3333 16 19.3333C18.9467 19.3333 21.3333 16.9467 21.3333 14C21.3333 11.0533 18.9467 8.66667 16 8.66667ZM16 17C14.16 17 12.6667 15.5067 12.6667 13.6667C12.6667 11.8267 14.16 10.3333 16 10.3333C17.84 10.3333 19.3333 11.8267 19.3333 13.6667C19.3333 15.5067 17.84 17 16 17Z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <div className='w-full'>
                  <h4 className='mb-1 text-xl font-bold text-dark dark:text-white'>
                    Location
                  </h4>
                  <p className='text-base text-body-color dark:text-dark-6'>
                    Karimnagar, Telangana
                  </p>
                </div>
              </div>
              {/* Phone Number */}
              <div className='mb-8 flex w-full max-w-[370px]'>
                <div className='bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]'>
                  {/* Phone Icon */}
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-blue-700'
                  >
                    <path
                      d='M25.6 21.8667C24.16 21.8667 22.76 21.6267 21.44 21.16C20.96 20.9867 20.4 21.12 20.08 21.44L17.6 23.92C13.44 21.84 10.16 18.56 8.08001 14.4L10.56 11.92C10.88 11.6 11.0133 11.04 10.84 10.56C10.3733 9.24 10.1333 7.84 10.1333 6.4C10.1333 5.62667 9.50667 5 8.73334 5H5.6C4.82667 5 4 5.62667 4 6.4C4 18.08 13.92 28 25.6 28C26.3733 28 27 27.3733 27 26.6V23.4667C27 22.6933 26.3733 22.0667 25.6 22.0667V21.8667Z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <div className='w-full'>
                  <h4 className='mb-1 text-xl font-bold text-dark dark:text-white'>
                    Phone Number
                  </h4>
                  <a
                    href='tel:9999999999'
                    className='text-base text-body-color dark:text-dark-6 underline'
                  >
                    9999999999
                  </a>
                </div>
              </div>
              <div className='mb-8 flex w-full max-w-[370px]'>
                <div className='bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]'>
                  {/* Email Icon */}
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-blue-700'
                  >
                    <path
                      d='M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <div className='w-full'>
                  <h4 className='mb-1 text-xl font-bold text-dark dark:text-white'>
                    Email Address
                  </h4>
                  <a
                    href='mailto:adhithyaamaragonda@gmail.com'
                    className='text-base text-body-color dark:text-dark-6 underline'
                  >
                    adhithyaamaragonda@gmail.com
                  </a>
                </div>
              </div>
              <div className='mb-8 flex w-full max-w-[370px] gap-4'>
                {/* GitHub */}
                <a
                  href='https://github.com/ADHITHYAAMARAGONDA'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center'
                >
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16 2.3999C8.32 2.3999 2 8.7199 2 16.3999C2 22.4799 6.28 27.5199 12 29.1999C12.8 29.3199 13.08 28.8399 13.08 28.4199C13.08 28.0399 13.08 27.1199 13.08 25.9999C8.72 26.9199 7.68 24.1199 7.68 24.1199C6.96 22.3199 6 21.8799 6 21.8799C4.64 20.9599 6.12 20.9799 6.12 20.9799C7.64 21.0799 8.44 22.5399 8.44 22.5399C9.8 24.7999 12.04 24.1599 12.88 23.7999C13 22.7999 13.4 22.1199 13.84 21.7599C10.64 21.3999 7.32 20.1599 7.32 14.5999C7.32 13.0799 7.84 11.8999 8.68 10.9999C8.56 10.6399 8.12 9.1199 8.8 7.1999C8.8 7.1999 9.88 6.8199 13.08 8.7599C14.08 8.4799 15.12 8.3399 16.16 8.3399C17.2 8.3399 18.24 8.4799 19.24 8.7599C22.44 6.8199 23.52 7.1999 23.52 7.1999C24.2 9.1199 23.76 10.6399 23.64 10.9999C24.48 11.8999 25 13.0799 25 14.5999C25 20.1799 21.68 21.3999 18.48 21.7599C19.04 22.2399 19.52 23.1999 19.52 24.5999C19.52 26.5199 19.52 27.9199 19.52 28.4199C19.52 28.8399 19.8 29.3199 20.6 29.1999C26.32 27.5199 30.6 22.4799 30.6 16.3999C30.6 8.7199 24.28 2.3999 16 2.3999Z'
                      fill='#181717'
                    />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/amaragonda-adhithya-863a23251/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center'
                >
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M29.3333 0H2.66667C1.19333 0 0 1.19333 0 2.66667V29.3333C0 30.8067 1.19333 32 2.66667 32H29.3333C30.8067 32 32 30.8067 32 29.3333V2.66667C32 1.19333 30.8067 0 29.3333 0ZM9.6 27.2H5.33333V12.8H9.6V27.2ZM7.46667 11.2C6.02667 11.2 4.85333 10.0267 4.85333 8.58667C4.85333 7.14667 6.02667 5.97333 7.46667 5.97333C8.90667 5.97333 10.08 7.14667 10.08 8.58667C10.08 10.0267 8.90667 11.2 7.46667 11.2ZM27.2 27.2H22.9333V20.2667C22.9333 18.6667 22.9067 16.6 20.8 16.6C18.6667 16.6 18.3467 18.3733 18.3467 20.1467V27.2H14.08V12.8H18.1333V14.6667H18.1867C18.72 13.68 20.0267 12.64 21.8133 12.64C26.0267 12.64 27.2 15.2933 27.2 18.5733V27.2Z'
                      fill='#0077B5'
                    />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href='https://www.instagram.com/adhithya__amaragonda/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center'
                >
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16 7.46667C11.3733 7.46667 7.46667 11.3733 7.46667 16C7.46667 20.6267 11.3733 24.5333 16 24.5333C20.6267 24.5333 24.5333 20.6267 24.5333 16C24.5333 11.3733 20.6267 7.46667 16 7.46667ZM16 22.4C12.64 22.4 9.6 19.36 9.6 16C9.6 12.64 12.64 9.6 16 9.6C19.36 9.6 22.4 12.64 22.4 16C22.4 19.36 19.36 22.4 16 22.4ZM26.6667 6.4C26.6667 7.14667 26.08 7.73333 25.3333 7.73333C24.5867 7.73333 24 7.14667 24 6.4C24 5.65333 24.5867 5.06667 25.3333 5.06667C26.08 5.06667 26.6667 5.65333 26.6667 6.4ZM28.8 9.06667C28.8 7.06667 27.2 5.46667 25.2 5.46667C23.2 5.46667 21.6 7.06667 21.6 9.06667C21.6 11.0667 23.2 12.6667 25.2 12.6667C27.2 12.6667 28.8 11.0667 28.8 9.06667ZM16 0C7.16333 0 0 7.16333 0 16C0 24.8367 7.16333 32 16 32C24.8367 32 32 24.8367 32 16C32 7.16333 24.8367 0 16 0ZM16 29.8667C8.96 29.8667 2.13333 23.04 2.13333 16C2.13333 8.96 8.96 2.13333 16 2.13333C23.04 2.13333 29.8667 8.96 29.8667 16C29.8667 23.04 23.04 29.8667 16 29.8667Z'
                      fill='#E4405F'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
            <div className='relative p-8 bg-gray-400 rounded-lg shadow-2xl dark:bg-dark-2  sm:p-12'>
              <form ref={form} onSubmit={sendMessageHandler}>
                <div className='mb-6'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    className='border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-black w-full rounded border py-3 px-[14px] text-base outline-none'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    className='border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-black w-full rounded border py-3 px-[14px] text-base outline-none'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <input
                    type='text'
                    name='phone'
                    placeholder='Your Phone'
                    className='border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-black w-full rounded border py-3 px-[14px] text-base outline-none'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <textarea
                    rows='6'
                    name='message'
                    placeholder='Your Message'
                    className='border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-black w-full resize-none rounded border py-3 px-[14px] text-base outline-none'
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type='submit'
                    className='w-full p-3 bg-blue-600 text-white transition border rounded border-primary bg-primary hover:opacity-90'
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div>
                <span className='absolute -top-10 -right-9 z-[-1]'>
                  <svg
                    width='100'
                    height='100'
                    viewBox='0 0 100 100'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z'
                      fill='#3056D3'
                    />
                  </svg>
                </span>
                <span className='absolute -right-10 top-[90px] z-[-1]'>
                  <svg
                    width='34'
                    height='134'
                    viewBox='0 0 34 134'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='31.9993'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 31.9993 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 31.9993 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 31.9993 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 31.9993 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 31.9993 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 31.9993 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 31.9993 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 31.9993 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 31.9993 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 31.9993 1.66665)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 17.3333 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 17.3333 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 17.3333 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 17.3333 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 17.3333 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 17.3333 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 17.3333 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 17.3333 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 17.3333 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 17.3333 1.66665)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 2.66536 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 2.66536 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 2.66536 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 2.66536 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 2.66536 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 2.66536 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 2.66536 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 2.66536 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 2.66536 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 2.66536 1.66665)'
                      fill='#13C296'
                    />
                  </svg>
                </span>
                <span className='absolute -left-7 -bottom-7 z-[-1]'>
                  <svg
                    width='107'
                    height='134'
                    viewBox='0 0 107 134'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='104.999'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 104.999 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='104.999'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 104.999 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='104.999'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 104.999 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='104.999'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 104.999 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='104.999'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 104.999 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='104.999'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 104.999 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='104.999'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 104.999 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='104.999'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 104.999 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='104.999'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 104.999 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='104.999'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 104.999 1.66665)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 90.3333 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 90.3333 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 90.3333 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 90.3333 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 90.3333 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 90.3333 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 90.3333 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 90.3333 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 90.3333 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='90.3333'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 90.3333 1.66665)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 75.6654 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 31.9993 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 75.6654 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 31.9993 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 75.6654 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 31.9993 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 75.6654 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 31.9993 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 75.6654 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 31.9993 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 75.6654 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 31.9993 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 75.6654 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 31.9993 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 75.6654 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 31.9993 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 75.6654 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 31.9993 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='75.6654'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 75.6654 1.66665)'
                      fill='#13C296'
                    />
                    <circle
                      cx='31.9993'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 31.9993 1.66665)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 60.9993 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 17.3333 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 60.9993 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 17.3333 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 60.9993 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 17.3333 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 60.9993 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 17.3333 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 60.9993 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 17.3333 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 60.9993 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 17.3333 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 60.9993 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 17.3333 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 60.9993 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 17.3333 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 60.9993 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 17.3333 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='60.9993'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 60.9993 1.66665)'
                      fill='#13C296'
                    />
                    <circle
                      cx='17.3333'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 17.3333 1.66665)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 46.3333 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='132'
                      r='1.66667'
                      transform='rotate(180 2.66536 132)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 46.3333 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='117.333'
                      r='1.66667'
                      transform='rotate(180 2.66536 117.333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 46.3333 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='102.667'
                      r='1.66667'
                      transform='rotate(180 2.66536 102.667)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 46.3333 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='88'
                      r='1.66667'
                      transform='rotate(180 2.66536 88)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 46.3333 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='73.3333'
                      r='1.66667'
                      transform='rotate(180 2.66536 73.3333)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 46.3333 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='45'
                      r='1.66667'
                      transform='rotate(180 2.66536 45)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 46.3333 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='16'
                      r='1.66667'
                      transform='rotate(180 2.66536 16)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 46.3333 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='59'
                      r='1.66667'
                      transform='rotate(180 2.66536 59)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 46.3333 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='30.6666'
                      r='1.66667'
                      transform='rotate(180 2.66536 30.6666)'
                      fill='#13C296'
                    />
                    <circle
                      cx='46.3333'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 46.3333 1.66665)'
                      fill='#13C296'
                    />
                    <circle
                      cx='2.66536'
                      cy='1.66665'
                      r='1.66667'
                      transform='rotate(180 2.66536 1.66665)'
                      fill='#13C296'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
