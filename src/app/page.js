export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-3 sm:px-6 flex justify-center text-gray-800">
      <main className="w-full max-w-[850px] bg-white shadow-md rounded-none sm:rounded-sm p-6 sm:p-12 md:p-16">

        {/* Header */}
        <header className="flex items-center gap-3.5 mb-10 sm:mb-12">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-5 h-5 bg-[#F59E0B] inline-block" />
            <span className="w-5 h-5 bg-[#EA580C] inline-block" />
            <span className="w-5 h-5 bg-[#0284C7] inline-block" />
          </div>
          <h1 className="text-xl sm:text-2xl font-normal text-gray-700 tracking-tight">
            Curriculum Vitae
          </h1>
        </header>

        {/* Personal Information */}
        <section className="mb-10 sm:mb-12" aria-labelledby="personal-info-heading">
          <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 mb-6">
            <div className="hidden sm:block" />
            <h2 id="personal-info-heading" className="text-lg sm:text-xl font-semibold text-gray-700">
              Personal Information
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-2.5 text-sm sm:text-base">
            {/* First Name / Surname */}
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                FIRST NAME / SURNAME
              </span>
              <span className="text-2xl sm:text-3xl font-light text-gray-800">
                Keisha
              </span>
            </div>

            {/* Tel */}
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                TEL
              </span>
              <span className="text-gray-700">
                +6590082114
              </span>
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                ADDRESS
              </span>
              <span className="text-gray-700">
                1A Lorong How Sun #11-05, Bartley Residences
              </span>
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                EMAIL
              </span>
              <span className="text-gray-700">
                wendy.slash@gmail.com
              </span>
            </div>

            {/* Sub-group spacing */}
            <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-2.5">
              {/* Nationality */}
              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  NATIONALITY
                </span>
                <span className="text-gray-700">
                  Indonesian / Singapore PR
                </span>
              </div>

              {/* Date of Birth */}
              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  DATE OF BIRTH
                </span>
                <span className="text-gray-700">
                  11.11.2012
                </span>
              </div>

              {/* Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  GENDER
                </span>
                <span className="text-gray-700">
                  Female
                </span>
              </div>
            </div>

            {/* Desired Position */}
            <div className="pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                DESIRED POSITION
              </span>
              <span className="text-xl sm:text-2xl font-normal text-gray-800">
                Senior Software Developer
              </span>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-10 sm:mb-12" aria-labelledby="work-experience-heading">
          <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 mb-6">
            <div className="hidden sm:block" />
            <h2 id="work-experience-heading" className="text-lg sm:text-xl font-semibold text-gray-700">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-9 text-sm sm:text-base">
            {/* Experience 1 */}
            <div className="space-y-2 sm:space-y-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  DATES
                </span>
                <span className="text-gray-800">
                  July 2012 - August 2015
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  POSITION
                </span>
                <span className="text-gray-800 font-medium">
                  Software Engineer
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  RESPONSIBILITIES
                </span>
                <span className="text-gray-700 leading-relaxed">
                  Responsible for leading the team to enhance online payment system for Latin America and Asia Pasific market.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  EMPLOYER / ADDRESS
                </span>
                <span className="text-gray-700">
                  PayPal, Inc.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  TYPE OF BUSINESS
                </span>
                <span className="text-gray-700">
                  Online Payment Gateway
                </span>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="space-y-2 sm:space-y-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  DATES
                </span>
                <span className="text-gray-800">
                  September 2015 - August 2018
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  POSITION
                </span>
                <span className="text-gray-800 font-medium">
                  Social Worker
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  RESPONSIBILITIES
                </span>
                <span className="text-gray-700 leading-relaxed">
                  Responsible for leading the team of volunteers in Kuala Lumpur in recruitments, organising events, planning activities, facilitating trainings, and fundraisings.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  EMPLOYER / ADDRESS
                </span>
                <span className="text-gray-700">
                  Guang Ji
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  TYPE OF BUSINESS
                </span>
                <span className="text-gray-700">
                  Social Services
                </span>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="space-y-2 sm:space-y-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  DATES
                </span>
                <span className="text-gray-800">
                  September 2018 - December 2018
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  POSITION
                </span>
                <span className="text-gray-800 font-medium">
                  Tech Developer & Infrastructure Engineer
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  RESPONSIBILITIES
                </span>
                <span className="text-gray-700 leading-relaxed">
                  Responsible for product development, marketing, and maintaining company infrastructure and different company products.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  EMPLOYER / ADDRESS
                </span>
                <span className="text-gray-700">
                  Appcepted Pte Ltd
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  TYPE OF BUSINESS
                </span>
                <span className="text-gray-700">
                  Software Technology
                </span>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="space-y-2 sm:space-y-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  DATES
                </span>
                <span className="text-gray-800">
                  January 2019 - December 2020
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  POSITION
                </span>
                <span className="text-gray-800 font-medium">
                  Technology Director
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  RESPONSIBILITIES
                </span>
                <div className="text-gray-700 leading-relaxed space-y-1">
                  <div>Upgrading travel websites and landing pages</div>
                  <div>Building and maintaining online booking platform</div>
                  <div>Developing ERP system for travel and tour arrangement</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  EMPLOYER / ADDRESS
                </span>
                <span className="text-gray-700">
                  Amazing Borneo Travel & Events Pte Ltd
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  TYPE OF BUSINESS
                </span>
                <span className="text-gray-700">
                  Travel & Events Provider
                </span>
              </div>
            </div>

            {/* Experience 5 */}
            <div className="space-y-2 sm:space-y-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  DATES
                </span>
                <span className="text-gray-800">
                  January 2021 - Current
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  POSITION
                </span>
                <span className="text-gray-800 font-medium">
                  Platform Engineer
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  RESPONSIBILITIES
                </span>
                <div className="text-gray-700 leading-relaxed space-y-1">
                  <div>Developing ERP system for logistics & supply chain</div>
                  <div>Building e-commerce pages</div>
                  <div>Upgrading POS systems</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  EMPLOYER / ADDRESS
                </span>
                <span className="text-gray-700">
                  Glife Technologies Pte Ltd
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
                <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                  TYPE OF BUSINESS
                </span>
                <span className="text-gray-700">
                  Fresh Produce Suppliers and Distributors
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Education and Training */}
        <section className="mb-10 sm:mb-12" aria-labelledby="education-heading">
          <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 mb-6">
            <div className="hidden sm:block" />
            <h2 id="education-heading" className="text-lg sm:text-xl font-semibold text-gray-700">
              Education and Training
            </h2>
          </div>

          <div className="space-y-2 sm:space-y-1.5 text-sm sm:text-base">
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                DATES
              </span>
              <span className="text-gray-800">
                August 2007 - July 2011
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                QUALIFICATION AWARDED
              </span>
              <span className="text-gray-800 font-medium">
                Bachelor of Engineering
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                PRINCIPAL STUDIES
              </span>
              <span className="text-gray-700">
                Computer Engineering
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                INSTITUTION
              </span>
              <div className="text-gray-700">
                <div>Nanyang Technological University</div>
                <div>Singapore</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills and Competences */}
        <section className="mb-10 sm:mb-12" aria-labelledby="skills-heading">
          <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 mb-6">
            <div className="hidden sm:block" />
            <h2 id="skills-heading" className="text-lg sm:text-xl font-semibold text-gray-700">
              Skills and Competences
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-3.5 text-sm sm:text-base">
            {/* Language Spoken */}
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                LANGUAGE SPOKEN
              </span>
              <span className="text-gray-700">
                English, Chinese, Bahasa Indonesia
              </span>
            </div>

            {/* Social Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                SOCIAL SKILLS
              </span>
              <span className="text-gray-700">
                Public Speaking, Effective Communication
              </span>
            </div>

            {/* Organisational Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                ORGANISATIONAL SKILLS
              </span>
              <div className="text-gray-700 space-y-1">
                <div>Project Management</div>
                <div>Product Quality Management</div>
                <div>Event Management</div>
                <div>System Architect</div>
                <div>Platform Designer</div>
              </div>
            </div>

            {/* Computer Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] sm:gap-x-8 items-baseline">
              <span className="text-xs font-bold text-gray-500 uppercase sm:text-right">
                COMPUTER SKILLS
              </span>
              <div className="text-gray-700 space-y-1">
                <div>OS: Windows, Mac OS X, Linux</div>
                <div>Programming: Java, C++, Ruby</div>
                <div>Database: MySQL, MongoDB</div>
                <div>Media: Adobe Photoshop, Movie Editor</div>
                <div>Frontend: React, HTML, CSS, Javascript, Ruby on Rails</div>
                <div>Document: MS Word, MS Excel, MS Access</div>
                <div>Presentation: PowerPoint, Keynote</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 sm:mt-20 pt-6 text-center border-t border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-normal">
            Curriculum Vitae of Wendy
          </p>
        </footer>

      </main>
    </div>
  );
}
