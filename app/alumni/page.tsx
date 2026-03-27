// app/alumni/page.tsx

import AlumniCard from "../../components/AlumniCard";
import alumniData from "../../data/alumni.json";

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 flex flex-col items-center justify-start">
      
      {/* Header Section */}
    <div className="max-w-4xl text-center mb-16">
      <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
        CAVAS Labs Alumni
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Built and maintained by CAVAS Labs alumni community
      </p>
      <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
        Discover where our alumni are today - across industry, research and academia.
      </p>
    </div>

    <div className="flex justify-center mb-12">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeqpWM3NlOJtaHIlLpJ0U34o-wIQK0kVtHiKI1Uh64uL7YyWw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition shadow-sm"
      >
        Submit Your Profile
      </a>
    </div>

    <p className="text-xs text-gray-500 mt-2 text-center">
      Submissions are reviewed before being published.
    </p>

      {alumniData.length === 0 && (
        <p className="text-center text-gray-500 mb-6">
          Alumni data will appear here soon.
        </p>
      )}

      {/* Grid Section */}
      <div className="max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {alumniData.map((alumni, index) => (
          <AlumniCard key={index} alumni={alumni} />
        ))}
      </div>

      {/* Where Alumni Work Section */}
     <div className="mt-20 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Our alumni are contributing to
        </h2>

        <div className="flex justify-center gap-8 flex-wrap text-gray-600 text-sm">
          <span>ADAS & Autonomous Driving</span>
          <span>Robotics & Perception Systems</span>
          <span>Connected Vehicle Platforms</span>
          <span>Distributed Systems & Infrastructure</span>
          <span>AI/ML & Sensor Fusion</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} CAVAS Labs Alumni
      </div>
    </div>
  );
}