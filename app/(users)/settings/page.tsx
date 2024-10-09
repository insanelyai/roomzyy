'use client'
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CameraIcon, UserIcon, LockIcon, BellIcon, GlobeIcon, HomeIcon, CheckIcon } from "lucide-react"

export default function page() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=300&width=300",
    bio: "I'm a friendly person looking for a great roommate!",
    interests: ["Reading", "Cooking", "Hiking"],
    gender: "Male",
    dob: "1990-01-01",
    occupation: "Software Developer",
    cleanliness: "Tidy",
    smoking: "Non-smoker",
    pets: "No pets",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUser(prevUser => ({ ...prevUser, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setUser(prevUser => ({ ...prevUser, [name]: value }))
  }

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const interests = e.target.value.split(',').map(interest => interest.trim())
    setUser(prevUser => ({ ...prevUser, interests }))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Settings</h1>
            <Button variant="outline">
              <HomeIcon className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Avatar className="w-40 h-40 sm:w-48 sm:h-48 border-4 border-primary">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback><UserIcon className="w-24 h-24" /></AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <CardTitle className="text-3xl mb-2">{user.name}</CardTitle>
                  <CardDescription className="text-lg mb-4">{user.email}</CardDescription>
                  <Button variant="outline" className="bg-primary/10 hover:bg-primary/20">
                    <CameraIcon className="mr-2 h-4 w-4" />
                    Change Profile Picture
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 gap-4 bg-muted p-1 rounded-lg">
              <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <UserIcon className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="account" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <LockIcon className="w-4 h-4 mr-2" />
                Account
              </TabsTrigger>
              {/* <TabsTrigger value="privacy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <GlobeIcon className="w-4 h-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BellIcon className="w-4 h-4 mr-2" />
                Notifications
              </TabsTrigger> */}
            </TabsList>
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Profile Information</CardTitle>
                  <CardDescription>Update your profile details to find the perfect roommate match.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={user.name} onChange={handleInputChange} className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={user.email} onChange={handleInputChange} className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" name="dob" type="date" value={user.dob} onChange={handleInputChange} className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select name="gender" value={user.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                        <SelectTrigger className="bg-muted">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input id="occupation" name="occupation" value={user.occupation} onChange={handleInputChange} className="bg-muted" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" name="bio" value={user.bio} onChange={handleInputChange} className="bg-muted min-h-[100px]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interests">Interests (comma-separated)</Label>
                    <Input id="interests" name="interests" value={user.interests.join(', ')} onChange={handleInterestsChange} className="bg-muted" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {user.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{interest}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences and login information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" className="bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" className="bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" className="bg-muted" />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Roommate Preferences</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cleanliness">Cleanliness</Label>
                        <Select name="cleanliness" value={user.cleanliness} onValueChange={(value) => handleSelectChange("cleanliness", value)}>
                          <SelectTrigger className="bg-muted">
                            <SelectValue placeholder="Select cleanliness" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Very tidy">Very tidy</SelectItem>
                            <SelectItem value="Tidy">Tidy</SelectItem>
                            <SelectItem value="Average">Average</SelectItem>
                            <SelectItem value="Messy">Messy</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smoking">Smoking</Label>
                        <Select name="smoking" value={user.smoking} onValueChange={(value) => handleSelectChange("smoking", value)}>
                          <SelectTrigger className="bg-muted">
                            <SelectValue placeholder="Select smoking preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Non-smoker">Non-smoker</SelectItem>
                            <SelectItem value="Smoker">Smoker</SelectItem>
                            <SelectItem value="Occasional">Occasional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pets">Pets</Label>
                        <Select name="pets" value={user.pets} onValueChange={(value) => handleSelectChange("pets", value)}>
                          <SelectTrigger className="bg-muted">
                            <SelectValue placeholder="Select pet preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="No pets">No pets</SelectItem>
                            <SelectItem value="Has pets">Has pets</SelectItem>
                            <SelectItem value="Pet-friendly">Pet-friendly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Update Account
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            {/* <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Privacy Settings</CardTitle>
                  <CardDescription>Control your privacy and data sharing preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="profile-visibility">Profile Visibility</Label>
                      <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
                    </div>
                    <Switch id="profile-visibility" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="contact-info">Share Contact Information</Label>
                      <p className="text-sm text-muted-foreground">Allow others to see your email and phone number</p>
                    </div>
                    <Switch id="contact-info" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="location-sharing">Location Sharing</Label>
                      <p className="text-sm text-muted-foreground">Share your approximate location with potential roommates</p>
                    </div>
                    <Switch id="location-sharing" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Save Privacy Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Notification Preferences</CardTitle>
                  <CardDescription>Manage how you receive notifications from Roomzy.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive updates and messages via email</p>
                    </div>
                    <Switch id="email-notifications" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications on your mobile device</p>
                    
                    </div>
                    <Switch id="push-notifications" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="new-matches">New Roommate Matches</Label>
                      <p className="text-sm text-muted-foreground">Get notified when you have new potential roommate matches</p>
                    </div>
                    <Switch id="new-matches" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="messages">New Messages</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for new messages from other users</p>
                    </div>
                    <Switch id="messages" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Update Notification Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </div>
  )
}