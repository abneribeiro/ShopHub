import React from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

