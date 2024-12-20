import logo from "./assets/react-logo.png";
const App = () => {
  return (
    <section>
      <div>
        <img src={logo} alt="logo" width={40} height={40} />
      </div>

      <div>
        <h1>Fun facts about React</h1>

        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        
      </div>

    </section>
  );
};

export default App;
