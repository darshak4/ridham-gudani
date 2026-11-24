import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowLeft, Search, Loader2 } from 'lucide-react';
import { fetchArticlesList } from '../services/api';
import { stripHtml, formatRelativeTime } from '../utils/formatters';

const ITEMS_PER_PAGE = 10;

export default function Pulse() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    const load = async () => {
      setLoading(true);
      const list = await fetchArticlesList();
      setArticles(list || []);
      setLoading(false);
    };
    load();
  }, []);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let result = [...articles].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          stripHtml(a.descriptions).toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(
        (a) =>
          (a.categoryTitle || '').toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return result;
  }, [articles, searchQuery, selectedCategory]);

  // Featured article is the first one, remaining are trending
  const [highlightArticle, ...trendingArticles] = filteredArticles;

  // Pagination for trending articles
  const totalPages = Math.max(1, Math.ceil(trendingArticles.length / ITEMS_PER_PAGE));
  const paginatedTrending = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return trendingArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [trendingArticles, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div id="journal" className="min-h-screen bg-white">
      <div className="lg:max-w-7xl lg:mx-auto w-full px-6 lg:px-8 py-8 lg:py-12">
        {/* Back to Home Link */}
        <div className="flex items-center gap-1.5 lg:mb-8 mb-6 text-sm md:text-base font-normal text-zinc-600 hover:text-[#0A0A0B] transition-colors">
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <Link to="/" className="hover:underline font-medium">
            Back to Home
          </Link>
        </div>

        {/* Page Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#ECECEE]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#71717A]">
                Ridham Gudani Journal
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0B]">
              Pulse
            </h1>
            <p className="mt-2 text-base text-[#52525B] max-w-xl">
              Insights, real estate operating intelligence, infrastructure updates, and industry frameworks.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input
              type="text"
              placeholder="Search articles & topics..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full rounded-full border border-zinc-200 bg-zinc-50 pl-10 pr-4 py-2.5 text-sm text-[#0A0A0B] placeholder-zinc-400 focus:border-black focus:bg-white focus:outline-none transition-all"
            />
          </div>
        </div>

        {loading ? (
          <div className="py-32 flex flex-col items-center justify-center gap-4 text-zinc-400">
            <Loader2 className="animate-spin text-[#0A0A0B]" size={36} />
            <p className="text-sm font-medium text-zinc-600">Loading articles...</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="py-24 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0A0A0B] mb-2">
              No Pulses Found
            </h2>
            <p className="text-sm text-zinc-500 mb-6">
              We couldn't find any articles matching your query.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-12">
            {/* TODAY'S HIGHLIGHT */}
            {highlightArticle && (
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0A0A0B]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0A0A0B]">
                    Today's Highlight
                  </p>
                </div>

                <Link
                  to={`/pulse/${highlightArticle._id}`}
                  className="group block rounded-2xl bg-white transition-all"
                >
                  <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-zinc-100">
                    <img
                      src={highlightArticle.image}
                      alt={highlightArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="eager"
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-[#71717A] bg-zinc-100 px-2.5 py-1 rounded-md">
                      {highlightArticle.categoryTitle || 'Pulse'}
                    </span>
                    <span className="text-xs text-[#A1A1AA] font-medium">
                      {formatRelativeTime(highlightArticle.createdAt)}
                    </span>
                  </div>

                  <h2 className="mt-2.5 text-2xl lg:text-3xl font-semibold text-[#0A0A0B] line-clamp-2 group-hover:text-zinc-700 transition-colors">
                    {highlightArticle.title}
                  </h2>

                  {highlightArticle.descriptions && (
                    <p className="mt-2 text-sm lg:text-base text-[#575757] line-clamp-2 leading-relaxed">
                      {stripHtml(highlightArticle.descriptions)}
                    </p>
                  )}

                  <div className="mt-3 text-right">
                    <span className="text-sm font-semibold text-[#0066CC] group-hover:underline inline-flex items-center gap-1">
                      Read More <ChevronRight size={15} />
                    </span>
                  </div>
                </Link>
              </section>
            )}

            {/* TRENDING PULSES */}
            {trendingArticles.length > 0 && (
              <section className="pt-6 border-t border-[#ECECEE]">
                <div className="flex items-center gap-2 border-b border-[#ECECEE] pb-3 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0A0A0B]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0A0A0B]">
                    Trending Pulses ({trendingArticles.length})
                  </p>
                </div>

                <div className="divide-y divide-[#ECECEE]">
                  {paginatedTrending.map((article) => (
                    <Link
                      key={article._id}
                      to={`/pulse/${article._id}`}
                      className="flex items-center gap-4 py-4 md:py-5 group transition-colors hover:bg-zinc-50/50 rounded-xl px-2 -mx-2"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-20 w-20 md:h-24 md:w-24 flex-none rounded-xl overflow-hidden bg-gray-100 border border-zinc-100 shadow-2xs">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src =
                              'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=400&q=80';
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-start gap-2">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#71717A]">
                            {article.categoryTitle || 'Development'}
                          </span>
                          <span className="text-zinc-300">•</span>
                          <span className="text-[11px] text-[#A1A1AA]">
                            {formatRelativeTime(article.createdAt)}
                          </span>
                        </div>

                        <h3 className="mt-1 text-base md:text-lg font-medium text-[#0A0A0B] line-clamp-1 group-hover:underline">
                          {article.title}
                        </h3>

                        {article.descriptions && (
                          <p className="mt-1 text-xs md:text-sm text-[#575757] line-clamp-2 leading-relaxed">
                            {stripHtml(article.descriptions)}
                          </p>
                        )}
                      </div>

                      {/* Chevron */}
                      <ChevronRight
                        size={20}
                        className="flex-none text-[#A1A1AA] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-black"
                      />
                    </Link>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-10 flex items-center justify-center gap-2">
                    {/* Previous */}
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4D4D8] text-[#0A0A0B] transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-[#F4F4F5]"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: Math.min(totalPages, 7) }, (_, idx) => {
                      let pageNum;
                      if (totalPages <= 7) {
                        pageNum = idx + 1;
                      } else if (currentPage <= 4) {
                        pageNum = idx + 1;
                      } else if (currentPage >= totalPages - 3) {
                        pageNum = totalPages - 6 + idx;
                      } else {
                        pageNum = currentPage - 3 + idx;
                      }

                      return (
                        <button
                          key={pageNum}
                          type="button"
                          onClick={() => handlePageChange(pageNum)}
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                            pageNum === currentPage
                              ? 'bg-[#0A0A0B] text-white shadow-xs'
                              : 'text-[#52525B] hover:bg-[#F4F4F5]'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    {/* Next */}
                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4D4D8] text-[#0A0A0B] transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-[#F4F4F5]"
                      aria-label="Next page"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

