import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="text-9xl font-bold text-gray-200">404</div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-gray-600 max-w-md">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Link
          to="/"
          className="btn btn-primary inline-flex items-center"
        >
          <Home className="h-5 w-5 mr-2" />
          Go home
        </Link>
        <Link
          to="/search"
          className="btn btn-outline inline-flex items-center"
        >
          <Search className="h-5 w-5 mr-2" />
          Search medicines
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;