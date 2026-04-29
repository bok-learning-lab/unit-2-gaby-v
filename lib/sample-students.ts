export interface Student {
  id: string;
  name: string;
  hometown: string;
  lat: number;
  lng: number;
  classYear: number;
  concentration: string;
  dorm: string;
  funFacts: string[];
  photo?: string;
}

export const sampleStudents: Student[] = [
  {
    id: "1",
    name: "Emma Chen",
    hometown: "San Francisco, CA",
    lat: 37.7749,
    lng: -122.4194,
    classYear: 2026,
    concentration: "Computer Science",
    dorm: "Dunster House",
    funFacts: [
      "I've visited 14 countries",
      "I'm learning to play the piano",
      "I love rock climbing",
    ],
  },
  {
    id: "2",
    name: "James Rodriguez",
    hometown: "Miami, FL",
    lat: 25.7617,
    lng: -80.1918,
    classYear: 2027,
    concentration: "Economics",
    dorm: "Eliot House",
    funFacts: [
      "I'm a competitive chess player",
      "I'm fluent in 4 languages",
      "I love cooking international cuisine",
    ],
  },
  {
    id: "3",
    name: "Sophia Patel",
    hometown: "Austin, TX",
    lat: 30.2672,
    lng: -97.7431,
    classYear: 2025,
    concentration: "Biology",
    dorm: "Lowell House",
    funFacts: [
      "I'm a pre-med student",
      "I volunteer at a local animal shelter",
      "I'm passionate about sustainability",
    ],
  },
  {
    id: "4",
    name: "Liam O'Brien",
    hometown: "Boston, MA",
    lat: 42.3601,
    lng: -71.0589,
    classYear: 2026,
    concentration: "History",
    dorm: "Adams House",
    funFacts: [
      "I grew up nearby",
      "I'm obsessed with historical documentaries",
      "I play lacrosse for the college",
    ],
  },
  {
    id: "5",
    name: "Zara Khan",
    hometown: "London, UK",
    lat: 51.5074,
    lng: -0.1278,
    classYear: 2027,
    concentration: "Literature",
    dorm: "Cabot House",
    funFacts: [
      "I'm from London originally",
      "I write poetry in my free time",
      "I'm a bookworm who reads 2+ books a week",
    ],
  },
  {
    id: "6",
    name: "Marcus Johnson",
    hometown: "Atlanta, GA",
    lat: 33.749,
    lng: -84.388,
    classYear: 2025,
    concentration: "Music",
    dorm: "Quincy House",
    funFacts: [
      "I produce beats and create music",
      "I'm a member of the jazz band",
      "I've performed at local festivals",
    ],
  },
];
