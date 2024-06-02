const Footer = () => {
  return (
    <footer className=" w-[80%] mx-auto flex flex-col  justify-center">
      <div className="flex justify-between items-center my-10">
        <div>
          <h1 className="text-[32px] font-bold">Logo</h1>
        </div>
        <div className="flex justify-center items-center gap-10  text-[16px]">
          <p>About</p>
          <p>Feature</p>
          <p>Contact Us</p>
          <p>Support</p>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div>
            <img src="/assets/logo-twitter 2.png" alt="" />
          </div>
          <div>
            <img src="/assets/2.png" alt="" />
          </div>
          <div>
            <img src="/assets/3.png" alt="" />
          </div>
          <div>
            <img src="/assets/4.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>© Copyright 2024, All Rights Reserved</p>
        </div>
        <div className="flex justify-center items-center gap-6 mb-10">
          <p>Privacy Policy </p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
