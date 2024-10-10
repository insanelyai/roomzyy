import Image from "next/image"
import Link from "next/link"
import { Search, Home, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/20 to-background pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Background pattern"
          width={1600}
          height={800}
          className="h-full w-full object-cover opacity-10"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Find Your Perfect Room and Roommate
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
              Roomzy makes it easy to find the ideal living space and compatible roommates. Start your journey to a better living experience today.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/rooms">Find Rooms</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/roommates">Find Roommates</Link>
              </Button>
            </div>
            <div className="mt-8">
              <form className="flex w-full max-w-md items-center space-x-2">
                <Input type="text" placeholder="Enter a city or neighborhood" className="flex-grow" />
                <Button type="submit">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </form>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative h-full w-full">
              <Image
                src="/image.webp"
                alt="Happy roommates"
                width={600}
                height={600}
                className="rounded-lg object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-background p-4 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">1000+ Rooms</p>
                    <p className="text-xs text-muted-foreground">Available Now</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 rounded-lg bg-background p-4 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">5000+ Roommates</p>
                    <p className="text-xs text-muted-foreground">Looking for You</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}