import React from 'react';
import { Cloud } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const CloudServicesPage = () => (
  <ServiceDetailTemplate
    title="Cloud Services & Virtualization"
    description="Scalable cloud infrastructure and virtualization solutions"
    icon={Cloud}
    color="purple"
    backLink="/services/software"
    features={[
      'Hybrid and multi-cloud support',
      'Virtual machine management',
      'Automated backup and disaster recovery',
      'Scalable computing resources',
      'Security and compliance tools',
      'Cost optimization analytics'
    ]}
    benefits={[
      'Reduced IT infrastructure costs by 40%',
      'Improved business continuity',
      'Flexible resource scaling',
      'Enhanced collaboration',
      'Anywhere access to applications',
      'Automatic updates and maintenance'
    ]}
    useCases={[
      { title: 'Small Businesses', description: 'Enterprise IT without capital investment' },
      { title: 'Remote Teams', description: 'Secure access from anywhere' },
      { title: 'Growing Companies', description: 'Scale resources with business needs' },
      { title: 'Development Teams', description: 'Rapid deployment environments' }
    ]}
  />
);

export default CloudServicesPage;