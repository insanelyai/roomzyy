"use client";
import { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  Music,
  Coffee,
  Users,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const profiles = [
  {
    id: 1,
    name: "Amit Sharma",
    age: 25,
    location: "Mumbai, India",
    profession: "Student",
    preferences: {
      smoking: "Non-smoker",
      lifestyle: "Early bird",
      pets: "Pet-friendly",
    },
    image: "/assests/b1"
  },
  {
    id: 2,
    name: "Priya Desai",
    age: 26,
    location: "Mumbai, India",
    profession: "Professional",
    preferences: {
      smoking: "Non-smoker",
      lifestyle: "Early bird",
      pets: "Pet-friendly",
    },
    image: "/assests/g1.jpeg"
  },
  {
    id: 3,
    name: "Rahul Verma",
    age: 27,
    location: "Mumbai, India",
    profession: "Freelancer",
    preferences: {
      smoking: "Non-smoker",
      lifestyle: "Early bird",
      pets: "Pet-friendly",
    },
    image: "/assests/b2.jpeg"
  },
  {
    id: 4,
    name: "Sneha Patil",
    age: 28,
    location: "Mumbai, India",
    profession: "Student",
    preferences: {
      smoking: "Non-smoker",
      lifestyle: "Early bird",
      pets: "Pet-friendly",
    },
    image: "/assests/g2.jpeg"
  },
  {
    id: 5,
    name: "Vikram Rao",
    age: 29,
    location: "Mumbai, India",
    profession: "Professional",
    preferences: {
      smoking: "Non-smoker",
      lifestyle: "Early bird",
      pets: "Pet-friendly",
    },
    image: "/assests/b3..jpeg"
  },
  {
    id: 6,
    name: "Anita Mehta",
    age: 30,
    location: "Mumbai, India",
    profession: "Freelancer",
    preferences: {
      smoking: "Non-smoker",
      lifestyle: "Early bird",
      pets: "Pet-friendly",
    },
    image: "/assests/g3.jpeg"
  },
  {
    id: 7,
    name: "Rohan Iyer",
    age: 31,
    location: "Mumbai, India",
    profession: "Student",
    preferences: {
      smoking: "Non-smoker",
      lifestyle: "Early bird",
      pets: "Pet-friendly",
    },
    image: "/assests/b4.jpeg"
  },
  {
    id: 8,
    name: "Kavita Singh",
    age: 32,
    location: "Mumbai, India",
    profession: "Professional",
    preferences: {
      smoking: "Non-smoker",
      lifestyle: "Early bird",
      pets: "Pet-friendly",
    },
    image: "/assests/g4.jpg"
  },
];

export default function RoommateFinder() {
  const [ageRange, setAgeRange] = useState([18, 50]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Roommate</h1>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for roommates..." className="pl-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80">
            <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Age Range</label>
                <Slider
                  min={18}
                  max={80}
                  step={1}
                  value={ageRange}
                  onValueChange={setAgeRange}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{ageRange[0]} years</span>
                  <span>{ageRange[1]} years</span>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Location
                </label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="gender" className="text-sm font-medium">
                  Gender
                </label>
                <Select>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="occupation" className="text-sm font-medium">
                  Occupation
                </label>
                <Select>
                  <SelectTrigger id="occupation">
                    <SelectValue placeholder="Select occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full mt-4">Apply Filters</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {profiles.map((profile, i) => (
          <Card key={profile.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={profile.image}
                  />
                  <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Age: {profile.age}
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{profile.profession}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">
                    {profile.preferences.smoking}
                  </Badge>
                  <Badge variant="secondary">
                    {profile.preferences.lifestyle}
                  </Badge>
                  <Badge variant="secondary">{profile.preferences.pets}</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Button variant="outline" size="sm">
                <Users className="h-4 w-4 mr-2" />
                View Profile
              </Button>
              <Button size="sm">
                <Coffee className="h-4 w-4 mr-2" />
                Connect
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
