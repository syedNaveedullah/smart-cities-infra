import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const EmergencyLightingPage = () => (
  <ServiceDetailTemplate
    title="Emergency Lighting"
    description="Reliable emergency lighting systems for safety and compliance"
    icon={AlertCircle}
    color="red"
    backLink="/services/lighting"
    features={[
      'Automatic activation during power failure',
      'Battery backup systems',
      'Exit and egress path lighting',
      'Self-testing capabilities',
      'Regulatory compliance monitoring',
      'Central monitoring and reporting'
    ]}
    benefits={[
      'Ensure occupant safety during emergencies',
      'Meet building code requirements',
      'Reduced testing and maintenance costs',
      'Reliable performance when needed',
      'Clear evacuation pathways',
      'Peace of mind for building management'
    ]}
    useCases={[
      { title: 'Commercial Buildings', description: 'Safe evacuation during power outages' },
      { title: 'Healthcare', description: 'Critical safety in medical facilities' },
      { title: 'Industrial', description: 'Worker safety in manufacturing plants' },
      { title: 'Public Venues', description: 'Large crowd evacuation support' }
    ]}
  />
);

export default EmergencyLightingPage;