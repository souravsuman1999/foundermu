import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader } from "@/components/Cards";
import { Faq } from "@/components/Faq";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  ChipIcon,
  ClockIcon,
  CompassIcon,
  RocketIcon,
  RupeeIcon,
  SparkleIcon,
  TargetIcon,
  TrophyIcon,
  TrendingUpIcon,
  UsersIcon
} from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";

const APPLY_URL = "https://mastersunion.org/venture-form";

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
    image: "/amangupta.png",
    logo: "/boat.png"
  },
  {
    name: "Pratham Mittal",
    role: "General Partner",
    image: "/prathammittal.png",
    logo: "/mu.png"
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
  {
    title: "Execution Partner",
    desc: "Weekly progress reviews & hands-on support."
  },
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
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-fu/10 text-fu ring-1 ring-fu/20">
            <CheckIcon className="h-4 w-4" />
          </span>
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
              <SparkleIcon className="mr-2 text-fu" />
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
              <Button
                variant="primary"
                href={APPLY_URL}
                target="_blank"
                rel="noreferrer"
              >
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
          <Button
            variant="primary"
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
          >
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
            <Card
              key={p.name}
              className="group overflow-hidden transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out will-change-transform hover:-translate-y-1 hover:shadow-glow hover:ring-fu/35"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/0" />
              </div>

              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <div className="text-lg font-semibold text-white">
                    {p.name}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-fu">
                    {p.role}
                  </div>
                </div>
                <img
                  src={p.logo}
                  alt=""
                  className="h-9 w-auto opacity-90"
                />
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((t) => (
            <div
              key={t.step}
              className={[
                "group h-full rounded-3xl bg-white/[0.03] p-7 ring-1 ring-white/10 backdrop-blur",
                "transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out will-change-transform",
                "hover:-translate-y-1 hover:bg-white/[0.045] hover:ring-fu/35 hover:shadow-glow"
              ].join(" ")}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black leading-none text-fu/35 transition duration-200 group-hover:text-fu/60 group-hover:drop-shadow-[0_0_18px_rgba(218,255,1,0.35)]">
                  {t.step}
                </div>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="mt-6 text-lg font-semibold text-white">
                {t.title}
              </div>
              <div className="mt-2 text-sm font-semibold text-fu">{t.meta}</div>
              <div className="mt-4 text-sm leading-relaxed text-white/60">
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              90-Day Program Structure
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              Tailored milestones: Revenue-positive for consumer brands. MVP/POC
              ready for deep tech &amp; manufacturing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {phases.map((p, idx) => {
              const isFinal = idx === phases.length - 1;
              const isHighlighted = idx === phases.length - 1;

              return (
                <div key={p.phase} className="group relative h-full">
                  <div
                    className={[
                      "h-full rounded-3xl bg-white/[0.03] p-7 ring-1 backdrop-blur",
                      "transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out will-change-transform",
                      "group-hover:-translate-y-1 group-hover:bg-white/[0.045]",
                      isHighlighted
                        ? "ring-fu/70 shadow-glow group-hover:ring-fu/80 group-hover:shadow-glowStrong"
                        : "ring-white/10 group-hover:ring-fu/35 group-hover:shadow-glow"
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                          isHighlighted
                            ? "bg-fu text-black ring-1 ring-black/15"
                            : "bg-fu/10 text-fu ring-1 ring-fu/20"
                        ].join(" ")}
                      >
                        {p.phase}
                      </span>
                      <span className="text-xs font-semibold text-white/55">
                        {p.weeks}
                      </span>
                    </div>

                    <div className="mt-6 text-xl font-semibold text-white">
                      {p.title}
                    </div>

                    <ul className="mt-6 space-y-3">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-white/70">
                          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ring-1 ring-fu/35 text-fu">
                            <CheckIcon className="h-4 w-4" />
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!isFinal ? (
                    <div className="absolute -right-4 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white/50 ring-1 ring-white/10 backdrop-blur transition duration-200 group-hover:text-fu group-hover:ring-fu/35 group-hover:shadow-glow lg:grid">
                      <ArrowRightIcon />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Operator-Led Model"
        title="Each startup is guided by Aman and a dedicated Operator Mentor—founders who've built and scaled real businesses."
      >
        <div className="flex items-center gap-3 text-white/85">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-fu/10 text-fu ring-1 ring-fu/20">
            <UsersIcon />
          </span>
          <span className="text-lg font-semibold">How operators help you:</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-4">
            {operatorModel.map((o) => {
              const Icon =
                o.title === "Strategic Guide"
                  ? CompassIcon
                  : o.title === "Execution Partner"
                    ? TargetIcon
                    : TrendingUpIcon;

              return (
                <div
                  key={o.title}
                  className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-fu/10 text-fu ring-1 ring-fu/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-white">
                        {o.title}
                      </div>
                      <div className="mt-1 text-sm text-white/60">{o.desc}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-fu/55 shadow-glow">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fu/10 blur-[80px]" />
              <div className="absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-fu/8 blur-[110px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-black/10 to-black/35" />
            </div>

            <div className="relative p-8">
              <div className="text-lg font-semibold text-white">
                What you get access to
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { label: "Direct access to Aman Gupta", icon: UsersIcon },
                  { label: "Dedicated operator mentor pairing", icon: UsersIcon },
                  { label: "Weekly structured check-ins", icon: CalendarIcon }
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black/40 text-fu ring-1 ring-white/10">
                      <row.icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-medium text-white/80">
                      {row.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 h-px bg-white/10" />

              <div className="mt-6 text-center text-sm font-semibold text-fu">
                Real operators helping you build. Not passive advisors.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Where This Takes You"
        title="Clear milestones, real outcomes."
        description="Different startup types, different paths—same momentum."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, idx) => {
            const isHighlighted = idx === 0;
            const Icon =
              o.title === "Follow-on from Aman & MU"
                ? TrendingUpIcon
                : o.title === "Y Combinator Ready"
                  ? RocketIcon
                  : o.title === "Revenue Positive"
                    ? RupeeIcon
                    : ChipIcon;

            return (
              <div
                key={o.title}
                className={[
                  "h-full rounded-3xl bg-white/[0.03] p-7 text-center ring-1 backdrop-blur",
                  "transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out will-change-transform",
                  "hover:-translate-y-1 hover:bg-white/[0.045]",
                  isHighlighted
                    ? "ring-fu/70 shadow-glow hover:ring-fu/80 hover:shadow-glowStrong"
                    : "ring-white/10 hover:ring-fu/35 hover:shadow-glow"
                ].join(" ")}
              >
                <div
                  className={[
                    "mx-auto grid h-14 w-14 place-items-center rounded-2xl ring-1",
                    isHighlighted
                      ? "bg-fu text-black ring-black/15"
                      : "bg-fu/10 text-fu ring-fu/20"
                  ].join(" ")}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div className="mt-5 text-lg font-semibold text-white">
                  {o.title}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/55">
                  {o.desc}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/[0.03] p-8 text-center ring-1 ring-white/10 backdrop-blur transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out will-change-transform hover:-translate-y-1 hover:bg-white/[0.045] hover:ring-fu/30 hover:shadow-glow">
            <div className="text-sm font-semibold text-fu">Consumer Brands</div>
            <div className="mt-3 text-sm text-white/60">
              Goal: Revenue-positive with proven unit economics
            </div>
          </div>
          <div className="rounded-3xl bg-white/[0.03] p-8 text-center ring-1 ring-white/10 backdrop-blur transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out will-change-transform hover:-translate-y-1 hover:bg-white/[0.045] hover:ring-fu/30 hover:shadow-glow">
            <div className="text-sm font-semibold text-fu">
              Deep Tech &amp; Manufacturing
            </div>
            <div className="mt-3 text-sm text-white/60">
              Goal: MVP ready or proof of concept validated
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="benefits"
        eyebrow="What You Walk Away With"
        title="What You Walk Away With"
        description="Every founder who gets selected receives guaranteed funding and resources to build their startup"
      >
        <div className="mx-auto grid max-w-5xl gap-10">

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { v: "₹20 Lakhs", l: "Guaranteed for every selected founder" },
              { v: "20\nFounders", l: "Selected each cohort, no exceptions" },
              { v: "90 Days", l: "Intensive program every quarter" }
            ].map((x) => (
              <div
                key={x.l}
                className={[
                  "rounded-3xl bg-white/[0.03] p-8 text-center ring-1 ring-white/10 backdrop-blur",
                  "transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out will-change-transform",
                  "hover:-translate-y-1 hover:bg-white/[0.045] hover:ring-fu/35 hover:shadow-glow"
                ].join(" ")}
              >
                <div className="text-3xl font-semibold tracking-tight text-fu">
                  {x.v.split("\n").map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm leading-relaxed text-white/70">
                  {x.l}
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] p-10 text-center ring-1 ring-fu/55 shadow-glow backdrop-blur">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fu/12 blur-[90px]" />
              <div className="absolute -right-28 -bottom-28 h-80 w-80 rounded-full bg-fu/8 blur-[110px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-black/10 to-black/35" />
            </div>

            <div className="relative">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-black/35 ring-1 ring-white/10">
                <img src="/icon.svg" alt="" className="h-9 w-9" />
              </div>
              <div className="mt-6 text-2xl font-semibold tracking-tight text-white">
                Your launchpad to the big leagues
              </div>
              <div className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
                After 90 days, you&apos;ll be ready for YC, Shark Tank India, or
                any top accelerator in the world.
              </div>
            </div>
          </div>
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
      <section id="apply" className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-[32px] bg-white/[0.03] ring-1 ring-fu/45 shadow-glow">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fu/12 blur-[80px]" />
              <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-fu/8 blur-[110px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-black/10 to-black/40" />
            </div>

            <div className="relative px-6 py-14 md:px-14 md:py-20">
              <div className="mx-auto max-w-3xl text-center">
                <img
                  src="/icon.svg"
                  alt=""
                  className="mx-auto h-16 w-16 rounded-2xl shadow-glowStrong ring-1 ring-black/25"
                />

                <h3 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  Ready to earn your first{" "}
                  <span className="text-fu">₹20 Lakhs</span>?
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg">
                  Stop waiting for permission. Apply now and join the next
                  cohort of India&apos;s most promising young founders.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-black/30 px-5 py-2 text-sm text-white/70 ring-1 ring-white/10 backdrop-blur">
                  <ClockIcon className="text-fu" />
                  <span>Applications close</span>
                  <span className="font-semibold text-fu">25th February</span>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button
                    variant="primary"
                    href={APPLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-4 text-base shadow-glowStrong"
                  >
                    Apply to Founders&apos; Union <ArrowRightIcon />
                  </Button>
                </div>

                <div className="mt-5 text-xs text-white/55">
                  Free to apply • No equity taken at application • Results in
                  15-20 days
                </div>
              </div>
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


