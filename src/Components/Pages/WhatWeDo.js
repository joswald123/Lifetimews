import React from 'react'
import ServiceCard from '../Global/ServieCard'

// Asset images
import imgFinancial from '../Global/images/comprehensive_financial_planning.png'
import imgRetirement from '../Global/images/retirement_planning.png'
import imgCash from '../Global/images/cash_management.png'
import imgInvestment from '../Global/images/investment_management.png'
import imgEstate from '../Global/images/estate_planning.png'
import imgBusiness from '../Global/images/business_owners.png'

// component
import FinancialPlanning from '../Global/Services/FinancialPlanning'
import RetirementPlanning from '../Global/Services/RetirementPlanning'
import CashManagement from '../Global/Services/CashManagement'
import InvestmentManagement from '../Global/Services/InvestmentManagement'
import EstatePlanning from '../Global/Services/EstatePlanning'
import Business from '../Global/Services/BusinessOwners'

export default function WhatWeDo() {
    
    const services = [
        { id: 1, title: 'COMPREHENSIVE FINANCIAL PLANNING', img: imgFinancial, content: <FinancialPlanning /> },
        { id: 2, title: 'PLANNING FOR RETIREMENT?', img: imgRetirement, content: <RetirementPlanning /> },
        { id: 3, title: 'CASH, DEBT AND RISK MANAGEMENT', img: imgCash, content: <CashManagement /> },
        { id: 4, title: 'ASSET AND INVESTMENTS MANAGEMENT', img: imgInvestment, content: <InvestmentManagement /> },
        { id: 5, title: 'ESTATE PLANNING', img: imgEstate, content: <EstatePlanning /> },
        { id: 6, title: 'BUSINESS OWNERS', img: imgBusiness, content: <Business /> },
    ];

    return (
        <div>

            {/* What we do  */}
            {services.map(({ id, title, img, content }) => (
                <ServiceCard
                    key={id}
                    title={title}
                    img={img}
                    content={content}
                />
            ))}

        </div>
    )
}