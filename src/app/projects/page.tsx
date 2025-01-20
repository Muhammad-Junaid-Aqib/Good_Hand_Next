import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | My Portfolio',
  description: 'Explore my latest projects and development work. View a collection of web applications built with modern technologies.',
}
export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((project) => (
          <div
            key={project}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project {project}
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of project {project} and its key features.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}