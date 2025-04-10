
import React from 'react';
import { Button } from '@/components/ui/button';

// Sample donations data
const donations = [
  {
    id: 'don-001',
    donor: 'Michael Johnson',
    campaign: 'Medical Support',
    amount: 500,
    date: '2025-03-28T14:22:10',
    status: 'Completed',
  },
  {
    id: 'don-002',
    donor: 'Sarah Williams',
    campaign: 'Family Assistance',
    amount: 1000,
    date: '2025-03-27T09:45:23',
    status: 'Completed',
  },
  {
    id: 'don-003',
    donor: 'David Miller',
    campaign: 'Education Fund',
    amount: 250,
    date: '2025-03-26T16:30:42',
    status: 'Completed',
  },
  {
    id: 'don-004',
    donor: 'Emily Davis',
    campaign: 'Medical Support',
    amount: 750,
    date: '2025-03-26T11:15:09',
    status: 'Pending',
  },
  {
    id: 'don-005',
    donor: 'Robert Wilson',
    campaign: 'Equipment & Gear',
    amount: 300,
    date: '2025-03-25T15:20:18',
    status: 'Completed',
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const RecentDonations = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold">Recent Donations</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {donations.map((donation) => (
              <tr key={donation.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{donation.donor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{donation.campaign}</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">${donation.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{formatDate(donation.date)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      donation.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {donation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-gray-200 text-right">
        <Button variant="outline" className="border-army-DEFAULT text-army-DEFAULT hover:bg-army-DEFAULT hover:text-white">
          View All Donations
        </Button>
      </div>
    </div>
  );
};

export default RecentDonations;
