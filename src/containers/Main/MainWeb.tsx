import * as React from 'react'
import { Navbar } from "../../components/Navbar";


const IntlDateFormatter = new Intl.DateTimeFormat('en-US', {
  timeStyle: 'short',
  timeZone: 'Asia/Jakarta',
  hour12: false
})

const timeslotFormatter = (date?: Date) => {
  if (date == null) return { color: '', string: '' }
  const h = parseInt(IntlDateFormatter.format(date).split(':')[0])

  if (h < 2) {
    return { color: 'bg-red-500', string: 'Study' }
  } else if (h < 9) {
    return { color: 'bg-amber-600', string: 'Sleep' }
  } else if (h < 14) {
    return { color: 'bg-red-500', string: 'Study' }
  } else if (h < 17) {
    return { color: 'bg-amber-600', string: 'Take a Nap' }
  } else if (h < 21) {
    return { color: 'bg-red-500', string: 'Study' }
  } else if (h < 24) {
    return { color: 'bg-teal-500', string: 'Anime Time' }
  } else {
    return { color: 'bg-red-500', string: 'Study' }
  }
}

const availablestatus = (date?: Date) => {
  if (date == null) return { color: '', string: '' }
  const h = parseInt(IntlDateFormatter.format(date).split(':')[0])

  if (h < 2) {
    return { color: 'bg-red-500', string: 'Available' }
  } else if (h < 9) {
    return { color: 'bg-amber-600', string: 'Inactive' }
  } else if (h < 14) {
    return { color: 'bg-red-500', string: 'Not Available' }
  } else if (h < 17) {
    return { color: 'bg-amber-600', string: 'Inactive' }
  } else if (h < 21) {
    return { color: 'bg-red-500', string: 'Not Available' }
  } else if (h < 24) {
    return { color: 'bg-green-500', string: 'Available' }
  } else {
    return { color: 'bg-green-500', string: 'Available' }
  }
}

interface MyLinksProps {
  href: string
  text: string
  rel?: 'me'
}
const MyLinks = ({ href, text, rel }: MyLinksProps) => {
  return (
    <li className='my-2'>
      <a
        href={href}
        rel={rel}
        className='decoration-slate-200 decoration-wavy decoration-2 underline-offset-4 transition-all hover:text-teal-500 hover:underline'>
        {text}
      </a>
    </li>
  )
}

const CurrentTime = () => {
  const [currentTime] = React.useState<Date>()
  return (
    <>
      <p className='mt-2 font-medium tabular-nums tracking-tight text-slate-200'>
        {IntlDateFormatter.format(currentTime)} GMT+7
      </p>
    </>
  )
}

const ActivityStatus = () => {
  const [timeslot, setTimeslot] = React.useState<{ color: string; string: string }>()

  const calculateTime = React.useCallback(() => {
    const now = new Date()
    setTimeslot(timeslotFormatter(now))
  }, [])

  // Timer
  React.useEffect(() => {
    calculateTime()

    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [calculateTime])

  return (
    <>

      <div className='flex items-center justify-center font-medium tracking-tight text-slate-200'>
        <div className={` mr-2 h-4 w-4 shrink-0 rounded-full ${timeslot?.color}`}>
          <div className={`${timeslot?.color} mr-2 h-4 w-4 shrink-0 animate-ping rounded-full`} />
        </div>
        { timeslot?.string}
      </div>
    </>
  )
}
const Available = () => {
  const [timeslot, setTimeslot] = React.useState<{ color: string; string: string }>()

  const calculateTime = React.useCallback(() => {
    const now = new Date()
    setTimeslot(availablestatus(now))
  }, [])

  // Timer
  React.useEffect(() => {
    calculateTime()

    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [calculateTime])

  return (
    <>

      <div className='flex items-center justify-center font-medium tracking-tight text-slate-200 my-2 '>
        <div className={` mr-2 h-4 w-4 shrink-0 rounded-full ${timeslot?.color}`}>
          <div className={`${timeslot?.color} mr-2 h-4 w-4 shrink-0 animate-ping rounded-full`} />
        </div>
        { timeslot?.string}
      </div>
    </>
  )
}

const MyName = () => {
  return (
    <section className='my-4 grid grid-cols-1 sm:grid-cols-1'>
      <div>
        <h2 className='font-header text-lg font-bold uppercase tracking-tight text-teal-500 justify-center'>
          <img src="https://portfolio.jeffersonfed.xyz/assets/portrait2.jpg" alt="Profile" className='rounded-full h-36 mx-auto items-center' />
        </h2>
        
      </div>
      <div>
        <h2 className='font-header text-lg font-bold uppercase tracking-tight text-teal-500'>
          My Name
        </h2>

        <p className='my-2 font-semibold text-slate-200'>Ritch Johan Jefferson</p>
        <p className='my-2 font-medium text-slate-200'>"Jefferson<span className='hover:text-red-500'>RJ</span> / Jefferson<span className='hover:text-teal-500'>FED</span>"</p>
      </div>

    </section>
  )
}


const AboutMe = () => {
  return (
    <section className='my-4 grid grid-cols-2 sm:grid-cols-3 '>
      <div>
        <h2 className='my-2 font-header text-lg font-bold uppercase tracking-tight text-teal-500'>
          My Timezone
        </h2>
        
        <CurrentTime />
      </div>

      <div>
        <h2 className='my-2 font-header text-lg font-bold uppercase tracking-tight text-teal-500'>
          My Activity
        </h2>

        <ul className=' font-medium tracking-tight text-slate-200'>
          <ActivityStatus />
          <Available />
        </ul>
      </div>

      <div>
        <h2 className='my-2 font-header text-lg font-bold uppercase tracking-tight text-teal-500'>
          I Speak
        </h2>

        <p className='my-2 font-medium text-slate-200'>English</p>
        <p className='my-2 font-medium text-slate-200'>Indonesia</p>
        <p className='my-2 font-medium text-slate-200'>Japanese</p>
      </div>

      <div>
      <h2 className='my-2 font-header text-lg font-bold uppercase tracking-tight text-teal-500'>
          Links
        </h2>

        <ul className='font-medium tracking-tight text-slate-200'>
            <MyLinks href='https://jeffersonfed.xyz' text='Personal Landing Page' />
            <MyLinks href='https://portfolio.jeffersonfed.xyz' text='Portfolio (In Progress)' />
            <MyLinks href='https://links.jeffersonfed.xyz' text='Links' />
        </ul>
      </div>

      <div>
        <h2 className='my-2 font-header text-lg font-bold uppercase tracking-tight text-teal-500'>
          Socials
        </h2>

        <ul className='font-medium tracking-tight text-slate-200'>
            <MyLinks href='https://github.com/jeffersonfed' text='GitHub' />
            <MyLinks href='https://instagram.com/jeffersonrj14' text='Instagram' />
            <MyLinks href='https://twitter.com/Jeffersonfed14' text='Twitter' />
          </ul>
      </div>

      <div>
        <h2 className='my-2 font-header text-lg font-bold uppercase tracking-tight text-teal-500'>
          Resume/CV
        </h2>

        <ul className='font-medium tracking-tight text-slate-200'>
          <MyLinks href='https://linkedin.com/in/jeffersonfed' text='Linkedin' />
          {/* <MyLinks href='https://portfolio.jeffersonfed.xyz/Resume_CV.pdf' text='Resume' /> */}
        </ul>
      </div>
      
     
    </section>
  )
}
// const AboutMe2 = () => {
//   return (
//     <section className='my-4 grid grid-cols-2 sm:grid-cols-3'>
//       <div>
//       <h2 className='font-header text-lg font-bold uppercase tracking-tight text-neutral-600'>
//           Personal Links
//         </h2>

//         <ul className='font-medium tracking-tight text-neutral-600'>
//             <LinkLi href='https://jeffersonfed.xyz' text='Blog' />
//             <LinkLi href='https://portfolio.jeffersonfed.xyz' text='Portfolio' />
//             <LinkLi href='https://links.jeffersonfed.xyz' text='Links' />
//         </ul>
//       </div>

//       <div>
//         <h2 className='font-header text-lg font-bold uppercase tracking-tight text-neutral-600'>
//           Socials
//         </h2>

//         <ul className='font-medium tracking-tight text-neutral-600'>
//             <LinkLi href='https://github.com/jeffersonfed' text='GitHub' />
//             <LinkLi href='https://instagram.com/jeffersonrj14' text='Instagram' />
//             <LinkLi href='https://twitter.com/Jeffersonfed14' text='Twitter' />
//           </ul>
//       </div>

//       <div className='overflow-clip'>
//         <h2 className='font-header text-lg font-bold uppercase tracking-tight text-neutral-600'>
//           Other
//         </h2>

//         <ul className='font-medium tracking-tight text-neutral-600'>
//           <LinkLi href='https://linkedin.com/in/jeffersonfed' text='Linkedin' />
//           <LinkLi href='https://portfolio.jeffersonfed.xyz/Resume_CV.pdf' text='Resume' />
//         </ul>
//       </div>
//     </section>
//   )
// }

export const MainWeb = () => {
  return (
    <div className='mt-8 flex w-full flex-col items-center px-8 text-center'>
      <footer className='w-full max-w-2xl'>
        <Navbar />
        <MyName />
        <hr className='my-4 mx-auto border-white border-b-8 rounded-2xl' />
        <AboutMe />
        {/* <AboutMe2 /> */}

        <hr className='my-4 mx-auto border-white border-b-8 rounded-2xl' />

        <section className='my-4 grid grid-cols-1 sm:grid-cols-2'>
          <ul className='font-medium tracking-tight text-white'>
            
            <p className='font-header text-lg font-bold uppercase tracking-tight text-teal-500'>Contact me by:</p>
              <MyLinks href='mailto:businessme430@gmail.com' text='Email' />
              <MyLinks href='https://keybase.io/jeffersonfed' text='Keybase' />
              <MyLinks href='https://discordapp.com/users/606481557615542273' text='Discord' />
          </ul>
          <ul className='font-medium tracking-tight text-white'>
            <p className='font-header text-lg font-bold uppercase tracking-tight text-teal-500'>What Does '<span className='hover:text-white'>FED</span>' means?</p>
            
            <p className='text-slate-300'>
              Many people think that after my name, I put '<span className='hover:text-teal-500'>FED</span>', which they believe stands for Front End Development.
              The truth is, it's not about front-end, it symbolizes '<span className='hover:text-teal-500'>Forever Eager and Driven</span>', encouraging me to keep moving forward.
            </p>
          </ul>
        </section>

        {/* <hr className='my-4 mx-auto border-white border-b-8 rounded-2xl' /> */}

        {/* <section className='my-4 grid grid-cols-1'>
          <ul className='font-medium tracking-tight text-white'>
            <p className='font-header text-lg font-bold uppercase tracking-tight text-white'>What Does '<span className='hover:text-teal-500'>FED</span>' means?</p>
            
            <p className='text-slate-200'>
              Many people think that after my name, I put '<span className='hover:text-teal-500'>FED</span>', which they believe stands for Front End Development.
              The truth is, it's not about front-end, it symbolizes '<span className='hover:text-teal-500'>Forever Eager and Driven</span>', encouraging me to keep moving forward.
            </p>
            
          </ul>
          <ul className='font-medium tracking-tight text-neutral-600'>
          </ul>
        </section> */}

        <hr className='my-4 mx-auto border-white border-b-8 rounded-2xl' />
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='my-4 text-center font-light text-slate-300 md:text-left '>Ritch Johan Jefferson 2023</div>
          <div className='my-4 text-center font-light text-slate-300 md:text-right'>Created using React.js, Tailwind, and Typescript</div>
        </div>
      </footer>
    </div>
  )
}
