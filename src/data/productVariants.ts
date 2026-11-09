// Verified 2026 TAKEWAY Solar Catalogue Product Models & Variants
// Mapped 1:1 with authentic catalogue specifications and engineering parameters.

export interface ProductVariant {
  model: string;
  name: string;
  wattage: string;
  capacity: string;
  dimensions?: string;
  ledSpec?: string;
  solarPanel?: string;
  battery?: string;
  outputs?: string;
  specialFeature?: string;
  image_url?: string;
}

export const PRODUCT_VARIANTS: Record<string, ProductVariant[]> = {
  "takeway-abs-solar-inverter-1200w": [
    {
      "model": "ABS-600W-576WH",
      "name": "600W ABS Portable Solar Inverter ESS",
      "wattage": "600W Pure Sine",
      "capacity": "576Wh LiFePO4",
      "battery": "576Wh LiFePO4 Lithium Iron Phosphate",
      "solarPanel": "18V Solar Panel 1-5A (Max 2 Pcs)",
      "dimensions": "270 x 210 x 230 mm",
      "outputs": "1x AC 220V 50Hz Pure Sine Wave, DC 12V 10A, 2x USB-A, 2x USB-C, 15W Wireless Pad, 5W Worklight",
      "image_url": "/products/extracted/page_4_img_1_478x463.png"
    },
    {
      "model": "ABS-1200W-1152WH",
      "name": "1200W ABS Portable Solar Inverter ESS",
      "wattage": "1200W Pure Sine",
      "capacity": "1152Wh LiFePO4",
      "battery": "1152Wh LiFePO4 Lithium Iron Phosphate",
      "solarPanel": "18V Solar Panel 1-10A (Max 2 Pcs) / XT60 22V/20A Fast Charge",
      "dimensions": "280 x 245 x 250 mm",
      "outputs": "3x AC 220V 50Hz Pure Sine Wave, DC 12V 10A, 2x USB-A, 2x USB-C, 15W Wireless Pad, 5W Worklight",
      "image_url": "/products/extracted/page_4_img_2_490x470.png"
    }
  ],
  "takeway-metal-body-solar-inverter-600w": [
    {
      "model": "MB-200W-192WH",
      "name": "200W Metal Body Solar Inverter ESS",
      "wattage": "200W Pure Sine",
      "capacity": "192Wh LiFePO4",
      "battery": "192Wh LiFePO4 Lithium Iron Phosphate",
      "solarPanel": "18V Solar Panel 1-10A (Max 2 Pcs)",
      "dimensions": "250 x 150 x 180 mm",
      "outputs": "1x AC 220V 50Hz Pure Sine Wave, DC 12V 10A Cigarette, 2x USB-A, 5W Worklight",
      "image_url": "/products/extracted/page_5_img_3_254x247.png"
    },
    {
      "model": "MB-300W-384WH",
      "name": "300W Metal Body Solar Inverter ESS",
      "wattage": "300W Pure Sine",
      "capacity": "384Wh LiFePO4",
      "battery": "384Wh LiFePO4 Lithium Iron Phosphate",
      "solarPanel": "18V Solar Panel 1-10A (Max 2 Pcs)",
      "dimensions": "250 x 150 x 180 mm",
      "outputs": "1x AC 220V 50Hz Pure Sine Wave, DC 12V 10A Cigarette, 2x USB-A, 5W Worklight",
      "image_url": "/products/extracted/page_5_img_2_286x285.png"
    },
    {
      "model": "MB-600W-640WH",
      "name": "600W Metal Body Solar Inverter ESS",
      "wattage": "600W Pure Sine",
      "capacity": "640Wh LiFePO4",
      "battery": "640Wh LiFePO4 Lithium Iron Phosphate",
      "solarPanel": "18V Solar Panel 1-10A (Max 2 Pcs)",
      "dimensions": "320 x 190 x 200 mm",
      "outputs": "2x AC 220V 50Hz Pure Sine Wave, DC 12V 10A Cigarette, 4x DC 12V 10A, 2x USB-A, 2x USB-C, 5W Worklight",
      "image_url": "/products/extracted/page_5_img_1_328x240.png"
    }
  ],
  "takeway-mono-solar-panels-pv-series": [
    {
      "model": "PV1240",
      "name": "40W Monocrystalline Solar Panel",
      "wattage": "40W Mono",
      "capacity": "23% Efficiency",
      "dimensions": "530 x 510 x 25 mm",
      "solarPanel": "Voc 22.3V / Vmp 18.2V / Isc 2.29A",
      "outputs": "IP65 Junction Box with Dual Bypass Diodes"
    },
    {
      "model": "PV1250",
      "name": "50W Monocrystalline Solar Panel",
      "wattage": "50W Mono",
      "capacity": "23% Efficiency",
      "dimensions": "650 x 510 x 25 mm",
      "solarPanel": "Voc 22.3V / Vmp 18.2V / Isc 2.87A",
      "outputs": "IP65 Junction Box with Dual Bypass Diodes"
    },
    {
      "model": "PV1275",
      "name": "75W Monocrystalline Solar Panel",
      "wattage": "75W Mono",
      "capacity": "23% Efficiency",
      "dimensions": "770 x 670 x 30 mm",
      "solarPanel": "Voc 22.3V / Vmp 18.2V / Isc 4.30A",
      "outputs": "IP65 Junction Box with Dual Bypass Diodes"
    },
    {
      "model": "PV12165",
      "name": "165W Monocrystalline Solar Panel",
      "wattage": "165W Mono",
      "capacity": "23% Efficiency",
      "dimensions": "1480 x 670 x 30 mm",
      "solarPanel": "Voc 22.3V / Vmp 18.2V / Isc 9.46A",
      "outputs": "IP65 Junction Box with Dual Bypass Diodes"
    }
  ],
  "takeway-solar-mobile-charger-smc-15w": [
    {
      "model": "SMC-15W",
      "name": "15W Portable Solar Fast Charger",
      "wattage": "15W Mono",
      "capacity": "5V/9V Fast Charge",
      "solarPanel": "9V 15W Monocrystalline Folding Panel",
      "outputs": "3x USB-A (5V/3A) + 1x USB-C PD (9V/2A) with multi-head charging cable"
    }
  ],
  "takeway-solar-rechargeable-pedestal-fan": [
    {
      "model": "SOLAR-FAN-FS578-WH",
      "name": "16\" Solar Rechargeable Pedestal Fan",
      "wattage": "12W Solar / 16-Inch",
      "capacity": "5.2Ah Lithium Battery",
      "solarPanel": "9V 12W External Monocrystalline Panel",
      "battery": "7.4V 5.2Ah Lithium Battery (8-12 Hrs Runtime)",
      "outputs": "3-Speed Fan Control, Integrated Night Light, Wireless Remote"
    }
  ],
  "takeway-4g-dual-lens-solar-cctv-camera": [
    {
      "model": "SOLAR-XG06-4G",
      "name": "Single-Lens 5MP 4G Solar PTZ Camera",
      "wattage": "7W Solar / 5MP PTZ",
      "capacity": "8000mAh Lithium (5-7 Days Backup)",
      "solarPanel": "5V 7W Monocrystalline Solar Panel",
      "battery": "3.7V 8000mAh Lithium-ion",
      "specialFeature": "FHD IR 5MP Single Lens, 360° PTZ, 2-Way Audio, V380 Pro App, 256GB SD Slot"
    },
    {
      "model": "SOLAR-XG06-4G-DUAL",
      "name": "Dual-Lens 5MP+5MP 4G Solar PTZ Camera",
      "wattage": "7W Solar / Dual 5MP PTZ",
      "capacity": "8000mAh Lithium (5-7 Days Backup)",
      "solarPanel": "5V 7W Monocrystalline Solar Panel",
      "battery": "3.7V 8000mAh Lithium-ion",
      "specialFeature": "FHD IR 5MP+5MP Dual Camera (Fixed + PTZ), 360° Surveillance, V380 Pro, 256GB SD Slot"
    }
  ],
  "takeway-solar-cctv-5real-zoom-camera": [
    {
      "model": "SOLAR CCTV-T643REAL",
      "name": "3 Real 5MP FHD Solar CCTV Camera (4G / WiFi)",
      "wattage": "7W Solar / 5MP",
      "capacity": "8000mAh Lithium (5-7 Days Backup)",
      "solarPanel": "5V 7W Monocrystalline Solar Panel",
      "battery": "3.7V 8000mAh Lithium-ion",
      "specialFeature": "FHD IR 5MP Sensor, 360° Rotation View, Human Detection Recording, 2-Way Intercom"
    },
    {
      "model": "SOLAR CCTV-T845REAL",
      "name": "5 Real Optical Zoom 5MP Solar CCTV Camera (4G / WiFi)",
      "wattage": "7W Solar / 5MP Zoom",
      "capacity": "8000mAh Lithium (5-7 Days Backup)",
      "solarPanel": "5V 7W Monocrystalline Solar Panel",
      "battery": "3.7V 8000mAh Lithium-ion",
      "specialFeature": "5MP Optical Zoom Lens, High-Precision PTZ, 360° Pan-Tilt, V380 Pro Remote Monitoring"
    }
  ],
  "takeway-solar-cctv-flood-light-30w": [
    {
      "model": "SOLAR-FL-CCTV-30",
      "name": "150W LED Solar CCTV Floodlight with PTZ Camera",
      "wattage": "150W LED / 30W Solar",
      "capacity": "15,000 LM / 30Ah LiFePO4",
      "solarPanel": "5V 30W Monocrystalline Panel",
      "battery": "3.2V 30Ah LiFePO4 Battery",
      "specialFeature": "Integrated 150W High-Lumen Floodlight + 5MP PTZ Zoom Camera with LCD Power Indicator"
    }
  ],
  "takeway-solar-cctv-street-light-90w-fixed": [
    {
      "model": "SOLAR-SL-CCTV-15-1LENS-4G",
      "name": "90W Solar CCTV Street Light (4G Fixed Lens)",
      "wattage": "90W LED / 16W Solar",
      "capacity": "9,800 LM / 20Ah LiFePO4",
      "solarPanel": "5V 16W Monocrystalline Panel",
      "battery": "3.2V 20Ah LiFePO4 Battery",
      "specialFeature": "201 LED 2835 Matrix, 1080P FHD 4G Fixed Angle Security Camera, Dusk-to-Dawn Automation"
    }
  ],
  "takeway-solar-cctv-street-light-90w": [
    {
      "model": "SOLAR-SL-CCTV-20-1LENS",
      "name": "90W Solar CCTV Street Light (4G PTZ Live Stream)",
      "wattage": "90W LED / 24W Solar",
      "capacity": "10,800 LM / 25Ah LiFePO4",
      "solarPanel": "5V 24W Monocrystalline Panel",
      "battery": "3.2V 25Ah LiFePO4 Battery",
      "specialFeature": "Integrated 4G Pan-Tilt-Zoom Camera with 360° Live Streaming, 2-Way Audio, Radar Dimming"
    }
  ],
  "takeway-panoramic-triple-cctv-solar-street-light": [
    {
      "model": "SOLAR-SL-CCTV-20-4LENS",
      "name": "Panoramic Triple-CCTV 4G Solar Street Light",
      "wattage": "90W LED / 24W Solar",
      "capacity": "15MP Panoramic / 30Ah LiFePO4",
      "solarPanel": "5V 24W Monocrystalline Panel",
      "battery": "3.2V 30Ah LiFePO4 Battery",
      "specialFeature": "180 Pcs LEDs, 3+1 Panoramic Ultra-Wide Surveillance Lenses (15MP Total), IP66 Weatherproof"
    }
  ],
  "takeway-metal-all-in-one-solar-street-light-80w": [
    {
      "model": "TAKEWAY-METAL80",
      "name": "80W Heavy-Duty Metal All-in-One Solar Street Light",
      "wattage": "80W (500W LED)",
      "capacity": "12,000 LM / 80Ah LiFePO4",
      "solarPanel": "5V 85W Monocrystalline Panel",
      "battery": "3.2V 80Ah LiFePO4 Battery",
      "dimensions": "1110 x 400 x 195 mm",
      "specialFeature": "180 Pcs LED 5054, Heavy-Duty Die-Cast Aluminum Body, Adjustable Angle Mounting Bracket"
    }
  ],
  "takeway-metal-all-in-one-solar-street-light-120w": [
    {
      "model": "SL-INT-METAL80",
      "name": "80W Heavy-Duty Metal All-in-One Street Light",
      "wattage": "80W (500W LED)",
      "capacity": "12,000 LM",
      "solarPanel": "5V 85W Monocrystalline Panel",
      "battery": "3.2V 80Ah LiFePO4",
      "dimensions": "1110 x 400 x 195 mm",
      "ledSpec": "180 Pcs 5054 LEDs",
      "specialFeature": "Die-Cast Aluminum Architectural Housing, Adjustable Mount, RF Remote"
    },
    {
      "model": "SL-INT-METAL100",
      "name": "100W Heavy-Duty Metal All-in-One Street Light",
      "wattage": "100W (600W LED)",
      "capacity": "15,000 LM",
      "solarPanel": "5V 100W Monocrystalline Panel",
      "battery": "3.2V 100Ah LiFePO4",
      "dimensions": "1280 x 400 x 195 mm",
      "ledSpec": "240 Pcs 5054 LEDs",
      "specialFeature": "Die-Cast Aluminum Architectural Housing, Adjustable Mount, RF Remote"
    },
    {
      "model": "SL-INT-METAL120",
      "name": "120W Heavy-Duty Metal All-in-One Street Light",
      "wattage": "120W (800W LED)",
      "capacity": "18,000 LM",
      "solarPanel": "5V 120W Monocrystalline Panel",
      "battery": "3.2V 120Ah LiFePO4",
      "dimensions": "1450 x 400 x 195 mm",
      "ledSpec": "300 Pcs 5054 LEDs",
      "specialFeature": "Die-Cast Aluminum Architectural Housing, Adjustable Mount, RF Remote"
    }
  ],
  "takeway-high-power-optical-lens-street-light-hp80": [
    {
      "model": "TAKEWAY-HP60",
      "name": "60W Optical Lens Solar Street Light HP-60",
      "wattage": "60W (400W LED)",
      "capacity": "11,500 LM",
      "solarPanel": "5V 70W Monocrystalline Panel",
      "battery": "3.2V 60Ah LiFePO4",
      "dimensions": "1050 x 365 x 150 mm",
      "ledSpec": "288 Pcs 1W High-Efficacy LEDs",
      "specialFeature": "6 Batwing Precision Optical Lenses for Uniform Roadway Illumination"
    },
    {
      "model": "TAKEWAY-HP80",
      "name": "80W Optical Lens Solar Street Light HP-80",
      "wattage": "80W (500W LED)",
      "capacity": "14,500 LM",
      "solarPanel": "5V 85W Monocrystalline Panel",
      "battery": "3.2V 80Ah LiFePO4",
      "dimensions": "1150 x 365 x 150 mm",
      "ledSpec": "432 Pcs 1W High-Efficacy LEDs",
      "specialFeature": "8 Batwing Precision Optical Lenses for Uniform Roadway Illumination"
    }
  ],
  "takeway-semi-integrated-solar-street-light-50w": [
    {
      "model": "TAKEWAY-SEMI-12R",
      "name": "12W Semi-Integrated Solar Street Light",
      "wattage": "12W (100W LED)",
      "capacity": "1,800 LM",
      "solarPanel": "10V 40W External Mono Panel",
      "battery": "6.4V 18Ah LiFePO4",
      "ledSpec": "168 Pcs LEDs",
      "specialFeature": "Heavy-Duty Die-Cast Aluminum Fixture with Separated Panel Orientation"
    },
    {
      "model": "TAKEWAY-SEMI-20R",
      "name": "20W Semi-Integrated Solar Street Light",
      "wattage": "20W (150W LED)",
      "capacity": "3,000 LM",
      "solarPanel": "10V 50W External Mono Panel",
      "battery": "6.4V 24Ah LiFePO4",
      "ledSpec": "288 Pcs LEDs",
      "specialFeature": "Heavy-Duty Die-Cast Aluminum Fixture with Separated Panel Orientation"
    },
    {
      "model": "TAKEWAY-SEMI-30R",
      "name": "30W Semi-Integrated Solar Street Light",
      "wattage": "30W (200W LED)",
      "capacity": "4,500 LM",
      "solarPanel": "18V 60W External Mono Panel",
      "battery": "12.8V 18Ah LiFePO4",
      "ledSpec": "432 Pcs LEDs",
      "specialFeature": "Commercial Wide Roadway Distribution, Heavy-Duty Heatsink"
    },
    {
      "model": "TAKEWAY-SEMI-30R-LENS",
      "name": "30W Optical Lens Semi-Integrated Street Light",
      "wattage": "30W (250W LED)",
      "capacity": "4,800 LM",
      "solarPanel": "18V 60W External Mono Panel",
      "battery": "12.8V 24Ah LiFePO4",
      "ledSpec": "60 Pcs 5054 Optical Batwing Lenses",
      "specialFeature": "Precision Batwing Optical Refractor Lenses for Low-Glare Highway Coverage"
    },
    {
      "model": "TAKEWAY-SEMI-50R",
      "name": "50W Semi-Integrated Solar Street Light",
      "wattage": "50W (400W LED)",
      "capacity": "7,500 LM",
      "solarPanel": "18V 100W External Mono Panel",
      "battery": "12.8V 36Ah LiFePO4",
      "ledSpec": "766 Pcs High-Efficacy LEDs",
      "specialFeature": "High-Output Municipal Grade Luminaire for Major Arterial Roads"
    }
  ],
  "takeway-apple-series-solar-street-light-40w": [
    {
      "model": "SLSOLARINT-APPLE40",
      "name": "40W Apple Series All-in-One Street Light",
      "wattage": "40W (300W LED)",
      "capacity": "5,200 LM",
      "solarPanel": "5V 45W Monocrystalline Panel",
      "battery": "3.2V 42Ah LiFePO4",
      "dimensions": "850 x 350 x 140 mm",
      "ledSpec": "576 Pcs LEDs",
      "specialFeature": "Aerodynamic Apple-Curve Architectural Profile, Radar Microwave Motion Sensor"
    },
    {
      "model": "SLSOLARINT-APPLE50",
      "name": "50W Apple Series All-in-One Street Light",
      "wattage": "50W (400W LED)",
      "capacity": "6,400 LM",
      "solarPanel": "5V 60W Monocrystalline Panel",
      "battery": "3.2V 56Ah LiFePO4",
      "dimensions": "1050 x 350 x 140 mm",
      "ledSpec": "864 Pcs LEDs",
      "specialFeature": "Aerodynamic Apple-Curve Architectural Profile, Radar Microwave Motion Sensor"
    }
  ],
  "takeway-king-series-solar-street-light-45w": [
    {
      "model": "SLSOLARINT-KING35",
      "name": "35W KING Series All-in-One Street Light",
      "wattage": "35W (250W LED)",
      "capacity": "5,250 LM",
      "solarPanel": "5V 45W Monocrystalline Panel",
      "battery": "3.2V 30Ah LiFePO4",
      "dimensions": "820 x 330 x 135 mm",
      "ledSpec": "488 Pcs 0.5W LEDs",
      "specialFeature": "Heavy-Duty Crown Heatsink, Radar Motion Sensor, Dawn-to-Dusk Controller"
    },
    {
      "model": "SLSOLARINT-KING45",
      "name": "45W KING Series All-in-One Street Light",
      "wattage": "45W (350W LED)",
      "capacity": "6,750 LM",
      "solarPanel": "5V 55W Monocrystalline Panel",
      "battery": "3.2V 40Ah LiFePO4",
      "dimensions": "1020 x 330 x 135 mm",
      "ledSpec": "732 Pcs 0.5W LEDs",
      "specialFeature": "Heavy-Duty Crown Heatsink, Radar Motion Sensor, Dawn-to-Dusk Controller"
    }
  ],
  "takeway-aero-plus-solar-street-light-35w": [
    {
      "model": "SL-AEROPLUS-25",
      "name": "25W AERO PLUS Solar Street Light",
      "wattage": "25W (200W LED)",
      "capacity": "3,750 LM",
      "solarPanel": "5V 35W Monocrystalline Panel",
      "battery": "3.2V 25Ah LiFePO4",
      "ledSpec": "360 Pcs LEDs",
      "specialFeature": "Slim Aerodynamic Profile, Heat-Dissipating Airfoil Aluminum Alloy"
    },
    {
      "model": "SL-AEROPLUS-30",
      "name": "30W AERO PLUS Solar Street Light",
      "wattage": "30W (250W LED)",
      "capacity": "4,500 LM",
      "solarPanel": "5V 40W Monocrystalline Panel",
      "battery": "3.2V 30Ah LiFePO4",
      "ledSpec": "480 Pcs LEDs",
      "specialFeature": "Slim Aerodynamic Profile, Heat-Dissipating Airfoil Aluminum Alloy"
    },
    {
      "model": "SL-AEROPLUS-35",
      "name": "35W AERO PLUS Solar Street Light",
      "wattage": "35W (300W LED)",
      "capacity": "5,250 LM",
      "solarPanel": "5V 45W Monocrystalline Panel",
      "battery": "3.2V 35Ah LiFePO4",
      "ledSpec": "576 Pcs LEDs",
      "specialFeature": "Slim Aerodynamic Profile, Heat-Dissipating Airfoil Aluminum Alloy"
    }
  ],
  "takeway-aero-series-solar-street-light-35w": [
    {
      "model": "SL-AERO-INT-25",
      "name": "25W AERO Series Solar Street Light",
      "wattage": "25W (200W LED)",
      "capacity": "4,000 LM",
      "solarPanel": "5V 35W Monocrystalline Panel",
      "battery": "3.2V 25Ah LiFePO4",
      "ledSpec": "360 Pcs LEDs",
      "specialFeature": "Ultra-Slim Extruded Housing with Integrated High-Efficiency Mono Panel"
    },
    {
      "model": "SL-AERO-INT-30",
      "name": "30W AERO Series Solar Street Light",
      "wattage": "30W (250W LED)",
      "capacity": "4,800 LM",
      "solarPanel": "5V 40W Monocrystalline Panel",
      "battery": "3.2V 30Ah LiFePO4",
      "ledSpec": "480 Pcs LEDs",
      "specialFeature": "Ultra-Slim Extruded Housing with Integrated High-Efficiency Mono Panel"
    },
    {
      "model": "SL-AERO-INT-35",
      "name": "35W AERO Series Solar Street Light",
      "wattage": "35W (300W LED)",
      "capacity": "5,500 LM",
      "solarPanel": "5V 45W Monocrystalline Panel",
      "battery": "3.2V 35Ah LiFePO4",
      "ledSpec": "576 Pcs LEDs",
      "specialFeature": "Ultra-Slim Extruded Housing with Integrated High-Efficiency Mono Panel"
    }
  ],
  "takeway-optical-lens-solar-street-light-35w": [
    {
      "model": "SLSOLARINT-2LENS-25R",
      "name": "25W 2-Lens Optical Solar Street Light",
      "wattage": "25W (200W LED)",
      "capacity": "4,200 LM",
      "solarPanel": "5V 35W Monocrystalline Panel",
      "battery": "3.2V 25Ah LiFePO4",
      "ledSpec": "2 Optical Multi-Chip Lenses",
      "specialFeature": "Specialized Asymmetric Roadway Beam Optics, Radar Motion Sensor"
    },
    {
      "model": "SLSOLARINT-3LENS-35R",
      "name": "35W 3-Lens Optical Solar Street Light",
      "wattage": "35W (300W LED)",
      "capacity": "5,800 LM",
      "solarPanel": "5V 45W Monocrystalline Panel",
      "battery": "3.2V 35Ah LiFePO4",
      "ledSpec": "3 Optical Multi-Chip Lenses",
      "specialFeature": "Specialized Asymmetric Roadway Beam Optics, Radar Motion Sensor"
    }
  ],
  "takeway-space-series-solar-street-light-35w": [
    {
      "model": "SL-INT-SPACE25",
      "name": "25W SPACE Series 8-Lens Solar Street Light",
      "wattage": "25W (200W LED)",
      "capacity": "4,500 LM",
      "solarPanel": "5V 35W Monocrystalline Panel",
      "battery": "3.2V 25Ah LiFePO4",
      "ledSpec": "8 Precision Lens Modules",
      "specialFeature": "Futuristic Space Frame Design, Anti-Glare Multi-Module Array"
    },
    {
      "model": "SL-INT-SPACE35",
      "name": "35W SPACE Series 12-Lens Solar Street Light",
      "wattage": "35W (300W LED)",
      "capacity": "6,000 LM",
      "solarPanel": "5V 45W Monocrystalline Panel",
      "battery": "3.2V 35Ah LiFePO4",
      "ledSpec": "12 Precision Lens Modules",
      "specialFeature": "Futuristic Space Frame Design, Anti-Glare Multi-Module Array"
    }
  ],
  "takeway-adjustable-solar-street-light-15w": [
    {
      "model": "SL-INT-ADJ-10",
      "name": "10W Tilt-Adjustable Solar Street Light",
      "wattage": "10W (100W LED)",
      "capacity": "1,600 LM",
      "solarPanel": "5V 18W Tilt-Adjustable Mono Panel",
      "battery": "3.2V 15Ah LiFePO4",
      "specialFeature": "360° Rotating Luminaire Head with Multi-Angle Tiltable Solar Panel"
    },
    {
      "model": "SL-INT-ADJ-15",
      "name": "15W Tilt-Adjustable Solar Street Light",
      "wattage": "15W (150W LED)",
      "capacity": "2,400 LM",
      "solarPanel": "5V 25W Tilt-Adjustable Mono Panel",
      "battery": "3.2V 20Ah LiFePO4",
      "specialFeature": "360° Rotating Luminaire Head with Multi-Angle Tiltable Solar Panel"
    }
  ],
  "takeway-star-series-solar-street-light-15w": [
    {
      "model": "SLSOLARINT05R-STAR",
      "name": "5W STAR Series 1-Window Street Light",
      "wattage": "5W (50W LED)",
      "capacity": "1,000 LM",
      "solarPanel": "5V 10W Monocrystalline Panel",
      "battery": "3.2V 10Ah LiFePO4",
      "specialFeature": "Single Optical Window Array, Compact Pathway & Boundary Lighting"
    },
    {
      "model": "SLSOLARINT10R-STAR",
      "name": "10W STAR Series 2-Window Street Light",
      "wattage": "10W (100W LED)",
      "capacity": "1,900 LM",
      "solarPanel": "5V 18W Monocrystalline Panel",
      "battery": "3.2V 15Ah LiFePO4",
      "specialFeature": "Dual Optical Window Array, Commercial Campus & Village Lighting"
    },
    {
      "model": "SLSOLARINT15R-STAR",
      "name": "15W STAR Series 3-Window Street Light",
      "wattage": "15W (150W LED)",
      "capacity": "2,800 LM",
      "solarPanel": "5V 25W Monocrystalline Panel",
      "battery": "3.2V 20Ah LiFePO4",
      "specialFeature": "Triple Optical Window Array, High-Lumen Perimeter & Farm Security"
    }
  ],
  "takeway-double-body-solar-street-light-25w": [
    {
      "model": "SLSOLARINT05R",
      "name": "5W Double Body 1-Window Street Light",
      "wattage": "5W (50W LED)",
      "capacity": "900 LM",
      "solarPanel": "5V 10W Mono",
      "battery": "3.2V 10Ah LiFePO4",
      "specialFeature": "Double-Housing Thermal Isolation Architecture"
    },
    {
      "model": "SLSOLARINT10R",
      "name": "10W Double Body 2-Window Street Light",
      "wattage": "10W (100W LED)",
      "capacity": "1,700 LM",
      "solarPanel": "5V 18W Mono",
      "battery": "3.2V 15Ah LiFePO4",
      "specialFeature": "Double-Housing Thermal Isolation Architecture"
    },
    {
      "model": "SLSOLARINT15R",
      "name": "15W Double Body 3-Window Street Light",
      "wattage": "15W (150W LED)",
      "capacity": "2,500 LM",
      "solarPanel": "5V 25W Mono",
      "battery": "3.2V 20Ah LiFePO4",
      "specialFeature": "Double-Housing Thermal Isolation Architecture"
    },
    {
      "model": "SLSOLARINT20R",
      "name": "20W Double Body 4-Window Street Light",
      "wattage": "20W (200W LED)",
      "capacity": "3,200 LM",
      "solarPanel": "5V 30W Mono",
      "battery": "3.2V 25Ah LiFePO4",
      "specialFeature": "Double-Housing Thermal Isolation Architecture"
    },
    {
      "model": "SLSOLARINT25R",
      "name": "25W Double Body 6-Window Street Light",
      "wattage": "25W (250W LED)",
      "capacity": "3,800 LM",
      "solarPanel": "5V 35W Mono",
      "battery": "3.2V 30Ah LiFePO4",
      "specialFeature": "Double-Housing Thermal Isolation Architecture"
    }
  ],
  "takeway-single-body-solar-street-light-20w": [
    {
      "model": "SLSOLARINT05R-SB",
      "name": "5W Single Body 1-Window Street Light",
      "wattage": "5W (50W LED)",
      "capacity": "900 LM",
      "solarPanel": "5V 10W Mono",
      "battery": "3.2V 10Ah LiFePO4",
      "specialFeature": "Seamless Integrated Monocoque Enclosure"
    },
    {
      "model": "SLSOLARINT10R-SB",
      "name": "10W Single Body 2-Window Street Light",
      "wattage": "10W (100W LED)",
      "capacity": "1,700 LM",
      "solarPanel": "5V 18W Mono",
      "battery": "3.2V 15Ah LiFePO4",
      "specialFeature": "Seamless Integrated Monocoque Enclosure"
    },
    {
      "model": "SLSOLARINT15R-SB",
      "name": "15W Single Body 3-Window Street Light",
      "wattage": "15W (150W LED)",
      "capacity": "2,500 LM",
      "solarPanel": "5V 25W Mono",
      "battery": "3.2V 20Ah LiFePO4",
      "specialFeature": "Seamless Integrated Monocoque Enclosure"
    },
    {
      "model": "SLSOLARINT20R-SB",
      "name": "20W Single Body 4-Window Street Light",
      "wattage": "20W (200W LED)",
      "capacity": "3,200 LM",
      "solarPanel": "5V 30W Mono",
      "battery": "3.2V 25Ah LiFePO4",
      "specialFeature": "Seamless Integrated Monocoque Enclosure"
    }
  ],
  "takeway-mini-solar-street-light-9w": [
    {
      "model": "SOLAR-NEW-MINI02",
      "name": "2W Compact Solar Pathway Luminaire",
      "wattage": "2W",
      "capacity": "300 LM",
      "solarPanel": "5V 3W Mono",
      "battery": "3.7V 2000mAh Lithium",
      "specialFeature": "Integrated Wall/Post Bracket for Gate & Pathway Accent"
    },
    {
      "model": "SOLAR-NEW-MINI03",
      "name": "3W Compact Solar Pathway Luminaire",
      "wattage": "3W",
      "capacity": "450 LM",
      "solarPanel": "5V 5W Mono",
      "battery": "3.2V 5Ah LiFePO4",
      "specialFeature": "Integrated Wall/Post Bracket for Gate & Pathway Accent"
    },
    {
      "model": "SOLAR-NEW-MINI04",
      "name": "4W Compact Solar Pathway Luminaire",
      "wattage": "4W",
      "capacity": "650 LM",
      "solarPanel": "5V 8W Mono",
      "battery": "3.2V 8Ah LiFePO4",
      "specialFeature": "Dusk-to-Dawn Intelligent Illumination"
    },
    {
      "model": "SOLAR-NEW-MINI06",
      "name": "6W Compact Solar Pathway Luminaire",
      "wattage": "6W",
      "capacity": "950 LM",
      "solarPanel": "5V 12W Mono",
      "battery": "3.2V 12Ah LiFePO4",
      "specialFeature": "High-Efficiency SMD Array with Wide Beam Throw"
    },
    {
      "model": "SLSOLAR-MINI09",
      "name": "9W High-Output Solar Mini Street Light",
      "wattage": "9W",
      "capacity": "1,400 LM",
      "solarPanel": "5V 15W Mono",
      "battery": "3.2V 15Ah LiFePO4",
      "specialFeature": "Max Output Mini Luminaire for Driveways and Access Roads"
    }
  ],
  "takeway-industrial-solar-highbay-ufo-35w": [
    {
      "model": "SOLAR-HIGHBAY-35R",
      "name": "35W Industrial Solar High Bay UFO Light",
      "wattage": "35W (120W LED)",
      "capacity": "5,400 LM",
      "solarPanel": "5V 35W Monocrystalline Panel",
      "battery": "3.2V 30Ah LiFePO4",
      "dimensions": "290 mm Diameter",
      "ledSpec": "60 Pcs 5054 LEDs",
      "specialFeature": "Industrial Circular UFO Design, Suspension Hook Mount, RF Remote Dimming"
    }
  ],
  "takeway-lens-solar-flood-light-30w": [
    {
      "model": "FLSOLAR-LENS20",
      "name": "20W Commercial Optical Lens Floodlight",
      "wattage": "20W (150W LED)",
      "capacity": "3,200 LM",
      "solarPanel": "5V 25W Mono Panel",
      "battery": "3.2V 25Ah LiFePO4",
      "specialFeature": "Individual Multi-Lens Optical Array for Long-Throw Perimeter Lighting"
    },
    {
      "model": "FLSOLAR-LENS30",
      "name": "30W Commercial Optical Lens Floodlight",
      "wattage": "30W (250W LED)",
      "capacity": "4,800 LM",
      "solarPanel": "5V 35W Mono Panel",
      "battery": "3.2V 35Ah LiFePO4",
      "specialFeature": "Individual Multi-Lens Optical Array for Long-Throw Perimeter Lighting"
    }
  ],
  "takeway-sky-light-solar-floodlight-30w": [
    {
      "model": "FLSOLAR-CITY20",
      "name": "20W SKY LIGHT Dual-Array Floodlight",
      "wattage": "20W (150W LED)",
      "capacity": "3,400 LM",
      "solarPanel": "5V 25W Mono Panel",
      "battery": "3.2V 25Ah LiFePO4",
      "specialFeature": "Heavy Reflector Cup Design with Wide Flood Distribution"
    },
    {
      "model": "FLSOLAR-SKY30",
      "name": "30W SKY LIGHT High-Power Floodlight",
      "wattage": "30W (250W LED)",
      "capacity": "5,000 LM",
      "solarPanel": "5V 35W Mono Panel",
      "battery": "3.2V 35Ah LiFePO4",
      "specialFeature": "Heavy Reflector Cup Design with Wide Flood Distribution"
    }
  ],
  "takeway-foldable-solar-flood-light-15w": [
    {
      "model": "FLSOLAR-FOLD10",
      "name": "10W Dual-Wing Foldable Solar Floodlight",
      "wattage": "10W (100W LED)",
      "capacity": "1,800 LM",
      "solarPanel": "5V 15W Mono Panel",
      "battery": "3.2V 15Ah LiFePO4",
      "specialFeature": "Dual Adjustable Folding Wings with Independent Angular Aiming"
    },
    {
      "model": "FLSOLAR-FOLD15",
      "name": "15W Dual-Wing Foldable Solar Floodlight",
      "wattage": "15W (150W LED)",
      "capacity": "2,800 LM",
      "solarPanel": "5V 20W Mono Panel",
      "battery": "3.2V 20Ah LiFePO4",
      "specialFeature": "Dual Adjustable Folding Wings with Independent Angular Aiming"
    }
  ],
  "takeway-solar-ufo-garden-post-light-15w-rgb": [
    {
      "model": "GARDENSOLAR15R",
      "name": "15W Radial Solar UFO Garden Post Light (CW/WW)",
      "wattage": "15W (160W LED)",
      "capacity": "3,000 LM",
      "solarPanel": "5V 15W Mono Panel",
      "battery": "3.2V 20Ah LiFePO4",
      "ledSpec": "240/324 LED 5730 Epistar",
      "specialFeature": "360° Radial Downlight Distribution, Anti-Glare Radial Louver"
    },
    {
      "model": "GARDENSOLAR15R-RGB",
      "name": "15W Radial Solar UFO Garden Post Light (Dynamic RGB + White)",
      "wattage": "15W (160W LED)",
      "capacity": "3,200 LM",
      "solarPanel": "5V 15W Mono Panel",
      "battery": "3.2V 20Ah LiFePO4",
      "ledSpec": "824 LED 5730 Epistar",
      "specialFeature": "Full Spectrum RGB Color Changing + High-Lumen White Lighting with RF Remote"
    }
  ],
  "takeway-portable-solar-camping-light-100w": [
    {
      "model": "EMSOLARFL30",
      "name": "30W Multi-Function Portable Solar Work Light",
      "wattage": "30W",
      "capacity": "1,200 LM",
      "solarPanel": "5V 5W Integrated Panel",
      "battery": "3.7V 4400mAh Lithium",
      "specialFeature": "3-Color Dimming (CW/NW/WW) + Emergency Red/Blue Hazard Flasher + USB Powerbank"
    },
    {
      "model": "EMSOLARFL50",
      "name": "50W Multi-Function Portable Solar Work Light",
      "wattage": "50W",
      "capacity": "2,000 LM",
      "solarPanel": "5V 8W Integrated Panel",
      "battery": "3.7V 6600mAh Lithium",
      "specialFeature": "3-Color Dimming (CW/NW/WW) + Emergency Red/Blue Hazard Flasher + USB Powerbank"
    },
    {
      "model": "EMSOLARFL100",
      "name": "100W Multi-Function Portable Solar Work Light",
      "wattage": "100W",
      "capacity": "2,800 LM",
      "solarPanel": "5V 12W Integrated Panel",
      "battery": "3.7V 8800mAh Lithium",
      "specialFeature": "3-Color Dimming (CW/NW/WW) + Emergency Red/Blue Hazard Flasher + USB Powerbank"
    }
  ],
  "takeway-emergency-camping-light-with-fan-100w": [
    {
      "model": "EM-4REF-CP100",
      "name": "100W 4-Reflector Solar Emergency Camping Light",
      "wattage": "100W (4-Reflector)",
      "capacity": "2,800 LM",
      "solarPanel": "5V 3W Integrated Panel",
      "battery": "3.7V 4800mAh Lithium",
      "ledSpec": "288 Pcs 5730 LEDs",
      "specialFeature": "4 Folding Angular Reflector Wings, USB Powerbank, SOS Flash"
    },
    {
      "model": "EM-6REF-CP100",
      "name": "100W 6-Reflector Solar Emergency Camping Light",
      "wattage": "100W (6-Reflector)",
      "capacity": "3,000 LM",
      "solarPanel": "5V 3W Integrated Panel",
      "battery": "3.7V 7500mAh Lithium",
      "ledSpec": "200 Pcs 5730 + Center COB",
      "specialFeature": "6 Folding Angular Reflector Wings for 360° Omnidirectional Illumination"
    },
    {
      "model": "EM-4REF-CP100-FAN",
      "name": "100W Solar Camping Lantern with 3-Speed Fan",
      "wattage": "100W (with 3-Speed Fan)",
      "capacity": "3,000 LM",
      "solarPanel": "5V 3W Integrated Panel",
      "battery": "3.7V 8000mAh Lithium",
      "ledSpec": "288 Pcs 5730 LEDs",
      "specialFeature": "Integrated High-Velocity 3-Speed Cooling Fan + 4 Folding Solar Lighting Wings"
    }
  ],
  "takeway-big-diamond-solar-garden-bollard-10w": [
    {
      "model": "SOLAR-BOLLARD-MINI-3IN1+RGB",
      "name": "3W Mini Diamond Architectural Solar Bollard (400mm)",
      "wattage": "3W (Mini 400mm)",
      "capacity": "Warm White + RGB",
      "solarPanel": "5V 3W Monocrystalline Top Panel",
      "battery": "3.7V 2200mAh Lithium",
      "dimensions": "Height 400 mm",
      "specialFeature": "Faceted Diamond Refractor, 3CCT Color Switching + Multi-Color RGB"
    },
    {
      "model": "SOLAR-BOLLARD-BIG-3IN1+RGB",
      "name": "10W Standard Diamond Architectural Solar Bollard (800mm)",
      "wattage": "10W (Standard 800mm)",
      "capacity": "Warm White + RGB",
      "solarPanel": "5V 6W Monocrystalline Top Panel",
      "battery": "3.2V 6Ah LiFePO4",
      "dimensions": "Height 800 mm",
      "specialFeature": "Faceted Diamond Refractor, 3CCT Color Switching + Multi-Color RGB"
    }
  ],
  "takeway-cube-secret-solar-bollards-tungsten": [
    {
      "model": "SOLAR-BOLLARD-SECRET-WW",
      "name": "5W SECRET Cylindrical Vintage Filament Bollard (860mm)",
      "wattage": "5W Vintage Filament",
      "capacity": "Warm White 2700K",
      "solarPanel": "5V 4W Monocrystalline Panel",
      "battery": "3.7V 2600mAh Lithium",
      "dimensions": "Height 860 mm",
      "specialFeature": "Tungsten Spiral Filament Aesthetic with 360° Warm Ambient Glow"
    },
    {
      "model": "SOLAR-BOLLARD-CUBE-WW",
      "name": "5W CUBE Architectural Vintage Filament Bollard (890mm)",
      "wattage": "5W Vintage Filament",
      "capacity": "Warm White 2700K",
      "solarPanel": "5V 4W Monocrystalline Panel",
      "battery": "3.7V 2600mAh Lithium",
      "dimensions": "Height 890 mm",
      "specialFeature": "Square Minimalist Frame with Tungsten Filament Aesthetic"
    }
  ],
  "takeway-diamond-pillar-gate-light-10w": [
    {
      "model": "SOLAR-GATE-MINI-3IN1+RGB",
      "name": "3W Mini Diamond Pillar Gate Luminaire (200x200mm)",
      "wattage": "3W (Mini 200mm)",
      "capacity": "Warm/Cool/Natural + RGB",
      "solarPanel": "5V 3W Monocrystalline Panel",
      "battery": "3.7V 2200mAh Lithium",
      "dimensions": "200 x 200 mm Base",
      "specialFeature": "Faceted Prismatic Dome, 3000K/4500K/6500K Color Switch + RGB Mode"
    },
    {
      "model": "SOLAR-GATE-BIG-3IN1+RGB",
      "name": "10W Standard Diamond Pillar Gate Luminaire (300x300mm)",
      "wattage": "10W (Standard 300mm)",
      "capacity": "Warm/Cool/Natural + RGB",
      "solarPanel": "5V 6W Monocrystalline Panel",
      "battery": "3.2V 6Ah LiFePO4",
      "dimensions": "300 x 300 mm Base",
      "specialFeature": "Faceted Prismatic Dome, 3000K/4500K/6500K Color Switch + RGB Mode"
    }
  ],
  "takeway-vintage-gate-pillar-light-cube-secret": [
    {
      "model": "SOLAR-GATE-SECRET-WW",
      "name": "5W SECRET Cylindrical Vintage Gate Lantern",
      "wattage": "5W Vintage Tungsten",
      "capacity": "Warm White 2700K",
      "solarPanel": "5V 4W Monocrystalline Panel",
      "battery": "3.7V 2600mAh Lithium",
      "specialFeature": "Classic Lantern Aesthetic with Decorative Tungsten Glow for Pillar Tops"
    },
    {
      "model": "SOLAR-GATE-CUBE-WW",
      "name": "5W CUBE Square Vintage Gate Lantern",
      "wattage": "5W Vintage Tungsten",
      "capacity": "Warm White 2700K",
      "solarPanel": "5V 4W Monocrystalline Panel",
      "battery": "3.7V 2600mAh Lithium",
      "specialFeature": "Square Minimalist Frame with Tungsten Spiral Filament Aesthetic"
    }
  ],
  "takeway-shadow-lantern-solar-lawn-wall-light": [
    {
      "model": "SOLAR-LAWN-SHADOW-WW",
      "name": "5W Vintage Shadow Lantern Ground Spike Light",
      "wattage": "5W Tungsten",
      "capacity": "Warm White Shadow Art",
      "solarPanel": "5V 2W Monocrystalline Panel",
      "battery": "3.7V 1800mAh Lithium",
      "specialFeature": "Fluted Cone Optics Projecting Dramatic Geometric Shadows across Pathways"
    },
    {
      "model": "SOLAR-WALL-SHADOW-WW",
      "name": "5W Vintage Shadow Lantern Wall Hanging Light",
      "wattage": "5W Tungsten",
      "capacity": "Warm White Shadow Art",
      "solarPanel": "5V 2W Monocrystalline Panel",
      "battery": "3.7V 1800mAh Lithium",
      "specialFeature": "Wall Bracket Mount Projecting Intricate Radial Shadows on Facades"
    }
  ],
  "takeway-expandable-height-solar-lawn-light-5w": [
    {
      "model": "SOLAR-LAWN-2WAY-WW",
      "name": "5W 2-Way Mount Solar Lawn Light (Fixed Surface / Spike)",
      "wattage": "5W COB (2-Way)",
      "capacity": "COB Warm White",
      "solarPanel": "5V 2W Mono Panel",
      "battery": "3.7V 1800mAh Lithium",
      "dimensions": "Height Expandable up to 700 mm",
      "specialFeature": "Interchangeable Spike & Hardscape Flange Base Mount, Dual Brightness Modes"
    },
    {
      "model": "SOLAR-LAWN-MULTI-WW",
      "name": "5W Multi-Section Modular Solar Lawn Light",
      "wattage": "5W 90-LED (Multi-Section)",
      "capacity": "90 LED Warm White",
      "solarPanel": "5V 2W Mono Panel",
      "battery": "3.7V 1800mAh Lithium",
      "dimensions": "Height Expandable up to 700 mm",
      "specialFeature": "Modular Screw-Together Stems for Adjustable Luminaire Height"
    }
  ],
  "takeway-solar-flame-torch-lights": [
    {
      "model": "SOLARFLAME",
      "name": "5W Dancing Flame Solar Garden Torch",
      "wattage": "5W Flame Effect",
      "capacity": "96 Pcs Realistic Flame",
      "solarPanel": "5V 1.5W Monocrystalline Panel",
      "battery": "3.7V 2200mAh Lithium",
      "dimensions": "Height 780 mm",
      "specialFeature": "96 LEDs Simulating Natural Flickering Tiki Torch Flame, Ground Spike Included"
    }
  ],
  "takeway-modular-solar-wall-washer-light": [
    {
      "model": "SOLAR-WALLWASHER-4LED/UP-WW",
      "name": "10W Snap-On Expandable Solar Wall Washer (370mm)",
      "wattage": "10W High Power",
      "capacity": "Warm White Wall Grazer",
      "solarPanel": "5V 5W Monocrystalline Panel",
      "battery": "3.7V 4000mAh Lithium",
      "dimensions": "Length 370 mm",
      "specialFeature": "Snap-Together Interconnect Design to Form Continuous Linear Facade Runs"
    }
  ],
  "takeway-architectural-solar-facade-wall-light": [
    {
      "model": "SOLAR-WL-202",
      "name": "4W (2+2 Beams) Up & Down Architectural Wall Light",
      "wattage": "4W (2+2 Beams)",
      "capacity": "Warm White / RGB",
      "solarPanel": "5V 2W Monocrystalline Panel",
      "battery": "3.7V 1800mAh Lithium",
      "specialFeature": "Dual-Direction Narrow Optical Lenses Projecting Crisp Geometric Light Columns"
    },
    {
      "model": "SOLAR-WL-303",
      "name": "6W (3+3 Beams) Up & Down Architectural Wall Light",
      "wattage": "6W (3+3 Beams)",
      "capacity": "Warm White / RGB",
      "solarPanel": "5V 3W Monocrystalline Panel",
      "battery": "3.7V 2200mAh Lithium",
      "specialFeature": "Triple-Direction Narrow Optical Lenses for Dramatic Architectural Columns"
    },
    {
      "model": "SOLAR-WL-606",
      "name": "12W (6+6 Beams) Up & Down Architectural Wall Light",
      "wattage": "12W (6+6 Beams)",
      "capacity": "Warm White / RGB",
      "solarPanel": "5V 5W Monocrystalline Panel",
      "battery": "3.7V 4000mAh Lithium",
      "specialFeature": "6-Up / 6-Down High-Power Array for Luxury Villa & Hotel Facades"
    }
  ],
  "takeway-solar-garden-spike-lights-lens": [
    {
      "model": "SOLAR-SPIKE-LENS-WW",
      "name": "5W Solar Garden Lens Spike Spotlight (Warm White)",
      "wattage": "5W Warm White",
      "capacity": "18 LED 2835 Warm White",
      "solarPanel": "5V 2W Monocrystalline Panel",
      "battery": "3.7V 1200mAh Lithium",
      "specialFeature": "Adjustable Optical Luminaire Head with Heavy Ground Spike"
    },
    {
      "model": "SOLAR-SPIKE-LENS-RGB",
      "name": "5W Solar Garden Lens Spike Spotlight (Color Changing RGB)",
      "wattage": "5W RGB",
      "capacity": "18 LED 2835 RGB",
      "solarPanel": "5V 2W Monocrystalline Panel",
      "battery": "3.7V 1200mAh Lithium",
      "specialFeature": "Color Changing / Constant / Breathing Mood Lighting Modes"
    },
    {
      "model": "SOLAR-SPIKE-SQUARE-WW",
      "name": "5W Solar Garden Square Landscape Light (Warm White)",
      "wattage": "5W Square Head",
      "capacity": "Warm White Accent",
      "solarPanel": "5V 2W Monocrystalline Panel",
      "battery": "3.7V 1200mAh Lithium",
      "specialFeature": "Square Flood Pattern for Shrub & Tree Uplighting"
    }
  ],
  "takeway-solar-spike-mushroom-umbrella-crystal": [
    {
      "model": "SOLAR-SPIKE-UMBRELLA-WW",
      "name": "3W Mushroom Umbrella Solar Spike Luminaires (6 Pcs Set)",
      "wattage": "3W (6 Pcs Set)",
      "capacity": "Warm White 3000K",
      "solarPanel": "5V 2W Monocrystalline Master Panel",
      "battery": "3.7V 1200mAh Lithium",
      "specialFeature": "6 Whimsical Mushroom Diffusers, Continuous / Flash / Breathing Modes"
    },
    {
      "model": "SOLAR-SPIKE-CRYSTAL-WW",
      "name": "3W Crystal Glass Landscape Solar Luminaires (4 Pcs Set)",
      "wattage": "3W (4 Pcs Set)",
      "capacity": "Warm White 3000K",
      "solarPanel": "5V 2W Monocrystalline Master Panel",
      "battery": "3.7V 1200mAh Lithium",
      "specialFeature": "4 Prismatic Heavy-Glass Ground Fixtures for Flowerbed & Border Accent"
    }
  ]
,
  "takeway-led-wall-washer-lights": [
      {
          "model": "WW-18W-500MM",
          "name": "18W 500mm Architectural LED Wall Washer",
          "wattage": "18W (18x 1W 3030 LED)",
          "capacity": "1800 Lumens (3000K Warm / 6000K White)",
          "dimensions": "500 x 45 x 52 mm",
          "ledSpec": "18 Pcs High-Power 3030 SMD, 30° Optical Lens",
          "specialFeature": "220V AC / 24V DC, IP65 Waterproof, Die-Cast Aluminium Body",
          "image_url": "/catalog_pages/outdoor/page_3.jpg"
      },
      {
          "model": "WW-36W-1000MM",
          "name": "36W 1000mm Architectural LED Wall Washer",
          "wattage": "36W (36x 1W 3030 LED)",
          "capacity": "3600 Lumens (3000K / 4000K / 6000K)",
          "dimensions": "1000 x 45 x 52 mm",
          "ledSpec": "36 Pcs High-Power 3030 SMD, 30° Optical Lens",
          "specialFeature": "IP65 Weatherproof, High Transmittance Tempered Glass, Heavy Bracket",
          "image_url": "/catalog_pages/outdoor/page_3.jpg"
      },
      {
          "model": "WW-36W-VISOR-1000MM",
          "name": "36W Anti-Glare Visor Architectural Wall Washer",
          "wattage": "36W (36x 1W 3030 LED)",
          "capacity": "3400 Lumens with Glare Shield",
          "dimensions": "1000 x 55 x 75 mm",
          "ledSpec": "36 Pcs 3030 SMD with Asymmetric Visor Hood",
          "specialFeature": "Integrated Hood Cuts Direct Visual Glare for Monument & Facade Grazing",
          "image_url": "/catalog_pages/outdoor/page_3.jpg"
      },
      {
          "model": "WW-36W-DMX-RGB",
          "name": "36W DMX512 Intelligent Color RGB Wall Washer",
          "wattage": "36W (36x RGB Tri-color LEDs)",
          "capacity": "16.7M Colors Dynamic Flow",
          "dimensions": "1000 x 45 x 52 mm",
          "ledSpec": "DMX512 Addressable RGB 24V DC",
          "specialFeature": "Standard DMX512 Protocol Support for Dynamic City & Bridge Facade Shows",
          "image_url": "/catalog_pages/outdoor/page_3.jpg"
      }
  ],
  "takeway-wall-elevation-step-lights": [
      {
          "model": "SL-STEP-3W",
          "name": "3W Recessed Step / Staircase Light",
          "wattage": "3W COB",
          "capacity": "270 Lumens Warm White",
          "dimensions": "85 x 85 x 35 mm",
          "ledSpec": "Bridgelux High CRI COB, 3000K",
          "specialFeature": "Die-Cast In-Wall Recessed Housing, IP65 Glare-Free Downward Baffle",
          "image_url": "/catalog_pages/outdoor/page_4.jpg"
      },
      {
          "model": "SL-ELEVATION-6W-LENS",
          "name": "6W Bi-Directional Elevation Lens Light",
          "wattage": "6W (2x 3W Cree LEDs)",
          "capacity": "540 Lumens Warm White",
          "dimensions": "120 x 80 x 40 mm",
          "ledSpec": "Convex Optical Projector Lenses (Up & Down Beam)",
          "specialFeature": "Sharp Narrow-Beam Architectural Column & Wall Sconce Illumination",
          "image_url": "/catalog_pages/outdoor/page_4.jpg"
      },
      {
          "model": "SL-KLIGHT-8W",
          "name": "8W K-Light Modern Geometric Elevation Sconce",
          "wattage": "8W High-Efficiency LED",
          "capacity": "720 Lumens 3000K / 4000K",
          "dimensions": "160 x 100 x 50 mm",
          "ledSpec": "Multi-Faceted Aluminum Reflector",
          "specialFeature": "Geometric Light Accent with Dual-Side Architectural Silhouette",
          "image_url": "/catalog_pages/outdoor/page_4.jpg"
      }
  ],
  "takeway-garden-spike-light-cob": [
      {
          "model": "SPK-COB-5W",
          "name": "5W Mini Garden Spike Spotlight",
          "wattage": "5W COB",
          "capacity": "450 Lumens (3000K / 4000K / 6000K)",
          "dimensions": "Dia 42mm x H 80mm (Spike: 160mm)",
          "ledSpec": "COB High Intensity LED, 24° Beam",
          "specialFeature": "Heavy Aluminum Ground Stake, 360° Rotatable Swivel Bracket, IP65",
          "image_url": "/catalog_pages/outdoor/page_5.jpg"
      },
      {
          "model": "SPK-COB-10W",
          "name": "10W Landscape Spike Spotlight",
          "wattage": "10W COB",
          "capacity": "950 Lumens (3000K Warm White / Green)",
          "dimensions": "Dia 60mm x H 110mm (Spike: 160mm)",
          "ledSpec": "High Output Bridgelux COB, 36° Beam",
          "specialFeature": "IP65 Weatherproof Sealed Body, Perfect for Medium Trees & Palm Uplighting",
          "image_url": "/catalog_pages/outdoor/page_5.jpg"
      },
      {
          "model": "SPK-COB-20W",
          "name": "20W Heavy-Duty Tree & Architecture Spike Luminaire",
          "wattage": "20W COB",
          "capacity": "1900 Lumens (3000K / 4000K / RGB)",
          "dimensions": "Dia 75mm x H 140mm (Spike: 210mm)",
          "ledSpec": "Citizen High-Power COB, 45° Optical Lens",
          "specialFeature": "Deep Recessed Snoot with Anti-Glare Honeycomb Louver Option",
          "image_url": "/catalog_pages/outdoor/page_5.jpg"
      }
  ],
  "takeway-burial-facade-lights": [
      {
          "model": "BL-INGROUND-3W",
          "name": "3W Stainless In-Ground Walkway Burial Light",
          "wattage": "3W LED",
          "capacity": "250 Lumens 3000K",
          "dimensions": "Dia 65mm x Depth 75mm",
          "ledSpec": "High-Power Cree LED with 30° Lens",
          "specialFeature": "SS304 Front Cover, 8mm Toughened Glass, 2000kg Drive-Over Rating, IP67",
          "image_url": "/catalog_pages/outdoor/page_6.jpg"
      },
      {
          "model": "BL-INGROUND-9W",
          "name": "9W High-Power Architectural Burial Light",
          "wattage": "9W (3x 3W LEDs)",
          "capacity": "810 Lumens 3000K / RGB",
          "dimensions": "Dia 120mm x Depth 95mm",
          "ledSpec": "Tri-LED Optical Cluster, 15° / 30° / 45°",
          "specialFeature": "ABS Plastic Pre-Burial Mounting Sleeve Included, IP68 Waterproof Glands",
          "image_url": "/catalog_pages/outdoor/page_6.jpg"
      },
      {
          "model": "BL-INGROUND-12W",
          "name": "12W Drive-Over Facade & Column In-Ground Light",
          "wattage": "12W LED Matrix",
          "capacity": "1150 Lumens 3000K / 4000K / 6000K",
          "dimensions": "Dia 160mm x Depth 110mm",
          "ledSpec": "Multi-Chip COB/SMD Array with Precision Reflector",
          "specialFeature": "Drive-over resistant up to 5000kg, Pressure-Diecast Aluminum & Stainless Face",
          "image_url": "/catalog_pages/outdoor/page_6.jpg"
      }
  ],
  "takeway-underwater-pool-fountain-lights": [
      {
          "model": "UW-POOL-6W-SS",
          "name": "6W SS316 Surface Mount Swimming Pool Light",
          "wattage": "6W (12V AC/DC Safe Voltage)",
          "capacity": "500 Lumens (3000K / Cool Blue)",
          "dimensions": "Dia 120mm x Depth 25mm",
          "ledSpec": "Epistar SMD2835 High Efficiency",
          "specialFeature": "Full Marine Grade SS316 Casing, Resin-Filled IP68 Waterproofing",
          "image_url": "/catalog_pages/outdoor/page_7.jpg"
      },
      {
          "model": "UW-FOUNTAIN-12W-DMX",
          "name": "12W Center-Hole Fountain Nozzle Luminaire",
          "wattage": "12W RGB / RGBW (24V DC)",
          "capacity": "900 Lumens Dynamic Multi-Color",
          "dimensions": "Dia 160mm x Center Hole 38mm",
          "ledSpec": "12 Pcs 1W High Power RGB LEDs",
          "specialFeature": "Center Water Jet Nozzle Mounting, DMX512 Musical Fountain Synchronous",
          "image_url": "/catalog_pages/outdoor/page_7.jpg"
      },
      {
          "model": "UW-POOL-18W-RGB",
          "name": "18W Heavy-Duty Submersible Pool & Water Body Light",
          "wattage": "18W (12V AC/DC)",
          "capacity": "1600 Lumens Full RGB Color Changing",
          "dimensions": "Dia 220mm x Depth 35mm",
          "ledSpec": "High Lumen Sealed Submersible Cluster",
          "specialFeature": "Remote Controlled RGB Synchronized Modes, IP68 100% Submersible to 5m",
          "image_url": "/catalog_pages/outdoor/page_7.jpg"
      }
  ],
  "takeway-stadium-high-mast-tower-light": [
      {
          "model": "STFL-300W",
          "name": "300W Stadium & High Mast Tower Floodlight",
          "wattage": "300W (Modular Dual-Head)",
          "capacity": "45,000 Lumens (150 lm/W)",
          "dimensions": "420 x 360 x 130 mm",
          "ledSpec": "Lumileds 5050 SMD, 15°/30°/60° Optical Lenses",
          "specialFeature": "Mean Well / Inventronics Driver, 10kV Surge Protection, Rotatable Modules",
          "image_url": "/catalog_pages/outdoor/page_8.jpg"
      },
      {
          "model": "STFL-600W",
          "name": "600W Stadium High-Power Tower Floodlight",
          "wattage": "600W (Modular Quad-Head)",
          "capacity": "90,000 Lumens (150 lm/W)",
          "dimensions": "650 x 540 x 145 mm",
          "ledSpec": "Lumileds 5050 Ultra-High Output Array, CRI>80 for HD TV Broadcast",
          "specialFeature": "Die-Cast Fin Heatsink with Wind-Tunnel Aerodynamics, 20kV Surge Arrestor",
          "image_url": "/catalog_pages/outdoor/page_8.jpg"
      }
  ],
  "takeway-commercial-motion-sensor-flood-light": [
      {
          "model": "FL-PIR-50W",
          "name": "50W Slim Commercial Motion Sensor Floodlight",
          "wattage": "50W",
          "capacity": "5,000 Lumens (6500K Daylight / 4000K)",
          "dimensions": "210 x 160 x 40 mm",
          "ledSpec": "San'an 2835 High Efficiency SMD Array",
          "specialFeature": "Integrated PIR Microwave Sensor (Sens, Time, Lux Trimmers), IP65",
          "image_url": "/catalog_pages/outdoor/page_9.jpg"
      },
      {
          "model": "FL-PIR-100W",
          "name": "100W Perimeter Security Sensor Floodlight",
          "wattage": "100W",
          "capacity": "10,500 Lumens",
          "dimensions": "270 x 210 x 45 mm",
          "ledSpec": "Bridgelux High Lumen SMD, 120° Wide Flood Angle",
          "specialFeature": "Automatic Day/Night Dusk-to-Dawn Switch with 8-12m Detection Range",
          "image_url": "/catalog_pages/outdoor/page_9.jpg"
      },
      {
          "model": "FL-SLIM-200W",
          "name": "200W Commercial Heavy-Duty LED Floodlight",
          "wattage": "200W",
          "capacity": "22,000 Lumens (110 lm/W)",
          "dimensions": "360 x 280 x 55 mm",
          "ledSpec": "Industrial Array with Tempered Optical Diffuser",
          "specialFeature": "Heavy Industrial Housing, Corrosive Powder Coat, IP66 High-Grade Seal",
          "image_url": "/catalog_pages/outdoor/page_9.jpg"
      }
  ],
  "takeway-industrial-ufo-high-bay-light": [
      {
          "model": "UFO-HB-100W",
          "name": "100W Industrial UFO LED High Bay",
          "wattage": "100W",
          "capacity": "14,000 Lumens (140 lm/W)",
          "dimensions": "Dia 260mm x H 115mm",
          "ledSpec": "Philips Lumileds 3030 SMD, 90°/120° Polycarbonate Lens",
          "specialFeature": "Die-Cast Pure Aluminum Graphene Heatsink, Eye Bolt & Safety Wire Mount",
          "image_url": "/catalog_pages/outdoor/page_10.jpg"
      },
      {
          "model": "UFO-HB-150W",
          "name": "150W Industrial UFO LED High Bay",
          "wattage": "150W",
          "capacity": "21,000 Lumens (140 lm/W)",
          "dimensions": "Dia 310mm x H 125mm",
          "ledSpec": "High Efficiency 3030 SMD, CRI>80, 5000K / 6500K",
          "specialFeature": "Isolated Constant Current Driver, 6kV Surge Suppression, IP65 Dust & Washdown",
          "image_url": "/catalog_pages/outdoor/page_10.jpg"
      },
      {
          "model": "UFO-HB-200W",
          "name": "200W Ultra-High Output Industrial UFO High Bay",
          "wattage": "200W",
          "capacity": "28,000 Lumens (140 lm/W)",
          "dimensions": "Dia 360mm x H 135mm",
          "ledSpec": "Premium Industrial Grade SMD Array",
          "specialFeature": "High Bay & Warehouse Ceiling Mounting (8m to 16m Heights), IP65 Industrial",
          "image_url": "/catalog_pages/outdoor/page_10.jpg"
      }
  ],
  "takeway-dolphin-street-light-series": [
      {
          "model": "SL-DOLPHIN-30W",
          "name": "30W Dolphin Aerodynamic LED Street Light",
          "wattage": "30W",
          "capacity": "3,600 Lumens (120 lm/W)",
          "dimensions": "380 x 140 x 60 mm (Pole Spigot: 40-50mm)",
          "ledSpec": "Bridgelux High Lumen SMD, Batwing Optical Lens Type II/III",
          "specialFeature": "Aerodynamic Dolphin Fin Aluminum Body, IP66, Self-Cleaning Rain Channel",
          "image_url": "/catalog_pages/outdoor/page_11.jpg"
      },
      {
          "model": "SL-DOLPHIN-60W",
          "name": "60W Dolphin Aerodynamic LED Street Light",
          "wattage": "60W",
          "capacity": "7,800 Lumens (130 lm/W)",
          "dimensions": "460 x 175 x 65 mm (Pole Spigot: 50-60mm)",
          "ledSpec": "High Performance 3030 SMD, Uniform Road Surface Luminance",
          "specialFeature": "Pressure Die-Cast Aluminum, Tool-Less Driver Compartment Access",
          "image_url": "/catalog_pages/outdoor/page_11.jpg"
      },
      {
          "model": "SL-DOLPHIN-100W",
          "name": "100W Municipal Roadway LED Street Light",
          "wattage": "100W",
          "capacity": "13,500 Lumens (135 lm/W)",
          "dimensions": "540 x 210 x 70 mm (Pole Spigot: 60mm)",
          "ledSpec": "Lumileds 3030 Array with Batwing Distribution Lens",
          "specialFeature": "10kV Built-In Surge Protection Device (SPD), IP66 / IK08 Impact Rating",
          "image_url": "/catalog_pages/outdoor/page_11.jpg"
      },
      {
          "model": "SL-DOLPHIN-150W",
          "name": "150W Highway & Expressway LED Street Light",
          "wattage": "150W",
          "capacity": "20,500 Lumens (135 lm/W)",
          "dimensions": "620 x 250 x 75 mm (Pole Spigot: 60mm)",
          "ledSpec": "Multi-Module High Power Array",
          "specialFeature": "Designed for 8m to 12m Municipal Poles and Multi-Lane Expressways",
          "image_url": "/catalog_pages/outdoor/page_11.jpg"
      }
  ],
  "takeway-tri-proof-industrial-tube-light": [
      {
          "model": "TP-2FT-20W",
          "name": "2ft 20W IP65 Industrial Tri-Proof Luminaire",
          "wattage": "20W",
          "capacity": "2,400 Lumens (120 lm/W)",
          "dimensions": "600 x 75 x 65 mm",
          "ledSpec": "High Density SMD Strip, Opal Polycarbonate Diffuser",
          "specialFeature": "Waterproof, Dustproof, Corrosion-Proof (IP65/IK08), Stainless Clips",
          "image_url": "/catalog_pages/outdoor/page_14.jpg"
      },
      {
          "model": "TP-4FT-40W",
          "name": "4ft 40W Heavy-Duty Tri-Proof Batten Light",
          "wattage": "40W",
          "capacity": "4,800 Lumens (120 lm/W)",
          "dimensions": "1200 x 75 x 65 mm",
          "ledSpec": "Dual Row High-Efficiency SMD Strip, 4000K / 6500K",
          "specialFeature": "Through-Wiring Linkable Design for Continuous Assembly Line Runs",
          "image_url": "/catalog_pages/outdoor/page_14.jpg"
      },
      {
          "model": "TP-4FT-60W",
          "name": "4ft 60W High-Lumen Workshop Tri-Proof Luminaire",
          "wattage": "60W",
          "capacity": "7,200 Lumens (120 lm/W)",
          "dimensions": "1200 x 85 x 75 mm",
          "ledSpec": "Industrial Power Grade LED Driver & SMD Core",
          "specialFeature": "Chemical & Vapor Resistant Polycarbonate Housing for Processing Plants",
          "image_url": "/catalog_pages/outdoor/page_14.jpg"
      }
  ],
  "takeway-magnetic-track-light-system": [
      {
          "model": "MAG-TRACK-REC-2M",
          "name": "2-Meter Recessed Magnetic Track Rail (48V Safe DC)",
          "wattage": "Max 150W per Run (48V DC)",
          "capacity": "Integrated Copper Busbar System",
          "dimensions": "2000 x 70 x 50 mm",
          "specialFeature": "Trimless Recessed Architectural Channel with Tool-Free Magnetic Click-In",
          "image_url": "/catalog_pages/indoor/page_4.jpg"
      },
      {
          "model": "MAG-LINEAR-12W",
          "name": "12W Magnetic Diffused Linear Light Module",
          "wattage": "12W",
          "capacity": "1,080 Lumens (3000K / 4000K)",
          "dimensions": "300 x 22 x 45 mm",
          "ledSpec": "Anti-Glare Frosted Opal Diffuser, CRI 92",
          "specialFeature": "48V Low-Voltage Safe Insertion, Instant Repositioning Anywhere Along Track",
          "image_url": "/catalog_pages/indoor/page_4.jpg"
      },
      {
          "model": "MAG-SPOT-10W",
          "name": "10W Magnetic Focus Spotlight (360° Swivel)",
          "wattage": "10W COB",
          "capacity": "900 Lumens (3000K Warm White)",
          "dimensions": "Dia 40mm x H 90mm",
          "ledSpec": "Bridgelux High CRI COB, 24° Narrow Accent Beam",
          "specialFeature": "Multi-Axis Swivel for Accent Wall Art & Retail Display Highlighting",
          "image_url": "/catalog_pages/indoor/page_4.jpg"
      },
      {
          "model": "MAG-PENDANT-12W",
          "name": "12W Magnetic Suspended Cylinder Pendant Module",
          "wattage": "12W",
          "capacity": "1,050 Lumens (3000K Warm White)",
          "dimensions": "Dia 50mm x H 200mm (Wire 1.2m)",
          "ledSpec": "Precision Optical Lens with Matte Metallic Finished Cylinder",
          "specialFeature": "Dining Island & Reception Counter Hanging Accent over 48V Magnetic Track",
          "image_url": "/catalog_pages/indoor/page_4.jpg"
      }
  ],
  "takeway-linear-office-hanging-luminaire": [
      {
          "model": "LIN-HANG-36W",
          "name": "36W 4ft Suspended Office Linear Luminaire",
          "wattage": "36W",
          "capacity": "3,960 Lumens (110 lm/W)",
          "dimensions": "1200 x 50 x 70 mm",
          "ledSpec": "Samsung 2835 SMD, CRI 85+, 4000K Natural White",
          "specialFeature": "Anodized Architectural Aluminum Profile, Micro-Prismatic Anti-Glare Diffuser",
          "image_url": "/catalog_pages/indoor/page_8.jpg"
      },
      {
          "model": "LIN-HANG-48W-UD",
          "name": "48W Up & Down Direct/Indirect Linear Luminaire",
          "wattage": "48W (36W Down + 12W Upward Glow)",
          "capacity": "5,200 Lumens Dual Emission",
          "dimensions": "1200 x 60 x 75 mm",
          "ledSpec": "Dual Independent Optical Diffusers for Ceiling Ambient & Task Desk",
          "specialFeature": "UGR<19 Unified Glare Rating for Corporate Offices & Ergonomic Workspaces",
          "image_url": "/catalog_pages/indoor/page_8.jpg"
      }
  ],
  "takeway-backlit-commercial-panel-light": [
      {
          "model": "PNL-2X2-36W",
          "name": "36W 2x2ft Backlit Commercial LED Panel",
          "wattage": "36W",
          "capacity": "3,960 Lumens (110 lm/W)",
          "dimensions": "595 x 595 x 30 mm",
          "ledSpec": "Direct Backlit Optical Lens Array, Non-Yellowing PMMA Diffuser",
          "specialFeature": "Ultra-Slim Frame, Flicker-Free Constant Current Isolated Driver",
          "image_url": "/catalog_pages/indoor/page_12.jpg"
      },
      {
          "model": "PNL-2X2-48W",
          "name": "48W 2x2ft High-Output Backlit Panel Light",
          "wattage": "48W",
          "capacity": "5,280 Lumens (110 lm/W)",
          "dimensions": "595 x 595 x 30 mm",
          "ledSpec": "High Lumen Density SMD Matrix, 6500K Cool Daylight",
          "specialFeature": "Seamless Fit for Standard Armstrong & Gypsum False Ceilings",
          "image_url": "/catalog_pages/indoor/page_12.jpg"
      },
      {
          "model": "PNL-1X1-18W",
          "name": "18W 1x1ft Compact Backlit Panel Light",
          "wattage": "18W",
          "capacity": "1,800 Lumens (4000K / 6500K)",
          "dimensions": "295 x 295 x 28 mm",
          "ledSpec": "Evenly Spaced Lens SMD Array",
          "specialFeature": "Ideal for Restrooms, Hallways, Elevator Foyers and Compact Offices",
          "image_url": "/catalog_pages/indoor/page_12.jpg"
      }
  ],
  "takeway-cob-recessed-downlight-series": [
      {
          "model": "DL-COB-7W",
          "name": "7W Deep Anti-Glare Recessed COB Downlight",
          "wattage": "7W COB",
          "capacity": "630 Lumens (3000K / 4000K / 6000K)",
          "dimensions": "Cutout: Dia 65mm | Outer: Dia 80mm",
          "ledSpec": "Bridgelux High CRI COB, 24° Optical Baffle",
          "specialFeature": "Deep Recessed Snoot Design with UGR<16 Visual Comfort",
          "image_url": "/catalog_pages/indoor/page_16.jpg"
      },
      {
          "model": "DL-COB-15W",
          "name": "15W Commercial Recessed Downlight",
          "wattage": "15W COB",
          "capacity": "1,450 Lumens (3000K / 4000K)",
          "dimensions": "Cutout: Dia 95mm | Outer: Dia 110mm",
          "ledSpec": "Citizen High-Output COB with Faceted Aluminum Reflector",
          "specialFeature": "Die-Cast Heat Sink with Passive Thermal Cooling Fins",
          "image_url": "/catalog_pages/indoor/page_16.jpg"
      },
      {
          "model": "DL-COB-30W",
          "name": "30W High-Lumen Retail Downlight & Spotlight",
          "wattage": "30W COB",
          "capacity": "3,100 Lumens (CRI>90)",
          "dimensions": "Cutout: Dia 125mm | Outer: Dia 145mm",
          "ledSpec": "High CRI 95 Retail Grade COB for Apparel & Jewelry Showrooms",
          "specialFeature": "Adjustable Gimbal Tilt Angle up to 30° for Directional Wall Grazing",
          "image_url": "/catalog_pages/indoor/page_16.jpg"
      }
  ],
  "takeway-silicon-neon-flex-profile": [
      {
          "model": "NEON-TOP-BEND-12W",
          "name": "Top-Bending Architectural Silicone Neon Flex (12W/m)",
          "wattage": "12W per Meter (24V DC)",
          "capacity": "1,000 Lumens/m Dotless Homogeneous Glow",
          "dimensions": "Width 12mm x Height 12mm (Roll: 5m / 10m)",
          "ledSpec": "120 LEDs/m SMD2835 High Density, 3000K / 4000K / RGB",
          "specialFeature": "Food-Grade Silicone, IP67 Waterproof, UV Resistant, No Yellowing",
          "image_url": "/catalog_pages/indoor/page_20.jpg"
      },
      {
          "model": "NEON-SIDE-BEND-16W",
          "name": "Side-Bending 3D Contour Neon Flex (16W/m)",
          "wattage": "16W per Meter (24V DC)",
          "capacity": "1,350 Lumens/m Continuous Light Ribbon",
          "dimensions": "Width 16mm x Height 15mm",
          "ledSpec": "Dense SMD Array with Diffusion Barrier",
          "specialFeature": "Bends Along Curved Ceilings, Columns, and Wave Facades Seamlessly",
          "image_url": "/catalog_pages/indoor/page_20.jpg"
      },
      {
          "model": "ALU-PROFILE-CORNER",
          "name": "Corner & Recessed Anodized Aluminum LED Channel System",
          "wattage": "Compatible with 8mm to 20mm LED Strips",
          "capacity": "Includes Frosted PMMA Diffuser",
          "dimensions": "Lengths: 2m and 3m Rails",
          "specialFeature": "Architectural Trimless Plaster-In and 45° Corner Light Profiles",
          "image_url": "/catalog_pages/indoor/page_20.jpg"
      }
  ],
  "takeway-smart-cabinet-sensor-profile": [
      {
          "model": "SEN-WARDROBE-PIR",
          "name": "Smart Wardrobe Door PIR / Proximity Sensor Controller",
          "wattage": "12V / 24V DC Max 60W Load",
          "capacity": "Door Open Auto-On / Door Closed Auto-Off",
          "dimensions": "Dia 10mm Miniature Probe x Cable 1.5m",
          "specialFeature": "Instant Response Infrared Door Trigger, Recessed Flush Fit in Cabinet Edge",
          "image_url": "/catalog_pages/indoor/page_24.jpg"
      },
      {
          "model": "SEN-HAND-SWEEP",
          "name": "Touchless Hand-Sweep Motion Dimmer Sensor",
          "wattage": "12V / 24V DC Max 60W Load",
          "capacity": "Sweep to Toggle On/Off, Hover Hand to Smoothly Dim",
          "dimensions": "35 x 10 x 8 mm Inline Sensor",
          "specialFeature": "Hygienic Hand-Sweep Activation for Kitchen Cabinets & Bathroom Vanities",
          "image_url": "/catalog_pages/indoor/page_24.jpg"
      },
      {
          "model": "SEN-STAIR-CASCADE",
          "name": "16-32 Step Cascading Staircase Sensor Controller Kit",
          "wattage": "12V / 24V DC (Supports up to 32 Steps)",
          "capacity": "Sequential Step-by-Step Cascading Flow Lighting",
          "dimensions": "Central Control Box + Dual Top/Bottom PIR Sensors",
          "specialFeature": "Motion-Triggered Step Follower with Adjustable Speed and Daylight Cutoff",
          "image_url": "/catalog_pages/indoor/page_24.jpg"
      }
  ],
  "takeway-smart-solar-novaboard-pillar": [
      {
          "model": "NOVABOARD-120W-WW",
          "name": "120W Smart Solar Novaboard Interactive Pillar",
          "wattage": "120W Monocrystalline Wrap Panel",
          "capacity": "800Wh LiFePO4 Energy Storage",
          "dimensions": "Height 2800mm x Dia 350mm Column",
          "ledSpec": "30W 360° Circular LED Lantern + Downward Accent Glow",
          "solarPanel": "120W High Efficiency Cylindrical Flexible Solar Integration",
          "battery": "12.8V 60Ah LiFePO4 Long-Cycle Battery",
          "outputs": "Dual USB Fast Charge (Type-A & Type-C QC3.0), Qi Wireless Charging Shelf",
          "specialFeature": "Integrated Planter Base, Waste Segregation Bin, Public Wi-Fi Hotspot Option",
          "image_url": "/catalog_pages/solar_cooler/page_3.jpg"
      },
      {
          "model": "SMART-PILLAR-10FT",
          "name": "10ft Smart Solar Civic Information Pillar",
          "wattage": "180W Integrated Solar Structure",
          "capacity": "1200Wh LiFePO4 Energy Storage",
          "dimensions": "Height 3000mm x Width 450mm Column",
          "ledSpec": "40W High Lumen Smart Civic Area Light",
          "solarPanel": "180W Monocrystalline Multi-Faceted Array",
          "battery": "12.8V 100Ah LiFePO4 Battery",
          "outputs": "4x USB Ports, 2x Wireless Fast Pads, Environmental Air Quality Sensor",
          "specialFeature": "Digital Signage Mounting Bay, Emergency SOS Call Button, CCTV Pod",
          "image_url": "/catalog_pages/solar_cooler/page_4.jpg"
      }
  ],
  "takeway-smart-solar-garden-lounge-utility-pod": [
      {
          "model": "LOUNGE-BENCH-250W",
          "name": "Smart Solar Garden Lounge Bench with Active Cooling",
          "wattage": "250W Bifacial Solar Canopy",
          "capacity": "1000Wh LiFePO4 Energy Bank",
          "dimensions": "Length 2000mm x Width 800mm x Canopy H 2200mm",
          "ledSpec": "15W Warm Ambient Under-Seat & Canopy Reading Lights",
          "solarPanel": "250W Bifacial Tempered Glass Solar Canopy",
          "battery": "12.8V 80Ah LiFePO4 High Safety Battery",
          "outputs": "4x USB-A/Type-C QC3.0, 2x Wireless Qi Induction Pads, 12V DC Port",
          "specialFeature": "Built-in Active Evaporative Seat Cooler Fans, Ergonomic Weatherproof WPC Slats",
          "image_url": "/catalog_pages/solar_cooler/page_5.jpg"
      },
      {
          "model": "UTILITY-POD-500W",
          "name": "500W Solar Shaded Utility Pod & Workstation",
          "wattage": "500W Monocrystalline High-Yield Roof",
          "capacity": "2400Wh LiFePO4 Battery Bank",
          "dimensions": "2400 x 1800 x 2400 mm",
          "ledSpec": "30W Overhead LED Task & Area Diffuser",
          "solarPanel": "500W Monocrystalline Photovoltaic Array",
          "battery": "25.6V 100Ah LiFePO4 Battery Pack",
          "outputs": "2x AC 230V 500W Pure Sine Outlets for Laptops, 6x USB Charging Ports",
          "specialFeature": "Integrated Outdoor Desk Space, Bluetooth Audio Speakers, Free Standing Base",
          "image_url": "/catalog_pages/solar_cooler/page_6.jpg"
      }
  ],
  "takeway-smart-solar-patio-umbrella-hut": [
      {
          "model": "UMBRELLA-SOLAR-300W",
          "name": "300W Smart Solar Heavy-Duty Patio Umbrella",
          "wattage": "300W Flexible Solar Array",
          "capacity": "600Wh LiFePO4 Battery Core",
          "dimensions": "Canopy Dia 3000mm x Height 2600mm",
          "ledSpec": "Rib-Mounted Warm White LED Illumination",
          "solarPanel": "300W Lightweight CIGS/Mono Flexible Petals",
          "battery": "12.8V 50Ah LiFePO4 Internal Mast Pack",
          "outputs": "4x Fast USB Ports, 2x Qi Wireless Pads on Base Table",
          "specialFeature": "360° Cantilever Crank Opening, Granite Counterweight Base with Wheels",
          "image_url": "/catalog_pages/solar_cooler/page_7.jpg"
      },
      {
          "model": "PARK-HUT-500W",
          "name": "500W Community Park Gazebo Hut with Solar Roof",
          "wattage": "500W Rigid Solar Canopy",
          "capacity": "2000Wh LiFePO4 Storage",
          "dimensions": "3000 x 2500 x 2700 mm (Seats 6 to 8 People)",
          "ledSpec": "25W Ceiling Downlight + Solar Perimeter Accent",
          "solarPanel": "500W Heavy-Duty Monocrystalline Panels",
          "battery": "25.6V 80Ah LiFePO4 Battery",
          "outputs": "Multiple USB Quick Charge Ports + 230V Small Appliance Socket",
          "specialFeature": "Powder-Coated Structural Steel Frame, Teak Wood Composite Seating Table",
          "image_url": "/catalog_pages/solar_cooler/page_8.jpg"
      }
  ],
  "takeway-smart-solar-transit-bus-stop": [
      {
          "model": "BUS-SHELTER-1350W",
          "name": "Smart Solar Transit Bus Stop Shelter (1350W Roof)",
          "wattage": "1350W Monocrystalline PV Roof",
          "capacity": "4800Wh Industrial LiFePO4 Storage",
          "dimensions": "Length 4500mm x Depth 2000mm x Height 2600mm",
          "ledSpec": "50W LED Advertising Backlight + 30W Passenger Area Lighting",
          "solarPanel": "1350W (3x 450W Mono Half-Cell Panels)",
          "battery": "48V 100Ah LiFePO4 Heavy Cycle Battery",
          "outputs": "8x Public USB Fast Chargers, 2x Qi Wireless Charging Shelves",
          "specialFeature": "Digital Passenger Information Display (PID) Port, CCTV Dome, Emergency SOS Siren",
          "image_url": "/catalog_pages/solar_cooler/page_9.jpg"
      }
  ],
  "takeway-solar-hybrid-ev-charging-station": [
      {
          "model": "EV-SOLAR-STATION-11KW",
          "name": "11kW Solar Hybrid Multi-Bay EV Charging Station",
          "wattage": "11kW Solar Canopy + Grid Interactive",
          "capacity": "15kWh - 30kWh Modular LiFePO4 BESS",
          "dimensions": "Dual Vehicle Bay (6000 x 5000 mm)",
          "ledSpec": "High Bay Canopy Lighting & Dynamic Charging Status Indicators",
          "solarPanel": "11kW High-Efficiency Bifacial Solar Canopy",
          "battery": "High-Voltage LFP Battery Storage System",
          "outputs": "Dual 7.4kW / 11kW Type 2 AC EV Guns + DC Fast Option",
          "specialFeature": "Integrated Commercial Touch Kiosk, RFID / UPI Payment Gateway, Cloud Telemetry",
          "image_url": "/catalog_pages/solar_cooler/page_10.jpg"
      }
  ],
  "takeway-modular-solar-prefab-security-cabin": [
      {
          "model": "CABIN-ECO-COOL-480W",
          "name": "Modular Solar Pre-Fab Eco Cooling Security Cabin (6x4ft)",
          "wattage": "480W Solar Panel",
          "capacity": "2400Wh LiFePO4 Battery Bank",
          "dimensions": "1800 x 1200 x 2400 mm (6x4ft)",
          "ledSpec": "15W Interior Task LED + 20W Exterior Security Floodlight",
          "solarPanel": "480W Monocrystalline Solar Panel",
          "battery": "12.8V 200Ah LiFePO4 Battery",
          "outputs": "Internal 230V Pure Sine Socket, 12V DC Outlets, Dual USB Ports",
          "specialFeature": "Passive & Active Evaporative Eco-Cooling System, Double Skin Insulated Wall Panels",
          "image_url": "/catalog_pages/solar_cooler/page_11.jpg"
      },
      {
          "model": "CABIN-ECO-COOL-960W",
          "name": "Large Modular Solar Security Post Cabin (8x6ft)",
          "wattage": "960W Solar Array (2x 480W)",
          "capacity": "4800Wh LiFePO4 Battery Bank",
          "dimensions": "2400 x 1800 x 2400 mm (8x6ft)",
          "ledSpec": "Dual Interior LED Luminaires + 360° Exterior Sentry Floodlights",
          "solarPanel": "960W Monocrystalline Array",
          "battery": "25.6V 200Ah LiFePO4 Battery",
          "outputs": "Multiple 230V AC Plugs for Computer, Radio & Air Cooler",
          "specialFeature": "High-grade Thermal PUF Sandwich Panels, Toughened Tinted Windows, Steel Lock Door",
          "image_url": "/catalog_pages/solar_cooler/page_11.jpg"
      }
  ],
  "takeway-army-modular-solar-sentry-checkpost": [
      {
          "model": "ARMY-SENTRY-POST-480W",
          "name": "Indian Army High-Altitude Modular Solar Sentry Checkpost",
          "wattage": "480W Extreme Weather Solar Panel",
          "capacity": "2400Wh Cold-Resistant LiFePO4 (Operates down to -30°C)",
          "dimensions": "1800 x 1800 x 2400 mm High-Altitude Spec",
          "ledSpec": "Military Grade Red/White Switchable Interior Light + 30W High-Mast Floodlight",
          "solarPanel": "480W Reinforced Snow-Shedding High-Angle Solar Array",
          "battery": "LiFePO4 with Internal Thermal Management & Heating Jacket",
          "outputs": "VHF/UHF Tactical Radio Charging Port, Handheld Spotlight Port, 230V AC Socket",
          "specialFeature": "Ballistic & Severe Cold Insulation, Quick Deployable Modular Camouflage Shell",
          "image_url": "/catalog_pages/army_camp/page_3.jpg"
      },
      {
          "model": "ARMY-OBSERVATION-TOWER",
          "name": "Forward Observation Post Solar Power & Comms Shelter",
          "wattage": "960W Solar Array (Bifacial)",
          "capacity": "4800Wh Military Grade LiFePO4",
          "dimensions": "2400 x 2400 x 2600 mm",
          "ledSpec": "Blackout-Compliant Tactical Lighting System",
          "solarPanel": "960W Anti-Glare Matte Solar Panels",
          "battery": "24V 200Ah Ruggedized Battery Bank",
          "outputs": "Multiple Military Communication Terminals & Radar Supply Outlets",
          "specialFeature": "Tested for Siachen / Ladakh High-Altitude Low-Pressure Extreme Snow Conditions",
          "image_url": "/catalog_pages/army_camp/page_4.jpg"
      }
  ],
  "takeway-army-solar-infrastructure-conversion-kit": [
      {
          "model": "ARMY-KIT-500W-PLUG",
          "name": "500W Army Camp Plug-and-Play Solar Conversion Kit",
          "wattage": "500W Foldable / Quick-Mount Solar Array",
          "capacity": "1200Wh Ruggedized LiFePO4 Energy Box",
          "dimensions": "Portable Pelican Style Field Transport Case",
          "ledSpec": "4x 10W Daisy-Chained Camp Tent LED Lamps with Carabiners",
          "solarPanel": "500W High Efficiency Foldable Military Grade PV Array",
          "battery": "12V 100Ah LiFePO4 Integrated Charge Controller",
          "outputs": "4x 12V DC Sockets, 4x Military Fast USBs, 1x 230V 500W Pure Sine Outlet",
          "specialFeature": "Converts Any Field Tent or Bunker into 24/7 Self-Sufficient Powered Outpost in 15 Minutes",
          "image_url": "/catalog_pages/army_camp/page_6.jpg"
      },
      {
          "model": "ARMY-KIT-1000W-COMMAND",
          "name": "1000W Field Command & Medical Tent Solar Conversion Kit",
          "wattage": "1000W Solar Photovoltaic Generation",
          "capacity": "2400Wh Heavy-Duty LiFePO4 Energy Storage",
          "dimensions": "Dual Man-Portable Shock-Mounted Transit Cases",
          "ledSpec": "8x 15W High CRI Surgical / Command Map Worklights",
          "solarPanel": "1000W Rapid Deploy Frameless Panels",
          "battery": "24V 100Ah LiFePO4 Energy Storage",
          "outputs": "Multiple 230V Pure Sine Outlets for Medical Fridges, Drones, Satellite Radios",
          "specialFeature": "Zero Acoustic Noise (Silent Sentinel), Completely Eliminates Night DG Smoke & Sound",
          "image_url": "/catalog_pages/army_camp/page_7.jpg"
      }
  ],
  "takeway-army-hybrid-solar-inverter-dgset": [
      {
          "model": "ARMY-HYBRID-ESS-2KVA",
          "name": "2kVA Defense Hybrid Solar-DG Microgrid Controller & ESS",
          "wattage": "2000W Pure Sine Wave (Peak 4000W)",
          "capacity": "3840Wh LiFePO4 Extended Storage",
          "dimensions": "550 x 380 x 620 mm Wheels & Tow Handle",
          "solarPanel": "Supports Up to 2000W Solar PV Input (MPPT 60-150V)",
          "battery": "48V 80Ah Military Grade LiFePO4",
          "outputs": "2x 230V 16A Industrial Sockets, Auto DG Generator Start/Stop Signal Link",
          "specialFeature": "Auto-Prioritizes Solar -> Battery -> DG Set; Reduces Diesel Consumption by over 65%",
          "image_url": "/catalog_pages/army_camp/page_10.jpg"
      },
      {
          "model": "ARMY-HYBRID-ESS-5KVA",
          "name": "5kVA Tactical Battalion Hybrid Power Station",
          "wattage": "5000W Continuous Pure Sine Wave",
          "capacity": "7680Wh LiFePO4 High Capacity",
          "dimensions": "680 x 480 x 750 mm Skid Mounted with Crane Lift Eyes",
          "solarPanel": "Supports Up to 5000W Solar PV Input",
          "battery": "48V 160Ah Heavy Armor Battery Pack",
          "outputs": "Heavy-Duty IP67 Military Couplers, 3-Phase or High-Current Single Phase",
          "specialFeature": "Ruggedized for Extreme Shock, Sandstorm, Sub-Zero Operation with Smart Remote Telemetry",
          "image_url": "/catalog_pages/army_camp/page_12.jpg"
      }
  ]
};
