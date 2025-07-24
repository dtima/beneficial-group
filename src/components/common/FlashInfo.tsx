import React from 'react';

const FlashInfo = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2">Flash Info</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">The latest news and milestones from Beneficial Group.</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="border-l-2 border-green-700 pl-8 space-y-10">
                    <div className="relative">
                        <div className="absolute -left-[38px] top-1 w-4 h-4 bg-green-700 rounded-full"></div>
                        <p className="text-sm text-gray-500">2024-02-20</p>
                        <h4 className="font-bold text-xl">Kette Council Website Launch</h4>
                        <p className="text-gray-600">Provided support and expertise for the successful launch.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[38px] top-1 w-4 h-4 bg-green-700 rounded-full"></div>
                        <p className="text-sm text-gray-500">2024-02-15</p>
                        <h4 className="font-bold text-xl">Best Diplomat Event Representation</h4>
                        <p className="text-gray-600">Proudly represented Cameroon&apos;s interests in Turkey.</p>
                    </div>
                     <div className="relative">
                        <div className="absolute -left-[38px] top-1 w-4 h-4 bg-green-700 rounded-full"></div>
                        <p className="text-sm text-gray-500">2024-02-05</p>
                        <h4 className="font-bold text-xl">APME Investment Presentation</h4>
                        <p className="text-gray-600">Presented our toothpick production initiative in Yaounde.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FlashInfo; 