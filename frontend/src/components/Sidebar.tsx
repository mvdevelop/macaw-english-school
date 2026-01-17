
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { setCurrentLevel, type Level } from '../store/slices/courseSlice';
import { 
  FiBook,
  FiCheckCircle,
  FiCircle,
  FiChevronRight,
  FiChevronLeft,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { currentLevel, progress } = useSelector((state: RootState) => state.course);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se está em mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Fecha sidebar mobile ao selecionar um nível
  const handleLevelSelect = (level: Level) => {
    dispatch(setCurrentLevel(level));
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button - Apenas em mobile */}
      {isMobile && (
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg md:hidden"
          aria-label="Toggle sidebar"
        >
          {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Overlay para mobile */}
      {isMobile && isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside className={`
        ${isMobile ? 
          `fixed inset-y-0 left-0 transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`
          : 'fixed'
        }
        ${!isMobile && isCollapsed ? 'w-16' : 'w-64'}
        bg-white dark:bg-gray-800 shadow-lg h-screen top-0 md:top-16 z-40
        transition-all duration-300
      `}>
        {/* Collapse Button - Apenas em desktop */}
        {!isMobile && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-6 bg-white dark:bg-gray-800 p-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
            aria-label={isCollapsed ? "Expandir sidebar" : "Recolher sidebar"}
          >
            {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
          </button>
        )}

        {/* Mobile Header */}
        {isMobile && (
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              Níveis do Curso
            </h2>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Fechar menu"
            >
              <FiX size={20} />
            </button>
          </div>
        )}

        <div className="p-4 h-full overflow-y-auto">
          {(!isMobile || !isCollapsed) && !isMobile && (
            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-6">
              Níveis do Curso
            </h2>
          )}
          
          <nav className="space-y-2">
            {levels.map(({ level, label, description }) => (
              <button
                key={level}
                onClick={() => handleLevelSelect(level)}
                className={`
                  w-full flex items-center 
                  ${(isMobile || !isCollapsed) ? 'justify-between' : 'justify-center'} 
                  p-3 rounded-lg transition-all
                  ${currentLevel === level
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }
                  ${isMobile ? 'text-left' : ''}
                `}
                aria-label={`Nível ${level} - ${label}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`
                    ${isMobile ? 'p-2' : 'p-2'}
                    rounded-lg flex-shrink-0
                    ${currentLevel === level
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700'
                    }
                  `}>
                    <FiBook size={isMobile ? 20 : (isCollapsed ? 20 : 18)} />
                  </div>
                  
                  {(isMobile || !isCollapsed) && (
                    <div className="text-left flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold truncate">{level}</span>
                        <span className="text-sm opacity-75 truncate hidden sm:inline">
                          {label}
                        </span>
                      </div>
                      <p className="text-xs opacity-60 truncate">
                        {description}
                      </p>
                    </div>
                  )}
                </div>

                {(isMobile || !isCollapsed) && (
                  <div className="flex items-center space-x-2 ml-2 flex-shrink-0">
                    {/* Progress bar visível apenas em telas maiores */}
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 hidden sm:block">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(level)}`}
                        style={{ width: `${progress[level]}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium min-w-[40px] text-right">
                      {progress[level]}%
                    </span>
                    {progress[level] === 100 ? (
                      <FiCheckCircle className="text-green-500 flex-shrink-0" />
                    ) : (
                      <FiCircle className="text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                )}
              </button>
            ))}
          </nav>

          {/* Seção de progresso - Apenas quando expandido ou em mobile */}
          {(isMobile || !isCollapsed) && (
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg">
              <h3 className="text-white font-bold mb-2">Seu Progresso</h3>
              <div className="space-y-2">
                {levels.map(({ level }) => (
                  <div key={level} className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">{level}</span>
                    <div className="flex-1 mx-3">
                      <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                        <div
                          className="bg-white h-2 rounded-full"
                          style={{ width: `${progress[level]}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-white text-sm font-bold min-w-[40px] text-right">
                      {progress[level]}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
