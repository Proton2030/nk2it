// ClientPage.js
import ClientCaseStudy from "../CaseStudyProp";
import { useParams } from "react-router-dom";
type ClientProps = {
    heading: string;
    clientName: string;
    businessChallenges: string[];
    solution: string[];
    projectOutcomes: string[];
    customerBenefits: string[];
    
    // Add other properties as needed
  };
  
  type ClientsData = {
    [key: string]: ClientProps;
  };
const 
CasePage = () => {
    const { clientSlug } = useParams<{ clientSlug?: any }>();

  const clientsData: ClientsData = {

acmPartnersProps : {
    heading: "ACM Partners",
    clientName: "ACM Partners - Sydney-based tax consultancy firm",
    businessChallenges: [
      "Limited data access and business productivity due to slow network speeds.",
      "Intermittent connectivity from a dated, inefficient centralised distribution system.",
      "Inadequate data storage and backup facilities for critical documents.",
      "Consultative SI approach needed for network and data storage limitations.",
    ],
    solution: [
      "Three-phase implementation of comprehensive storage, network, and data cabling packages.",
      "Network repair on an interim basis to minimize impact on productivity.",
      "Remapping network and cabling distribution, sourcing higher quality office PCs.",
      "Establishment of three backups – two on-premise and one cloud-based.",
      "Resolution of wifi connectivity issues through router repositioning and installation of access points.",
    ],
    projectOutcomes: [
      "Ongoing comprehensive ICT support requested over a 24-36 month period.",
      "Positive evaluation of work and peace of mind regarding data security.",
    ],
    customerBenefits: [
      "Flexible access to critical files and utilities over a secure network.",
      "Increased network capacity to support more users.",
      "Connection to telephone mains, fax, and EFTPOS facilities.",
      "BYOD and desktop device protection with reliable data-loss prevention using UPS.",
    ],
  },

  // Example props for Taegutec
 taegutecProps : {
    heading: "Taegutec",
    clientName: "Taegutec - Leading multinational metalworking company",
    businessChallenges: [
      "Consolidation of branch offices data and migration of data center.",
      "Reconfiguration of the network to recognize and support an increased number of users.",
      "Complete data cabling package for the new facility.",
      "Reconfiguration of CISCO telephony solution including call diversion and forwarding, IVR re-programming.",
    ],
    solution: [
      "End-to-end Data Centre migration and data consolidation solution.",
      "Comprehensive assessment of the client’s new facility.",
      "Disassembling, transporting, and reassembling/reinstalling BO racks.",
      "Reconfiguring the client’s network and consolidating data into the refurbished network.",
      "Reconfiguring CISCO telephony solution and connecting the network to ISDN and PSTN lines.",
      "Designing and implementing a complete data cabling solution.",
      "Implementing UPS and firewall solutions for network and equipment security.",
    ],
    projectOutcomes: [
      "Successful migration of the client’s Data Centre to the facility.",
      "Reconfigured network and consolidated BO data.",
      "Connection to ISDN and PSTN lines for telephone mains, fax, and EFTPOS facilities.",
    ],
    customerBenefits: [
      "Flexible access to critical files and utilities over a secure network.",
      "Increased network capacity to support a greater number of users.",
      "Connection to telephone mains, fax, and EFTPOS facilities.",
      "BYOD and desktop device protection with reliable data-loss prevention using UPS.",
    ],
  },

  // Example props for Hanjin Shipping
  hanjinShippingProps :{
    heading: "Hanjin Shipping",
    clientName: "Hanjin Shipping - Korea’s largest container carrier",
    businessChallenges: [
      "Outdated Alcatel telecommunications systems poorly managed by BTAS.",
    ],
    solution: [
      "Implementation of a more effective and productive OpenScape Business telecommunications solution.",
      "Four to six months of negotiations and solution evaluations.",
      "Interaction with the OpenScape Business solution in collaboration with Unified Communications (UC).",
      "Package inclusions: UCC for Standalone and Multisite environments, Voice, Presence, Conferencing, Contact Center, Messaging, IM, Mobility, Fax, UI Integration of OpenScape Web Collaboration, Connectivity to Circuit.",
      "Project details: 3 x OSBiz X5R – Main unit, 45 x OS 15T handsets and 3 x OS40T handset, 48 x Outlook Integration Licenses, Company Auto Attendant licenses, Conferencing and Mobility licenses, ISDN Trunk cards.",
    ],
    projectOutcomes: [
      "Successful implementation of the UC enabled system.",
      "Integration into Outlook for voicemail-to-email feature.",
      "Improved office-wide employee visibility on the network and IM feature.",
      "Scalable platform supporting predicted annual growth without requiring hardware change.",
    ],
    customerBenefits: [
      "Improved functionality of core business operations.",
      "Enhanced performance and mobility of the Sales team through Outlook integration.",
      "Improved office-wide employee visibility on the network and IM feature.",
      "Scalable platform supporting predicted annual growth without requiring hardware change.",
    ],
    
  },

}
const clientData = clientsData[clientSlug ?? ""];

if (!clientData) {
  return <div>Client not found</div>;
}
  return (
    <div>
      <h1 className="text-6xl font-bold text-center my-8">Client Case Studies</h1>

      {/* ACM Partners */}
      <h2>{clientData.heading}</h2>
      <p>{clientData.clientName}</p>
    </div>
  );
};

export default CasePage;
