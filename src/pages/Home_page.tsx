
import"./Home_page.css"
function Home_page() {
  return (
    <>
      <div className="home-hero">
        <div className="home-card">
          <h1 className="home-title">Welcome to ToDO App✨</h1>

          <p className="home-subtitle">
            Start your journey by registering below
          </p>

          <a href="/registration" className="home-btn-primary btn shadow-sm">
            Register
          </a>

          <a href="/loginpage" className="home-btn-outline btn shadow-sm">
            Login
          </a>

          <div className="home-footer-text">
            It's fast, secure and easy. 🤍
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_page