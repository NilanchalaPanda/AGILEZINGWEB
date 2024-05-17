function Services() {
  return (
    <div className="px-2 md:my-[200px]">
      <h2 className="text-center text-3xl text-slate-200 md:text-5xl font-bold">
        Experience the Power of Enhanced <br /> Digital Presence
      </h2>
      <p className="text-center text-slate-400 md:mx-auto mt-2 md:w-[40%]">
        Highlight the benefits of Agilezingweb&apos;s services: enhanced digital
        presence, streamlined online operations, and competitive market edge.
      </p>

      {/* CARDS */}
      <div className="px-4 mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-x-10 md:px-10 md:w-[90%] md:mx-auto">
        <div className="bg-gradient-to-tr from-purple-700 from-10% via-black via-50% to-black to-40% bg-blend-darken p-10 rounded-2xl">
          <img
            src="https://api.typedream.com/v0/document/public/2EevvQUTsn4eCQPbhfIordUVN1b_Frame_51109.svg?bucket=document"
            alt="LOGO"
          />
          <h3 className="text-white text-3xl font-semibold mt-2 my-1">
            Enhanced
          </h3>
          <p className="text-slate-300">
            Elevate your online operations to perfection with Agilezingwebs
            tailored solutions, giving your brand a competitive edge in the
            digital marketplace.
          </p>
        </div>
        <div className="bg-gradient-to-tr from-purple-700 from-10% via-black via-50% to-black to-40% bg-blend-darken p-10 rounded-2xl">
          <img
            src="https://api.typedream.com/v0/document/public/2Eexa90t0NZlrMTlSW2L8GAHF9S_Frame_51109_2_.svg?bucket=document"
            alt="LOGO"
          />
          <h3 className="text-white text-3xl font-semibold mt-2 my-1">
            Tailored
          </h3>
          <p className="text-slate-300">
            Tailored brand representation online to resonate with your target
            audience and establish a strong online identity.
          </p>
        </div>
        <div className="bg-gradient-to-tr from-purple-700 from-10% via-black via-50% to-black to-40% bg-blend-darken p-10 rounded-2xl">
          <img
            src="https://api.typedream.com/v0/document/public/2EexPgd6rZ57tXXYQXc0IX6tpPl_Frame_51109_1_.svg?bucket=document"
            alt="LOGO"
          />
          <h3 className="text-white text-3xl font-semibold mt-2 my-1">
            Streamlined
          </h3>
          <p className="text-slate-300">
            Efficiently manage and optimize your online processes for seamless
            operations and improved productivity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
