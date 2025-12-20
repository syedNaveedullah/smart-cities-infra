import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const AISolutionsPage = () => (
    <ServiceDetailTemplate
        title="AI Solutions"
        description="Intelligent systems for smart city infrastructure and safety"
        icon={AlertCircle}
        color="blue"
        backLink="/services/safety"
        features={[
            'Machine learning algorithms',
            'Real-time data analysis',
            'Predictive analytics',
            'Automated decision making',
            'Pattern recognition',
            'Integration capabilities'
        ]}
        benefits={[
            'Improved operational efficiency',
            'Proactive problem detection',
            'Data-driven insights',
            'Reduced response times',
            'Cost optimization',
            'Scalable intelligence'
        ]}
        useCases={[
            { title: 'Traffic Management', description: 'AI-powered traffic optimization' },
            { title: 'Public Safety', description: 'Intelligent surveillance and monitoring' },
            { title: 'Utilities', description: 'Smart grid and resource management' },
            { title: 'Urban Planning', description: 'Data analysis for city development' }
        ]}
    />
);

export default AISolutionsPage;
