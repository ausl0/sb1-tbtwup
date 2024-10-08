import React from 'react';
import { Link } from 'react-router-dom';
import AnalyticsPanel from './AnalyticsPanel';
import ErrorBoundary from './ErrorBoundary';
import { Site } from '../types';

interface AboutPageProps {
  sites: Site[];
}

const AboutPage: React.FC<AboutPageProps> = ({ sites }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About CoolSites.AI</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="text-lg mb-4">
          CoolSites.AI is a curated showcase of websites and apps built with AI tools and technologies. Our goal is to help you discover useful products, spark ideas for your own projects, and provide a platform for people to showcase their innovative creations.
        </p>
        <p className="text-lg mb-4">
          This is version 1 of CoolSites.AI, built using Bolt.new. We'll keep upgrading the site and documenting our progress as we dive deeper into the fast-evolving world of AI programming. Follow us on X (@auslojames) for updates.
        </p>
      </div>
      <div id="analytics">
        <h2 className="text-2xl font-bold mb-4">Site Analytics</h2>
        <ErrorBoundary>
          <AnalyticsPanel sites={sites} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default AboutPage;