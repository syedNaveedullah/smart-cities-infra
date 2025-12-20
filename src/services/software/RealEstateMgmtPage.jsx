import React from 'react';
import { Home } from 'lucide-react'; // Assuming you want to use a home icon for real estate
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const RealEstateMgmtPage = () => (
    <ServiceDetailTemplate
        title="Real Estate Management"
        description="Comprehensive solutions for managing real estate properties"
        icon={Home}
        color="blue" // You can choose a different color if needed
        backLink="/services/software"
        features={[
            'Property listing and management',
            'Tenant and lease tracking',
            'Maintenance request management',
            'Financial reporting and analytics',
            'Automated rent collection',
            'Market analysis tools'
        ]}
        benefits={[
            'Streamlined property management processes',
            'Increased tenant satisfaction',
            'Improved financial performance',
            'Data-driven decision making',
            'Reduced operational costs',
            'Enhanced compliance with regulations'
        ]}
        useCases={[
            { title: 'Property Managers', description: 'Efficiently manage multiple properties' },
            { title: 'Real Estate Investors', description: 'Maximize ROI on investments' },
            { title: 'Landlords', description: 'Simplify tenant management' },
            { title: 'Real Estate Agencies', description: 'Enhance client services and listings' }
        ]}
    />
);

export default RealEstateMgmtPage;