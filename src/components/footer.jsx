import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Career', href: '/career' },
      { name: 'Media', href: '/media' },
      { name: 'Blog', href: '/blog' },
      { name: 'Our Stores', href: '/stores' },
      { name: 'Customer Stories', href: '/stories' },
      { name: 'Investor Relations', href: '/investors' }
    ],
    links: [
      { name: 'Custom Furniture', href: '/custom-furniture' },
      { name: 'Hotel Furniture', href: '/hotel-furniture' },
      { name: 'Delivery Location', href: '/delivery' },
      { name: 'Sitemap', href: '/sitemap' }
    ],
    rooms: [
      { name: 'Living Room', href: '/living-room' },
      { name: 'Bedroom', href: '/bedroom' },
      { name: 'Dining Room', href: '/dining-room' },
      { name: 'Kids Room', href: '/kids-room' },
      { name: 'Modular Kitchen Designs', href: '/kitchen' }
    ],
    help: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Track Your Order', href: '/track-order' },
      { name: 'Ask an Expert', href: '/expert' }
    ]
  };

  const socialMedia = [
    { icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700' }
  ];
  // FF7F19

  const paymentMethods = [
    { name: 'payment', img: '/images/payment.png' },

    // { name: 'Mastercard', img: 'https://img.icons8.com/color/48/mastercard.png' },
    // { name: 'Maestro', img: 'https://img.icons8.com/color/48/maestro.png' },
    // { name: 'Amex', img: 'https://img.icons8.com/color/48/amex.png' },
    // { name: 'RuPay', img: 'https://img.icons8.com/color/48/rupay.png' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#F4F4F4B0] to-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        {/* Top Section - Logo and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 pb-8 border-b border-gray-300">

          {/* Logo and Social Media */}
          <div className="lg:col-span-2 ">

            {/* <div className="lg:col-span-2 flex flex-col items-center lg:items-start"> agar center me karna ho phoneview me */}

            <div className="mb-4">
              <h2 className="text-3xl font-bold">
                <span className="text-orange-500">SANDI</span>
                <span className="text-[#000000]">CO</span>
              </h2>
            </div>
            
            {/* Company Address */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 leading-relaxed bg">
                123 Business Street, Floor 5 
                Commercial Area, Lucknow<br />
                Uttar Pradesh 226001, India
              </p>
            </div>

            {/* Social Media */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full  shadow-md flex items-center justify-center text-[#000000] transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg hover:scale-110`}
                  >
                    {/* background: #D9D9D9;*/}
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* App Downloads */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                Download App
              </h3>
              <div className="flex space-x-2">
                <a href="#" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-10"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:col-span-4">

  {/* Our Company */}
  <div>
    <h3 className="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider">
      Our Company
    </h3>
    <ul className="space-y-2">
      {footerLinks.company.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-[#6A6A6A] hover:text-[#FF7F19] hover:font-bold transition-all duration-200 text-sm"

          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Useful Links */}
  <div>
    <h3 className="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider">
      Useful Links
    </h3>
    <ul className="space-y-2">
      {footerLinks.links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
           className="text-[#6A6A6A] hover:text-[#FF7F19] hover:font-bold transition-all duration-200 text-sm"

          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Shop By Room */}
  <div>
    <h3 className="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider">
      Shop By Room
    </h3>
    <ul className="space-y-2">
      {footerLinks.rooms.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}className="text-[#6A6A6A] hover:text-[#FF7F19] hover:font-bold transition-all duration-200 text-sm"

          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Need Help */}
  <div>
    <h3 className="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider">
      Need Help
    </h3>
    <ul className="space-y-2">
      {footerLinks.help.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
           className="text-[#6A6A6A] hover:text-[#FF7F19] hover:font-bold transition-all duration-200 text-sm"

          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>

</div>


        </div>

       

       

        {/* Bottom Section - Copyright and Legal */}
        <div className="pt-6">
  <div className="flex flex-col md:grid md:grid-cols-3 md:items-center md:gap-4">

    {/* Left Text */}
    <div className="flex justify-center md:justify-start">
      <p className="text-sm text-[#6A6A6A] text-center md:text-left">
        Copyright 2025 <span className="font-semibold text-[#6A6A6A]"></span>. All Rights Reserved.
      </p>
    </div>

    {/* Center Payment Image */}
    <div className="flex justify-center">
      <div className="h-8 bg-white flex items-center justify-center px-3 rounded shadow-sm">
        <img
          src="/images/payment.png"
          alt="Payment Methods"
          className="h-full object-contain"
        />
      </div>
    </div>

    {/* Right Links */}
    <div className="flex justify-center md:justify-end space-x-6 mt-3 md:mt-0">
      <a
        href="/terms"
        className="text-[#6A6A6A] hover:text-[#FF7F19] text-sm"
      >
        Terms & Conditions
      </a>

      <a
        href="/privacy"
        className="text-[#6A6A6A] hover:text-[#FF7F19] text-sm"
      >
        Privacy Policy
      </a>
    </div>

  </div>
</div>

      </div>
    </footer>
  );
}