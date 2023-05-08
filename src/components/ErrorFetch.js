import { useRouter } from "next/router";
import React from "react";

const ErrorFetch = ({ error }) => {
  const router = useRouter();

  function refreshPage() {
    router.reload();
  }
  return (
    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          Error
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          Check Internet
        </p>
        <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">
          {error}
        </p>
        <p
          className="text-gray-500 mt-8 border-y-2 text-center cursor-pointer"
          onClick={refreshPage}
        >
          Click to Reload
        </p>
      </div>
    </div>
  );
};

export default ErrorFetch;
