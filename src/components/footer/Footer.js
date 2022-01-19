import React from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import { getAllServices, getServicesTitle } from "../../data/services/services";


// Assets
import "./Footer.css";

export default function Footer() {

  const servicesTitle = getServicesTitle();
  const services = getAllServices();

  const today = new Date();
  return (
    <footer >
      <Container className="container">
        <Row>
          <Col xs={6} className="servicesList" >
            <h4 className="text-uppercase font-weight-bold title">{servicesTitle}</h4>
            <ul className="list">
              {services.map((dat) => (
                <li className="nav-item" key={dat.id}>
                  <Link to={"/services/" + dat.link} key={dat.id}>{dat.title}</Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col xs={6} className="contactTextCol" >
            <h4 className="title">GET IN TOUCH</h4>
            <ul>
              <li className='contactText'><i className="fas fa-phone-alt"></i>
                Phone: 925-447-0904
              </li>
              <li className='contactText'><i className="fas fa-at"></i>
                germaine.cordes@lifetimecapital.com
              </li>
              <li className='contactText'><i className="fas fa-map-marker-alt"></i>
                4695 Chabot Drive, Suite 200 Pleasanton, CA 94588
              </li>
            </ul>
            
          </Col>
        </Row>

        <Row>
          <Col className="mt-4">
            <p className="disclosureText">
              Germaine C. Cordes, ChFC® is a Registered Representative offering
              securities through Securities America, Inc. Member <a href='https://www.finra.org/#/'>FINRA/SIPC</a> and
              an Investment Advisor Representative offering advisory services
              through Securities America Advisors, Inc. Lifetime Capital
              Financial Group and the Securities America companies are separate
              entities. CA Insurance License 0D56266.
            </p>
            <p className="disclosureText">
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

            <p className="bottom">
              <span className="line"></span>
              Copyright &copy; {today.getFullYear()} | Lifetime Capital
              Financial Goup | All Rights Reserved
            </p>

          </Col>
        </Row>
      </Container>
    </footer >
  );
}


