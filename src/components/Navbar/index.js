import React,{useEffect,useState} from 'react'
import {FaBars , FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Nav,NavbarContainer,NavLogo,NavIcon,NavMenu,NavItem,NavLink,MobileIcon} from './NavbarElements';

const Navbar=()=>{

    const [click,setClick] = useState(false)
    const [scroll,setScroll] = useState(false)

    const handleClick=()=>setClick(!click)
    const changeNav=()=>{
        if(window.scrollY  >= 80){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    }

    useEffect(() => {
    changeNav()
    window.addEventListener("scroll",changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{color:"red"}}>
                <Nav active={scroll} click={click}>
                   <NavbarContainer>
                       <NavLogo to="/">
                       <NavIcon />
                       YOUROWN
                       </NavLogo>
                       <MobileIcon onClick={handleClick}>
                           {click ? <FaTimes /> : <FaBars />}
                       </MobileIcon>
                       <NavMenu onClick={handleClick} click={click}>
                           <NavItem>
                               <NavLink to="/">Home</NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink to="/images">Images</NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink to="/destination">Pricing</NavLink>
                           </NavItem>
                       </NavMenu>
                   </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
