import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="pt-[40px]">
      <div className="container">
        <div className="four_zero_four_bg">
          <h1 className="text-center text-9xl">404</h1>
        </div>
        <div className="text-center">
          <h3 className="text-2xl">Looks like you&apos;re lost. 😉</h3>
          <p className="text-xl">
            the page you are looking for is not avaible!
          </p>

          <div className="mt-4">
            <Link
              to="/"
              className="rounded bg-[#000] px-8 py-2 text-base uppercase text-white"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
