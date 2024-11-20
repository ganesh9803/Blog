import { FaArrowRight } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";

const FeaturePart3 = () => {
  return (
    <div className="bg-white py-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <span className="text-md font-semibold p-2  bg-[#F9F5FF] text-[#6941C6] rounded-full">
            New Feature
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-4">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className=" flex justify-center gap-4 mb-12">
          <img
            src="https://s3-alpha-sig.figma.com/img/91ca/8938/7f26a92b60f8e7bf4bfe8c9f528cf3c1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UjMp68SDPTXweu3bYd1bEp~dpwGLzEMbB8m42k5HyVN4XUJyd-DiQq1Jty9ls5VGsQQ1W3sR2qaNI-AhfrENiMfvgLO7EZ~j22ywRb1mkQYWKEVABsggelqDmAyqkmKMfckoNldW~hGrEqWs6AFlw1zz7ha3hDsxWha1vkMsa9mGTmF6SlzvAnCTWhW0Y3qPDGbnaJAFksymYFTPryXcDqy~7~omMpFbNbcBmjOISI0GhOhzN0Vp18JCyXe~0XByLt5Og-VBp8vJYKBdU5l~flN7jAwo6oojLQ0voD1h8ln03uVBgtgEfDh2Q1d9Fwq41tG-MmViEKCuklGDbhT65g__"
            alt="Small Image"
            className="w-60 md:w-70 h-50 md:h-90 md:mt-12 rounded-lg bg-black p-1"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SR~9DeM3vhGlHKTXqXxCLv7xU~J9DMhzVlb9nhLAkmmQdHwgtmcnRzEqg7WwXFOcNtIvLiBTjRYjoGT7uQXK8AHbUTzZpx42v~ozCdmt7qHZj1lKKSIKoa6gPKqfUXn-o8KOTZ-fDnMdb-cjkgkWKG6DX9M-CRhMCFB2zIiKHR~1WTRiLVdrM43n8tKebyUMUtIc3quxvOQoYDRo4I4IuTBNY18XSQpng4IChSOb~38dEboVgA71IqMYd4KHCFzjhwVnCJEi2stv55O5ehPHzMyTg~BqZ~vrqibehhAcYl1iqiSDCYUR1Y4bNLhOfShsTULsjiFZfSHq-e2PVn93hQ__"
            alt="Big Image"
            className="hidden md:block w-full md:w-1/2 md:h-90 h-full rounded-lg bg-black p-1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center bg-white shadow-md rounded-md mb-2">
            <div className="text-center p-6">
              <FaRegMessage className="text-gray-800 text-6xl mx-auto border shadow-md p-4 rounded-lg" />
              <p className="mt-4 mb-4 text-xl font-bold text-gray-800">
                Share team inboxes
              </p>
              <p className="text-gray-700 mb-3">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
              <div className="md:flex items-center justify-center">
                <a href="#" className="text-[#6941C6] hover:underline">
                  Learn more
                </a>
                <FaArrowRight className="text-[#6941C6] md:text-sm ml-2" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white shadow-md rounded-md mb-2">
            <div className="text-center p-6">
              <AiFillThunderbolt className="text-gray-800 text-6xl mx-auto border shadow-md p-4 rounded-lg" />
              <p className="mt-4 mb-4 text-xl font-bold text-gray-800">
                Deliver instant answers
              </p>
              <p className="text-gray-700 mb-3">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
              <div className="md:flex items-center justify-center">
                <a href="#" className="text-[#6941C6] hover:underline">
                  Learn more
                </a>
                <FaArrowRight className="text-[#6941C6] md:text-sm ml-2" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white shadow-md rounded-md mb-2">
            <div className="text-center p-6">
              <RiCustomerService2Line className="text-gray-800 text-6xl mx-auto border shadow-md p-4 rounded-lg" />
              <p className="mt-4 mb-4 text-xl font-bold text-gray-800">
                Manage your team with reports
              </p>
              <p className="text-gray-700 mb-3">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple of
                clicks.
              </p>
              <div className="md:flex items-center justify-center">
                <a href="#" className="text-[#6941C6] hover:underline">
                  Learn more
                </a>
                <FaArrowRight className="text-[#6941C6] md:text-sm ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePart3;
