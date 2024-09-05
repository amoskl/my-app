'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shirt, Briefcase, PartyPopper, Dumbbell, Coffee } from 'lucide-react'

const eventTypes = [
  { value: 'formal', label: 'Formal Event', icon: Briefcase },
  { value: 'casual', label: 'Casual Outing', icon: Coffee },
  { value: 'party', label: 'Party', icon: PartyPopper },
  { value: 'workout', label: 'Workout', icon: Dumbbell },
]

const outfitRecommendations = {
  formal: ['Suit', 'Dress shirt', 'Tie', 'Dress shoes'],
  casual: ['Jeans', 'T-shirt', 'Sneakers', 'Casual jacket'],
  party: ['Cocktail dress', 'Dress pants', 'Button-up shirt', 'Heels'],
  workout: ['Athletic shorts', 'Workout top', 'Running shoes', 'Sweatband'],
}

export function OutfitAdvisor() {
  const [selectedEvent, setSelectedEvent] = useState('')

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Outfit Advisor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select onValueChange={setSelectedEvent}>
            <SelectTrigger>
              <SelectValue placeholder="Select an event type" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((event) => (
                <SelectItem key={event.value} value={event.value}>
                  <div className="flex items-center">
                    <event.icon className="mr-2 h-4 w-4" />
                    {event.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedEvent && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Recommended Outfit:</h3>
              <ul className="list-disc list-inside">
                {outfitRecommendations[selectedEvent].map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          )}

          <Button 
            className="w-full mt-4" 
            onClick={() => setSelectedEvent('')}
            disabled={!selectedEvent}
          >
            <Shirt className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}