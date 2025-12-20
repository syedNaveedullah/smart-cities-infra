import React from 'react';
import { Wind } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const AirQualityPage = () => (
  <ServiceDetailTemplate
    title="Indoor Air Quality"
    description="Advanced air quality monitoring and management for healthier indoor environments"
    icon={Wind}
    color="blue"
    backLink="/services/building"
    features={[
      'Real-time air quality monitoring',
      'CO2, VOC, and particulate matter tracking',
      'Automated ventilation adjustment',
      'Historical data and trend analysis',
      'Alert and notification systems',
      'Integration with HVAC systems'
    ]}
    benefits={[
      'Improved occupant health and wellbeing',
      'Enhanced productivity by up to 15%',
      'Reduced sick building syndrome',
      'Compliance with health standards',
      'Better disease prevention',
      'Increased property value'
    ]}
    useCases={[
      { title: 'Office Buildings', description: 'Maintain optimal air quality for employee health' },
      { title: 'Schools', description: 'Ensure healthy learning environments for students' },
      { title: 'Healthcare', description: 'Critical air quality control for patient safety' },
      { title: 'Laboratories', description: 'Precise environmental control for research' }
    ]}
  />
);

export default AirQualityPage;