function App() {
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
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
              Login/Signup
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full overflow-y-auto">
        {/* Home Section */}
        <section className="py-20 flex flex-col items-center justify-center min-h-[80vh] w-full">
          <h1 className="text-4xl font-bold mb-8">Book Your Ride</h1>
          <div className="bg-white rounded-xl p-8 w-full max-w-md mx-auto">
            <p className="text-center text-gray-500">
              Please login to book a ride
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-100 w-full">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
