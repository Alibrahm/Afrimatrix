"use client";

import { useEffect, useState } from "react";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  content?: string;
  source_id?: string;
  image_url?: string;
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRSSArticles() {
      try {
        const res = await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_87182b78641a2486119ef8051b9b64ca979d0&country=ke&category=business,domestic,politics,science"
        );
        const data = await res.json();
        setArticles(data.results || []);
      } catch (error) {
        console.error("Failed to fetch RSS articles:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRSSArticles();
  }, []);

  return (
    <div className="min-h-screen py-10 px-4 md:px-16 bg-gradient-to-b from-[#414D75] to-gray-100">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-100 tracking-tight">
        Blog & Media
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Articles Section */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading ? (
            <div className="col-span-full flex justify-center items-center h-64">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
            </div>
          ) : articles.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No articles found.
            </p>
          ) : (
            articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-52 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-blue-700 hover:underline"
                  >
                    {article.title}
                  </a>
                  <p className="mt-2 text-sm text-gray-600">
                    {article.pubDate
                      ? new Date(article.pubDate).toLocaleDateString()
                      : ""}
                  </p>
                  {article.source_id && (
                    <p className="text-xs text-gray-400">
                      Source: {article.source_id}
                    </p>
                  )}
                  <p
                    className="mt-4 text-sm text-gray-700 line-clamp-4"
                    dangerouslySetInnerHTML={{
                      __html:
                        article.description ||
                        article.content ||
                        "<em>No description available.</em>",
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* YouTube Section */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-20">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {/* Demo Video */}
            </h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/CqaFYgRGDmo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
