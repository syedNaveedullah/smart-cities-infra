import React from 'react';
import { Cloud } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const BigDataPage = () => (
    <ServiceDetailTemplate
        title="Big Data Services"
        description="Comprehensive big data solutions for analytics and insights"
        icon={Cloud}
        color="purple"
        backLink="/services/software"
        features={[
            'Real-time data processing',
            'Data warehousing solutions',
            'Advanced analytics and reporting',
            'Machine learning integration',
            'Data governance and compliance',
            'Scalable storage solutions'
        ]}
        benefits={[
            'Enhanced decision-making capabilities',
            'Improved operational efficiency',
            'Cost-effective data management',
            'Increased data accessibility',
            'Actionable insights from data',
            'Future-proofing with scalable solutions'
        ]}
        useCases={[
            { title: 'Retail', description: 'Customer behavior analysis' },
            { title: 'Finance', description: 'Fraud detection and risk management' },
            { title: 'Healthcare', description: 'Patient data analytics' },
            { title: 'Manufacturing', description: 'Predictive maintenance' }
        ]}
    />
);

export default BigDataPage;