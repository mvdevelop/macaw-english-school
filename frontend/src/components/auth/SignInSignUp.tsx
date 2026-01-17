
import React from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { FiBook, FiGlobe, FiUsers } from 'react-icons/fi';

interface AuthModalProps {
  type: 'sign-in' | 'sign-up';
}

const SignInSignUp: React.FC<AuthModalProps> = ({ type }) => {
  const features = [
    {
      icon: <FiBook className="text-blue-500" />,
      title: 'Aulas Interativas',
      description: 'Conteúdo didático e exercícios práticos'
    },
    {
      icon: <FiGlobe className="text-green-500" />,
      title: 'Comunidade Global',
      description: 'Conecte-se com estudantes do mundo todo'
    },
    {
      icon: <FiUsers className="text-purple-500" />,
      title: 'Professores Nativos',
      description: 'Aprenda com os melhores profissionais'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Left Column - Features */}
        <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🦜</span>
              </div>
              <h1 className="text-3xl font-bold">Macaw English School</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Transforme seu inglês com nossa metodologia exclusiva
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-4">O que nossos alunos dizem</h4>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <p className="italic">"A Macaw English revolucionou meu aprendizado de inglês!"</p>
                <p className="text-sm mt-2 text-blue-200">- Maria Silva, Nível C1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Auth Form */}
        <div className="lg:w-1/2 p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {type === 'sign-in' ? 'Bem-vindo de volta!' : 'Junte-se a nós'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {type === 'sign-in' 
                  ? 'Entre para continuar sua jornada no inglês'
                  : 'Crie sua conta e comece a aprender hoje mesmo'
                }
              </p>
            </div>

            {type === 'sign-in' ? (
              <SignIn
                routing="path"
                path="/sign-in"
                signUpUrl="/sign-up"
                appearance={{
                  elements: {
                    rootBox: 'mx-auto',
                    card: 'shadow-none bg-transparent',
                  }
                }}
              />
            ) : (
              <SignUp
                routing="path"
                path="/sign-up"
                signInUrl="/sign-in"
                appearance={{
                  elements: {
                    rootBox: 'mx-auto',
                    card: 'shadow-none bg-transparent',
                  }
                }}
              />
            )}

            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                {type === 'sign-in' ? 'Novo por aqui?' : 'Já tem uma conta?'}{' '}
                <a 
                  href={type === 'sign-in' ? '/sign-up' : '/sign-in'} 
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
                >
                  {type === 'sign-in' ? 'Crie uma conta' : 'Entre agora'}
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignInSignUp;
