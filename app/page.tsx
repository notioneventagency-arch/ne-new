/* =========================================================
   EASY EDIT GUIDE

   INSTAGRAM LINK:
   https://www.instagram.com/notion_eventagency/

   WHATSAPP LINK:
   https://wa.me/436641259454

   GALLERY IMAGES:
   public/gallery/gallery.1.jpeg
   public/gallery/gallery.2.jpeg
   public/gallery/gallery.3.jpeg
   public/gallery/gallery.4.jpeg
   public/gallery/gallery.5.jpeg
   public/gallery/gallery.6.jpeg

   CLIENT LOGOS:
   public/clients/client1.png
   public/clients/client2.png
   public/clients/client3.png
   public/clients/client4.png
   public/clients/client5.png
   public/clients/client6.png

   LOGO:
   public/logo/ne2.png

   VIDEO:
   public/videos/video.1.mp4
========================================================= */

import Image from 'next/image'
import {
  Instagram,
  Music2,
  CalendarDays,
  ArrowRight,
  Play,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import FloatingCTA from '@/components/floating-cta'

const works = [
  '/gallery/gallery.1.jpeg',
  '/gallery/gallery.2.jpeg',
  '/gallery/gallery.3.jpeg',
  '/gallery/gallery.4.jpeg',
  '/gallery/gallery.5.jpeg',
  '/gallery/gallery.6.jpeg',
]

const clients = [
  '/clients/client1.png',
  '/clients/client2.png',
  '/clients/client3.png',
  '/clients/client4.png',
  '/clients/client5.png',
  '/clients/client6.png',
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-zinc-700/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/logo/ne2.png"
              alt="Notion Event Agency Logo"
              width={42}
              height={42}
              className="rounded-full object-cover"
              priority
            />

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Creative Studio
              </p>
              <h1 className="font-semibold">Notion Agency</h1>
            </div>
          </a>

          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#clients" className="transition hover:text-white">Clients</a>
            <a href="#instagram" className="transition hover:text-white">Instagram</a>
            <a href="#events" className="transition hover:text-white">Events</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-screen items-center justify-center px-6 pt-32 text-center"
      >
        <div className="absolute inset-0 opacity-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/video.1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            NOW BOOKING 2026 EVENTS
          </div>

          <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl md:text-8xl lg:text-[10rem]">
            Creative
            <br />
            Experiences
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Premium DJ marketing, cinematic event visuals, 3D branding,
            photography and social media campaigns for nightlife brands and
            modern events.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#work"
              className="group rounded-full border border-white bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
            >
              View Projects
              <ArrowRight className="ml-2 inline-block h-4 w-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="/videos/video.1.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-white hover:bg-white/10"
            >
              <Play className="mr-2 inline-block h-4 w-4" />
              Showreel
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ['120+', 'Events'],
              ['15M+', 'Reach'],
              ['80+', 'Clients'],
              ['24/7', 'Creative Energy'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="text-4xl font-black">{value}</div>
                <div className="mt-2 text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
            What We Create
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['DJ Event Marketing', 'Campaigns, promotion & viral nightlife branding'],
            ['Video Production', 'Cinematic reels, aftermovies & event visuals'],
            ['3D Logo Design', 'Luxury visual identity & animated graphics'],
            ['Social Media', 'Instagram growth & premium content creation'],
          ].map(([title, text]) => (
            <div
              key={title}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-white/30 hover:bg-white/10"
            >
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <Music2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
              Selected Work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {works.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={1200}
                  height={1200}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-80 md:h-[420px]"
                />

                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="text-2xl font-bold">
                      Event Visual Experience
                    </h3>
                    <p className="mt-2 text-zinc-400">
                      Creative Direction / Nightlife / Branding
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Trusted By
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
              Our Clients
            </h2>
          </div>

          <div className="flex w-max animate-[scroll_30s_linear_infinite] gap-12">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex h-24 w-48 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={160}
                  height={80}
                  className="max-h-12 w-auto object-contain opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section id="instagram" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Social Media
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
              Live Instagram Feed
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <iframe
              src="https://789976ff55304cb3984946f91817537a.elf.site"
              className="h-[900px] w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Upcoming Events
              </p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
                Next Dates
              </h2>
            </div>

            <a
              href="https://www.eventbrite.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Book Tickets
            </a>
          </div>

          <div className="mt-12 space-y-5">
            {[
              ['24 MAY', 'Summer Opening', 'Vienna'],
              ['03 JUN', 'Club Night', 'Berlin'],
              ['17 JUL', 'Festival Showcase', 'Ibiza'],
            ].map(([date, event, city]) => (
              <div
                key={event}
                className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 p-6 md:flex-row md:items-center"
              >
                <div className="flex items-center gap-5">
                  <CalendarDays className="h-10 w-10 text-zinc-400" />
                  <div>
                    <h3 className="text-2xl font-bold">{event}</h3>
                    <p className="text-zinc-400">{city}</p>
                  </div>
                </div>

                <div className="text-xl font-semibold text-zinc-300">
                  {date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
              Let’s Build Something Huge
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-zinc-300">
                <Mail className="h-5 w-5" />
                <a href="mailto:notioneventagency@gmail.com" className="hover:text-white">
                  notioneventagency@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <Instagram className="h-5 w-5" />
                <a
                  href="https://www.instagram.com/notion_eventagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @notion_eventagency
                </a>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <MapPin className="h-5 w-5" />
                <span>Kalsdorf bei Graz, Austria</span>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <Phone className="h-5 w-5" />
                <a href="tel:+436641259454" className="hover:text-white">
                  +43 664 1259454
                </a>
              </div>
            </div>

            <form
              action="https://formsubmit.co/notioneventagency@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/50 p-4 outline-none focus:border-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/50 p-4 outline-none focus:border-white"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={5}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/50 p-4 outline-none focus:border-white"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-white py-4 font-bold text-black transition hover:bg-zinc-200"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </main>
  )

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
