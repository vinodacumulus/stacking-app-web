import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      // Simulate save delay
      await new Promise((res) => setTimeout(res, 600));
      // In a real app, send to API here
      // show success state (kept simple)
      alert("Settings saved");
    } catch (err) {
      console.error(err);
      alert("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-white">
      <Sidebar />
      <main className="flex flex-col flex-1 p-6 pt-[60px] gap-6">
        <header className="flex items-center justify-between w-full">
          <h1 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
            Settings
          </h1>
        </header>

        <section className="w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">
                    Receive newsletter
                  </span>
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  Get product updates and tips by email.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save settings"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setNewsletter(true);
                }}
                className="inline-flex items-center rounded-md border border-gray-200 px-4 py-2 text-sm"
              >
                Reset
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
