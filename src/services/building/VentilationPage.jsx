import React from 'react';
import { Wind } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const VentilationPage = () => (
  <ServiceDetailTemplate
    title="Ventilation & Blinds"
    description="Smart ventilation and automated blind systems for optimal indoor comfort"
    icon={Wind}
    color="blue"
    backLink="/services/building"
    features={[
      'Automated ventilation control based on occupancy',
      'Smart blind systems with sun tracking',
      'Integration with building management systems',
      'Air quality monitoring integration',
      'Energy-efficient operation modes',
      'Remote control and scheduling'
    ]}
    benefits={[
      'Improved indoor air quality and comfort',
      'Reduced energy costs through automation',
      'Enhanced natural lighting optimization',
      'Extended equipment lifespan',
      'Better temperature regulation',
      'Increased occupant productivity'
    ]}
    useCases={[
      { title: 'Office Buildings', description: 'Optimize comfort while minimizing HVAC load' },
      { title: 'Educational Facilities', description: 'Create conducive learning environments' },
      { title: 'Healthcare', description: 'Maintain critical air quality standards' },
      { title: 'Residential', description: 'Enhance living comfort with automation' }
    ]}
  />
);

export default VentilationPage;