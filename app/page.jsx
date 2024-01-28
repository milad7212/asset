"use client";
import Image from "next/image";
import { useState, Fragment } from "react";
import TimeLine from "./components/TimeLine";
import { Dialog, Transition } from "@headlessui/react";
const textModal = [
  {
    title: "انتخاب گروه",
  },
];
export default function Home() {
  const [witchLevel, setWitchLevel] = useState(1);
  const [isAsset, setIsAsset] = useState(0);
  const [openModalGroup, setOpenModalGroup] = useState(false);
  const [showgroup, setShowgroup] = useState("");
  const [showCategory, setShowCategory] = useState("");
  const [minStep, setMinStep] = useState("گروه");
  const [showInModal, setShowInModal] = useState("");
  function closeModal() {
    setOpenModalGroup(false);
    if (showInModal == "group") {
      setShowgroup(true);
    }
    if (showInModal == "category") {
      setShowCategory(true);
    }
  }

  function openModal() {
    setOpenModalGroup(true);
  }
  function handelSelectAsset(event) {
    let value = event.target.value;

    if (value == "cost") {
      setIsAsset(1);
    }
    if (value == "amval") {
      setIsAsset(2);
      setWitchLevel(2);
    }
  }
  function handelOpenSelectGroup(value) {
    if (value == "group") {
      setShowInModal("group");
    }
    if (value == "category") {
      setShowInModal("category");
    }
    setOpenModalGroup(true);
  }

  return (
    <div className="p-8">
      {/* <TimeLine /> */}
      <div className="mt-8">
        {witchLevel == 1 && (
          <>
            <div className="">
              <p className="font-black inline-block">مرحله اول:</p>
              <p className="inline-block mx-4">تعیین نوع هزینه</p>
            </div>
            <div className="h-[40vh] flex justify-center items-center">
              <select
                onChange={(e) => handelSelectAsset(e)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option> </option>
                <option value="cost">مصرفی</option>
                <option value="amval">اموالی</option>
              </select>
            </div>
            {isAsset == 1 && (
              <div className="mt-10">
                <p className=" text-center text-2xl font-bold text-red-600 animate-pulse">
                  نیاز به هیچگونه تغییری نیست همان روال سابق
                </p>
              </div>
            )}
          </>
        )}
        {witchLevel == 2 && (
          <>
            <div className="">
              <p className="font-black inline-block">مرحله دوم:</p>
              <p className="inline-block mx-4">پرکردن پارامتر های مورد نیاز </p>
            </div>
            <div className="h-[40vh] flex justify-center items-center">
              <select
                disabled
                className=" block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>اموالی</option>
              </select>
            </div>

            <div className=" grid grid-cols-3 gap-10">
              <div className="bg-gray-50 p-6 rounded-md shadow-lg relative">
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  1
                </span>
                <button
                  onClick={() => handelOpenSelectGroup("group")}
                  className="font-bold "
                >
                  انتخاب گروه:
                  {showgroup && (
                    <span className=" mr-4 font-bold text-gray-600">
                      اثاثه و منصوبات
                    </span>
                  )}
                </button>
              </div>
              <div className="bg-gray-50 p-6 rounded-md shadow-lg relative">
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  2
                </span>
                <button
                  onClick={() => handelOpenSelectGroup("category")}
                  className="font-bold "
                >
                  <span className="inline-block">انتخاب طبقه</span>
                  {showCategory && (
                    <span className=" mr-4 font-bold text-gray-600">صندلی</span>
                  )}
                </button>
              </div>
              <div className="bg-gray-50 p-6 rounded-md shadow-lg relative">
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  3
                </span>
                <button className="font-bold "> تعداد</button>
              </div>
              <div className="bg-gray-50 p-6 rounded-md shadow-lg relative">
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  4
                </span>
                <button className="font-bold ">قیمت </button>
              </div>
              <div className="bg-gray-50 p-6 rounded-md shadow-lg relative">
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  5
                </span>
                <button className="font-bold ">انتخاب مجتمع</button>
              </div>
              <div className="bg-gray-50 p-6 rounded-md shadow-lg relative">
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  6
                </span>
                <button className="font-bold ">انتخاب تحویل گیرنده</button>
              </div>
              {/* <button className="bg-blue-900 w-full py-8 rounded-md text-white font-bold animate-pulse">
                {" "}
                مرحله بعد
              </button> */}
            </div>
          </>
        )}
      </div>
      <Transition appear show={openModalGroup} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-right font-medium leading-6 text-gray-900"
                  >
                    {showInModal == "group" && <span>انتخاب گروه</span>}
                    {showInModal == "category" && <span>انتخاب طبقه </span>}
                    {showInModal == "count" && <span>مشخص کردن تعداد </span>}
                    {showInModal == "price" && <span> مشخص کردن قیمت</span>}
                    {showInModal == "complex" && <span>انتخاب مجتمع</span>}
                  </Dialog.Title>
                  <div className="mt-2 text-right text-sm text-gray-700">
                    {showInModal == "group" && (
                      <>
                        <p className="">
                          برای انتخاب گروه view در اختیارتان قرار میگیرد که از
                          آن گروه مد نظر را انتخاب میکنید
                        </p>
                        <p className="mt-8">
                          {" "}
                          برای مثال گروه 16 : اثاثه و منصوبات انتخاب می شود
                        </p>
                        <div className="">
                          <table class="table-auto my-6">
                            <thead>
                              <tr>
                                <th className=" whitespace-nowrap pl-4">
                                  شناسه گروه
                                </th>
                                <th className="w-full">نام گروه</th>
                                <th className=" whitespace-nowrap pl-4">
                                  کد گروه
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>234</td>
                                <td>اثاثه و منصویات</td>
                                <td>16</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    {showInModal == "category" && (
                      <>
                        <p className="">
                          براساس id گروه انتخاب شده طبقات را فیلتر کنید و کاربر
                          می تواند یکی از آن ها را انتخاب کند
                        </p>
                        <p className="mt-8">
                          {" "}
                          برای مثال برای گروه 16 طبقه صندلی انتخاب می شود
                        </p>
                        <div className="">
                          <table class="table-auto my-6">
                            <thead>
                              <tr>
                                <th className=" whitespace-nowrap pl-4">
                                  شناسه طبقه{" "}
                                </th>
                                <th className="w-full">نام طبقه</th>
                                <th className=" whitespace-nowrap pl-4">
                                  کد طبقه{" "}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>864</td>
                                <td> صندلی</td>
                                <td>248</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      متوجه شدم
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
