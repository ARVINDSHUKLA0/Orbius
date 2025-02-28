import React, { useEffect, useState } from 'react';
import '../ComponentStyle/Navbar.css';
import Logo from '/assets/img/logo.png';
import { Link } from 'react-router-dom';
import AsideImges from '/assets/img/asideLgNav.jpg';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [asidebar, setAsideBar] = useState(false);
  const [menu, setMenu] = useState(false);
  const location = useLocation()
  const Menuitemfunc = () => {
    setMenu(!menu);
  };

  const asidebarfun = () => {
    setAsideBar(!asidebar);
  };
  const showBorderPages = ["/", "/about"];
  const hasBorder = showBorderPages.includes(location.pathname);
 
  


  return (
    <>
      <nav className={``}>
        <section className='container-fluid'>
          <div className={`d-flex justify-content-between align-items-center  py-lg-4 py-md-4 py-sm-3 py-3 ${hasBorder ? 'custom-bottom-border' : ''}`}>
            <div>
              <Link to="/">
                <img src={Logo} width={120} alt="Logo" />
              </Link>
            </div>
            {menu && <div onClick={Menuitemfunc} className='item-warrper-remove'></div>}

            <div className={`menuitem ${menu ? 'open' : ''}`}>
              <div className='d-lg-none d-block'>
                <div className='text-end pe-1 pt-2'>
                  <button onClick={Menuitemfunc} className='border-0 bg-white'>
                    <i className="fa-solid fa-xmark text-end fs-3 pt-3"></i>
                  </button>
                </div>
                <div className='ps-3 py-3'>
                  <img src={Logo} width={100} alt="" />
                </div>
              </div>
              <ul className="d-lg-flex m-0 p-0 gap-5">
                <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                  <Link className='text-decoration-none py-lg-5' to="/">Home</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                  <Link className='text-decoration-none py-lg-5' to="/about">About</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                  <Link className='text-decoration-none py-lg-5' to="/portfolio">Portfolio</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                  <Link className='text-decoration-none py-lg-5' to="/blog">Blog</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                  <Link className='text-decoration-none' to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className='d-lg-none d-block'>
              <button onClick={Menuitemfunc} className='bg-dark text-white border-0 custom-round-btn'>
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
            </div>
            {asidebar && <div onClick={asidebarfun} className='item-warrper-remove'></div>}

            <aside className='d-none d-lg-block'>
              <button onClick={asidebarfun} className='bg-dark text-white border-0 custom-round-btn'>
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
              <div className={`asidebarOpen ${asidebar ? 'open' : ''}`}>
                <div className='text-end'>
                  <button onClick={asidebarfun} className='bg-white border-0 pe-4 pt-4'>
                    <i className="fa-solid fa-xmark fs-3"></i>
                  </button>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='pt-5'>
                    <img className='mb-3' src={Logo} width={110} alt="" />
                    <p className='pb-3'>Curabitur sagittis lectus quis purus <br /> interua vulputate justo hererit asellus <br /> ullcorper sem vel tellus ultrices ac <br /> suscipit orci</p>
                    <ul className='d-flex gap-2 p-0 pb-4 '>
                      <li className='list-style-none'>
                        <Link className='text-decoration-none'>fb</Link>
                      </li>
                      <li className='list-style-none '>
                        <Link className='text-decoration-none'>tw</Link>
                      </li>
                      <li className='list-style-none'>
                        <Link className='text-decoration-none'>In</Link>
                      </li>
                      <li className='list-style-none'>
                        <Link className='text-decoration-none'>pi</Link>
                      </li>
                    </ul>
                    <img className='mb-4' src={AsideImges} alt="" />
                    <div>
                      <h4 className='py-2'>north america</h4>
                      <p>
                        123 maple avenue, houston, tx 56034 <br />
                        +1 (888) 765 4326 / 765 4327 <br />
                        info@domainname.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;