type Alumni = {
  name: string;
  affiliation: string;
  role: string;
  duration: string;
  work: string;
  current: string;
  impact: string;
  linkedin: string;
  image?: string;
};

type AlumniCardProps = {
	alumni: Alumni;
};

export default function AlumniCard({ alumni }: AlumniCardProps) {
	return (
    <article className="w-full h-full flex flex-col bg-white rounded-xl border border-gray-200 p-5 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
      {/* Top */}
      <div className="flex items-center gap-3">
        <img
          src={alumni.image || "/images/default.png"}
          alt={alumni.name}
          className="w-14 h-14 rounded-full object-cover border"
        />

        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            {alumni.name}
          </h3>
          <p className="text-sm text-gray-600">{alumni.affiliation}</p>
          <p className="text-sm text-gray-500">
            {alumni.role} ({alumni.duration})
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Content */}
      <div className="mt-4 space-y-4 text-sm">
        <div>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
            At CAVAS
          </p>
          <p className="text-gray-800 leading-relaxed">{alumni.work}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
            Now
          </p>
          <p className="text-gray-800 leading-relaxed">{alumni.current}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
            Impact
          </p>
          <p className="text-gray-700 italic leading-relaxed">{alumni.impact}</p>
        </div>
      </div>

      {/* Link */}
      <div className="mt-auto pt-3">
        <a
          href={alumni.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          View LinkedIn →
        </a>
      </div>
    </article>
  );
}
