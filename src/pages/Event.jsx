import React from 'react';
import { Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Event() {
  const events = [
    {
      id: 1,
      title: "Real Estate Operating System Summit 2026",
      category: "Keynote & Panel",
      date: "August 18, 2026",
      location: "GIFT City, Gandhinagar, Gujarat",
      status: "Upcoming",
      description:
        "Chitrak Shah discusses how tech-driven construction, single-line address frameworks, and institutional capital are restructuring India's real estate ecosystem.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Sustainable Urban Infrastructure Conclave",
      category: "Industry Forum",
      date: "May 12, 2026",
      location: "Ahmedabad Management Association (AMA)",
      status: "Past",
      description:
        "Addressing the urgency of zero-tolerance roads, 100% green certified developments, and on-site STPs in commercial real estate.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "CREDAI National Leadership Conclave",
      category: "National Conference",
      date: "February 24, 2026",
      location: "Mumbai, India",
      status: "Past",
      description:
        "Exploring Tier-2 cities as the prime growth engines for high-yield commercial real estate and alternative investment funds (AIFs).",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#71717A]">
              Keynotes & Summits
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A0A0B]">
            Events & Engagements
          </h1>
          <p className="mt-3 text-base text-[#52525B]">
            Public speaking, keynotes, urban leadership conferences, and interactive discussions hosted or attended by Chitrak Shah.
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-8">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-zinc-200 bg-white hover:shadow-lg transition-all"
            >
              <div className="relative md:w-80 h-56 md:h-auto overflow-hidden bg-zinc-100 flex-none">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  ev.status === 'Upcoming' ? 'bg-black text-white' : 'bg-white/90 text-zinc-700 backdrop-blur-sm'
                }`}>
                  {ev.status}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-500 mb-3">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">
                      {ev.category}
                    </span>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{ev.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{ev.location}</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0B] mb-3">
                    {ev.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
                    {ev.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <Link
                    to="/connect"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-blue-600 transition-colors"
                  >
                    <span>Request invitation / Speaking inquiry</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

