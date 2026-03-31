export default function SecondSection() {
  return (
    <section className="min-h-screen relative bg-black">
      <div className="mx-auto w-82 h-fit align-center pt-30">
        <h1 className="relative inline-block font-bold text-2xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-sans leading-10 text-center whitespace-nowrap text-white group">
          Join Our Community
          {/* Elegant line effect */}
          <span className="absolute left-1/2 -bottom-2 w-0 h-0.5 bg-linear-to-r from-[#1999D5] via-[#3E9D62] to-[#1999D5] group-hover:w-full transition-all duration-500 -translate-x-1/2 shadow-[0_0_15px_rgba(25,153,213,0.5)]" />
        </h1>{" "}
      </div>
      {/* Responsive white container */}
      <div className="min-h-screen  flex items-center justify-center p-4 pb-25">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* First Image Card */}
          <div className="relative w-full aspect-16/10 bg-white rounded-lg shadow-lg group overflow-hidden">
            <img
              src="/assets/images/For Employers.png"
              className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out group-hover:scale-110"
              alt="For Employers"
            />
          </div>

          {/* Second Image Card */}
          <div className="relative w-full aspect-16/10 bg-white rounded-lg shadow-lg group overflow-hidden">
            <img
              src="assets/images/Join Our Community.png"
              className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out group-hover:scale-110"
              alt="Resume Upload"
            />
          </div>

          {/* Third Image Card */}
          <div className="relative w-full aspect-16/10 bg-white rounded-lg shadow-lg group overflow-hidden">
            <img
              src="/assets/images/Job Search Hero.png"
              className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out group-hover:scale-110"
              alt="Resume Upload"
            />
          </div>

          {/* Fourth Image Card */}
          <div className="relative w-full aspect-16/10 bg-white rounded-lg shadow-lg group overflow-hidden">
            <img
              src="assets/images/Success Stories.png"
              className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out group-hover:scale-110"
              alt="Resume Upload"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
