/* =========================================================
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
