const FormSection = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-gray-100 to-gray-200 p-8 md:p-16">
        <div className="max-w-7xl pb-40 mx-auto bg-white p-8 rounded-lg ">
          <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between mb-6">
            <h2 className="text-3xl lg:w-2/3 font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 md:mr-24  lg:w-2/4 mb-6">
              Reach out to us for more information about our services and
              facilities.
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">First name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block mb-2 ">Last name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block mb-2 ">Email *</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div>
              <label className="block mb-2 ">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="col-span-1 md:col-span-1">
              <button
                type="submit"
                className="w-full py-2 border bg-transparent text-black rounded-full transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormSection;
