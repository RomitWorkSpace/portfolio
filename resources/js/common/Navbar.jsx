import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'imgPath/Logo1.png'


const Navbar = () => {
//   const [dropdownData, setDropdownData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {

//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://tecroost.com/api/services');
//         const data = await response.json();
//         setDropdownData(data.services);
//       } catch (error) {
//         console.error('Error fetching dropdown data:', error);
//       }
//     };

//     fetchData();
//   }, []);

useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (e, index) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMainDropdown = () =>{
      setDropdown1Visible(!dropdown1Visible);
  }

  const handleNav = () =>{
    if(!clicked){
        document.querySelector("body").classList.add("mobile-nav-active");
      }
      else{
        document.querySelector("body").classList.remove("mobile-nav-active");
      }
    setClicked(!clicked);
  }


  return (
    <>
    <header className='header_area'>
    {/* <div className='container-fluid header-top p-2' style={{backgroundColor:'#aaa'}}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>+91 9484037539</div>
            </div>
        </div>
    </div> */}
    <div id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'nav-dark' : 'nav-light'}`}>
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="/" className="logo d-flex align-items-center">
        
        <img src={ Logo } alt="tecroost" className='logo' />
      </Link>
      <div className="" style={{zIndex:'9999'}} onClick={() => handleNav()}>
      <i className={ clicked ? "mobile-nav-toggle mobile-nav-show bi bi-x" : "mobile-nav-toggle mobile-nav-show bi bi-list"}></i>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li onClick={() => handleNav()}><Link to="/" className="active">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li className="dropdown" onClick={() => toggleMainDropdown()}><Link to="" id="down" className={dropdown1Visible ? 'active' : 'deactive'}><span>SERVICES</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul id="inner-down" className={dropdown1Visible ? 'dropdown-active' : 'dropdown-deactive'}>
              
              
            
                    
                        {/* {dropdownData.map((dropdown, index) => (
                          
                            <li className="dropdown myList" onClick={(e) => toggleDropdown(e, index)}><Link to="#" className={activeDropdown === index? 'active' : 'hidden'}><span>{ dropdown.name }</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul className={activeDropdown === index? 'dropdown-active' : 'hidden'}>
                                    <SubServiceMenu props = {dropdown.id} />
                                </ul>
                            </li>
                        ))} */}
                    
             
              
            </ul>
          </li>


          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="" className="get-a-quote" href="get-a-quote.html">Get a Quote</Link></li>
        </ul>
      </nav>

    </div>
    </div>
  </header>

    </>
  );
};

export default Navbar;

