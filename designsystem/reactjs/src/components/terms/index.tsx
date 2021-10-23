/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import ScrollBTN from '../scrollBTN';

class Terms extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const terms: string = 'terms';
    localStorage.setItem('terms', terms);

    const getLinks = document.querySelector('.parentLinks') as HTMLElement;
    const homeLink = getLinks.querySelector('li:nth-child(1)') as HTMLElement;

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <main className="termMain">
          <section>
            <article className="large-12 bckWrap">
              <h1 className="large-12 medium-12 small-12">
                Terms
                <figure className="graphic" title="Small red, rectangle graphic." />
              </h1>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <h2>
              SCS Terms
              <figure className="graphic" title="Small red, rectangle graphic." />
            </h2>

            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <h3>80/90/100%</h3>
                <p>
                  When referring to the District’s Destination 2025 goals,
                  {' '}
                  always include all three numbers, without spaces and separated
                  {' '}
                  with a backslash (/) and percent sign only after “100.”
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>#GreaterSCS</h3>
                <p>
                  This is the social reference for the District’s school
                  {' '}
                  improvement/community engagement initiative, “Greater Schools.
                  {' '}
                  Greater Communities.” Always capitalize Greater and all
                  {' '}
                  three letters in SCS.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Board Meetings</h3>
                <p>
                  Always capitalize formal meetings of the Board of Education,
                  {' '}
                  including Business Meeting, Work Session, Special Called
                  {' '}
                  Business Meeting and all committee meetings.
                </p>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <h3>Board Members</h3>
                <p>
                  Each elected member of the SCBE is referred to as a Board
                  {' '}
                  member. Board is always capitalized, and Member should only
                  {' '}
                  be capitalized when it is used as a formal title.
                </p>

                <p className="italics">
                  Ex. John Smith was elected to the Shelby County Board of
                  {' '}
                  Education.
                  <br />
                  Board Member Smith introduced the resolution.
                  <br />
                  Smith is one of seven new Board members this year.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Cabinet</h3>
                <p>
                  Always capitalize Cabinet when referencing the
                  {' '}
                  Superintendent’s executive leadership team. Cabinet-level
                  {' '}
                  positions should also be capitalized when referring to a
                  {' '}
                  specific person, but not position titles alone.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3><a href="https://www.voiceofscs.com/listen-to-88-5fm/" target="_blank" className="slideUnderBodyLink">C19TV & 88.5FM</a></h3>

                <p>
                  The District’s broadcast outlets, C19TV and 88.5FM, should
                  {' '}
                  always appear in all caps and without spaces.
                </p>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <h3>Central Office</h3>
                <p>
                  The Board of Education building, located at 160 S. Hollywood
                  {' '}
                  St., is often referred to as central office. Central office
                  {' '}
                  is also often used to describe all non-school-based
                  {' '}
                  employees. Central office should never be capitalized unless
                  {' '}
                  it begins a sentence.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>District</h3>
                <p>
                  Always capitalize District when it is used as a formal
                  {' '}
                  replacement for Shelby County Schools.
                </p>

                <p className="italics">
                  Ex. The District is committed to teacher and leader effectiveness.
                  <br />
                  Shelby County Schools is one of 200 districts in Tennessee.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Elementary School, Middle School, High School</h3>

                <p>
                  These should only be capitalized when used with the full name
                  {' '}
                  of a school and abbreviated as ES, MS, and HS.
                </p>

                <p className="italics">
                  Ex. Ridgeway Elementary School, Ridgeway ES
                  <br />
                  Ridgeway Middle School, Ridgeway MS
                  <br />
                  Ridgeway High School, Ridgeway HS
                </p>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <h3>Empowerment Zone</h3>
                <p>
                  Empowerment Zone is always capitalized, and the abbreviated
                  {' '}
                  form, “E-Zone,” is hyphenated with a capital E and Z.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Grades</h3>
                <p>
                  Spell out first through ninth grades, and use numbers for 10th
                  {' '}
                  through 12th. Numbers and hyphens may be used to show grade ranges.
                </p>

                <p className="italics">
                  Ex. He is in first grade.
                  <br />
                  She is a 10th grade student.
                  <br />
                  The tests are administered for grades K-3, 4-8 and 9-12.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3><a href="http://www.scsk12.org/greaterscs/" target="_blank" className="slideUnderBodyLink">Greater Schools, Greater Community</a></h3>

                <p>
                  When referring to the District’s school improvement/community
                  {' '}
                  engagement initiative, “Greater Schools. Greater Community.,”
                  {' '}
                  should always appear capitalized, all together and with periods
                  {' '}
                  after Schools and Community.
                </p>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <h3><a href="https://izonememphis.org/" target="_blank" className="slideUnderBodyLink">Innovation Zone</a></h3>
                <p>
                  The District’s school turnaround model is known as the
                  {' '}
                  Innovation Zone. The abbreviated form, “iZone,” is spelled as
                  {' '}
                  one word with a lowercase i and capital Z.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Kindergarten</h3>
                <p>
                  Kindergarten is always capitalized and abbreviated as K.
                </p>

                <p className="italics">
                  Ex. He is in first grade.
                  <br />
                  She is a 10th grade student.
                  <br />
                  The tests are administered for grades K-3, 4-8 and 9-12.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Office, Department, Division</h3>

                <p>
                  Always capitalize when used as a full central office location
                  {' '}
                  title. Do not capitalize in general references.
                </p>

                <p className="italics">
                  Ex. Send requests to the Communications Department.
                  <br />
                  All departments should submit their information by Friday.
                </p>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <h3><a href="http://www.scsk12.org/optional/" target="_blank" className="slideUnderBodyLink">Optional Schools</a></h3>
                <p>
                  Always capitalize when used to reference to the entire program.
                  {' '}
                  When referring to a single school, only the O should be capitalized.
                </p>

                <p className="italics">
                  Ex. Optional Schools applications are being accepted through
                  {' '}
                  August. Grahamwood Elementary is an Optional school.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Pre-K</h3>
                <p>
                  Pre-K is always capitalized and should include a hyphen.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Principal</h3>

                <p>
                  Do not capitalize in general references. Only capitalize when
                  {' '}
                  used as a formal title for a specific individual.
                </p>

                <p className="italics">
                  Ex. Principal Jones
                  <br />
                  The principal of Ridgeway Middle is retiring.
                  <br />
                  Mr. Jones is the principal of Ridgeway Middle.
                </p>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <h3>School Administrators</h3>
                <p>
                  When referring to a school’s non-teaching staff as a group,
                  {' '}
                  refer to them as “administrative staff.” Avoid abbreviating
                  {' '}
                  them as “admins.”
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>School Leaders</h3>
                <p>
                  School leadership includes principals, assistant and vice
                  {' '}
                  principals, coaches, ILT members and other supervisory roles.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>School Years</h3>

                <p>
                  School years should appear as follows: 2020-21; Not 2020-2021
                  {' '}
                  or 20-21
                </p>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <h3>Shelby County Board of Education</h3>
                <p>
                  Always capitalize Shelby County Board of Education when written
                  {' '}
                  out, and abbreviate as SCBE.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Shelby County Schools</h3>
                <p>
                  Always capitalize Shelby County Schools when written out, and
                  {' '}
                  abbreviate as SCS. SCS may also be referred to as the District
                  {' '}
                  with a capital D.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Subjects</h3>

                <p>School subjects should be capitalized.</p>

                <p>
                  Ex. High school students must take English, Math and World
                  {' '}
                  History.; She teaches U.S. Government.
                </p>
              </section>
            </article>
          </section>

          <section className="listContainer secWrap designsystemContainer">
            <article className="large-12 medium-12 small-12 listWrap">
              <section className="large-4 medium-12 small-12 columns">
                <h3>Superintendent</h3>
                <p>
                  Always capitalize when making a direct reference to the
                  {' '}
                  Superintendent or using it in place of the name. It should not
                  {' '}
                  be capitalized in general references.
                </p>

                <p>
                  Ex. Superintendent John Smith
                  <br />
                  John Smith was the 13th superintendent of the school district.
                  <br />
                  The Superintendent will issue a statement on the new policy.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>Teacher</h3>
                <p>
                  Never capitalize teacher unless it is part of a formal title.
                </p>

                <p>
                  Ex. The new policy affects all teachers.
                  <br />
                  Attendance is required at New Teacher Orientation in July.
                </p>
              </section>

              <section className="large-4 medium-12 small-12 columns">
                <h3>TNReady</h3>

                <p>This is always written as one word, with a capital T, N and R.</p>
              </section>
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default Terms;
