import React from 'react';
import { Eye } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const VideoSurveillancePage = () => (
  <ServiceDetailTemplate
    title="Video Surveillance"
    description="Advanced video surveillance with AI-powered analytics"
    icon={Eye}
    color="blue"
    backLink="/services/safety"
    features={[
      'HD and 4K camera systems',
      'AI-powered motion detection',
      'Facial recognition capabilities',
      'Cloud storage and local recording',
      'Real-time alerts and notifications',
      'Mobile app for remote monitoring'
    ]}
    benefits={[
      'Enhanced security and safety',
      'Deterrent to criminal activity',
      'Evidence collection and documentation',
      'Remote monitoring from anywhere',
      'Integration with access control',
      'AI-driven insights and analytics'
    ]}
    useCases={[
      { title: 'Commercial Properties', description: 'Monitor entrances, parking, common areas' },
      { title: 'Retail Stores', description: 'Loss prevention and customer analytics' },
      { title: 'Industrial Sites', description: 'Perimeter security and safety monitoring' },
      { title: 'Residential Communities', description: 'Common area entrance monitoring' }
    ]}
  />
);

export default VideoSurveillancePage;