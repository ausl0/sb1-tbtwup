import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Site } from '../types';

interface SubmitSiteFormProps {
  onClose: () => void;
  onSubmit: (site: Omit<Site, 'id' | 'upvotes' | 'createdAt'>) => void;
}

const SubmitSiteForm: React.FC<SubmitSiteFormProps> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [url, setUrl] = useState('');
  const [aiTools, setAiTools] = useState('');
  const [submitterInfo, setSubmitterInfo] = useState('');
  const [isOwnSite, setIsOwnSite] = useState(false);
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      longDescription,
      url,
      aiTools: aiTools.split(',').map(tool => tool.trim()),
      submitterInfo,
      isOwnSite,
      addedBy: {
        name: submitterInfo || 'Anonymous',
      },
      tags: tags.split(',').map(tag => tag.trim()),
      category,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Submit an AI-built site</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Site Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Short Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows={2}
            />
          </div>
          <div>
            <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700">Long Description</label>
            <textarea
              id="longDescription"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows={4}
            />
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isOwnSite}
                onChange={(e) => setIsOwnSite(e.target.checked)}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">Is this your site?</span>
            </label>
          </div>
          {isOwnSite && (
            <div>
              <label htmlFor="aiTools" className="block text-sm font-medium text-gray-700">AI Tools Used (comma-separated)</label>
              <input
                type="text"
                id="aiTools"
                value={aiTools}
                onChange={(e) => setAiTools(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          )}
          <div>
            <label htmlFor="submitterInfo" className="block text-sm font-medium text-gray-700">Your Name or Username</label>
            <input
              type="text"
              id="submitterInfo"
              value={submitterInfo}
              onChange={(e) => setSubmitterInfo(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select a category</option>
              <option value="e-commerce">E-commerce</option>
              <option value="portfolio">Portfolio</option>
              <option value="blog">Blog</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Submit Site
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitSiteForm;