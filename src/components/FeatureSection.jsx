import Blog from "./Blog";
import FeatureSection2 from "./FeatureSection2";
import Footer from "./Footer";
import CTAsection from "./CTAsection";
import { FaArrowRight } from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";
import Logo from "./Logo";


const FeatureSection = () => {
  return (
    <>
      <div className="bg-grey-100 py-12 px-6 md:px-16">
        <div className="w-full flex-col items-center justify-center mx-auto rounded-3xl">
          <div className="flex items-center justify-center">
            <div className="flex md:w-1/3 items-center justify-between border bg-[#f2dbf2] p-1 rounded-full shadow-sm mb-4">
              <span className="text-md p-1 font-semibold bg-[#F9F5FF] text-[#6941C6] rounded-full">
                New Feature
              </span>
              <div className="md:flex flex items-center">
                <p className=" text-md text-[#6941C6]">
                  Check out the team dashboard
                </p>
                <FaArrowRight className="text-[#6941C6] md:text-sm ml-2" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-black mb-6">
              Beautiful analytics to grow smarter
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="flex items-center gap-4  text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
                <RiVideoLine className="text-black text-2xl" />
                <span className="text-sm md:text-base font-medium text-black">
                  Demo
                </span>
              </div>

              <button className=" bg-[#6941C6] text-sm md:text-base font-medium text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <img
          className="mt-6 border-t-4 border-l-4 border-r-4 border-black rounded-t-lg"
          src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SR~9DeM3vhGlHKTXqXxCLv7xU~J9DMhzVlb9nhLAkmmQdHwgtmcnRzEqg7WwXFOcNtIvLiBTjRYjoGT7uQXK8AHbUTzZpx42v~ozCdmt7qHZj1lKKSIKoa6gPKqfUXn-o8KOTZ-fDnMdb-cjkgkWKG6DX9M-CRhMCFB2zIiKHR~1WTRiLVdrM43n8tKebyUMUtIc3quxvOQoYDRo4I4IuTBNY18XSQpng4IChSOb~38dEboVgA71IqMYd4KHCFzjhwVnCJEi2stv55O5ehPHzMyTg~BqZ~vrqibehhAcYl1iqiSDCYUR1Y4bNLhOfShsTULsjiFZfSHq-e2PVn93hQ__"
          alt="Team Dashboard"
        />
       <Logo />
        <FeatureSection2 />
      </div>
      <CTAsection />
      <Blog />
      <Footer />
    </>
  );
};

export default FeatureSection;
