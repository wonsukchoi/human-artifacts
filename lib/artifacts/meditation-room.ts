import type { Artifact } from "./types";

export const meditationRoom: Artifact[] = [
  {
    slug: "meditation-room",
    name: "Meditation Room",
    what: "A small, sparsely furnished room set aside for quiet meditation or prayer.",
    why: "Meditation depends on minimizing sensory distraction, which a room full of furniture, screens, and clutter works against — an intentionally bare room removes that distraction instead of a person having to mentally tune it all out.",
    has: ["meditation cushion", "altar", "singing bowl", "incense burner", "prayer rug"],
  },
  {
    slug: "meditation-cushion",
    name: "Meditation Cushion",
    what: "A firm, rounded cushion that raises and tilts the hips forward slightly, supporting an upright cross-legged seated posture.",
    why: "Sitting cross-legged on a flat floor for an extended stretch strains the knees and rounds the lower back — raising and tilting the hips forward on a cushion lets the spine stack naturally upright without that strain.",
    has: ["fabric", "filling"],
  },
  {
    slug: "altar",
    name: "Altar",
    what: "A small raised surface holding meaningful objects — candles, images, or texts — as a focal point for meditation or prayer.",
    why: "Sustained meditation benefits from one fixed visual point to return attention to instead of a wandering gaze around a bare room — a small arranged surface gives that anchor without needing to keep the eyes closed the whole time.",
    has: ["wood"],
  },
  {
    slug: "singing-bowl",
    name: "Singing Bowl",
    what: "A metal bowl that rings with a sustained tone when its rim is struck or circled with a mallet.",
    why: "A sharp bell marks a single moment, but meditation needs a longer signal to mark the start and end of a session — a struck bowl's slow-decaying ring gives a natural, gentle several-second cue instead of an abrupt sound.",
    has: ["bronze"],
  },
  {
    slug: "incense-burner",
    name: "Incense Burner",
    what: "A small heatproof holder that supports a burning incense stick and catches its falling ash.",
    why: "A lit incense stick drips hot ash as it burns down — the burner both holds the stick upright at a safe angle and catches that ash so it doesn't scatter across the floor.",
    has: ["ceramic"],
  },
  {
    slug: "prayer-rug",
    name: "Prayer Rug",
    what: "A small portable rug, often with a directional pattern, that marks a clean dedicated spot for kneeling prayer.",
    why: "Prayer involves kneeling and touching the forehead to the ground repeatedly, which needs a clean, defined surface separate from a floor walked on in shoes — a small dedicated rug marks that spot and travels with the person instead of needing a permanently set-aside patch of floor.",
    has: ["fabric"],
  },
];
