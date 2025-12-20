import React from 'react';
import { Cpu } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const RoboticsPage = () => (
    <ServiceDetailTemplate
        title="Robotics & Automation"
        description="Advanced robotics and automation solutions for smart cities"
        icon={Cpu}
        color="cyan"
        backLink="/services/software"
        features={[
            'Industrial robot programming',
            'Autonomous systems development',
            'IoT and sensor integration',
            'Real-time monitoring and control',
            'Predictive maintenance systems',
            'Custom automation workflows'
        ]}
        benefits={[
            'Increased operational efficiency by 60%',
            'Reduced human error and safety risks',
            '24/7 automated operations',
            'Lower labor costs',
            'Improved service reliability',
            'Data-driven decision making'
        ]}
        useCases={[
            { title: 'Manufacturing', description: 'Automated production lines and quality control' },
            { title: 'Logistics', description: 'Autonomous delivery and sorting systems' },
            { title: 'Infrastructure', description: 'Automated maintenance and inspection' },
            { title: 'Public Services', description: 'Robotic solutions for city management' }
        ]}
    />
);

export default RoboticsPage;
