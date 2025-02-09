import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const RoomSection = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {showModal && <Modal handleModal={handleModal} />}
      <div>
        <h1
          id="rooms"
          className="text-5xl border-b border-gray-400 py-8 font-bold"
        >
          Crown2 ADF
        </h1>
        {Array(6)
          .fill()
          .map((elem, index) => {
            return (
              <div
                key={index}
                className="flex rowroom border-b border-gray-400 md:items-center justify-between py-8"
              >
                <div className="bokbtn">
                  <h1 className="font-bold text-2xl">Room #1</h1>
                  <Link className="underline " to="/more/title-of-page">
                    Read More
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={handleModal}
                    className="border bg-transparent py-2 px-10 rounded-full"
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
