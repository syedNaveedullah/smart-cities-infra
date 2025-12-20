import React from 'react';
import { Sun } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const LightingControlsPage = () => (
  <ServiceDetailTemplate
    title="Lighting Controls"
    description="Smart lighting control systems for energy efficiency and comfort"
    icon={Sun}
    color="yellow"
    backLink="/services/lighting"
    features={[
      'Automated daylight harvesting',
      'Occupancy-based lighting control',
      'Scene and mood lighting',
      'Dimming and color temperature adjustment',
      'Integration with building management',
      'Mobile and voice control'
    ]}
    benefits={[
      'Reduce lighting energy by 50-70%',
      'Enhanced occupant comfort and productivity',
      'Extended lamp lifespan',
      'Lower maintenance costs',
      'Customizable lighting scenes',
      'Improved sustainability ratings'
    ]}
    useCases={[
      { title: 'Office Buildings', description: 'Task-based lighting for productivity' },
      { title: 'Retail Stores', description: 'Dynamic lighting for product displays' },
      { title: 'Hotels', description: 'Mood lighting for guest experience' },
      { title: 'Educational', description: 'Optimal lighting for learning' }
    ]}
  />
);

export default LightingControlsPage;