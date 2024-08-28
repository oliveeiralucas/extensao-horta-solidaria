import Footer from '../../components/site/Footer'
import Navbar from '../../components/site/NavBar'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
