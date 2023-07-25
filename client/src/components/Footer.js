import React from 'react'

const Footer = () => {
  return <footer className="footer">
            <div className="social-btn">
                <a href="https://www.facebook.com/" target="_blank" ><i className="	fab fa-facebook"></i></a>
                <a href="https://www.instagram.com//" target="_blank" ><i className="	fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in//" target="_blank"><i className="	fab fa-linkedin"></i></a>
                <a href="https://github.com/" target="_blank" ><i className="	fab fa-github"></i></a>
            </div>
                <div className="quick-bar">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            <p>Copyright &copy; 2022 abdelfatah Errazy</p>  
        </footer>

}

export default Footer