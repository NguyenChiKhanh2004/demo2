const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const port = 3000 || process.env.PORT;
const app = express();
app.use(cors());
const morgan = require('morgan');
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, 'public')));
//CODE HERE

const pool = require('./src/utils/connectDB');
// async function test() {
//     try {
//         const [results,fields] = await pool.query('SELECT * FROM user');
//         console.log(results);
//     }
//     catch (error) {
//         console.log(error);
//     }   
// }
const userRoute = require('./src/routes/userRoute');
app.use('/user', userRoute);

const productRoute = require('./src/routes/productRoute');
app.use('/product', productRoute);

const productSpecsRoute = require('./src/routes/productSpecsRoute');
app.use('/productSpecs', productSpecsRoute);

const productVariantsRoute = require('./src/routes/productVariantsRoute');
app.use('/productVariants', productVariantsRoute);

const warehouseRoute = require('./src/routes/warehouseRouter');
app.use('/warehouse', warehouseRoute);

const brandsRouter = require('./src/routes/brandsRoute');
app.use('/brands', brandsRouter);

const categoriesRouter = require('./src/routes/categoriesRoute');
app.use('/categories', categoriesRouter);

const colorsRoute = require('./src/routes/colorsRoute');
app.use('/colors', colorsRoute);

const ramsRoute = require('./src/routes/ramsRoute');
app.use('/rams', ramsRoute);

const romsRoute = require('./src/routes/romsRoute');
app.use('/roms',romsRoute);

const userRoute1 = require('./src/routes/productPriceHistoryRoute');
app.use('/productPriceHistory', userRoute1);

const userRoute2 = require('./src/routes/discountsRoute');
app.use('/discounts', userRoute2);

const userRoute3 = require('./src/routes/reviewsRoute');
app.use('/reviews', userRoute3);

const userRoute4 = require('./src/routes/ordersRoute');
app.use('/orders', userRoute4);

const userRoute5 = require('./src/routes/orderItemsRoute');
app.use('/orderItems', userRoute5);

const userRoute6 = require('./src/routes/paymentsRoute');
app.use('/payments', userRoute6);

app.get('/', (req, res) => {
    res.render('index',); //{user: {name: 'admin', email: 'hello'}});
});


// Middleware xử lý lỗi 404: Khi không có route nào khớp
app.use((req, res, next) => {
    console.log('404 middleware hit');
    res.status(404).render('error404');
  });

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});