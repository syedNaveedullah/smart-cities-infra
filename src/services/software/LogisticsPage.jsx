import React from 'react';
import { Cloud } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const LogisticsPage = () => (
    <ServiceDetailTemplate
        title="Logistics & Supply Chain Management"
        description="Optimize your supply chain with intelligent logistics solutions"
        icon={Cloud}
        color="blue"
        backLink="/services/software"
        features={[
            'Real-time tracking and monitoring',
            'Route optimization',
            'Inventory management',
            'Fleet management',
            'Supplier integration',
            'Automated reporting'
        ]}
        benefits={[
            'Reduced delivery times',
            'Lower transportation costs',
            'Improved inventory accuracy',
            'Enhanced visibility',
            'Better customer satisfaction',
            'Data-driven decision making'
        ]}
        useCases={[
            { title: 'E-commerce', description: 'Efficient order fulfillment and delivery' },
            { title: 'Retailers', description: 'Seamless inventory and distribution' },
            { title: 'Manufacturers', description: 'Supply chain optimization' },
            { title: 'Third-party Logistics', description: 'Multi-client fleet management' }
        ]}
    />
);

export default LogisticsPage;
