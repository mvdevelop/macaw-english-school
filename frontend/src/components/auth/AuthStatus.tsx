
import React, { useState } from 'react';
import { useAuth, SignInButton, SignUpButton } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { FiLogIn, FiUserPlus, FiUser } from 'react-icons/fi';
import UserProfile from './UserProfile';

const AuthStatus: React.FC = () => {
  const { isSignedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (isSignedIn) {
    return <UserProfile />;
  }

  return (
    <>
      <div className="flex items-center space-x-3">
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <SignInButton mode="modal">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FiLogIn />
              <span>Entrar</span>
            </motion.button>
          </SignInButton>
          
          <SignUpButton mode="modal">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <FiUserPlus />
              <span>Cadastrar</span>
            </motion.button>
          </SignUpButton>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <SignInButton mode="modal">
            <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <FiUser size={20} />
            </button>
          </SignInButton>
        </div>
      </div>
    </>
  );
};

export default AuthStatus;
