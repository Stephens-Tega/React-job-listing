import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-98">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
        <h1 className="text-6xl font-bold mb-5">404 Not Found</h1>
        <p className="text-2xl mb-3">This page does not exist</p>
        <Link 
            to="/"
            className="text-white bg-indigo-700 hover:bg-indigo-900 rounded px-3 py-2 mt-4"
        >
            Go Back
        </Link>
    </section>
  )
};

export default NotFoundPage;