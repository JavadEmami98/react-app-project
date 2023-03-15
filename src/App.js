import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Starter from "./component/starter";
import Register from "./component/register/register";
import Register2 from "./component/register-2/register_2";
import Register3 from "./component/register3/register3";
import Login from "./component/Login/Login";
import Buy from "./component/Buy/Buy";
import Categories from "./component/categories/Categories";
import Shops from "./component/Shops/Shops";
import FanClub from "./component/FanClub/FanClub";
import Festival from "./component/Festival/Festival";
import FinancialReports from "./component/FinancialReports/FinancialReports";
import Reports2 from "./component/Reports2/Reports2";
import Orders from "./component/Orders/Orders";
import Support from "./component/Support/Support";
import TicketList from "./component/TicketList/TicketList";



const App = () => (
  <BrowserRouter>
  <Box >
    <Routes>
      <Route path="/" element={<Starter />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/register2" element={<Register2 />}/>
      <Route path="/register3" element={<Register3 />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/buy" element={<Buy />}/>
      <Route path="/categories" element={<Categories />}/>
      <Route path="/shops" element={<Shops />}/>
      <Route path="/fanclub" element={<FanClub />}/>
      <Route path="/festival" element={<Festival />}/>
      <Route path="/festival" element={<Festival />}/>
      <Route path="/financialreports" element={<FinancialReports />}/>
      <Route path="/reports2" element={<Reports2 />}/>
      <Route path="/orders" element={<Orders />}/>
      <Route path="/support" element={<Support />}/>
      <Route path="/ticketlist" element={<TicketList />}/>
    </Routes>
  </Box>
  </BrowserRouter>
)




export default App