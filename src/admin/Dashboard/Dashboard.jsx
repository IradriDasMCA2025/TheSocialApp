import Navbar from './Navbar'
import WelcomeBanner from './WelcomeBanner'
import DashboardStats from './DashboardStats'
import AdminDashboard from './AdminDashboard'
import './App.css'

function Dashboard() {

  return (
    <>
      <Navbar></Navbar>
      <WelcomeBanner></WelcomeBanner>
      <DashboardStats></DashboardStats>
      <AdminDashboard></AdminDashboard>

    </>
  )
}

export default Dashboard
