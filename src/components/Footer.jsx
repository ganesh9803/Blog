const Footer = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8 max-w-7xl mx-auto">
        <div>
          <h3 className="text-[#667085] text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-[#475467] font-bold">
            <li>Overview</li>
            <li>Features</li>
            <li>
              Solutions{" "}
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-xl ml-2">
                New
              </span>
            </li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#667085] text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-[#475467] font-bold">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#667085] text-lg font-semibold mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-[#475467] font-bold">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#667085] text-lg font-semibold mb-4">
            Use cases
          </h3>
          <ul className="space-y-2 text-[#475467] font-bold">
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#667085] text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-2 text-[#475467] font-bold">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#667085] text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-[#475467] font-bold">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 mb-6" />

      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.imgur.com/kj3uZWA.png"
            alt="Logo"
            className="w-200 h-10 rounded-sm"
          />
        </div>
        <p className="text-gray-600 font-medium mt-4 md:mt-0">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
