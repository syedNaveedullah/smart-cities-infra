import React from 'react';
import { Droplet } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const WaterManagementPage = () => (
  <ServiceDetailTemplate
    title="Water Management"
    description="Advanced water management solutions for efficient resource utilization and sustainability"
    icon={Droplet}
    color="blue"
    backLink="/services/building"
    features={[
      'Real-time water consumption monitoring and analytics',
      'Advanced leak detection and prevention systems',
      'Automated irrigation and water distribution control',
      'Water quality monitoring and reporting',
      'Smart metering integration with IoT sensors',
      'Predictive maintenance algorithms'
    ]}
    benefits={[
      'Reduce water wastage by up to 40%',
      'Lower operational and maintenance costs',
      'Ensure regulatory compliance and reporting',
      'Predictive maintenance reduces downtime',
      'Enhanced sustainability and environmental impact',
      'Data-driven decision making for resource allocation'
    ]}
    useCases={[
      { title: 'Commercial Buildings', description: 'Monitor and optimize water usage across multiple floors and zones' },
      { title: 'Industrial Facilities', description: 'Manage cooling systems and process water efficiently' },
      { title: 'Residential Complexes', description: 'Track consumption per unit and identify anomalies' },
      { title: 'Agricultural Operations', description: 'Optimize irrigation based on weather and soil conditions' }
    ]}
  />
);

export default WaterManagementPage;