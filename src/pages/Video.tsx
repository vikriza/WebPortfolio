import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface VideoItem {
  id: number;
  title: string;
  thumbnailUrl: string;
  youtubeId: string;
  description: string;
  category: string;
  tools: string[];
  duration: string;
}

const Video = () => {
  const [items, setItems] = useState<VideoItem[]>([
    {
      id: 1,
      title: "Video Project 1",
      thumbnailUrl: "https://source.unsplash.com/random/800x600?video-editing&sig=1",
      youtubeId: "dQw4w9WgXcQ",
      description: "A compelling video project that combines dynamic visuals with seamless transitions. This piece demonstrates advanced editing techniques and storytelling through motion.",
      category: "Motion Graphics",
      tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
      duration: "2:45"
    },
    {
      id: 2,
      title: "Video Contoh 2",
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1669828434939-ce514c1495d4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      youtubeId: "pGtbAVZ2Y3M",
      description: "An innovative video production showcasing creative storytelling and expert color grading. This project highlights the perfect blend of visual effects and narrative flow.",
      category: "Commercial",
      tools: ["Final Cut Pro", "Adobe After Effects", "Color Grading Suite"],
      duration: "3:30"
    }
  ]);
  const [hasMore, setHasMore] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const fetchMoreData = () => {
    const newItems = Array.from({ length: 6 }, (_, i) => ({
      id: items.length + i + 1,
      title: `Video Project ${items.length + i + 1}`,
      thumbnailUrl: `https://source.unsplash.com/random/800x600?video-editing&sig=${items.length + i}`,
      youtubeId: "dQw4w9WgXcQ",
      description: "A masterful blend of visual storytelling and technical excellence. This video project showcases advanced editing techniques and creative direction.",
      category: ['Commercial', 'Motion Graphics', 'Short Film'][Math.floor(Math.random() * 3)],
      tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
      duration: `${Math.floor(Math.random() * 5 + 1)}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')}`
    }));

    setTimeout(() => {
      setItems([...items, ...newItems]);
      if (items.length >= 30) setHasMore(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Video Portfolio</h1>
      
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl">
            <div className="flex flex-col">
              {/* Video Section */}
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-t-lg"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Description Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedVideo.title}</h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {selectedVideo.category}
                      </span>
                      <span className="text-gray-600 text-sm">
                        Duration: {selectedVideo.duration}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedVideo.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedVideo.tools.map((tool, index) => (
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
              onClick={() => setSelectedVideo(item)}
            >
              <div className="relative">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-200">{item.category}</span>
                    <span className="text-sm text-gray-200">{item.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Video;