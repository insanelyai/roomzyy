import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CameraIcon, PhoneIcon, MailIcon, UserIcon } from "lucide-react"
import { ConfettiButton } from "../ui/confetti"

interface OwnerDetails {
  name: string
  email: string
  phone: string
  avatar: string
}

export default function BookNow() {
  const [owner, setOwner] = useState<OwnerDetails>({
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  const [aadhaarImage, setAadhaarImage] = useState<File | null>(null)

  const handleAadhaarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAadhaarImage(event.target.files[0])
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="mt-5 bg-blue-600 h-12 w-full" size={'lg'}>I'm Interested</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Owner Details</DialogTitle>
          <DialogDescription>
            Review the owner's information and upload your Aadhaar card to proceed with booking.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={owner.avatar} alt={owner.name} />
                  <AvatarFallback><UserIcon className="w-8 h-8" /></AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{owner.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MailIcon className="w-4 h-4 mr-2" />
                    {owner.email}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    {owner.phone}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-2">
            <Label htmlFor="aadhaar-upload" className="text-base">Upload Aadhaar Card</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="aadhaar-upload"
                type="file"
                accept="image/*"
                onChange={handleAadhaarUpload}
                className="hidden"
              />
              <Label
                htmlFor="aadhaar-upload"
                className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4"
              >
                <CameraIcon className="w-4 h-4 mr-2" />
                Choose Image
              </Label>
              <span className="text-sm text-muted-foreground">
                {aadhaarImage ? aadhaarImage.name : "No file chosen"}
              </span>
            </div>
          </div>
        </div>
        <ConfettiButton className="w-full" disabled={!aadhaarImage}>
          Book Now
        </ConfettiButton>
      </DialogContent>
    </Dialog>
  )
}