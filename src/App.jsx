import { useState } from "react";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import rapido from "./assets/rapido.png";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl"> 🚗</span>
            <span className="font-bold text-xl">RideShare</span>
          </div>
          <div>
            <button
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
              onClick={() => setShowAuth(true)}
            >
              Login/Signup
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full overflow-y-auto">
        {/* Home Section */}
        {/* <section className="py-20 flex flex-col items-center justify-center min-h-[80vh] w-full">
          <h1 className="text-4xl font-bold mb-8">Book Your Ride</h1>
          <div className="bg-white rounded-xl p-8 w-full max-w-md mx-auto">
            <p className="text-center text-gray-500">
              Please login to book a ride
            </p>
          </div>
        </section> */}

        <section className="py-16 w-full bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-1 flex flex-col justify-center items-start max-w-xl px-6">
            <h2 className="text-4xl font-bold mb-2 text-gray-900">
              Get Quick Rides, <br />
              <span className="inline-block border-b-4 border-yellow-400 pb-1">
                Low Fares
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 mt-4">
              In Rapido we ensure our customers get rides quickly at the most
              affordable prices.
            </p>
            <button className="bg-gray-900 text-white font-semibold px-8 py-3 rounded flex items-center gap-2 hover:bg-gray-800 transition">
              Login to Book a Ride <span className="ml-2">&rarr;</span>
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center max-w-lg px-6">
            <img
              src={img1}
              alt="Services"
              className="rounded-2xl object-cover w-full h-80"
            />
          </div>
        </section>

        {/* About Section (Safety for all) */}
        <section className="py-16 w-full bg-white flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-1 flex justify-center items-center max-w-lg px-6 order-1 md:order-none">
            <img
              src={img2}
              alt="Safety for all"
              className="rounded-2xl object-cover w-full h-80"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start max-w-xl px-6 order-2 md:order-none">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Safety for all
              <div className="w-16 h-1 bg-yellow-400 mt-2 mb-4"></div>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              At Rapido, your safety is our priority. We're dedicated to making
              every ride safe and comfortable.
            </p>
            <a
              href="#"
              className="text-blue-700 text-lg font-semibold hover:underline flex items-center"
            >
              Know More <span className="ml-1">&gt;</span>
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-100 w-full">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {[
              {
                title: "Economy",
                desc: "Affordable rides for everyday travel",
                features: [
                  "Up to 4 passengers",
                  "Standard vehicles",
                  "Best value",
                ],
                icon: "🚗",
              },
              {
                title: "Comfort",
                desc: "Enhanced comfort with premium vehicles",
                features: [
                  "Up to 4 passengers",
                  "Premium vehicles",
                  "Extra legroom",
                ],
                icon: "🚙",
              },
              {
                title: "Premium",
                desc: "Luxury rides for special occasions",
                features: [
                  "Up to 4 passengers",
                  "Luxury vehicles",
                  "Professional drivers",
                ],
                icon: "👑",
              },
              {
                title: "XL",
                desc: "Spacious rides for groups",
                features: [
                  "Up to 6 passengers",
                  "Large vehicles",
                  "Perfect for groups",
                ],
                icon: "👥",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 w-64 flex flex-col items-center"
              >
                <div className="text-4xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="mb-2 text-center">{s.desc}</p>
                <ul className="text-green-600 text-sm list-inside list-disc">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-black w-full">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Download Now
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
            <div className="flex flex-col items-center">
              <img
                src={rapido}
                alt="Rapido"
                className="w-20 h-20 mb-4 rounded-lg"
              />
              <div className="text-white text-center font-semibold">
                Rapido: Bike-Taxi,
                <br /> Auto & Cabs
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={rapido}
                alt="Rapido"
                className="w-20 h-20 mb-4 rounded-lg"
              />
              <div className="text-white text-center font-semibold">
                Rapido Captain: <br />
                Drive & Earn
              </div>
            </div>
          </div>
        </section>
      </main>

      {showAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
            <h2 className="text-2xl font-bold mb-4">
              {authMode === "login" ? "Login" : "Sign Up"}
            </h2>
            <div className="flex gap-2 mb-4">
              <button
                className={`flex-1 py-2 rounded ${
                  authMode === "login"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
                onClick={() => setAuthMode("login")}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 rounded ${
                  authMode === "signup"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
                onClick={() => setAuthMode("signup")}
              >
                Sign Up
              </button>
            </div>
            {authMode === "login" ? <Login /> : <Signup />}
            <button
              className="absolute top-2 right-2 text-gray-900 bg-white rounded-full w-8 h-8 flex items-center justify-center text-2xl"
              onClick={() => setShowAuth(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      <footer className="bg-gray-900 text-white py-4 text-center mt-auto">
        &copy; 2025 RideShare. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
