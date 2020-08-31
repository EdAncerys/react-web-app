import React, { useContext } from 'react';
import FeaturedElement from './FeaturedElement';
import ThereAndBackImg from '../../../images/map-min.png';
import TickTackToeImg from '../../../images/tick-tack-toe-min.png';
import Rock from '../../../images/RPS/rock-min.png';
import HangMan from '../../../images/hang-man-min.png';
import { AppContext } from '../../../App';

import colors from '../../../config/colors';
import RPS from '../../pages/RPS';

const hangManContent =
  'Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses.';

const rpsContent =
  "Rock paper scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are 'rock' (a closed fist), 'paper' (a flat hand), and 'scissors' (a fist with the index finger and middle finger extended, forming a V).";

const thereAndBackComntent =
  "Variety - is a spice of life! ThereAndBack is a Web App that lets users browse the best round routes possible. If its two legs or four weals - we got you covered! For running, cycling, walking...well, what a heck, even driving if that's a preference! You can pick a route of your preference. And if you don't like it the first time - just hit randomize to generate a different one.";

const tickTackToeContent =
  'Tic-tac-toe with a twist! This game commonly is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.';

export default function FeatureBanner({ props }) {
  const { goToHangManPage, goToTickTackToePage, goToRPSPage } = useContext(
    AppContext
  );

  return (
    <div style={styles.container}>
      <FeaturedElement
        src={ThereAndBackImg}
        text={thereAndBackComntent}
        reverse={true}
        onClick={() => window.open('https://thereandback.surge.sh/', '_blank')}
      />
      <FeaturedElement
        src={HangMan}
        text={hangManContent}
        color={colors.medium}
        onClick={goToHangManPage}
      />
      <FeaturedElement
        src={Rock}
        text={rpsContent}
        reverse={true}
        onClick={goToRPSPage}
      />
      <FeaturedElement
        src={TickTackToeImg}
        text={tickTackToeContent}
        color={colors.secondary}
        onClick={goToTickTackToePage}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    width: '80vw',
  },
};
