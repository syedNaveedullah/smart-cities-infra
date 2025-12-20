import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router, { Route } from './router/Router';
import './App.css';

// Main Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Category Pages
import BuildingServicesPage from './pages/categories/BuildingServicesPage';
import EnvironmentalServicesPage from './pages/categories/EnvironmentalServicesPage';
import SoftwareServicesPage from './pages/categories/SoftwareServicesPage';
import LightingServicesPage from './pages/categories/LightingServicesPage';
import SafetyServicesPage from './pages/categories/SafetyServicesPage';

// Building Services Detail Pages
import WaterManagementPage from './services/building/WaterManagementPage';
import ElevatorsPage from './services/building/ElevatorsPage';
import GeneratorsPage from './services/building/GeneratorsPage';
import VentilationPage from './services/building/VentilationPage';
import OccupancyPage from './services/building/OccupancyPage';
import HVACPage from './services/building/HVACPage';
import AssetUtilizationPage from './services/building/AssetUtilizationPage';
import ParkingPage from './services/building/ParkingPage';
import AirQualityPage from './services/building/AirQualityPage';
import EquipmentMonitoringPage from './services/building/EquipmentMonitoringPage';

// Environmental Services Detail Pages
import EnergyMeteringPage from './services/environmental/EnergyMeteringPage';
import EnergyStoragePage from './services/environmental/EnergyStoragePage';
import LoadSharingPage from './services/environmental/LoadSharingPage';
import BEMSPage from './services/environmental/BEMSPage';
import ElectricalMgmtPage from './services/environmental/ElectricalMgmtPage';
import PollutionPage from './services/environmental/PollutionPage';

// Software Services Detail Pages
import ERPCRPPage from './services/software/ERPCRPPage';
import CloudServicesPage from './services/software/CloudServicesPage';
import AudiovisualPage from './services/software/AudiovisualPage';
import MobilityPage from './services/software/MobilityPage';
import ConnectivityPage from './services/software/ConnectivityPage';
import BigDataPage from './services/software/BigDataPage';
import RealEstateMgmtPage from './services/software/RealEstateMgmtPage';
import HRSystemsPage from './services/software/HRSystemsPage';  
import TenantServicesPage from './services/software/TenantServicesPage';
import LogisticsPage from './services/software/LogisticsPage';
import RoboticsPage from './services/software/RoboticsPage';
import IndustrialPage from './services/software/IndustrialPage';

// Lighting Services Detail Pages
import LightingControlsPage from './services/lighting/LightingControlsPage';
import EmergencyLightingPage from './services/lighting/EmergencyLightingPage';
import GeneralLightingPage from './services/lighting/GeneralLightingPage';
import DigitalSignagePage from './services/lighting/DigitalSignagePage';
import DaylightHarvestingPage from './services/lighting/DaylightHarvestingPage';

// Safety Services Detail Pages
import AccessControlPage from './services/safety/AccessControlPage';
import VideoSurveillancePage from './services/safety/VideoSurveillancePage';
import FireSystemPage from './services/safety/FireSystemPage';
import MassNotificationPage from './services/safety/MassNotificationPage';
import VoiceEvacuationPage from './services/safety/VoiceEvacuationPage';
import IntrusionDetectionPage from './services/safety/IntrusionDetectionPage';
import M2MPage from './services/safety/M2MPage';
import AISolutionsPage from './services/safety/AISolutionsPage';

function App() {
  return (
    <div >
      <Navbar />
      
      <Router>
        {/* Main Pages */}
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        
        {/* Category Pages */}
        <Route path="/services/building" component={BuildingServicesPage} />
        <Route path="/services/environmental" component={EnvironmentalServicesPage} />
        <Route path="/services/software" component={SoftwareServicesPage} />
        <Route path="/services/lighting" component={LightingServicesPage} />
        <Route path="/services/safety" component={SafetyServicesPage} />
        
        {/* Building Services Detail Pages */}
        <Route path="/service/water-management" component={WaterManagementPage} />
        <Route path="/service/elevators" component={ElevatorsPage} />
        <Route path="/service/generators" component={GeneratorsPage} />
        <Route path="/service/ventilation" component={VentilationPage} />
        <Route path="/service/occupancy" component={OccupancyPage} />
        <Route path="/service/hvac" component={HVACPage} />
        <Route path="/service/asset-utilization" component={AssetUtilizationPage} />
        <Route path="/service/parking" component={ParkingPage} />
        <Route path="/service/air-quality" component={AirQualityPage} />
        <Route path="/service/equipment-monitoring" component={EquipmentMonitoringPage} />
        
        {/* Environmental Services Detail Pages */}
        <Route path="/service/energy-metering" component={EnergyMeteringPage} />
        <Route path="/service/energy-storage" component={EnergyStoragePage} />
        <Route path="/service/load-sharing" component={LoadSharingPage} />
        <Route path="/service/bems" component={BEMSPage} />
        <Route path="/service/electrical-mgmt" component={ElectricalMgmtPage} />
        <Route path="/service/pollution" component={PollutionPage} />
        
        {/* Software Services Detail Pages */}
        <Route path="/service/erp-crp" component={ERPCRPPage} />
        <Route path="/service/cloud" component={CloudServicesPage} />
        <Route path="/service/audiovisual" component={AudiovisualPage} />
        <Route path="/service/mobility" component={MobilityPage} />
        <Route path="/service/connectivity" component={ConnectivityPage} />
        <Route path="/service/big-data" component={BigDataPage} />
        <Route path="/service/real-estate-mgmt" component={RealEstateMgmtPage} />
        <Route path="/service/hr-systems" component={HRSystemsPage} />
        <Route path="/service/tenant-services" component={TenantServicesPage} />
        <Route path="/service/logistics" component={LogisticsPage} />
        <Route path="/service/robotics" component={RoboticsPage} />
        <Route path="/service/industrial" component={IndustrialPage} />
        
        {/* Lighting Services Detail Pages */}
        <Route path="/service/lighting-controls" component={LightingControlsPage} />
        <Route path="/service/emergency-lighting" component={EmergencyLightingPage} />
        <Route path="/service/general-lighting" component={GeneralLightingPage} />
        <Route path="/service/digital-signage" component={DigitalSignagePage} />
        <Route path="/service/daylight-harvesting" component={DaylightHarvestingPage} />
        
        {/* Safety Services Detail Pages */}
        <Route path="/service/access-control" component={AccessControlPage} />
        <Route path="/service/video-surveillance" component={VideoSurveillancePage} />
        <Route path="/service/fire-system" component={FireSystemPage} />
        <Route path="/service/mass-notification" component={MassNotificationPage} />
        <Route path="/service/voice-evacuation" component={VoiceEvacuationPage} />
        <Route path="/service/intrusion-detection" component={IntrusionDetectionPage} />
        <Route path="/service/m2m" component={M2MPage} />
        <Route path="/service/ai-solutions" component={AISolutionsPage} />
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;