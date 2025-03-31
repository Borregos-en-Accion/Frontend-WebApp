/* 

* Todo este código es un ejemplo de cómo crear un torneo de eliminación 
* simple utilizando la biblioteca react-tournament-brackets.

! Link del paquete NPM: https://www.npmjs.com/package/react-tournament-brackets
! Documentación: https://github.com/Shenato/react-tournament-brackets

*/

import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from "react-tournament-brackets";

export const SingleElimination = () => (
  <SingleEliminationBracket
    theme={GlootTheme}
    matches={exportedSmallBracket}
    matchComponent={Match}
    svgWrapper={({ children, ...props }) => (
      <SVGViewer
        width={1200} // Ajustado para un tamaño más razonable
        height={800}
        background="rgb(11, 13, 19)"
        SVGBackground="rgb(11, 13, 19)"
        {...props}
      >
        {children}
      </SVGViewer>
    )}
    onMatchClick={(match) => console.log("Match clicked:", match)}
    onPartyClick={(party) => console.log("Party clicked:", party)}
  />
);

const GlootTheme = createTheme({
  textColor: { main: "#000000", highlighted: "#F4F2FE", dark: "#707582" },
  matchBackground: { wonColor: "#2D2D59", lostColor: "#1B1D2D" },
  score: {
    background: {
      wonColor: `#10131C`,
      lostColor: "#10131C",
    },
    text: { highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94" },
  },
  border: {
    color: "#292B43",
    highlightedColor: "RGBA(152,82,242,0.4)",
  },
  roundHeader: { backgroundColor: "#3B3F73", fontColor: "#F4F2FE" },
  connectorColor: "#3B3F73",
  connectorColorHighlight: "RGBA(152,82,242,0.4)",
  svgBackground: "#0F121C",
});

const exportedSmallBracket = [
  {
    id: "Runoff1_M3",
    nextMatchId: "M3",
    tournamentRoundText: "1",
    participants: [
      {
        name: "TournamentParticipant1",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "TournamentParticipant2",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "Runoff2_M3",
    nextMatchId: "M3",
    tournamentRoundText: "1",
    participants: [
      {
        name: "TournamentParticipant9",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "TournamentParticipant10",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "Runoff1_M4",
    nextMatchId: "M4",
    tournamentRoundText: "1",
    participants: [
      {
        name: "TournamentParticipant3",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "TournamentParticipant4",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "Runoff2_M4",
    nextMatchId: "M4",
    tournamentRoundText: "1",
    participants: [
      {
        name: "TournamentParticipant11",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "TournamentParticipant12",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "Runoff1_null_M5",
    nextMatchId: "M5",
    tournamentRoundText: "1",
    participants: [
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "Runoff2_null_M5",
    nextMatchId: "M5",
    tournamentRoundText: "1",
    participants: [
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "Runoff1_null_M6",
    nextMatchId: "M6",
    tournamentRoundText: "1",
    participants: [
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "Runoff2_null_M6",
    nextMatchId: "M6",
    tournamentRoundText: "1",
    participants: [
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "M3",
    nextMatchId: "M1",
    tournamentRoundText: "2",
    participants: [],
  },
  {
    id: "M4",
    nextMatchId: "M1",
    tournamentRoundText: "2",
    participants: [],
  },
  {
    id: "M5",
    nextMatchId: "M2",
    tournamentRoundText: "2",
    participants: [
      {
        name: "TournamentParticipant5",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "TournamentParticipant6",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "M6",
    nextMatchId: "M2",
    tournamentRoundText: "2",
    participants: [
      {
        name: "TournamentParticipant7",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "TournamentParticipant8",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "M1",
    nextMatchId: "M0",
    tournamentRoundText: "3",
    participants: [],
  },
  {
    id: "M2",
    nextMatchId: "M0",
    tournamentRoundText: "3",
    participants: [],
  },
  {
    id: "M0",
    nextMatchId: null,
    tournamentRoundText: "4",
    participants: [],
  },
];
