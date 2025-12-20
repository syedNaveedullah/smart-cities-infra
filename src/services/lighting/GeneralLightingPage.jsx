import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const GeneralLightingPage = () => (
    <ServiceDetailTemplate
        title="General Lighting"
        description="Comprehensive general lighting solutions for all spaces"
        icon={AlertCircle}
        color="blue"
        backLink="/services/lighting"
        features={[
            'Energy-efficient LED technology',
            'Customizable brightness levels',
            'Smart scheduling and automation',
            'Motion sensor integration',
            'Daylight harvesting',
            'Centralized control systems'
        ]}
        benefits={[
            'Reduced energy consumption and costs',
            'Improved occupant comfort and productivity',
            'Extended fixture lifespan',
            'Easy installation and maintenance',
            'Environmental sustainability',
            'Enhanced visual quality'
        ]}
        useCases={[
            { title: 'Office Spaces', description: 'Optimal lighting for productivity' },
            { title: 'Retail', description: 'Attractive product illumination' },
            { title: 'Educational', description: 'Proper lighting for learning environments' },
            { title: 'Residential', description: 'Comfortable home lighting solutions' }
        ]}
    />
);

export default GeneralLightingPage;
