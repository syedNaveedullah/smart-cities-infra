import React from 'react';
import { Gauge } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const EquipmentMonitoringPage = () => (
  <ServiceDetailTemplate
    title="Equipment Monitoring"
    description="Comprehensive equipment performance monitoring and predictive maintenance"
    icon={Gauge}
    color="red"
    backLink="/services/building"
    features={[
      'Real-time equipment performance tracking',
      'Predictive maintenance algorithms',
      'Automated alert and notification system',
      'Historical performance analysis',
      'Energy consumption monitoring',
      'Remote diagnostics capabilities'
    ]}
    benefits={[
      'Reduce equipment downtime by 40%',
      'Lower maintenance costs by 25%',
      'Extended equipment lifespan',
      'Improved operational efficiency',
      'Better resource planning',
      'Enhanced safety and compliance'
    ]}
    useCases={[
      { title: 'Manufacturing Plants', description: 'Monitor critical production equipment 24/7' },
      { title: 'Data Centers', description: 'Ensure cooling and power equipment reliability' },
      { title: 'Commercial Buildings', description: 'Track HVAC, elevators, and building systems' },
      { title: 'Industrial Facilities', description: 'Prevent costly equipment failures' }
    ]}
  />
);

export default EquipmentMonitoringPage;