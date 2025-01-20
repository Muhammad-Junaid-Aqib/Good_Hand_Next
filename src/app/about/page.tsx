export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Hello! Im a passionate software developer with expertise in modern web technologies.
            I love building beautiful and functional applications that solve real-world problems.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Senior Developer</h3>
              <p className="text-gray-600">Company Name • 2020 - Present</p>
              <p className="mt-2">
                Leading development of modern web applications using React and Next.js.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <p className="text-gray-600">Previous Company • 2018 - 2020</p>
              <p className="mt-2">
                Developed and maintained multiple web applications using various technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}