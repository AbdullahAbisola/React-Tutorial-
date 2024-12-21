import logo from "../assets/react-logo.png"
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" width={30}
      height={30} />
        <h3>ReactFacts</h3>

    </header>
  );
};

export default Header;
