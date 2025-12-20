import React from 'react';
import { Cloud } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const ConnectivityPage = () => (
    <ServiceDetailTemplate
        title="Connectivity Services"
        description="Reliable connectivity solutions for your business"
        icon={Cloud}
        color="blue"
        backLink="/services/software"
        features={[
            'High-speed internet access',
            'Network security solutions',
            'VPN and remote access services',
            'Dedicated bandwidth options',
            '24/7 technical support',
            'Scalable connectivity plans'
        ]}
        benefits={[
            'Enhanced productivity with reliable connections',
            'Improved data security',
            'Flexible connectivity options',
            'Seamless remote work capabilities',
            'Cost-effective solutions',
            'Future-proof infrastructure'
        ]}
        useCases={[
            { title: 'Small Businesses', description: 'Affordable connectivity solutions' },
            { title: 'Remote Teams', description: 'Secure and reliable access' },
            { title: 'Growing Companies', description: 'Scalable connectivity as you grow' },
            { title: 'IT Departments', description: 'Robust network management tools' }
        ]}
    />
);

export default ConnectivityPage;