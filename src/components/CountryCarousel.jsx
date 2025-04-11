import { useState, useEffect } from 'react';
import { PlaneTakeoff } from 'lucide-react';

const slides = [
  {
    title: "About Australia",
    description: "Australia offers high-quality education at affordable tuition fees. It's known for globally recognised programs, diversity, and high standard of living.",
    points: [
      "Impressive international reputation of the Australian education system.",
      "Standard of living is high, but tuition and living costs are lower than US/UK.",
      "Part-time work opportunities for students.",
      "Possibility of scholarships."
    ],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "About Russia",
    description: "Russia offers affordable education with strong programs in engineering, medicine, and research. English-medium courses available.",
    points: [
      "Cost-effective education.",
      "Globally recognized medical degrees.",
      "Strong in STEM education.",
      "Cultural exposure and experience.",
    ],
    image: "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "About Ukraine",
    description: "Ukraine is known for affordable medical and technical education with a growing international student base.",
    points: [
      "Affordable MBBS and tech courses.",
      "Globally accepted degrees.",
      "Simple admission process.",
      "Low cost of living.",
    ],
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "About Canada",
    description: "Canada is a top choice for Indian students for its affordable education, quality of life, and post-study work opportunities.",
    points: [
      "26 universities ranked globally in QS Rankings.",
      "One of the safest places to study.",
      "Rich multiculturalism and PR options.",
      "Lower living costs than the US."
    ],
    image: "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "About USA",
    description: "US universities offer flexible, world-class education with excellent research opportunities and campus life.",
    points: [
      "One of the world’s best education systems.",
      "Focus on practical and employment skills.",
      "Highly flexible education system.",
      "Vibrant American campus culture."
    ],
    image: "https://images.unsplash.com/photo-1574542303384-d07d589af2cd?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative h-[500px] w-full  text-white">
      <img src={slide.image} alt="Slide Background" className="absolute inset-0 w-full h-full object-cover brightness-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-800/70 to-transparent flex items-center px-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
          <p className="mb-6">{slide.description}</p>
          <ul className="space-y-2">
            {slide.points.map((point, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <PlaneTakeoff size={20} className="text-white" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
