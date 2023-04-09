const Teams = () => {
  return (
    <section className="md:h-[90vh]">
      <div className=" flexCenter flex-col gap-y-10 ">
        <h1 className=" font-thin bigText">OUR TEAM</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-x-5">
          {/* <div className="flex"> */}
          <div className=" border border-slate-400 shadow h-[500px] w-[100%]">
            <div className="h-[70%]">
              <img
                src="/images/man hold camera.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[30%] flexCenter flex-col">
              <p>DYLAN GEORGE</p>
            </div>
          </div>

          {/* second car */}
          <div className=" border border-slate-400 shadow h-[500px] w-[100%]">
            <div className="h-[70%]">
              <img
                src="/images/man hold camera.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[30%] flexCenter flex-col">
              <p>DYLAN GEORGE</p>
            </div>
          </div>

          {/* second car */}
          <div className=" border border-slate-400 shadow h-[500px] w-[100%]">
            <div className="h-[70%]">
              <img
                src="/images/man hold camera.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[30%] flexCenter flex-col">
              <p>DYLAN GEORGE</p>
            </div>
          </div>

          {/* second car */}
        </div>
      </div>
    </section>
  );
};

export default Teams;
