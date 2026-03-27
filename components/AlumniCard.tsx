type Alumni = {
	name: string;
  image?: string;
	roleAtCavas: string;
	duration: string;
	currentRole: string;
	company: string;
	description: string;
  linkedin?: string;
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
        <p className="text-sm text-gray-500">
          {alumni.roleAtCavas}
        </p>
      </div>
    </div>

    <p className="mt-1 text-sm text-gray-500">{alumni.duration}</p>

    {/* Divider */}
    <div className="my-4 h-px bg-gray-200" />

    {/* Current role */}
    <p className="text-sm text-gray-700">
      <span className="font-medium">Now:</span> {alumni.currentRole}
    </p>

    <p className="text-sm text-gray-700">
      <span className="font-medium">Company:</span> {alumni.company}
    </p>

    {/* Description */}
    <p className="mt-5 text-sm leading-relaxed text-gray-600">
      {alumni.description}
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
