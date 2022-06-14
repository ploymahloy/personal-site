import profile from './assets/profile.png';

function App() {
	return (
		<div className="App">
			<div className="container text-secondary col-xxl-8 px-4 py-5">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img
							src={profile}
							className="d-block mx-lg-auto img-fluid rounded bg-secondary"
							alt="..."
							loading="lazy"
						/>
					</div>
					<div className="col-lg-6">
						<h1 className="display-5 text-white fw-bold lh-1 mb-3">
							Hi, I'm Patrick
						</h1>
						<p className="lead">
							I slap my keyboard around until I get some shit to work.
						</p>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start">
							<button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
								Resume
              </button>
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
								Projects
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
