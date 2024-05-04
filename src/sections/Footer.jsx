function Footer() {
  return (
    <>
      <div className="flex flex-col py-10 justify-around w-full gap-x-8 gap-y-3 px-8 md:flex-row md:px-0">
        {/* LEFT PART */}
        <div className="w-full md:w-1/3">
          <h3 className="text-slate-200 text-2xl">AgilezingWeb</h3>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            maxime id illo dolor recusandae quas aut quo aperiam aliquid
            voluptate.
          </p>
          <ul className="flex gap-x-6 mt-3">
            <li className="text-black font-extrabold h-10 w-10 flex justify-center items-center rounded-full bg-slate-400">
              I
            </li>
            <li className="text-black font-extrabold h-10 w-10 flex justify-center items-center rounded-full bg-slate-400">
              T
            </li>
            <li className="text-black font-extrabold h-10 w-10 flex justify-center items-center rounded-full bg-slate-400">
              L
            </li>
          </ul>
        </div>

        {/* RIGHT PART */}
        <div>
          <h3 className="text-slate-200 text-2xl">Quick Links</h3>
          <ul className="mt-3 space-y-1">
            <li className="text-slate-400">Services</li>
            <li className="text-slate-400">Projects</li>
            <li className="text-slate-400">Contact</li>
          </ul>
        </div>
      </div>
      {/* <hr className="my-4 w-50%" /> */}
      <p className="text-gray-200 flex justify-center mb-10">
        &copy; 2023 AgileZingWeb. All rights reserved.
      </p>
    </>
  );
}

export default Footer;
