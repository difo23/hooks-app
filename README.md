This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




## Day 2/100: `#the100daysofcode`: Simple app to Likes comments with React hooks.
August 10, 2020

#### Problem:
'Like App' this is a simple app that able to count the likes do by user in comments. 
* 1 user likes is: 'Pancho likes this!'
* 2 users like is: 'Pancho and Pedro like this!' 
* 3 users like is: 'Pancho, Pedro and Jose like this!' 
* 4 or more users like is : 'Pancho, Pedro and 2 others like this!' 

To use useState and useEffect hooks for solution.


## Day 3/100: Simple LoginApp with useContext hooks.


## Notes:
_____________________________________________   
* Global data in React JS.
* Exchange data between components without props method.

## React useContext hooks:
____________________________________________

### The login problem:

#### Description: 
This problem is about exchanged user data between brothers component into a simple app. The objective is only to use the concept about context in react using hooks.



#### Step 1. 

The first thing to do is create a context that you want to share between all yours components. Create    `UserContext.js` file.



>`const  UserContext = React.createContext(initialValue);`

>`export default UserContext;`


#### Step 2. 

Later you need to wrap the father of all componentes between `UserContext.Provider` High Order Component (HOC). You can do this in `Main.js` .


* Create `useState` hook:  
`const [user, setUser] = useState({});`

* Create `userInfo` objet:  
`const userInfo = {
    user,
    setUser
};`


* Use the `userInfo` object in the `value` props:  
   
>>`<UserContext.Provider value= { userInfo }>`  

>>>`<ChildrensComponents />`   

>>`</UserContext.Provider>`

>#### Note: 
> The userInfo is object and you can save functions and others js stuffs that you need more forward.


#### Step 3. 

 Finally you can import `UserContext` in all you components, here into in action the useContext hooks. This hooks need the `UserContext` like initial props.

>`const {user, setUser} = useContext(UserContext);`

You can check out <a href="https://difo23.github.io/hooks-app/" target="_blank"> Github page </a> code <a href= 'https://github.com/difo23/hooks-app'> by @difo23 </a> 


### ` npm install` and `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

