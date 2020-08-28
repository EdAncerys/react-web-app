import React from 'react';
import colors from '../../config/colors';

export default function About({ props }) {
  return (
    <div style={styles.container}>
      <p>
        I am a Retail Manager turned Software Engineer. My new-found passion for
        programming has stemmed from a desire to turn ideas into reality and to
        contribute to building great products. Much of my work experience has
        involved working within a team- based culture and I thrive collaborating
        with others. Coding allows me to be constantly learning, creating, and
        problem-solving.
      </p>
      <p>
        I am a fast learner and extremely enthusiastic about technology and
        digital products. Enjoying challenges and don't shy away from
        time-consuming challenges that can deliver better results and continuous
        learning process it involves. Currently looking for opportunities to
        continue to learn, challenge myself, and work with great people.
      </p>
      <p>
        I am a strong believer in the use of agile methodologies that helps to
        drive and manage team projects. Enjoying challenges and don't shy away
        from time-consuming challenges that can deliver better results and
        continuous learning process it involves.
      </p>
      <p>
        <a target="blank" href="https://makers.tech/">
          Makers Academy
        </a>{' '}
        graduate where I have grown as a person and as a developer. Learned best
        practices and methodologies: TDD, Agile development, XP values, team
        projects, code reviews, pair programming.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 800,
    textAlign: 'justify',
    color: colors.medium,
  },
};
