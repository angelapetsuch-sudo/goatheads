import { Link } from 'react-router-dom';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            {/* Wave top */}
            <div className="overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 60"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full block"
                    style={{ marginBottom: '-2px' }}
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
                        fill="hsl(var(--background))"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 pt-4 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="mb-4">
                            <img
                                src="/assets/goatheads-logo.svg"
                                alt="Goatheads MN Land Clearing Co."
                                className="h-40 w-auto object-contain"
                            />
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                            Minnesota's eco-friendly brush removal crew. No chemicals, no machines — just goats
                            doing what they do best, right here in the North Star State.
                        </p>
                        <p className="mt-4 text-accent text-sm font-medium italic">
                            "We're not kidding around."
                        </p>
                    </div>

                    {/* Nav */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4 text-white">Explore</h3>
                        <ul className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-white/70 hover:text-accent text-sm transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4 text-white">Get in Touch</h3>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">
                            Ready to let the herd handle it? We'd love to hear about your land.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-6 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors duration-200"
                        >
                            Get a Free Quote
                        </Link>
                        <div className="mt-6 text-white/50 text-xs">
                            <p>Proudly serving Minnesota & western Wisconsin</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-white/50 text-xs">
                        © {year} Goatheads MN Land Clearing Co. All rights reserved.
                    </p>
                    <p className="text-white/40 text-xs italic">
                        Minnesota's GOAT Standard in Land Clearing 🐐
                    </p>
                </div>
            </div>
        </footer>
    );
}
