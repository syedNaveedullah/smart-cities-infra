import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const IntrusionDetectionPage = () => (
    <ServiceDetailTemplate
        title="Intrusion Detection Systems"
        description="Advanced perimeter monitoring and access control solutions"
        icon={AlertCircle}
        color="red"
        backLink="/services/safety"
        features={[
            'Perimeter sensors and cameras',
            'Real-time threat detection',
            'Immediate alert notifications',
            'Access control integration',
            'Security team connectivity',
            'Continuous monitoring and logging'
        ]}
        benefits={[
            'Enhanced security and deterrence',
            'Rapid incident response',
            'Regulatory compliance',
            'Reduced security costs',
            'Automated threat protocols',
            'Integration with building systems'
        ]}
        useCases={[
            { title: 'Commercial Buildings', description: 'Comprehensive intrusion prevention' },
            { title: 'Industrial Facilities', description: 'Perimeter and asset protection' },
            { title: 'Government', description: 'High-security facility protection' },
            { title: 'Retail', description: 'Theft prevention and surveillance' }
        ]}
    />
);

export default IntrusionDetectionPage;
