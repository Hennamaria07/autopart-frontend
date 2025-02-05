import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card";

interface TabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

const TabContext = React.createContext<TabContextType>({
  activeTab: '',
  setActiveTab: () => null,
});

const Tabs: React.FC<TabsProps> = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = React.useState<string>(defaultValue);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`w-full ${className || ''}`}>
        {children}
      </div>
    </TabContext.Provider>
  );
};

const TabsList: React.FC<TabsListProps> = ({ children, className }) => {
  return (
    <div className={`flex border-b border-gray-200 ${className || ''}`}>
      {children}
    </div>
  );
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className }) => {
  const { activeTab, setActiveTab } = React.useContext(TabContext);
  
  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 text-sm font-medium transition-colors
        ${activeTab === value 
          ? 'border-b-2 border-primary text-primary' 
          : 'text-gray-600 hover:text-gray-900'
        } ${className || ''}`}
    >
      {children}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
  const { activeTab } = React.useContext(TabContext);
  
  if (activeTab !== value) return null;
  
  return (
    <div className="mt-4">
      {children}
    </div>
  );
};

// Example usage component
const TabsExample: React.FC = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Product Information</CardTitle>
        <CardDescription>View and manage product details</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="details" className="w-full">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Product Details</h3>
              <p>Manage your product details and specifications here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="pricing">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Pricing Information</h3>
              <p>Set and manage product pricing and discounts.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="inventory">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Inventory Management</h3>
              <p>Track and update product inventory levels.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsExample };
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps };