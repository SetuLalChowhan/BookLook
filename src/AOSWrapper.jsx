// src/components/AOSWrapper.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true, // Change to false if you want animations to repeat
    });
    
    return () => {
      AOS.refresh(); // Optional: Refresh AOS when component unmounts
    };
  }, []);

  return children;
};

export default AOSWrapper;