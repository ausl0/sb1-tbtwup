import React from 'react'
import { X, ExternalLink, MessageCircle, ChevronUp } from 'lucide-react'
import { Site, Comment } from '../types'
import CommentSection from './CommentSection'

interface SiteDetailsModalProps {
  site: Site
  comments: Comment[]
  onClose: () => void
  onAddComment: (siteId: number, content: string) => void
}

const SiteDetailsModal: React.FC<SiteDetailsModalProps> = ({ site, comments, onClose, onAddComment }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold">{site.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-6">
          <div className="flex items-start mb-6">
            <div className="flex flex-col items-center mr-6">
              <button
                className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => {/* Add upvote logic */}}
              >
                <ChevronUp className="w-8 h-8 text-gray-500" />
                <span className="text-lg font-semibold text-gray-700">{site.upvotes}</span>
              </button>
            </div>
            <div className="flex-grow">
              <p className="text-lg text-gray-800 mb-2">{site.description}</p>
              <p className="text-sm text-gray-600 mb-4">{site.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {site.aiTools.map((tool, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{comments.length} comments</span>
                </div>
                <div className="flex items-center">
                  <img
                    src={site.addedBy.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(site.addedBy.name)}&background=random`}
                    alt={site.addedBy.name}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span>Added by {site.addedBy.name}</span>
                </div>
              </div>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Visit Site <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            {site.imageUrl && (
              <div className="ml-6 flex-shrink-0">
                <img src={site.imageUrl} alt={site.name} className="w-64 h-48 object-cover rounded-lg shadow-md" />
              </div>
            )}
          </div>
          <CommentSection
            siteId={site.id}
            comments={comments}
            onAddComment={(content) => onAddComment(site.id, content)}
          />
        </div>
      </div>
    </div>
  )
}

export default SiteDetailsModal