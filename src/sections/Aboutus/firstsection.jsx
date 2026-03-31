export default function Firstsection() {
  return (
    <section className="py-5 min-h-screen">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('/assets/images/give-clean-clear-background-image-for-realastic-we.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
          <div className=" w-full max-w-4xl bg-[#]   rounded-xl p-8 md:p-12 lg:p-16  ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-center bg-linear-to-r from-[#1999D5] to-[#3E9D62] bg-clip-text text-transparent">
              About Our Company's
            </h1><br />

            {/* Add your content here */}
            <p className="text-white/80 text-italic text-center mt-6 text-lg">
            <i>
              JobForITI is a dedicated job information platform created to help
              ITI students and job seekers find the latest employment
              opportunities across India. Our mission is to provide accurate,
              fast, and easy-to-understand information about government jobs,
              private sector vacancies, apprenticeships, and recruitment
              notifications specially relevant for ITI candidates.
              </i>
            </p>

            {/* Example button */}
            <div className="flex justify-center mt-8">
              <button className="px-8 py-3 bg-linear-to-r from-[#1999D5] to-[#3E9D62] text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Let's Started
                <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
