'use client'
import { useState } from "react";

export default function TeachPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    alert(
      `Skill submitted (mock):\nTitle: ${title}\nDescription: ${desc}\nDuration: ${duration}\nPrice: ${price} credits\nCategory: ${category}`
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-teal-600">Teach a Skill</h1>
      <p className="text-gray-600 mb-6">
        Share your knowledge by listing a new skill session.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-sm max-w-xl">
        <div>
          <label className="block text-sm font-medium">Skill Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border p-2 rounded-md mt-1"
            placeholder="e.g., Learn Photoshop Basics"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Short Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            className="w-full border p-2 rounded-md mt-1"
            rows={3}
            placeholder="What will the learner achieve?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Duration (mins)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="w-full border p-2 rounded-md mt-1"
            placeholder="45"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Price (credits)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border p-2 rounded-md mt-1"
            placeholder="10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full border p-2 rounded-md mt-1"
            placeholder="Music, Programming, Art..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 mt-4"
        >
          Submit Skill
        </button>
      </form>
    </main>
  );
}
