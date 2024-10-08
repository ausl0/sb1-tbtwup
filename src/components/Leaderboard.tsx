import React from 'react'
import { Trophy } from 'lucide-react'
import { LeaderboardEntry } from '../types'

interface LeaderboardProps {
  entries: LeaderboardEntry[]
}

const Leaderboard: React.FC<LeaderboardProps> = ({ entries }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hidden lg:block">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
        Top Submitters
      </h3>
      <ul className="space-y-2">
        {entries.map((entry, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{entry.name}</span>
            <span className="text-sm text-gray-500">{entry.count} sites</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Leaderboard