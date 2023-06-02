/**
 * CTA (Call-to-Action) component for rendering a styled link button.
 *
 * @module CTA
 */
import { NavLink } from 'react-router-dom';

/**
 * Props for the CTA component.
 */
type CTAProps = {
  title: string;
  href: string;
};

/**
 * CTA (Call-to-Action) component for rendering a styled link button.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title or label of the CTA button.
 * @param {string} props.href - The destination URL of the CTA button.
 * @returns {JSX.Element} The rendered CTA component.
 */
const CTA = ({ title, href }: CTAProps) => {
  return (
    <NavLink
      to={href}
      className="bg-secondary py-3 px-5 rounded-full text-base text-center lg:text-xl hover:bg-primary text-white"
      title={title}
    >
      {title}
    </NavLink>
  );
};

export default CTA;
