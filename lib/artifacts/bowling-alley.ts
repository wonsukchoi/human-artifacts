import type { Artifact } from "./types";

export const bowlingAlley: Artifact[] = [
  {
    slug: "bowling-alley",
    name: "Bowling Alley",
    what: "A room with one or more long wooden lanes for rolling a ball at standing pins.",
    why: "A regulation bowling lane needs 60 feet of dead-flat, precisely oiled wood plus room behind for pins to reset — no repurposed room fits that footprint, so a dedicated space is built to the exact dimensions the game requires.",
    has: ["bowling lane", "pinsetter", "ball return", "bowling shoes", "scoring monitor"],
  },
  {
    slug: "bowling-lane",
    name: "Bowling Lane",
    what: "A long, narrow strip of hardwood or synthetic boards, oiled to a precise pattern, that a bowling ball rolls down toward the pins.",
    why: "The ball has to travel the same predictable path shot after shot for the game to reward skill rather than luck — a flat, consistently oiled surface is what keeps that roll repeatable instead of drifting differently each time.",
    has: ["wood"],
  },
  {
    slug: "pinsetter",
    name: "Pinsetter",
    what: "A mechanical system at the end of a bowling lane that clears fallen pins and resets a fresh rack automatically.",
    why: "Resetting ten pins by hand after every roll would make the game painfully slow — a machine sweeps, collects, and resets them automatically in the seconds between throws.",
    has: ["motor"],
  },
  {
    slug: "ball-return",
    name: "Ball Return",
    what: "A mechanized track alongside a bowling lane that carries a rolled ball back up to the bowler after each throw.",
    why: "Walking down the lane to retrieve a heavy ball after every roll would slow the game and risk stepping on the oiled surface — a return track carries it back automatically along a side channel instead.",
    has: ["motor"],
  },
  {
    slug: "bowling-shoes",
    name: "Bowling Shoes",
    what: "Special shoes with a slick sole on one foot and a grippy sole on the other, worn to bowl without damaging the lane.",
    why: "Street shoes track in dirt and grip unevenly against the oiled lane approach — the smooth sliding sole lets a bowler's foot glide into a controlled slide at the release point, something a regular grippy shoe would trip up on.",
    has: ["rubber"],
  },
  {
    slug: "scoring-monitor",
    name: "Scoring Monitor",
    what: "A screen mounted above each lane that automatically tallies and displays a bowler's score frame by frame.",
    why: "Manually tallying strikes, spares, and open frames by hand is slow and error-prone over a full game — sensors tied to a screen calculate and display the running score automatically after every roll.",
    has: ["screen"],
  },
];
