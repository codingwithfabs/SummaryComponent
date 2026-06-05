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
            <p className="text-center mx-10 mt-2 font-bold text-base">You scored higher than 65% of the poeple who have taken these tests.</p>
          </div>
        </div>
        {/* White Section */}
        <div className="bg-white w-1/2">
          <h1 className="text-black">Summary</h1>
        </div>
      </div>
    </div>
  );
}