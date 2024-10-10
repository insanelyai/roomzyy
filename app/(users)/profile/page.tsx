import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Briefcase,
  Heart,
  Cake,
  Mail,
  Phone,
  Globe,
  Twitter,
  Linkedin,
  Github,
  Users,
  Coffee,
  GraduationCap,
} from "lucide-react";

export default function UserProfile() {
  const user = {
    name: "Aanya Sharma",
    avatar: "/placeholder.svg?height=400&width=400",
    profession: "Software Engineer",
    company: "TechMumbai Solutions",
    location: "Mumbai, Maharashtra",
    age: 28,
    relationshipStatus: "Single",
    email: "aanya.sharma@techmumbai.com",
    phone: "+91 98765 43210",
    website: "www.aanyasharma.dev",
    twitter: "@aanyacodes",
    linkedin: "aanya-sharma-dev",
    github: "aanya-dev",
    education: "B.Tech in Computer Science, IIT Bombay",
    languages: ["Hindi", "English", "Marathi"],
    hobbies: ["Classical Dance", "Yoga", "Cricket", "Bollywood Movies"],
    favoriteFood: "Vada Pav",
    favoritePlaces: [
      "Marine Drive",
      "Elephanta Caves",
      "Sanjay Gandhi National Park",
    ],
    bio: "Passionate software engineer with a love for creating innovative solutions that blend technology with Indian culture. Born and raised in the bustling city of Mumbai, I've always been fascinated by the way technology can improve lives in our diverse and dynamic society.",
    fullDescription:
      "I started my journey in technology at a young age, inspired by the rapid digital transformation happening around me in Mumbai. Growing up in a city that never sleeps, I learned the value of efficiency and innovation early on. My education at IIT Bombay further honed my skills and gave me a solid foundation in computer science.\n\nIn my professional life, I specialize in developing scalable web applications and have a keen interest in artificial intelligence and machine learning. I believe in the power of technology to solve uniquely Indian challenges, from traffic management in our busy cities to digital solutions for our vast rural areas.\n\nOutside of work, I'm deeply connected to my roots. I practice Bharatanatyam, finding in it a perfect balance to the logical world of coding. I'm also passionate about introducing more girls to STEM fields and regularly mentor at local schools.\n\nOn weekends, you might find me enjoying a cricket match at Wankhede Stadium, taking a peaceful walk at Sanjay Gandhi National Park, or simply relishing a plate of vada pav at my favorite local stall. I believe in the perfect harmony of tradition and modernity, much like the city of Mumbai itself.\n\nMy goal is to contribute to India's growing tech scene and help position Mumbai as a global tech hub. I'm always open to connecting with fellow tech enthusiasts and anyone passionate about using technology for positive change in our society.",
  };

  return (
    <div className="container mx-auto p-4 bg-grey min-h-screen">
      <Card className="w-full max-w-4xl mx-auto shadow-2xl">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-white shadow-lg">
              <AvatarImage src={"/assets/g3.jpeg"} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl md:text-4xl font-bold text-purple-800">
                {user.name}
              </CardTitle>
              <p className="text-xl text-gray-600 mt-2">{user.profession}</p>
              <div className="flex items-center justify-center md:justify-start mt-3 text-gray-600">
                <Briefcase className="w-5 h-5 mr-2" />
                <span>{user.company}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-1 text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-1 text-gray-600">
                <GraduationCap />
                <span>{user.education}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <Separator className="my-4" />
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-800">
                Personal Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Cake className="w-5 h-5 mr-2 text-orange-500" />
                  <span>Age: {user.age}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-500" />
                  <span>Relationship Status: {user.relationshipStatus}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-green-500" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-indigo-500" />
                  <a
                    href={`https://${user.website}`}
                    className="text-blue-600 hover:underline"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-800">
                Social Media
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Twitter className="w-5 h-5 mr-2 text-blue-400" />
                  <a
                    href={`https://twitter.com/${user.twitter.slice(1)}`}
                    className="text-blue-600 hover:underline"
                  >
                    {user.twitter}
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-2 text-blue-700" />
                  <a
                    href={`https://www.linkedin.com/in/${user.linkedin}`}
                    className="text-blue-600 hover:underline"
                  >
                    {user.linkedin}
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-2 text-gray-700" />
                  <a
                    href={`https://github.com/${user.github}`}
                    className="text-blue-600 hover:underline"
                  >
                    {user.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-800">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {user.languages.map((language, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  {language}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-800">
              Hobbies
            </h3>
            <div className="flex flex-wrap gap-2">
              {user.hobbies.map((hobby, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-orange-100 text-orange-800"
                >
                  {hobby}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-800">
              Favorite Mumbai Experiences
            </h3>
            <div className="flex items-center space-x-2 mb-2">
              <Coffee className="w-5 h-5 text-brown-500" />
              <span>Favorite Street Food: {user.favoriteFood}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span>Favorite Places: {user.favoritePlaces.join(", ")}</span>
            </div>
          </div>
          <Separator className="my-6" />
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-800">Bio</h3>
            <p className="text-gray-700">{user.bio}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-800">
              Full Description
            </h3>
            <p className="text-gray-700 whitespace-pre-line">
              {user.fullDescription}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
