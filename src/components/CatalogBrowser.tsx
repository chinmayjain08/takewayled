'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Download,
  Eye,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Layers,
  ArrowRight,
  MessageCircle,
  FileText,
  Search,
  BookOpen,
  LayoutGrid,
  CheckCircle2
} from 'lucide-react';

export interface CatalogPageMeta {
  pageNum: number;
  catalogPageNum?: number;
  title: string;
  category: string;
  imageSrc: string;
  summary: string;
  productSlug?: string;
}

const ALL_PAGES: CatalogPageMeta[] = [
  {
    pageNum: 1,
    title: 'Cover Page: Takeway LED Solar Catalogue 2026',
    category: 'Introduction',
    imageSrc: '/catalog_pages/page_1.jpg',
    summary: 'Official 2026 Solar Lighting & Clean Energy Systems Catalogue by Aasma Enterprises, Jaipur.'
  },
  {
    pageNum: 2,
    title: 'About Us & Corporate Profile',
    category: 'Introduction',
    imageSrc: '/catalog_pages/page_2.jpg',
    summary: 'Takeway LED established in 2009. Precision engineering, sustainable commercial lighting, and pan-India reach.'
  },
  {
    pageNum: 3,
    title: 'Our Products Range (Official Table of Contents)',
    category: 'Introduction',
    imageSrc: '/catalog_pages/page_3.jpg',
    summary: 'Master category index covering ESS Solar Inverters, Solar Panels, CCTV, Street Lights, High Bays, and Garden Luminaires.'
  },
  {
    pageNum: 4,
    catalogPageNum: 1,
    title: 'ESS Solar Inverters - ABS Body (600W & 1200W)',
    category: 'Solar Inverters & ESS',
    imageSrc: '/catalog_pages/page_4.jpg',
    summary: 'Model ABS-600W-576WH & ABS-1200W-1152WH. Pure sine wave AC output, LiFePO4 cells, XT60 fast charging.',
    productSlug: 'takeway-abs-solar-inverter-1200w'
  },
  {
    pageNum: 5,
    catalogPageNum: 2,
    title: 'ESS Solar Inverters - Metal Body (200W, 300W, 600W)',
    category: 'Solar Inverters & ESS',
    imageSrc: '/catalog_pages/page_5.jpg',
    summary: 'Model MB-200W, MB-300W, MB-600W. Heavy-duty metal casing, 192Wh-640Wh LiFePO4 battery, built-in 5W worklight.',
    productSlug: 'takeway-metal-body-solar-inverter-600w'
  },
  {
    pageNum: 6,
    catalogPageNum: 3,
    title: 'Monocrystalline Solar PV Modules (40W - 165W)',
    category: 'Solar Panels',
    imageSrc: '/catalog_pages/page_6.jpg',
    summary: 'High-efficiency 23% Class-A monocrystalline PV modules: PV1240, PV1250, PV1275, PV12165 with IP65 dual bypass junction box.',
    productSlug: 'takeway-mono-solar-panels-pv-series'
  },
  {
    pageNum: 7,
    catalogPageNum: 4,
    title: 'Portable Solar Mobile Fast Charger 15W',
    category: 'Solar Panels',
    imageSrc: '/catalog_pages/page_7.jpg',
    summary: 'Model SMC-15W. 9V 15W Monocrystalline folding solar charger with 3x USB-A, 1x Type-C PD, multi-device cable.',
    productSlug: 'takeway-solar-mobile-charger-smc-15w'
  },
  {
    pageNum: 8,
    catalogPageNum: 5,
    title: 'Solar Rechargeable Pedestal Fan 16"',
    category: 'Solar Panels',
    imageSrc: '/catalog_pages/page_8.jpg',
    summary: 'Model SOLAR-FAN-FS578-WH. 16-inch pedestal fan, 9V 12W solar panel, 7.4V 5.2Ah lithium battery, 3-speed remote.',
    productSlug: 'takeway-solar-rechargeable-pedestal-fan'
  },
  {
    pageNum: 9,
    catalogPageNum: 6,
    title: 'Solar CCTV Cameras - 4G Single & Dual Lens',
    category: 'Solar CCTV Lights',
    imageSrc: '/catalog_pages/page_9.jpg',
    summary: 'Model SOLAR-XG06-4G-DUAL & SOLAR-XG06-4G. FHD 5MP IR dual camera, 360° PTZ rotation, 5-7 days backup, V380 Pro.',
    productSlug: 'takeway-4g-dual-lens-solar-cctv-camera'
  },
  {
    pageNum: 10,
    catalogPageNum: 7,
    title: 'Solar CCTV Flood Lights with Zoom Camera 4G/WiFi',
    category: 'Solar CCTV Lights',
    imageSrc: '/catalog_pages/page_10.jpg',
    summary: 'Model SOLAR CCTV-T845REAL-4G. Optical zoom FHD camera with high-lumen solar floodlight and 256GB SD card support.',
    productSlug: 'takeway-solar-cctv-5real-zoom-camera'
  },
  {
    pageNum: 11,
    catalogPageNum: 8,
    title: 'LCD Solar CCTV Flood Light 30W / 150W LED',
    category: 'Solar CCTV Lights',
    imageSrc: '/catalog_pages/page_11.jpg',
    summary: 'Model SOLAR-FL-CCTV-30. 58 Pcs 5054 LED, 5V 30W Mono panel, 3.2V 25Ah LiFePO4 battery, 4G FHD camera.',
    productSlug: 'takeway-solar-cctv-flood-light-30w'
  },
  {
    pageNum: 12,
    catalogPageNum: 9,
    title: 'LCD Solar CCTV Street Light 90W (Fixed Lens)',
    category: 'Solar CCTV Lights',
    imageSrc: '/catalog_pages/page_12.jpg',
    summary: 'Model SOLAR-SL-CCTV-15-1LENS-4G NO PTZ. 201 LEDs, 5V 16W panel, 3.2V 12Ah battery, motion radar sensor.',
    productSlug: 'takeway-solar-cctv-street-light-90w-fixed'
  },
  {
    pageNum: 13,
    catalogPageNum: 10,
    title: 'Solar CCTV Street Light 90W PTZ Live Stream',
    category: 'Solar CCTV Lights',
    imageSrc: '/catalog_pages/page_13.jpg',
    summary: 'Model SOLAR-SL-CCTV-20-1LENS. Combined 90W street luminaire and 4G HD PTZ security camera with 3.2V 20Ah LiFePO4.',
    productSlug: 'takeway-solar-cctv-street-light-90w'
  },
  {
    pageNum: 14,
    catalogPageNum: 11,
    title: 'Panoramic Triple-CCTV 4G Solar Street Luminaire',
    category: 'Solar CCTV Lights',
    imageSrc: '/catalog_pages/page_14.jpg',
    summary: 'Model SOLAR-SL-CCTV-20-4LENS. 360° panoramic multi-angle surveillance with 3+1 lenses (15MP total), 180 Pcs LEDs.',
    productSlug: 'takeway-panoramic-triple-cctv-solar-street-light'
  },
  {
    pageNum: 15,
    catalogPageNum: 12,
    title: 'Metal Body All-in-One Solar Street Light 80W',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_15.jpg',
    summary: 'Model TAKEWAY-METAL80. 180 LED 5054, 5V 85W Mono panel, 3.2V 80Ah LiFePO4 battery, adjustable mounting bracket.',
    productSlug: 'takeway-metal-all-in-one-solar-street-light-80w'
  },
  {
    pageNum: 16,
    catalogPageNum: 13,
    title: 'Heavy-Duty Metal All-in-One Solar Street Light (80W / 100W / 120W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_16.jpg',
    summary: 'Models SL-INT-METAL80 (80W), METAL100 (100W), and METAL120 (120W). Architectural aluminum body with 5V Mono panel, 3.2V 80Ah-120Ah LiFePO4, up to 300 Pcs 5054 LEDs.',
    productSlug: 'takeway-metal-all-in-one-solar-street-light-120w'
  },
  {
    pageNum: 17,
    catalogPageNum: 14,
    title: 'High-Power Optical Lens Solar Street Light HP Series (60W / 80W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_17.jpg',
    summary: 'Models TAKEWAY-HP60 (60W) and HP80 (80W). 8-Lens optical batwing distribution luminaire with up to 432 Pcs 1W LEDs, 5V 85W panel, 3.2V 80Ah LiFePO4.',
    productSlug: 'takeway-high-power-optical-lens-street-light-hp80'
  },
  {
    pageNum: 18,
    catalogPageNum: 15,
    title: 'Semi-Integrated Solar Street Light Series (12W - 50W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_18.jpg',
    summary: 'Models TAKEWAY-SEMI-12R (12W), 20R (20W), 30R (30W), 30R-LENS (30W), and 50R (50W). Roadway luminaires with up to 766 LEDs, 5V Mono panel, 30Ah-50Ah LiFePO4.',
    productSlug: 'takeway-semi-integrated-solar-street-light-50w'
  },
  {
    pageNum: 19,
    catalogPageNum: 16,
    title: 'Apple Series All-in-One Solar Street Light (40W / 50W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_19.jpg',
    summary: 'Models SLSOLARINT-APPLE40 (40W) and APPLE50 (50W). Aerodynamic Apple curved frame, 576/864 LEDs, 42Ah/56Ah LiFePO4, radar dimming.',
    productSlug: 'takeway-apple-series-solar-street-light-40w'
  },
  {
    pageNum: 20,
    catalogPageNum: 17,
    title: 'KING Series All-in-One Solar Street Light (35W / 45W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_20.jpg',
    summary: 'Models SLSOLARINT-KING35 (35W) and KING45 (45W). Commercial-grade luminaires with up to 732 Pcs 0.5W LEDs, 5V Mono panel, 3.2V 30Ah LiFePO4, radar motion sensor.',
    productSlug: 'takeway-king-series-solar-street-light-45w'
  },
  {
    pageNum: 21,
    catalogPageNum: 18,
    title: 'AERO PLUS Aerodynamic Solar Street Light Series (25W - 35W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_21.jpg',
    summary: 'Models SL-AEROPLUS-25 (25W), 30 (30W), and 35 (35W). Aerodynamic low-drag wind-resistant luminaires with up to 1152 Pcs 5730 LEDs, 5V 34W panel, 30Ah LiFePO4.',
    productSlug: 'takeway-aero-plus-solar-street-light-35w'
  },
  {
    pageNum: 22,
    catalogPageNum: 19,
    title: 'AERO Series All-in-One Solar Street Light Series (25W - 35W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_22.jpg',
    summary: 'Models SL-AERO-INT-25 (25W), 30 (30W), and 35 (35W). Slimline AERO fixtures with 480-800 LEDs, 5V Mono panel, 3.2V 20A-30A LiFePO4, 2-night reserve.',
    productSlug: 'takeway-aero-series-solar-street-light-35w'
  },
  {
    pageNum: 23,
    catalogPageNum: 20,
    title: 'Optical Lens Solar Street Light Series (25W / 35W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_23.jpg',
    summary: 'Models SLSOLARINT-2LENS-25R (25W) and 3LENS-35R (35W). Optical lens fixtures with 108/162 Pcs 2W LEDs, 5V 26W/36W Mono panel, 3.2V 20Ah/30Ah LiFePO4.',
    productSlug: 'takeway-optical-lens-solar-street-light-35w'
  },
  {
    pageNum: 24,
    catalogPageNum: 21,
    title: 'SPACE Series 12-Lens Solar Street Luminaire (25W / 35W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_24.jpg',
    summary: 'Models SL-INT-SPACE25 (25W) and SPACE35 (35W). 12 precision optical cluster lenses, 72 Pcs 5054 LEDs, 5V 30W Mono panel, 3.2V 30Ah LiFePO4.',
    productSlug: 'takeway-space-series-solar-street-light-35w'
  },
  {
    pageNum: 25,
    catalogPageNum: 22,
    title: 'Tilt-Adjustable Panel Solar Street Light (10W / 15W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_25.jpg',
    summary: 'Models SL-INT-ADJ-10 (10W) and ADJ-15 (15W). Tilt-adjustable monocrystalline panel for optimal seasonal sun alignment, up to 120 LEDs, 3.2V 10Ah LiFePO4.',
    productSlug: 'takeway-adjustable-solar-street-light-15w'
  },
  {
    pageNum: 26,
    catalogPageNum: 23,
    title: 'STAR Series Solar Street Light Series (5W - 15W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_26.jpg',
    summary: 'Models SLSOLARINT05R-STAR (5W), 10R-STAR (10W), and 15R-STAR (15W). 1, 2 & 3 Window optical array luminaires with Epistar LEDs and remote dimming.',
    productSlug: 'takeway-star-series-solar-street-light-15w'
  },
  {
    pageNum: 27,
    catalogPageNum: 24,
    title: 'Double Body Solar Street Light Series (5W - 25W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_27.jpg',
    summary: 'Models SLSOLARINT05R (5W) to 25R6W (25W). 1 to 6 window luminaires, up to 480 LED 5730 Epistar, 5V Mono panel, 3.2V 25A LiFePO4.',
    productSlug: 'takeway-double-body-solar-street-light-25w'
  },
  {
    pageNum: 28,
    catalogPageNum: 25,
    title: 'Single Body Solar Street Light Series (5W - 20W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_28.jpg',
    summary: 'Models SLSOLARINT05R-SB (5W) to 20R-SB (20W). 1 to 4 window design with up to 320 Epistar LEDs, dawn-to-dusk automated controller.',
    productSlug: 'takeway-single-body-solar-street-light-20w'
  },
  {
    pageNum: 29,
    catalogPageNum: 26,
    title: 'Mini Solar Pathway & Wall Street Light Series (2W - 9W)',
    category: 'Solar Street Lights',
    imageSrc: '/catalog_pages/page_29.jpg',
    summary: 'Models SOLAR-NEW-MINI02 to 06 (2W, 4W, 6W) & SLSOLAR-MINI03 to 09 (3W, 6W, 9W). Compact pathway fixtures with wall mounting brackets.',
    productSlug: 'takeway-mini-solar-street-light-9w'
  },
  {
    pageNum: 30,
    catalogPageNum: 27,
    title: 'Industrial Solar High Bay UFO Light 35W',
    category: 'Solar High Bays',
    imageSrc: '/catalog_pages/page_30.jpg',
    summary: 'Model SOLAR-HIGHBAY-35R. 290mm circular UFO luminaire with 60 Pcs 5054 LEDs, external 5V 35W Mono panel, 3.2V 30Ah LiFePO4.',
    productSlug: 'takeway-industrial-solar-highbay-ufo-35w'
  },
  {
    pageNum: 31,
    catalogPageNum: 28,
    title: 'LENS Model Commercial Solar Flood Light Series (20W / 30W)',
    category: 'Solar Floodlights',
    imageSrc: '/catalog_pages/page_31.jpg',
    summary: 'Models FLSOLAR-LENS20 (20W) and LENS30 (30W). Heavy-duty die-cast flood projectors with up to 400 Pcs 2835 LEDs, optical micro-lenses, 5V Poly panel.',
    productSlug: 'takeway-lens-solar-flood-light-30w'
  },
  {
    pageNum: 32,
    catalogPageNum: 29,
    title: 'SKY LIGHT Commercial Solar Floodlight Series (20W / 30W)',
    category: 'Solar Floodlights',
    imageSrc: '/catalog_pages/page_32.jpg',
    summary: 'Models FLSOLAR-CITY20 / SKY20 (20W) and SKY30 (30W). Premium perimeter floodlights with up to 416 LEDs, 5V panel, 3.2V 25Ah LiFePO4.',
    productSlug: 'takeway-sky-light-solar-floodlight-30w'
  },
  {
    pageNum: 33,
    catalogPageNum: 30,
    title: 'Foldable Solar Flood Light Series (10W / 15W)',
    category: 'Solar Floodlights',
    imageSrc: '/catalog_pages/page_33.jpg',
    summary: 'Models FLSOLAR-FOLD10 (10W) & FOLD15 (15W). Integrated folding solar panel floodlights with dual white LEDs (CW+WW), auto on/off.',
    productSlug: 'takeway-foldable-solar-flood-light-15w'
  },
  {
    pageNum: 34,
    catalogPageNum: 31,
    title: '360° Solar UFO Garden Post Light 15W RGB+White',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_34.jpg',
    summary: 'Model GARDENSOLAR15R-RGB. Circular UFO radial pathway luminaire with 824 Pcs 5730 LEDs, 76mm pole mount.',
    productSlug: 'takeway-solar-ufo-garden-post-light-15w-rgb'
  },
  {
    pageNum: 35,
    catalogPageNum: 32,
    title: 'Multi-Function Portable Solar Camping Light Series (30W / 50W / 100W)',
    category: 'Portable Work Lights',
    imageSrc: '/catalog_pages/page_35.jpg',
    summary: 'Models EMSOLARFL30 (30W), FL50 (50W), and FL100 (100W). Rugged jobsite luminaires with up to 180 LEDs, solar panel, LiFePO4, power bank & SOS.',
    productSlug: 'takeway-portable-solar-camping-light-100w'
  },
  {
    pageNum: 36,
    catalogPageNum: 33,
    title: 'Solar Emergency Camping Lantern Series (with 3-Speed Fan / Reflector)',
    category: 'Portable Work Lights',
    imageSrc: '/catalog_pages/page_36.jpg',
    summary: 'Models EM-4REF-CP100-3IN1-FAN. 288 LEDs, 3.7V 8000mAh battery, built-in 3-speed cooling fan, USB-C fast charging.',
    productSlug: 'takeway-emergency-camping-light-with-fan-100w'
  },
  {
    pageNum: 37,
    catalogPageNum: 34,
    title: 'Diamond Architectural Solar Garden Bollard Series (Standard & Mini)',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_37.jpg',
    summary: 'Models SOLAR-BOLLARD-BIG-3IN1+RGB (750mm) and MINI (450mm). Architectural diamond prism bollard with 5V panel, multi-color RF remote.',
    productSlug: 'takeway-big-diamond-solar-garden-bollard-10w'
  },
  {
    pageNum: 38,
    catalogPageNum: 35,
    title: 'CUBE & SECRET Vintage Spiral Filament Solar Bollards',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_38.jpg',
    summary: 'Models SOLAR-BOLLARD-CUBE & SECRET. 860mm/890mm floor-mount landscape bollards with vintage tungsten filament LED.',
    productSlug: 'takeway-cube-secret-solar-bollards-tungsten'
  },
  {
    pageNum: 39,
    catalogPageNum: 36,
    title: 'Diamond Pillar & Gate Solar Light Series (Standard & Mini)',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_39.jpg',
    summary: 'Models SOLAR-GATE-BIG-3IN1+RGB (185x185mm) and MINI (130x130mm). Square gate and boundary wall pillar lights with crystalline glass optic.',
    productSlug: 'takeway-diamond-pillar-gate-light-10w'
  },
  {
    pageNum: 40,
    catalogPageNum: 37,
    title: 'Vintage Gate & Pillar Lantern Landscape Showcase',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_40.jpg',
    summary: 'Architectural installation showcase for CUBE and SECRET vintage tungsten pillar fixtures in luxury outdoor gardens.',
    productSlug: 'takeway-vintage-gate-pillar-light-cube-secret'
  },
  {
    pageNum: 41,
    catalogPageNum: 38,
    title: 'Vintage Gate & Pillar Light CUBE & SECRET Specs',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_41.jpg',
    summary: 'Model SOLAR-GATE-SECRET-WW & CUBE-WW. 5V 2W-3W Mono panels, 3.7V 2000mAh battery, Warm White 2700K tungsten style.',
    productSlug: 'takeway-vintage-gate-pillar-light-cube-secret'
  },
  {
    pageNum: 42,
    catalogPageNum: 39,
    title: 'Vintage Shadow Lantern Landscape Architectural View',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_42.jpg',
    summary: 'Installation showcase for fluted cone shadow art lantern illuminating pathway stone walkways and exterior landscaping.',
    productSlug: 'takeway-shadow-lantern-solar-lawn-wall-light'
  },
  {
    pageNum: 43,
    catalogPageNum: 40,
    title: 'Vintage Shadow Lantern Solar Lawn & Wall Light Specs',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_43.jpg',
    summary: 'Model SOLAR-LAWN-SHADOW-WW. Designer fluted cone hanging lantern creating dramatic shadow patterns, 5V 2W Mono panel.',
    productSlug: 'takeway-shadow-lantern-solar-lawn-wall-light'
  },
  {
    pageNum: 44,
    catalogPageNum: 41,
    title: 'Expandable Height Multi-Use Solar Lawn Light 5W',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_44.jpg',
    summary: 'Model SOLAR-LAWN-2WAY-WW. Modular lawn light with expandable height (275mm to 700mm) with ground spike and floor flange.',
    productSlug: 'takeway-expandable-height-solar-lawn-light-5w'
  },
  {
    pageNum: 45,
    catalogPageNum: 42,
    title: 'Solar Flame Torch Lights (Dancing Flame Tiki 5W)',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_45.jpg',
    summary: 'Model SOLARFLAME. 780mm garden tiki torch with 96 Pcs LEDs simulating realistic flickering dancing fire, flame/breathing modes.',
    productSlug: 'takeway-solar-flame-torch-lights'
  },
  {
    pageNum: 46,
    catalogPageNum: 43,
    title: 'Modular Solar Wall Washer Grazer (Infinite Interlocking)',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_46.jpg',
    summary: 'Model SOLAR-WALLWASHER-4LED/UP-WW. 370mm linear wall washer with snap-on connection for seamless infinite runs, 180° tilt.',
    productSlug: 'takeway-modular-solar-wall-washer-light'
  },
  {
    pageNum: 47,
    catalogPageNum: 44,
    title: 'Architectural Facade Solar Wall Light Series (2+2 / 3+3 / 6+6 Beams)',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_47.jpg',
    summary: 'Models SOLAR-WL-606 & 6WAY. Modern geometric bi-directional sconces casting dramatic light rays across exterior building facades.',
    productSlug: 'takeway-architectural-solar-facade-wall-light'
  },
  {
    pageNum: 48,
    catalogPageNum: 45,
    title: 'Solar Garden Spike Lights Application Showcase',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_48.jpg',
    summary: 'Garden accent & walkway spotlighting showcase for lens and square optical solar ground spikes.',
    productSlug: 'takeway-solar-garden-spike-lights-lens'
  },
  {
    pageNum: 49,
    catalogPageNum: 46,
    title: 'Solar Garden Spike Lights (Lens & Square Optic)',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_49.jpg',
    summary: 'Model SOLAR-SPIKE-LENS-WW & RGB. 18 LED 2835 spot luminaire with adjustable solar head, ground spike or wall bracket.',
    productSlug: 'takeway-solar-garden-spike-lights-lens'
  },
  {
    pageNum: 50,
    catalogPageNum: 47,
    title: 'Mushroom Umbrella & Crystal Landscape Spike Lights',
    category: 'Solar Post & Landscape',
    imageSrc: '/catalog_pages/page_50.jpg',
    summary: 'Model SOLAR-SPIKE-UMBRELLA-WW (6 Pcs set) & SOLAR-SPIKE-CRYSTAL-WW square pathway lights with IP65 waterproofing.',
    productSlug: 'takeway-solar-spike-mushroom-umbrella-crystal'
  }
];

export default function CatalogBrowser() {
  const searchParams = useSearchParams();
  const initialPage = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;

  // View state: 'reader' (single continuous catalog view) or 'grid' (all pages index)
  const [viewMode, setViewMode] = useState<'reader' | 'grid'>('reader');
  const [currentPageNum, setCurrentPageNum] = useState<number>(
    initialPage && initialPage >= 1 && initialPage <= 50 ? initialPage : 1
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Zoom state for Reader & Fullscreen Lightbox
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);

  // Synchronize initial URL param
  useEffect(() => {
    if (initialPage && initialPage >= 1 && initialPage <= 50) {
      setCurrentPageNum(initialPage);
      setViewMode('reader');
    }
  }, [initialPage]);

  // Handle keyboard navigation for page flipping & ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreenModal) {
        setIsFullscreenModal(false);
        setZoomLevel(1);
      } else if (e.key === 'ArrowRight') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageNum, isFullscreenModal]);

  const categories = [
    'All',
    'Introduction',
    'Solar Inverters & ESS',
    'Solar Panels',
    'Solar CCTV Lights',
    'Solar Street Lights',
    'Solar High Bays',
    'Solar Floodlights',
    'Solar Post & Landscape',
    'Portable Work Lights'
  ];

  const currentPage = ALL_PAGES.find((p) => p.pageNum === currentPageNum) || ALL_PAGES[0];

  const filteredPages = ALL_PAGES.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `page ${item.pageNum}`.includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleNextPage = () => {
    setCurrentPageNum((prev) => (prev % 50) + 1);
    setZoomLevel(1);
  };

  const handlePrevPage = () => {
    setCurrentPageNum((prev) => (prev === 1 ? 50 : prev - 1));
    setZoomLevel(1);
  };

  const handleSelectPage = (pno: number) => {
    setCurrentPageNum(pno);
    setViewMode('reader');
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 3.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 0.75));
  const handleZoomReset = () => setZoomLevel(1);

  return (
    <div className="space-y-8">
      {/* MASTER CATALOGUE PUBLICATION HERO CARD */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Master Engineering Publication (Single Complete Catalog)</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
            TAKEWAY Solar Catalogue 2026
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
            The complete 50-page publication unified in a single interactive reader. Flip through high-resolution engineering schematics, battery curves, and photometric lux tables, or download the full master PDF.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-zinc-400">
            <span className="flex items-center text-cyan-400">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-cyan-400" /> 50 Verified Pages
            </span>
            <span>•</span>
            <span className="text-zinc-300">8 Engineering Categories</span>
            <span>•</span>
            <span className="text-emerald-400">Pure Monocrystalline & LiFePO4</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <a
            href="/catalogs/TAKEWAY_Solar_Catalogue_2026.pdf"
            download="TAKEWAY_Solar_Catalogue_2026.pdf"
            className="flex-1 md:flex-initial inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-mono font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Master PDF (63 MB)
          </a>
          <a
            href="https://wa.me/918766616660?text=Hi%20TakewayLED%2C%20please%20send%20me%20the%202026%20Complete%20Solar%20Catalogue%20PDF%20and%20pricing%20schedule."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Request on WhatsApp
          </a>
        </div>
      </div>

      {/* VIEW MODE SWITCHER & CATEGORY BAR */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-4">
        {/* View Switcher: Interactive Reader vs Full Page Index */}
        <div className="flex items-center rounded-xl bg-zinc-900/90 p-1 border border-zinc-800 text-xs font-mono">
          <button
            type="button"
            onClick={() => setViewMode('reader')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all ${
              viewMode === 'reader'
                ? 'bg-cyan-400 text-zinc-950 font-bold shadow-cyan-glow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 mr-1.5" />
            Interactive Catalog Reader
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-cyan-400 text-zinc-950 font-bold shadow-cyan-glow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4 mr-1.5" />
            50-Page Index & Grid ({filteredPages.length})
          </button>
        </div>

        {/* Quick Page Jump Selector */}
        <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 w-full sm:w-auto">
          <span>Jump to Page:</span>
          <select
            value={currentPageNum}
            onChange={(e) => handleSelectPage(parseInt(e.target.value))}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-cyan-400"
          >
            {ALL_PAGES.map((p) => (
              <option key={p.pageNum} value={p.pageNum}>
                Page {p.pageNum}: {p.title.length > 40 ? p.title.substring(0, 40) + '...' : p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: INTERACTIVE CATALOG READER (CONTINUOUS SINGLE DOCUMENT WITH ZOOM) */}
      {/* ========================================================================= */}
      {viewMode === 'reader' && (
        <div className="space-y-6">
          {/* Reader Main Enclosure */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden flex flex-col">
            {/* Reader Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-zinc-900/80 border-b border-zinc-800">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-400/10 border border-amber-400/40 text-amber-400">
                  Page {currentPage.pageNum} of 50
                </span>
                <span className="text-xs font-mono text-zinc-400 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-cyan-400 hidden sm:inline font-semibold">
                  {currentPage.category}
                </span>
              </div>

              {/* Page Flipping Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handlePrevPage}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 text-xs font-mono flex items-center transition-colors"
                  title="Previous Page (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Prev
                </button>
                <button
                  type="button"
                  onClick={handleNextPage}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 text-xs font-mono flex items-center transition-colors"
                  title="Next Page (Right Arrow)"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 transition-colors"
                  title="Zoom In (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 transition-colors"
                  title="Zoom Out (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleZoomReset}
                  className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 font-mono text-xs transition-colors flex items-center"
                  title="Reset Zoom (100%)"
                >
                  <RotateCcw className="w-3 h-3 mr-1" />
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  type="button"
                  onClick={() => setIsFullscreenModal(true)}
                  className="p-1.5 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-300 hover:text-white hover:bg-cyan-900 transition-colors"
                  title="Fullscreen High-Res Zoom"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document Canvas (Zoomable & Pannable) */}
            <div
              className="relative w-full h-[60vh] sm:h-[75vh] bg-zinc-950 overflow-auto flex items-center justify-center p-2 sm:p-4 cursor-zoom-in touch-pan-y"
              onClick={() => setIsFullscreenModal(true)}
              title="Click to view in Fullscreen Lightbox with Zoom"
            >
              <div
                className="relative max-h-full aspect-[1/1.414] w-auto h-full max-w-full transition-transform duration-200 ease-out shadow-2xl"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentPage.imageSrc}
                  alt={currentPage.title}
                  className="w-full h-full object-contain rounded-lg border border-zinc-800 bg-white"
                />
              </div>

              {/* Click to zoom overlay tip */}
              <div className="absolute bottom-4 right-4 bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 px-3 py-1.5 rounded-lg text-[11px] font-mono text-zinc-300 flex items-center pointer-events-none shadow-lg">
                <Maximize2 className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                Click image for Fullscreen Zoom
              </div>
            </div>

            {/* Reader Bottom Context Bar */}
            <div className="px-6 py-4 bg-zinc-900/80 border-t border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold font-mono text-white">
                  {currentPage.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans max-w-2xl leading-relaxed">
                  {currentPage.summary}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {currentPage.productSlug && (
                  <Link
                    href={`/products/${currentPage.productSlug}`}
                    className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow transition-all"
                  >
                    View Product Specifications
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                )}
                <a
                  href={`https://wa.me/918766616660?text=Hi%20TakewayLED%2C%20I%20am%20inquiring%20about%20Page%20${currentPage.pageNum}%20(${encodeURIComponent(currentPage.title)})%20from%20the%202026%20Solar%20Catalogue.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/40 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  Inquire Page Specs
                </a>
              </div>
            </div>
          </div>

          {/* Quick-Scroll Thumbnail Carousel (All 50 Pages) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center">
                <Layers className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                Quick-Jump Thumbnail Carousel (Click to flip to any page):
              </span>
              <span>Showing all 50 Pages</span>
            </div>

            <div className="flex items-center space-x-3 overflow-x-auto pb-4 pt-1 overscroll-x-contain touch-pan-x scrollbar-thin scrollbar-thumb-zinc-700">
              {ALL_PAGES.map((p) => {
                const isActive = p.pageNum === currentPageNum;
                return (
                  <button
                    key={p.pageNum}
                    type="button"
                    onClick={() => handleSelectPage(p.pageNum)}
                    className={`relative shrink-0 w-24 aspect-[1/1.414] rounded-lg overflow-hidden border transition-all ${
                      isActive
                        ? 'border-cyan-400 ring-2 ring-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
                        : 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.imageSrc}
                      alt={`Thumb Page ${p.pageNum}`}
                      className="w-full h-full object-cover bg-white"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 px-1 py-0.5 text-[10px] font-mono font-bold text-center text-white">
                      Pg {p.pageNum}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: 50-PAGE INDEX & GRID GALLERY VIEW                                 */}
      {/* ========================================================================= */}
      {viewMode === 'grid' && (
        <div className="space-y-6">
          {/* Category Filter Pills & Search */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by page number, luminaire name, or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-zinc-400">
              Showing <strong className="text-cyan-400">{filteredPages.length}</strong> of 50 Catalog Pages
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-400 text-zinc-950 font-bold shadow-cyan-glow'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of 50 Pages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPages.map((page) => (
              <div
                key={page.pageNum}
                className="group glass-panel rounded-2xl border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div
                  onClick={() => handleSelectPage(page.pageNum)}
                  className="relative aspect-[1/1.414] w-full bg-zinc-950 overflow-hidden cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={page.imageSrc}
                    alt={page.title}
                    className="w-full h-full object-contain p-2 bg-white transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-amber-400 shadow-md">
                    Page {page.pageNum} of 50
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center px-3.5 py-2 rounded-lg bg-cyan-400 text-zinc-950 font-mono font-bold text-xs shadow-cyan-glow">
                      <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                      Open in Reader
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                      {page.category}
                    </span>
                    <h3 className="text-sm font-bold font-mono text-white group-hover:text-cyan-400 transition-colors line-clamp-2 mt-1">
                      {page.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                      {page.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2 mt-3">
                    <button
                      onClick={() => handleSelectPage(page.pageNum)}
                      className="text-xs font-mono font-semibold text-zinc-300 hover:text-cyan-400 inline-flex items-center"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1" />
                      Inspect Page
                    </button>

                    {page.productSlug && (
                      <Link
                        href={`/products/${page.productSlug}`}
                        className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 inline-flex items-center"
                      >
                        View Model →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL WITH ULTRA-ZOOM                                 */}
      {/* ========================================================================= */}
      {isFullscreenModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => { setIsFullscreenModal(false); setZoomLevel(1); }}
        >
          {/* Header Bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 bg-zinc-950/90 border border-zinc-800 px-4 py-3 rounded-2xl shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-400 text-zinc-950">
                Page {currentPage.pageNum} of 50
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-white truncate max-w-xs sm:max-w-md">
                {currentPage.title}
              </span>
            </div>

            {/* Flipping and Zoom Controls */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                type="button"
                onClick={handlePrevPage}
                className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                title="Previous Page (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextPage}
                className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                title="Next Page (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="h-5 w-px bg-zinc-800 mx-0.5 sm:mx-1" />

              <button
                type="button"
                onClick={handleZoomIn}
                className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleZoomReset}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-mono text-xs transition-colors flex items-center"
                title="Reset Zoom (100%)"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={() => { setIsFullscreenModal(false); setZoomLevel(1); }}
                className="p-2 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 hover:text-white border border-red-800/80 transition-colors"
                title="Close Lightbox (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Fullscreen Canvas with Pan & Zoom */}
          <div
            className="flex-1 w-full overflow-auto flex items-center justify-center p-4 my-2 select-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsFullscreenModal(false);
                setZoomLevel(1);
              }
            }}
          >
            <div
              className="relative max-w-full max-h-full transition-transform duration-200 ease-out shadow-2xl"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentPage.imageSrc}
                alt={currentPage.title}
                className="max-h-[82vh] w-auto max-w-[92vw] object-contain rounded-xl shadow-2xl border border-zinc-800 bg-white"
              />
            </div>
          </div>

          {/* Footer Bar */}
          <div
            className="flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-4 py-2 rounded-xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400">Category:</span>
              <span className="text-zinc-200">{currentPage.category}</span>
              <span>•</span>
              <span className="text-zinc-400 truncate max-w-lg">{currentPage.summary}</span>
            </div>

            <div className="flex items-center space-x-4">
              {currentPage.productSlug && (
                <Link
                  href={`/products/${currentPage.productSlug}`}
                  className="text-cyan-400 hover:underline font-bold"
                >
                  Go to Product Specifications →
                </Link>
              )}
              <span className="text-zinc-500 hidden sm:inline">Use Arrow keys to flip pages • ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
