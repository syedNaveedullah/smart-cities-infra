import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const M2MPage = () => (
    <ServiceDetailTemplate
        title="Machine-to-Machine (M2M) Communication"
        description="Direct communication between connected devices and systems"
        icon={AlertCircle}
        color="blue"
        backLink="/services/safety"
        features={[
            'Device-to-device connectivity',
            'Real-time data exchange',
            'Automated responses and triggers',
            'Multi-protocol support',
            'Low latency communication',
            'Secure data transmission'
        ]}
        benefits={[
            'Reduced manual intervention',
            'Faster response times',
            'Improved system efficiency',
            'Cost reduction through automation',
            'Better data accuracy',
            'Scalable infrastructure'
        ]}
        useCases={[
            { title: 'Smart Utilities', description: 'Meter reading and grid management' },
            { title: 'Fleet Management', description: 'Vehicle tracking and diagnostics' },
            { title: 'Industrial IoT', description: 'Equipment monitoring and control' },
            { title: 'Smart Cities', description: 'Infrastructure asset management' }
        ]}
    />
);

export default M2MPage;
