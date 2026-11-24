import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Building, TrendingUp, Users, Compass, ShieldCheck, Leaf } from 'lucide-react';
import defaultArticles from '../data/articlesData.json';
import { formatRelativeTime } from '../utils/formatters';

export default function Home() {
  const latestPulses = defaultArticles.slice(0, 3);

  const pillars = [
    {
      num: '01',
      title: 'People',
      desc: 'The way people live, work and use spaces is evolving from homes, workplaces and neighbourhoods.'
    },
    {
      num: '02',
      title: 'Asset',
      desc: 'The way assets are utilised, operated, maintained and adapted determines their long-term performance.'
    },
    {
      num: '03',
      title: 'Capital',
      desc: 'Investment structures are evolving, creating different ways to finance real estate to generate long-term value.'
    },
    {
      num: '04',
      title: 'Territories',
      desc: 'New industries, infrastructure and economic activity are reshaping and real estate opportunities emerge.'
    }
  ];

  const ecosystem = [
    {
      num: '01',
      title: 'Shivalik Development',
      subtitle: '28+ years of building',
      desc: 'Shivalik has worked to create places that respond to how people live, work and grow.',
      link: '/pulse'
    },
    {
      num: '02',
      title: 'Shivalik Fund',
      subtitle: 'The Capital Behind Real Estate Growth',
      desc: 'Real estate needs capital at different stages, from development to long-term ownership and operations.',
      link: '/pulse'
    },
    {
      num: '03',
      title: 'Furniture & LOFY',
      subtitle: 'From built spaces to living spaces',
      desc: 'Through furniture, interiors, manufacturing and fit-outs, we bring the final stages of a space together.',
      link: '/pulse'
    },
    {
      num: '04',
      title: 'SIRE - Shivalik Institute',
      subtitle: 'Building capability for a better real estate',
      desc: 'A better real estate industry needs people who understand how it works.',
      link: '/pulse'
    },
    {
      num: '05',
      title: 'R - Operating System',
      subtitle: 'One industry. One connected system.',
      desc: 'R connects the people, assets, capital, businesses and operations involved in real estate.',
      link: 'https://realestateos.io/'
    },
    {
      num: '06',
      title: 'Communities',
      subtitle: 'Connecting people. Creating opportunity.',
      desc: 'Strong real estate networks are built through participation, trust and lasting relationships.',
      link: '/connect'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#ECECEE] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-xs font-semibold text-zinc-700 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Powering India's Real Estate Operating System
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0B] leading-[1.08]">
              Life is changing. <br />
              <span className="text-zinc-400">Real estate must change with it.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#52525B] leading-relaxed max-w-2xl">
              Ridham Gagani — Co-Founder & Managing Director, Shivalik Group. 
              Engineering sustainable urban growth, modern spaces, and institutional ecosystems across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/pulse"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0B] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-all hover:gap-3"
              >
                <span>Explore Articles & Pulse</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/connect"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0A0A0B] hover:bg-zinc-50 transition-colors"
              >
                <span>Connect With Ridham</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="border-b border-[#ECECEE] bg-[#FAFAFA] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#0A0A0B]">28+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1 font-semibold">
                Years of Legacy
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#0A0A0B]">70+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1 font-semibold">
                Landmark Projects
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#0A0A0B]">15M+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1 font-semibold">
                Sq. Ft. Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#0A0A0B]">100%</div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1 font-semibold">
                Green Building Commitment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future I See */}
      <section className="py-20 lg:py-28 border-b border-[#ECECEE]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#71717A]">
              Strategic Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B] mt-2">
              Future I See
            </h2>
            <p className="mt-3 text-base text-[#52525B]">
              Real estate is transitioning from concrete developments into living, breathing, connected systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item) => (
              <div
                key={item.num}
                className="group rounded-2xl border border-[#ECECEE] p-7 transition-all hover:border-black hover:shadow-sm"
              >
                <div className="text-2xl font-bold text-zinc-300 group-hover:text-black transition-colors">
                  {item.num}.
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0B] mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 lg:py-28 border-b border-[#ECECEE] bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#71717A]">
                Connected Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B] mt-2">
                Real Estate Works Better Together.
              </h2>
              <p className="mt-3 text-base text-[#52525B] max-w-xl">
                Our ecosystem brings different capabilities together to improve how real estate is built, used and managed.
              </p>
            </div>
            <Link
              to="/connect"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:underline"
            >
              <span>Join the Ecosystem</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.map((card) => (
              <div
                key={card.num}
                className="rounded-2xl border border-zinc-200 bg-white p-7 flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div>
                  <span className="text-xs font-semibold text-zinc-400 group-hover:text-black transition-colors">
                    {card.num}
                  </span>
                  <h3 className="text-xl font-bold text-[#0A0A0B] mt-2">
                    {card.title}
                  </h3>
                  <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 mt-1 mb-3">
                    {card.subtitle}
                  </div>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured From Pulse */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#71717A]">
                Latest Perspectives
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0B] mt-1">
                Recent from Pulse
              </h2>
            </div>
            <Link
              to="/pulse"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <span>View All Pulses</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPulses.map((article) => (
              <Link
                key={article._id}
                to={`/pulse/${article._id}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition-all bg-white"
              >
                <div className="h-52 overflow-hidden bg-zinc-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                    <span className="font-semibold uppercase tracking-wider text-zinc-600">
                      {article.categoryTitle || 'Pulse'}
                    </span>
                    <span>{formatRelativeTime(article.createdAt)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A0A0B] group-hover:underline line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-2 line-clamp-2 leading-relaxed">
                    {article.descriptions?.replace(/<[^>]*>/g, ' ').slice(0, 120)}...
                  </p>
                  <span className="mt-auto pt-4 text-xs font-semibold text-blue-600 inline-flex items-center gap-1">
                    Read Story <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

