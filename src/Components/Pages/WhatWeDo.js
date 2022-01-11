import React from "react";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Sticky,
    Fade,
    MoveOut,
} from "react-scroll-motion";
import { Card, Col, Container, Row } from "react-bootstrap";
import ServiceCard from '../Global/ServieCard'

// Asset images
import imgFinancial from "../Global/images/comprehensive_financial_planning.png";
import imgRetirement from "../Global/images/retirement_planning.png";
import imgCash from "../Global/images/cash_management.png";
import imgInvestment from "../Global/images/investment_management.png";
import imgEstate from "../Global/images/estate_planning.png";
import imgBusiness from "../Global/images/business_owners.png";

// component
import FinancialPlanning from "../Global/Services/FinancialPlanning";
import RetirementIncomePlanning from "../Global/Services/RetirementIncomePlanning";
import CashManagement from "../Global/Services/CashManagement";
import InvestmentManagement from "../Global/Services/InvestmentManagement";
import EstatePlanning from "../Global/Services/EstatePlanning";
import Business from "../Global/Services/BusinessOwners";

//Styles
import "../Global/Services/services.css"

export default function WhatWeDo() {
    const services = [
    {
        id: "financialPlanning",
        title: "COMPREHENSIVE FINANCIAL PLANNING",
        img: imgFinancial,
        content: <FinancialPlanning />,
    },
    {
        id: "cashManagement",
        title: "CASH, DEBT AND RISK MANAGEMENT",
        img: imgCash,
        content: <CashManagement />,
    },
    {
        id: "investmentManagement",
        title: "ASSET AND INVESTMENTS MANAGEMENT",
        img: imgInvestment,
        content: <InvestmentManagement />,
    },
    {
        id: "estatePlanning",
        title: "ESTATE PLANNING",
        img: imgEstate,
        content: <EstatePlanning />,
    },
    {
        id: "BusinessOwner",
        title: "BUSINESS OWNERS",
        img: imgBusiness,
        content: <Business />,
    },
    {
        id: "RetirementIncomePlanning",
        title: "RETIREMENT INCOME PLANNING",
        img: imgBusiness,
        content: <RetirementIncomePlanning />,
    },
    ];

    // return (
    //     <ScrollContainer>
    //         <Container>
    //             <Row>
    //                 <Col>
    //                     <ScrollPage page={0}>
    //                         <div className="section-1">
    //                             <h2>Financial Planning</h2>
    //                             <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
    //                                 <FinancialPlanning />
    //                             </Animator>
    //                         </div>
    //                     </ScrollPage>
    //                 </Col>
    //             </Row>
    //         </Container>
    //         <Container>
    //             <Row>
    //                 <Col>
    //                     <ScrollPage page={1}>
    //                         <div className="section-2">
    //                         <h2>Retirement Planning</h2>
    //                             <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
    //                                 <RetirementPlanning />
    //                             </Animator>
    //                         </div>
                            
    //                     </ScrollPage>
    //                 </Col>
    //             </Row>
    //         </Container>

    //     </ScrollContainer>
    // );

    return(
    <div>

    {/* What we do  */}
    {services.map(({ id, title, img, content }) => (
        <ScrollContainer>
            <ScrollPage Page={id}>
            <div className="section-2">
            <ServiceCard
            key={id}
            title={title}
            // img={img}
            content={content}
        />
                
            </div>

            </ScrollPage>
        </ScrollContainer>
        
    ))}

    </div>

   )
}
