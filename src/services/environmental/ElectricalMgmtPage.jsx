import React from 'react';
import { Zap } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const ElectricalMgmtPage = () => (
  <ServiceDetailTemplate
    title="Electrical Management"
    description="End-to-end electrical infrastructure and transformer management for safe, reliable power delivery"
    icon={Zap}
    color="orange"
    backLink="/services/environmental"
    features={[
      'Transformer management (25kVA to 500kVA)',
      'Site assessment & electrical load calculations',
      'Transformer installation & commissioning',
      'Substation design & construction',
      'Preventive electrical maintenance programs',
      'Emergency electrical repair services',
      'Power distribution monitoring',
      'Compliance and safety monitoring'
    ]}
    benefits={[
      'Reduced risk of transformer and system failures',
      'Improved power reliability for critical operations',
      'Extended transformer and equipment lifespan',
      'Lower unplanned downtime',
      'Regulatory and electrical safety compliance',
      'Fast response during electrical emergencies'
    ]}
    useCases={[
      { title: 'Commercial Buildings', description: 'Reliable transformer and power distribution systems' },
      { title: 'Industrial Facilities', description: 'Safe operation of high-capacity electrical infrastructure' },
      { title: 'Data Centers', description: 'High-reliability power and substation solutions' },
      { title: 'Healthcare Facilities', description: 'Critical electrical systems with zero tolerance for downtime' }
    ]}
  />
);

export default ElectricalMgmtPage;
