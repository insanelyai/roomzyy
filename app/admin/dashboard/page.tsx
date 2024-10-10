'use client'
import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement,
  PointElement,
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js'
import { Home, DollarSign, Users, Bell, ChevronRight, Wrench } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)


export default function PropertyOwnerDashboard() {
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 17000, 22000, 20000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  const occupancyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Occupancy Rate',
        data: [85, 88, 90, 92, 95, 93],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Property Owner Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹54,000</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36</div>
            <p className="text-xs text-muted-foreground">+4 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 urgent, 6 regular</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={revenueData} options={{ responsive: true }} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Occupancy Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={occupancyData} options={{ responsive: true }} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Maintenance Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {[
                { id: 1, property: 'Sunset Apartments, Unit 3B', issue: 'Leaky faucet', status: 'pending', urgency: 'low' },
                { id: 2, property: 'Greenview Homes, Unit 12', issue: 'Broken AC', status: 'in progress', urgency: 'high' },
                { id: 3, property: 'Lakeside Condos, Unit 7A', issue: 'Faulty electrical outlet', status: 'completed', urgency: 'medium' },
                { id: 4, property: 'Sunset Apartments, Unit 5C', issue: 'Clogged drain', status: 'pending', urgency: 'medium' },
              ].map((request) => (
                <div key={request.id} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{request.property}</p>
                    <p className="text-sm text-muted-foreground">{request.issue}</p>
                    <div className="flex items-center pt-2">
                      <Badge variant={request.status === 'completed' ? 'secondary' : 'default'}>{request.status}</Badge>
                      <Badge variant={request.urgency === 'high' ? 'destructive' : 'outline'} className="ml-2">
                        {request.urgency}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tenant Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {[
                { id: 1, name: 'Alice Johnson', property: 'Sunset Apartments, Unit 3B', leaseEnd: '2023-12-31', paymentStatus: 'paid' },
                { id: 2, name: 'Bob Smith', property: 'Greenview Homes, Unit 12', leaseEnd: '2024-03-15', paymentStatus: 'late' },
                { id: 3, name: 'Carol Williams', property: 'Lakeside Condos, Unit 7A', leaseEnd: '2023-11-30', paymentStatus: 'paid' },
                { id: 4, name: 'David Brown', property: 'Sunset Apartments, Unit 5C', leaseEnd: '2024-02-28', paymentStatus: 'paid' },
              ].map((tenant) => (
                <div key={tenant.id} className="mb-4 flex items-center space-x-4 rounded-md border p-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?text=${tenant.name[0]}`} alt={tenant.name} />
                    <AvatarFallback>{tenant.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{tenant.name}</p>
                    <p className="text-sm text-muted-foreground">{tenant.property}</p>
                    <p className="text-xs text-muted-foreground">Lease ends: {tenant.leaseEnd}</p>
                  </div>
                  <Badge variant={tenant.paymentStatus === 'paid' ? 'default' : 'destructive'}>
                    {tenant.paymentStatus}
                  </Badge>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            {[
              { id: 1, type: 'payment', message: 'Rent payment received from Alice Johnson', time: '2 hours ago' },
              { id: 2, type: 'maintenance', message: 'New maintenance request: Broken AC in Greenview Homes, Unit 12', time: '5 hours ago' },
              { id: 3, type: 'lease', message: 'Lease expiring soon for Carol Williams', time: '1 day ago' },
              { id: 4, type: 'payment', message: 'Late rent payment from Bob Smith', time: '2 days ago' },
            ].map((notification) => (
              <div key={notification.id} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{notification.message}</p>
                  <p className="text-sm text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>
          View All Properties
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}