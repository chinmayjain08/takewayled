'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface CategoryFilterProps {
  currentCategory: string;
}

export default function CategoryFilter({ currentCategory }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = [
    { label: 'All Products (69)', value: 'all' },
    { label: 'Solar Street Lights (15)', value: 'Solar Street Lights' },
    { label: 'Indoor Commercial (6)', value: 'Indoor Commercial Lighting' },
    { label: 'Architectural & Facade (3)', value: 'Architectural & Facade' },
    { label: 'Commercial Floodlights (2)', value: 'Commercial Floodlights' },
    { label: 'Roadway & Highway (1)', value: 'Roadway & Street Lights' },
    { label: 'Industrial High Bays (2)', value: 'Industrial High Bays' },
    { label: 'Smart Solar Spaces (6)', value: 'Smart Solar Spaces' },
    { label: 'Defence & Camp Solutions (3)', value: 'Defence & Camp Solutions' },
    { label: 'Solar CCTV Lights (6)', value: 'Solar CCTV Lights' },
    { label: 'Solar Inverters & ESS (2)', value: 'Solar Inverters & ESS' },
    { label: 'Solar Panels & Modules (3)', value: 'Solar Panels' },
    { label: 'Solar Floodlights (3)', value: 'Solar Floodlights' },
    { label: 'Garden, Post & Landscape (12)', value: 'Solar Post & Landscape' },
    { label: 'Underwater & Pool (2)', value: 'Underwater & Landscape' },
    { label: 'Portable Work Lights (2)', value: 'Portable Work Lights' },
  ];

  const handleSelect = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {categories.map((c) => {
        const active = (c.value === 'all' && !currentCategory) || currentCategory === c.value;
        return (
          <button
            key={c.value}
            onClick={() => handleSelect(c.value)}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
              active
                ? 'bg-cyan-400 text-zinc-950 font-bold shadow-cyan-glow'
                : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
