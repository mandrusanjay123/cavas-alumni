type Alumni = {
	name: string;
  affiliation: string;
  cavasWork: string;
  currentWork: string;
  impact: string;
  linkedin: string;
  image?: string;
};

type AlumniCardProps = {
	alumni: Alumni;
};

export default function AlumniCard({ alumni }: AlumniCardProps) {
	return (
 <article className="w-full max-w-sm group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-center gap-4">
      <img
        src={alumni.image || "/globe.svg"}
        alt={alumni.name}
        className="w-14 h-14 rounded-full object-cover border"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          {alumni.name}
        </h2>
      </div>
    </div>

    {/* Affiliation */}
    <p className="text-sm text-gray-500">{alumni.affiliation}</p>

    {/* Work at CAVAS */}
    <p className="mt-2 text-sm text-gray-600">{alumni.cavasWork}</p>

    {/* Current Work */}
    <p className="mt-2 text-sm text-gray-700">
      <span className="font-medium">Currently:</span> {alumni.currentWork}
    </p>

    {/* Impact */}
    <p className="mt-3 text-sm text-gray-600 italic">
      "{alumni.impact}"
    </p>

    <a
      href={alumni.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
    >
      View LinkedIn →
    </a>
  </article>
);
}
