export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Container */}
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
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="container-box w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-xl p-8 md:p-12 lg:p-16 border border-white/10 hover:shadow-xl hover:shadow-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-center bg-linear-to-r from-[#1999D5] to-[#3E9D62] bg-clip-text text-transparent">
            WelCome to Our Website
          </h1>

          {/* Add your content here */}
          <p className="text-white/80 text-center mt-6 text-lg">
            This Website is only for Job Portal.
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
    </section>
  );
}
