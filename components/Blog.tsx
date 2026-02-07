import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, User, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  if (activePost) {
    return (
      <div className="pt-24 pb-20 bg-white min-h-screen">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setActivePost(null)}
            className="flex items-center text-brand-600 font-medium mb-8 hover:underline"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Blog
          </button>
          
          <img 
            src={activePost.image} 
            alt={activePost.title} 
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"
          />

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center"><Calendar size={16} className="mr-1" /> {activePost.date}</span>
            <span className="flex items-center"><User size={16} className="mr-1" /> {activePost.author}</span>
            <div className="flex items-center gap-2">
              {activePost.tags.map(tag => (
                <span key={tag} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{activePost.title}</h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
            {activePost.content.map((block, idx) => {
              if (block.type === 'h3') {
                return (
                  <h3 key={idx} className="text-lg font-bold mt-6">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul key={idx} className="list-disc pl-5 my-4 space-y-2">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="mt-2">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
             <h3 className="font-bold text-gray-900 mb-4">Share this article</h3>
             <div className="flex gap-4">
               {/* Social placeholders */}
               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Facebook</button>
               <button className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Twitter</button>
               <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">WhatsApp</button>
             </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Our Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Latest Updates & Tips</h2>
          <p className="mt-4 text-gray-600">Expert advice on water purification, health, and maintenance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <div 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600">
                  {post.tags[0]}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-400 mb-3">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-brand-600 font-semibold text-sm mt-auto">
                  Read Article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
