function Footer() {
  const handlePrintCV = () => {
    window.print();
  };

  const handleDownloadCV = () => {
    // In a real application, this would trigger a PDF download
    alert("CV download would be triggered here");
  };

  return (
    <footer className="footer1">
      <div className="footer-actions1">
        <button className="cv-button1 print-btn1" onClick={handlePrintCV}>
          Print CV
        </button>
        <button className="cv-button1 download-btn1" onClick={handleDownloadCV}>
          Download CV
        </button>
      </div>
    </footer>
  );
}

export default Footer;
