import Footer from './components/Footer'
import Navbar from './components/NavBar'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
