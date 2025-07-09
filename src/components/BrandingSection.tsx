import React from 'react';

export const BrandingSection: React.FC = () => {
  return (
    <section className="flex w-[519px] flex-col items-center gap-[23px] absolute left-28 bottom-[301.324px] max-md:w-[90%] max-md:left-[5%] max-md:bottom-[50px] max-sm:w-[95%] max-sm:gap-4 max-sm:left-[2.5%] max-sm:bottom-5">
      <div>
        <svg 
          width="301" 
          height="301" 
          viewBox="0 0 301 301" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="logo-circle" 
          style={{
            display: 'flex', 
            paddingTop: '18.454px', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            borderRadius: '171.429px', 
            background: '#DAF8EE', 
            position: 'relative'
          }}
        > 
          <g clipPath="url(#clip0_logo)"> 
            <rect x="0.5" y="0.324219" width="300" height="300" rx="150" fill="#DAF8EE" />
            <path d="M212.182 31.2169C43.7823 73.9605 21.7484 230.266 35.854 307.061C91.9023 470.913 242.994 469.178 277.788 466.499C281.303 466.228 283.243 462.389 281.92 459.122C278.242 450.035 272.916 432.464 275.712 411.654C276.818 403.421 280.199 395.658 283.249 387.931C314.231 309.429 261.097 281.041 229.128 276.691C249.444 239.824 225.975 195.136 209.241 174.017C207.371 171.658 206.775 168.473 207.758 165.629C235.735 84.6943 231.216 47.602 220.985 33.7528C219.009 31.0765 215.407 30.3983 212.182 31.2169Z" fill="#344B44" stroke="#344B44" strokeWidth="0.834531" />
            <path d="M255.691 442.708C182.901 483.577 101.472 396.618 69.8562 348.03C110.892 343.612 201.802 342.374 237.153 372.768C272.505 403.162 264.242 432.059 255.691 442.708Z" fill="#DAF8EE" />
            <path d="M186.134 53.559C47.919 102.318 40.2934 241.153 53.7576 304.476C77.3922 230.396 112.44 205.82 132.712 198.475C148.929 192.599 170.69 180.15 179.543 174.66C188.382 168.954 205.149 152.474 201.501 132.202C197.854 111.929 201.969 101.884 204.482 99.3952C214.935 60.3176 196.606 52.5554 186.134 53.559Z" fill="#DAF8EE" />
            <path d="M216.55 262.046C180.016 328.735 102.401 343.065 68.1601 341.894L54.6265 308.564C59.0755 286.091 82.1698 253.019 93.1609 239.292C122.898 206.1 152.941 193.186 164.245 190.877C173.952 186.657 197.072 183.589 211.9 205.087C226.728 226.584 221.178 252.017 216.55 262.046Z" fill="#DAF8EE" />
            <path d="M219.051 282.66C210.514 301.747 157.954 329.593 138.749 338.158C186.055 331.438 251.355 354.767 265.175 391.396C300.883 322.867 250.486 284.125 219.051 282.66Z" fill="#DAF8EE" stroke="#344B44" strokeWidth="0.834531" />
          </g> 
          <defs> 
            <clipPath id="clip0_logo"> 
              <rect x="0.5" y="0.324219" width="300" height="300" rx="150" fill="white" />
            </clipPath> 
          </defs> 
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center gap-[5.352px] self-stretch relative rounded-[5.352px]">
        <h1 className="self-stretch text-[#DAF8EE] text-center text-[50px] font-semibold leading-[50px] capitalize relative max-md:text-[40px] max-sm:text-[32px]">
          Butterfly Effect
        </h1>
        <p className="self-stretch text-[#DAF8EE] text-center text-[32px] font-medium relative max-md:text-2xl max-sm:text-xl">
          Making a world of difference.
        </p>
      </div>
    </section>
  );
};
