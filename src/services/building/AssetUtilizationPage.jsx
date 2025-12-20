import React from 'react';
import { BarChart3 } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const AssetUtilizationPage = () => (
  <ServiceDetailTemplate
    title="Asset Utilization"
    description="Comprehensive asset tracking and utilization optimization"
    icon={BarChart3}
    color="green"
    backLink="/services/building"
    features={[
      'Real-time asset tracking and monitoring',
      'Utilization analytics and reporting',
      'Maintenance scheduling automation',
      'Asset lifecycle management',
      'ROI and performance metrics',
      'Integration with ERP systems'
    ]}
    benefits={[
      'Maximize asset ROI by 25-40%',
      'Reduce asset downtime',
      'Better capital planning decisions',
      'Lower maintenance costs',
      'Improved asset accountability',
      'Extended asset lifespan'
    ]}
    useCases={[
      { title: 'Manufacturing', description: 'Track equipment utilization and optimize production' },
      { title: 'Healthcare', description: 'Manage medical equipment and reduce capital waste' },
      { title: 'Fleet Management', description: 'Optimize vehicle utilization and maintenance' },
      { title: 'IT Assets', description: 'Track hardware lifecycle and optimize replacements' }
    ]}
  />
);

export default AssetUtilizationPage;