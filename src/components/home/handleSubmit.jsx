import React, { useState } from 'react';

export default function DiscountSubscribe() {
  const [email, setEmail] = useState('');

  // Email validation using regex
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      alert('Please enter your email address.');
      setEmail(''); // Clear input after alert
      return;
    }
    if (!validateEmail(email)) {
      alert('Incorrect email format. Please enter a valid email.');
      setEmail(''); // Clear input after alert
      return;
    }
    alert(`Thank you for subscribing with: ${email}`);
    setEmail(''); // Clear input after alert
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto min-h-[320px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/home/handleSubmit.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-5 items-center sm:items-start sm:justify-start justify-center">
          <div className="flex flex-col items-center sm:items-start px-4 sm:px-0">
            <h1
              className="text-white font-semibold text-[32px] md:text-[40px]"
              style={{ fontFamily: "Lato", lineHeight: "130%" }}
            >
              Get more discount
            </h1>
            <h2
              className="text-white font-semibold text-[32px] md:text-[40px]"
              style={{ fontFamily: "Lato", lineHeight: "130%" }}
            >
              Off your order
            </h2>
            <p className="text-white text-base md:text-lg mb-8 opacity-95 font-light text-center sm:text-left">
              Join our mailing list
            </p>
            <div className="w-full flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-12 py-3 rounded-[50px] text-gray-800 text-base focus:outline-none focus:ring-4 focus:ring-orange-400 shadow-lg"
              />
              <button
                onClick={handleSubmit}
                className="px-10 py-3 bg-[#381900] hover:bg-orange-900 text-white font-semibold text-base rounded-[50px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
