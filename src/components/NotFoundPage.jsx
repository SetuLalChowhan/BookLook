import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowForward, MdConstruction } from 'react-icons/md';
import BannerImage from "@/assets/images/Banner.png"; // Import your background image

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay (optional if you want slight darkening) */}
      

      {/* Main Content */}
      <div 
        className="relative z-10 max-w-2xl"
       
      >
        {/* Animated Construction Icon */}
        <div 
          className="mb-8 text-[#E5E034]"
        
        >
          <MdConstruction className="text-8xl" />
        </div>

        <h1 className="text-[64px] font-caslon font-medium text-[#FEF1D5] mb-4">
          404: Page Not Found
        </h1>
        
        <div className="bg-[#FEF1D5] bg-opacity-10 rounded-xl p-6 mb-8 border border-[#FEF1D5] border-opacity-20">
          <p className="font-poppins font-normal text-[#FEF1D5] text-[20px] mb-2">
            Our digital librarian Tuli is working hard to find your page...
          </p>
          <p className="font-poppins italic text-[#FEF1D5] text-opacity-80 text-[18px]">
            (Please be patient while we shelve this properly)
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => navigate('/')}
            className="shadow-custom px-[34px] py-[14px] flex justify-center items-center border-[1px] border-primary rounded-[12px] text-primary text-lg font-bold font-miriam bg-opacity-[0.18] bg-primary hover:bg-opacity-30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            
          >
            RETURN TO SHELF
          </button>
        </div>
      </div>

      {/* Footer */}
      <div 
        className="absolute bottom-10 text-[#FEF1D5] text-opacity-70 text-sm font-poppins z-10"
    
      >
        © {new Date().getFullYear()} BOI. · All stories reserved
      </div>
    </div>
  );
};

export default NotFoundPage;
