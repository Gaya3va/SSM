import { skills } from "@/data/skills";
import BookingForm from "@/components/BookingForm";

export default async function BookingPage({ params }: any) {
  const resolved = await params;
  const skillId = resolved.id;
  const skill = skills.find((s) => s.id === skillId);

  if (!skill) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold text-red-600">Skill Not Found</h1>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-teal-600">{skill.title}</h1>
      <p className="text-gray-500 mt-2">{skill.short}</p>

      <div className="mt-6 bg-white border p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Book This Session</h2>
        {/* BookingForm is a CLIENT component (handles event) */}
        <BookingForm skill={skill} />
      </div>
    </main>
  );
}
