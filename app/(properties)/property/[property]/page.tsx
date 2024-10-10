'use client'
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BookNow from '@/components/Composite/BookNow'
import Link from 'next/link'

const profiles = [
  {
    "name": "Rajesh Kumar",
    "image": "/assets/b1.jpg",
    "description": "Rajesh is a passionate software engineer with a love for coding and problem-solving. He enjoys spending his weekends playing cricket with friends and traveling to new places."
  },
  {
    "name": "Sonal Mehta",
    "image": "/assets/g2.jpg",
    "description": "Sonal is a creative marketing manager who loves to read and practice yoga. In her free time, she explores her city through the lens of her camera."
  },
  {
    "name": "Arjun Patel",
    "image": "/assets/b3.jpg",
    "description": "Arjun is an entrepreneur with a keen interest in business strategy. He loves cooking and cycling in his free time and is always up for a new challenge."
  },
  {
    "name": "Nisha Singh",
    "image": "/assets/g4.jpg",
    "description": "Nisha is a talented graphic designer with a flair for creativity. She enjoys drawing, listening to music, and constantly honing her design skills."
  },
]

export default function RoomInfoPage() {
  const [mainImage, setMainImage] = useState("/assets/rooms/4.jpg")
  const smallImages = [
    "/assets/rooms/1.jpg",
    "/assets/rooms/2.jpg",
    "/assets/rooms/3.jpg",
    "/assets/rooms/4.jpg",
  ]

  const rating = 4.5
  const maxRating = 5

  const renderStars = (rating: number) => {
    return Array.from({ length: maxRating }).map((_, index) => (
      <Star
        key={index}
        className={`w-6 h-6 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : index < rating
            ? 'text-yellow-400 fill-yellow-400 half-filled'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="mb-4">
            <img src={mainImage} alt="Main Room Image" className="w-full h-auto rounded-lg" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {smallImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Room Image ${index + 1}`}
                className="w-full h-auto rounded-lg cursor-pointer"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold">Luxurious Ocean View Suite</h2>
                <div className="flex flex-col items-end">
                  <div className="flex">{renderStars(rating)}</div>
                  <span className="text-sm text-gray-600">{rating} out of {maxRating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Experience unparalleled comfort and breathtaking views in our spacious and elegantly designed suite, perfect for your dream vacation.
              </p>
              <div className="grid gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Location</h3>
                  <p className="text-gray-600 mb-4">
                    123, Pristin Tower, Bandra West
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Price</h3>
                  <p className="text-gray-600 mb-4">
                  ₹50000
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Room Features</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>King-size bed with premium linens</li>
                    <li>Private balcony with panoramic ocean view</li>
                    <li>Spacious en-suite bathroom with jacuzzi and rain shower</li>
                    <li>High-speed Wi-Fi and work desk</li>
                    <li>55-inch Smart TV with streaming services</li>
                    <li>Fully stocked mini-bar and Nespresso machine</li>
                    <li>In-room safe and air conditioning</li>
                    <li>24/7 room service</li>
                  </ul>
                </div>
              </div>
              <Link href={'/payment'}>
              <Button className="mt-5 bg-blue-600 h-12 w-full" size={'lg'}>Book Now</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Guest Reviews</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4 overflow-x-auto">
            {profiles.map((review, index) => (
              <Card key={index} className="w-[350px] flex-shrink-0">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-10 w-10 mr-2">
                      <AvatarImage src={review.image} alt={`Reviewer ${review}`} />
                      <AvatarFallback>G</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <div className="text-yellow-400">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-wrap">
                    {review.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}