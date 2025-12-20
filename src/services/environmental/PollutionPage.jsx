import React from 'react';
import { Wind } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const PollutionPage = () => (
  <ServiceDetailTemplate
    title="Pollution & Emissions"
    description="Environmental monitoring and emissions control for sustainability compliance"
    icon={Wind}
    color="green"
    backLink="/services/environmental"
    features={[
      'Real-time emissions monitoring',
      'Air pollutant tracking (PM2.5, NOx, SOx)',
      'Carbon footprint calculation',
      'Regulatory compliance reporting',
      'Emission reduction strategies',
      'Environmental impact analysis'
    ]}
    benefits={[
      'Ensure environmental compliance',
      'Reduce carbon footprint by 20-30%',
      'Avoid regulatory fines and penalties',
      'Improve corporate sustainability ratings',
      'Enhanced public image and reputation',
      'Support ESG (Environmental, Social, Governance) goals'
    ]}
    useCases={[
      { title: 'Manufacturing Plants', description: 'Monitor and control industrial emissions' },
      { title: 'Power Generation', description: 'Track emissions from generators and boilers' },
      { title: 'Commercial Buildings', description: 'Calculate and reduce building carbon footprint' },
      { title: 'Transportation', description: 'Monitor fleet emissions and optimize routes' }
    ]}
  />
);

export default PollutionPage;