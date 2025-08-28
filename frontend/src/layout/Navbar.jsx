import {NavLink} from 'react-router-dom';

const Navbar=()=>{
    return (
        <div className="navbar">
            <div className="navbar-items" style={{textAlign:"center",
                    margin:"auto",
                    width:"50%",
                    padding:"20px"}}>
                <NavLink to='/' style={({isActive})=>({
                    backgroundColor: isActive ? "grey":"white",
                    color:"black",
                    padding: "10px",
                    borderRadius:"10%",
                    textDecoration: "none"
                })}>Home</NavLink>
                <NavLink to='/boards' style={({isActive})=>({
                    backgroundColor: isActive ? "grey":"white",
                    color:"black",
                    padding: "10px",
                    borderRadius:"10%",
                    textDecoration: "none"
                })}>Boards</NavLink>
            </div>
        </div>
    );
};

export default Navbar;