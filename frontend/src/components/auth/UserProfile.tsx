
import React, { useState } from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiUser, 
  FiSettings, 
  FiLogOut, 
  FiBell, 
  FiCreditCard,
  FiBook,
  FiChevronDown,
  FiShield
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { user } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { icon: <FiUser />, label: 'Meu Perfil', path: '/profile' },
    { icon: <FiBook />, label: 'Meus Cursos', path: '/my-courses' },
    { icon: <FiBell />, label: 'Notificações', path: '/notifications' },
    { icon: <FiCreditCard />, label: 'Assinatura', path: '/subscription' },
    { icon: <FiSettings />, label: 'Configurações', path: '/settings' },
    { icon: <FiShield />, label: 'Privacidade', path: '/privacy' },
  ];

  return (
    <div className="relative">
      {/* Desktop - User Button */}
      <div className="hidden md:block">
        <UserButton
          appearance={{
            elements: {
              userButtonBox: 'w-10 h-10',
              userButtonAvatarBox: 'w-full h-full',
              userButtonTrigger: 'focus:shadow-lg',
            }
          }}
          afterSignOutUrl="/"
        />
      </div>

      {/* Mobile - Custom Dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
            {user?.firstName?.charAt(0) || 'U'}
          </div>
          <FiChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                onClick={() => setIsDropdownOpen(false)}
              />
              
              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 border border-gray-200 dark:border-gray-700"
              >
                {/* User Info */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {user?.firstName?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {user?.fullName || 'Usuário'}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {user?.primaryEmailAddress?.emailAddress || ''}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Sign Out */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserProfile;
