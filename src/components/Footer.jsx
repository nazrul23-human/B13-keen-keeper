import { FaFacebookF, FaGithub, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo & Description */}
        <div className="text-center">
          <h2 className="text-6xl font-bold">KeenKeeper</h2>

          <p className="mt-4 text-sm text-gray-300 max-w-3xl mx-auto">
            Your personal shelf of meaningful connections.
            Browse, tend, and nurture the relationships
            that matter most.
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center mt-8">
          <h3 className="font-semibold mb-4">Social Links</h3>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#244D3F] flex items-center justify-center"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#244D3F] flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#244D3F] flex items-center justify-center"
            >
              <FaTimes />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;