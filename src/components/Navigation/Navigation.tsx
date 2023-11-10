import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => (
  <NavigationStyled className="navigation-bar">
    <NavLink className="navigation-bar__link" to="/new-movie">
      Add movies
    </NavLink>
    <NavLink className="navigation-bar__link" to="/films">
      Home
    </NavLink>
  </NavigationStyled>
);

export default Navigation;
