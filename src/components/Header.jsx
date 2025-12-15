import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAuthForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAuthClick = (mode) => {
    setIsLogin(mode === 'login');
    setShowAuthForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setShowAuthForm(false);
    // Reset form
    setFormData({ email: '', password: '', confirmPassword: '', name: '' });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  F
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FileEase
                </span>
              </Link>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link to="/" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
                Home
              </Link>
              <a href="#tools" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
                Tools
              </a>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Right side - Auth buttons */}
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => handleAuthClick('login')}
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 select-none"
              >
                Login
              </button>
              <button 
                onClick={() => handleAuthClick('signup')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 select-none shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Sign Up
              </button>
            </div>

            {/* Auth Form Dropdown */}
            {showAuthForm && (
              <div className="absolute right-0 mt-3 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 z-50 animate-in slide-in-from-top-2 duration-200">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isLogin ? 'Sign in to your FileEase account' : 'Join FileEase today'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required={!isLogin}
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {!isLogin && (
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required={!isLogin}
                        />
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
                    >
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                  </form>

                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-600">
                      {isLogin ? "Don't have an account? " : "Already have an account? "}
                      <button
                        onClick={toggleMode}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {isLogin ? 'Sign Up' : 'Sign In'}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;