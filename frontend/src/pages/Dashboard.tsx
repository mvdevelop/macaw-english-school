
import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiAward, FiTrendingUp } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  const stats = [
    { icon: <FiBook />, label: 'Aulas Completas', value: '24', change: '+5' },
    { icon: <FiCalendar />, label: 'Dias de Estudo', value: '45', change: '+2' },
    { icon: <FiAward />, label: 'Conquistas', value: '8', change: '+1' },
    { icon: <FiTrendingUp />, label: 'Nível Atual', value: 'B1', change: '↑' },
  ];

  const recentActivities = [
    { action: 'Completou aula', course: 'Past Tenses', time: '2 horas atrás' },
    { action: 'Conquistou badge', course: 'Grammar Master', time: '1 dia atrás' },
    { action: 'Postou no fórum', course: 'Speaking Practice', time: '2 dias atrás' },
    { action: 'Completou exercício', course: 'Vocabulary Quiz', time: '3 dias atrás' },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 md:p-8 text-white"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Bem-vindo de volta, {user?.firstName || 'Estudante'}!
            </h1>
            <p className="text-blue-100">
              Continue sua jornada no inglês. Hoje é um ótimo dia para aprender!
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl md:text-3xl">🦜</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                {stat.icon}
              </div>
              <span className="text-green-500 text-sm font-semibold">
                {stat.change}
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Atividades Recentes
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {activity.course}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Ações Rápidas
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Continuar Aula', color: 'bg-blue-500 hover:bg-blue-600' },
              { label: 'Praticar Falar', color: 'bg-green-500 hover:bg-green-600' },
              { label: 'Revisar Vocabulário', color: 'bg-purple-500 hover:bg-purple-600' },
              { label: 'Fazer Quiz', color: 'bg-orange-500 hover:bg-orange-600' },
            ].map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${action.color} text-white p-4 rounded-xl text-center font-medium`}
              >
                {action.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
