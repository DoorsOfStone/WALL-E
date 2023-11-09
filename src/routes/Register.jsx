import React, { useState } from "react";

function Register() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  function handleSignupClick() {
    setIsLogin(false);
    setShowModal(true);
  }

  function handleLoginClick() {
    setIsLogin(true);
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleSignupSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      userName: formData.get("userName"),
    };
    console.log(data); // Replace with your own code
    handleModalClose();
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      emailOrUsername: formData.get("emailOrUsername"),
      password: formData.get("password"),
    };
    console.log(data); // Replace with your own code
    handleModalClose();
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Registration Component</h1>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleSignupClick}
        >
          Sign up
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoginClick}
        >
          Log in
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-bold mb-4">
              {isLogin ? "Log in" : "Sign up"}
            </h2>
            <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              )}
              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              )}
              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              )}
              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="userName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    User Name
                  </label>
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor={isLogin ? "emailOrUsername" : "email"}
                  className="block text-gray-700 font-bold mb-2"
                >
                  {isLogin ? "Email or Username" : "Email"}
                </label>
                <input
                  id={isLogin ? "emailOrUsername" : "email"}
                  name={isLogin ? "emailOrUsername" : "email"}
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-gray-700 font-bold mb-2"
                  ></label>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default Register;
