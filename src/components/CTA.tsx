import { NavLink } from 'react-router-dom';

type CTAProps = {
  title: string;
  href: string;
};

const CTA = ({ title, href }: CTAProps) => {
  return (
    <NavLink
      to={href}
      className="bg-secondary py-3 px-5 rounded-full text-xl hover:bg-primary text-white"
      title={title}
    >
      {title}
    </NavLink>
  );
};

export default CTA;
