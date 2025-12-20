import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const MassNotificationPage = () => (
    <ServiceDetailTemplate
        title="Mass Notification Systems"
        description="Emergency communication and alert distribution systems"
        icon={AlertCircle}
        color="red"
        backLink="/services/safety"
        features={[
            'Multi-channel message delivery',
            'Real-time alert broadcasting',
            'Geographic targeting',
            'Message templates and automation',
            'Delivery confirmation tracking',
            'Integration with emergency systems'
        ]}
        benefits={[
            'Rapid emergency communication',
            'Increased public awareness',
            'Reduced response time',
            'Regulatory compliance',
            'Reduced panic and confusion',
            'Accountability and audit trails'
        ]}
        useCases={[
            { title: 'Public Safety', description: 'Emergency alerts to residents' },
            { title: 'Universities', description: 'Campus-wide emergency notifications' },
            { title: 'Hospitals', description: 'Internal and external emergency communication' },
            { title: 'Government', description: 'Disaster and public health alerts' }
        ]}
    />
);

export default MassNotificationPage;
