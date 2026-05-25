import { useState } from 'react'

// Images belong in public/goats/*.jpg — copy project/assets/goats/* there.

interface Goat {
  file: string
  names: string[]
  role: string
  trait: string
}

const GOATS: Goat[] = [
  {
    file: 'bingo',
    names: ['Bingo'],
    role: 'Brush Connoisseur',
    trait: 'Will eat first, ask questions never.',
  },
  {
    file: 'bingus',
    names: ['Bingus'],
    role: 'Resident Goofball',
    trait: 'Mostly chaos. A little bit of charm.',
  },
  {
    file: 'bongo',
    names: ['Bongo'],
    role: 'Slope Specialist',
    trait: 'Hillsides? Please. Try harder.',
  },
  {
    file: 'diamond',
    names: ['Diamond'],
    role: 'Senior Munch Engineer',
    trait: 'Twelve years of buckthorn expertise.',
  },
  {
    file: 'dixi',
    names: ['Dixi'],
    role: 'Field Lead',
    trait: 'The herd follows her. Always.',
  },
  {
    file: 'dolly',
    names: ['Dolly'],
    role: 'Morale Officer',
    trait: 'Will headbutt you affectionately.',
  },
  {
    file: 'domino',
    names: ['Domino'],
    role: 'Pattern Recognition',
    trait: 'Knows exactly which weed to start with.',
  },
  {
    file: 'ginger',
    names: ['Ginger'],
    role: 'Buckthorn Specialist',
    trait: 'Has opinions about thistles.',
  },
  {
    file: 'josie',
    names: ['Josie'],
    role: 'Quality Assurance',
    trait: 'Tastes everything twice, to be sure.',
  },
  {
    file: 'keira',
    names: ['Keira'],
    role: 'Lead Trimmer',
    trait: 'Edges? Pristine. Boundaries? Respected.',
  },
  {
    file: 'maryland',
    names: ['Maryland'],
    role: 'Out-of-State Hire',
    trait: 'Loves Minnesota despite the winters.',
  },
  {
    file: 'peggy',
    names: ['Peggy'],
    role: 'Office Manager',
    trait: 'Keeps everyone on schedule.',
  },
  {
    file: 'poupee',
    names: ['Poupée'],
    role: 'French Correspondent',
    trait: 'Très fancy. Mange tout.',
  },
  {
    file: 'rolo-twix',
    names: ['Rolo', 'Twix'],
    role: 'The Candy Twins',
    trait: 'Inseparable. Always working in tandem.',
  },
  {
    file: 'skittles',
    names: ['Skittles'],
    role: 'Brand Ambassador',
    trait: 'Tastes the rainbow. Mostly the green parts.',
  },
  {
    file: 'socks-oreo',
    names: ['Socks', 'Oreo'],
    role: 'The Black-and-Whites',
    trait: 'Coordinated outfits. Coordinated chewing.',
  },
  {
    file: 'stevie-nicks',
    names: ['Stevie Nicks'],
    role: 'Lead Vocals',
    trait: 'Mystical energy. Loud bleats.',
  },
  {
    file: 'sven',
    names: ['Sven'],
    role: 'Heavy Lifter',
    trait: 'Big. Friendly. Loves Norwegians.',
  },
  {
    file: 'tortilla',
    names: ['Tortilla'],
    role: 'Wrap Star',
    trait: 'Soft, warm, and full of personality.',
  },
  {
    file: 'yoda-hans-chewy',
    names: ['Yoda', 'Hans', 'Chewy'],
    role: 'The Cantina Crew',
    trait: 'A long time ago, on a farm far, far away.',
  },
]

const totalGoats = GOATS.reduce((n, g) => n + g.names.length, 0)
const bondedGroups = GOATS.filter((g) => g.names.length > 1).length

function GoatCard({ goat }: { goat: Goat }) {
  const [loaded, setLoaded] = useState(false)
  const displayName = goat.names.join(' & ')
  const isGroup = goat.names.length > 1
  const groupLabel = goat.names.length === 2 ? 'Duo' : 'Trio'

  return (
    <figure
      className="relative overflow-hidden rounded-2xl mb-5 group break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300"
      style={{ backgroundColor: 'hsl(40 21% 89%)' }}
    >
      <img
        src={`/goats/${goat.file}.jpg`}
        alt={displayName}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition-all duration-700 group-hover:scale-[1.03] ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
      />

      {/* Gradient scrim */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

      {/* Name plate */}
      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3
            className="font-black italic leading-none"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)',
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            {displayName}
          </h3>
          {isGroup && (
            <span className="text-[10px] uppercase tracking-[0.18em] font-semibold opacity-80 px-2 py-0.5 rounded-full border border-white/40">
              {groupLabel}
            </span>
          )}
        </div>
        <p
          className="mt-1.5 text-xs font-semibold tracking-[0.14em] uppercase"
          style={{ color: 'hsl(43 70% 78%)' }}
        >
          {goat.role}
        </p>
      </figcaption>
    </figure>
  )
}

export function MeetTheTeam() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: 'hsl(43 26% 95%)' }}
    >
      <style>{`
        .goat-masonry { column-count: 4; column-gap: 1.5rem; }
        @media (max-width: 1100px) { .goat-masonry { column-count: 3; } }
        @media (max-width: 720px)  { .goat-masonry { column-count: 2; column-gap: 1rem; } }
        @media (max-width: 440px)  { .goat-masonry { column-count: 1; } }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <span
            className="text-xs font-bold tracking-[0.22em] uppercase"
            style={{ color: 'hsl(35 32% 41%)' }}
          >
            Meet the Crew
          </span>

          <h2
            className="font-black mt-4 mb-5 leading-[0.95]"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              color: 'hsl(96 57% 20%)',
            }}
          >
            The Team.{' '}
            <span
              className="italic"
              style={{ color: 'hsl(35 32% 41%)' }}
            >
              All {totalGoats} of them.
            </span>
          </h2>

          <p className="text-lg leading-relaxed" style={{ color: 'hsl(0 0% 30%)' }}>
            Every goat on the payroll. Each one trained, GPS-tracked, and
            contractually obligated to eat your buckthorn. Some of them have
            opinions about it.
          </p>

          {/* Stat strip */}
          <div
            className="mt-10 inline-flex items-stretch divide-x rounded-full px-2 py-2 shadow-sm"
            style={{
              backgroundColor: 'hsl(60 17% 98%)',
              border: '1px solid hsl(40 21% 81%)',
            }}
          >
            {([
              [String(totalGoats), 'Goats'],
              [String(bondedGroups), 'Bonded groups'],
              ['∞', 'Buckthorn appetite'],
            ] as [string, string][]).map(([n, label], i) => (
              <div
                key={label}
                className={`px-6 py-1 ${i > 0 ? 'border-l' : ''}`}
                style={{ borderColor: 'hsl(40 21% 81%)' }}
              >
                <div
                  className="font-black italic leading-none"
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '1.6rem',
                    color: 'hsl(96 57% 20%)',
                  }}
                >
                  {n}
                </div>
                <div
                  className="text-[10px] tracking-[0.16em] uppercase font-semibold mt-1"
                  style={{ color: 'hsl(35 32% 41%)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="goat-masonry">
          {GOATS.map((goat) => (
            <GoatCard key={goat.file} goat={goat} />
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-16">
          <p
            className="text-sm italic"
            style={{ color: 'hsl(35 32% 41%)' }}
          >
            Want to meet them in person? They're surprisingly social.
          </p>
        </div>
      </div>
    </section>
  )
}
