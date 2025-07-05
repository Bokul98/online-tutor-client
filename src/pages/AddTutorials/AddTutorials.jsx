import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    image: '',
    language: '',
    price: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  // Removed unused success and error state to fix lint errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Removed setError and setSuccess as those states are not used anymore
    try {
      const payload = {
        ...formData,
        userName: user?.displayName || '',
        email: user?.email || '', // Always use auth email for backend
      };
      const res = await fetch('https://online-tutor-booking-platform.vercel.app/api/tutorials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to add tutorial');
      // Removed setSuccess as it's not used
      setFormData({
        email: user?.email || '',
        image: '',
        language: '',
        price: '',
        description: '',
      });
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Tutorial added successfully!',
        confirmButtonColor: '#0072FF',
      });
    } catch (err) {
      // Removed setError as it's not used
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message || 'Something went wrong!',
        confirmButtonColor: '#0072FF',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-10 px-2 transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200'
    }`}>
      <div className={`w-full max-w-xl rounded-3xl shadow-2xl p-8 md:p-12 border transition-all duration-300 ${
        isDark ? 'theme-card-bg theme-border' : 'bg-white border-blue-100'
      }`}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent drop-shadow-lg">Add a New Tutorial</h2>
        <div className="mb-6 space-y-3">
          <div>
            <label className={`block font-semibold mb-2 transition-colors duration-300 ${
              isDark ? 'theme-text-primary' : 'text-gray-700'
            }`}>User Name</label>
            <input
              type="text"
              value={user?.displayName || 'N/A'}
              disabled
              className={`w-full px-4 py-2 border rounded-lg font-bold text-base md:text-lg cursor-not-allowed focus:outline-none focus:ring-0 transition-all duration-300 ${
                isDark 
                  ? 'theme-bg-tertiary theme-border text-blue-400' 
                  : 'border-blue-200 bg-gray-100 text-blue-700'
              }`}
              tabIndex={-1}
            />
          </div>
          <div>
            <label className={`block font-semibold mb-2 transition-colors duration-300 ${
              isDark ? 'theme-text-primary' : 'text-gray-700'
            }`}>Email</label>
            <input
              type="text"
              value={user?.email || 'N/A'}
              disabled
              className={`w-full px-4 py-2 border rounded-lg font-bold text-base md:text-lg cursor-not-allowed focus:outline-none focus:ring-0 transition-all duration-300 ${
                isDark 
                  ? 'theme-bg-tertiary theme-border text-blue-400' 
                  : 'border-blue-200 bg-gray-100 text-blue-700'
              }`}
              tabIndex={-1}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block font-semibold mb-2 transition-colors duration-300 ${
              isDark ? 'theme-text-primary' : 'text-gray-700'
            }`}>Image URL</label>
            <input 
              type="text" 
              name="image" 
              value={formData.image} 
              onChange={handleChange} 
              required 
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 ${
                isDark 
                  ? 'theme-card-bg theme-border theme-text-primary placeholder-gray-400' 
                  : 'border-blue-200'
              }`} 
              placeholder="Enter image URL" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block font-semibold mb-2 transition-colors duration-300 ${
                isDark ? 'theme-text-primary' : 'text-gray-700'
              }`}>Language</label>
              <input 
                type="text" 
                name="language" 
                value={formData.language} 
                onChange={handleChange} 
                required 
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 ${
                  isDark 
                    ? 'theme-card-bg theme-border theme-text-primary placeholder-gray-400' 
                    : 'border-blue-200'
                }`} 
                placeholder="e.g. English" 
              />
            </div>
            <div>
              <label className={`block font-semibold mb-2 transition-colors duration-300 ${
                isDark ? 'theme-text-primary' : 'text-gray-700'
              }`}>Price</label>
              <input 
                type="number" 
                name="price" 
                value={formData.price} 
                onChange={handleChange} 
                required 
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 ${
                  isDark 
                    ? 'theme-card-bg theme-border theme-text-primary placeholder-gray-400' 
                    : 'border-blue-200'
                }`} 
                placeholder="e.g. 500" 
                min="0" 
              />
            </div>
          </div>
          <div>
            <label className={`block font-semibold mb-2 transition-colors duration-300 ${
              isDark ? 'theme-text-primary' : 'text-gray-700'
            }`}>Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
              rows={4} 
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 resize-none ${
                isDark 
                  ? 'theme-card-bg theme-border theme-text-primary placeholder-gray-400' 
                  : 'border-blue-200'
              }`} 
              placeholder="Write a short description..." 
            />
          </div>
          <div>
            <label className={`flex items-center gap-2 font-semibold mb-2 transition-colors duration-300 ${
              isDark ? 'theme-text-primary' : 'text-gray-700'
            }`}>
              Review
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.119l-3.382-2.46a1 1 0 00-1.175 0l-3.382 2.46c-.784.57-1.838-.197-1.54-1.119l1.286-3.966a1 1 0 00-.364-1.118l-3.382-2.46c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            </label>
            <input
              type="number"
              value={0}
              disabled
              className={`w-full px-4 py-2 border rounded-lg font-bold text-base md:text-lg cursor-not-allowed focus:outline-none focus:ring-0 transition-all duration-300 ${
                isDark 
                  ? 'theme-bg-tertiary theme-border text-gray-400' 
                  : 'border-blue-200 bg-gray-100 text-gray-500'
              }`}
              tabIndex={-1}
            />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 disabled:opacity-60" disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                Submitting...
              </span>
            ) : 'Submit'}
          </button>
          {/* SweetAlert2 will show alerts, so no need for text messages here */}
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;