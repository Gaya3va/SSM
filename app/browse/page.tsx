import { skills } from "@/data/skills";
import Link from "next/link";

export default function BrowsePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-teal-600">Browse Skills</h1>
      <p className="text-gray-600 mt-1">Choose a skill and book a micro-session.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="border p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{skill.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{skill.short}</p>

            <p className="text-sm text-gray-500 mt-3">
              Teacher: <span className="font-medium">{skill.teacher}</span>
            </p>
            <p className="text-sm text-gray-500">Duration: {skill.duration}</p>
            <p className="text-sm text-gray-800 font-semibold mt-2">
              {skill.priceCredits} credits
            </p>

            <Link
              href={`/profile/${skill.teacherId}`}
              className="block text-center mt-4 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
