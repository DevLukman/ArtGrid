/* eslint-disable react/prop-types */
function PageNotFound({ error, resetErrorBoundary }) {
  return (
    <section className="pt-[40px]">
      <div className="container">
        <div className="four_zero_four_bg">
          <h1 className="text-center text-4xl">Something went wrong!</h1>
        </div>
        <div className="text-center">
          <h3 className="text-2xl">{error.message}</h3>
          <div className="mt-4">
            <button
              onClick={resetErrorBoundary}
              className="rounded bg-[#000] px-8 py-2 text-base uppercase text-white"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
