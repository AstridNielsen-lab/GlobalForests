import React from 'react';
import { Map, TreePine, Users, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Map,
    title: 'Identify Priority Areas',
    description: 'We use advanced mapping technology to identify regions most in need of reforestation.',
  },
  {
    icon: Users,
    title: 'Partner with Communities',
    description: 'We work with local communities to ensure sustainable, long-term impact.',
  },
  {
    icon: TreePine,
    title: 'Plant & Nurture',
    description: 'Using native species and proven techniques, we plant and maintain new forests.',
  },
  {
    icon: LineChart,
    title: 'Monitor Progress',
    description: 'We track growth and impact using satellite imagery and ground surveys.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From identification to implementation, we follow a proven process to maximize our impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center h-full">
                <step.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}