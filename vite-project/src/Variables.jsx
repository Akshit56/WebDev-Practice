function Variables() {
    let abc = 20; // let works inside a given scope
    // var works outside the scope for eg outside for loop
    const profile = { name: "Akshit", age: 20, weight: 50 }; //key value pair
    profile.name = "Aksh";
    return (
      <div style={{ padding: "20px" }}>
        <h2>
          {console.log(abc)}
          <u>Variables</u>
        </h2>
        <div>Name:{profile.name}</div>
        <div>Age:{profile.age}</div>
        <div>Weight:{profile.weight}</div>
      </div>
    );
  }
  export default Variables;
  