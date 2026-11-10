import './Why.css'

function Why() {
  return (
    <>
      <div className="container-fluid g-0">
        <img
          style={{ maxHeight: '400px', objectFit: 'cover' }}
          className="img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7"
          src="https://i.redd.it/13e8rg6yk0nb1.jpg"
          alt="Photo by Irene Dávila"
        />
      </div>

      <div className="container p-5 bg-body mt-md-n6 position-relative rounded">
        <div className="row">
          <div className="col-md-4 text-center align-self-center">
            <div className="lc-block border-lg-end border-2">
              <p className="display-4 text-secondary">ALOLA!</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="lc-block">
              <p className="display-4">Think different and create a wonderful kind of digital agency.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 offset-md-1">
            <div className="lc-block mt-5">
              <p className="lead text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor.
              </p>
              <p className="lead text-secondary">
                Ut porta lacus eget nisi fermentum lobortis. Vestibulum facilisis tempor ipsum, ut rhoncus magna ultricies laoreet. Proin vehicula erat eget libero accumsan iaculis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Why
