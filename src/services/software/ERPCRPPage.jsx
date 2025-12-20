import React from 'react';
import { Database } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const ERPCRPPage = () => (
  <ServiceDetailTemplate
    title="ERP & CRP Systems"
    description="Enterprise Resource Planning and Customer Relationship Management solutions"
    icon={Database}
    color="purple"
    backLink="/services/software"
    features={[
      'Integrated business process management',
      'Real-time data synchronization',
      'Customer interaction tracking',
      'Financial management and reporting',
      'Supply chain optimization',
      'Mobile accessibility'
    ]}
    benefits={[
      'Streamline business operations',
      'Improved decision-making with real-time data',
      'Enhanced customer satisfaction',
      'Reduced operational costs by 20-30%',
      'Better resource allocation',
      'Scalable for business growth'
    ]}
    useCases={[
      { title: 'Property Management', description: 'Manage properties, tenants, and finances' },
      { title: 'Facility Services', description: 'Coordinate maintenance and operations' },
      { title: 'Retail Operations', description: 'Inventory and customer management' },
      { title: 'Service Providers', description: 'Client relationships and project tracking' }
    ]}
  />
);

export default ERPCRPPage;