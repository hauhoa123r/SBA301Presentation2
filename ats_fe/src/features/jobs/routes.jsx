import ManagementLayout from '@/app/layout/ManagementLayout'
import { Route } from 'react-router-dom'
import RecruiterDashBoardPage from './pages/RecruiterDashBoardPage.jsx'

const jobRoutes = (
    <Route path="/management" element={<ManagementLayout />} >
        <Route index element={<RecruiterDashBoardPage />} />
    </Route>
  )

export default jobRoutes;