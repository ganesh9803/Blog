import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const QuestionPart = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <>
      <div className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h1>

          <p className="text-lg text-[#475467] mb-8">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-xl font-bold text-gray-800">
                Is there a free trial available?
              </p>

              <button
                onClick={() => {
                  setIsOpen1(!isOpen1);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen1 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-700" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-700" />
                )}
              </button>
            </div>

            {isOpen1 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-xl font-bold text-gray-800">
                Can I change my plan later?
              </p>

              <button
                onClick={() => {
                  setIsOpen2(!isOpen2);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen2 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-700" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-700" />
                )}
              </button>
            </div>

            {isOpen2 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Yes, you can change your plan later with some services,
                including Later, Cognito Forms.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-xl font-bold text-gray-800">
                What is your cancellation policy?
              </p>

              <button
                onClick={() => {
                  setIsOpen3(!isOpen3);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen3 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-700" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-700" />
                )}
              </button>
            </div>

            {isOpen3 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                A cancellation policy is a set of rules and guidelines that
                outline the terms and conditions for canceling a reservation,
                booking, or order
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-xl font-bold text-gray-800">
                Can other info be added to an invoice?
              </p>

              <button
                onClick={() => {
                  setIsOpen4(!isOpen4);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen4 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-700" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-700" />
                )}
              </button>
            </div>

            {isOpen4 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                The mandatory invoice information such as the invoice number,
                issue date, and payment terms are either updated automatically
                or can be adjusted with a click or two
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-xl font-bold text-gray-800">
                How does billing work?
              </p>

              <button
                onClick={() => {
                  setIsOpen5(!isOpen5);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen5 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-700" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-700" />
                )}
              </button>
            </div>

            {isOpen5 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Billing is the process when a business sends an invoice to the
                payee or customer for the products or services provided and
                collects payment. It is a crucial process in finance and helps
                businesses manage their cash flow, track revenue, and maintain
                accurate records.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-xl font-bold text-gray-800">
                How do I change my account email?
              </p>

              <button
                onClick={() => {
                  setIsOpen6(!isOpen6);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen6 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-700" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-700" />
                )}
              </button>
            </div>

            {isOpen6 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Open your device Settings app and tap Google Your name. Manage
                your Google Account. At the top, tap Personal info. Under Choose
                what others see tap Go to About me. Under Personal contact info
                or Work contact info, tap Edit . ... Under Email, add, edit, or
                remove your email address. Tap OK.
              </p>
            )}
            <hr className="mt-4 border-gray-300" />
          </div>
        </div>

        <div className="max-w-8xl mx-auto mt-12 mb-4 bg-gray-100 p-6 rounded-lg">
          <div className="flex justify-center items-cente  max-w-xl mx-auto">
            <img
              src="https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLauCRybBCEQFoNwLwmiTad1T~QAh3W4BFWiskYz9h2aLVGfRr0A77nXkj0UMFEqtMl1zb60PUqvEKdjHlaxlaZAHWUErKAGP8QuauVbbk4uk~13K4BxDZA8pvC41J95WPMcdmgzbtbTXLFpM7pjUB7pt2DqmuahxmJVLFMnOOKrc~tVcstFC1KzmM-EMmoD168jBC56BAQX~FvmSS5uHb78UIHeqCUkD2Hf-hh-NFLbYMJPrQoa6vKEwNrqpDpuFfgRjRlXAKi1~wPeyfpHRwqCn8BJoWCZVnth0p4EF2-~GriOraWhnf6DBVpEFUBynjvU9V6JEAorPRheZ7351w__"
              alt="FAQ Image 1"
              className="w-1/4 object-cover border-r rounded-full h-1/4"
            />

            <img
              src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nj1dhHJvIwqKXhqEFQBNONRc113LfBUCy-0oGmZDlV-0qwv3paPWz0AhVnQlAh8n743SJAQqGwNLiwvqu3NiQ9~~dKI4SWiBp2mbdzu24CDTSpWbMk0FEEt0uVMuvErbYlh9Pde79A8RnQNPX3caI61XMQJCUadFzsB~ttGXFaOo0p7ClgWKFwmgcfU3E-J3ndwBSnXjNCJTlD5Hv6HQgE-sC1MBhgTzwj8iPj9R7JWd7W~rQS-7fZMnnSDxZTlNSk1Fqgsui~tlkGHx0rgj2wZJbBmDpjWc89e8iiNE7MBk9Pvs6p2WxGu61oX4SNdJPXybNcQ109-58cGnbCDhxA__"
              alt="FAQ Image 2"
              className="w-1/3 h-1/4 object-cover rounded-full"
            />

            <img
              src="https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L3BxbJ4qZcpFGuofUtxaqy6jhwCFJi-fEveMWznXTsMIEv~cyo14pmdwtoJB9kz58feAGo2I1R84izMTlnqRrcs1aEv6JQOyvQAke0ZXA9Co5FF2rYh0dNBymmmgOuyZ1XCLeaPUlGEHusrCENCUct~8z7YQFkI9G-ZLTkv~F9B3vdFhTaIBMZ8IGqR1co~KuP~nWsn~kYsP-LLTzWs~tGsHUhCkI66~BxyPCUQk3sAxV4hCbk21V2PzWhreAsdFlZ21s0YGWyBCmpoMENAzqWkSigGHY6HY0cgVmfvSQ0WhDgszlKnAzd8~37hE7KZIcPwXrJlYhWDLJGEv8HhG2A__"
              alt="FAQ Image 3"
              className="w-1/4 h-1/4 object-cover border-l rounded-full"
            />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-3">
              Still have questions?
            </h2>

            <p className="text-lg text-[#475467] mb-6">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <button className="bg-[#6941C6] text-sm md:text-base font-medium text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPart;
