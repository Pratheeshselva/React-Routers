import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../Components.jsx/PageList/images/guvi-logo.svg'






function TopBar() {
    return <>
        {/* <!-- Topbar --> */}
        
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* <!-- Topbar Search --> */}
            <div style={{display: 'flex',
                    justifyContent: 'space-around',width:'100%'}}>
            <div style={{display:'flex'}}>
            <img src={logo} /> &nbsp;&nbsp;
            <div style={{borderLeft:'solid 1px black', paddingLeft:'7px', fontSize:'20px' , fontFamily:'sans-serif',  color: 'black', paddingTop:'5px'

            }}>
                Blog
            </div>
            <form
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="What do you want to read?"
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </form>
            </div>
            <div style={{ fontSize:'17px',  color: 'black', paddingTop:'5px'}}>
                Log out
            </div>
            </div>

        </nav>

    </>
}

export default TopBar