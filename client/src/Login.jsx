import React from "react";

export default function Login(props) {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome to Decentralized Voting App
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              onClick={props.btnhandler}
            >
              Login with MetaMask
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
