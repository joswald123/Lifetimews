import React from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";

// Assets
import "./css/Footer.css";

function Footer() {
  const today = new Date();
  return (
    <footer className="bgPurple">
      <Container>
        <Row>
          <Col>
            <h4 className="text-uppercase font-weight-bold">What we do!</h4>
            <ul className="list">
              <li>
                <Link to="/financialPlanning">Comprehensive Financial Planning</Link>
              </li>
              <li><Link to="/cashManagement">Cash, Debt and Risk Management</Link></li>
              <li><Link to="/investmentManagement">Investment Management</Link></li>
              <li><Link to="/retirementPlanning">Planning for Retirement</Link></li>
              <li><Link to="/estatePlanning">Estate Planning</Link></li>
              <li><Link to="/businessOwner">Business Owners</Link></li>
            </ul>
          </Col>
          <Col>
            <h4>GET IN TOUCH</h4>
            <p className='contactText'><i className="fas fa-phone-alt"></i>Phone: 925-447-0904</p>
            <p className='contactText'><i className="fas fa-at"></i>germaine.cordes@lifetimecapital.com</p>
            <p className='contactText'><i className="fas fa-map-marker-alt"></i>4695 Chabot Drive, Suite 200 Pleasanton, CA 94588</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Germaine C. Cordes, ChFC® is a Registered Representative offering
              securities through Securities America, Inc. Member <a href='https://www.finra.org/#/'>FINRA/SIPC</a> and
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

            <p className="text-center">
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
