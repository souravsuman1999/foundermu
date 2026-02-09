import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader } from "@/components/Cards";
import { Faq } from "@/components/Faq";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";

const heroBadges = [
  "₹20 Lakhs via SAFE",
  "90 Days Program",
  "Operator Mentors",
  "Full Residency"
];

const stats = [
  { value: "90 Days", label: "Duration" },
  { value: "20 Startups", label: "Founders Selected" },
  { value: "₹20 Lakhs", label: "Funding Per Founder" },
  { value: "YC/Shark Tank Ready", label: "Outcome" }
];

const youAre = [
  "You want to leave your job and build",
  "You have an idea (or not—that’s okay too)",
  "You’re under 25 and hungry to start",
  "You need capital, mentors & structure"
];

const youGet = [
  "₹20 Lakhs—guaranteed if selected",
  "90 days of intense execution",
  "Aman + operator mentors guiding you",
  "Your launchpad to YC & Shark Tank"
];

const safeTerms = [
  {
    title: "SAFE Note",
    subtitle:
      "Simple Agreement for Future Equity—no complex paperwork."
  },
  {
    title: "Floor & Ceiling",
    subtitle: "Valuation caps that protect you in future rounds."
  },
  {
    title: "No Board Seats",
    subtitle: "You keep full control of your company."
  },
  {
    title: "Founder-Friendly",
    subtitle: "Terms designed to not hurt future fundraises."
  }
];

const founders = [
  {
    name: "Aman Gupta",
    role: "General Partner",
    bio: "Co-founder of boAt, Shark Tank India Judge. Built India’s #1 audio brand from zero to ₹3,000 Cr.",
    link: "#"
  },
  {
    name: "Pratham Mittal",
    role: "General Partner",
    bio: "Founder of Masters’ Union. Building India’s new-age business school with industry leaders.",
    link: "#"
  }
];

const mentors = [
  { name: "Vineeta Singh", title: "CEO, SUGAR Cosmetics" },
  { name: "Ashneer Grover", title: "Founder, BharatPe" },
  { name: "Ghazal Alagh", title: "Co-founder, Mamaearth" },
  { name: "Ritesh Agarwal", title: "Founder, OYO" },
  { name: "Kunal Shah", title: "Founder, CRED" },
  { name: "Namita Thapar", title: "ED, Emcure Pharma" }
];

const residencyHighlights = [
  "Modern Workspace",
  "Cafeteria",
  "High-Speed Internet",
  "Gurugram, Haryana"
];

const timeline = [
  {
    step: "01",
    title: "Applications Open",
    meta: "5 Feb – 25 Feb",
    desc: "Apply with or without an idea—we back founders."
  },
  {
    step: "02",
    title: "Screening & Shortlisting",
    meta: "15-20 days",
    desc: "Reviewed by Sharks + MU Ventures team."
  },
  {
    step: "03",
    title: "Cohort Announcement",
    meta: "18th March",
    desc: "20 founders selected and onboarded."
  },
  {
    step: "04",
    title: "Program Starts",
    meta: "5th April",
    desc: "90-day intensive execution phase begins."
  },
  {
    step: "05",
    title: "Working with Sharks",
    meta: "3 Months",
    desc: "Weekly reviews, strategy sessions, mentorship."
  },
  {
    step: "06",
    title: "Demo Day",
    meta: "Pitch Day",
    desc: "Present to VCs, prepare for YC/Shark Tank."
  }
];

const phases = [
  {
    phase: "Phase 1",
    weeks: "Weeks 1-3",
    title: "Ideation & Clarity",
    bullets: [
      "Founder-market fit",
      "Problem discovery",
      "Idea validation & pivots"
    ]
  },
  {
    phase: "Phase 2",
    weeks: "Weeks 4-6",
    title: "Build & Launch",
    bullets: ["MVP development", "User feedback loops", "Pricing & positioning"]
  },
  {
    phase: "Phase 3",
    weeks: "Weeks 7-9",
    title: "GTM & Growth",
    bullets: ["Distribution strategy", "Sales motion", "Growth experiments"]
  },
  {
    phase: "Phase 4",
    weeks: "Weeks 10-12",
    title: "Scale & Fundraise",
    bullets: ["Hit revenue/MVP milestones", "Pitch preparation", "Follow-on readiness"]
  }
];

const operatorModel = [
  {
    title: "Strategic Guide",
    desc: "Direction & prioritisation from Aman and mentors."
  },
  { title: "Execution Partner", desc: "Weekly progress reviews & hands-on support." },
  { title: "Growth Catalyst", desc: "Help you hit revenue or MVP milestones." }
];

const outcomes = [
  {
    title: "Follow-on from Aman & MU",
    desc: "Top performers get Aman or Masters’ Union doubling down for seed round."
  },
  {
    title: "Y Combinator Ready",
    desc: "Pitch-ready with metrics and founder story for YC and global accelerators."
  },
  {
    title: "Revenue Positive",
    desc: "Consumer brands hit revenue milestones and prove unit economics."
  },
  {
    title: "MVP & POC Ready",
    desc: "Deep tech and manufacturing startups achieve proof of concept."
  }
];

const everyFounderGets = [
  { title: "₹20 Lakhs Capital", desc: "Guaranteed funding for every selected founder." },
  { title: "Dedicated Workspace", desc: "On-campus workspace for full-time execution." },
  { title: "Accommodation", desc: "Housing provided for all founders." },
  { title: "Design & Branding", desc: "Professional support for your brand." },
  { title: "VC Networking", desc: "Monthly dinners with VCs & founders." },
  { title: "Lifetime Network", desc: "Access to MU + Operator network forever." }
];

const faq = [
  {
    q: "Do I need a startup idea to apply?",
    a: "No! You can apply even if you don’t have an idea yet. We back founders, not just ideas. If you have the hunger to build something and are ready to commit full-time, you’re exactly who we’re looking for."
  },
  {
    q: "Who can apply to Founders' Union?",
    a: "Anyone under 25 who wants to build a startup. Whether you’re working a job and want to quit, or you’re a student ready to take the leap—if you have the fire to build, apply."
  },
  {
    q: "How much equity do you take?",
    a: "We don’t take large equity. The ₹20 Lakhs comes via a founder-friendly SAFE note with a floor and ceiling. No board seats, no control—just capital to help you build. Terms are designed to not hurt you in future fundraises."
  },
  {
    q: "How much funding do I get?",
    a: "Every founder selected into the cohort receives ₹20 Lakhs via a SAFE note. No conditions, no 'top performers only'. If you’re in, you’re funded."
  },
  {
    q: "What are the expected outcomes?",
    a: "It depends on your startup type. Consumer brands should aim for revenue-positive status. Deep tech and manufacturing startups should have MVP or proof of concept ready. Top performers may get follow-on investment from Aman or Masters’ Union for their seed round."
  },
  {
    q: "Is this a full-time program?",
    a: "Yes, Founders’ Union is a full-time, in-residence 90-day program at the Masters’ Union campus in Gurugram. You’ll live and work on campus."
  },
  {
    q: "What happens after the 90 days?",
    a: "You’ll be prepared for YC, Shark Tank India, or other top accelerators. Strong performers may receive follow-on investment from Aman Gupta or Masters’ Union. You’ll also have lifetime access to the MU + Operator network."
  }
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm text-white/70">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fu" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fu/10 blur-[90px]" />
          <div className="absolute top-24 left-[-160px] h-[420px] w-[420px] rounded-full bg-fu/8 blur-[110px]" />
          <div className="absolute top-40 right-[-220px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[140px]" />
          <div className="absolute inset-0 opacity-30 [background-size:24px_24px] bg-hero-grid" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black" />
        </div>

        <div className="container relative py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center noise">
            <div className="inline-flex items-center justify-center rounded-full bg-fu/10 px-4 py-2 text-xs font-semibold text-fu ring-1 ring-fu/20">
              <span className="mr-2">✨</span>
              Pre-YC • Pre-Shark Tank • Your First Yes
            </div>

            <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              The first ₹20 lakhs is the
              <br />
              hardest to raise.
              <span className="block text-fu">We make it happen.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              That first capital isn&apos;t just money—it&apos;s validation. The
              confidence to leave your job. The fuel to reach escape velocity.
              Whether you have an idea or just the fire to build something,
              Founders&apos; Union gives you the mentorship, capital, and momentum
              to become a founder.
            </p>

            <div className="mt-10 flex items-center justify-center gap-3">
              <Button variant="primary" href="#apply">
                Apply Now <span aria-hidden="true">→</span>
              </Button>
              <Button variant="secondary" href="#timeline">
                How It Works
              </Button>
            </div>

            <div className="mt-6 text-sm text-white/50">
              Applications close <span className="text-white/70">25th Feb</span>
              <span className="mx-2 text-white/25">•</span>
              By <span className="text-white/70">MU Ventures</span> |{" "}
              <span className="text-white/70">Masters&apos; Union</span>
            </div>

            <div className="mt-10 flex items-center justify-center">
              <div className="flex max-w-full flex-wrap justify-center gap-3">
                {heroBadges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 ring-1 ring-white/10"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[var(--radius)] bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="text-lg font-semibold text-white md:text-xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="program"
        eyebrow="You don’t need an idea. You need a launchpad."
        title="Whether you're sitting on a startup idea or just know you're meant to build something—we're here for you."
        description="Most programs want traction. We want potential."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader title="You Are..." />
            <CardContent>
              <BulletList items={youAre} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="You Get..." />
            <CardContent>
              <BulletList items={youGet} />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[var(--radius)] bg-fu/10 p-6 ring-1 ring-fu/20 md:flex-row md:items-center">
          <div className="text-sm font-semibold text-white">
            20 founders. <span className="text-fu">₹20 Lakhs</span> each. Every
            quarter.
          </div>
          <Button variant="primary" href="#apply">
            Apply Now
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="No Large Equity. Founder-Friendly Terms."
        title="We’re not here to take a chunk of your company."
        description="The ₹20 Lakhs comes via a SAFE note with terms that won’t hurt you later."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {safeTerms.map((t) => (
            <Card key={t.title} className="h-full">
              <CardHeader title={t.title} subtitle={t.subtitle} />
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="team"
        eyebrow="The Founding Team"
        title="Built by operators who’ve been there, done that."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {founders.map((p) => (
            <Card key={p.name} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-semibold text-white">
                      {p.name}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-fu">
                      {p.role}
                    </div>
                  </div>
                  <a
                    href={p.link}
                    className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/75 ring-1 ring-white/10 hover:bg-white/8"
                  >
                    Connect
                  </a>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {p.bio}
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div className="p-6">
                <div className="text-xs font-semibold text-white/60">
                  Operator-first mentorship • Weekly reviews • Founder-friendly
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="mentors"
        eyebrow="World-Class Mentors"
        title="Learn from founders who’ve built billion-dollar companies."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m) => (
            <Card key={m.name} className="h-full">
              <div className="p-6">
                <div className="text-base font-semibold text-white">
                  {m.name}
                </div>
                <div className="mt-2 text-sm text-white/65">{m.title}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Your Home for 90 Days"
        title="Work, live, and build at the Masters' Union campus in Gurugram."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-fu/12 via-white/0 to-white/0" />
            <div className="relative p-8">
              <div className="text-sm font-semibold text-white/70">
                Modern Campus
              </div>
              <div className="mt-2 text-2xl font-semibold text-white">
                Co-working Spaces • Strategy Sessions • Build & Execute
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70 md:grid-cols-4">
                {["Modern Workspace", "Co-working Spaces", "Strategy Sessions", "Build & Execute"].map(
                  (i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10"
                    >
                      {i}
                    </div>
                  )
                )}
              </div>
            </div>
          </Card>
          <Card>
            <CardHeader title="What’s included" />
            <CardContent>
              <BulletList items={residencyHighlights} />
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        id="timeline"
        eyebrow="Structure & Timeline"
        title="From application to ₹20 Lakhs in your bank."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((t) => (
            <Card key={t.step} className="h-full">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-black text-fu">{t.step}</div>
                  <div className="text-xs font-semibold text-white/55">
                    {t.meta}
                  </div>
                </div>
                <div className="mt-3 text-base font-semibold text-white">
                  {t.title}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/65">
                  {t.desc}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="90-Day Program Structure"
        title="Tailored milestones based on your startup type."
        description="Revenue-positive for consumer brands. MVP/POC ready for deep tech & manufacturing."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((p) => (
            <Card key={p.phase} className="h-full">
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold text-fu">{p.phase}</div>
                  <div className="text-xs font-semibold text-white/55">
                    {p.weeks}
                  </div>
                </div>
                <div className="mt-3 text-base font-semibold text-white">
                  {p.title}
                </div>
                <div className="mt-4">
                  <BulletList items={p.bullets} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Operator-Led Model"
        title="Each startup is guided by Aman and a dedicated Operator Mentor."
        description="Real operators helping you build. Not passive advisors."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {operatorModel.map((o) => (
            <Card key={o.title} className="h-full">
              <CardHeader title={o.title} subtitle={o.desc} />
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Direct access to Aman Gupta",
            "Dedicated operator mentor pairing",
            "Weekly structured check-ins"
          ].map((t) => (
            <div
              key={t}
              className="rounded-[var(--radius)] bg-white/5 p-6 text-sm font-semibold text-white/80 ring-1 ring-white/10"
            >
              {t}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Where This Takes You"
        title="Clear milestones, real outcomes."
        description="Different startup types, different paths—same momentum."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {outcomes.map((o) => (
            <Card key={o.title} className="h-full">
              <CardHeader title={o.title} subtitle={o.desc} />
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader
              title="Consumer Brands"
              subtitle="Goal: Revenue-positive with proven unit economics."
            />
          </Card>
          <Card>
            <CardHeader
              title="Deep Tech & Manufacturing"
              subtitle="Goal: MVP ready or proof of concept validated."
            />
          </Card>
        </div>
      </Section>

      <Section
        id="benefits"
        eyebrow="What You Walk Away With"
        title="Guaranteed funding and resources to build your startup."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Card className="overflow-hidden">
            <div className="p-8">
              <div className="text-sm font-semibold text-white/60">
                Founders&apos; Union
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Seed Round / YC / Revenue
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                After 90 days, you&apos;ll be ready for YC, Shark Tank India, or
                any top accelerator in the world.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { v: "₹20 Lakhs", l: "Guaranteed" },
                  { v: "20 Founders", l: "Per cohort" },
                  { v: "90 Days", l: "Intensive" }
                ].map((x) => (
                  <div
                    key={x.l}
                    className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                  >
                    <div className="text-base font-semibold text-white">
                      {x.v}
                    </div>
                    <div className="mt-1 text-xs text-white/60">{x.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-fu/10 via-white/0 to-white/0" />
            <div className="relative p-8">
              <div className="text-lg font-semibold text-white">
                What Every Founder Gets
              </div>
              <p className="mt-2 text-sm text-white/65">
                Everything you need to focus 100% on building. We handle the
                rest.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {everyFounderGets.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                  >
                    <div className="text-sm font-semibold text-white">
                      {b.title}
                    </div>
                    <div className="mt-2 text-sm text-white/65">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section
        id="faq"
        eyebrow="Frequently Asked Questions"
        title="Got questions? We’ve got answers."
      >
        <Faq items={faq} />
      </Section>

      {/* Apply CTA */}
      <section id="apply" className="border-t border-white/5">
        <div className="container py-16">
          <div className="rounded-[calc(var(--radius)+4px)] bg-gradient-to-br from-fu/18 via-white/5 to-white/5 p-10 ring-1 ring-white/10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-fu/12 px-4 py-2 text-xs font-semibold text-fu ring-1 ring-fu/20">
                  Applications close <span className="text-white">25th Feb</span>
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Ready to build for real?
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
                  Apply with or without an idea. If you’ve got hunger, we’ll
                  give you capital, structure, and operator mentorship to get to
                  YC/Shark Tank readiness.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button variant="primary" href="#apply">
                  Apply Now <span aria-hidden="true">→</span>
                </Button>
                <Button variant="secondary" href="#timeline">
                  See Timeline
                </Button>
              </div>
            </div>
            <div className="mt-8 text-xs text-white/55">
              By MU Ventures | Masters&apos; Union • Founder-friendly SAFE • No
              board seats
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold text-white">
              Founders&apos; Union
            </div>
            <div className="mt-1 text-xs text-white/55">
              © {new Date().getFullYear()} • Built with Next.js
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            {[
              { label: "Program", href: "#program" },
              { label: "Team", href: "#team" },
              { label: "Timeline", href: "#timeline" },
              { label: "FAQ", href: "#faq" }
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}


