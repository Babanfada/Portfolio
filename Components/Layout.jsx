import Navigation from "./Navigation";
const Layout = ({ children }) => {
  return (
    <div>
      <div style={{padding:"2vw"}}>
        <Navigation />
      </div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
};

export default Layout;
