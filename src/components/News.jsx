import React from 'react';
import { Link } from 'react-router-dom';

const newsArticles = [
  {
    id: 1,
    title: 'Launching LandLink: Connecting Kenyans to Licensed Surveyors',
    date: 'June 20, 2025',
    summary:
      'I’m excited to announce the launch of LandLink, a platform simplifying land parcel booking and surveyor services. Read about how it works and upcoming features.',
    link: '/news/launching-landlink',
  },
  {
    id: 2,
    title: 'Exploring the Power of AI in Spatial Data Analysis',
    date: 'May 15, 2025',
    summary:
      'Discover how AI and machine learning are transforming GIS and geoinformation technologies, and what it means for the future of land surveying in Kenya.',
    link: '/news/ai-in-spatial-data',
  },
  {
    id: 3,
    title: 'Behind the Scenes: Creating the “Chimp wa Siraki” Series',
    date: 'April 5, 2025',
    summary:
      'A look at the creative process, cultural inspiration, and storytelling techniques used to produce the viral Kikuyu-Swahili “Chimp wa Siraki” videos.',
    link: '/news/chimp-wa-siraki',
  },
];

export default function News() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 font-[Manrope] text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-12 text-center">
          Latest News & Articles
        </h1>

        <div className="space-y-8">
          {newsArticles.map(({ id, title, date, summary, link }) => (
            <article
              key={id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
              <time className="block text-sm text-gray-500 mb-4">{date}</time>
              <p className="text-gray-700 mb-4">{summary}</p>
              <Link
                to={link}
                className="text-blue-600 hover:underline font-semibold"
              >
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
