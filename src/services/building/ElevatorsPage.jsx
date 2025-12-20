import React from 'react';
import { Building } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const ElevatorsPage = () => (
  <ServiceDetailTemplate
    title="Elevator Systems"
    description="Comprehensive elevator management and maintenance solutions for optimal performance"
    icon={Building}
    color="blue"
    backLink="/services/building"
    features={[
      'Predictive maintenance scheduling',
      'Real-time performance monitoring',
      'Energy-efficient drive systems',
      'Remote diagnostics and troubleshooting',
      'Traffic flow optimization algorithms',
      'Emergency response integration'
    ]}
    benefits={[
      'Minimize downtime and service interruptions',
      'Extend equipment lifespan by 30-40%',
      'Reduce energy consumption by up to 30%',
      'Improve passenger experience and wait times',
      'Ensure safety compliance and certifications',
      'Lower maintenance costs through predictive analytics'
    ]}
    useCases={[
      { title: 'High-Rise Buildings', description: 'Optimize traffic flow during peak hours with intelligent dispatch' },
      { title: 'Shopping Malls', description: 'Handle high-volume passenger traffic efficiently' },
      { title: 'Hospitals', description: 'Priority routing for emergency situations and critical transport' },
      { title: 'Hotels', description: 'Enhanced guest experience with minimal wait times' }
    ]}
  />
);

export default ElevatorsPage;