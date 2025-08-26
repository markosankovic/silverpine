import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">SILVERPINE</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Welcome to SILVERPINE</h2>
          <p className="text-gray-700">
            Cozy family-owned apartment on Kopaonik mountain – perfect for your ski or summer getaway.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded shadow">Feature 1</div>
          <div className="bg-gray-100 p-4 rounded shadow">Feature 2</div>
          <div className="bg-gray-100 p-4 rounded shadow">Feature 3</div>
          <div className="bg-gray-100 p-4 rounded shadow">Feature 4</div>
          <div className="bg-gray-100 p-4 rounded shadow">Feature 5</div>
          <div className="bg-gray-100 p-4 rounded shadow">Feature 6</div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">&copy; 2025 SILVERPINE. All rights reserved.</div>
      </footer>

      <div>SILVERPINE</div>
      <div>
        <Image src="/logo.svg" alt="Silverpine Logo" width={300} height={300} priority />
      </div>
      <div>Cozy family-owned apartment on Kopaonik mountain - perfect for your ski or summer getaway.</div>
      <div>Location</div>
      <div>Amenities</div>
      <div>Availability &amp; pricing</div>
      <div>Contact</div>
      <div>Payment Info</div>
      <div>Ski Bus: Table, accross the Srebrna Planina hotel</div>
      <div>Links: AirBnb, Booking</div>
      <div>Photo Gallery</div>
      <div>Check in/out information</div>
      <div>When coming in what to do, when going out what to do</div>
      <div>House Rules: no smoking...</div>
      <div>Bank account number</div>
    </div>
  );
}
