"use client";
import React, { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Home,
  IndianRupee,
  Users,
  Calendar,
} from "lucide-react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";

// Conversion rate (1 USD = 75 INR)
const USD_TO_INR = 75;

export default function PropertyManagement() {
  const [properties, setProperties] = useState([]);

  // { id: 1, name: 'Sunset Apartments', address: '123 Sunset Blvd, Mumbai, Maharashtra 400001', sqft: 24000, occupancy: 22, revenue: 3375000 },
  // { id: 2, name: 'Greenview Homes', address: '456 Green St, Delhi, Delhi 110001', sqft: 12000, occupancy: 10, revenue: 2250000 },
  // { id: 3, name: 'Lakeside Condos', address: '789 Lake Rd, Bangalore, Karnataka 560001', sqft: 36000, occupancy: 32, revenue: 5400000 },
  // { id: 4, name: 'Mountain View Residences', address: '101 Mountain Dr, Chennai, Tamil Nadu 600001', sqft: 18000, occupancy: 16, revenue: 2700000 },

  const [searchTerm, setSearchTerm] = useState("");

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

  const handleDeleteProperty = (id) => {
    setProperties(properties.filter((p) => p.id !== id));
  };

  if (!properties) return <div>Loading...</div>;

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Property Management</h1>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Link href="/add-property" passHref>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Property
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property) => (
          <Card key={property._id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{property.name}</span>
                <div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleDeleteProperty(property.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {property.address}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">
                    {property && property.area} sq.ft
                  </span>
                </div>

                <div className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">
                    ₹{property && property.rent.toLocaleString()}/mo
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            No properties found. Try adjusting your search or add a new
            property.
          </p>
        </div>
      )}
    </div>
  );
}
