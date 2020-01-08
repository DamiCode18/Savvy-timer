const express = require('express'),
	User = require('./models/user.model'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	path = require('path'),
	passport = require('passport');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//  Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

const uri = require('./config/keys').mongoURI;
mongoose
	.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: false})
	.then(() => {
		console.log('Database Successfully Launched!!');
	})
	.catch((err) => console.log(err));

// const connection = mongoose.connection;
// connection.once('open', (req, res) => {});

const userDetailsRouter = require('./routes/userDetails');
const userRouter = require('./routes/users');

app.use('/userDetails', userDetailsRouter);
app.use('/users', userRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(port, () => {
	console.log(`server running on port: ${port}`);
});
