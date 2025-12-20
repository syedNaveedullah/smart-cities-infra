import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const DigitalSignagePage = () => (
    <ServiceDetailTemplate
        title="Digital Signage"
        description="Dynamic digital signage systems for information and engagement"
        icon={AlertCircle}
        color="blue"
        backLink="/services/lighting"
        features={[
            'High-resolution displays',
            'Remote content management',
            'Real-time updates',
            'Scheduling capabilities',
            'Multi-zone control',
            'Energy-efficient LED technology'
        ]}
        benefits={[
            'Enhance customer engagement',
            'Dynamic content delivery',
            'Reduced printing costs',
            'Improved information dissemination',
            'Brand consistency',
            'Easy maintenance and updates'
        ]}
        useCases={[
            { title: 'Retail', description: 'Product promotions and advertisements' },
            { title: 'Airports', description: 'Flight information and wayfinding' },
            { title: 'Hospitals', description: 'Wayfinding and patient communication' },
            { title: 'Corporate', description: 'Internal communications and announcements' }
        ]}
    />
);

export default DigitalSignagePage;
