import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

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

// ─── GOAT CARD ────────────────────────────────────────────────────────────────
function GoatCard({ file, names, role }: { file: string; names: string[]; role: string }) {
    const [loaded, setLoaded] = useState(false);
    const displayName = names.join(' & ');
    const isGroup = names.length > 1;
    const groupLabel = names.length === 2 ? 'Duo' : names.length === 3 ? 'Trio' : 'Group';

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

// ─── ALL GOATS DATA ───────────────────────────────────────────────────────────
const allGoats = [
    { file: 'dixi', names: ['Dixi'], role: 'Field Lead' },
    { file: 'stevie-nicks', names: ['Stevie Nicks'], role: 'Lead Vocals' },
    { file: 'rolo-twix', names: ['Rolo', 'Twix'], role: 'The Candy Twins' },
    { file: 'yoda-hans-chewy', names: ['Yoda', 'Hans', 'Chewy'], role: 'The Cantina Crew' },
    { file: 'bingo', names: ['Bingo'], role: 'Team Scout' },
    { file: 'bongo', names: ['Bongo'], role: 'Rhythm Section' },
    { file: 'bingus', names: ['Bingus'], role: 'Chief Mischief Officer' },
    { file: 'diamond', names: ['Diamond'], role: 'Sparkle Specialist' },
    { file: 'dolly', names: ['Dolly'], role: 'Country Star' },
    { file: 'domino', names: ['Domino'], role: 'Pattern Expert' },
    { file: 'ginger', names: ['Ginger'], role: 'Spice of Life' },
    { file: 'josie', names: ['Josie'], role: 'Social Coordinator' },
    { file: 'keira', names: ['Keira'], role: 'Drama Queen' },
    { file: 'maryland', names: ['Maryland'], role: 'State Ambassador' },
    { file: 'peggy', names: ['Peggy'], role: 'Vintage Charm' },
    { file: 'poupee', names: ['Poupée'], role: 'French Elegance' },
    { file: 'skittles', names: ['Skittles'], role: 'Rainbow Ranger' },
    { file: 'socks-oreo', names: ['Socks', 'Oreo'], role: 'Cookie Connoisseurs' },
    { file: 'sven', names: ['Sven'], role: 'Nordic Navigator' },
    { file: 'tortilla', names: ['Tortilla'], role: 'Wrap Artist' },
];

// ─── HEADER SECTION ───────────────────────────────────────────────────────────
function HeaderSection() {
    return (
        <section className="bg-primary py-20 relative overflow-hidden">
            <div
                className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
                style={{ background: 'hsl(var(--accent))' }}
            />
            <div className="container mx-auto px-6 relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium mb-6 transition-colors"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' as const }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/90 text-white text-xs font-bold tracking-widest uppercase mb-4">
                        Meet the Entire Herd
                    </span>
                    <h1 className="font-heading font-black text-5xl md:text-6xl text-white leading-tight mb-4">
                        All 20 Members of
                        <br />
                        the <span className="text-accent italic">GoatHeads Crew</span>
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Every single one of our goats has a personality, a purpose, and a passion for clearing brush.
                        Get to know the full team that makes Minnesota land clearing genuinely enjoyable.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// ─── GOATS GRID ───────────────────────────────────────────────────────────────
function GoatsGrid() {
    return (
        <section className="bg-background py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {allGoats.map((goat, i) => (
                        <FadeIn key={goat.file} delay={i * 0.03}>
                            <GoatCard {...goat} />
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
        <section className="bg-muted py-16">
            <div className="container mx-auto px-6">
                <FadeIn className="text-center max-w-2xl mx-auto">
                    <h2 className="font-heading font-black text-3xl md:text-4xl text-primary mb-4">
                        Ready to put this crew to work?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        These 20 goats are ready to tackle your land clearing project. Get a free quote and see how
                        the herd can transform your property.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Get Your Free Quote
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function GoatsPage() {
    return (
        <>
            <title>Meet All Our Goats - GoatHeads Minnesota</title>
            <meta
                name="description"
                content="Meet all 20 members of the GoatHeads crew. Each goat has a unique personality and role in our eco-friendly land clearing operations."
            />

            <HeaderSection />
            <GoatsGrid />
            <CtaSection />
        </>
    );
}
