import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/goats', label: 'Meet The Herd' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }];


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ?
                    'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border' :
                    'bg-transparent'
            )}>

            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-24 md:h-36">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/assets/logo.svg"
                            alt="Goatheads LLC"
                            className={cn(
                                "h-32 md:h-40 w-auto object-contain transition-all duration-300 pt-4 md:pt-0",
                                isOpen && "pb-4"
                            )}
                            style={{
                                filter: scrolled
                                    ? 'none'
                                    : 'drop-shadow(0 0 3px rgba(180, 160, 130, 0.9)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 8px rgba(180, 160, 130, 0.7))'
                            }} />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) =>
                            <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                                    location.pathname === item.href ?
                                        scrolled ?
                                            'bg-primary text-white' :
                                            'bg-white/20 text-white' :
                                        scrolled ?
                                            'text-foreground hover:text-primary hover:bg-muted' :
                                            'text-white/90 hover:text-white hover:bg-white/15'
                                )}>

                                {item.label}
                            </Link>
                        )}
                        <Link
                            to="/contact"
                            className="ml-3 px-5 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-all duration-200 shadow-sm">

                            Get a Quote
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            'md:hidden p-2 rounded-lg transition-colors',
                            scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/15'
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu">

                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen &&
                <div className={cn(
                    "md:hidden border-t shadow-lg",
                    scrolled ? "bg-background border-border" : "bg-background/95 backdrop-blur-md border-white/20"
                )}>
                    <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
                        {navItems.map((item) =>
                            <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                                    location.pathname === item.href ?
                                        'bg-primary text-white' :
                                        'text-foreground hover:bg-muted'
                                )}>

                                {item.label}
                            </Link>
                        )}
                        <Link
                            to="/contact"
                            className="mt-2 px-5 py-3 rounded-full bg-accent text-white text-sm font-semibold text-center hover:bg-accent/90 transition-colors">

                            Get a Free Quote
                        </Link>
                    </nav>
                </div>
            }
        </header>);

}