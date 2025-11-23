import React from 'react';
import { Link } from 'react-router-dom'; // Or your preferred routing library
import { useTailwindSemanticTokens } from '@/hooks/useTailwindSemanticTokens'; // Adjust path if needed

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { colors, spacing, typography } = useTailwindSemanticTokens();

  return (
    <footer className={`bg-${colors.surface.base} text-${colors.text.secondary} py-${spacing.md} border-t border-${colors.border.DEFAULT}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`text-sm ${typography.lead}`}>
              &copy; {new Date().getFullYear()} My Company. All rights reserved.
            </p>
          </div>

          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/privacy-policy" className={`hover:text-${colors.text.primary} text-sm`}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className={`hover:text-${colors.text.primary} text-sm`}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="/contact" className={`hover:text-${colors.text.primary} text-sm`}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-4 text-center">
          <p className={`text-xs ${typography.small}`}>
            My Company, Inc. 123 Main St, Anytown, CA 12345
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;