import { useRef } from "react";


function App() {



  const elementref=useRef(null)

  const countRef = useRef(0);

  const increment = () => {
    countRef.current = countRef.current + 1;
    console.log('Count:', countRef.current);
  };

  const handleInput=()=>{
   // accessing the input element
   let inputElement = elementref.current;

   // modify the DOM element
   inputElement.focus();
   
   inputElement.style.backgroundColor = 'red';


  }

  console.log("am rendering");

  return (
    <div>
      <p>Count: {countRef.current}</p>
      <button onClick={increment}>Increment</button><br/>
      
      <label htmlFor="inputData" > Eneter a some text
      <input type="text" id="inputData" ref={elementref}/>
      </label> <br/>
      <button onClick={handleInput}>Click to change the color of input element</button>
      
    </div>
  );
}

export default App;
