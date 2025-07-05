import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="text-center p-8">
        <h1 className="text-6xl md:text-9xl font-extrabold text-indigo-600">
          {status || 404}
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          {error?.message || "The page you are looking for does not exist."}
        </p>
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
      <div className="mt-8 text-gray-500">
        <p>If you believe this is an error, please contact support.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
