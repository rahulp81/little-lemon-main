import React from 'react'

export default function Footer() {
  return (
   <footer>
    <img className='footer-logo' src='' alt=''/>
    <div className='siteMap'>
        <span className='footer-title'>Span Map</span>
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Menu</a></li>
            <li><a href=''>Reservations</a></li>
            <li><a href=''>Order Online</a></li>
            <li><a href=''>Login</a></li>
        </ul>
    </div>
    <div className='contact'>
        <span className='footer-title'>Contact</span>
        <div className='contactSection'>
             <span>Adress</span>
            <span>12129-22728
                 {'\n'}
                 <a href=''>Call us</a>
             </span>
             <span>customercare@littlelemon.com
                 {'\n'}
                 <a href=''>Write us an email!</a>
             </span>
             </div>
    </div>
            <div className='social-media'>
                <span className='footer-title' >SOCIAL MEDIA</span>
                <div className='socialMedia-icons'>
                    <img src='fb'/>
                    <img src='fb'/>
                    <img src='fb'/>
                </div>

            </div>

   </footer>
  )
}
