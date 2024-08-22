const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');
//...........................................CustomerManagment................................................. 
const customerRoutes = require('./routes/customers');
const ReceiverRoutes = require('./routes/receivers');
//...........................................CustomerManagmentEnd...............................................



//...........................................StoreManagment................................................. 
const koreanwarehouseRoutes = require('./routes/koreanWarehouses'); 
const KoreanpaymentsRoutes = require('./routes/koreanPayments');
//...........................................StoreManagmentEnd...............................................



//...........................................DistributionManagment................................................. 
const lankanRoutes = require('./routes/lankans');
const DlankanRoutes = require('./routes/dlankans');
//...........................................DistributionManagmentEnd...............................................




//...........................................DeliveryManagment................................................. 
const DetailsRoutes = require('./routes/d_details');
const DriverRoutes = require('./routes/driver');
//...........................................DeliveryManagmentEnd...............................................



//...........................................UserManagment................................................. 
const FeedbackRoutes= require('./routes/feedbacks');
const refundRoutes = require('./routes/refunds');
//...........................................UserManagmentEnd...............................................




//...........................................ShowRoomManagment................................................. 
const showroomRoutes = require('./routes/showrooms');
//...........................................ShowRoomManagmentEnd...............................................




//...........................................FinanceManagment................................................. 
const incomeRoutes = require('./routes/incomes');
const expenseRoutes = require('./routes/expenses');
const salaryRoutes = require('./routes/salary');
const ledgerRoutes = require('./routes/ledger');
//...........................................FinanceManagmentEnd...............................................




//...........................................OwnerManagment................................................. 
const employeeRoutes = require('./routes/employees');
//...........................................OwnerManagmentEnd...............................................


//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(postRoutes);

//...........................................CustomerManagment................................................. 
app.use(customerRoutes);
app.use(ReceiverRoutes);
//...........................................CustomerManagmentEnd...............................................



//...........................................StoreManagment................................................. 
app.use(koreanwarehouseRoutes);
app.use(KoreanpaymentsRoutes);
//...........................................StoreManagmentEnd...............................................




//...........................................DistributionManagment................................................. 
app.use(lankanRoutes);
app.use(DlankanRoutes);
//...........................................DistributionManagmentEnd...............................................




//...........................................DeliveryManagment................................................. 
app.use(DetailsRoutes);
app.use(DriverRoutes);
//...........................................DeliveryManagmentEnd...............................................



//...........................................UserManagment................................................. 
app.use(FeedbackRoutes);
app.use(refundRoutes);
//...........................................UserManagmentEnd...............................................




//...........................................ShowRoomManagment................................................. 
app.use(showroomRoutes);
//...........................................ShowRoomManagmentEnd...............................................




//...........................................FinanceManagment................................................. 
app.use(incomeRoutes);
app.use(expenseRoutes);
app.use(salaryRoutes);
app.use(ledgerRoutes);
//...........................................FinanceManagmentEnd...............................................




//...........................................OwnerManagment................................................. 
app.use(employeeRoutes);
//...........................................OwnerManagmentEnd...............................................


const PORT = 8000;
const DB_URL = 'mongodb+srv://itp123:itp123@visioncargo.p4cvw.mongodb.net/VisionCargo?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connected Error', err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);

});