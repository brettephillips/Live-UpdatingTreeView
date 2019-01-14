# Live-UpdatingTreeView
*	The tree should contain a group of nodes, with a main (root) node that can have any number of ‘factories'
* These factory nodes can in turn generate a set amount of random numbers (up to 15), represented as child nodes of their respective factories
* Factories and children should be created through some means of user input (right click, button press, etc) specifying the number of children to generate (up to 15) and the ranges of those children
* Factories should have an adjustable name assigned to them, be removable, and have an adjustable lower and upper bound for the random number generation
* All users should see any changes made to the tree immediately across browsers without refreshing or polling.
* The state of the tree should remain persistent; reloading should not undo any state
* All of a factory’s existing child nodes should be removed upon each new generation
* Your project should be secure, validate inputs, and protect against injections

## Production Environment
* https://live-updating-tree-view.herokuapp.com/ - frontend
* https://live-updating-tree-view-api.herokuapp.com/ - API
* NOTE: Application may take some time to load due to heroku putting the server to sleep. You may get an "Application Error" on the first visit. If you see this, then reload the page.
> API Endpoints
* /api/factories - GET, POST
* /api/factories/:id - PUT, DELETE
* /api/children - POST
* /api/children/:id - DELETE

## Technologies
> Backend
* Node.js and express
* Socket.io
* Sequelize
* MySQL
* Express Sanitizer
> Frontend
* React
* BootStrap and React BootStrap
* Axios
* Socket.io Client

## Running The Application Locally
1. Clone or download the repo
2. Navigate to the Live-UpdatingTreeView folder > backend folder > config folder and open config.json
3. Edit the database configurations (NOTE: If you do not do this, then it will not run)
>Running The Server - http://localhost:3001
6. cd backend
7. npm install
8. npm start
>Running The Client - http://localhost:3000
9. cd frontend
10. npm install
11. npm start
