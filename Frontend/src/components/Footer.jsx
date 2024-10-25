import React from "react";
import "./Footer.css";
import "./PrivacyPolicy";
import "./FAQ/FAQSection";
import "./FAQ/FAQItem";

const Footer = () => {
  const handleClick = (serviceName) => {
    console.log(`${serviceName} clicked`);
    // Add any additional logic here, such as navigation or tracking
  };
  return (
    <>
      <div id='footer'>
        <div className='Footer_info'>
          <p1>TEN-HR-Consulting</p1>
          <br />
          <br />
          <p2>
            {" "}
            Our expertise lies on assisting small to medium-sized enterprises in
            adhering to Indian labour rules and regulations while optimising
            their human resources processes.
          </p2>
          <br />
          <br />
          <p3>New Delhi , India</p3>
        </div>

        <div id='footer_link'>
          <div className='footer_links1'>
            <ul>
              <l1>Company</l1>
              <br />
              <br />
              <li>
                <a href='/FAQ'>Frequently Asked Questions</a>
              </li>
              <li>
                <a href='/aboutUs'>About TEN HR Consulting</a>
              </li>
              <li>
                <a href='#'>Terms of Service</a>
              </li>
              <li>
                <a href='/privacy-policy'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className='footer_links2'>
            <ul>
              <li>Services</li>
              <br />
              <br />
              <li>
                <a
  href="/services/peo&eor"
  onClick={(event) => {
    event.preventDefault();
    handleClick("PEO & EoR");
    window.location.href = "/services/peo&eor"; // Manually set the location if needed
  }}
>
                  PEO & EoR
                </a>
              </li>
              <li>
                <a
                  href='/services/recruitment'
                  onClick={() => handleClick("Recruitment")}
                >
                  Recruitment
                </a>
              </li>
              <li>
                <a
                  href='/services/hrConsulting'
                  onClick={() => handleClick("HR Consulting")}
                >
                  HR Consulting
                </a>
              </li>
              <li>
                <a
                  href='/services/payrollProcessing'
                  onClick={() => handleClick("Payroll Processing")}
                >
                  Payroll Processing
                </a>
              </li>
              <li>
                <a
                  href='/services/managedServices'
                  onClick={() => handleClick("Managed Services")}
                >
                  Managed Services
                </a>
              </li>
            </ul>
          </div>

          <div className='footer_links3'>
            <ul>
              <l3>Contact</l3>
              <br />
              <br />
              <li>
                <a
                  href='mailto:
hr@entrepreneurshipnetwork.net'
                >
                  hr@entrepreneurshipnetwork.net
                </a>
              </li>
              {/* <li>+(62) 21 570-0415</li> */}
              <button>
                <a href='https://www.linkedin.com/company/ten-hr-consulting/'>
                  {" "}
                  Follow Our Linkedin
                </a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
