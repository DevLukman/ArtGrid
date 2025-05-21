function PrivateSalesInformation() {
  return (
    <div className="mt-[100px] w-full">
      <div className="grid w-full grid-cols-1 gap-6 rounded md:grid-cols-2">
        <div className="border px-4 py-5 text-center">
          <p className="text-xs">
            Interested in any of the artworks above? Get in touch for details or
            to request our full catalogue of works available.
          </p>
          <button className="mt-4 rounded border px-8 py-2 text-center text-base font-normal uppercase text-[#000]">
            inquire
          </button>
        </div>
        <div className="rounded border px-4 py-5 text-center">
          <p className="text-xs">
            Looking to sell a high-value artwork, we can connect you with the
            right collector.
          </p>
          <button className="mt-4 rounded border px-8 py-2 text-center text-base font-normal uppercase text-[#000]">
            Submit an artwork
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivateSalesInformation;
