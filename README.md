# Live-UpdatingTreeView
*	The tree should contain a group of nodes, with a main (root) node that can have any number of ‘factories'
* These factory nodes can in turn generate a set amount of random numbers (up to 15), represented as child nodes of their respective factories
* Factories and children should be created through some means of user input (right click, button press, etc) specifying the number of children to generate (up to 15) and the ranges of those children
* Factories should have an adjustable name assigned to them, be removable, and have an adjustable lower and upper bound for the random number generation
* All users should see any changes made to the tree immediately across browsers without refreshing or polling.
* The state of the tree should remain persistent; reloading should not undo any state
* All of a factory’s existing child nodes should be removed upon each new generation
* Your project should be secure, validate inputs, and protect against injections

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
>Running The Server - http://localhost:3001
2. cd backend
3. npm install
4. npm start
>Running The Client - http://localhost:3000
5. cd frontend
6. npm install
7. npm start
