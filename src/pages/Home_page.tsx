import React from 'react'

function Home_page() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          background: "linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 100%)"
        }}
      >
        <div
          className="text-center p-5 rounded-4 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            width: "450px"
          }}
        >
          <h1 className="fw-bold mb-3" style={{ color: "#34495E" }}>
            Welcome to ToDO App✨
          </h1>

          <p className="text-muted mb-4 fs-5">
            Start your journey by registering below
          </p>

          <a
            href="/registration"
            className="btn btn-primary w-100 rounded-3 py-2 mb-3 fs-5 shadow-sm"
          >
            Register
          </a>

          <a
            href="/loginpage"
            className="btn btn-outline-dark w-100 rounded-3 py-2 fs-5 shadow-sm"
          >
            Login
          </a>

          <div className="mt-4 small text-secondary">
            It's fast, secure and easy. 🤍
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_page