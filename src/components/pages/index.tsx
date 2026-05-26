import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle, Leaf, VolumeOff, MapPin, Sprout, Heart } from 'lucide-react';

// ─── Fade-in wrapper ────────────────────────────────────────────────────────
function FadeIn({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' as const }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Wave Divider ────────────────────────────────────────────────────────────
function WaveDivider({ flip = false, fill = 'hsl(var(--background))' }: { flip?: boolean; fill?: string }) {
    return (
        <div className={`overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
            <svg
                viewBox="0 0 1440 70"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full block"
                preserveAspectRatio="none"
                style={{ marginBottom: '-2px' }}
            >
                <path
                    d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,28 1440,35 L1440,70 L0,70 Z"
                    fill={fill}
                />
            </svg>
        </div>
    );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

    return (
        <section ref={ref} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Parallax background */}
            <motion.div className="absolute inset-0 scale-110" style={{ y }}>
                <img
                    src="https://images.unsplash.com/photo-1553013746-7b0be5ef5c6b?w=1920&q=80&fit=crop"
                    alt="Goats clearing brush on a sunny field"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/90 text-white text-xs font-bold tracking-widest uppercase mb-6 mt-8 md:mt-0">
                            Minnesota Eco-Friendly Land Clearing
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' as const }}
                        className="font-heading font-black text-white leading-[0.95] mb-6"
                        style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
                    >
                        Minnesota
                        <br />
                        <span className="text-accent italic">meets goats.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' as const }}
                        className="text-white/85 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
                    >
                        Minnesota's most unique land clearing service. Instead of loud machines and chemicals,
                        we bring in a hardworking herd that actually enjoys clearing your land. Buckthorn,
                        brush, weeds — gone.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' as const }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-white font-bold text-base hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Get a Free Quote
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            to="/how-it-works"
                            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/15 backdrop-blur-sm text-white font-semibold text-base border border-white/30 hover:bg-white/25 transition-all duration-200"
                        >
                            See How It Works
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' as const }}
                    className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
                />
            </motion.div>
        </section>
    );
}

// ─── INTRO STRIP ─────────────────────────────────────────────────────────────
function IntroStrip() {
    return (
        <section className="bg-primary py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-white/90 text-sm font-medium">
                    {[
                        '🌿 Zero chemicals',
                        '🔇 No loud machines',
                        '🐐 100% goat-powered',
                        '🌱 Improves soil health',
                        '📍 NoFence GPS guided',
                        '🏔️ Proudly Minnesota-based',
                    ].map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── WHAT IS GOATSCAPING ──────────────────────────────────────────────────────
function WhatIsSection() {
    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <span className="text-accent font-bold text-sm tracking-widest uppercase">
                            Chew on this
                        </span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl text-primary mt-3 mb-6 leading-tight">
                            The GOATs of
                            <br />
                            Minnesota Land Clearing.
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            Goatheads is exactly what it sounds like — and yes, it's as great as it sounds. We
                            deploy a trained herd of goats to your Minnesota property, guided by{' '}
                            <strong className="text-foreground">NoFence GPS technology</strong>, to clear
                            invasive brush, buckthorn, weeds, and overgrowth.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            Our goats go where equipment can't, eat what others won't, and leave your property
                            cleaner, healthier, and surprisingly peaceful. No fumes. No noise. No drama.
                        </p>
                        <Link
                            to="/how-it-works"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
                        >
                            Learn how it works
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-accent/20 -z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1599909533730-baa2819a9b5a?w=800&q=80&fit=crop"
                                alt="Herd of goats grazing on a hillside"
                                className="w-full h-80 object-cover rounded-2xl shadow-xl"
                            />
                            <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-5 py-4 shadow-lg">
                                <div className="font-heading font-black text-3xl text-accent">100%</div>
                                <div className="text-xs text-white/80 font-medium">Chemical Free</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
function HowItWorksSection() {
    const steps = [
        {
            number: '01',
            title: 'We Bring the Herd',
            description:
                'We assess your property, set up the NoFence virtual boundary, and deliver your dedicated crew of brush-hungry goats. No setup headaches — we handle everything.',
            note: "We're not kidding — it's that easy.",
        },
        {
            number: '02',
            title: 'They Eat Everything',
            description:
                "The goats get to work immediately, munching through buckthorn, invasive brush, weeds, and overgrowth. They go where mowers can't — steep slopes, dense thickets, rocky terrain.",
            note: 'Herd mentality (the good kind).',
        },
        {
            number: '03',
            title: 'You Enjoy the Results',
            description:
                "When the job is done, we collect the herd and leave you with cleared, healthier land. The goats even fertilize as they go. Nature's cleanup crew, start to finish.",
            note: 'No baaad results. Guaranteed.',
        },
    ];

    return (
        <section className="bg-muted py-24">
            <WaveDivider fill="hsl(var(--muted))" />
            <div className="container mx-auto px-6">
                <FadeIn className="text-center mb-16">
                    <span className="text-accent font-bold text-sm tracking-widest uppercase">
                        Simple as 1, 2, 3
                    </span>
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-primary mt-3">
                        How GoatScaping Works
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector line */}
                    <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-border" />

                    {steps.map((step, i) => (
                        <FadeIn key={step.number} delay={i * 0.12}>
                            <div className="relative bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                                <div className="font-heading font-black text-7xl text-primary/10 leading-none mb-4 select-none">
                                    {step.number}
                                </div>
                                <h3 className="font-heading font-bold text-xl text-primary mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                                    {step.description}
                                </p>
                                <p className="mt-4 text-accent text-sm font-semibold italic">{step.note}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.3} className="text-center mt-12">
                    <Link
                        to="/how-it-works"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-200"
                    >
                        Full Process Details
                        <ArrowRight size={16} />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}

// ─── WHY GOATSCAPING ──────────────────────────────────────────────────────────
function WhySection() {
    const benefits = [
        {
            icon: Leaf,
            headline: 'Chemically Challenged (In a Good Way)',
            body: 'Zero herbicides, zero pesticides. Just natural browsing that clears invasive plants without harming your soil, waterways, or wildlife.',
        },
        {
            icon: VolumeOff,
            headline: 'Blissfully Quiet',
            body: 'No gas engines, no chainsaws, no leaf blowers. Just the peaceful sound of goats doing their thing. Your neighbors will thank you.',
        },
        {
            icon: MapPin,
            headline: 'Goes Where Machines Fear to Tread',
            body: 'Steep hillsides, rocky outcroppings, dense thickets — goats navigate terrain that would stop any piece of equipment cold.',
        },
        {
            icon: Sprout,
            headline: 'Leaves the Land Better',
            body: 'Goat grazing naturally fertilizes as it goes, stimulating native plant regrowth and improving long-term soil health.',
        },
        {
            icon: Heart,
            headline: 'Surprisingly Peaceful',
            body: 'Watching a herd of goats work is genuinely delightful. Clients often just... sit and watch. We get it.',
        },
        {
            icon: CheckCircle,
            headline: 'Targeted & Precise',
            body: "NoFence GPS technology means the herd stays exactly where you need them — no wandering, no surprises, no escaped goats on your neighbor's lawn.",
        },
    ];

    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-6">
                <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-accent font-bold text-sm tracking-widest uppercase">
                        Why GoatScaping
                    </span>
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-primary mt-3 mb-4">
                        Better for Your Land.
                        <br />
                        Better for the Planet.
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We're not just an alternative to traditional land clearing — we're a genuinely better
                        option in almost every way.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((b, i) => (
                        <FadeIn key={b.headline} delay={i * 0.08}>
                            <div className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                                    <b.icon size={20} className="text-primary" />
                                </div>
                                <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">
                                    {b.headline}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{b.body}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── GOAT PREVIEW CARD ────────────────────────────────────────────────────────
function GoatPreviewCard({ file, names, role }: { file: string; names: string[]; role: string }) {
    const [loaded, setLoaded] = useState(false);
    const displayName = names.join(' & ');
    const isGroup = names.length > 1;
    const groupLabel = names.length === 2 ? 'Duo' : 'Trio';

    return (
        <figure
            className="relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-shadow duration-300 m-0"
            style={{ aspectRatio: '3 / 4', backgroundColor: 'hsl(var(--muted-foreground) / 0.08)' }}
        >
            <img
                src={`/assets/goats/${file}.jpg`}
                alt={displayName}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04] ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="flex items-baseline gap-2 flex-wrap">
                    <h3
                        className="font-heading font-black italic leading-none"
                        style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.6rem)', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
                    >
                        {displayName}
                    </h3>
                    {isGroup && (
                        <span className="text-[10px] uppercase tracking-[0.18em] font-semibold opacity-80 px-2 py-0.5 rounded-full border border-white/40">
                            {groupLabel}
                        </span>
                    )}
                </div>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] uppercase text-accent">
                    {role}
                </p>
            </figcaption>
        </figure>
    );
}

// ─── GOAT SHOWCASE ────────────────────────────────────────────────────────────
function ShowcaseSection() {
    const previewGoats = [
        { file: 'dixi', names: ['Dixi'], role: 'Field Lead' },
        { file: 'rolo-twix', names: ['Rolo', 'Twix'], role: 'The Candy Twins' },
        { file: 'stevie-nicks', names: ['Stevie Nicks'], role: 'Lead Vocals' },
        { file: 'yoda-hans-chewy', names: ['Yoda', 'Hans', 'Chewy'], role: 'The Cantina Crew' },
    ];

    return (
        <section className="bg-muted py-24">
            <div className="container mx-auto px-6">
                <FadeIn className="text-center mb-12">
                    <span className="text-accent font-bold text-sm tracking-widest uppercase">
                        Meet the Crew
                    </span>
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-primary mt-3 mb-4">
                        A few familiar faces.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Every goat on the payroll has a name, a role, and strong opinions about buckthorn.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {previewGoats.map((goat, i) => (
                        <FadeIn key={goat.file} delay={i * 0.1}>
                            <GoatPreviewCard {...goat} />
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.4} className="text-center mt-10">
                    <Link
                        to="/goats"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-200"
                    >
                        Meet the rest of the herd
                        <ArrowRight size={16} />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
    const testimonials = [
        {
            quote:
                "I was skeptical — goats? Really? But after watching them clear two acres of buckthorn in three days, I'm a total convert. My property looks incredible.",
            name: 'Sarah M.',
            location: 'Minneapolis, MN',
            detail: '2 acres of buckthorn cleared',
        },
        {
            quote:
                "Hired GoatScaping for a steep hillside that our mower couldn't touch. The goats handled it effortlessly. Bonus: my kids thought it was the best day ever.",
            name: 'Tom & Lisa R.',
            location: 'Stillwater, MN',
            detail: 'Hillside brush removal',
        },
        {
            quote:
                "The NoFence technology is genuinely impressive — the goats stayed exactly where they needed to be. Professional, eco-friendly, and honestly kind of magical.",
            name: 'David K.',
            location: 'Hudson, WI',
            detail: 'Wooded lot clearing',
        },
    ];

    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-6">
                <FadeIn className="text-center mb-14">
                    <span className="text-accent font-bold text-sm tracking-widest uppercase">
                        Don't Take Our Word for It
                    </span>
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-primary mt-3">
                        No Baaad Results.
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <FadeIn key={t.name} delay={i * 0.1}>
                            <div className="bg-card rounded-2xl p-8 border border-border h-full flex flex-col">
                                <div className="text-accent text-4xl font-heading font-black leading-none mb-4">"</div>
                                <p className="text-card-foreground text-base leading-relaxed flex-1 italic">
                                    {t.quote}
                                </p>
                                <div className="mt-6 pt-5 border-t border-border">
                                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                                    <div className="text-muted-foreground text-xs mt-0.5">{t.location}</div>
                                    <div className="mt-2 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                        {t.detail}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
function CtaSection() {
    return (
        <section className="relative overflow-hidden bg-primary py-24">
            {/* Decorative blob */}
            <div
                className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
                style={{ background: 'hsl(var(--accent))' }}
            />
            <div
                className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10"
                style={{ background: 'hsl(var(--accent))' }}
            />

            <div className="relative container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeIn>
                        <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight mb-4">
                            Ready to let the
                            <br />
                            <span className="text-accent">goats do the work?</span>
                        </h2>
                        <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-md">
                            Get a free quote for your property. We'll assess the land, tell you exactly what the
                            herd can handle, and get you on the schedule.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-base hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Get Your Free Quote
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/faq"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
                            >
                                Read the FAQ
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1594629003257-e5427f4f7715?w=600&q=80&fit=crop"
                                alt="A friendly goat ready to work"
                                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl object-cover h-72"
                            />
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-white rounded-full px-6 py-2 text-sm font-bold shadow-lg whitespace-nowrap">
                                Minnesota's GOAT Standard in Land Clearing 🐐
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
    return (
        <>
            <title>Goatheads — Minnesota's Eco-Friendly Land Clearing Powered by Goats</title>
            <meta
                name="description"
                content="Goatheads uses trained goats guided by NoFence GPS technology to clear brush, buckthorn, and weeds from your Minnesota property. Chemical-free, machine-free, and surprisingly peaceful."
            />

            <HeroSection />
            <IntroStrip />
            <WhatIsSection />
            <HowItWorksSection />
            <WhySection />
            <ShowcaseSection />
            <TestimonialsSection />
            <CtaSection />
        </>
    );
}
