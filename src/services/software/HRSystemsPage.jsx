import React from 'react';
import { Cloud } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const HRSystemsPage = () => (
    <ServiceDetailTemplate
        title="HR Systems & Management"
        description="Comprehensive human resources management solutions"
        icon={Cloud}
        color="purple"
        backLink="/services/software"
        features={[
            'Employee data management',
            'Payroll and benefits administration',
            'Recruitment and onboarding',
            'Performance management',
            'Time and attendance tracking',
            'Learning and development tools'
        ]}
        benefits={[
            'Reduced HR administrative time by 50%',
            'Improved employee engagement',
            'Better compliance and reporting',
            'Streamlined recruitment process',
            'Enhanced payroll accuracy',
            'Data-driven HR insights'
        ]}
        useCases={[
            { title: 'Growing Companies', description: 'Scale HR operations efficiently' },
            { title: 'Remote Organizations', description: 'Manage distributed teams seamlessly' },
            { title: 'Enterprises', description: 'Complex multi-department management' },
            { title: 'Startups', description: 'Cost-effective HR infrastructure' }
        ]}
    />
);

export default HRSystemsPage;
