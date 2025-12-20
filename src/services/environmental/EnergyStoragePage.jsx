import React from 'react';
import { Database } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const EnergyStoragePage = () => (
  <ServiceDetailTemplate
    title="Energy Storage"
    description="Advanced battery and energy storage solutions for grid independence"
    icon={Database}
    color="green"
    backLink="/services/environmental"
    features={[
      'Battery energy storage systems (BESS)',
      'Peak shaving and load shifting',
      'Renewable energy integration',
      'Grid independence capabilities',
      'Backup power during outages',
      'Smart charging and discharging algorithms'
    ]}
    benefits={[
      'Reduce electricity costs by 30-50%',
      'Maximize renewable energy utilization',
      'Provide backup power reliability',
      'Reduce carbon footprint',
      'Participate in demand response programs',
      'Protection against power price volatility'
    ]}
    useCases={[
      { title: 'Commercial Buildings', description: 'Peak demand reduction and cost savings' },
      { title: 'Solar Installations', description: 'Store excess solar energy for nighttime use' },
      { title: 'Industrial Plants', description: 'Reduce demand charges and ensure power reliability' },
      { title: 'Remote Facilities', description: 'Achieve energy independence from the grid' }
    ]}
  />
);

export default EnergyStoragePage;