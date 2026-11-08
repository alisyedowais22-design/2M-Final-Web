// Direct Unsplash CDN embeds. Photographer/source references are in IMAGE-SOURCES.md.
const photo=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=78`;
export const offeringImages:Record<string,string>={
 'fleet-telematics':photo('photo-1616432043562-3671ea2e5242'),
 erp:photo('photo-1454165804606-c3d57bc86b40'),
 'ship-flow':photo('photo-1605745341112-85968b19335b'),
 'driver-management':photo('photo-1449965408869-eaa3f722e40d'),
 'task-management':photo('photo-1522071820081-009f0129c71c'),
 pos:photo('photo-1556740758-90de374c12ad'),
 'school-management-system':photo('photo-1497633762265-9d179a990aa6'),
 'custom-software':photo('photo-1542831371-29b0f74f9713'),
 'website-development':photo('photo-1498050108023-c5249f4df085'),
 'mobile-app-development':photo('photo-1511707171634-5f897ff02aa9'),
 'social-media-marketing':photo('photo-1542744173-8e7e53415bb0'),
 'cloud-hosting':photo('photo-1558494949-ef010cbdcc31'),
 'api-integrations':photo('photo-1551288049-bebda4e38f71')
};
export const heroSlides=[
 offeringImages['fleet-telematics'],
 offeringImages.erp,
 offeringImages['ship-flow'],
 offeringImages['driver-management'],
 offeringImages['task-management'],
 offeringImages.pos,
 offeringImages['school-management-system']
];
export const aboutImage=offeringImages['task-management'];
export const industryImages:Record<string,string>={
 'logistics-transport':offeringImages['fleet-telematics'],
 'distribution-wholesale':photo('photo-1586528116311-ad8dd3c8310d'),
 'retail-multi-branch':offeringImages.pos,
 'shipping-freight-forwarding':offeringImages['ship-flow'],
 manufacturing:photo('photo-1565043666747-69f6646db940'),
 'cold-chain-pharma':photo('photo-1601599967100-f16100982063'),
 'construction-heavy-equipment':photo('photo-1517089152318-42ec560349c0'),
 'public-sector-municipal':photo('photo-1557223562-6c77ef16210f'),
 'education-multi-campus':photo('photo-1509062522246-3755977927d7')
};
export const articleImages:Record<string,string>={
 'pos-and-head-office':offeringImages.pos,'platform-or-custom-build':offeringImages['custom-software'],
 'arabic-is-a-tender-requirement':offeringImages['website-development'],
 'gps-and-accounting-data-disagree':photo('photo-1485575301924-6891ef935dcd'),'erp-fails-at-cutover':photo('photo-1552664730-d307ca884978'),
 'cost-of-unmeasured-driver-behaviour':offeringImages['driver-management']
};
export const caseImages:Record<string,string>={
 'uae-bilingual-platform':photo('photo-1512453979798-5ea266f8880c'),
 'pakistan-mixed-device-platform':photo('photo-1485575301924-6891ef935dcd'),
 'pakistan-security-tracking':photo('photo-1503736334956-4c8f8e92946d')
};
