import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const VoiceEvacuationPage = () => (
    <ServiceDetailTemplate
        title="Voice Evacuation Systems"
        description="Intelligent audio systems for emergency announcements and building evacuation"
        icon={AlertCircle}
        color="red"
        backLink="/services/safety"
        features={[
            'Clear emergency announcements',
            'Zone-based messaging control',
            'Multi-language support',
            'Automatic alert activation',
            'Integration with fire systems',
            'Real-time system monitoring'
        ]}
        benefits={[
            'Rapid occupant notification',
            'Organized evacuation procedures',
            'Reduced panic and confusion',
            'Accessibility compliance',
            'Clear instruction delivery',
            'System redundancy and reliability'
        ]}
        useCases={[
            { title: 'Commercial Buildings', description: 'Coordinated occupant evacuation' },
            { title: 'Educational Facilities', description: 'Student and staff communication' },
            { title: 'Transportation Hubs', description: 'Large-scale passenger notification' },
            { title: 'Healthcare Facilities', description: 'Patient and visitor guidance' }
        ]}
    />
);

export default VoiceEvacuationPage;
