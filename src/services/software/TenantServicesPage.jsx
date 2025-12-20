import React from 'react';
import { Cloud } from 'lucide-react';
import ServiceDetailTemplate from '../ServiceDetailTemplate';

const TenantServicesPage = () => (
    <ServiceDetailTemplate
        title="Tenant Services"
        description="Comprehensive tenant management and support solutions"
        icon={Cloud}
        color="purple"
        backLink="/services/software"
        features={[
            'Tenant lifecycle management',
            'Multi-tenant architecture support',
            'Isolated data environments',
            'Automated provisioning',
            'Resource allocation controls',
            'Tenant analytics and reporting'
        ]}
        benefits={[
            'Streamlined tenant onboarding',
            'Improved data security and isolation',
            'Reduced operational overhead',
            'Better resource utilization',
            'Enhanced tenant experience',
            'Scalable multi-tenant platform'
        ]}
        useCases={[
            { title: 'SaaS Platforms', description: 'Manage multiple customer environments' },
            { title: 'Multi-tenant Apps', description: 'Secure tenant data separation' },
            { title: 'Enterprise Solutions', description: 'Department and subsidiary management' },
            { title: 'Service Providers', description: 'Customer environment provisioning' }
        ]}
    />
);

export default TenantServicesPage;
