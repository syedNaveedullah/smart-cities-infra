import React from 'react';
import { Lock } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const AccessControlPage = () => (
  <ServiceDetailTemplate
    title="Access Control Systems"
    description="Intelligent access management for enhanced security and convenience"
    icon={Lock}
    color="red"
    backLink="/services/safety"
    features={[
      'Biometric authentication (fingerprint, face)',
      'Card and mobile credential support',
      'Time-based access rules',
      'Integration with visitor management',
      'Real-time access logs and reporting',
      'Emergency lockdown capabilities'
    ]}
    benefits={[
      'Enhanced security and accountability',
      'Flexible access permissions management',
      'Complete audit trail for compliance',
      'Reduced reliance on physical keys',
      'Scalable for growing organizations',
      'Integration with other security systems'
    ]}
    useCases={[
      { title: 'Corporate Offices', description: 'Control employee and visitor access by zone' },
      { title: 'Healthcare Facilities', description: 'Restrict access to sensitive medical areas' },
      { title: 'Educational Institutions', description: 'Campus-wide access management' },
      { title: 'Multi-Tenant Buildings', description: 'Separate access for different tenants' }
    ]}
  />
);

export default AccessControlPage;