import { Link } from 'react-router-dom';
import siklistoImage from '../../assets/siklisto.png';

function Siklisto() {
  return (
    <div className="min-h-screen bg-rich-black text-off-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-teal hover:text-teal-dark transition-colors mb-4"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold text-teal mb-4">Siklisto</h1>
          <p className="text-xl text-gray-300">
            A Mobile Based Electric Bike Charging Station Locator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={siklistoImage}
              alt="Siklisto App"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-teal mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Siklisto is a mobile application designed to help electric bike users locate 
                nearby charging stations. The app provides real-time information about charging 
                station locations, availability, and charging rates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal text-rich-black px-3 py-1 rounded-full text-sm font-medium">
                  Flutter
                </span>
                <span className="bg-teal text-rich-black px-3 py-1 rounded-full text-sm font-medium">
                  Dart
                </span>
                <span className="bg-teal text-rich-black px-3 py-1 rounded-full text-sm font-medium">
                  Firebase
                </span>
                <span className="bg-teal text-rich-black px-3 py-1 rounded-full text-sm font-medium">
                  Google Maps API
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Real-time location tracking</li>
                <li>Interactive map with charging station markers</li>
                <li>Station availability status</li>
                <li>Charging rates and payment information</li>
                <li>User reviews and ratings</li>
                <li>Route planning to nearest stations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal mb-3">Development Process</h3>
              <p className="text-gray-300 leading-relaxed">
                This project was developed as part of a team effort, focusing on creating 
                a user-friendly interface for electric bike owners. The app integrates with 
                Google Maps API for location services and Firebase for backend functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Siklisto; 