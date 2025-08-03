import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export function DashboardPage() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalRaised: 0,
    totalDonors: 0,
    isLoading: true,
  });

  
  useEffect(() => {
   
    if (currentUser?.id) {
      const fetchDonations = async () => {
        try {
          const donationsRef = collection(db, "donations");
         
          const q = query(
            donationsRef,
            where("internId", "==", currentUser.id)
          );

          const querySnapshot = await getDocs(q);

          
          let totalAmount = 0;
          const donorNames = new Set(); 

          querySnapshot.forEach((doc) => {
            const donation = doc.data();
            totalAmount += +donation.amount;
            
            if (donation.donorName) {
              donorNames.add(donation.donorName);
            }
          });

          setStats({
            totalRaised: totalAmount,
            totalDonors: donorNames.size,
            isLoading: false, 
          });
        } catch (error) {
          console.error("Error fetching donations:", error);
          setStats((prev) => ({ ...prev, isLoading: false })); 
        }
      };

      fetchDonations();
    }
  }, [currentUser]); 

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!currentUser) {
    return <div>Loading user...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Welcome back, {currentUser.name}!
        </h1>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        
        <Card>
          <CardHeader>
            <CardTitle>Total Raised</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.isLoading ? (
              <p className="text-2xl font-bold">Loading...</p>
            ) : (
              <p className="text-2xl font-bold">
                ₹{stats.totalRaised.toLocaleString()}
              </p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Donors</CardTitle>
          </CardHeader>
          <CardContent>
            {stats.isLoading ? (
              <p className="text-2xl font-bold">...</p>
            ) : (
              <p className="text-2xl font-bold">{stats.totalDonors}</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Referral Code</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-mono bg-gray-200 p-2 rounded">
              {currentUser.referralCode}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
