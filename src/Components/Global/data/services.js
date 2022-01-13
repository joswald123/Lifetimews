// Asset images
import imgFinancial from '../images/comprehensive_financial_planning.png'
import imgRetirement from '../images/retirement_planning.png'
import imgCash from '../images/cash_management.png'
import imgInvestment from '../images/investment_management.png'
import imgEstate from '../images/estate_planning.png'
import imgBusiness from '../images/business_owners.png'

// component
import FinancialPlanning from '../Services/FinancialPlanning'
import RetirementPlanning from '../Services/RetirementIncomePlanning'
import CashManagement from '../Services/CashManagement'
import InvestmentManagement from '../Services/InvestmentManagement'
import EstatePlanning from '../Services/EstatePlanning'
import Business from '../Services/BusinessOwners'

const servicesTitle = 'What We Do';

const services = [
    {
        id: 1,
        title: 'COMPREHENSIVE FINANCIAL PLANNING',
        img: imgFinancial,
        link: 'financialPlanning',
        content: <FinancialPlanning />
    },
    {
        id: 2,
        title: 'PLANNING FOR RETIREMENT?',
        img: imgRetirement,
        link: 'retirementPlanning',
        content: <RetirementPlanning />
    },
    {
        id: 3,
        title: 'CASH, DEBT AND RISK MANAGEMENT',
        img: imgCash,
        link: 'cashManagement',
        content: <CashManagement />
    },
    {
        id: 4,
        title: 'ASSET AND INVESTMENTS MANAGEMENT',
        img: imgInvestment,
        link: 'investmentManagement',
        content: <InvestmentManagement />
    },
    {
        id: 5,
        title: 'ESTATE PLANNING',
        img: imgEstate,
        link: 'estatePlanning',
        content: <EstatePlanning />
    },
    {
        id: 6,
        title: 'BUSINESS OWNERS',
        img: imgBusiness,
        link: 'businessOwner',
        content: <Business />
    },
];

export function getServicesTitle() {
    return servicesTitle;
}

export function getAllServices() {
    return services;
}

export function getLinkService(link) {
    return services.find((service) => service.link === link);
}

export function getService(id) {
    return services.find((service) => service.id === id);
}