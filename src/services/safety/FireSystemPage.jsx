import React from 'react';
import { AlertCircle } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const FireSystemPage = () => (
  <ServiceDetailTemplate
    title="Fire Safety Systems"
    description="Comprehensive fire detection, alarm, and suppression systems"
    icon={AlertCircle}
    color="red"
    backLink="/services/safety"
    features={[
      'Smoke and heat detection',
      'Automatic fire suppression',
      'Mass notification integration',
      'Emergency lighting activation',
      'Fire department connectivity',
      'Regular testing and compliance'
    ]}
    benefits={[
      'Life safety and property protection',
      'Early fire detection and response',
      'Regulatory compliance assurance',
      'Reduced insurance premiums',
      'Automated emergency protocols',
      'Integration with building systems'
    ]}
    useCases={[
      { title: 'Commercial Buildings', description: 'Comprehensive fire protection' },
      { title: 'Industrial Facilities', description: 'Hazardous material fire suppression' },
      { title: 'Healthcare', description: 'Patient safety during fire emergencies' },
      { title: 'Data Centers', description: 'Specialized suppression systems' }
    ]}
  />
);

export default FireSystemPage;