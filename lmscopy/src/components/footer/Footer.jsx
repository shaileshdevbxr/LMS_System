import React, { useEffect, useMemo, useState } from "react";
import logo from "../../assets/images/maurya-infotech-logo.png";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const footerSocialMediaList = [
    {
      id: Math.floor((Math.random() / 2) * 10),
      d: "M480 257.352C480 133.652 379.7 33.3516 256 33.3516C132.3 33.3516 32 133.652 32 257.352C32 369.152 113.9 461.822 221 478.642V322.122H164.11V257.352H221V208.002C221 151.872 254.45 120.842 305.61 120.842C330.12 120.842 355.76 125.222 355.76 125.222V180.352H327.5C299.69 180.352 290.99 197.612 290.99 215.352V257.352H353.11L343.19 322.122H291V478.662C398.1 461.852 480 369.182 480 257.352Z",
      name: "Facebook",
    },
    {
      id: Math.floor((Math.random() / 2) * 10),
      d: "M508.64 148.79C508.64 103.79 475.54 67.59 434.64 67.59C379.24 65 322.74 64 265 64H247C189.4 64 132.8 65 77.4002 67.6C36.6002 67.6 3.50022 104 3.50022 149C1.00022 184.59 -0.0597783 220.19 0.000221705 255.79C-0.0997783 291.39 1.03356 327.023 3.40022 362.69C3.40022 407.69 36.5002 444.19 77.3002 444.19C135.5 446.89 195.2 448.09 255.9 447.99C316.7 448.19 376.234 446.923 434.5 444.19C475.4 444.19 508.5 407.69 508.5 362.69C510.9 326.99 512 291.39 511.9 255.69C512.127 220.09 511.04 184.457 508.64 148.79ZM207 353.89V157.39L352 255.59L207 353.89Z",
      name: "Youtube",
    },
    {
      id: Math.floor((Math.random() / 2) * 10),
      d: "M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.61C32 461.91 49.85 480 70.28 480H444.06C464.6 480 480 461.79 480 441.61V66.89C480.12 46.7 464.6 32 444.17 32ZM170.87 405.43H106.69V205.88H170.87V405.43ZM141 175.54H140.54C120 175.54 106.7 160.25 106.7 141.11C106.7 121.62 120.35 106.69 141.35 106.69C162.35 106.69 175.2 121.51 175.66 141.11C175.65 160.25 162.35 175.54 141 175.54ZM405.43 405.43H341.25V296.32C341.25 270.18 331.91 252.32 308.69 252.32C290.95 252.32 280.45 264.32 275.78 276.01C274.03 280.21 273.56 285.93 273.56 291.77V405.43H209.38V205.88H273.56V233.65C282.9 220.35 297.49 201.21 331.44 201.21C373.57 201.21 405.44 228.98 405.44 288.85L405.43 405.43Z",
      name: "",
    },
  ];

  const pageList = [
    {
      id: Date.now() + Math.floor(Math.random() * 20),
      name: "About us",
      path: "/about-us",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 20),
      name: "Contact us",
      path: "/contact-us",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 30),
      name: "FAQ",
      path: "/faqs",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 20),
      name: "Job assurance",
      path: "/job-assurance",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 10),
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      id: Date.now() + Math.floor(Math.random() * 10),
      name: "Terms and conditions",
      path: "/terms-and-conditions",
    },
  ];

  const footerProductsList = [
    {
      id: Math.floor(Math.random() * 100),
      name: "Job Portal",
      path: "",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Become an affiliate",
      path: "",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Experience Portal",
      path: "",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Hall Of fame",
      path: "",
    },
  ];
  return (
    <footer
      className="shadow-lg bg-gray-800 font-nunitoSans p-1"
      aria-labelledby="footer-heading"
    >
      <div className="px-4 py-0 large:px-20 max-w-screen-xlarge xlarge:!mx-auto">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xlarge py-5">
          <div className="flex flex-wrap  lg:justify-around w-full ">
            <div className="space-y-8">
              <img
                src={logo}
                alt="Maurya Infotech"
                width={"40%"}
                title="Maurya Infotech"
              />
              <ul className="text-medium leading-6 text-gray-300">
                <li className="flex gap-2 items-center mt-4">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M424 80H88C73.1528 80.0159 58.9182 85.921 48.4196 96.4196C37.921 106.918 32.0159 121.153 32 136V376C32.0159 390.847 37.921 405.082 48.4196 415.58C58.9182 426.079 73.1528 431.984 88 432H424C438.847 431.984 453.082 426.079 463.58 415.58C474.079 405.082 479.984 390.847 480 376V136C479.984 121.153 474.079 106.918 463.58 96.4196C453.082 85.921 438.847 80.0159 424 80V80ZM409.82 172.63L265.82 284.63C263.012 286.813 259.557 287.998 256 287.998C252.443 287.998 248.988 286.813 246.18 284.63L102.18 172.63C100.488 171.352 99.0671 169.751 97.9994 167.92C96.9316 166.088 96.2386 164.062 95.9605 161.961C95.6824 159.859 95.8248 157.723 96.3793 155.676C96.9339 153.63 97.8897 151.715 99.191 150.041C100.492 148.367 102.113 146.969 103.96 145.927C105.806 144.885 107.841 144.221 109.947 143.972C112.052 143.724 114.186 143.896 116.224 144.479C118.263 145.063 120.165 146.045 121.82 147.37L256 251.73L390.18 147.37C393.535 144.836 397.753 143.725 401.921 144.276C406.089 144.828 409.873 146.998 412.453 150.317C415.034 153.636 416.205 157.838 415.712 162.014C415.219 166.189 413.103 170.003 409.82 172.63Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <a
                    className="hover:text-gray-100"
                    href="mailto:shailesh775709@gmail.com"
                  >
                    <p className="text-sm medium:text-base leading-[21px] medium:leading-6 font-normal text-gray-300">
                      support@mauryainfotech.com
                    </p>
                  </a>
                </li>
                <li className="flex gap-2 items-center mt-4">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M391 480C371.48 480 344.06 472.94 303 450C253.07 422 214.45 396.15 164.79 346.62C116.91 298.77 93.6104 267.79 61.0004 208.45C24.1604 141.45 30.4404 106.33 37.4604 91.32C45.8204 73.38 58.1604 62.65 74.1104 52C83.1699 46.0644 92.7571 40.9762 102.75 36.8C103.75 36.37 104.68 35.96 105.51 35.59C110.46 33.36 117.96 29.99 127.46 33.59C133.8 35.97 139.46 40.84 148.32 49.59C166.49 67.51 191.32 107.42 200.48 127.02C206.63 140.23 210.7 148.95 210.71 158.73C210.71 170.18 204.95 179.01 197.96 188.54C196.65 190.33 195.35 192.04 194.09 193.7C186.48 203.7 184.81 206.59 185.91 211.75C188.14 222.12 204.77 252.99 232.1 280.26C259.43 307.53 289.41 323.11 299.82 325.33C305.2 326.48 308.15 324.74 318.47 316.86C319.95 315.73 321.47 314.56 323.06 313.39C333.72 305.46 342.14 299.85 353.32 299.85H353.38C363.11 299.85 371.44 304.07 385.24 311.03C403.24 320.11 444.35 344.62 462.38 362.81C471.15 371.65 476.04 377.29 478.43 383.62C482.03 393.15 478.64 400.62 476.43 405.62C476.06 406.45 475.65 407.36 475.22 408.37C471.011 418.345 465.893 427.913 459.93 436.95C449.3 452.85 438.53 465.16 420.55 473.53C411.318 477.897 401.213 480.109 391 480Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <a className="hover:text-gray-100" href="tel:+918867917516">
                    <p className="text-sm medium:text-base leading-[21px] medium:leading-6 font-normal text-gray-300">
                      +91 6204918454
                    </p>
                  </a>
                </li>
              </ul>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {footerSocialMediaList?.map((social) => (
                  <a
                    href=""
                    className="text-gray-50 hover:text-gray-400"
                    key={social.id}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d={social.d}
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                ))}
                <a href="" className="text-gray-50 hover:text-gray-400">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M349.33 69.33C374.063 69.4039 397.761 79.2616 415.25 96.7502C432.738 114.239 442.596 137.937 442.67 162.67V349.33C442.596 374.063 432.738 397.761 415.25 415.25C397.761 432.738 374.063 442.596 349.33 442.67H162.67C137.937 442.596 114.239 432.738 96.7502 415.25C79.2616 397.761 69.4039 374.063 69.33 349.33V162.67C69.4039 137.937 79.2616 114.239 96.7502 96.7502C114.239 79.2616 137.937 69.4039 162.67 69.33H349.33ZM349.33 32H162.67C90.8 32 32 90.8 32 162.67V349.33C32 421.2 90.8 480 162.67 480H349.33C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M377.33 162.672C371.792 162.672 366.379 161.03 361.774 157.953C357.17 154.876 353.581 150.503 351.461 145.387C349.342 140.271 348.788 134.641 349.868 129.209C350.948 123.778 353.615 118.789 357.531 114.873C361.447 110.957 366.436 108.29 371.868 107.21C377.299 106.13 382.929 106.684 388.045 108.803C393.162 110.923 397.535 114.511 400.611 119.116C403.688 123.72 405.33 129.134 405.33 134.672C405.338 138.351 404.619 141.996 403.215 145.396C401.81 148.797 399.748 151.887 397.147 154.489C394.545 157.09 391.455 159.152 388.055 160.557C384.654 161.961 381.009 162.68 377.33 162.672Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M256 181.33C270.768 181.33 285.205 185.709 297.484 193.914C309.764 202.119 319.335 213.781 324.986 227.425C330.638 241.069 332.116 256.083 329.235 270.567C326.354 285.052 319.242 298.357 308.8 308.8C298.357 319.242 285.052 326.354 270.567 329.235C256.083 332.116 241.069 330.638 227.425 324.986C213.781 319.334 202.119 309.764 193.914 297.484C185.709 285.205 181.33 270.768 181.33 256C181.351 236.203 189.225 217.222 203.224 203.224C217.223 189.225 236.203 181.351 256 181.33ZM256 144C233.849 144 212.194 150.569 193.776 162.875C175.358 175.182 161.003 192.674 152.526 213.139C144.049 233.605 141.831 256.124 146.152 277.85C150.474 299.576 161.141 319.532 176.804 335.196C192.468 350.859 212.424 361.526 234.15 365.848C255.876 370.17 278.395 367.952 298.861 359.475C319.326 350.997 336.818 336.642 349.125 318.224C361.431 299.806 368 278.152 368 256C368 226.296 356.2 197.808 335.196 176.804C314.192 155.8 285.704 144 256 144Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 large:mt-0">
              <div className="flex flex-wrap w-full">
                <div className="w-full lg:w-1/2 relative">
                  <h4 className="text-lg medium:text-xl leading-[26px] medium:leading-[30px] font-interSans font-semibold text-white">
                    Company
                  </h4>
                  <span className="h-1 w-[80%] absolute top-10 rounded-sm bg-orange-500 inline-block"></span>
                  <ul role="list" className="mt-12 flex flex-wrap ">
                    {pageList?.map((page) => (
                      <li className="w-1/2 pb-4" key={page.id}>
                        <a
                          href={page.path}
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          <p className="text-sm medium:text-base leading-[21px] medium:leading-6 font-normal text-gray-300">
                            {page.name}
                          </p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 relative">
                  <h4 className="text-lg medium:text-xl leading-[26px] medium:leading-[30px] font-interSans font-semibold text-white">
                    Products
                  </h4>
                  <span className="h-1 w-[80%] absolute top-10 rounded-sm bg-orange-500 inline-block"></span>
                  <ul role="list" className="mt-12 flex flex-wrap ">
                    {footerProductsList?.map((product) => (
                      <li className="w-1/2 pb-4" key={product.id}>
                        <a
                          href={product.path}
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          <p className="text-sm medium:text-base leading-[21px] medium:leading-6 font-normal text-gray-300">
                            {product.name}
                          </p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 className="text-center">Copyright © {year} | All rights reseverd.</h6>
    </footer>
  );
};

export default Footer;
