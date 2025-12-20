import React from 'react';
import { TrendingUp } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const LoadSharingPage = () => (
  <ServiceDetailTemplate
    title="Load Sharing / Demand Response"
    description="Intelligent load management and demand response optimization"
    icon={TrendingUp}
    color="purple"
    backLink="/services/environmental"
    features={[
      'Automated load shedding and shifting',
      'Demand response program integration',
      'Real-time load balancing',
      'Peak demand management',
      'Smart grid connectivity',
      'Incentive optimization algorithms'
    ]}
    benefits={[
      'Reduce electricity costs by 20-40%',
      'Earn demand response incentives',
      'Prevent grid overload penalties',
      'Improve grid stability',
      'Reduce environmental impact',
      'Better energy cost predictability'
    ]}
    useCases={[
      { title: 'Manufacturing', description: 'Shift non-critical loads to off-peak hours' },
      { title: 'Large Campuses', description: 'Coordinate load across multiple buildings' },
      { title: 'Data Centers', description: 'Manage cooling and IT loads dynamically' },
      { title: 'Retail Chains', description: 'Participate in utility demand response programs' }
    ]}
  />
);

export default LoadSharingPage;