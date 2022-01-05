// import React from "react";
// import {
//     Box,
//     Container,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./Footer/FooterStyles";

// const Footer = () => {
//   return (
//     <Box>
//       <h1 style={{ color: "green",
//                    textAlign: "center",
//                    marginTop: "-50px" }}>
//         GeeksforGeeks: A Computer Science Portal for Geeks
//       </h1>
//       <Container>
//         <Row>
//           <Column>
//             <Heading>About Us</Heading>
//             <FooterLink href="#">Aim</FooterLink>
//             <FooterLink href="#">Vision</FooterLink>
//             <FooterLink href="#">Testimonials</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <FooterLink href="#">Writing</FooterLink>
//             <FooterLink href="#">Internships</FooterLink>
//             <FooterLink href="#">Coding</FooterLink>
//             <FooterLink href="#">Teaching</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="#">Uttar Pradesh</FooterLink>
//             <FooterLink href="#">Ahemdabad</FooterLink>
//             <FooterLink href="#">Indore</FooterLink>
//             <FooterLink href="#">Mumbai</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>
//                   Facebook
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>
//                   Instagram
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-twitter">
//                 <span style={{ marginLeft: "10px" }}>
//                   Twitter
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-youtube">
//                 <span style={{ marginLeft: "10px" }}>
//                   Youtube
//                 </span>
//               </i>
//             </FooterLink>
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;

import React from "react";
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col } from "react-bootstrap";

// Assets
import "./css/Footer.css";

function Footer() {
  const today = new Date();
  return (
    <footer className="bgPurple">
      <Container>
        <Row>
          <Col>
            <h3>Services</h3>
            <ul>
              <li><Link to="/financialPlanning">Comprehensive Financial Planning</Link></li>
              <li><Link to="/cashManagement">Cash, Debt and Risk Management</Link></li>
              <li><Link to="/investmentManagement">Investment Management</Link></li>
              <li><Link to="/retirementPlanning">Planning for Retirement</Link></li>
              <li><Link to="/estatePlanning">Estate Planning</Link></li>
              <li><Link to="/businessOwner">Business Owners</Link></li>
            </ul>
          </Col>
          <Col>
            <h3>Contact Us!</h3>
            <p>4695 Chabot Drive, Suite 200 Pleasanton, CA 94588</p>
            <p>Phone: 925-447-0904</p>
            <p>germaine.cordes@lifetimecapital.com</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Germaine C. Cordes, ChFC® is a Registered Representative offering
              securities through Securities America, Inc. Member FINRA/SIPC and
              an Investment Advisor Representative offering advisory services
              through Securities America Advisors, Inc. Lifetime Capital
              Financial Group and the Securities America companies are separate
              entities. CA Insurance License 0D56266.
            </p>
            <p>
              This site is published for residents of the United States and is
              for informational purposes only and does not constitute an offer
              to sell or a solicitation of an offer to buy any security or
              product that may be referenced herein. Persons mentioned on this
              website may only offer services and transact business and/or
              respond to inquiries in states or jurisdictions in which they have
              been properly registered or are exempt from registration. Not all
              products and services referenced on this site are available in
              every state, jurisdiction or from every person listed.
            </p>

            <p>
              Copyright &copy; {today.getFullYear()} | Lifetime Capital
              Financial Goup | All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
