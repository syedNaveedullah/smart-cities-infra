import React from 'react';
import { Zap } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const EVPage = () => (
  <ServiceDetailTemplate
    title="Drive Customer Loyalty & Sustainability with Commercial EV Charging Stations"
    description="Professional EV Charging Solutions for Retail, Offices, Hotels, and Commercial Properties"
    icon={Zap}
    color="green"
    backLink="/services/environmental"
    features={[
      'End-to-end site assessment and feasibility analysis',
      'Charger selection (Level 2 & DC Fast Charging)',
      'Electrical load analysis and upgrades',
      'Installation, testing, and commissioning',
      'Smart charging software and monitoring',
      'Ongoing operations, maintenance, and support'
    ]}
    benefits={[
      'Attract and retain customers, employees, and tenants',
      'Increase dwell time and on-site spending',
      'Strengthen sustainability and ESG credentials',
      'Enable new revenue streams from EV charging',
      'Future-proof your property for EV adoption'
    ]}
    useCases={[
      {
        title: 'Workplace Charging Solutions',
        description:
          'Corporate offices and business parks benefit from employee charging, improved talent retention, sustainability leadership, and potential tax incentives. Features include access control, usage reporting, and intelligent load management.'
      },
      {
        title: 'Retail & Hospitality Charging',
        description:
          'Shopping centers, restaurants, and hotels can increase customer dwell time by 50–100%, attract higher-income EV drivers, differentiate their brand, and generate direct revenue through pay-per-use and reservation-enabled charging.'
      },
      {
        title: 'Fleet Charging Infrastructure',
        description:
          'Logistics providers, delivery services, rental car companies, and government fleets benefit from lower operating costs, compliance with sustainability mandates, and scalable infrastructure with smart fleet management integration.'
      }
    ]}
  />
);

export default EVPage;