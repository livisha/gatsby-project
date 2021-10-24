import React from 'react'
import  {FaYoutube , FaInstagram, FaFacebook,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import { FooterContainer, SocialIcon, 
    SocialIconLink, SocialIcons, SocialLogo,
     SocialMedia, SocialMediaWrap, 
     WebsiteRights} from './FooterElements'

const Footer =()=>{
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                    <SocialIcon />
                        YOUROWN
                    </SocialLogo>
                    <WebsiteRights>YOUROWN © {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.instagram.com/livisha_0211?utm_medium=copy_link" target="_blank" 
                        arial-label="Instagram">
                        <FaInstagram />
                        </SocialIconLink>
                        
                        <SocialIconLink href="https://www.youtube.com/channel/UCW_LZV-zbqa7xqM8gJR7b5g" target="_blank" 
                        arial-label="Youtube" rel="noopener noreferrer">
                        <FaYoutube />
                        </SocialIconLink>
                    

                    
                        <SocialIconLink href="/" target="_blank" 
                        arial-label="Twitter">
                        <FaTwitter />
                        </SocialIconLink>
                   
                       
                   
                        <SocialIconLink href="//www.linkedin.com/in/livisha-jain-2bb4a218a/" target="_blank" 
                        arial-label="LinkedIn">
                        <FaLinkedinIn />
                        </SocialIconLink>
                    
                    
                   
                        <SocialIconLink href="/" target="_blank" 
                        arial-label="Facebook">
                        <FaFacebook />
                        </SocialIconLink>
                    </SocialIcons> 
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;