import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavBar1 from './components/NavBar1';
import CargoHome1 from './components/CargoHome1';
import CargoHome2 from './components/CargoHome2';
import Footer from './components/Footer';
import Login from './components/Login';
import CustomerDash from './DashBoard/CustomerDash';
import StoreDash from './DashBoard/StoreDash';
import DistributionDash from './DashBoard/DistributionDash';
import DeliveryDash from './DashBoard/DeliveryDash';
import UserDash from './DashBoard/UserDash';
import ShowRoomDash from './DashBoard/ShowRoomDash';
import FinanceDash from './DashBoard/FinanceDash';
import OwnerDash from './DashBoard/OwnerDash';
import registerCusDash from './DashBoard/registerCusDash';
import Branches from './components/Branches';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import HomeSL from './components/DistributionManagement/HomeSL';
import CreateSL from './components/DistributionManagement/CreateSL';
import EditSL from './components/DistributionManagement/EditSL';
import SLcargoDetails from './components/DistributionManagement/SLcargoDetails';
import Dhome from './components/DistributionManagement/Dhome';
import DcreateSL from './components/DistributionManagement/DcreateSL';
import DeditSL from './components/DistributionManagement/DeditSL';
import DSLcargoDetails from './components/DistributionManagement/DSLcargoDetails';

import Dash from './components/FinanceManagement/Transactions';
import Incomes from './components/FinanceManagement/Dash';
import CreateIncome from './components/FinanceManagement/CreateIncome';
import EditIncome from './components/FinanceManagement/EditIncome';
import IncomeDetails from './components/FinanceManagement/IncomeDetails';
import ExpenseDetails from './components/FinanceManagement/ExpenseDetails';
import CreateExpense from './components/FinanceManagement/CreateExpense';
import EditExpense from './components/FinanceManagement/EditExpense';
import SalaryDash from './components/FinanceManagement/SalaryDash';
import SalaryCalc from './components/FinanceManagement/SalaryCalc';
import EditSalary from './components/FinanceManagement/EditSalary';
import SalaryDetail from './components/FinanceManagement/SalaryDetail';
import Reports from './components/FinanceManagement/Reports';
import IncomeReport from './components/FinanceManagement/IncomeReport';
import ExpenseReport from './components/FinanceManagement/ExpenseReport';
import CashLedger from './components/FinanceManagement/CashLedger';
import AddToLedger from './components/FinanceManagement/AddToLedger';
import AllExpenses from './components/FinanceManagement/ExpensesDash';
import Profit from './components/FinanceManagement/Profit';



import EmployeeDash from './components/OwnerManagement/EmployeeDash';
import AddEmployee from './components/OwnerManagement/AddEmployee';
import EditEmployee from './components/OwnerManagement/EditEmployee';
import EmployeeDetails from './components/OwnerManagement/EmployeeDetails';
import ShowRoomCreatePost from './components/ShowRoomManagement/ShowRoomCreatePost';
import ShowRoomEditPost from './components/ShowRoomManagement/ShowRoomEditPost';
import ShowRoomPostDetails from './components/ShowRoomManagement/ShowRoomPostDetails';
import ShowRoomHome from './components/ShowRoomManagement/ShowRoomHome';
import HomeDelivery from './components/DeliveryManagement/HomeDelivery';
import CreateDelivery from './components/DeliveryManagement/CreateDelivery';
import EditDelivery from './components/DeliveryManagement/EditDelivery';
import DeliveryDetails from './components/DeliveryManagement/DeliveryDetails';
import HomeDriver from './components/DeliveryManagement/HomeDriver';
import CreateDriver from './components/DeliveryManagement/CreateDriver';
import EditDriver from './components/DeliveryManagement/EditDriver';
import DriverDetails from './components/DeliveryManagement/DriverDetails';
import fHome from './components/UserManagement/fHome';
import createFeedback from './components/UserManagement/createFeedback';
import editFeedback from './components/UserManagement/editFeedback';
import feedbackDetails from './components/UserManagement/feedbackDetails';
import HomeKwarehouse from './components/StoreManagement/HomeKwarehouse';
import CreateKwarehouse from './components/StoreManagement/CreateKwarehouse';
import EditKwarehouse from './components/StoreManagement/EditKwarehouse';
import KwarehouseDetails from './components/StoreManagement/KwarehouseDetails';
import HomeKpayment from './components/StoreManagement/HomeKpayment';
import CreateKpayment from './components/StoreManagement/CreateKpayment';
import EditKpayment from './components/StoreManagement/EditKpayment';
import KpaymentDetails from './components/StoreManagement/KpaymentDetails';
import HomeC from './components/CustomerManagement/HomeC';
import CreateProfile from './components/CustomerManagement/CreateProfile';
import EditProfile from './components/CustomerManagement/EditProfile';
import ProfileDetails from './components/CustomerManagement/ProfileDetails';
import KkadeshowRoom from './components/ShowRoomManagement/KkadeshowRoom';
import cusShowroomPost from './components/ShowRoomManagement/cusShowroomPost';
import showRreportgen from './components/ShowRoomManagement/showRreportgen';
import StoreReport from './components/StoreManagement/StoreReport';
import DeliveryRepgen from './components/DeliveryManagement/DeliveryRepgen';
import ReceiverReport from './components/DistributionManagement/ReceiverReport';
import HomeR from './components/CustomerManagement/HomeR';
import CreateReceiver from './components/CustomerManagement/CreateReceiver';
import EditReceiver from './components/CustomerManagement/EditReceiver';
import ReceiverDetails from './components/CustomerManagement/ReceiverDetails';
import CustomerReport from './components/CustomerManagement/CustomerReport';
import OwnerReport from './components/OwnerManagement/OwnerReport';
import RHome from './components/UserManagement/RHome';
import CreateRefunds from './components/UserManagement/CreateRefunds';
import EditRefunds from './components/UserManagement/EditRefunds';
import RefundDetails from './components/UserManagement/RefundDetails';
import userrepgen from './components/UserManagement/userrepgen';
import functionDash from './components/functionDash';
import PickupRequest from './components/CustomerManagement/PickupRequest';



export default class App extends Component {
  render() {
    return (


      <BrowserRouter>
        {/*...................................................NavBar............................................... */}
        <div style={{ top: 0, position: 'sticky', zIndex: 99 }}>
          <NavBar1 />
          <NavBar />
        </div>
        {/*...................................................NavBarEnd............................................... */}

        {/*...................................................Home............................................... */}
        <div style={{ marginBlockStart: '-100px' }} >
          {/*...................................................HomeSlideShow............................................... */}
          <Route path="/" exact component={CargoHome1}></Route>
          <Route path="/" exact component={CargoHome2}></Route>
          <Route path="/FDB" exact component={functionDash}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/dashcus" exact component={CustomerDash}></Route>
          <Route path="/dashstore" exact component={StoreDash}></Route>
          <Route path="/dashdis" exact component={DistributionDash}></Route>
          <Route path="/dashdeli" exact component={DeliveryDash}></Route>
          <Route path="/dashuser" exact component={UserDash}></Route>
          <Route path="/dashshow" exact component={ShowRoomDash}></Route>
          <Route path="/KSHC" exact component={KkadeshowRoom}></Route>
          <Route path="/dashfin" exact component={FinanceDash}></Route>
          <Route path="/dashowner" exact component={OwnerDash}></Route>
          <Route path="/registerCusDash" exact component={registerCusDash}></Route>
          <div style={{marginBlockStart:'-8%'}}>
          <Route path="/branches" exact component ={Branches}></Route>
          </div>
          <Route path="/ContactUsMap" exact component ={ContactUs}></Route>
          <Route path="/AboutUs" exact component={AboutUs}></Route>
        </div>
        {/*...................................................HomeEnd............................................... */}




        <div>
          {/*...........................................CustomerManagment............................................... */}
          <Route path="/Homec" exact component={HomeC}></Route>
        <Route path="/CP" component={CreateProfile}></Route>
        <Route path="/EP/:id" component={EditProfile}></Route>
        <Route path="/PD/:id" component={ProfileDetails}></Route>
        <Route path="/Homer" exact component={HomeR}></Route>
        <Route path="/CR" component={CreateReceiver}></Route>
        <Route path="/ER/:id" component={EditReceiver}></Route>
        <Route path="/RD/:id" component={ReceiverDetails}></Route>
        <Route path="/CRG" exact component={CustomerReport}></Route> 
        <Route path="/PCR" exact component={PickupRequest}></Route>
          {/*...........................................CustomerManagmentEnd............................................... */}




          {/*...........................................StoreManagment............................................... */}
          <Route path="/HKW" exact component={HomeKwarehouse}></Route>
        <Route path="/CKW" component={CreateKwarehouse}></Route>
        <Route path="/EKW/:id" component={EditKwarehouse}></Route>
        <Route path="/KHD/:id" component={KwarehouseDetails}></Route>
        <Route path="/HKP" exact component={HomeKpayment}></Route>
        <Route path="/CKP" exact component={CreateKpayment}></Route>
        <Route path="/EKP/:id" exct component={EditKpayment}></Route>
        <Route path="/KPD/:id" exact component={KpaymentDetails}></Route>
        <Route path="/SMRG" exact component={StoreReport}></Route>
          {/*...........................................StoreManagmentEnd............................................... */}




          {/*...........................................DistrbutionManagment............................................... */}
          <Route path="/HSL" exact component={HomeSL}></Route>
          <Route path="/CSL" component={CreateSL}></Route>
          <Route path="/ESL/:id" component={EditSL}></Route>
          <Route path="/SLCD/:id" component={SLcargoDetails}></Route>
          <Route path="/RR" exact component={ReceiverReport}></Route>
          <Route path="/DH" exact component={Dhome}></Route>
          <Route path="/DCSL" exact component={DcreateSL}></Route>
          <Route path="/DESL/:id" exact component={DeditSL}></Route>
          <Route path="/DSLCD/:id" exact component={DSLcargoDetails}></Route>
          {/*...........................................DistributionManagmentEnd............................................... */}




          {/*...........................................DeliveryManagment............................................... */}
          <Route path="/HD" exact component={HomeDelivery}></Route>
          <Route path="/drpt" exact component={DeliveryRepgen}></Route>
        <Route path="/CD" component={CreateDelivery}></Route>
        <Route path="/ED/:id"  component={EditDelivery}></Route>
        <Route path="/DD/:id"  component={DeliveryDetails}></Route>
        <Route path="/HDR" exact component={HomeDriver}></Route>
        <Route path="/CDR" component={CreateDriver}></Route>
        <Route path="/EDR/:id"  component={EditDriver}></Route>
        <Route path="/DDR/:id"  component={DriverDetails}></Route>
          {/*...........................................DeliveryManagmentEnd............................................... */}




          {/*...........................................UserManagment............................................... */}
          <Route path="/rHome" exact component={RHome}></Route>
          <Route path="/rRgen" exact component={userrepgen}></Route>
          <Route path="/radd" exact component={CreateRefunds}></Route>
          <Route path="/redit/:id" component={EditRefunds}></Route>
          <Route path="/rpost/:id" component={RefundDetails}></Route>
          <Route path="/fHome" exact component={fHome}></Route>
        <Route path="/fadd" component={createFeedback}></Route>
        <Route path="/fedit/:id" component={editFeedback}></Route>
        <Route path="/post/:id" component={feedbackDetails}></Route>
          {/*...........................................UserManagmentEnd............................................... */}





          {/*...........................................ShowRoomManagment............................................... */}
          <Route path="/SRH" exact component={ShowRoomHome}></Route>
          <Route path="/SRrg" exact component={showRreportgen}></Route>
        <Route path="/showroomadd"component={ShowRoomCreatePost}></Route>
        <Route path="/showroomedit/:id" component={ShowRoomEditPost}></Route>
        <Route path="/showroompost/:id" component={ShowRoomPostDetails}></Route>
        <Route path="/cSH/:id" component={cusShowroomPost}></Route>

          {/*...........................................ShowRoomManagmentEnd............................................... */}





          {/*...........................................FinanceManagment............................................... */}
          <Route path="/Dash" exact component={Dash}></Route>
          <Route path="/AllIncomes" exact component={Incomes}></Route>
        <Route path="/add" exact component={CreateIncome}></Route>
        <Route path="/edit/:id" exact component={EditIncome}></Route>
        <Route path="/income/:id" exact component={IncomeDetails}></Route>
        <Route path="/AllExpenses" exact component={AllExpenses}></Route>
        <Route path="/expense/:id" exact component={ExpenseDetails}></Route>
        <Route path="/addExpense" exact component={CreateExpense}></Route>
        <Route path="/editExpense/:id" exact component={EditExpense}></Route>
        <Route path="/salaryDash" exact component={SalaryDash}></Route>
        <Route path="/addSalary" exact component={SalaryCalc}></Route>
        <Route path="/editSalary/:id" exact component={EditSalary}></Route>
        <Route path="/salary/:id" exact component={SalaryDetail}></Route>
        <Route path="/reports" exact component={Reports}></Route>
        <Route path="/incomeReport" exact component={IncomeReport}></Route>
        <Route path="/expenseReport" exact component={ExpenseReport}></Route>
        <Route path="/cashLedger" exact component={CashLedger}></Route>
        <Route path="/profit" exact component={Profit}></Route>
        <Route path="/addLedger" exact component={AddToLedger}></Route>
          {/*...........................................FinanceManagmentEnd............................................... */}


          {/*...........................................OwnerManagment............................................... */}
          <Route path="/EMD" exact component={EmployeeDash}></Route>
        <Route path="/addEmployee" exact component={AddEmployee}></Route>
        <Route path="/editEmployee/:id" exact component={EditEmployee}></Route>
        <Route path="/employeeDet/:id" exact component={EmployeeDetails}></Route>
        <Route path="/ORG" exact component={OwnerReport}></Route>
          {/*...........................................OwnerManagmentEnd............................................... */}
        </div>







        {/*...................................................Footer............................................... */}
        <div>
          <Footer />
        </div>
        {/*...................................................FooterEnd............................................... */}



      </BrowserRouter>

    )
  }


}