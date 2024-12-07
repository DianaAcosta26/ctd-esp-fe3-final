const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-powered">
          <p>Powered by</p>
          <img
            src="/public/images/DH.png"
            alt="Logo DH"
            className="footer-logo"
          />
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-tiktok.png" alt="TikTok" className="social-icon" />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-whatsapp.png" alt="WhatsApp" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
