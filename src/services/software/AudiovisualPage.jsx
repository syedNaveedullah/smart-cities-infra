import React from 'react';
import { Video } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const AudiovisualPage = () => (
    <ServiceDetailTemplate
        title="Audiovisual Services"
        description="Professional audiovisual solutions for modern smart cities"
        icon={Video}
        color="blue"
        backLink="/services/software"
        features={[
            'High-definition video streaming',
            'Multi-channel audio systems',
            'Live event broadcasting',
            'Interactive display management',
            'Content management systems',
            'Real-time monitoring and analytics'
        ]}
        benefits={[
            'Enhanced public communication',
            'Improved emergency response visibility',
            'Increased citizen engagement',
            'Professional event management',
            'Reduced equipment costs',
            'Seamless integration with existing systems'
        ]}
        useCases={[
            { title: 'Public Events', description: 'Large-scale broadcasting and streaming' },
            { title: 'Emergency Management', description: 'Real-time alert distribution' },
            { title: 'Smart Displays', description: 'Dynamic information across the city' },
            { title: 'Conference Centers', description: 'Professional audiovisual production' }
        ]}
    />
);

export default AudiovisualPage;