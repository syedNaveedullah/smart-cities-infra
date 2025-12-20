import React from 'react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';
import { Factory } from 'lucide-react';

const IndustrialPage = () => (
    <ServiceDetailTemplate
        title="Industrial IoT & Automation"
        description="Smart industrial solutions with IoT sensors and automated systems"
        icon={Factory}
        color="orange"
        backLink="/services/software"
        features={[
            'Real-time equipment monitoring',
            'Predictive maintenance analytics',
            'Industrial data integration',
            'Automated workflow management',
            'Production line optimization',
            'Quality control systems'
        ]}
        benefits={[
            'Reduce downtime by 35%',
            'Increase production efficiency',
            'Lower maintenance costs',
            'Improved product quality',
            'Real-time operational visibility',
            'Data-driven decision making'
        ]}
        useCases={[
            { title: 'Manufacturing Plants', description: 'Optimize production processes' },
            { title: 'Logistics Centers', description: 'Automate warehouse operations' },
            { title: 'Energy Utilities', description: 'Smart grid monitoring and control' },
            { title: 'Supply Chain', description: 'End-to-end visibility and tracking' }
        ]}
    />
);

export default IndustrialPage;