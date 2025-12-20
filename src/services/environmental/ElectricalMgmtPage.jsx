import React from 'react';
import { Zap } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const ElectricalMgmtPage = () => (
  <ServiceDetailTemplate
    title="Electrical Management"
    description="Complete electrical system solutions for efficient and reliable power management"
    icon={Zap}
    color="orange"
    backLink="/services/environmental"
    features={[
      'Power distribution monitoring',
      'Circuit-level energy tracking',
      'Power quality analysis',
      'Load balancing and optimization',
      'Preventive maintenance scheduling',
      'Compliance and safety monitoring'
    ]}
    benefits={[
      'Prevent electrical failures and downtime',
      'Reduce energy waste by 15-25%',
      'Ensure electrical safety compliance',
      'Extended equipment lifespan',
      'Lower maintenance costs',
      'Improved power reliability'
    ]}
    useCases={[
      { title: 'Commercial Buildings', description: 'Monitor and optimize electrical systems' },
      { title: 'Industrial Facilities', description: 'Manage high-power equipment safely' },
      { title: 'Data Centers', description: 'Ensure power quality and redundancy' },
      { title: 'Healthcare', description: 'Critical power system reliability' }
    ]}
  />
);

export default ElectricalMgmtPage;