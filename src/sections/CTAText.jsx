function CTAText() {
  return (
    <div className="bg-black flex flex-col justify-center items-center gap-10 my-20 ">
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-3xl md:text-5xl text-slate-200 font-extrabold">
          Encourage visitors to start
        </h2>
        <h2 className="text-center text-3xl md:text-5xl text-slate-200 font-extrabold">
          their brands digital{" "}
        </h2>
        <h2 className="text-center text-3xl md:text-5xl text-slate-200 font-extrabold">
          transformation journey
        </h2>
        <h2 className="text-center text-3xl md:text-5xl text-slate-200 font-extrabold">
          with AgileZingWeb
        </h2>
      </div>
      <button className="bg-secondary text-slate-200 font-semibold text-lg rounded-3xl px-6 py-2">
        Begin your digital transformation
      </button>
    </div>
  );
}

export default CTAText;