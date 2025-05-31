function Food() {
    const food1 = "pizza";
    const food2 = "pasta";
  
    return (
      <div>
        <ul>
          <li>Apple</li>
          <li>{food1}</li>
          <li>{food2.toUpperCase()}</li>
        </ul>
      </div>
    );
  }
  
  export default Food;
  