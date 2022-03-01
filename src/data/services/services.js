// Asset images
import imgFinancial from '../../images/comprehensive_financial_planning.png'
import imgRetirement from '../../images/retirement_planning.png'
import imgCash from '../../images/cash_management.png'
import imgInvestment from '../../images/investment_management.png'
import imgEstate from '../../images/estate_planning.png'
import imgBusiness from '../../images/business_planning.jpg'

// component
import FinancialPlanning from './FinancialPlanning'
import RetirementPlanning from './RetirementIncomePlanning'
import CashManagement from './CashManagement'
import InvestmentManagement from './InvestmentManagement'
import EstatePlanning from './EstatePlanning'
import Business from './BusinessOwners'

const servicesTitle = 'What We Do';

const services = [
    {
        id: 1,
        title: 'Comprehensive Financial Planning',
        img: imgFinancial,
        link: 'financialPlanning',
        content: <FinancialPlanning />
    },
    {
        id: 2,
        title: 'Retirement Income Planning',
        img: imgRetirement,
        link: 'retirementPlanning',
        content: <RetirementPlanning />
    },
    {
        id: 3,
        title: 'Cash, Debt And Risk Management',
        img: imgCash,
        link: 'cashManagement',
        content: <CashManagement />
    },
    {
        id: 4,
        title: 'Investments Management',
        img: imgInvestment,
        link: 'investmentManagement',
        content: <InvestmentManagement />
    },
    {
        id: 5,
        title: 'Estate Planning',
        img: imgEstate,
        link: 'estatePlanning',
        content: <EstatePlanning />
    },
    {
        id: 6,
        title: 'Financial Planning For Business Owners',     
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