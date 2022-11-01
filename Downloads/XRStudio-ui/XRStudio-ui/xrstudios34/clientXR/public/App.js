import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import AdminCard from "./components/AdminCard/AdminCard";
import Dashboard from "./components/Dashboard/Dashboard";
import EditPage from "./components/FileUploadSetting/EditPage";
import LeftSidePanel from "./components/LeftSidePanel/LeftSidePanel";
import ManageAdmin from "./components/ManageAdmin/ManageAdmin";
import ManageAdminUser from "./components/ManageAdminUser/ManageAdminUser";
import ModelCard from "./components/ModelCard";
import ModelDashboard from "./components/ModelDashboard/ModelDashboard";
import Navbar from "./components/Navbar/Navbar";
import TransactionDetails from "./components/Transactions/TransactionDetails";
import Transactions from "./components/Transactions/Transaction";
import UploadPageAfter from "./components/UploadPages/UploadPageAfter/UploadPageAfter";
import UploadPageBefore from "./components/UploadPages/UploadPageBefore";
import UserCard from "./components/UserCard/UserCard";
import Products from "./components/Products/Products";
import ManageUser from "./components/ManageUser/ManageUser";
import Transaction from "./components/Transactions/Transaction";
import AdminCase from "./components/Usecase/AdminCases";
import UsecaseCard from "./components/Usecase/UsecaseCard";
import CustomCase from "./components/Usecase/CustomCase";
import CreateCase from "./components/Usecase/CreateCase";
import Information from "./components/Information/Information";
import AddToCart from "./components/Products/AddToCart";
import UseCaseIssues from "./components/Usecase/UseCaseIssues";
import Home from "./components/Home/Home";
import PublicGallery from "./components/PublicGallery/PublicGallery";
import ContactUs from "./components/ContactUs";
import Upload from "./components/Upload/Upload";
import Login from "./components/LoginPage/LoginPage";
import Signup from "./components/SignupPage/SignupPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import AboutUs from "./components/AboutUs/About";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "../src/components/Profile/ProfilePage";
import Usecase from "./components/Usecase/AdminCases";
import SingleCase from "./components/Usecase/SingleCase";
import ShowInformation from "./components/Information/ShowInformation";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import ProductInfo from "./components/ProductInfo/ProductInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<GetInTouch />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup/:id/:id" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* <Route path="/get-in-touch" element={<GetInTouch />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/user/publicgallery" element={<ProductInfo />} />
          <Route path="/user/:id/add-to-cart" element={<AddToCart />} />
          <Route path="/user/:id/custom-case" element={<CustomCase />} />
          <Route path="/user/create-case" element={<CreateCase />} />
          <Route path="/user/uploadfile" element={<Upload />} />
          <Route path="/user/:id/general-info" element={<Information />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/manage-users" element={<ManageAdminUser />} />
          <Route path="/admin/view-products" element={<ModelDashboard />} />
          <Route path="/admin/create-products" element={<Products />} />
          <Route path="/admin/usecases" element={<AdminCase />} />
          <Route path="/admin/:id/info" element={<ShowInformation />} />
          <Route path="/admin/usecases/:id/Single" element={<SingleCase />} />
          <Route path="/admin/transactions" element={<Transaction />} />
          <Route
            path="/admin/transaction-details"
            element={<TransactionDetails />}
          />
          <Route path="/admin/issues" element={<UseCaseIssues />} />
          {/* Client Routes */}
          {/* <Route exact path="/" element={<Home/>} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Route path="/uploadpage-before" element={<UploadPageBefore />} />
          <Route path="/uploadpage-after" element={<UploadPageAfter />} />
          <Route path="/editpage" element={<EditPage />} /> */}
      {/* <UsecaseCard/> */}
      {/* <Dashboard /> */}
      {/* <Products /> */}
      {/* <ModelDashboard /> */}
      {/* <Transactions /> */}
      {/* <TransactionDetails /> */}
      {/* <ManageAdmin /> */}
      {/* <ManageUser /> */}
      {/* <ManageAdminUser /> */}
      {/* <UploadPageBefore/> */}
      {/* <EditPage/> */}
      {/* <UploadPageAfter/> */}
      {/* <UserCard/> */}
      {/* <AdminCard/> */}
      {/* <ModelCard/> */}
      {/* <Navbar/>   */}
      {/* <LeftSidePanel/> */}
      {/* <Information /> */}
    </>
  );
}

export default App;
