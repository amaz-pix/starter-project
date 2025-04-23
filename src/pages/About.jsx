function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-100 via-white to-white">
        {/* Background pattern */}
        <div className="absolute inset-x-0 top-0 -z-10 opacity-50 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Our Project
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn more about our approach to creating modern, scalable, and maintainable React applications.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Our philosophy</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for developers, by developers
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We've combined the best tools and practices from our experience to create a starter kit that helps teams build better applications faster.
            </p>
          </div>

          {/* Values/Mission Section */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-12">
            <div className="lg:col-span-5 lg:col-start-1">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our mission</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                We believe that modern web development shouldn't be complicated. Our mission is to provide a solid foundation that enables developers to focus on building great features instead of configuring tools.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our approach</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                We've carefully selected technologies that work well together and provide a seamless development experience. From state management to styling, each piece of our stack is chosen to maximize developer productivity.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mx-auto mt-32 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center mb-16">
              We're a group of passionate developers dedicated to improving the React ecosystem.
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Lead Developer',
                  imageColor: 'bg-purple-200',
                  initial: 'S',
                },
                {
                  name: 'Michael Chen',
                  role: 'UX Designer',
                  imageColor: 'bg-indigo-200',
                  initial: 'M',
                },
                {
                  name: 'David Rodriguez',
                  role: 'Backend Engineer',
                  imageColor: 'bg-blue-200',
                  initial: 'D',
                },
                {
                  name: 'Emily Taylor',
                  role: 'Project Manager',
                  imageColor: 'bg-violet-200',
                  initial: 'E',
                },
              ].map((person) => (
                <div key={person.name} className="flex flex-col items-center">
                  <div className={`h-24 w-24 rounded-full ${person.imageColor} flex items-center justify-center text-2xl font-bold text-gray-800`}>
                    {person.initial}
                  </div>
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:divide-y-0">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Have questions about our starter kit? We'd love to hear from you and help you get started.
              </p>
              <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-6 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </dt>
                  <dd><a href="mailto:hello@example.com" className="hover:text-gray-900">hello@example.com</a></dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-6 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </dt>
                  <dd><a href="https://github.com/your-org/your-repo" className="hover:text-gray-900">github.com/your-org/your-repo</a></dd>
                </div>
              </dl>
            </div>
            <div className="pt-16 lg:pt-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join our community</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Connect with other developers using our starter kit. Share tips, get help, and contribute to making the project even better.
              </p>
              <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <a href="#" className="rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
                  Join Discord
                </a>
                <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Star on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;