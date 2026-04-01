export const BASE_URL = 'https://github.com/Prateek1771/101_ChromeExtensions/tree/main/';
export const PER_PAGE = 10;

export const EXTENSIONS = [
  {
    no: '01', name: 'Clarify', fn: 'Chat with any webpage', cat: 'AI  Chat',
    tags: ['AI', 'CHAT'], rc: '#7A3B2E', tc: '#e8e8e0', href: 'Clarify',
    desc: "Select any text and open a Claude-powered conversation. Built for reading comprehension, research, and quick lookups without leaving the tab."
  },
  {
    no: '02', name: 'Cloak', fn: 'Extract design assets', cat: 'Design  Dev',
    tags: ['DESIGN', 'DEV'], rc: '#5B6236', tc: '#e8e8e0', href: 'Cloak',
    desc: "Extract fonts, color palettes, SVGs, and image assets from any site. Inspect and download in one click — a designer's recon tool."
  },
  {
    no: '03', name: 'Divina', fn: 'Golden ratio & AI scoring', cat: 'Design  AI',
    tags: ['DESIGN', 'AI'], rc: '#F7630C', tc: '#0d0d10', href: 'Divina',
    desc: "Overlay golden ratio guides on any page and score the layout with AI. See whether compositions align with classical design proportions."
  },
  {
    no: '04', name: 'Consistency', fn: 'Habit heatmap & streaks', cat: 'Productivity',
    tags: ['PRODUCTIVITY'], rc: '#8BA888', tc: '#0d0d10', href: 'Consistency',
    desc: "Track a daily habit with a GitHub-style contribution heatmap. Streaks, completion rings, and calendar heat — all local, all private."
  },
  {
    no: '05', name: 'Dev Dark Mode', fn: 'Code-aware dark mode', cat: 'UX  Dev',
    tags: ['UX', 'DEV'], rc: '#C8102E', tc: '#e8e8e0', href: 'Dev_Dark_Mode',
    desc: "Applies a code-aware dark theme that respects syntax highlighting and avoids inverting screenshots, diagrams, or canvas elements."
  },
  {
    no: '06', name: 'Purchase Validator', fn: 'AI impulse-buy guard', cat: 'AI  Ecommerce',
    tags: ['AI', 'ECOMMERCE'], rc: '#FFC72C', tc: '#0d0d10', href: 'Purchase_Validator',
    desc: "Before checkout, justify the purchase in writing. AI evaluates your reasoning and flags impulse decisions before money leaves your account."
  },
  {
    no: '07', name: 'Virtual Try-On', fn: 'Try clothing via photo', cat: 'AI  Ecommerce',
    tags: ['AI', 'ECOMMERCE'], rc: '#D9822B', tc: '#0d0d10', href: 'Virtual_Try_On',
    desc: "Upload a photo and use AI to layer clothing items on your actual body. See how garments fit before committing to a purchase."
  },
  {
    no: '08', name: 'WebRoast', fn: 'AI roasts your site', cat: 'AI  Fun',
    tags: ['AI', 'FUN'], rc: '#C8553A', tc: '#e8e8e0', href: 'WebRoast',
    desc: "Paste a URL and receive a brutally honest AI critique of the site's design, copy, and UX. Good for a laugh; better for a redesign."
  },
];

export const ALL_TAGS = ['AI', 'CHAT', 'DESIGN', 'DEV', 'PRODUCTIVITY', 'UX', 'ECOMMERCE', 'FUN'];
