import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes.svgHover}
      width="47"
      height="47"
      viewBox="0 0 320 91.10839361073133"
    >
      <defs id="SvgjsDefs1153"></defs>
      <g
        id="SvgjsG1154"
        featurekey="5TMTKC-0"
        transform="matrix(1.1415524318780468,0,0,1.1415524318780468,-7.077624859910043,-9.99999782266153)"
      >
        <polygon
          xmlns="http://www.w3.org/2000/svg"
          points="26.2,35.4 6.2,47.9 6.2,52.1 26.2,64.6 28.8,60.4 12.2,50 28.8,39.6 "
        ></polygon>
        <polygon
          xmlns="http://www.w3.org/2000/svg"
          points="71.2,39.6 87.8,50 71.2,60.4 73.8,64.6 93.8,52.1 93.8,47.9 73.8,35.4 "
        ></polygon>
        <polygon
          xmlns="http://www.w3.org/2000/svg"
          points="51.7,28.7 39,55.9 52.6,62.2 53.6,60 65.2,35 68.4,28.2 54.8,21.9 "
        ></polygon>
        <polygon
          xmlns="http://www.w3.org/2000/svg"
          points="38.4,74.9 50.5,66.8 36.9,60.4 "
        ></polygon>
      </g>
      <g
        id="SvgjsG1155"
        featurekey="7UBp9i-0"
        transform="matrix(6.090133247219999,0,0,6.090133247219999,119.63459525764885,-32.764917567004034)"
      >
        <path d="M3.2 5.720000000000001 l2.26 9.72 l0.04 0 l2.48 -9.72 l2.94 0 l2.44 9.84 l0.04 0 l2.34 -9.84 l3.08 0 l-3.84 14.28 l-3.12 0 l-2.42 -9.72 l-0.04 0 l-2.38 9.72 l-3.18 0 l-3.78 -14.28 l3.14 0 z M26.66 5.380000000000001 c1.6267 0 3.0066 0.47336 4.14 1.42 s1.76 2.1534 1.88 3.62 l-3 0 c-0.18666 -0.8 -0.54666 -1.4 -1.08 -1.8 s-1.18 -0.6 -1.94 -0.6 c-1.2267 0 -2.18 0.44334 -2.86 1.33 s-1.02 2.0766 -1.02 3.57 c0 1.4667 0.34666 2.63 1.04 3.49 s1.64 1.29 2.84 1.29 c2.0534 0 3.1866 -1.0267 3.4 -3.08 l-3.16 0 l0 -2.34 l6 0 l0 7.72 l-2 0 l-0.32 -1.62 c-1 1.3067 -2.3066 1.96 -3.92 1.96 c-2.1066 0 -3.8034 -0.69334 -5.09 -2.08 s-1.93 -3.1666 -1.93 -5.34 c0 -2.2134 0.64 -4.0234 1.92 -5.43 s2.98 -2.11 5.1 -2.11 z"></path>
      </g>
    </svg>
  );
};
