const Logo = () => {
  return (
    <div className="bg-gray-20 w-full py-10 shadow-xl">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-lg md:text-xl font-medium mb-10">
          Join 4,000+ companies already growing
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 items-center justify-center">
          <img
            src="https://i.imgur.com/gpsrBmw.png"
            alt="Logo 1"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/VwdtMJL.png"
            alt="Logo 2"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/80r8CYD.png"
            alt="Logo 3"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/PrXERoj.png"
            alt="Logo 4"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/Xsnje8O.png"
            alt="Logo 5"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/VpQD4jq.png"
            alt="Logo 5"
            className="h-20 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
