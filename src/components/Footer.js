import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        Made with ❤️ by <Link to="/about">Noubouille</Link>.
      </p>
    </footer>
  );
};

export default Footer;
