import { BsLightningCharge } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";

export default function Page() {
  return (
    <div className="bg-slate-500 min-h-screen flex justify-center items-center">
      {/* Card */}
      <div className="w-[600px] h-[400px] flex flex-row overflow-hidden rounded-2xl">
        {/* Purple Section */}
        <div className="bg-indigo-600 w-1/2">
          {/* Content */}
          <div className="flex justify-center items-center mt-8 flex-col">
            <h1 className="text-xl font-bold">Your Result</h1>
            <div className="bg-gradient-to-b from-indigo-700 to-indigo-900 flex flex-col justify-center items-center mt-10 rounded-full w-40 h-40">
              <p className="font-bold text-4xl">76</p>
              <p className="text-indigo-300 text-sm">of 100</p>
            </div>
            <p className="text-2xl font-bold mt-3">Great</p>
            <p className="text-center mx-10 mt-2 font-bold text-base text-slate-400">You scored higher than 65% of the poeple who have taken these tests.</p>
          </div>
        </div>
        {/* White Section */}
        <div className="bg-white w-1/2">
          <h1 className="text-black flex justify-start font-bold text-xl ml-6 mt-8">Summary</h1>
          <div className="flex justify-start mt-3 flex-col gap-4">
            {/* Reaction Row */}
            <div className="bg-slate-200 rounded-lg p-3 flex items-center justify-between mx-3">

              {/* Left Side: Icon and Label */}
              <div className="flex items-center gap-3">
                <BsLightningCharge className="text-[#FF5757] text-lg" />
                <span className="text-[#FF5757] font-bold">Reaction</span>
              </div>

              {/* Right Side: Score */}
              <p className="font-bold text-gray-400">
                <span className="text-gray-900">80</span> / 100
              </p>
            </div>
            {/* Memory Row */}
            <div className="bg-slate-200 rounded-lg p-3 flex items-center justify-between mx-3">

              {/* Left Side: Icon and Label */}
              <div className="flex items-center gap-3">
                <LuBrain className="text-[#ffdd00] text-lg" />
                <span className="text-[#ffdd00] font-bold">Memory</span>
              </div>

              {/* Right Side: Score */}
              <p className="font-bold text-gray-400">
                <span className="text-gray-900">92</span> / 100
              </p>
            </div>
            {/* Verbal Row */}
            <div className="bg-slate-200 rounded-lg p-3 flex items-center justify-between mx-3">

              {/* Left Side: Icon and Label */}
              <div className="flex items-center gap-3">
                <LuMessageCircleMore className="text-[#00eeff] text-lg" />
                <span className="text-[#00eeff] font-bold">Verbal</span>
              </div>

              {/* Right Side: Score */}
              <p className="font-bold text-gray-400">
                <span className="text-gray-900">61</span> / 100
              </p>
            </div>
            {/* Visual Row */}
            <div className="bg-slate-200 rounded-lg p-3 flex items-center justify-between mx-3">

              {/* Left Side: Icon and Label */}
              <div className="flex items-center gap-3">
                <FaRegEye className="text-[#0000fe] text-lg" />
                <span className="text-[#0000fe] font-bold">Visual</span>
              </div>

              {/* Right Side: Score */}
              <p className="font-bold text-gray-400">
                <span className="text-gray-900">73</span> / 100
              </p>
            </div>
            {/* Button */}
            <button className="bg-slate-900 w-60 p-3 rounded-3xl mx-auto hover:cursor-pointer">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}