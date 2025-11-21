import React, { useEffect, useState } from "react";
import { Smile, ShieldCheck, Truck, Factory, Clock } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banks = [
  {
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpG25DXG8DNbRBi8tYWnE4X-rUo6Oq2ROsA&s",
    name: "HDFC BANK",
    desc: "5% Instant Discount*",
    subdesc: "on HDFC Bank EASY EMI on Cards and more discount to visit",
  },
  {
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpG25DXG8DNbRBi8tYWnE4X-rUo6Oq2ROsA&s",
    name: "ICICI BANK",
    desc: "5% Instant Discount*",
    subdesc: "on ICICI Bank Cards",
  },
  {
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpG25DXG8DNbRBi8tYWnE4X-rUo6Oq2ROsA&s",
    name: "SBI BANK",
    desc: "5% Instant Discount*",
    subdesc: "on SBI Cards",
  },
];

const benefits = [
  {
    icon: <Smile size={28} strokeWidth={2} />,
    title: "20 Lakh+",
    desc: "Happy Customer",
  },
  {
    icon: <Truck size={28} strokeWidth={2} />,
    title: "Free",
    desc: "Delivery",
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={2} />,
    title: "Best",
    desc: "Warranty*",
  },
  {
    icon: <Factory size={28} strokeWidth={2} />,
    title: "15 Lakh sq. ft.",
    desc: "Mfg. Unit",
  },
];

const SaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 8,
    minutes: 11,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else clearInterval(timer);

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const bankSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    swipe: true,
    pauseOnHover: true,
  };

  const formatNum = (num) => (num < 10 ? "0" + num : num);

  return (
    <div className="max-w-7xl mx-auto ">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Sale Timer - Top */}
        <div className="bg-white  border-t-2 border-[#E5E7EB] py-3 px-4">
          <div className="flex items-center justify-center gap-2 text-[#D90303]">
            <Clock size={16} />
            <span className="font-semibold text-sm">Sale Ends In -</span>
            <span className="font-bold text-sm">
              {formatNum(timeLeft.days)}d {formatNum(timeLeft.hours)}h {formatNum(timeLeft.minutes)}m {formatNum(timeLeft.seconds)}s
            </span>
          </div>
        </div>

        {/* Bank Offers Slider */}
        <div className="bg-white   py-3 px-4 bg-white"> 
          <Slider {...bankSliderSettings}>
            {banks.map((bank, i) => (
              <div key={i}>
                <div className="flex items-start ">
                  <div className="flex-shrink-0 flex items-center justify-center mr-8">
                    <img
                      src={bank.logoUrl}
                      alt={bank.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#1E40AF] text-base font-bold mt-1">
                      {bank.desc}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {bank.subdesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Why Choose Section */}
        <div className="bg-white  border-t-2 border-[#E5E7EB] py-3 px-4">
          <h2 className="text-center text-gray-800 font-semibold text-base mb-4">
            Why Choose Wooden Street?
          </h2>

          <div className="grid grid-cols-4 gap-3">
            {benefits.map(({ icon, title, desc }, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full  border-[#FF7F19] flex items-center justify-center text-[#FF7F19] mb-2">
                  {icon}
                </div>
                <div className="text-xs font-semibold text-gray-800 leading-tight">
                  {title}
                </div>
                {desc && (
                  <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                    {desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Original */}
      <div className="hidden lg:block">
        <div className="bg-white border-2 overflow-hidden bg-[#F4F4F4]">
          <div className="m-2 bg-[#FFFFFF]">
            <div className="flex items-stretch">
              
              {/* LEFT - SALE + TIMER */}
              <div className="flex items-center gap-5 px-6 py-4 relative">
                <div className="flex flex-col items-start">
                  <span className="text-[#D90303] font-semibold text-lg tracking-tight">SALE</span>
                  <span className="text-[#D90303] font-semibold text-xs">Ends in</span>
                </div>

                <div className="flex flex-col">
                  <div className="text-[#D90303] font-semibold text-xl font-Lato tracking-wide">
                    {formatNum(timeLeft.days)} : {formatNum(timeLeft.hours)} :{" "}
                    {formatNum(timeLeft.minutes)} : {formatNum(timeLeft.seconds)}
                  </div>

                  <div className="flex justify-between text-[10px] text-[#404040] tracking-widest font-medium mt-0.5">
                    <span className="w-9 text-center">DAYS</span>
                    <span className="w-9 text-center">HRS</span>
                    <span className="w-9 text-center">MINS</span>
                    <span className="w-9 text-center">SECS</span>
                  </div>
                </div>
                <span className="h-14 w-px bg-[#D9D9D9] absolute right-0 top-1/2 -translate-y-1/2"></span>
              </div>

              {/* CENTER - BANK SLIDER */}
              <div className="w-[300px] px-6 py-4 relative">
                <Slider {...bankSliderSettings}>
                  {banks.map((bank, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center flex-shrink-0">
                          <img
                            src={bank.logoUrl}
                            alt={bank.name}
                            className="w-10 h-10 object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-bold text-blue-700 truncate mb-0.5">
                            {bank.desc}
                          </h3>
                          <p className="text-xs text-gray-600 truncate leading-relaxed">
                            {bank.subdesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <span className="h-14 w-px bg-[#D9D9D9] absolute right-0 top-1/2 -translate-y-1/2"></span>
              </div>

              {/* RIGHT - BENEFITS */}
              <div className="flex flex-wrap gap-10 px-6 py-4 flex-1 items-center justify-start">
                {benefits.map(({ icon, title, desc }, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="flex items-center justify-center p-[8px] rounded-full bg-white text-[#FF7F19] ring-1 ring-[#FF7F19] shadow-sm transition-transform hover:scale-105">
                      {icon}
                    </div>

                    <div className="text-left">
                      <div className="text-sm font-bold text-gray-800 leading-tight">{title}</div>
                      {desc && (
                        <div className="text-xs text-gray-500 font-medium leading-tight mt-0.5">
                          {desc}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;