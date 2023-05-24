import CTA from '../components/CTA';

const NotFound = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-10 items-center">
      <h1>
        <span className="inline-block animate-bounce">🕴️</span> Page not found
      </h1>
      <CTA title="Return to the home page" href="/" />
    </div>
  );
};

export default NotFound;
