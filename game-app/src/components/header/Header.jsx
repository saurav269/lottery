import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { authState, logoutUser } = useAuth();

  
  //FOR NAVIGATION PURPOSE
  // const navigationHandler=(type)=>{
  //   if(type === 'movie'){
  //     navigate("/explore/movie")
  //   }else if(type === "tv"){
  //     navigate("explore/tv")
  //   }else if(type === ""){
  //     navigate("/")
  //   }
  //   setMobileMenu(false)
  // };

  // const openSearch = () => {
  //   setMobileMenu(false);
  //   setShowSearch(true);
  // };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };


    //LOGOUT FUNCTIONALITY
    const handleLogout=()=>{
      // localStorage.clear()
      // toast.success('Logout Successful!')
      navigate('/login')
      logoutUser(); // Call the logoutUser function from context
  }



  //FOR NAVBAR TRANSITIONING
  const controlNavbar=()=>{
    //console.log(window.scrollY)
    if(window.scrollY > 200){
      if(window.scrollY >  lastScrollY && !mobileMenu) {
        setShow("hide")
      }else{
        setShow("show")
      }
    }else{
      setShow("top")
    }
    setLastScrollY(window.scrollY)
  }

  //USE FOR SCROLLING FROM TOP
  useEffect(() => {
    window.scrollTo(0,0)
  },[location]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar) 
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  },[lastScrollY])



  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <ul className="menuItems">
          {authState.isAuth ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : null}
        </ul>

        <div className="mobileMenuItems">
          {/* //CREATING HAMBURGER AND CLOSE MENU FOR RESPONSIVENESS */}
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

    { showSearch &&  <div className="searchBar">
        <ContentWrapper>
        </ContentWrapper>
      </div>}
    </header>
  );
};

export default Header;
