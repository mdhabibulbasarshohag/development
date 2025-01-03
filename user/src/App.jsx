import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App
