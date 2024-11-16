import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validatePassword, setAuthToken } from '../utils/auth';
import { ArrowRight } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePassword(password)) {
      setAuthToken('admin_token');
      navigate('/admin/edit');
    } else {
      setError('סיסמה שגויה');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light">
      <div className="bg-white p-8 rounded-2xl shadow-soft-xl max-w-md w-full relative">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
        >
          <ArrowRight className="w-5 h-5 ml-2" />
          חזרה לדף הבית
        </button>

        <h1 className="text-2xl font-bold mb-8 text-center text-primary">כניסת מנהל</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              סיסמה
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-xl hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            כניסה
          </button>
        </form>
      </div>
    </div>
  );
}