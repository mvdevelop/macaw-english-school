
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  FiPlay,
  FiClock,
  FiUsers,
  FiStar,
  FiBook,
  FiVideo,
  FiFileText,
  FiCheckCircle,
  FiChevronRight,
  FiBarChart2,
  FiMenu
} from 'react-icons/fi';

const Home: React.FC = () => {
  const { currentLevel, contents } = useSelector((state: RootState) => state.course);
  const currentContents = contents[currentLevel];

  const levelInfo = {
    A1: {
      title: 'Beginner Level',
      color: 'from-blue-400 to-blue-600',
      icon: '👋',
      description: 'Comece sua jornada no inglês com o básico essencial'
    },
    A2: {
      title: 'Elementary Level',
      color: 'from-green-400 to-green-600',
      icon: '📚',
      description: 'Construa uma base sólida no idioma'
    },
    B1: {
      title: 'Intermediate Level',
      color: 'from-yellow-400 to-yellow-600',
      icon: '🚀',
      description: 'Ganhe confiança para conversas do dia a dia'
    },
    B2: {
      title: 'Upper Intermediate',
      color: 'from-orange-400 to-orange-600',
      icon: '🎯',
      description: 'Expanda suas habilidades para contextos complexos'
    },
    C1: {
      title: 'Advanced Level',
      color: 'from-purple-400 to-purple-600',
      icon: '🏆',
      description: 'Domine o inglês em situações profissionais'
    },
    C2: {
      title: 'Proficiency Level',
      color: 'from-red-400 to-red-600',
      icon: '👑',
      description: 'Alcance fluência quase nativa'
    },
  };

  const testimonials = [
    { name: 'Maria Silva', text: 'A Macaw English transformou meu aprendizado!', level: 'C1' },
    { name: 'João Santos', text: 'Metodologia excelente e professores incríveis!', level: 'B2' },
    { name: 'Ana Oliveira', text: 'Em 6 meses já consigo conversar fluentemente!', level: 'B1' },
    { name: 'Pedro Costa', text: 'Conteúdo muito bem estruturado e didático!', level: 'A2' },
  ];

  const stats = [
    { label: 'Alunos Ativos', value: '2.5k+', icon: <FiUsers className="text-blue-500" /> },
    { label: 'Aulas Completas', value: '10k+', icon: <FiCheckCircle className="text-green-500" /> },
    { label: 'Taxa de Satisfação', value: '98%', icon: <FiStar className="text-yellow-500" /> },
    { label: 'Progresso Médio', value: '75%', icon: <FiBarChart2 className="text-purple-500" /> },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
      {/* Hero Section Responsiva */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-r ${levelInfo[currentLevel].color} rounded-2xl p-4 md:p-8 text-white`}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
              <span className="text-3xl md:text-4xl">{levelInfo[currentLevel].icon}</span>
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  {currentLevel} - {levelInfo[currentLevel].title}
                </h1>
                <p className="text-blue-100 text-sm md:text-base">
                  {levelInfo[currentLevel].description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-6">
              <div className="flex items-center space-x-2">
                <FiClock className="flex-shrink-0" />
                <span className="text-sm md:text-base">10 horas de conteúdo</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiUsers className="flex-shrink-0" />
                <span className="text-sm md:text-base">500+ estudantes</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiStar className="flex-shrink-0" />
                <span className="text-sm md:text-base">4.9/5 avaliações</span>
              </div>
            </div>
          </div>
          <button className="w-full lg:w-auto bg-white text-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 mt-4 lg:mt-0">
            <FiPlay />
            <span>Continuar Estudos</span>
          </button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                {stat.icon}
              </div>
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                {stat.value}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Content Grid Responsiva */}
      <div>
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
            Conteúdo do Nível {currentLevel}
          </h2>
          <button className="text-blue-600 dark:text-blue-400 text-sm md:text-base flex items-center space-x-1 hover:underline">
            <span>Ver tudo</span>
            <FiChevronRight />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {currentContents.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 md:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm font-medium">
                      {currentLevel}
                    </span>
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      {content.duration}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-2 truncate">
                    {content.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3 md:mb-4 line-clamp-2">
                    {content.description}
                  </p>
                </div>
                {content.completed && (
                  <FiCheckCircle className="text-green-500 text-xl md:text-2xl flex-shrink-0 ml-2" />
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center flex-wrap gap-2 md:gap-4">
                  <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <FiBook className="flex-shrink-0" />
                    <span>{content.lessons} aulas</span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <FiVideo className="flex-shrink-0" />
                    <span>Vídeo</span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <FiFileText className="flex-shrink-0" />
                    <span>PDF</span>
                  </div>
                </div>
                <button className={`
                  w-full sm:w-auto px-3 md:px-4 py-2 rounded-lg font-medium text-sm md:text-base
                  ${content.completed
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'
                  }
                `}>
                  {content.completed ? 'Revisar' : 'Começar'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Slider Responsivo */}
      <div className="mt-8 md:mt-12">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
          O que nossos estudantes dizem
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg h-full">
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-base md:text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-800 dark:text-white truncate">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      Nível {testimonial.level}
                    </span>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 italic mb-3 md:mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className="text-yellow-500 fill-current w-4 h-4 md:w-5 md:h-5" 
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-next !text-blue-600 dark:!text-blue-400 !hidden md:!flex"></div>
          <div className="swiper-button-prev !text-blue-600 dark:!text-blue-400 !hidden md:!flex"></div>
        </Swiper>
      </div>

      {/* Mobile Navigation Tips */}
      <div className="md:hidden bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mt-8">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
            <FiMenu className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 dark:text-white">
              Navegação Mobile
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Use o botão no canto inferior direito para acessar os níveis do curso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
