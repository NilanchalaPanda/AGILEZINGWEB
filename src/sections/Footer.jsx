import React from 'react'

function Footer() {
  return (
<footer className="">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-primary lg:justify-start">
          <h3 className='text-3xl font-bold '>AgileZingWeb</h3>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
          cum itaque neque.
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-slate-200 transition hover:text-slate-200" href="#"> About </a>
        </li>

        <li>
          <a className="text-slate-200 transition hover:text-slate-200" href="#"> Services </a>
        </li>

        <li>
          <a className="text-slate-200 transition hover:text-slate-200" href="#"> Projects </a>
        </li>

        <li>
          <a className="text-slate-200 transition hover:text-slate-200" href="#"> Blog </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-white lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>
  )
}

export default Footer