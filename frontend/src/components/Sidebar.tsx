
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { setCurrentLevel, type Level } from '../store/slices/courseSlice';
import { 
  FiBook,
  FiCheckCircle,
  FiCircle,
  FiChevronRight,
  FiChevronLeft
} from 'react-icons/fi';
import { useState } from 'react';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { currentLevel, progress } = useSelector((state: RootState) => state.course);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const levels: { level: Level; label: string; description: string }[] = [
    { level: 'A1', label: 'Beginner', description: 'Iniciante' },
    { level: 'A2', label: 'Elementary', description: 'Básico' },
    { level: 'B1', label: 'Intermediate', description: 'Intermediário' },
    { level: 'B2', label: 'Upper Intermediate', description: 'Intermediário Superior' },
    { level: 'C1', label: 'Advanced', description: 'Avançado' },
    { level: 'C2', label: 'Proficiency', description: 'Proficiência' },
  ];

  const getProgressColor = (level: Level) => {
    const percent = progress[level];
    if (percent < 30) return 'bg-red-500';
    if (percent < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-gray-800 shadow-lg h-screen fixed left-0 top-16 transition-all duration-300 z-40`}>
      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-white dark:bg-gray-800 p-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
      >
        {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
      </button>

      <div className="p-4">
        {!isCollapsed && (
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-6">
            Níveis do Curso
          </h2>
        )}
        
        <nav className="space-y-2">
          {levels.map(({ level, label, description }) => (
            <button
              key={level}
              onClick={() => dispatch(setCurrentLevel(level))}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} p-3 rounded-lg transition-all ${
                currentLevel === level
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  currentLevel === level
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                  <FiBook size={isCollapsed ? 20 : 18} />
                </div>
                
                {!isCollapsed && (
                  <div className="text-left">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{level}</span>
                      <span className="text-sm opacity-75">{label}</span>
                    </div>
                    <p className="text-xs opacity-60">{description}</p>
                  </div>
                )}
              </div>

              {!isCollapsed && (
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getProgressColor(level)}`}
                      style={{ width: `${progress[level]}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium">
                    {progress[level]}%
                  </span>
                  {progress[level] === 100 ? (
                    <FiCheckCircle className="text-green-500" />
                  ) : (
                    <FiCircle className="text-gray-400" />
                  )}
                </div>
              )}
            </button>
          ))}
        </nav>

        {!isCollapsed && (
          <div className="mt-8 p-4 bg-gradient-to-r from-macaw-blue to-macaw-green rounded-lg">
            <h3 className="text-white font-bold mb-2">Seu Progresso</h3>
            <div className="space-y-2">
              {levels.map(({ level }) => (
                <div key={level} className="flex items-center justify-between">
                  <span className="text-white text-sm">{level}</span>
                  <div className="w-24 bg-white bg-opacity-30 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: `${progress[level]}%` }}
                    />
                  </div>
                  <span className="text-white text-sm font-bold">
                    {progress[level]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
