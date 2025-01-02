import { Link } from "react-router-dom";
import "./Navbar.css";
import Container from '../../components/Common/container/Container';
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="navbar--wrapper">
      <Container>
        <div className="navbar--main--wrapper">
          <div className="nr--navbar--logo">
            <Link className="nr--logo" to={'/'}>
              Logo
            </Link>
          </div>
          <div className="navbar--menus--wrapper">
            <div className="nr--login--btn">
              <a href="#">Log In</a>
            </div>
            <div className="nr--getStrat--btn">
              <a href="#">Get Started</a>
            </div>
            <div className="menu--wrapper--btn">
              <div onClick={handleMenu} className="menu--wrapper--clickble">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M8 11H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 24H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 36H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {isOpen && (
                <div className="menuHeader--munu--wrappers">
                  <ul>
                    <li>
                      <Link to={'/'}>
                        <span>Home</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/contact'}>
                        <span>Contact us</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/about'}>
                        <span>Terms</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/payment'}>
                        <span>Payment History</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/presentation'}>
                        <span>Presentation</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;