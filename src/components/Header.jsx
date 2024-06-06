import React from "react";

function Header() {
  return (
    <header className="text-[var(--dark-color)] bg-[#f9f5ff] p-16 w-full text-center">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="bg-[var(--secondary-color)] w-fit py-2 px-4 rounded-full text-sm mx-auto mb-4">
              Our blog
            </p>
            <h1 className="mb-4 text-[2.5rem] text-[#42307d] font-semibold">
              Resources and insights
            </h1>
            <p className="mb-4">
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>
          <div className="shadow-sm p-3 outline-none rounded-lg  mx-[25%] flex items-center bg-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-[20px] text-gray-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M338.29 338.29 448 448"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="outline-none ml-2 bg-white"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
