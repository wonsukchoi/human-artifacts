import type { Artifact } from "./types";

export const sewingRoom: Artifact[] = [
  {
    slug: "sewing-room",
    name: "Sewing Room",
    what: "A room set up with a sewing machine and worktable for making and mending clothes and fabric goods.",
    why: "Sewing needs a stable table for cutting fabric and a dedicated spot for a machine that stays threaded and set up between projects — packing that away after every use and finding table space elsewhere slows the whole process down enough that a dedicated room earns its keep.",
    has: ["sewing machine", "fabric storage", "dress form", "sewing shears", "pattern paper", "thread spools"],
  },
  {
    slug: "sewing-machine",
    name: "Sewing Machine",
    what: "A motorized machine that drives a needle through fabric in a repeating stitch pattern to join or hem it.",
    why: "Hand-stitching a seam takes minutes per inch and produces uneven spacing — a machine drives the needle at a fixed, even rhythm many times a second, finishing a seam in seconds with stitches spaced identically throughout.",
    has: ["needle", "motor"],
  },
  {
    slug: "needle",
    name: "Needle",
    what: "A thin, sharp steel rod with an eye near the tip that carries thread through fabric.",
    why: "Thread alone can't pierce woven fabric — the needle's sharp point does that piercing, and the eye right behind the tip pulls the thread through in the same motion instead of needing a separate step.",
    has: ["steel"],
  },
  {
    slug: "fabric-storage",
    name: "Fabric Storage",
    what: "Shelving or bins in a sewing room that hold folded fabric bolts and remnants by type and color.",
    why: "Fabric stored loose or folded on a random shelf becomes impossible to find by color or weight when starting a new project — organized storage by type lets a sewer see and grab the right material at a glance instead of unfolding every option.",
    has: ["wood"],
  },
  {
    slug: "dress-form",
    name: "Dress Form",
    what: "An adjustable, torso-shaped mannequin that a garment is fitted and pinned onto during construction.",
    why: "Checking fit on a real body means constantly stopping to try the garment on — a stand-in form stays in the room the whole time, letting a sewer pin, drape, and check the fit continuously without a live model.",
    has: ["dress form frame", "padding"],
  },
  {
    slug: "dress-form-frame",
    name: "Dress Form Frame",
    what: "The adjustable internal frame of a dress form that expands or contracts to match different body measurements.",
    why: "Garments are made for many different body sizes, and a single fixed shape wouldn't fit most of them — an adjustable frame lets the same form be dialed to a specific set of measurements for each project.",
    has: ["steel"],
  },
  {
    slug: "padding",
    name: "Padding",
    what: "A soft layer over a dress form's frame that gives it a body-like surface pins can be pushed into.",
    why: "Pins need somewhere soft to grip into, and a bare metal frame would neither hold a pin nor feel anything like real fabric draping over a body — padding gives both.",
    has: ["fabric"],
  },
  {
    slug: "sewing-shears",
    name: "Sewing Shears",
    what: "Long-bladed scissors with one pointed and one blunt tip, used to cut fabric cleanly along a pattern line.",
    why: "Household scissors have short blades that leave jagged, multi-cut edges on long fabric runs — long blades cut an entire pattern edge in one continuous stroke, and the blunt tip keeps from snagging or piercing fabric layers underneath while cutting.",
    has: ["blade", "handle"],
  },
  {
    slug: "pattern-paper",
    name: "Pattern Paper",
    what: "Large sheets of thin paper marked with a garment's outline, pinned to fabric as a cutting guide.",
    why: "Cutting fabric freehand to match a garment's exact shape is nearly impossible to get symmetrical — a paper pattern pinned flat gives a fixed, repeatable outline to cut around every time.",
    has: [],
  },
  {
    slug: "thread-spools",
    name: "Thread Spools",
    what: "Small cylindrical spools that hold wound thread, color-coded and organized for a sewing machine.",
    why: "A sewing machine needs matching thread color for nearly every project, and loose thread tangles instantly — spools keep each color wound cleanly and ready to load without unwinding into a knot.",
    has: ["polymer"],
  },
];
