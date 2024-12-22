import React from 'react';
import { TreePine, Sprout, Users, Globe } from 'lucide-react';

const stats = [
  {
    icon: TreePine,
    value: '1M+',
    label: 'Trees Planted',
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries',
  },
  {
    icon: Users,
    value: '100K+',
    label: 'Volunteers',
  },
  {
    icon: Sprout,
    value: '5K',
    label: 'Hectares Restored',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we're making a measurable difference in the fight against deforestation and climate change.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <stat.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}