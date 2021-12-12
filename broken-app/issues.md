# Broken App Issues


Improve variable syntaxs, var to const, let to const

Created an new Error class in a sepearte file to identify what error

Make a server.js file and export app to the server

Write a 404 error route handler and global generic error handler.

To look clear the app.js , write a middlerware file and router file.

All routes are in routes.js. 

To display the data in json format, I use ( router.use because I put routes in router file)
router.use(express.json());
router.use(express.urlencoded({ extended: true }))

