import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto p-4">
        <section className="mb-8">
          <div>
            <Image src="/logo.svg" alt="Silverpine Logo" width={300} height={300} priority />
          </div>
          <p className="text-gray-700">
            Cozy family-owned apartment on Kopaonik mountain &mdash; perfect for your ski or summer getaway.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Photo Gallery</h2>
          <p>...</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
          <p>...</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Location</h2>
          <p>
            The apartment is located in Vikend Naselje, at an elevation of 1,335 meters, just behind{" "}
            <a href="https://srebrnaplanina.com/" target="_blank">
              Hotel Srebrna Planina
            </a>
            . It is 3.8 km from the nearest ski slope (Sunčana Dolina) and 6.4 km from Kopaonik Center (Konaci). Several
            markets, restaurants, and SPA centers are all within walking distance.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d181.55044147118656!2d20.761365744027565!3d43.27641766961051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1756321070294!5m2!1sen!2srs"
            width="800"
            height="200"
            // style="border:0;"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Directions</h2>
          <p>
            You can reach Kopaonik by three main roads: from Brzeće, Jošanička Banja, or Raška. If you're coming from
            Belgrade, the easiest way is via the Miloš Veliki highway, following the roads to Kraljevo and then Raška.
            As you drive up the mountain, you'll soon arrive at Vikend Naselje. On your left, you'll see Hotel Srebrna
            Planina—turn left toward it and follow the road behind the hotel. Our apartment is in the fifth building on
            the right, entrance 6 (Gvozdac), second floor, apartment 6.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Parking Information</h2>
          <p>One free parking spot is available for guests.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Check-in & Check-out</h2>
          <p>
            Check-in starts at 2:00 PM, and check-out is by 10:00 AM. Early check-in and late check-out may be available
            upon request.
          </p>
          <p>
            The apartment key can be picked up at the <strong>Hotel Srebrna Planina</strong> reception.
          </p>
          <p>Upon departure you must return key to the reception.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Heating and Hot Water Instructions</h2>
          <p>When you enter the apartment during winter, please make sure the heating is switched on.</p>

          <h3 className="text-xl font-semibold mb-2">Using the Thermostat</h3>
          <ol>
            <li>The display shows the current room temperature.</li>
            <li>Press the ▲ (up) or ▼ (down) buttons on the right side to adjust.</li>
            <li>The display will briefly show the set temperature, then return to the current temperature.</li>
          </ol>

          <h3 className="text-xl font-semibold mb-2">Kitchen Heating Unit</h3>
          <p>
            To turn on the heating unit in the kitchen, make sure to press the switch button located above the cooktop
            down.
          </p>

          <h3 className="text-xl font-semibold mb-2">Bathroom Boiler</h3>
          <p>
            To activate the boiler in the bathroom, make sure it is plugged into a wall socket and turn the dial to the{" "}
            <strong>ECO</strong> position.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Ski Pass Information</h2>
          <p>
            You can purchase a ski pass through the Ski Resorts of Serbia online shop. The nearest vending machine for
            printing and collecting your pass is at Kraljevi Čardaci, in the hall where the Maxi market is located (see
            map).
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195.030708814928!2d20.76711908241845!3d43.27460154262978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47563db21ba92e97%3A0x6041fa602fb85c8b!2sMaxi!5e1!3m2!1sen!2srs!4v1756476023112!5m2!1sen!2srs"
              width="800"
              height="200"
              // style="border:0;"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
          <p>Alternatively, ski passes are available at the box offices in Kopaonik Center.</p>
          <p>
            To make your stay more convenient, you can use lockers at the ski center or at ski rental and maintenance
            shops, so you don't have to carry your equipment back and forth from the apartment.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Motor Vehicles Fee</h2>
          <p>...</p>
          <a href="https://npkopaonik.rs/en/fee-for-the-use-of-motor-vehicles/">Learn more about the fee</a>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Availability</h2>
          <p>Calendar from Booking.com</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Payment Info</h2>
          <p>...</p>
          <p>Currently we accept payments via bank transfer only.</p>
          <p>For serbian residents the bank account number is: 160-5700100151073-10</p>
          <p>For international payments the bank account number is: RS35 1600 0000</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>...</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Transportation</h2>
          <p>...</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">House Rules</h2>
          <p>...</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Useful Phone Numbers</h2>
          <ul>
            <li>Reception (Srebrna Planina Hotel): +381 XX XXX XXXX</li>
            <li>Emergency (Police/Fire/Ambulance): 112</li>
            <li>Local Taxi: +381 XX XXX XXXX</li>
            <li>Local Pharmacy: +381 XX XXX XXXX</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">&copy; 2025 SILVERPINE. All rights reserved.</div>
      </footer>
    </div>
  );
}
