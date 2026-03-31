import Link from "next/link";

const NotFound = () => {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">Page Not Found</p>

      <Link
        href="/"
        className="px-6 py-3 bg-white-600 
        hover:bg-white-700
         rounded-lg transition-all
          duration-300"
      >
      
      </Link>
    </div>
  );
};

export default NotFound;
