import React from 'react'
import './meme_gen.css'

function Meme_gen() {
  return (
    <div>Meme_gen</div>
  )
}

export default Meme_gen;

/*
1- how would you describe the concept of "state" in React?

    - state is a data that is stored in the component and is used to change the component's behavior.
    - A way for React to remmeber saved values from within the component.
    This is similar to declaring variables from within a component.


2- when would you want to use props instead of state?
    Anytime you want to pass data into a component so that component can determine what will get displayed on the screen.
    - props are used to pass data into a component.



3- when would you want to use state istead of props?
    - When you want to change the behavior of a component.

4- what does "immutable" mean? 
(immutable is a term that means "not changeable")

- Are props immutable?
yes, they are.

- Is state immutable?
No, it is not. states are mutable.




*/