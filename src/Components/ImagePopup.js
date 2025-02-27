import { useState, useEffect } from 'react';

const ImagePopup = ({ imageUrl, delay = 2000 }) => {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowPopup(true); // Show popup after delay
      }, delay);
  
      return () => clearTimeout(timer); // Cleanup on unmount
    }, [delay]);

  return (
    <>
    {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-md">
          <button
            className="absolute top-[-50px] text-[#334155]  rounded-full p-2 bg-white right-2"
            onClick={() => setShowPopup(false)}>
            ✖
          </button>
          <img
            src={imageUrl} 
            alt="Popup"
            className=""
          />
        </div>
      </div>
    )}
  </>
  )
}

export default ImagePopup
