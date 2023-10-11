const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* brower added */}
      <div className="mockup-browser border border-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">
            https://rakib.com
          </div>
        </div>
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
          Hello!
        </div>
      </div>
    </>
  );
};

export default About;
