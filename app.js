// application core dependency modules
// Note: The order of the require statements is important
// You will need to restore the packages by running npm install
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const Book = require('./models/bookModel');

// start express app
const app = express()

// Set the view engine to ejs and set the views directory
app.set('view engine', 'ejs');
console.log('dirname', __dirname);
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

// 2) GLOBAL MIDDLEWARES // Serving static files
app.use(express.static(path.join(__dirname, 'public')));
console.log('public', path.join(__dirname, 'public'));

// 3) GLOBAL MIDDLEWARES // Body parser, reading data from body into req.body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse cookies
app.use(cookieParser());

// Create a home route
app.get('/', async(req, res) => {
  try {
    // Fetch books data from the database
    const books = await Book.find(); // Assuming you're using Mongoose for MongoDB interaction

    // Render the "home" view template and pass books data
    res.render('home', {
        title: 'Dashboard',
        user: req.user, // Assuming you have user authentication and you're passing the user object in the request
        books: books
    });
} catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).send('Internal Server Error');
}
});

//     const books = await Book.find();
//     res.render('home',
//     { 
//       title: 'Dashboard',
//       user: undefined,
//       books: []
//     });
// });



// // 4)  Start defining routes for UI and API
// const viewRouter = require('./routes/viewRoutes')
// const viewUrl = `/views`
// console.log('viewUrl', viewUrl);
// app.use(viewUrl, viewRouter);

// 5) ROUTES API for Users
const userRouter = require('./routes/userRoutes');
app.use('/users', userRouter);

// // 6) ROUTES API for Books
const booksRoutes = require('./routes/bookRoutes');
app.use('/books', booksRoutes);


module.exports = app;
