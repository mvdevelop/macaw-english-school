
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { store } from './store/store'
import { Provider } from 'react-redux'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: undefined, // Usará tema do sistema
        variables: {
          colorPrimary: '#3b82f6',
          colorTextOnPrimaryBackground: '#ffffff',
          borderRadius: '0.5rem',
        },
        elements: {
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
          card: 'bg-white dark:bg-gray-800 shadow-lg',
          headerTitle: 'text-gray-800 dark:text-white',
          headerSubtitle: 'text-gray-600 dark:text-gray-300',
          socialButtonsBlockButton: 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700',
          socialButtonsBlockButtonText: 'text-gray-700 dark:text-gray-300',
          dividerLine: 'bg-gray-300 dark:bg-gray-600',
          dividerText: 'text-gray-500 dark:text-gray-400',
          formFieldLabel: 'text-gray-700 dark:text-gray-300',
          formFieldInput: 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white',
          footerActionLink: 'text-blue-600 hover:text-blue-700 dark:text-blue-400',
        },
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ClerkProvider>
  </StrictMode>
);
