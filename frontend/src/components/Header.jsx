import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Thrift Place</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/products" className="hover:text-gray-400">Products</Link>
          <Link to="/profile" className="hover:text-gray-400">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
