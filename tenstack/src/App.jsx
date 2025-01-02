
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import CountryList from './CountryList'


const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <CountryList />
    </QueryClientProvider>
  )
}

export default App
