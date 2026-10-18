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
};
