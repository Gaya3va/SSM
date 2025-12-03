
import { skills } from "@/data/skills";

export default async function ProfilePage({ params }: any) {
  const resolved = await params;
  const teacherId = resolved.id;

  const teacherSkills = skills.filter((s) => s.teacherId === teacherId);

  if (!teacherSkills.length) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold text-red-600">Teacher Not Found</h1>
      </main>
    );
  }

  const teacherName = teacherSkills[0].teacher;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-teal-600">{teacherName}</h1>

      <p className="text-gray-600 mb-6">Certified Skill Mentor</p>

      <h2 className="text-xl font-semibold mb-3">Skills Offered</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {teacherSkills.map((skill) => (
          <div
            key={skill.id}
            className="border p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold">{skill.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{skill.short}</p>

            <p className="text-sm font-medium mt-3">
              Duration: {skill.duration}
            </p>
            <p className="text-sm font-medium">
              Price: {skill.priceCredits} credits
            </p>

            <a
              href={`/booking/${skill.id}`}
              className="block text-center mt-4 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
            >
              Book Session
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
