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
      {/* carousel */}
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Burger"
          />
        </div>
      </div>
      {/* brower added */}
      <div className="mockup-browser border border-base-300">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">https://rakib.com</div>
        </div>
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
          Hello!
        </div>
      </div>
    </>
  );
};

export default About;
