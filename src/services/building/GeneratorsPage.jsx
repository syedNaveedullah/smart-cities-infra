import React from 'react';
import { Zap } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const GeneratorsPage = () => (
  <ServiceDetailTemplate
    title="Generator Systems"
    description="Reliable backup power solutions with intelligent management and monitoring"
    icon={Zap}
    color="orange"
    backLink="/services/building"
    features={[
      'Automatic transfer switch (ATS) integration',
      'Real-time fuel level monitoring',
      'Remote start/stop capabilities',
      'Load management and optimization',
      'Comprehensive maintenance scheduling',
      'Performance analytics and reporting'
    ]}
    benefits={[
      'Ensure continuous power supply during outages',
      'Reduce fuel costs through intelligent optimization',
      'Minimize manual intervention and response time',
      'Extended equipment lifespan through proper maintenance',
      'Rapid automatic response to power failures',
      'Compliance with power quality and safety standards'
    ]}
    useCases={[
      { title: 'Data Centers', description: 'Critical backup power for 24/7 operations and server uptime' },
      { title: 'Hospitals', description: 'Life-saving equipment continuous operation during emergencies' },
      { title: 'Manufacturing', description: 'Prevent production line interruptions and material waste' },
      { title: 'Commercial Buildings', description: 'Maintain business continuity and tenant services' }
    ]}
  />
);

export default GeneratorsPage;