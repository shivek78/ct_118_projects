
import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const predefinedAmounts = [50, 100, 250, 500, 1000];

const Donate = () => {
  const [searchParams] = useSearchParams();
  const campaignId = searchParams.get('campaign') || '';
  
  const [amount, setAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleAmountSelect = (value: string) => {
    setAmount(value);
    setCustomAmount(false);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers
    const value = e.target.value.replace(/[^0-9]/g, '');
    setAmount(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setStep(2); // Move to success step
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {step === 1 ? (
              <>
                <div className="text-center mb-10">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">Make a Donation</h1>
                  <p className="text-gray-600 max-w-xl mx-auto">
                    Your contribution helps support our military heroes and their families. 
                    Thank you for your generosity.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  {campaignId && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-blue-800">
                        You're donating to the <span className="font-semibold">
                          {campaignId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </span> campaign.
                      </p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Select donation amount</h3>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {predefinedAmounts.map((value) => (
                          <Button
                            key={value}
                            type="button"
                            variant={amount === value.toString() && !customAmount ? "default" : "outline"}
                            className={`text-lg ${amount === value.toString() && !customAmount ? "bg-army-DEFAULT" : "border-gray-300"}`}
                            onClick={() => handleAmountSelect(value.toString())}
                          >
                            ${value}
                          </Button>
                        ))}
                        <Button
                          type="button"
                          variant={customAmount ? "default" : "outline"}
                          className={customAmount ? "bg-army-DEFAULT" : "border-gray-300"}
                          onClick={() => {
                            setCustomAmount(true);
                            setAmount('');
                          }}
                        >
                          Custom
                        </Button>
                      </div>
                      {customAmount && (
                        <div className="flex items-center">
                          <span className="text-lg mr-2">$</span>
                          <Input
                            value={amount}
                            onChange={handleCustomAmountChange}
                            placeholder="Enter amount"
                            className="text-lg"
                            autoFocus
                          />
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Personal information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone (optional)</Label>
                          <Input id="phone" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Payment method</h3>
                      <RadioGroup defaultValue="credit" className="space-y-4">
                        <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-4">
                          <RadioGroupItem id="credit" value="credit" />
                          <Label htmlFor="credit" className="flex-1 cursor-pointer">Credit / Debit Card</Label>
                          <div className="flex space-x-1">
                            <div className="h-8 w-12 bg-blue-100 rounded flex items-center justify-center text-xs">Visa</div>
                            <div className="h-8 w-12 bg-red-100 rounded flex items-center justify-center text-xs">MC</div>
                            <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">Amex</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-4">
                          <RadioGroupItem id="paypal" value="paypal" />
                          <Label htmlFor="paypal" className="flex-1 cursor-pointer">PayPal</Label>
                          <div className="h-8 w-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs">PayPal</div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes" className="mb-2 block">Message (optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Add a personal message or notes about your donation"
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        className="w-full bg-army-gold hover:bg-yellow-600 text-black text-lg py-6"
                        disabled={isLoading || !amount}
                      >
                        {isLoading ? "Processing..." : `Donate $${Number(amount).toLocaleString() || 0}`}
                      </Button>
                      <p className="text-center text-sm text-gray-500 mt-4">
                        By donating, you agree to our <Link to="/terms" className="text-army-DEFAULT hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-army-DEFAULT hover:underline">Privacy Policy</Link>.
                      </p>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className="text-center bg-white rounded-lg shadow-md p-10 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-green-100 rounded-full p-3">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Thank You for Your Donation!</h2>
                <p className="text-gray-600 mb-6">
                  Your generous contribution of <span className="font-semibold">${Number(amount).toLocaleString()}</span> will help support our military heroes and their families. An email receipt has been sent to your inbox.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Link to="/">
                    <Button variant="outline" className="w-full md:w-auto">
                      Return to Home
                    </Button>
                  </Link>
                  <Button 
                    className="w-full md:w-auto bg-army-DEFAULT hover:bg-army-gray"
                    onClick={() => {
                      toast({
                        title: "Certificate Generated",
                        description: "Your donation certificate has been emailed to you."
                      });
                    }}
                  >
                    Get Donation Certificate
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
