import React from 'react';
import { Users } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const OccupancyPage = () => (
  <ServiceDetailTemplate
    title="Occupancy & Utilization"
    description="Advanced occupancy tracking and space utilization analytics"
    icon={Users}
    color="purple"
    backLink="/services/building"
    features={[
      'Real-time occupancy monitoring',
      'Heat mapping and space analytics',
      'Desk and room booking integration',
      'Capacity management and compliance',
      'Historical utilization reporting',
      'Integration with access control systems'
    ]}
    benefits={[
      'Optimize space utilization by 30-50%',
      'Reduce real estate costs',
      'Improve workplace planning decisions',
      'Ensure safety and capacity compliance',
      'Enhanced employee experience',
      'Data-driven facility management'
    ]}
    useCases={[
      { title: 'Corporate Offices', description: 'Implement hot-desking and flexible workspace strategies' },
      { title: 'Educational Institutions', description: 'Optimize classroom and facility scheduling' },
      { title: 'Co-working Spaces', description: 'Manage bookings and maximize space revenue' },
      { title: 'Retail', description: 'Analyze customer traffic and optimize layouts' }
    ]}
  />
);

export default OccupancyPage;