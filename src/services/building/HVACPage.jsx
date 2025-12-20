import React from 'react';
import { Wind } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const HVACPage = () => (
  <ServiceDetailTemplate
    title="Occupancy & Utilization - HVAC Systems"
    description="Advanced heating, ventilation, and air conditioning solutions for optimal comfort and efficiency"
    icon={Wind}
    color="blue"
    backLink="/services/building"
    features={[
      'Smart temperature and humidity control',
      'Energy-efficient climate management',
      'Air quality monitoring integration',
      'Predictive maintenance algorithms',
      'Zone-based control systems',
      'Integration with building automation'
    ]}
    benefits={[
      'Reduce energy costs by up to 35%',
      'Improve indoor air quality significantly',
      'Enhanced occupant comfort and productivity',
      'Lower maintenance expenses',
      'Extended equipment life by 20-30%',
      'Environmental sustainability compliance'
    ]}
    useCases={[
      { title: 'Office Buildings', description: 'Optimize comfort while minimizing energy use' },
      { title: 'Retail Spaces', description: 'Maintain consistent climate for customer comfort' },
      { title: 'Healthcare Facilities', description: 'Critical air quality and temperature control' },
      { title: 'Educational Institutions', description: 'Comfortable learning environments' }
    ]}
  />
);

export default HVACPage;