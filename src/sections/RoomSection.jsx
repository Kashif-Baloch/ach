import React from "react";
import { Link } from "react-router-dom";

const RoomSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-[68rem]">
      <div>
        <h1 className="text-5xl border-b border-gray-400 py-8 font-bold">
          Crown2 ADF
        </h1>
        {Array(6)
          .fill()
          .map((elem, index) => {
            return (
              <div className="flex border-b border-gray-400 items-center justify-between py-8">
                <div>
                  <h1 className="font-bold text-2xl">Room #1</h1>
                  <Link className="underline" to="/">
                    Read More
                  </Link>
                </div>
                <div>
                  <Link
                    className="border bg-transparent py-2 px-10 rounded-full"
                    to="/"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RoomSection;
