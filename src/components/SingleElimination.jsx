import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from "react-tournament-brackets";

export const SingleElimination = () => (
  <SingleEliminationBracket
    theme={GlootTheme}
    matches={filteredBracket}
    matchComponent={Match}
    svgWrapper={({ children, ...props }) => (
      <SVGViewer
        width={800}
        height={600}
        background="rgb(255, 255, 255)"
        SVGBackground="rgb(240, 244, 255)"
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
  textColor: { main: "#000000", highlighted: "#333333", dark: "#666666" },
  matchBackground: { wonColor: "#FFFFFF", lostColor: "#F0F0F0" },
  score: {
    background: {
      wonColor: "#E0E0E0",
      lostColor: "#E0E0E0",
    },
    text: { highlightedWonColor: "#28A745", highlightedLostColor: "#DC3545" },
  },
  border: {
    color: "#CCCCCC",
    highlightedColor: "RGBA(152,82,242,0.4)",
  },
  roundHeader: { backgroundColor: "#DDDDDD", fontColor: "#000000" },
  connectorColor: "#CCCCCC",
  connectorColorHighlight: "RGBA(152,82,242,0.4)",
  svgBackground: "#FFFFFF", // Fondo completamente blanco
});

// Filtramos el bracket para solo incluir semifinales y final
const filteredBracket = [
  {
    id: "M1", // Semifinal 1
    nextMatchId: "M0",
    tournamentRoundText: "Semifinal",
    participants: [
      {
        name: "Equipo Rojo",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
      {
        name: "Equipo Morado",
        resultText: "Lose",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "M2", // Semifinal 2
    nextMatchId: "M0",
    tournamentRoundText: "Semifinal",
    participants: [
      {
        name: "Equipo Verde",
        resultText: "Lose",
        isWinner: false,
        points: 0,
      },
      {
        name: "Equipo Azul",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
  {
    id: "M0", // Final

    tournamentRoundText: "Final",
    participants: [
      {
        name: "Equipo Rojo",
        resultText: "Lose",
        isWinner: false,
        points: 0,
      },
      {
        name: "Equipo Azul",
        resultText: "Win",
        isWinner: false,
        points: 0,
      },
    ],
  },
];
