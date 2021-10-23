/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import ScrollBTN from '../scrollBTN';

class Leadership extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });

    localStorage.clear();

    const leadership: string = 'leadership';
    localStorage.setItem('leadership', leadership);

    const getLinks = document.querySelector('.parentLinks');
    const homeLink = getLinks.querySelector('li:nth-child(1)');

    homeLink.classList.remove('currentLink');
  }

  render() {
    return (
      <>
        <ScrollBTN />

        <article id="leadershipWrap" className="studentAffairsImg large-12">
          <h1 className="larg-12 medium-12 small-12">
            Leadership
            <figure className="graphic" alt="Small red, rectangle graphic." />
          </h1>

          <figure className="overlayHeaderBCK" alt="Students sitting at table smiling at camera" />
        </article>

        <article id="studentAffairsContainer" className="leadership">
          {
            // start middle row
          }
          <section id="resizer" className="row">
            <article className="studentAffairsWrapper large-12 medium-12 small-12">
              <section className="large-12 studentAffairsIntro">
                <h2 className="studentAffairsH2">
                  Student Leadership
                  <figure className="graphic" alt="Small red, rectangle graphic." />
                </h2>

                <p>
                  DOSA Student Leadership provides a forum where students have
                  &nbsp;a voice in changing culture and climate within the district.
                  &nbsp;Students are afforded a wealth of opportunities to practice
                  &nbsp;leadership and engage social action skills that serve as a
                  &nbsp;catalyst for change. Students also develop an emerging awareness
                  &nbsp;and understanding of community issues, problems, and resources.
                </p>
              </section>
            </article>
          </section>

          <section>
            <article id="leadershipSpaceLimit" className="spacelimit large-12 medium-12 small-12">
              <h2 className="studentAffairsH2">
                Student Council
                <figure className="graphic" alt="Small red, rectangle graphic." />
              </h2>

              <p className="large-6 medium-12 small-12 columns">
                <span>
                  SCS School Board Policy #6065
                </span>
                <br />
                III. Policy Statement:
                <br />

                Each school shall establish an elected student council. The council
                &nbsp;shall be governed by its own constitution which shall be approved
                &nbsp;by the school principal. Defining the council’s jurisdiction shall
                &nbsp;be a joint and cooperative effort of the council, students, and
                &nbsp;the student government constitution.
              </p>

              <section className="large-6 medium-12 small-12 columns">
                <p>
                  <span>
                    General purposes of the council shall be:
                  </span>
                </p>

                <ol>
                  <li>To promote better relationships between teachers and students</li>
                  <li>To provide a communication channel for student opinion</li>
                  <li>To promote organizational services for students and faculty</li>
                  <li>To encourage positive attitudes, leadership, and citizenship</li>
                  <li>To contribute to the total educational growth of students</li>
                  <li>To train students in the method of problem-solving and decision-making</li>
                </ol>
              </section>
            </article>
          </section>

          <section>
            <article className="grants studentAffairsIntro">
              <p>
                <span>
                  SCS School Board Policy #6061
                </span>
              </p>

              <p>
                III. Policy Statement:
                <br />

                The SCS School Board believes that meaningful two-way communication
                &nbsp;with students is important to meet the academic and behavioral
                &nbsp;needs of the student population. Direct student participation
                &nbsp;and engagement in the Board’s governance process provides students
                &nbsp;with valuable education and training involving civic responsibility.
                &nbsp;Further, it enhances students’ group dynamic, problem-solving,
                &nbsp;communication, and writing skills. Therefore, the Board is
                &nbsp;committed to considering students’ voices in its work and establishes
                &nbsp;the Student Congress as a mechanism to include students in its
                &nbsp;governance process.
              </p>
            </article>
          </section>

          <section className="studentAffairsCopyContainer large-12 medium-12 small-12">
            <h2 className="studentAffairsH2">
              Student Congress and&nbsp;DOSA&nbsp;Liasions
              <figure className="graphic" alt="Small red, rectangle graphic." />
            </h2>

            <section className="studentAffairsWrapStart large-12 medium-12 small-12">
              <article className="large-6 medium-12 small-12 columns">
                <figure className="headerImage1"><img src="http://www.scsk12.org/studentaffairsNew/img/2020/leadershippanelOne.jpg" alt="Students dressed up smiling at camera" /></figure>
                <h3 className="studentAffairsH3">
                  Student Congress
                </h3>

                <section>
                  <p>
                    The primary operation of the Student Congress is to participate
                    &nbsp;democratically and provide insight into the district’s
                    &nbsp;decision-making process as well as provide a platform for
                    &nbsp;students to positively and productively address their
                    &nbsp;educational concerns. The Student congress fulfills its
                    &nbsp;purpose by presenting the Board with proposals for district
                    &nbsp;innovations/improvements and suggested solutions to
                    &nbsp;district-wide problems as well as relaying Board
                    &nbsp;decisions and district information to students.
                  </p>
                </section>
              </article>

              <article className="large-6 medium-12 small-12 columns">
                <figure className="headerImage2"><img src="http://www.scsk12.org/studentaffairsNew/img/2020/leadershippanelTwo.jpg" alt="Students standing and sitting smiling at camera" /></figure>
                <h3 className="studentAffairsH3">
                  DOSA Liasions
                </h3>

                <section>
                  <p>
                    Under the direction of the Department of Student Affairs,
                    &nbsp;teachers or teacher types serve as a liaison between DOSA,
                    &nbsp;students, teachers, parents, and administrators regarding DOSA
                    &nbsp;initiatives and engagement opportunities. Liaisons are
                    &nbsp;recommended by administrators for exhibiting unique
                    &nbsp;characteristics such as; posseses a keen awareness of the
                    &nbsp;pulse of the school/student community, is organized,
                    &nbsp;displays excellent communication skills, has strong,
                    &nbsp;positive relationships with students, and is regarded as a
                    &nbsp;connector or go-to-staffer by students.
                  </p>
                </section>
              </article>
            </section>

            <figure className="studentAffairsWrapStartBck" />
            <figure className="studentAffairsWrapStartOverlay" />
          </section>

          <section className="studentAffairsContain large-12 medium-12 small-12">
            <h2 className="studentAffairsH2">
              DOSA Ambassadors
              <figure className="graphic" alt="Small red, rectangle graphic." />
            </h2>

            <article className="studentAffairsIntro large-12 medium-12 small-12">
              <section className="large-12 medium-12 small-12">
                <p>
                  Student Ambassadors are highly motivated to serve and
                  &nbsp;communicate pertinent information in relation to their
                  &nbsp;schools’ course offerings, extra-curricular activities, and
                  &nbsp;overall culture, climate, and school community environment.
                  &nbsp;DOSA Student Ambassadors get involved! Students opportunities
                  &nbsp;range from speaking at community events to assisting with
                  &nbsp;school tours and recruitment fairs.
                </p>
              </section>
            </article>

            <hr />

            <article className="studentAffairsIntro large-12 medium-12 small-12">
              <section className="large-6 medium-12 small-12 columns">
                <p>
                  <span>
                    The Student Ambassadors&apos; duties include:
                  </span>
                </p>

                <ul>
                  <li>
                    Assisting students to find classrooms, lockers,
                    &nbsp;and major areas of their school
                  </li>
                  <li>Teaching students how to navigate the student lunch period</li>
                  <li>
                    Answering questions about activities, classes, building
                    &nbsp;facilities, and school rules
                  </li>
                  <li>Positively representing the student body</li>
                  <li>
                    Act as an ambassador to prospective students and families
                    &nbsp;at school events
                  </li>
                </ul>
              </section>

              <section className="large-6 medium-12 small-12 columns">
                <p>
                  <span>
                    Rewards:
                  </span>
                </p>

                <ul>
                  <li>Sharpen communication and public speaking skills</li>
                  <li>Improve interpersonal and conversational skills</li>
                  <li>
                    Enhance confidence when speaking and interacting with
                    &nbsp;members of the school community
                  </li>
                  <li>Develop networking skills through participation at exciting events</li>
                </ul>
              </section>
            </article>

            <hr />

            <article className="studentAffairsIntro large-12 medium-12 small-12">
              <section className="large-12 medium-12 small-12">
                <p>
                  DOSA Student Ambassadors are invited to participate in the
                  &nbsp;Ambassador Program by administration because they have proven
                  &nbsp;to be positive, responsible, respectful students.
                </p>
              </section>
            </article>
          </section>

          <section className="studentAffairsFooterImg">
            <article className="large-12 medium-12 small-12">
              <h2 className="studentAffairsH2">
                “We hear students...We are here for students”
              </h2>
              <figure className="img901 large-5 medium-7 small-10"><img src="http://www.scsk12.org/studentaffairsNew/img/2020/WEare901.png" alt="Logo of WE are 901" /></figure>
            </article>
            <figure className="studentAffairsRequireBck" alt="Director of student affairs with students holding books" />
            <figure className="overlayHeaderBCK" />
          </section>
        </article>
      </>
    );
  }
}

export default Leadership;
