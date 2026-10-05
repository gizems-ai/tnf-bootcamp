// Source: design_handoff_program_glance/schedule.json — edit content here, the grid renders from it.
export type Tone = 'aqua' | 'lilac' | 'pink' | 'neutral';
export interface Tile { title: string; time?: string; icon?: string; tone?: Tone }
export interface TalkCard { title: string; numeral?: string; lines: string[]; variant: 'featured' | 'soft' }
export interface Day {
  date: string; dow: string;
  wellbeing: Tile; talks: TalkCard; afternoon: Tile; evening: Tile | null;
}
export interface Span { row: string; from: string; to: string; title: string; subtitle: string; icon: string }
export interface LegendItem { label: string; note: string; swatch: 'yellow' | 'grad-cool' | 'aqua' | 'pink' }

export const WEEK_DAYS: Day[] = [
  {
    "date": "2026-10-18",
    "dow": "SUN",
    "wellbeing": {
      "title": "Yoga · Run Club",
      "time": "08:00"
    },
    "talks": {
      "title": "Nomad Landing",
      "lines": [
        "Check-in",
        "Hotel & Beach"
      ],
      "variant": "soft"
    },
    "afternoon": {
      "title": "Hotel & Beach",
      "icon": "umbrella",
      "tone": "aqua"
    },
    "evening": {
      "title": "Sunset Chat",
      "icon": "sunset",
      "tone": "neutral"
    }
  },
  {
    "date": "2026-10-19",
    "dow": "MON",
    "wellbeing": {
      "title": "Yoga · Run Club",
      "time": "08:00"
    },
    "talks": {
      "title": "Opening Circle",
      "lines": [
        "Coworking",
        "Cleopatra Beach"
      ],
      "variant": "soft"
    },
    "afternoon": {
      "title": "Coworking · Cleopatra Beach",
      "icon": "waves",
      "tone": "aqua"
    },
    "evening": {
      "title": "Chat & Dine",
      "icon": "utensils",
      "tone": "neutral"
    }
  },
  {
    "date": "2026-10-20",
    "dow": "TUE",
    "wellbeing": {
      "title": "Beach Walk",
      "time": "08:00"
    },
    "talks": {
      "title": "Festival Day",
      "numeral": "I",
      "lines": [
        "Nomad Visa",
        "Solopreneurship & AI"
      ],
      "variant": "featured"
    },
    "afternoon": {
      "title": "Cleopatra Beach",
      "icon": "waves",
      "tone": "aqua"
    },
    "evening": {
      "title": "Sunset House Party",
      "icon": "music",
      "tone": "neutral"
    }
  },
  {
    "date": "2026-10-21",
    "dow": "WED",
    "wellbeing": {
      "title": "Yoga",
      "time": "08:00"
    },
    "talks": {
      "title": "Festival Day",
      "numeral": "II",
      "lines": [
        "Vision",
        "Mental Performance"
      ],
      "variant": "featured"
    },
    "afternoon": {
      "title": "Digital Art",
      "icon": "palette",
      "tone": "lilac"
    },
    "evening": {
      "title": "Gala Dinner",
      "icon": "wine",
      "tone": "pink"
    }
  },
  {
    "date": "2026-10-22",
    "dow": "THU",
    "wellbeing": {
      "title": "Glute & Legs",
      "time": "08:00"
    },
    "talks": {
      "title": "Festival Day",
      "numeral": "III",
      "lines": [
        "Income & Community",
        "AI Skills · Upwork"
      ],
      "variant": "featured"
    },
    "afternoon": {
      "title": "Invisible Lens · Alanya Castle",
      "icon": "camera",
      "tone": "lilac"
    },
    "evening": {
      "title": "Beach Party",
      "icon": "party-popper",
      "tone": "neutral"
    }
  },
  {
    "date": "2026-10-23",
    "dow": "FRI",
    "wellbeing": {
      "title": "Yoga · Run Club",
      "time": "08:00"
    },
    "talks": {
      "title": "Festival Day",
      "numeral": "IV",
      "lines": [
        "Founders’ Game",
        "Nomad Life"
      ],
      "variant": "featured"
    },
    "afternoon": {
      "title": "Damlataş Cave",
      "icon": "mountain",
      "tone": "aqua"
    },
    "evening": null
  },
  {
    "date": "2026-10-24",
    "dow": "SAT",
    "wellbeing": {
      "title": "Core & Abs",
      "time": "08:00"
    },
    "talks": {
      "title": "Festival Day",
      "numeral": "V",
      "lines": [
        "Closing Circle",
        "Boat Tour"
      ],
      "variant": "featured"
    },
    "afternoon": {
      "title": "Blue & Green Boat Tour",
      "icon": "sailboat",
      "tone": "aqua"
    },
    "evening": null
  },
  {
    "date": "2026-10-25",
    "dow": "SUN",
    "wellbeing": {
      "title": "Yoga · Run Club",
      "time": "08:00"
    },
    "talks": {
      "title": "Check-out",
      "lines": [
        "11:00",
        "Free Beach Day"
      ],
      "variant": "soft"
    },
    "afternoon": {
      "title": "Free Beach Day",
      "icon": "sun",
      "tone": "aqua"
    },
    "evening": null
  }
];

export const WEEK_SPANS: Span[] = [
  {
    "row": "labs",
    "from": "2026-10-20",
    "to": "2026-10-23",
    "title": "AI Bootcamp",
    "subtitle": "Zero → Build → Launch",
    "icon": "sparkles"
  }
];

export const WEEK_LEGEND: LegendItem[] = [
  {
    "label": "Wellbeing",
    "note": "Move + reset",
    "swatch": "yellow"
  },
  {
    "label": "Day",
    "note": "Learn + build",
    "swatch": "grad-cool"
  },
  {
    "label": "Afternoon",
    "note": "Explore + create",
    "swatch": "aqua"
  },
  {
    "label": "Evening",
    "note": "Connect + celebrate",
    "swatch": "pink"
  }
];
