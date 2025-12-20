import React from 'react';
import { Building } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const ParkingPage = () => (
  <ServiceDetailTemplate
    title="Parking Management"
    description="Smart parking solutions with real-time availability and automated management"
    icon={Building}
    color="orange"
    backLink="/services/building"
    features={[
      'Real-time space availability tracking',
      'Automated payment and access control',
      'License plate recognition (LPR)',
      'Mobile app integration',
      'Dynamic pricing capabilities',
      'Parking guidance systems'
    ]}
    benefits={[
      'Increase parking revenue by 20-30%',
      'Reduce traffic congestion',
      'Enhanced user experience',
      'Lower operational costs',
      'Better space utilization',
      'Real-time reporting and analytics'
    ]}
    useCases={[
      { title: 'Commercial Buildings', description: 'Optimize tenant and visitor parking management' },
      { title: 'Shopping Centers', description: 'Improve customer experience with easy parking' },
      { title: 'Airports', description: 'Handle high-volume parking with efficiency' },
      { title: 'Universities', description: 'Manage student, staff, and visitor parking' }
    ]}
  />
);

export default ParkingPage;