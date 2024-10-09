'use client'
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Star } from 'lucide-react'

export default function RoomInfoPage() {
  const [mainImage, setMainImage] = useState("/placeholder.svg?height=400&width=600")
  const smallImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
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
                    123 Paradise Street, Beachfront City<br />
                    Tropical Island, 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Price</h3>
                  <p className="text-gray-600 mb-4">
                    $500 per night
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
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Guest Reviews</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((review) => (
              <Card key={review} className="w-[350px] flex-shrink-0">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-10 w-10 mr-2">
                      <AvatarImage src={`/placeholder.svg`} alt={`Reviewer ${review}`} />
                      <AvatarFallback>R{review}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <div className="text-yellow-400">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-wrap">
                    Absolutely stunning room with a breathtaking view! The service was impeccable, and the amenities exceeded our expectations. We'll definitely be coming back for another unforgettable stay!
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