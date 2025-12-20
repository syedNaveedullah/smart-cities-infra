import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const DaylightHarvestingPage = () => (
    <ServiceDetailTemplate
        title="Daylight Harvesting"
        description="Intelligent daylight harvesting systems to optimize energy efficiency"
        icon={AlertCircle}
        color="blue"
        backLink="/services/lighting"
        features={[
            'Automatic daylight detection sensors',
            'Dynamic dimming controls',
            'Real-time light level adjustment',
            'Energy consumption optimization',
            'Integration with existing systems',
            'Occupancy-based controls'
        ]}
        benefits={[
            'Significant energy savings',
            'Reduced electricity costs',
            'Improved employee comfort',
            'Extended lamp life',
            'Lower carbon footprint',
            'Enhanced lighting quality'
        ]}
        useCases={[
            { title: 'Office Spaces', description: 'Maximize natural light utilization' },
            { title: 'Retail Environments', description: 'Balanced ambient and accent lighting' },
            { title: 'Educational Institutions', description: 'Student comfort and energy savings' },
            { title: 'Healthcare Facilities', description: 'Patient wellness through natural light' }
        ]}
    />
);

export default DaylightHarvestingPage;
