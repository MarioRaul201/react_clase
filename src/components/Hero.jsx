import Countdown from './Countdown'

function Hero() {
  return (
    <section>
      <div className="container text-center py-5 mb-4">
        <div className="p-5 mb-4 lc-block">
          <div className="lc-block mb-4">
            <div>
              <h2 className="fw-bold display-2">Ocarina</h2>
              <h2 className="fw-bold display-2">of time</h2>
            </div>
          </div>
          <div className="lc-block mb-5">
            <div>
              <p className="lead">
                Using a series of utilities, you can create this jumbotron.<br />
                just like the one in previous versions of Bootstrap.
              </p>
            </div>
          </div>
          <div className="lc-block mb-2">
            <Countdown className="display-2" endTime="2026-11-05T00:00:00" />
          </div>
          <div className="lc-block">
            <a className="btn btn-link btn-sm" href="#" role="button">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
