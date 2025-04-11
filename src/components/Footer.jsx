import {
    Mail,
    Phone,
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
    Instagram
  } from 'lucide-react';
  
  const trendingPrograms = [
    {
      university: 'Chechen State Medical University',
      title: 'MBBS (General Medicine)',
    },
    {
      university: 'Tver State Medical University',
      title: 'General Medicine (with Internship)',
    },
    {
      university: 'Tver State Medical University',
      title: 'Dentistry',
    },
    {
      university: 'Tver State Medical University',
      title: 'Pharmacy',
    },
    {
      university: 'Tver State Medical University',
      title: 'Pediatrics',
    },
    {
      university: 'Sevastopol State University',
      title: 'General Medicine (Fully English Medium)',
    },
    {
      university: 'Sevastopol State University',
      title: 'Medical Biophysics',
    },
    {
      university: 'Sevastopol State University',
      title: 'Nursing',
    },
    {
      university: 'Tver State Medical University',
      title: '35 PhD Programs / 34 Residency Programs',
    },
  ];
  
  const Footer = () => {
    return (
      <footer className="bg-zinc-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
  
          {/* Trending Programs */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Trending Programs</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {trendingPrograms.map((program, index) => (
                <li key={index}>
                  <span className="block font-medium text-white">{program.university}</span>
                  <span className="text-sm">{program.title}</span>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Degrees */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Degrees</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>MBA Courses</li>
              <li>Masters Courses</li>
            </ul>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Careers at Gulf Education Tech</li>
              <li>Grievance Redressal</li>
              <li>Contact Us</li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Gulf Education Tech</h4>
            <div className="text-sm space-y-4">
              <div>
                <p className="text-gray-400">India:</p>
                <div className="flex items-center gap-2"><Mail size={16} /> info@gulfeducationtech.com</div>
                <div className="flex items-center gap-2"><Phone size={16} /> 080 6947 4555</div>
              </div>
              <div>
                <p className="text-gray-400">International:</p>
                <div className="flex items-center gap-2"><Mail size={16} /> global@gulfeducationtech.com</div>
                <div className="flex items-center gap-2"><Phone size={16} /> +1 512 647 2647</div>
              </div>
              <div>
                <p className="text-gray-400">Enterprise:</p>
                <div className="flex items-center gap-2"><Mail size={16} /> business@gulfeducationtech.com</div>
              </div>
            </div>
  
            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-gray-300">
              <Facebook size={20} />
              <Twitter size={20} />
              <Linkedin size={20} />
              <Youtube size={20} />
              <Instagram size={20} />
            </div>
          </div>
        </div>
  
        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gulf Education Tech. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  