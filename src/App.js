import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Starter from "./page/starter";
import Register from "./page/register/register";
import Register2 from "./page/register-2/register_2";
import Register3 from "./page/register3/register3";
import Login from "./page/Login/Login";
import Buy from "./page/Buy/Buy";
import Categories from "./page/categories/Categories";
import Shops from "./page/Shops/Shops";
import Festival from "./page/Festival/Festival";
import FinancialReports from './page/FinancialReports/FinancialReports';
import Reports2 from "./page/Reports2/Reports2";
import Orders from "./page/Orders/Orders";
import Support from "./component/Support/Support";
import TicketList from "./page/TicketList/TicketList";
import ProfileShop from "./page/profileshop/ProfileShop";
import Register1 from "./page/register-1/Register1";
import EachProduct from "./component/EachProduct/EachProduct";
import FanClub from "./page/FanClub/FanClub";



const App = () => (
  <BrowserRouter>
  <Box sx={{overflowX:"hidden"}}>
    <Routes>
      <Route path="/" element={<Starter />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/register1" element={<Register1 />}/>
      <Route path="/register2" element={<Register2 />}/>
      <Route path="/register3" element={<Register3 />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/buy" element={<Buy />}/>
      <Route path="/categories" element={<Categories />}/>
      <Route path="/shops" element={<Shops />}/>
      <Route path="/fanclub" element={<FanClub />}/>
      <Route path="/festival" element={<Festival />}/>
      <Route path="/financialreports" element={<FinancialReports />}/>
      <Route path="/reports2" element={<Reports2 />}/>
      <Route path="/orders" element={<Orders />}/>
      <Route path="/support" element={<Support />}/>
      <Route path="/ticketlist" element={<TicketList />}/>
      <Route path="/profileshop" element={<ProfileShop />}/>
      <Route path="/eachproduct" element={<EachProduct />}/>
    </Routes>
  </Box>
  </BrowserRouter>
)




export default App