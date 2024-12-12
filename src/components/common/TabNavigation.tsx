'use client';

interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export default function TabNavigation({ 
  tabs, 
  activeTab, 
  onTabChange,
  className = '' 
}: TabNavigationProps) {
  return (
    <div className={`border-b border-gray-200 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative px-6 py-4 text-lg transition-colors
                hover:text-blue-600
                ${activeTab === tab.id 
                  ? 'text-blue-600 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                  : 'text-gray-600'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}