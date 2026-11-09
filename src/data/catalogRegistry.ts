/**
 * CATALOG_REGISTRY — Central registry of all Takeway catalogues.
 * Each entry describes the catalogue and its pages with authentic models and specifications.
 */

export interface CatalogPageMeta {
  pageNum: number;
  catalogPageNum?: number;
  title: string;
  category: string;
  imageSrc: string;
  summary: string;
  productSlug?: string;
}

export interface CatalogDefinition {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  pdfUrl: string;
  pdfLabel: string;
  pageCount: number;
  color: 'cyan' | 'amber' | 'emerald' | 'violet' | 'rose';
  icon: string;
  pages: CatalogPageMeta[];
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. SOLAR CATALOGUE 2026 (Original — 50 pages)
// ─────────────────────────────────────────────────────────────────────────────
const SOLAR_PAGES: CatalogPageMeta[] = [
  { pageNum: 1, title: 'Cover Page: Takeway LED Solar Catalogue 2026', category: 'Introduction', imageSrc: '/catalog_pages/page_1.jpg', summary: 'Official 2026 Solar Lighting & Clean Energy Systems Catalogue by Aasma Enterprises, Jaipur.' },
  { pageNum: 2, title: 'About Us & Corporate Profile', category: 'Introduction', imageSrc: '/catalog_pages/page_2.jpg', summary: 'Takeway LED established in 2009. Precision engineering, sustainable commercial lighting, and pan-India reach.' },
  { pageNum: 3, title: 'Our Products Range (Official Table of Contents)', category: 'Introduction', imageSrc: '/catalog_pages/page_3.jpg', summary: 'Master category index covering ESS Solar Inverters, Solar Panels, CCTV, Street Lights, High Bays, and Garden Luminaires.' },
  { pageNum: 4, catalogPageNum: 1, title: 'ESS Solar Inverters - ABS Body (600W & 1200W)', category: 'Solar Inverters & ESS', imageSrc: '/catalog_pages/page_4.jpg', summary: 'Model ABS-600W-576WH & ABS-1200W-1152WH. Pure sine wave AC output, LiFePO4 cells, XT60 fast charging.', productSlug: 'takeway-abs-solar-inverter-1200w' },
  { pageNum: 5, catalogPageNum: 2, title: 'ESS Solar Inverters - Metal Body (200W, 300W, 600W)', category: 'Solar Inverters & ESS', imageSrc: '/catalog_pages/page_5.jpg', summary: 'Model MB-200W, MB-300W, MB-600W. Heavy-duty metal casing, 192Wh-640Wh LiFePO4 battery, built-in 5W worklight.', productSlug: 'takeway-metal-body-solar-inverter-600w' },
  { pageNum: 6, catalogPageNum: 3, title: 'Monocrystalline Solar PV Modules (40W - 165W)', category: 'Solar Panels', imageSrc: '/catalog_pages/page_6.jpg', summary: 'High-efficiency 23% Class-A monocrystalline PV modules: PV1240, PV1250, PV1275, PV12165 with IP65 dual bypass junction box.', productSlug: 'takeway-mono-solar-panels-pv-series' },
  { pageNum: 7, catalogPageNum: 4, title: 'Portable Solar Mobile Fast Charger 15W', category: 'Solar Panels', imageSrc: '/catalog_pages/page_7.jpg', summary: 'Model SMC-15W. 9V 15W Monocrystalline folding solar charger with 3x USB-A, 1x Type-C PD, multi-device cable.', productSlug: 'takeway-solar-mobile-charger-smc-15w' },
  { pageNum: 8, catalogPageNum: 5, title: 'Solar Rechargeable Pedestal Fan 16"', category: 'Solar Panels', imageSrc: '/catalog_pages/page_8.jpg', summary: 'Model SOLAR-FAN-FS578-WH. 16-inch pedestal fan, 9V 12W solar panel, 7.4V 5.2Ah lithium battery, 3-speed remote.', productSlug: 'takeway-solar-rechargeable-pedestal-fan' },
  { pageNum: 9, catalogPageNum: 6, title: 'Solar CCTV Cameras - 4G Single & Dual Lens', category: 'Solar CCTV Lights', imageSrc: '/catalog_pages/page_9.jpg', summary: 'Model SOLAR-XG06-4G-DUAL & SOLAR-XG06-4G. FHD 5MP IR dual camera, 360° PTZ rotation, 5-7 days backup, V380 Pro.', productSlug: 'takeway-4g-dual-lens-solar-cctv-camera' },
  { pageNum: 10, catalogPageNum: 7, title: 'Solar CCTV Flood Lights with Zoom Camera 4G/WiFi', category: 'Solar CCTV Lights', imageSrc: '/catalog_pages/page_10.jpg', summary: 'Model SOLAR CCTV-T845REAL-4G. Optical zoom FHD camera with high-lumen solar floodlight and 256GB SD card support.', productSlug: 'takeway-solar-cctv-5real-zoom-camera' },
  { pageNum: 11, catalogPageNum: 8, title: 'LCD Solar CCTV Flood Light 30W / 150W LED', category: 'Solar CCTV Lights', imageSrc: '/catalog_pages/page_11.jpg', summary: 'Model SOLAR-FL-CCTV-30. 58 Pcs 5054 LED, 5V 30W Mono panel, 3.2V 25Ah LiFePO4 battery, 4G FHD camera.', productSlug: 'takeway-solar-cctv-flood-light-30w' },
  { pageNum: 12, catalogPageNum: 9, title: 'LCD Solar CCTV Street Light 90W (Fixed Lens)', category: 'Solar CCTV Lights', imageSrc: '/catalog_pages/page_12.jpg', summary: 'Model SOLAR-SL-CCTV-15-1LENS-4G NO PTZ. 201 LEDs, 5V 16W panel, 3.2V 12Ah battery, motion radar sensor.', productSlug: 'takeway-solar-cctv-street-light-90w-fixed' },
  { pageNum: 13, catalogPageNum: 10, title: 'Solar CCTV Street Light 90W PTZ Live Stream', category: 'Solar CCTV Lights', imageSrc: '/catalog_pages/page_13.jpg', summary: 'Model SOLAR-SL-CCTV-20-1LENS. Combined 90W street luminaire and 4G HD PTZ security camera with 3.2V 20Ah LiFePO4.', productSlug: 'takeway-solar-cctv-street-light-90w' },
  { pageNum: 14, catalogPageNum: 11, title: 'Panoramic Triple-CCTV 4G Solar Street Luminaire', category: 'Solar CCTV Lights', imageSrc: '/catalog_pages/page_14.jpg', summary: 'Model SOLAR-SL-CCTV-20-4LENS. 360° panoramic multi-angle surveillance with 3+1 lenses (15MP total), 180 Pcs LEDs.', productSlug: 'takeway-panoramic-triple-cctv-solar-street-light' },
  { pageNum: 15, catalogPageNum: 12, title: 'Metal Body All-in-One Solar Street Light 80W', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_15.jpg', summary: 'Model TAKEWAY-METAL80. 180 LED 5054, 5V 85W Mono panel, 3.2V 80Ah LiFePO4 battery, adjustable mounting bracket.', productSlug: 'takeway-metal-all-in-one-solar-street-light-80w' },
  { pageNum: 16, catalogPageNum: 13, title: 'Heavy-Duty Metal All-in-One Solar Street Light (80W / 100W / 120W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_16.jpg', summary: 'Models SL-INT-METAL80 (80W), METAL100 (100W), and METAL120 (120W). Architectural aluminum body with 5V Mono panel, 3.2V 80Ah-120Ah LiFePO4, up to 300 Pcs 5054 LEDs.', productSlug: 'takeway-metal-all-in-one-solar-street-light-120w' },
  { pageNum: 17, catalogPageNum: 14, title: 'High-Power Optical Lens Solar Street Light HP Series (60W / 80W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_17.jpg', summary: 'Models TAKEWAY-HP60 (60W) and HP80 (80W). 8-Lens optical batwing distribution luminaire with up to 432 Pcs 1W LEDs, 5V 85W panel, 3.2V 80Ah LiFePO4.', productSlug: 'takeway-high-power-optical-lens-street-light-hp80' },
  { pageNum: 18, catalogPageNum: 15, title: 'Semi-Integrated Solar Street Light Series (12W - 50W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_18.jpg', summary: 'Models TAKEWAY-SEMI-12R (12W), 20R (20W), 30R (30W), 30R-LENS (30W), and 50R (50W). Roadway luminaires with up to 766 LEDs, 5V Mono panel, 30Ah-50Ah LiFePO4.', productSlug: 'takeway-semi-integrated-solar-street-light-50w' },
  { pageNum: 19, catalogPageNum: 16, title: 'Apple Series All-in-One Solar Street Light (40W / 50W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_19.jpg', summary: 'Models SLSOLARINT-APPLE40 (40W) and APPLE50 (50W). Aerodynamic Apple curved frame, 576/864 LEDs, 42Ah/56Ah LiFePO4, radar dimming.', productSlug: 'takeway-apple-series-solar-street-light-40w' },
  { pageNum: 20, catalogPageNum: 17, title: 'KING Series All-in-One Solar Street Light (35W / 45W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_20.jpg', summary: 'Models SLSOLARINT-KING35 (35W) and KING45 (45W). Commercial-grade luminaires with up to 732 Pcs 0.5W LEDs, 5V Mono panel, 3.2V 30Ah LiFePO4, radar motion sensor.', productSlug: 'takeway-king-series-solar-street-light-45w' },
  { pageNum: 21, catalogPageNum: 18, title: 'AERO PLUS Aerodynamic Solar Street Light Series (25W - 35W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_21.jpg', summary: 'Models SL-AEROPLUS-25 (25W), 30 (30W), and 35 (35W). Aerodynamic low-drag wind-resistant luminaires with up to 1152 Pcs 5730 LEDs, 5V 34W panel, 30Ah LiFePO4.', productSlug: 'takeway-aero-plus-solar-street-light-35w' },
  { pageNum: 22, catalogPageNum: 19, title: 'AERO Series All-in-One Solar Street Light Series (25W - 35W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_22.jpg', summary: 'Models SL-AERO-INT-25 (25W), 30 (30W), and 35 (35W). Slimline AERO fixtures with 480-800 LEDs, 5V Mono panel, 3.2V 20A-30A LiFePO4, 2-night reserve.', productSlug: 'takeway-aero-series-solar-street-light-35w' },
  { pageNum: 23, catalogPageNum: 20, title: 'Optical Lens Solar Street Light Series (25W / 35W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_23.jpg', summary: 'Models SLSOLARINT-2LENS-25R (25W) and 3LENS-35R (35W). Optical lens fixtures with 108/162 Pcs 2W LEDs, 5V 26W/36W Mono panel, 3.2V 20Ah/30Ah LiFePO4.', productSlug: 'takeway-optical-lens-solar-street-light-35w' },
  { pageNum: 24, catalogPageNum: 21, title: 'SPACE Series 12-Lens Solar Street Luminaire (25W / 35W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_24.jpg', summary: 'Models SL-INT-SPACE25 (25W) and SPACE35 (35W). 12 precision optical cluster lenses, 72 Pcs 5054 LEDs, 5V 30W Mono panel, 3.2V 30Ah LiFePO4.', productSlug: 'takeway-space-series-solar-street-light-35w' },
  { pageNum: 25, catalogPageNum: 22, title: 'Tilt-Adjustable Panel Solar Street Light (10W / 15W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_25.jpg', summary: 'Models SL-INT-ADJ-10 (10W) and ADJ-15 (15W). Tilt-adjustable monocrystalline panel for optimal seasonal sun alignment, up to 120 LEDs, 3.2V 10Ah LiFePO4.', productSlug: 'takeway-adjustable-solar-street-light-15w' },
  { pageNum: 26, catalogPageNum: 23, title: 'STAR Series Solar Street Light Series (5W - 15W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_26.jpg', summary: 'Models SLSOLARINT05R-STAR (5W), 10R-STAR (10W), and 15R-STAR (15W). 1, 2 & 3 Window optical array luminaires with Epistar LEDs and remote dimming.', productSlug: 'takeway-star-series-solar-street-light-15w' },
  { pageNum: 27, catalogPageNum: 24, title: 'Double Body Solar Street Light Series (5W - 25W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_27.jpg', summary: 'Models SLSOLARINT05R (5W) to 25R6W (25W). 1 to 6 window luminaires, up to 480 LED 5730 Epistar, 5V Mono panel, 3.2V 25A LiFePO4.', productSlug: 'takeway-double-body-solar-street-light-25w' },
  { pageNum: 28, catalogPageNum: 25, title: 'Single Body Solar Street Light Series (5W - 20W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_28.jpg', summary: 'Models SLSOLARINT05R-SB (5W) to 20R-SB (20W). 1 to 4 window design with up to 320 Epistar LEDs, dawn-to-dusk automated controller.', productSlug: 'takeway-single-body-solar-street-light-20w' },
  { pageNum: 29, catalogPageNum: 26, title: 'Mini Solar Pathway & Wall Street Light Series (2W - 9W)', category: 'Solar Street Lights', imageSrc: '/catalog_pages/page_29.jpg', summary: 'Models SOLAR-NEW-MINI02 to 06 (2W, 4W, 6W) & SLSOLAR-MINI03 to 09 (3W, 6W, 9W). Compact pathway fixtures with wall mounting brackets.', productSlug: 'takeway-mini-solar-street-light-9w' },
  { pageNum: 30, catalogPageNum: 27, title: 'Industrial Solar High Bay UFO Light 35W', category: 'Solar High Bays', imageSrc: '/catalog_pages/page_30.jpg', summary: 'Model SOLAR-HIGHBAY-35R. 290mm circular UFO luminaire with 60 Pcs 5054 LEDs, external 5V 35W Mono panel, 3.2V 30Ah LiFePO4.', productSlug: 'takeway-industrial-solar-highbay-ufo-35w' },
  { pageNum: 31, catalogPageNum: 28, title: 'LENS Model Commercial Solar Flood Light Series (20W / 30W)', category: 'Solar Floodlights', imageSrc: '/catalog_pages/page_31.jpg', summary: 'Models FLSOLAR-LENS20 (20W) and LENS30 (30W). Heavy-duty die-cast flood projectors with up to 400 Pcs 2835 LEDs, optical micro-lenses, 5V Poly panel.', productSlug: 'takeway-lens-solar-flood-light-30w' },
  { pageNum: 32, catalogPageNum: 29, title: 'SKY LIGHT Commercial Solar Floodlight Series (20W / 30W)', category: 'Solar Floodlights', imageSrc: '/catalog_pages/page_32.jpg', summary: 'Models FLSOLAR-CITY20 / SKY20 (20W) and SKY30 (30W). Premium perimeter floodlights with up to 416 LEDs, 5V panel, 3.2V 25Ah LiFePO4.', productSlug: 'takeway-sky-light-solar-floodlight-30w' },
  { pageNum: 33, catalogPageNum: 30, title: 'Foldable Solar Flood Light Series (10W / 15W)', category: 'Solar Floodlights', imageSrc: '/catalog_pages/page_33.jpg', summary: 'Models FLSOLAR-FOLD10 (10W) & FOLD15 (15W). Integrated folding solar panel floodlights with dual white LEDs (CW+WW), auto on/off.', productSlug: 'takeway-foldable-solar-flood-light-15w' },
  { pageNum: 34, catalogPageNum: 31, title: '360° Solar UFO Garden Post Light 15W RGB+White', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_34.jpg', summary: 'Model GARDENSOLAR15R-RGB. Circular UFO radial pathway luminaire with 824 Pcs 5730 LEDs, 76mm pole mount.', productSlug: 'takeway-solar-ufo-garden-post-light-15w-rgb' },
  { pageNum: 35, catalogPageNum: 32, title: 'Multi-Function Portable Solar Camping Light Series (30W / 50W / 100W)', category: 'Portable Work Lights', imageSrc: '/catalog_pages/page_35.jpg', summary: 'Models EMSOLARFL30 (30W), FL50 (50W), and FL100 (100W). Rugged jobsite luminaires with up to 180 LEDs, solar panel, LiFePO4, power bank & SOS.', productSlug: 'takeway-portable-solar-camping-light-100w' },
  { pageNum: 36, catalogPageNum: 33, title: 'Solar Emergency Camping Lantern Series (with 3-Speed Fan / Reflector)', category: 'Portable Work Lights', imageSrc: '/catalog_pages/page_36.jpg', summary: 'Models EM-4REF-CP100-3IN1-FAN. 288 LEDs, 3.7V 8000mAh battery, built-in 3-speed cooling fan, USB-C fast charging.', productSlug: 'takeway-emergency-camping-light-with-fan-100w' },
  { pageNum: 37, catalogPageNum: 34, title: 'Diamond Architectural Solar Garden Bollard Series (Standard & Mini)', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_37.jpg', summary: 'Models SOLAR-BOLLARD-BIG-3IN1+RGB (750mm) and MINI (450mm). Architectural diamond prism bollard with 5V panel, multi-color RF remote.', productSlug: 'takeway-big-diamond-solar-garden-bollard-10w' },
  { pageNum: 38, catalogPageNum: 35, title: 'CUBE & SECRET Vintage Spiral Filament Solar Bollards', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_38.jpg', summary: 'Models SOLAR-BOLLARD-CUBE & SECRET. 860mm/890mm floor-mount landscape bollards with vintage tungsten filament LED.', productSlug: 'takeway-cube-secret-solar-bollards-tungsten' },
  { pageNum: 39, catalogPageNum: 36, title: 'Diamond Pillar & Gate Solar Light Series (Standard & Mini)', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_39.jpg', summary: 'Models SOLAR-GATE-BIG-3IN1+RGB (185x185mm) and MINI (130x130mm). Square gate and boundary wall pillar lights with crystalline glass optic.', productSlug: 'takeway-diamond-pillar-gate-light-10w' },
  { pageNum: 40, catalogPageNum: 37, title: 'Vintage Gate & Pillar Lantern Landscape Showcase', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_40.jpg', summary: 'Architectural installation showcase for CUBE and SECRET vintage tungsten pillar fixtures in luxury outdoor gardens.', productSlug: 'takeway-vintage-gate-pillar-light-cube-secret' },
  { pageNum: 41, catalogPageNum: 38, title: 'Vintage Gate & Pillar Light CUBE & SECRET Specs', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_41.jpg', summary: 'Model SOLAR-GATE-SECRET-WW & CUBE-WW. 5V 2W-3W Mono panels, 3.7V 2000mAh battery, Warm White 2700K tungsten style.', productSlug: 'takeway-vintage-gate-pillar-light-cube-secret' },
  { pageNum: 42, catalogPageNum: 39, title: 'Vintage Shadow Lantern Landscape Architectural View', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_42.jpg', summary: 'Installation showcase for fluted cone shadow art lantern illuminating pathway stone walkways and exterior landscaping.', productSlug: 'takeway-shadow-lantern-solar-lawn-wall-light' },
  { pageNum: 43, catalogPageNum: 40, title: 'Vintage Shadow Lantern Solar Lawn & Wall Light Specs', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_43.jpg', summary: 'Model SOLAR-LAWN-SHADOW-WW. Designer fluted cone hanging lantern creating dramatic shadow patterns, 5V 2W Mono panel.', productSlug: 'takeway-shadow-lantern-solar-lawn-wall-light' },
  { pageNum: 44, catalogPageNum: 41, title: 'Expandable Height Multi-Use Solar Lawn Light 5W', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_44.jpg', summary: 'Model SOLAR-LAWN-2WAY-WW. Modular lawn light with expandable height (275mm to 700mm) with ground spike and floor flange.', productSlug: 'takeway-expandable-height-solar-lawn-light-5w' },
  { pageNum: 45, catalogPageNum: 42, title: 'Solar Flame Torch Lights (Dancing Flame Tiki 5W)', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_45.jpg', summary: 'Model SOLARFLAME. 780mm garden tiki torch with 96 Pcs LEDs simulating realistic flickering dancing fire, flame/breathing modes.', productSlug: 'takeway-solar-flame-torch-lights' },
  { pageNum: 46, catalogPageNum: 43, title: 'Modular Solar Wall Washer Grazer (Infinite Interlocking)', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_46.jpg', summary: 'Model SOLAR-WALLWASHER-4LED/UP-WW. 370mm linear wall washer with snap-on connection for seamless infinite runs, 180° tilt.', productSlug: 'takeway-modular-solar-wall-washer-light' },
  { pageNum: 47, catalogPageNum: 44, title: 'Architectural Facade Solar Wall Light Series (2+2 / 3+3 / 6+6 Beams)', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_47.jpg', summary: 'Models SOLAR-WL-606 & 6WAY. Modern geometric bi-directional sconces casting dramatic light rays across exterior building facades.', productSlug: 'takeway-architectural-solar-facade-wall-light' },
  { pageNum: 48, catalogPageNum: 45, title: 'Solar Garden Spike Lights Application Showcase', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_48.jpg', summary: 'Garden accent & walkway spotlighting showcase for lens and square optical solar ground spikes.', productSlug: 'takeway-solar-garden-spike-lights-lens' },
  { pageNum: 49, catalogPageNum: 46, title: 'Solar Garden Spike Lights (Lens & Square Optic)', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_49.jpg', summary: 'Model SOLAR-SPIKE-LENS-WW & RGB. 18 LED 2835 spot luminaire with adjustable solar head, ground spike or wall bracket.', productSlug: 'takeway-solar-garden-spike-lights-lens' },
  { pageNum: 50, catalogPageNum: 47, title: 'Mushroom Umbrella & Crystal Landscape Spike Lights', category: 'Solar Post & Landscape', imageSrc: '/catalog_pages/page_50.jpg', summary: 'Model SOLAR-SPIKE-UMBRELLA-WW (6 Pcs set) & SOLAR-SPIKE-CRYSTAL-WW square pathway lights with IP65 waterproofing.', productSlug: 'takeway-solar-spike-mushroom-umbrella-crystal' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. INDOOR CATALOGUE (30 pages)
// ─────────────────────────────────────────────────────────────────────────────
const INDOOR_PAGES: CatalogPageMeta[] = [
  {"pageNum": 1, "title": "Cover Page: Takeway LED Indoor Commercial Catalogue", "category": "Introduction", "imageSrc": "/catalog_pages/indoor/page_1.jpg", "summary": "Architectural & Commercial Indoor LED Lighting Systems by Aasma Enterprises, Jaipur."},
  {"pageNum": 2, "title": "About Us & Architectural Engineering Standards", "category": "Introduction", "imageSrc": "/catalog_pages/indoor/page_2.jpg", "summary": "High-CRI semiconductor LED packaging, isolated flicker-free drivers, and modern indoor luminaire systems."},
  {"pageNum": 3, "title": "Indoor Master Table of Contents", "category": "Introduction", "imageSrc": "/catalog_pages/indoor/page_3.jpg", "summary": "Complete index across Magnetic LED lights, linear pendants, COB track lights, downlights, neon profiles, and sensor systems."},
  {"pageNum": 4, "title": "Architectural Magnetic Track Light Systems (48V Low Voltage)", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_4.jpg", "summary": "Modular magnetic track tracks, surface mounts, and flush recessed channels with magnetic snap-in power delivery.", "productSlug": "takeway-magnetic-track-light-system"},
  {"pageNum": 5, "title": "Magnetic Track Linears & Anti-Glare Spot Inserts", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_5.jpg", "summary": "Linear magnetic diffusers, dark-light honeycomb louvers, and fold-out directional spotlights.", "productSlug": "takeway-magnetic-track-light-system"},
  {"pageNum": 6, "title": "Magnetic Track Pendants & Adjustable Cylinder Spots", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_6.jpg", "summary": "Suspended pendant cylinder lights and 360° rotational accent fixtures for retail stores and dining spaces.", "productSlug": "takeway-magnetic-track-light-system"},
  {"pageNum": 7, "title": "Magnetic Track Corner Connectors & 48V Power Feeds", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_7.jpg", "summary": "90° horizontal/vertical corner modules, end feed caps, and Mean Well 48V constant-voltage track power supplies.", "productSlug": "takeway-magnetic-track-light-system"},
  {"pageNum": 8, "title": "Linear Hanging Office Luminaires (Direct & Bi-Directional)", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_8.jpg", "summary": "Anodized aluminum suspended linear profiles with opal diffusers, wire suspension cables, and continuous linkable runs.", "productSlug": "takeway-linear-office-hanging-luminaire"},
  {"pageNum": 9, "title": "Classroom & Corporate Office Suspended Fixtures", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_9.jpg", "summary": "High-lumen, low-glare UGR<19 suspended fixtures optimized for study desks, computer labs, and office workstations.", "productSlug": "takeway-linear-office-hanging-luminaire"},
  {"pageNum": 10, "title": "Backlit Commercial LED Panel Lights (2x2 / 600x600mm)", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_10.jpg", "summary": "36W and 48W 2ft x 2ft ultra-slim backlit ceiling grid panels with PMMA non-yellowing lenses and 120 lm/W efficacy.", "productSlug": "takeway-backlit-commercial-panel-light"},
  {"pageNum": 11, "title": "Slim Round & Square Frameless Panel Lights", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_11.jpg", "summary": "Surface and recessed frameless panel lights for healthcare clinics, retail boutiques, and residential apartments.", "productSlug": "takeway-backlit-commercial-panel-light"},
  {"pageNum": 12, "title": "Commercial COB Track Lights (12W - 35W)", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_12.jpg", "summary": "Adjustable cylindrical track spotlights with 350° pan and 90° tilt, high CRI 90+ chips, and 15°/24°/38° optical reflectors.", "productSlug": "takeway-cob-recessed-downlight-series"},
  {"pageNum": 13, "title": "Hanging & Surface-Mounted Decorative Cylinders", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_13.jpg", "summary": "Modern architectural aluminum tube pendants and surface ceiling downlights in black, white, and brushed gold.", "productSlug": "takeway-cob-recessed-downlight-series"},
  {"pageNum": 14, "title": "COB Surface-Mounted Downlights & Wall Washers", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_14.jpg", "summary": "Dual-tone surface cans with rose gold and chrome deep baffles for concrete ceilings without false ceiling drop.", "productSlug": "takeway-cob-recessed-downlight-series"},
  {"pageNum": 15, "title": "Deep Recessed COB Downlights (Anti-Glare Series)", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_15.jpg", "summary": "Architectural deep recessed downlights with 7W to 30W ratings, interchangeable reflectors, and UGR<16 comfort.", "productSlug": "takeway-cob-recessed-downlight-series"},
  {"pageNum": 16, "title": "Square & Multi-Head Recessed COB Gimbal Fixtures", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_16.jpg", "summary": "Double and triple head directional gimbal fixtures for merchandise highlighting and showroom feature walls.", "productSlug": "takeway-cob-recessed-downlight-series"},
  {"pageNum": 17, "title": "Miniature COB Spotlights & Step Washers", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_17.jpg", "summary": "1W-5W micro accent spot fixtures and wall-recessed step markers for luxury residences and hotels.", "productSlug": "takeway-cob-recessed-downlight-series"},
  {"pageNum": 18, "title": "Linear Recessed Grille Downlights (Blade Series)", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_18.jpg", "summary": "5-lens and 10-lens architectural recessed grille downlights with black louvers casting directional cut-off beams.", "productSlug": "takeway-cob-recessed-downlight-series"},
  {"pageNum": 19, "title": "Silicone Neon Profile Tubes (Dotless Top & Side Bend)", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_19.jpg", "summary": "Flexible food-grade silicone neon extrusions for continuous dot-free glow in cove ceilings, signage, and facades.", "productSlug": "takeway-silicon-neon-flex-profile"},
  {"pageNum": 20, "title": "Silicone Neon Profile Specifications & Mounting Clips", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_20.jpg", "summary": "Dimensions, bending radiuses, end caps, and mounting channels for 10x10mm up to 20x20mm neon profiles.", "productSlug": "takeway-silicon-neon-flex-profile"},
  {"pageNum": 21, "title": "Architectural Aluminum Linear Extrusions", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_21.jpg", "summary": "Corner profiles, recessed drywall flange profiles, wide surface profiles, and plaster-in trimless aluminum channels.", "productSlug": "takeway-silicon-neon-flex-profile"},
  {"pageNum": 22, "title": "Cove Strip Light, Neon Strip & Commercial Rope Lights", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_22.jpg", "summary": "12V/24V high-density SMD LED strips (120/240 LEDs/m) delivering up to 1400 lm/m for architectural cove details.", "productSlug": "takeway-silicon-neon-flex-profile"},
  {"pageNum": 23, "title": "Cabinet & Wardrobe Specialized Profile Systems", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_23.jpg", "summary": "Integrated clothes-rail hanging profiles, 45° shelf corner profiles, and ultra-thin under-cabinet task channels.", "productSlug": "takeway-smart-cabinet-sensor-profile"},
  {"pageNum": 24, "title": "Cabinet Sensors & Touch Controllers", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_24.jpg", "summary": "Hand-wave proximity sensors, wardrobe door-open micro switches, touch dimmers, and multi-port splitter hubs.", "productSlug": "takeway-smart-cabinet-sensor-profile"},
  {"pageNum": 25, "title": "Energy-Saving PIR & Microwave Motion Sensors", "category": "Electrical Accessories", "imageSrc": "/catalog_pages/indoor/page_25.jpg", "summary": "360° ceiling-mounted PIR occupancy detectors and microwave radar sensors for automated corridor and washroom lighting.", "productSlug": "takeway-smart-cabinet-sensor-profile"},
  {"pageNum": 26, "title": "Integrated Motion Sensor Ceiling & Wall Luminaires", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_26.jpg", "summary": "Circular and square automated sensor downlights with built-in twilight sensors and timer adjustment.", "productSlug": "takeway-smart-cabinet-sensor-profile"},
  {"pageNum": 27, "title": "T8 Glass & Polycarbonate LED Tube Lights (2ft & 4ft)", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_27.jpg", "summary": "High-efficacy 9W and 18W T8 retrofit LED tubes with internal isolated drivers and wide 240° beam angle."},
  {"pageNum": 28, "title": "Smart Sequential Staircase Step Light Controller", "category": "Indoor Commercial Lighting", "imageSrc": "/catalog_pages/indoor/page_28.jpg", "summary": "16-step to 32-step programmable cascading staircase sensor controller. Triggers sequential step illumination as users ascend.", "productSlug": "takeway-smart-cabinet-sensor-profile"},
  {"pageNum": 29, "title": "Internal Constant-Current Drivers & MCPCB Assemblies", "category": "Electrical Accessories", "imageSrc": "/catalog_pages/indoor/page_29.jpg", "summary": "Heavy-duty constant-current isolated LED drivers, surge protectors, and aluminum metal-core PCBs."},
  {"pageNum": 30, "title": "Indoor Catalogue Back Cover & Direct Support", "category": "Introduction", "imageSrc": "/catalog_pages/indoor/page_30.jpg", "summary": "Takeway LED technical lighting desk, CAD Dialux simulation requests, and factory warranty terms."},
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. OUTDOOR CATALOGUE (16 pages)
// ─────────────────────────────────────────────────────────────────────────────
const OUTDOOR_PAGES: CatalogPageMeta[] = [
  {"pageNum": 1, "title": "Cover Page: Takeway LED Outdoor Catalogue", "category": "Introduction", "imageSrc": "/catalog_pages/outdoor/page_1.jpg", "summary": "Official Takeway Outdoor LED Lighting Catalogue by Aasma Enterprises, Jaipur."},
  {"pageNum": 2, "title": "About Us & Infrastructure Capabilities", "category": "Introduction", "imageSrc": "/catalog_pages/outdoor/page_2.jpg", "summary": "Takeway LED established 2009. Precision outdoor LED manufacturing, heavy-duty surge protection, and pan-India project execution."},
  {"pageNum": 3, "catalogPageNum": 1, "title": "LED Wall Washer Lights Showcase (Flexible & DMX512)", "category": "Architectural & Facade", "imageSrc": "/catalog_pages/outdoor/page_3.jpg", "summary": "Architectural facade wall grazing with DMX512 color sequencing, RGB spectrum, and flexible IP65 silicone wall washer strips.", "productSlug": "takeway-led-wall-washer-lights"},
  {"pageNum": 4, "catalogPageNum": 2, "title": "Linear Wall Washer Specifications & DMX Controllers", "category": "Architectural & Facade", "imageSrc": "/catalog_pages/outdoor/page_4.jpg", "summary": "18W & 36W wall washers (220V AC / 24V DC), anti-glare visors, linkable DMX units, and YK-512-8-GPS 8-channel SD card master controller.", "productSlug": "takeway-led-wall-washer-lights"},
  {"pageNum": 5, "catalogPageNum": 3, "title": "Wall Elevation Sconces, K-Lights, Step & Spike Lights", "category": "Architectural & Facade", "imageSrc": "/catalog_pages/outdoor/page_5.jpg", "summary": "2-Way / 4-Way / 2+2 / 3+3 optical lens wall sconces, 3W/6W K-Lights, recessed step lights, and 5W-20W COB garden spike spotlights.", "productSlug": "takeway-wall-elevation-step-lights"},
  {"pageNum": 6, "catalogPageNum": 4, "title": "In-Ground Burial Uplights & Facade Column Projectors", "category": "Architectural & Facade", "imageSrc": "/catalog_pages/outdoor/page_6.jpg", "summary": "3W-12W IP68 stainless steel round burial lights with wireless RGB remote, plus 10W 7° ultra-narrow beam architectural column lights.", "productSlug": "takeway-burial-facade-lights"},
  {"pageNum": 7, "catalogPageNum": 5, "title": "Submersible Swimming Pool Lights 18W (SS304)", "category": "Underwater & Landscape", "imageSrc": "/catalog_pages/outdoor/page_7.jpg", "summary": "Model SWIM-18W-SS in marine SS304 housing. 144 high-flux LEDs, 12V AC/DC safe operation, IP68 resin-potted waterproofing, warm white & RGB.", "productSlug": "takeway-underwater-pool-fountain-lights"},
  {"pageNum": 8, "catalogPageNum": 6, "title": "Underwater Spotlights & Center-Hole Fountain Lights", "category": "Underwater & Landscape", "imageSrc": "/catalog_pages/outdoor/page_8.jpg", "summary": "3W-12W adjustable submersible spot lights and 6W/12W center-hole fountain nozzle luminaires in SS304 with 24V AC/DC driver.", "productSlug": "takeway-underwater-pool-fountain-lights"},
  {"pageNum": 9, "catalogPageNum": 7, "title": "Super-Bright LED Tower & Stadium Projector (300W / 600W)", "category": "Commercial Floodlights", "imageSrc": "/catalog_pages/outdoor/page_9.jpg", "summary": "Model STFL300 (300W, 30,000 LM) and STFL600 (600W, 60,000 LM). High-mast construction and arena projectors with 60° beam shield, IP65.", "productSlug": "takeway-stadium-high-mast-tower-light"},
  {"pageNum": 10, "catalogPageNum": 8, "title": "Commercial Floodlight Family (Slim, Motion Sensor & Lens)", "category": "Commercial Floodlights", "imageSrc": "/catalog_pages/outdoor/page_10.jpg", "summary": "50W-200W slim floodlights, PIR motion radar sensor models (50W/100W), and optical lens models (FLLENS50/100) delivering up to 20,000 LM.", "productSlug": "takeway-commercial-motion-sensor-flood-light"},
  {"pageNum": 11, "catalogPageNum": 9, "title": "Industrial High Bay Fixtures (UFO Compact & Traditional Bell)", "category": "Industrial High Bays", "imageSrc": "/catalog_pages/outdoor/page_11.jpg", "summary": "50W-180W traditional bell reflector high bays and 100W/150W/200W UFO circular die-cast high bays with 120° optics for factory floors.", "productSlug": "takeway-industrial-ufo-high-bay-light"},
  {"pageNum": 12, "catalogPageNum": 10, "title": "Municipal Street Light Series (Slim & Dolphin Aerodynamic)", "category": "Roadway & Street Lights", "imageSrc": "/catalog_pages/outdoor/page_12.jpg", "summary": "24W-100W slim street lights and 30W-200W aerodynamic dolphin roadway luminaires with up to 216 LEDs, batwing distribution, and 40-60mm pole mounts.", "productSlug": "takeway-dolphin-street-light-series"},
  {"pageNum": 13, "catalogPageNum": 11, "title": "Industrial Tri-Proof & High-Power Batten Tubes (IP65)", "category": "Industrial High Bays", "imageSrc": "/catalog_pages/outdoor/page_13.jpg", "summary": "10W-36W IP65 tri-proof tubes, T5 single/double reflector tubes, office flat/jumbo tubes, and T8 square wall luminaires up to 100W.", "productSlug": "takeway-tri-proof-industrial-tube-light"},
  {"pageNum": 14, "catalogPageNum": 12, "title": "Outdoor Waterproof Drivers (BIS) & Surge Protection Devices", "category": "Electrical Accessories", "imageSrc": "/catalog_pages/outdoor/page_14.jpg", "summary": "12W-200W constant-current IP65 XG-Power drivers with BIS certification, alongside 10kV & 20kV 440V surge suppressors for Indian electrical grids."},
  {"pageNum": 15, "title": "Dolphin Highway Street Luminaire Gallery", "category": "Roadway & Street Lights", "imageSrc": "/catalog_pages/outdoor/page_15.jpg", "summary": "Complete visual family lineup of Takeway Dolphin roadway fixtures from 30W single-lens to 200W 4-lens municipal highway luminaires.", "productSlug": "takeway-dolphin-street-light-series"},
  {"pageNum": 16, "title": "Outdoor Catalog Back Cover & Contact Information", "category": "Introduction", "imageSrc": "/catalog_pages/outdoor/page_16.jpg", "summary": "Takeway LED corporate contact, factory address at Gopalpura Bypass Road Jaipur, and customer care lines."},
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. SOLAR COOLER BENCH CATALOGUE (12 pages)
// ─────────────────────────────────────────────────────────────────────────────
const SOLAR_COOLER_PAGES: CatalogPageMeta[] = [
  {"pageNum": 1, "title": "Cover Page: Smart Solar Spaces - Aasma Enterprises", "category": "Introduction", "imageSrc": "/catalog_pages/solar_cooler/page_1.jpg", "summary": "Transforming outdoor public infrastructure through modern sustainable solar innovations. Featured installation: Town Park, Panchkula."},
  {"pageNum": 2, "catalogPageNum": 2, "title": "Novaboard & Smart Solar Pillar (120W Solar Hub)", "category": "Smart Solar Spaces", "imageSrc": "/catalog_pages/solar_cooler/page_2.jpg", "summary": "Novaboard illuminated display with integrated dustbin & 120W panel; Smart Pillar with 2x USB chargers, planter, and 10ft height.", "productSlug": "takeway-smart-solar-novaboard-pillar"},
  {"pageNum": 3, "catalogPageNum": 3, "title": "Smart Solar Garden Lounge & Shaded Utility Pod", "category": "Smart Solar Spaces", "imageSrc": "/catalog_pages/solar_cooler/page_3.jpg", "summary": "4-person solar lounge with Qi wireless charging, 2 USB ports, auto LED lights, integrated planter, and weather-protected utility pod.", "productSlug": "takeway-smart-solar-garden-lounge-utility-pod"},
  {"pageNum": 4, "catalogPageNum": 4, "title": "Smart Solar Patio Umbrella & Community Garden Hut", "category": "Smart Solar Spaces", "imageSrc": "/catalog_pages/solar_cooler/page_4.jpg", "summary": "500W solar patio umbrella with Wi-Fi, CCTV, sound system, and 12-person shaded community garden hut with RCC tilework.", "productSlug": "takeway-smart-solar-patio-umbrella-hut"},
  {"pageNum": 5, "catalogPageNum": 5, "title": "Smart Solar Bus Stop & Hybrid EV Charging Station", "category": "Smart Solar Spaces", "imageSrc": "/catalog_pages/solar_cooler/page_5.jpg", "summary": "1350W solar bus stop with 32-inch digital AV screen & 14 seats, alongside 11kW solar hybrid EV charging station with dual 120kW DC guns.", "productSlug": "takeway-smart-solar-transit-bus-stop"},
  {"pageNum": 6, "catalogPageNum": 6, "title": "Modular Solar Pre-Fab Eco Cooling Cabins (480W Solar)", "category": "Smart Solar Spaces", "imageSrc": "/catalog_pages/solar_cooler/page_6.jpg", "summary": "4ft x 4ft x 7ft insulated modular security, medical clinic, and commercial kiosk cabin with 480W solar roof and LFP power pack.", "productSlug": "takeway-modular-solar-prefab-security-cabin"},
  {"pageNum": 7, "title": "Security Engineering & 1-Year Comprehensive Warranty", "category": "Specifications", "imageSrc": "/catalog_pages/solar_cooler/page_7.jpg", "summary": "Durable all-weather sealed joints, battery backup architecture, standard OEM warranty, and extended AMC care packages."},
  {"pageNum": 8, "title": "Pan-India Project Execution Portfolio", "category": "Portfolio", "imageSrc": "/catalog_pages/solar_cooler/page_8.jpg", "summary": "Live deployment showcase: Naina Devi Mandir Bilaspur, Ram Mandir Ayodhya, Mansa Devi Panchkula, DIHAR DRDO Leh Ladakh, Yamunanagar Hospital."},
  {"pageNum": 9, "title": "Distinguished Institutional & Municipal Clients", "category": "Portfolio", "imageSrc": "/catalog_pages/solar_cooler/page_9.jpg", "summary": "Institutional deployments for Ministry of New and Renewable Energy (MNRE New Delhi), IHQ New Delhi, DC Office Mohali, and Palassio Mall."},
  {"pageNum": 10, "title": "On-Ground Environmental Impact Metrics", "category": "Portfolio", "imageSrc": "/catalog_pages/solar_cooler/page_10.jpg", "summary": "70+ successful municipal installations, 1,500,000+ public visitors served, and over 900+ tonnes of carbon CO2 mitigated."},
  {"pageNum": 11, "title": "Corporate Mission & UN Sustainable Development Goals", "category": "Introduction", "imageSrc": "/catalog_pages/solar_cooler/page_11.jpg", "summary": "Creating resilient, energy-efficient public communities fulfilling Social, Economic, and Environmental UN SDGs."},
  {"pageNum": 12, "title": "National Awards, Accreditations & Leadership Testimonials", "category": "Introduction", "imageSrc": "/catalog_pages/solar_cooler/page_12.jpg", "summary": "Presented to Hon. Prime Minister Narendra Modi at RE-Invest 2024; Top 10 Solar Startups award by MNRE & International Solar Alliance (ISA)."},
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. ARMY CAMP BROCHURE (16 pages)
// ─────────────────────────────────────────────────────────────────────────────
const ARMY_CAMP_PAGES: CatalogPageMeta[] = [
  {"pageNum": 1, "title": "Cover Page: Smart Solar Spaces for Indian Army Deployments", "category": "Introduction", "imageSrc": "/catalog_pages/army_camp/page_1.jpg", "summary": "Specialized off-grid tactical solar infrastructure for Indian Armed Forces. Deployed at IHQ of MOD (Army) Camp, New Delhi."},
  {"pageNum": 2, "title": "Sustainable Solar Stations & Field Force Safety", "category": "Introduction", "imageSrc": "/catalog_pages/army_camp/page_2.jpg", "summary": "Off-grid security, remote camp comfort, emergency communication, and carbon mitigation in forward military cantonments."},
  {"pageNum": 3, "catalogPageNum": 3, "title": "Pre-Fab Modular Solar Sentry Checkpost / Guard Post", "category": "Defence & Camp Solutions", "imageSrc": "/catalog_pages/army_camp/page_3.jpg", "summary": "480W solar panel, LFP battery, LED tactical lights, fan, chair, observation windows, and laptop port. Rapid 2-hour field assembly.", "productSlug": "takeway-army-modular-solar-sentry-checkpost"},
  {"pageNum": 4, "catalogPageNum": 4, "title": "Modular Pre-Fab Cabins for Field Accommodation", "category": "Defence & Camp Solutions", "imageSrc": "/catalog_pages/army_camp/page_4.jpg", "summary": "Customizable military cabins for sentry posts, emergency medical clinics, washroom units, and bunk bed field sleeping shelters.", "productSlug": "takeway-army-modular-solar-sentry-checkpost"},
  {"pageNum": 5, "catalogPageNum": 5, "title": "Infrastructure Solar Retrofit Conversion Kits (Plug-and-Play)", "category": "Defence & Camp Solutions", "imageSrc": "/catalog_pages/army_camp/page_5.jpg", "summary": "Converting existing military checkposts into solar posts with 500W-1kW panel, CCTV, Wi-Fi, SOS alert, and laptop chargers.", "productSlug": "takeway-army-solar-infrastructure-conversion-kit"},
  {"pageNum": 6, "catalogPageNum": 6, "title": "Portable Hybrid Solar Inverter / DG Battery Set (1kVA - 5kVA)", "category": "Defence & Camp Solutions", "imageSrc": "/catalog_pages/army_camp/page_6.jpg", "summary": "Lightweight mobile hybrid power on wheels for BRO & MES field deployments. Dual solar/DG charging, LFP cells, full charge in 4-5 hours.", "productSlug": "takeway-army-hybrid-solar-inverter-dgset"},
  {"pageNum": 7, "title": "Garden Lounge & Utility Pod for Defence Cantonments", "category": "Smart Solar Spaces", "imageSrc": "/catalog_pages/army_camp/page_7.jpg", "summary": "Solar lounge hubs and weather-shaded utility charging stations for officers mess, training centers, and cantonment gardens.", "productSlug": "takeway-smart-solar-garden-lounge-utility-pod"},
  {"pageNum": 8, "title": "Solar Patio Umbrella & Cantonment Garden Huts", "category": "Smart Solar Spaces", "imageSrc": "/catalog_pages/army_camp/page_8.jpg", "summary": "500W solar patio umbrellas with Wi-Fi, CCTV, and 12-person seating structures for army public gathering spaces.", "productSlug": "takeway-smart-solar-patio-umbrella-hut"},
  {"pageNum": 9, "title": "Solar Transit Bus Shelters & Cantonment EV Hubs", "category": "Smart Solar Spaces", "imageSrc": "/catalog_pages/army_camp/page_9.jpg", "summary": "1350W solar bus stop with 32-inch passenger information screen and integrated military vehicle charging points.", "productSlug": "takeway-smart-solar-transit-bus-stop"},
  {"pageNum": 10, "title": "Three-Layered Security Architecture & Data Protection", "category": "Specifications", "imageSrc": "/catalog_pages/army_camp/page_10.jpg", "summary": "Tamper-proof fasteners, reinforced locking hardware, and hardware data blockers preventing cyber/data theft during device charging."},
  {"pageNum": 11, "title": "Defence AMC Care, Cleaning & Maintenance Packages", "category": "Specifications", "imageSrc": "/catalog_pages/army_camp/page_11.jpg", "summary": "Comprehensive maintenance packages for military bases, quarterly inspection schedules, and field spare replacements."},
  {"pageNum": 12, "title": "Field Project Portfolio & High-Altitude Installations", "category": "Portfolio", "imageSrc": "/catalog_pages/army_camp/page_12.jpg", "summary": "Verified installations at DIHAR DRDO Leh Ladakh, IHQ of MOD New Delhi, Tau Devi Lal Stadium, and Ram Mandir Ayodhya."},
  {"pageNum": 13, "title": "Military & Government Client References", "category": "Portfolio", "imageSrc": "/catalog_pages/army_camp/page_13.jpg", "summary": "Supplied to IHQ of MOD (Army), MNRE New Delhi, DRDO, DC Office Mohali, and municipal authorities."},
  {"pageNum": 14, "title": "Carbon Mitigation & Environmental Track Record", "category": "Portfolio", "imageSrc": "/catalog_pages/army_camp/page_14.jpg", "summary": "70+ deployments across India, 900+ tonnes of carbon mitigated, accelerating the armed forces clean energy transition."},
  {"pageNum": 15, "title": "Aasma Enterprises / Envinova Smartech Defence Profile", "category": "Introduction", "imageSrc": "/catalog_pages/army_camp/page_15.jpg", "summary": "Pioneering smart solar-powered outdoor infrastructure for civil and defence applications across challenging terrains."},
  {"pageNum": 16, "title": "Testimonials, Awards & Defence Desk Contact", "category": "Introduction", "imageSrc": "/catalog_pages/army_camp/page_16.jpg", "summary": "Top 10 Solar Innovation startups of India awarded by MNRE & ISA; Direct contact lines for defence tenders and inquiries."},
];

// ─────────────────────────────────────────────────────────────────────────────
// MASTER REGISTRY
// ─────────────────────────────────────────────────────────────────────────────
export const CATALOG_REGISTRY: CatalogDefinition[] = [
  {
    id: 'solar',
    name: 'Solar Catalogue 2026',
    subtitle: 'Complete Solar Lighting & Clean Energy Systems',
    description: 'The official 50-page master catalogue covering solar street lights, CCTV lights, ESS inverters, solar panels, floodlights, high bays, and landscape luminaires.',
    pdfUrl: '/catalogs/TAKEWAY_Solar_Catalogue_2026.pdf',
    pdfLabel: 'Download Solar Catalogue (63 MB)',
    pageCount: 50,
    color: 'cyan',
    icon: '☀️',
    pages: SOLAR_PAGES,
  },
  {
    id: 'indoor',
    name: 'Indoor Catalogue',
    subtitle: 'Commercial & Residential Indoor LED Luminaires',
    description: 'Comprehensive 30-page indoor lighting catalogue featuring magnetic tracks, hanging linears, backlit panels, COB downlights, and neon profiles.',
    pdfUrl: '/catalogs/TAKEWAY_Indoor_Catalogue.pdf',
    pdfLabel: 'Download Indoor Catalogue (11 MB)',
    pageCount: 30,
    color: 'amber',
    icon: '💡',
    pages: INDOOR_PAGES,
  },
  {
    id: 'outdoor',
    name: 'Outdoor Catalogue',
    subtitle: 'Professional Outdoor & Roadway LED Solutions',
    description: '16-page outdoor catalogue covering wall washers, burial uplights, stadium tower projectors, high bays, and dolphin street lights.',
    pdfUrl: '/catalogs/TAKEWAY_Outdoor_Catalogue.pdf',
    pdfLabel: 'Download Outdoor Catalogue (9 MB)',
    pageCount: 16,
    color: 'emerald',
    icon: '🏙️',
    pages: OUTDOOR_PAGES,
  },
  {
    id: 'solar_cooler',
    name: 'Solar Cooler Bench',
    subtitle: 'Smart Solar-Powered Outdoor Benches & Shelters',
    description: '12-page brochure for Takeway innovative solar benches, garden lounges, shaded huts, bus stops, and EV charging kiosks.',
    pdfUrl: '/catalogs/SOLAR_Cooler_Bench_Catalogue.pdf',
    pdfLabel: 'Download Solar Cooler Bench Catalogue (1.7 MB)',
    pageCount: 12,
    color: 'violet',
    icon: '🌿',
    pages: SOLAR_COOLER_PAGES,
  },
  {
    id: 'army_camp',
    name: 'Solar Camp Brochure',
    subtitle: 'Off-Grid Tactical Solar Solutions for Indian Army',
    description: '16-page specialized brochure for Indian Armed Forces field deployments — pre-fab sentry checkposts, conversion kits, and hybrid DG mobile power.',
    pdfUrl: '/catalogs/Solar_Camp_Brochure_Indian_Army.pdf',
    pdfLabel: 'Download Army Camp Brochure (2 MB)',
    pageCount: 16,
    color: 'rose',
    icon: '🪖',
    pages: ARMY_CAMP_PAGES,
  },
];

export function getCatalogById(id: string): CatalogDefinition | undefined {
  return CATALOG_REGISTRY.find((c) => c.id === id);
}
