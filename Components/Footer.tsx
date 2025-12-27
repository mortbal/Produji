import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { EmailIcon } from './icons/EmailIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border-primary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Produji. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <button className="text-text-muted hover:text-text-primary transition-colors">
              <GithubIcon className="w-5 h-5" />
            </button>
            <button className="text-text-muted hover:text-text-primary transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </button>
            <button className="text-text-muted hover:text-text-primary transition-colors">
              <EmailIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
