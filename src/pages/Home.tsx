import React, { useState, useMemo } from 'react';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/search/SearchBar';
import { FilterPanel } from '../components/search/FilterPanel';
import { ViewToggle } from '../components/search/ViewToggle';
import { SearchResults } from '../components/search/SearchResults';
import { tools } from '../config/tools';

export function Home() {
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesQuery = tool.title.toLowerCase().includes(query.toLowerCase()) ||
                         tool.description.toLowerCase().includes(query.toLowerCase());
      
      const matchesCategories = selectedCategories.length === 0 ||
                               selectedCategories.some(cat => 
                                 tool.categories?.includes(cat)
                               );
      
      return matchesQuery && matchesCategories;
    });
  }, [query, selectedCategories]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <Hero />
      
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            onFilterClick={() => setIsFilterOpen(true)}
          />
          <ViewToggle view={view} onViewChange={setView} />
        </div>

        <SearchResults tools={filteredTools} view={view} />
      </div>

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}