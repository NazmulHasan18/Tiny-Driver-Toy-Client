import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
   return (
      <div className="container flex flex-col items-center justify-center min-h-screen my-10">
         <Helmet>
            <title>Tiny Driver Toy | Page Not Found</title>
         </Helmet>
         <h1 className="text-4xl font-bold mb-4">404 Page Not Found</h1>
         <img src="/404.jpg" alt="404 Error" className="error-image w-1/2 mb-4" />
         <p className="text-lg text-gray-600 mb-4">Oops! The page you are looking for does not exist.</p>
         <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go Back to Home
         </Link>
      </div>
   );
};

export default NotFoundPage;
