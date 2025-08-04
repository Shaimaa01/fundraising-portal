
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, Trophy } from "lucide-react";


const REWARD_MILESTONES = [
  { 
    amount: 500, 
    name: "Bronze Contributor", 
    icon: Star, 
    unlockedColor: "text-yellow-800" 
  },
  { 
    amount: 1000, 
    name: "Silver Fundraiser", 
    icon: Award,
    unlockedColor: "text-gray-600" 
  },
  { 
    amount: 2000, 
    name: "Gold Champion", 
    icon: Trophy,
    unlockedColor: "text-yellow-400" 
  },
];

export function RewardsSection({ totalRaised }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🏆 Rewards & Achievements</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REWARD_MILESTONES.map((milestone) => {
          const isUnlocked = totalRaised >= milestone.amount;
          const IconComponent = milestone.icon; 

          return (
            <div
              key={milestone.name}
              className={`flex flex-col items-center justify-center p-6 border rounded-lg text-center transition-all ${
                isUnlocked
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-gray-200 bg-gray-50 text-gray-400"
              }`}
            >
              <div className="mb-3">
                
                <IconComponent 
                  className={`h-8 w-8 ${isUnlocked ? milestone.unlockedColor : ''}`} 
                />
              </div>
              <h3 className="font-semibold text-lg">{milestone.name}</h3>
              <p className="text-sm">
                {isUnlocked ? "Unlocked!" : `Raise ₹${milestone.amount} to unlock`}
              </p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}