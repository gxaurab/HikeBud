import facebook from '../assets/FooterIcons/facebook.webp'
import instagram from '../assets/FooterIcons/instagram.jpg'
import youtube from '../assets/FooterIcons/youtube.jpg'
import github from '../assets/FooterIcons/github.webp'
import HikeBudLogo from '/MainLogo.svg'

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-t-3xl flex flex-col sm:flex-row p-6 sm:p-8 gap-6 sm:gap-8 sm:justify-around">
      
      {/* Logo and Description Section */}
      <div className="flex flex-col max-w-sm">
        <img src={HikeBudLogo} className="max-w-64 sm:max-w-80 mb-4"/>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          HikeBud started as an internship project in 2025 by Gaurab Wagle during his internship at Arbyte Solutions, an IT firm based in Nepal.
          <br/><br/>
          It grew to become the best hiking and traveling recommendation platform.
          <br/><br/>
          <span className="font-medium text-green-700">Contribute by sharing this site!</span>
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col gap-4 max-w-sm">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-b-2 border-green-300 pb-2">
          Get In Touch
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-medium text-gray-700 mb-1">For Business Inquiries:</h3>
            <p className="text-sm text-gray-600 mb-2">Promotion • Collaboration • Advertisement • Suggestions</p>
            <a href="mailto:hikebud.hike@gmail.com" className="text-green-600 hover:text-green-800 font-medium">
              hikebud.hike@gmail.com
            </a>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">Phone:</h3>
            <a href="tel:+9779813626267" className="text-green-600 hover:text-green-800 font-medium">
              +977 9813626267
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-b-2 border-green-300 pb-2">
          Follow Us
        </h2>
        <div className="flex gap-3 sm:flex-col sm:gap-2">
          <div className="flex items-center gap-2 hover:bg-green-200 p-2 rounded-lg transition-colors">
            <img alt="github" src={github} className="w-[43px] h-[43px]"/>
            <span className="hidden sm:inline text-gray-700 font-medium">GitHub</span>
          </div>
          <div className="flex items-center gap-2 hover:bg-green-200 p-2 rounded-lg transition-colors">
            <img alt="instagram" src={instagram} className="w-[45px] h-[43px]"/>
            <span className="hidden sm:inline text-gray-700 font-medium">Instagram</span>
          </div>
          <div className="flex items-center gap-2 hover:bg-green-200 p-2 rounded-lg transition-colors">
            <img alt="youtube" src={youtube} className="w-[43px] h-[43px]"/>
            <span className="hidden sm:inline text-gray-700 font-medium">YouTube</span>
          </div>
          <div className="flex items-center gap-2 hover:bg-green-200 p-2 rounded-lg transition-colors">
            <img alt="facebook" src={facebook} className="w-[43px] h-[43px]"/>
            <span className="hidden sm:inline text-gray-700 font-medium">Facebook</span>
          </div>
        </div>
      </div>

      {/* Copyright Section - Full Width on Mobile */}
      <div className="sm:hidden mt-6 pt-4 border-t border-green-300 text-center">
        <p className="text-xs text-gray-600">
          © 2025 HikeBud. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer