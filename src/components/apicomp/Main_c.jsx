// import React from "react";
import mockData from "./Mockdata";
import RightArrow from '../../assets/RightArrow.svg'

function App() {
  return (
    <div className="p-8 pt-8 w-full pt-14">
      <div className="w-9/10 gap-2 border-[1px] lg:grid lg:grid-cols-2 lg:gap-0">
        {mockData.map((item) => (
          <div
            key={item.id}
            className="p-[32px] bg-cover bg-bottom bg-right bg-[16px 18px] bg-no-repeat"
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundPositionX: "right",
              backgroundPositionY: "bottom",
              backgroundSize: "160px 180px",
              backgroundRepeat: "no-repeat",
              backgroundColor: item.backgroundColor
            }}
          >
            <h3 className="text-3xl font-normal leading-[48px]">{item.title}</h3>
            <p className="text-[#676767] text-3.5 pb-6 mt-4">{item.description}</p>
            {item.links.map((link) => (

              <a
                key={link.label}
                className="flex items-center text-[14px] pb-2 text-[#385f99] leading-[16px]"
                href={link.url}
              >
                {link.label}
                {link.isSvg ? (
                  <svg
                    width="13.5"
                    height="13.5"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="ml-[4px] mb-[2px]"
                  >
                    <path
                      fill="currentColor"
                      d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                    ></path>
                  </svg>
                ) : (
                  <img
                    src={RightArrow}
                    className="pl-1"
                    alt="Right Arrow"
                  />
                )}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
