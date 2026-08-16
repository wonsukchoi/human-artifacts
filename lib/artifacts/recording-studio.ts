import type { Artifact } from "./types";

export const recordingStudio: Artifact[] = [
  {
    slug: "recording-studio",
    name: "Recording Studio",
    what: "A soundproofed room with a mixing console used to record and produce music or audio.",
    why: "Ordinary rooms leak outside noise in and reflect sound unevenly off bare walls, both of which ruin a clean recording — a room built with soundproofing and acoustic treatment isolates the sound source and controls how it reflects before it ever reaches a microphone.",
    has: ["mixing console", "acoustic panels", "studio monitors", "vocal booth"],
  },
  {
    slug: "mixing-console",
    name: "Mixing Console",
    what: "A control surface with a row of sliders, one per audio channel, used to balance and blend multiple recorded tracks.",
    why: "A recording combines many separate microphone and instrument feeds that each need independent volume and tone control — a slider per channel lets an engineer balance all of them against each other in real time instead of adjusting one source at a time blind.",
    has: ["mixing console sliders", "microphone"],
  },
  {
    slug: "mixing-console-sliders",
    name: "Mixing Console Sliders",
    what: "Individual sliding controls on a mixing console, one per audio channel, that set each channel's volume level.",
    why: "Each recorded source needs independent control that a single master volume can't provide — a dedicated slider per channel lets one be raised or lowered without touching any of the others.",
    has: [],
  },
  {
    slug: "acoustic-panels",
    name: "Acoustic Panels",
    what: "Foam or fabric-wrapped panels mounted on a studio's walls to absorb sound reflections.",
    why: "Sound bouncing off bare hard walls creates echo and coloration that gets picked up alongside the direct source — absorbing that reflected sound at the wall is what gives a recording its clean, controlled character instead of a boomy, roomy one.",
    has: ["foam", "fabric"],
  },
  {
    slug: "studio-monitors",
    name: "Studio Monitors",
    what: "A pair of flat-response speakers positioned on either side of a mixing console for accurate playback while recording.",
    why: "Consumer speakers boost bass and treble to sound more pleasant, which hides mixing flaws that would be obvious on other systems — flat, uncolored monitors reveal a mix exactly as recorded so problems get caught and fixed before the track ever leaves the room.",
    has: ["speaker"],
  },
  {
    slug: "vocal-booth",
    name: "Vocal Booth",
    what: "A small, heavily soundproofed enclosure within a studio where a single vocalist or instrument records isolated from the rest of the room.",
    why: "Even a treated studio room picks up its own faint reflections and any background noise from other equipment — a sealed booth isolates one voice or instrument completely, giving a dry, clean recording with no room sound bleeding in at all.",
    has: ["acoustic panels", "vocal booth window"],
  },
  {
    slug: "vocal-booth-window",
    name: "Vocal Booth Window",
    what: "A small double-paned window in a vocal booth's door that lets an engineer see the performer without letting sound through.",
    why: "The engineer needs visual contact to cue the performer and catch mistakes, but any opening large enough to talk through would let outside sound leak in — a sealed double-pane window gives sight without breaking the booth's isolation.",
    has: ["glass"],
  },
];
