import React from "react";
import { IoFootsteps } from "react-icons/io5";
const items = [
  {
    step: "مرحله اول",
    title: "انتخاب نوع هزینه",
    subTitel: "",
  },
  {
    step: "مرحله اول",
    title: "انتخاب نوع هزینه",
    subTitel: "",
  },
  {
    step: "مرحله اول",
    title: "انتخاب نوع هزینه",
    subTitel: "",
  },
  {
    step: "مرحله اول",
    title: "انتخاب نوع هزینه",
    subTitel: "",
  },
  {
    step: "مرحله اول",
    title: "انتخاب نوع هزینه",
    subTitel: "",
  },
  {
    step: "مرحله اول",
    title: "انتخاب نوع هزینه",
    subTitel: "",
  },
];
const TimeLine = () => {
  return (
    <div className="">
      <ol className="items-center sm:flex ">
        {items.map((item, index) => (
          <li key={index} className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <IoFootsteps />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.step}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.title}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {item.subTitel}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
