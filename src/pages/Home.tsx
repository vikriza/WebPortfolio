import React from 'react';
import { Palette, Video, User } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600">Graphic Designer & Video Editor</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
            <img 
              src="https://drive.google.com/u/0/drive-viewer/AKGpihYm-cbMwSPpNmDk41hn_DO2Ezkj2AOG8ZSLguVmQPTnAvCPQ7yhg-LGfFuAOhCS-07djQyA_Gn31TBDP7KGHo4d3FcTQ84m5OY=s1600-rw-v1" 
              alt="Profile" 
              className="h-48 w-48 object-contain"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">About Me</h2>
            </div>
            <p className="text-gray-600">
              I am a passionate graphic designer and video editor with experience in creating
              compelling visual content that tells stories and engages audiences. With years
              of experience in both fields, I bring creativity and technical expertise to
              every project I undertake.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <Palette className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Graphic Design</h2>
            </div>
            <p className="text-gray-600">
              Specializing in brand identity, digital illustrations, and marketing materials
              that help businesses stand out in the digital landscape. My approach combines
              modern design principles with innovative creative solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <Video className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Video Editing</h2>
            </div>
            <p className="text-gray-600">
              Creating engaging video content through creative storytelling, smooth transitions,
              and professional post-production techniques. I specialize in crafting compelling
              narratives that capture and maintain viewer attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;