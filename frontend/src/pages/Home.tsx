
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
  FiCheckCircle
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
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-r ${levelInfo[currentLevel].color} rounded-2xl p-8 text-white`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">{levelInfo[currentLevel].icon}</span>
              <div>
                <h1 className="text-3xl font-bold">{currentLevel} - {levelInfo[currentLevel].title}</h1>
                <p className="text-blue-100">{levelInfo[currentLevel].description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FiClock />
                <span>10 horas de conteúdo</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiUsers />
                <span>500+ estudantes</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiStar />
                <span>4.9/5 avaliações</span>
              </div>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center space-x-2">
            <FiPlay />
            <span>Continuar Estudos</span>
          </button>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentContents.map((content, index) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {currentLevel}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {content.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {content.description}
                </p>
              </div>
              {content.completed && (
                <FiCheckCircle className="text-green-500 text-2xl" />
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <FiBook />
                  <span>{content.lessons} aulas</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <FiVideo />
                  <span>Vídeo</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <FiFileText />
                  <span>PDF</span>
                </div>
              </div>
              <button className={`px-4 py-2 rounded-lg font-medium ${
                content.completed
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'
              }`}>
                {content.completed ? 'Revisar' : 'Começar'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Slider */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          O que nossos estudantes dizem
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-macaw-blue to-macaw-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Nível {testimonial.level}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
