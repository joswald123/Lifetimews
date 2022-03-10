import React from "react";
import { Container, Row, Col } from "react-bootstrap";


// Assets
import whiteLogo from "../../images/logoWhite.png"
import "./Footer.css";

export default function Footer() {

  const today = new Date();
  return (
    <footer >
      <Container className="container">
        <Row>
          <Col md={6} className="contactTextCol" >

            {/* <h2 className="title_h4">GET IN TOUCH</h2> */}

            <div className="content">
              <a href="tel:925-447-0904" >
                <i className="fas fa-phone"></i>
                925-447-0904
              </a>
              <a href="mailto:germaine.cordes@lifetimecapital.com" className="email"
              > <i className="fas fa-at"> </i>
                Germaine.Cordes@lifetimecapital.com
              </a>
              <a href="https://maps.google.com/maps?ll=37.695117,-121.900404&z=13&t=m&hl=en&gl=US&mapclient=embed&q=4695%20Chabot%20Dr%20Suite%20200%20Pleasanton%2C%20CA%2094588%20USA"
                target="_blank">
                <i className="fas fa-map-marker-alt"> </i>
                4695 Chabot Drive, Suite 200 Pleasanton, CA 94588
              </a>
              {/* <a href="www.google.com" > <i className="fas fa-linkedin-in"></i> LifeTime Capital </a> */}
            </div>
          </Col>

          <Col md={6} >
            <div className="whiteLogo">
              <img src={whiteLogo} alt="" />
            </div>
          </Col>

        </Row>

        <Row>
          <Col className="mt-2">
            <div className="disclosure">
              <p className="disclosureText">
                Germaine C. Cordes, ChFC® is a Registered Representative offering
                securities through Securities America, Inc. Member <a href='https://www.finra.org/#/' target="_blank">FINRA /</a>
                <a href='https://www.SIPC.org' target="_blank"> SIPC </a>and
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
            </div>

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


