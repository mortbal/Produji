import Image from 'next/image';
import LogoHeader from './media/LogoHeader.svg';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={LogoHeader}
              alt="Produji Logo"
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Middle - Empty for now */}
          <div className="flex-1"></div>

          {/* Theme Toggle and Login Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="px-6 py-2 rounded-lg bg-secondary hover:bg-hover border border-border-primary transition-colors font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
