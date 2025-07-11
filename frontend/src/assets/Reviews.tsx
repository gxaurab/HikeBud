
export interface Review {
  id:number,
  name: string;
  date: string;
  description: string;
  image: string;
  location: string;
}


export const reviews: Review[] = [
  {
    id:1,
    name: "Irene Muller ",
    date: "2025-06-12",
    location: "Langtang Trek",
    description: "Loved the platform! Super easy to explore hikes and get inspired. Highly recommend to all nature lovers.",
    image: "/image1.jpg",
  },
  {
    id:2,
    name: "Gaurab Wagle",
    date: "2025-06-18",
        location: "Langtang Trek",
    description: "A refreshing and well-organized platform. Helped me plan my first trek with confidence.",
    image: "/image2.jpg",
  },
  {
    id:3,
    name: "Prachanda Gurung",
    date: "2025-05-28",
        location: "Langtang Trek",
    description: "Beautiful design and very informative. The photos and trail details are exactly what I needed.",
    image: "/image1.jpg",
  },
  {
    id:4,
    name: "Ricardo Periera ",
    date: "2025-06-01",
        location: "Langtang Trek",
    description: "Impressed with the smooth UI. Everything from finding routes to safety tips is here!",
    image: "/image2.jpg",
  },
];
