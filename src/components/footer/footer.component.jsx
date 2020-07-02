import React from 'react';
import './footer.styles.scss'


const Footer = () => (
    <div className='main-footer'>
        <div className='container text-light' >
            <div className='row'>
            {/* Column 1 */}
                <div className='col' >
                <h4> About us: </h4>
                    <ul className='list-unstyled'>
                        <li>Devonauts USA Inc.</li>
                        <li>Provo, Utah 84606.</li>
                        <li>info@devonauts.com</li>
                        <li></li>
                    </ul>
                </div>
            {/* Column 2 */}
            <div className='col'>
            <h4> Services: </h4>
                <ul className='list-unstyled'>
                    <li><a href='/'> Web Development</a></li>
                    <li><a href='/'>App Development</a></li>
                    <li><a href='/'>Support Packages</a></li>
                    <li><a href='/'>More</a></li>
                </ul>
            </div>
            {/* Column 3 */}
            <div className='col'>
            <h4> Information </h4>
                <ul className='list-unstyled'>
                    <li> <a href='/'>Terms and Conditions</a></li>
                    <li><a href='/'>Frequently Asked Questions</a></li>
                    <li><a href='/'>Become a Devonaut</a></li>
                    <li><a href='/'>Work with us</a></li>
                </ul>
            </div>
            {/* Column 4 */}
            <div className='col'>
            <h4> Devonauts USA </h4>
                <ul className='list-unstyled'>
                    <li> <a href='/'>info@devonauts.com</a></li>
                    <li><a href='/'>Provo, Utah 84606.</a></li>
                    <li><a href='/'>otra</a></li>
                    <li><a href='/'>noche othra</a></li>
                </ul>
            </div>

            </div>
            <div className='row'>
                <div className='col -sm'>
                <p className='title'>&copy;{new Date().getFullYear()} Devonauts - All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;