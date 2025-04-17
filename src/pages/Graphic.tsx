import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface GraphicItem {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  category: string;
  tools: string[];
}

const Graphic = () => {
  const [items, setItems] = useState<GraphicItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [selectedItem, setSelectedItem] = useState<GraphicItem | null>(null);

  // Simulated data with more detailed information
  const generateItems = (startIndex: number) => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: startIndex + i,
      title: `Design Project ${startIndex + i}`,
      imageUrl: `https://source.unsplash.com/random/800x600?graphic-design&sig=${startIndex + i}`,
      description: `A creative design project that showcases modern aesthetics and purposeful visual communication. This project demonstrates the perfect balance between form and function.`,
      category: ['Brand Identity', 'Digital Art', 'Print Design'][Math.floor(Math.random() * 3)],
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma']
    }));
  };

  useEffect(() => {
    setItems(generateItems(0));
  }, []);

  const fetchMoreData = () => {
    const newItems = generateItems(items.length);
    setTimeout(() => {
      setItems([...items, ...newItems]);
      if (items.length >= 30) setHasMore(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Graphic Design Portfolio</h1>

      {/* Preview Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-3/5 relative">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                />
              </div>
              
              {/* Description Section */}
              <div className="md:w-2/5 p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedItem.title}</h2>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div className="text-center py-4">Loading...</div>}
        endMessage={<div className="text-center py-4">No more items to load.</div>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="text-sm text-gray-200">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Graphic;