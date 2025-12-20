import React from 'react';
import { Gauge } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const EnergyMeteringPage = () => (
  <ServiceDetailTemplate
    title="Energy Metering"
    description="Comprehensive energy monitoring and management for cost optimization"
    icon={Gauge}
    color="green"
    backLink="/services/environmental"
    features={[
      'Real-time energy consumption tracking',
      'Sub-metering for individual zones/tenants',
      'Power quality analysis and monitoring',
      'Demand forecasting and analytics',
      'Integration with billing systems',
      'Automated reporting and alerts'
    ]}
    benefits={[
      'Identify energy waste and inefficiencies',
      'Fair tenant billing based on actual usage',
      'Optimize energy procurement strategies',
      'Support sustainability initiatives',
      'Compliance with energy regulations',
      'Data-driven energy management decisions'
    ]}
    useCases={[
      { title: 'Mixed-Use Buildings', description: 'Accurate tenant billing based on actual consumption' },
      { title: 'Industrial Facilities', description: 'Monitor high-consumption equipment and processes' },
      { title: 'Campus Environments', description: 'Track usage across multiple buildings' },
      { title: 'Retail Chains', description: 'Compare and optimize energy across locations' }
    ]}
  />
);

export default EnergyMeteringPage;