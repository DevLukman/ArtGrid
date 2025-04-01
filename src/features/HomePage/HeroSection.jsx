function HeroSection() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div>
          <video
            src="/videos/hero-1.mp4"
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 z-10 size-full object-cover object-center"
          />
        </div>
        <div className="absolute z-30 flex h-screen w-full items-end justify-center">
          <h1 className="mx-auto mb-20 max-w-[400px] text-center text-4xl font-semibold text-[#fff] sm:max-w-full sm:text-5xl lg:text-6xl lg:font-semibold">
            The Next Chapter of ArtGrid
          </h1>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
