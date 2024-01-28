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
  const [showCount, setShowCount] = useState("");
  const [showPrice, setShowPrice] = useState("");
  const [showComplex, setShowComplex] = useState("");
  const [showUsers, setShowUsers] = useState("");
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
    if (showInModal == "count") {
      setShowCount(true);
    }
    if (showInModal == "price") {
      setShowPrice(true);
    }
    if (showInModal == "complex") {
      setShowComplex(true);
    }
    if (showInModal == "users") {
      setShowUsers(true);
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
    if (value == "count") {
      setShowInModal("count");
    }
    if (value == "price") {
      setShowInModal("price");
    }
    if (value == "complex") {
      setShowInModal("complex");
    }
    if (value == "users") {
      setShowInModal("users");
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
              {showUsers &&
                showComplex &&
                showPrice &&
                showCount &&
                showCategory && (
                  <button
                    onClick={() => setWitchLevel(3)}
                    className="bg-blue-900 col-span-4 w-full py-8 rounded-md text-white font-bold animate-pulse"
                  >
                    {" "}
                    رفتن به مرحله بعد
                  </button>
                )}
              <div
                onClick={() => handelOpenSelectGroup("group")}
                className="cursor-pointer bg-gray-50 p-6 rounded-md shadow-lg relative"
              >
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  1
                </span>
                <button className="font-bold ">
                  انتخاب گروه:
                  {showgroup && (
                    <span className=" mr-4 font-bold text-gray-600">
                      اثاثه و منصوبات
                    </span>
                  )}
                </button>
              </div>
              <div
                onClick={() => handelOpenSelectGroup("category")}
                className="cursor-pointer bg-gray-50 p-6 rounded-md shadow-lg relative"
              >
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  2
                </span>
                <button className="font-bold ">
                  <span className="inline-block">انتخاب طبقه</span>
                  {showCategory && (
                    <span className=" mr-4 font-bold text-gray-600">صندلی</span>
                  )}
                </button>
              </div>
              <div
                onClick={() => handelOpenSelectGroup("count")}
                className="cursor-pointer bg-gray-50 p-6 rounded-md shadow-lg relative"
              >
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  3
                </span>
                <button className="font-bold ">
                  {" "}
                  تعداد
                  {showCount && (
                    <span className=" mr-4 font-bold text-gray-600">4</span>
                  )}
                </button>
              </div>
              <div
                onClick={() => handelOpenSelectGroup("price")}
                className="cursor-pointer bg-gray-50 p-6 rounded-md shadow-lg relative"
              >
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  4
                </span>
                <button className="font-bold ">
                  قیمت{" "}
                  {showPrice && (
                    <div className="inline-block mr-4 font-bold text-gray-600">
                      <span className=" mr-4 font-bold text-gray-600">
                        10,000,000
                      </span>
                      <span className="mr-2">تومان</span>
                    </div>
                  )}
                </button>
              </div>
              <div
                onClick={() => handelOpenSelectGroup("complex")}
                className="cursor-pointer bg-gray-50 p-6 rounded-md shadow-lg relative"
              >
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  5
                </span>
                <button className="font-bold ">
                  <span className="inline-block">انتخاب مجتمع</span>
                  {showComplex && (
                    <span className=" mr-4 font-bold text-gray-600">
                      مس سرچشمه
                    </span>
                  )}
                </button>
              </div>
              <div className="bg-gray-50 p-6 rounded-md shadow-lg relative">
                <span className="absolute rounded-full -top-2 right-0 w-8 h-8 flex justify-center items-center text-teal-50 bg-red-600 font-bold">
                  6
                </span>
                <button
                  onClick={() => handelOpenSelectGroup("users")}
                  className="font-bold "
                >
                  انتخاب تحویل گیرنده
                  {showUsers && (
                    <div className="grid grid-cols-2 mt-4 mr-4 font-bold text-gray-600 ">
                      <span className=" mr-2 font-bold text-gray-600">
                        1.فرزانه غضنفری
                      </span>
                      <span className="mr-2">2.رویا پورامینایی</span>
                      <span className="mr-2">3. میلاد حسنی</span>
                      <span className="mr-2">4. محمد غلامحسینی</span>
                    </div>
                  )}
                </button>
              </div>
              {/* <button className="bg-blue-900 w-full py-8 rounded-md text-white font-bold animate-pulse">
                {" "}
                مرحله بعد
              </button> */}
            </div>
          </>
        )}

        {witchLevel == 3 && (
          <>
            <div className="">
              <p className="font-black inline-block">مرحله سوم:</p>
              <p className="inline-block mx-4">
                {" "}
                ارسال درخواست به اموال جهت گرفتن پلاک{" "}
              </p>
            </div>
            <div className="mt-14 flex flex-col gap-6 justify-center items-center">
              <p className=" font-bold p-4  bg-green-400 rounded-md shadow-lg">
                Api : https://asset.nicico.com/asset/newlabel
              </p>
              <p className=" font-bold p-4 bg-blue-400 rounded-md shadow-lg">
                {`body: {
                  count:4,
                  idCategory:864,
                  price:"10000000",
                  complexId:"5",
                  userIds:["568","9798","67","845"]


                }`}
              </p>

              <pre className=" text-left font-bold p-4  bg-green-400 rounded-md shadow-lg">
                {`  Response :
                ]
                  {label:"16248000867",user:{id:"568",name:"farzaneh ghazanfary "},
                  {label:"16248000867",user:{id:"9798",name:"  roya poraminaei"},

                  {label:"16248000867",user:{id:"67",name:"  milad hasani"},

                  {label:"16248000867",user:{id:"845",name:" mohamad gholamhoseini "},

                  [`}
              </pre>
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
                    {showInModal == "count" && (
                      <div className="">
                        <p className="">
                          تعداد کالاهایی که در یک ردیف هزینه وارد شده اند.
                        </p>
                        <p className="mt-8">
                          {" "}
                          برای مثال فرض می شود 4 صندلی وارد شده است.
                        </p>
                      </div>
                    )}
                    {showInModal == "price" && (
                      <div className="">
                        <p className="">قیمت کالاها را وارد کنید </p>
                        <p className="mt-8">
                          {" "}
                          برای مثال برای 4 صندلی قیمت 10 میلیون تومان وارد می
                          شود .
                        </p>
                      </div>
                    )}

                    {showInModal == "complex" && (
                      <div className="">
                        <p className="">
                          مجتمعی که اموال وارد آن شده را مشخص کنید.
                        </p>
                        <p className="mt-8">
                          {" "}
                          برای مثال مجتمع مورد نظر مس سرچشمه می باشد.
                        </p>
                      </div>
                    )}

                    {showInModal == "users" && (
                      <div className="">
                        <p className="">تحویل گیرندگان اموال مشخص شود. </p>
                        <p className="mt-8">
                          {" "}
                          برای مثال 4 کاربر انتخاب می شود .
                        </p>
                        <div className="">
                          <table class="table-auto my-6">
                            <thead>
                              <tr>
                                <th className=" whitespace-nowrap pl-4">
                                  شناسه کاربر{" "}
                                </th>
                                <th className="w-full">نام کاربر</th>
                                <th className=" whitespace-nowrap pl-4">
                                  کد پرسنلی{" "}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>568</td>
                                <td> فرزانه غضنفری</td>
                                <td>308456</td>
                              </tr>
                              <tr>
                                <td>9798</td>
                                <td> رویا پورامینایی</td>
                                <td>977461</td>
                              </tr>
                              <tr>
                                <td>67</td>
                                <td> میلاد حسنی</td>
                                <td>500834</td>
                              </tr>
                              <tr>
                                <td>845</td>
                                <td>محمد غلامحسینی</td>
                                <td>500837</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
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
