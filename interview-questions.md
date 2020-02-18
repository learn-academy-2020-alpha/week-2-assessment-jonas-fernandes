# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What does CRUD stand for?

  Your answer: Create/React/Update/Delete

  Researched answer: When we are building APIs, we want our models to provide four basic types of functionality. 
  The model must be able to Create, Read, Update, and Delete resources. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, 
  then it should potentially be a model of its own.



2. What are the 5 HTTP verbs?

  Your answer: Post, Get, Delete

  Researched answer: Post, Get, Put, Patch, Delete



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to render "Hello World" on the page?

  Your answer: "class HelloWorld extends React.Component" at the top, render and inside return "Hello World"

  Researched answer:class HelloWorld extends React.Component { 
  render() {
    return <h1>Hello, {this.props.name}</h1>;  
  }
}



4. What is JSX?

  Your answer: It is the instersection of JavaScript and HTML

  Researched answer: JSX is JavaScript flavored HTML that behaves almost like HTML with a couple small exceptions -- 
  most notably JSX uses the syntax className rather than HTML's class because class is reserved for HTML.



5. What is the difference between React state and props?

  Your answer: React state is what is in the internal state of the parent, and props are what is passed on to the child.

  Researched answer: State - This is data maintained inside a component. It is local or owned by that specific component. The component itself will update the state using the setState function.

Props - Data passed in from a parent component. props are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update.

The difference is all about which component owns the data. State is owned locally and updated by the component itself. Props are owned by a parent component and are read-only. Props can only be updated if a callback function is passed to the child to trigger an upstream change.

The state of a parent component can be passed a prop to the child. They are referencing the same value, but only the parent component can update it.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: No clue. 

  Researched answer: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
- API
- event.preventDefault()
- DOM events
