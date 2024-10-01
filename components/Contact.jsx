import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className="bg-gray-100 px-4 md:px-10 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="col-span-1">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Have a <span className="text-red-500">Question?</span>
          </h1>
          <p className="text-gray-600 text-sm lg:text-lg mt-8">
            Whether you have questions about our services, inquiries about our
            books, or would like to collaborate on future projects, feel free to
            reach out.
          </p>
          <div className="flex items-center gap-5 mt-12">
            <div className="bg-red-100 border border-dashed border-red-500 flex items-center justify-center h-12 w-12 rounded-full">
              <MdOutlinePhoneInTalk size={20} className="text-red-500" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="text-black text-sm lg:text-lg font-semibold">
                +234 9056300956
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-8">
            <div className="bg-red-100 border border-dashed border-red-500 flex items-center justify-center h-12 w-12 rounded-full">
              <IoLogoWhatsapp size={20} className="text-red-500" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-500 text-sm">WhatsApp</p>
              <p className="text-black text-sm lg:text-lg font-semibold">
                +234 8164761770
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-8">
            <div className="bg-red-100 border border-dashed border-red-500 flex items-center justify-center h-12 w-12 rounded-full">
              <IoMailOutline size={20} className="text-red-500" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Mail</p>
              <p className="text-black text-sm lg:text-lg font-semibold">
                coalslate@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded-2xl p-8">
            <h1 className="text-2xl font-semibold">Send a Message</h1>
            <form className="space-y-7 mt-10">
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm font-medium">Name</p>
                <input
                  type="text"
                  className="border border-gray-200 rounded-[6px] px-3 py-2.5 placeholder:text-sm outline-none"
                  placeholder="Enter full name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm font-medium">Email</p>
                <input
                  type="text"
                  className="border border-gray-200 rounded-[6px] px-3 py-2.5 placeholder:text-sm outline-none"
                  placeholder="Enter email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm font-medium">Phone</p>
                <input
                  type="text"
                  className="border border-gray-200 rounded-[6px] px-3 py-2.5 placeholder:text-sm outline-none"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm font-medium">Message</p>
                <input
                  type="text"
                  className="border border-gray-200 rounded-[6px] px-3 py-2.5 placeholder:text-sm outline-none"
                  placeholder="Enter phone number"
                />
              </div>
              <button type="submit" className="hero-gradient flex items-center gap-2 text-white text-sm lg:text-[16px] font-semibold rounded-full px-6 py-2">
                Send
                <IoIosSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
