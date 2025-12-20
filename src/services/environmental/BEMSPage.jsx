import React from 'react';
import { Building } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const BEMSPage = () => (
  <ServiceDetailTemplate
    title="Building Energy Management System (BEMS)"
    description="Integrated platform for comprehensive building energy optimization and control"
    icon={Building}
    color="green"
    backLink="/services/environmental"
    features={[
      'Centralized energy monitoring dashboard',
      'Automated control of HVAC, lighting, and equipment',
      'Machine learning for optimization',
      'Integration with renewable energy sources',
      'Demand response participation',
      'Comprehensive analytics and reporting'
    ]}
    benefits={[
      'Reduce overall energy costs by 20-40%',
      'Improve building sustainability ratings',
      'Enhanced occupant comfort',
      'Meet green building certifications',
      'Automated energy-saving strategies',
      'Real-time visibility into energy performance'
    ]}
    useCases={[
      { title: 'Commercial Office Parks', description: 'Optimize energy across multiple buildings' },
      { title: 'Manufacturing Plants', description: 'Balance production and energy efficiency' },
      { title: 'University Campuses', description: 'Manage diverse facility types centrally' },
      { title: 'Government Buildings', description: 'Meet sustainability mandates and goals' }
    ]}
  />
);

export default BEMSPage;