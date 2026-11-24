import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Check, Linkedin, Twitter, Facebook, ChevronRight, Loader2 } from 'lucide-react';
import { fetchArticleDetail, fetchArticlesList } from '../services/api';
import { formatFullDate, calculateReadTime, stripHtml, formatRelativeTime } from '../utils/formatters';

export default function PulseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentArticles, setRecentArticles] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const load = async () => {
      setLoading(true);
      const [art, all] = await Promise.all([
        fetchArticleDetail(id),
        fetchArticlesList()
      ]);
      setArticle(art);
      setRecentArticles((all || []).filter((a) => a._id !== id).slice(0, 3));
      setLoading(false);
    };
    load();
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen py-40 flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-[#0A0A0B]" size={36} />
        <p className="text-sm font-medium text-zinc-500">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen py-32 text-center max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0A0A0B] mb-3">Article Not Found</h2>
        <p className="text-zinc-600 mb-6">The article you are looking for doesn't exist or has moved.</p>
        <Link
          to="/pulse"
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
        >
          <ArrowLeft size={16} /> Back to Pulse
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Top Breadcrumb Nav */}
      <div className="border-b border-[#ECECEE] bg-white sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link
            to="/pulse"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Pulse</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <div className="max-w-4xl mx-auto px-6 py-10 lg:py-16">
        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-zinc-500 mb-4">
          <span className="font-semibold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-zinc-100 text-[#0A0A0B]">
            {article.categoryTitle || 'Pulse'}
          </span>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{formatFullDate(article.createdAt)}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{calculateReadTime(article.descriptions)}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0B] leading-[1.2] mb-6">
          {article.title}
        </h1>

        {/* Author info */}
        <div className="flex items-center gap-3.5 py-4 border-y border-[#ECECEE] mb-8">
          <div className="h-10 w-10 flex-none flex items-center justify-center rounded-full bg-[#0A0A0B] text-white font-bold text-xs tracking-wider border border-zinc-200">
            RG
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#0A0A0B]">Ridham Gudani</h4>
            <p className="text-xs text-zinc-500">Co-founder & MD, Shivalik Group</p>
          </div>
        </div>

        {/* Hero image */}
        {article.image && (
          <div className="mb-10 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-xs">
            <img
              src={article.image}
              alt={article.title}
              className="w-full max-h-[500px] object-cover"
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>
        )}

        {/* Article Content */}
        <div
          className="article-rich-text text-base md:text-lg leading-relaxed text-zinc-800"
          dangerouslySetInnerHTML={{ __html: article.descriptions }}
        />

        {/* Share Section */}
        <div className="mt-14 pt-8 border-t border-[#ECECEE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm font-medium text-zinc-700">
            Enjoyed this perspective? Share it:
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-zinc-300 hover:bg-zinc-100 transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
              <span>{copied ? 'Link Copied' : 'Copy Link'}</span>
            </button>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-[#0077b5] hover:text-white transition-colors text-zinc-700"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-black hover:text-white transition-colors text-zinc-700"
              aria-label="Share on Twitter"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {recentArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#ECECEE]">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A0A0B]" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0A0A0B]">
                More from Pulse
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentArticles.map((rel) => (
                <Link
                  key={rel._id}
                  to={`/pulse/${rel._id}`}
                  className="group flex flex-col rounded-xl overflow-hidden border border-zinc-200 hover:shadow-md transition-all p-3 bg-white"
                >
                  <div className="h-40 rounded-lg overflow-hidden bg-zinc-100 mb-3">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                    {rel.categoryTitle || 'Pulse'}
                  </span>
                  <h4 className="text-sm font-semibold text-[#0A0A0B] line-clamp-2 group-hover:underline">
                    {rel.title}
                  </h4>
                  <span className="mt-auto pt-2 text-[11px] text-zinc-400">
                    {formatRelativeTime(rel.createdAt)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

