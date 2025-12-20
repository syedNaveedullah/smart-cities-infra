import React from 'react';
import { Cloud } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const MobilityPage = () => (
    <ServiceDetailTemplate
        title="Mobility Services"
        description="Innovative mobility solutions for modern businesses"
        icon={Cloud}
        color="blue"
        backLink="/services/software"
        features={[
            'Mobile device management',
            'Application development and deployment',
            'Real-time data access',
            'Seamless integration with existing systems',
            'Enhanced security for mobile access',
            'User-friendly interfaces'
        ]}
        benefits={[
            'Increased productivity on the go',
            'Improved customer engagement',
            'Streamlined operations',
            'Flexibility in work environments',
            'Access to real-time insights',
            'Cost-effective mobility solutions'
        ]}
        useCases={[
            { title: 'Field Service Teams', description: 'Access to information on the go' },
            { title: 'Sales Representatives', description: 'Real-time updates and communication' },
            { title: 'Remote Workers', description: 'Seamless access to company resources' },
            { title: 'Project Managers', description: 'Manage projects from anywhere' }
        ]}
    />
);

export default MobilityPage;