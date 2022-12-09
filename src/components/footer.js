import React from 'react'
import '../styles/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a target="_blank" href="https://www.linkedin.com/in/silpa-priyadarshini-7a98b9229/"><LinkedInIcon/></a>
          <a target="_blank" href="https://github.com/priyadarshini-silpa"><GitHubIcon/></a>
        </div>
    </div>
  )
}

export default Footer;