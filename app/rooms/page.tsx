"use client";
import { useEffect, useState } from "react";
import { Search, MapPin, IndianRupee, Users, Home, Filter } from "lucide-react";

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
import BookNow from "@/components/Composite/BookNow";
import axios from "axios";
import Link from "next/link";
import { ConfettiButton } from "@/components/ui/confetti";

export default function page() {
  const [properties, setProperties] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    async function fetch() {
      await axios
        .get("/api/property/fetch-all")
        .then((response) => {
          console.log(response);
          setProperties(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetch();
  }, []);

  useEffect(() => {
    console.log(properties);
  }, [properties]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for rooms..." className="pl-8" />
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
                <label className="text-sm font-medium">Price Range (₹)</label>
                <Slider
                  min={0}
                  max={10000}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="place" className="text-sm font-medium">
                  Place
                </label>
                <Select>
                  <SelectTrigger id="place">
                    <SelectValue placeholder="Select a place" />
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
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="rooms" className="text-sm font-medium">
                  Number of Rooms
                </label>
                <Select>
                  <SelectTrigger id="rooms">
                    <SelectValue placeholder="Select rooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4+">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full mt-4">Apply Filters</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property, i) => (
          <Card key={i} className="overflow-hidden">
            <img
              alt={`Room ${i + 1}`}
              className="w-full h-48 object-cover"
              height="200"
              src={property && property.propertyImages[0]}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                {property && property.name}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{property && property.address}</span>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>₹{property && property.rent} Per month</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{property.gender}</span>
                </div>
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{property.noOfRooms}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={'/property/props'}>
              <ConfettiButton>Book Now</ConfettiButton>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
