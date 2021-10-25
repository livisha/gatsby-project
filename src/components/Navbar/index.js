import React,{useEffect,useState} from 'react'
import {FaBars , FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Nav,NavbarContainer,NavLogo,NavIcon,NavMenu,NavItem,NavLink,MobileIcon} from './NavbarElements';

const Navbar=()=>{
    
     // Navbar is a function sub-component using the useState hook the values of click, 
    // scroll variables the initialized and set functions are used to update the values.
    const [click,setClick] = useState(false)
    const [scroll,setScroll] = useState(false)

    // handleClick arrow function is used to revert the boolean value of click variable whenever it is called.
    // changeNav arrow function work on if-else conditional basis to set the scroll variable. whenever the scrolling exceeds 
    // the set limit the bachground shade of navBar is changed.
    const handleClick=()=>setClick(!click)
    const changeNav=()=>{
        if(window.scrollY  >= 80){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    }

    // useEffect is another hook used for call different section different times,
    // fetching data and implementing changes in JSX components.
    // The scrolling feature changes according to the size of the window.
    useEffect(() => {
    changeNav()
    window.addEventListener("scroll",changeNav)
    }, [])

    return (
        <> 
             {/* IconContext handles the different icons provided by the react and help in using it to add some style to ours. */}
            <IconContext.Provider value={{color:"red"}}>
                <Nav active={scroll} click={click}>
                    {/* Different nav icons are used through IconContext for implementing different values like items, logo, etc. */}
                   <NavbarContainer>
                       <NavLogo to="/">
                       <NavIcon />
                       YOUROWN
                       </NavLogo>
                        {/* When the width is reduced than the moile icon is used to reduce the navbar in button form. */}
                       <MobileIcon onClick={handleClick}>
                           {click ? <FaTimes /> : <FaBars />}
                       </MobileIcon>
                       {/* NavMenu is used to depict the menu of different items using NavItem with working by using handleClick function. */}
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
