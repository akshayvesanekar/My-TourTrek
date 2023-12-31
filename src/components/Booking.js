import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    place: "",
    persons: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [formError, setFormError] = useState({
    place: "",
    persons: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    const newError = {};

    const isLoggedIn = JSON.parse(localStorage.getItem("travelAuthToken"));

    if (!isLoggedIn) return alert("Please login to book the package.");

    if (!formData.place) {
      newError.place = "Error: Place to Visit is required.";
    }

    if (!formData.persons) {
      newError.persons = "Error: Number of Persons is required.";
    } else if (formData.persons <= 0 || formData.persons > 10) {
      newError.persons = "Error: Number of Persons must be 1 to 10.";
    }

    if (!formData.startDate) {
      newError.startDate = "Error: Start Date is required.";
    } else if (formData.startDate < currentDate) {
      newError.startDate = "Error: Start Date cannot be in the past.";
    }

    if (!formData.endDate) {
      newError.endDate = "Error: End Date is required.";
    } else if (formData.endDate < currentDate) {
      newError.endDate = "Error: End Date cannot be in the past.";
    } else if (formData.endDate < formData.startDate) {
      newError.endDate = "Error: End Date cannot be prior to Start Date.";
    }

    if (!formData.description) {
      newError.description = "Error: Description is required.";
    } else if (
      formData.description.length < 50 ||
      formData.description.length > 500
    ) {
      newError.description = "Error: Description must be 50 to 500 characters.";
    }

    setFormError(newError);

    if (Object.keys(newError).length === 0) {
      alert(`Booking done successfully for ${formData.place}!`);
      setFormData({
        place: "",
        persons: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  return (
    <>
      <section className="py-10 px-5">
        <div className="block md:flex items-start justify-center">
          <img
            className="w-[100%] md:w-[50%] aspect-square p-5 md:p-10"
            src="https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_640.jpg"
            alt="booking-img"
          />

          <div id="booking" className="py-10 px-5 w-[100%] md:w-[50%]">
            <h1 className="text-3xl text-center font-semibold uppercase pb-5">
              Booking
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="place" className="block text-gray-600">
                  Place to Visit
                </label>
                <select
                  id="place"
                  name="place"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                  value={formData.place}
                  onChange={handleChange}
                >
                  <option className="text-gray-400" value="">
                    Select Place to Visit
                  </option>
                  <option value="Japan">Japan</option>
                  <option value="United States">United States</option>
                  <option value="India">India</option>
                  <option value="Italy">Italy</option>
                  <option value="Germany">Germany</option>
                  <option value="Singapore">Singapore</option>
                  <option value="China">China</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Australia">Australia</option>
                </select>
                <span className="text-blue-500">{formError.place}</span>
              </div>

              <div className="mb-4">
                <label htmlFor="persons" className="block text-gray-600">
                  Number of Persons
                </label>
                <input
                  type="number"
                  id="persons"
                  name="persons"
                  value={formData.persons}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                />
                <span className="text-blue-500">{formError.persons}</span>
              </div>
              <div className="mb-4">
                <label htmlFor="startDate" className="block text-gray-600">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  placeholder="DD/MM/YYYY"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                />
                <span className="text-blue-500">{formError.startDate}</span>
              </div>

              <div className="mb-4">
                <label htmlFor="endDate" className="block text-gray-600">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                />
                <span className="text-blue-500">{formError.endDate}</span>
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                />
                <span className="text-blue-500">{formError.description}</span>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-700 text-slate-100 rounded-md hover:bg-blue-800"
              >
                Book
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
