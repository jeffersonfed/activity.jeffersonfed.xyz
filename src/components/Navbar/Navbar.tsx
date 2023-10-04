import * as React from 'react'
import { Link } from "react-router-dom";
// import { ExternalLink } from "react-external-link";
  
export function Navbar() {
  return (

      <section className='my-4 grid grid-cols-1 sm:grid-cols-1'>
      <div>
        <div className='text-center my-4 grid grid-cols-2 sm:grid-cols-2'>
          <h2 className='font-header text-lg font-bold uppercase tracking-tight text-teal-500 list-none'>
            <Link to="/">Home</Link>
          </h2>
          <h2 className='font-header text-lg font-bold uppercase tracking-tight text-teal-500 list-none'>
            <Link to="/about">About</Link>
          </h2>
        </div>

        {/* <p className='my-2 font-semibold text-slate-200'>Ritch Johan Jefferson</p>
        <p className='my-2 font-medium text-slate-200'>"Jefferson<span className='hover:text-red-500'>RJ</span> / Jefferson<span className='hover:text-teal-500'>FED</span>"</p> */}
      </div>

    </section>

  );
}
