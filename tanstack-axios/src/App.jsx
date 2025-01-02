import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RandomUser from './RandomUser'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
      <RandomUser></RandomUser>
    </QueryClientProvider>
  )
}

export default App
