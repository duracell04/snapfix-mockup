import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, MapPin, Wrench, DollarSign, Upload, Shield, 
  Calendar, CheckCircle2, Info, FileText 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    businessName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Step 2: Location
    city: "",
    zipCode: "",
    serviceRadius: "5",
    
    // Step 3: Services
    services: [] as string[],
    experience: "",
    
    // Step 4: Rates & Availability
    strikeRate: "",
    handleRate: "",
    hingeRate: "",
    rehangRate: "",
    availability: [] as string[],
    
    // Step 5: Portfolio & Credentials
    bio: "",
    insurance: false,
    license: false,
    warrantyDays: "30"
  });

  const services = [
    "Fix misaligned strike plates",
    "Replace door handles/knobs",
    "Tighten/replace hinges",
    "Re-hang interior doors",
    "Lock installation",
    "Weatherstripping",
    "Door frame repairs"
  ];

  const availabilityOptions = [
    "Weekday mornings",
    "Weekday afternoons",
    "Weekday evenings",
    "Weekend mornings",
    "Weekend afternoons",
    "Weekend evenings"
  ];

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application received!",
      description: "We'll review your application and get back to you within 2-3 business days.",
    });
    
    setTimeout(() => {
      navigate("/pro");
    }, 2000);
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const toggleAvailability = (slot: string) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(slot)
        ? prev.availability.filter(s => s !== slot)
        : [...prev.availability, slot]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Become a Pro</h1>
              <span className="text-sm text-muted-foreground">Step {step} of 6</span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((s) => (
                <div 
                  key={s} 
                  className={`h-2 flex-1 rounded-full smooth-transition ${
                    s <= step ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <Card className="p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <User className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Basic Information</h2>
                </div>
                <p className="text-muted-foreground">
                  Tell us about yourself and your business
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input 
                    id="businessName"
                    placeholder="Ace Handyman Services"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <Button onClick={handleNext} size="lg" className="w-full">
                Continue
              </Button>
            </Card>
          )}

          {/* Step 2: Location */}
          {step === 2 && (
            <Card className="p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <MapPin className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Service Area</h2>
                </div>
                <p className="text-muted-foreground">
                  Where do you provide services?
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city"
                    placeholder="Chicago"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input 
                    id="zipCode"
                    placeholder="60622"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceRadius">Service Radius (miles)</Label>
                  <RadioGroup 
                    value={formData.serviceRadius}
                    onValueChange={(value) => setFormData({...formData, serviceRadius: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="5mi" />
                      <Label htmlFor="5mi" className="font-normal cursor-pointer">5 miles</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10" id="10mi" />
                      <Label htmlFor="10mi" className="font-normal cursor-pointer">10 miles</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="15" id="15mi" />
                      <Label htmlFor="15mi" className="font-normal cursor-pointer">15 miles</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="20" id="20mi" />
                      <Label htmlFor="20mi" className="font-normal cursor-pointer">20+ miles</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex gap-2">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      You'll receive job requests within your selected radius. You can always adjust this later.
                    </p>
                  </div>
                </Card>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                  Back
                </Button>
                <Button onClick={handleNext} size="lg" className="flex-1">
                  Continue
                </Button>
              </div>
            </Card>
          )}

          {/* Step 3: Services & Experience */}
          {step === 3 && (
            <Card className="p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Wrench className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Services & Experience</h2>
                </div>
                <p className="text-muted-foreground">
                  What door hardware services do you offer?
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <Label>Services Offered (select all that apply)</Label>
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox 
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => toggleService(service)}
                      />
                      <Label 
                        htmlFor={service}
                        className="font-normal cursor-pointer"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <Label>Years of Experience</Label>
                  <RadioGroup 
                    value={formData.experience}
                    onValueChange={(value) => setFormData({...formData, experience: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0-2" id="0-2" />
                      <Label htmlFor="0-2" className="font-normal cursor-pointer">0-2 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3-5" id="3-5" />
                      <Label htmlFor="3-5" className="font-normal cursor-pointer">3-5 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6-10" id="6-10" />
                      <Label htmlFor="6-10" className="font-normal cursor-pointer">6-10 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10+" id="10+" />
                      <Label htmlFor="10+" className="font-normal cursor-pointer">10+ years</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                  Back
                </Button>
                <Button onClick={handleNext} size="lg" className="flex-1">
                  Continue
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Rates & Availability */}
          {step === 4 && (
            <Card className="p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <DollarSign className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Rates & Availability</h2>
                </div>
                <p className="text-muted-foreground">
                  Set your rates and when you're available
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Your Rates (USD)</Label>
                  <p className="text-sm text-muted-foreground">
                    These are your base rates. You can adjust for specific jobs.
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="strikeRate">Fix misaligned strike plate</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input 
                          id="strikeRate"
                          type="number"
                          placeholder="89"
                          className="pl-7"
                          value={formData.strikeRate}
                          onChange={(e) => setFormData({...formData, strikeRate: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="handleRate">Replace door handle</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input 
                          id="handleRate"
                          type="number"
                          placeholder="109"
                          className="pl-7"
                          value={formData.handleRate}
                          onChange={(e) => setFormData({...formData, handleRate: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hingeRate">Tighten/replace hinges (up to 3)</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input 
                          id="hingeRate"
                          type="number"
                          placeholder="99"
                          className="pl-7"
                          value={formData.hingeRate}
                          onChange={(e) => setFormData({...formData, hingeRate: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rehangRate">Re-hang interior door</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input 
                          id="rehangRate"
                          type="number"
                          placeholder="149"
                          className="pl-7"
                          value={formData.rehangRate}
                          onChange={(e) => setFormData({...formData, rehangRate: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Availability (select all that apply)</Label>
                  {availabilityOptions.map((slot) => (
                    <div key={slot} className="flex items-center space-x-2">
                      <Checkbox 
                        id={slot}
                        checked={formData.availability.includes(slot)}
                        onCheckedChange={() => toggleAvailability(slot)}
                      />
                      <Label 
                        htmlFor={slot}
                        className="font-normal cursor-pointer"
                      >
                        {slot}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                  Back
                </Button>
                <Button onClick={handleNext} size="lg" className="flex-1">
                  Continue
                </Button>
              </div>
            </Card>
          )}

          {/* Step 5: Portfolio & Bio */}
          {step === 5 && (
            <Card className="p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Upload className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Portfolio & Bio</h2>
                </div>
                <p className="text-muted-foreground">
                  Show off your best work and tell customers about yourself
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea 
                    id="bio"
                    placeholder="Tell customers about your experience, work style, and what makes you great at door repairs..."
                    className="min-h-[120px] resize-none"
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  />
                  <p className="text-xs text-muted-foreground">
                    This will appear on your profile. Keep it professional and friendly.
                  </p>
                </div>

                <div className="space-y-3">
                  <Label>Portfolio Upload (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary smooth-transition cursor-pointer">
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                    <p className="font-medium mb-1">Upload before/after photos</p>
                    <p className="text-sm text-muted-foreground">
                      Show examples of your work (up to 10 photos)
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    You can add more photos later from your dashboard
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                  Back
                </Button>
                <Button onClick={handleNext} size="lg" className="flex-1">
                  Continue
                </Button>
              </div>
            </Card>
          )}

          {/* Step 6: Credentials & Review */}
          {step === 6 && (
            <Card className="p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Shield className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Credentials & Review</h2>
                </div>
                <p className="text-muted-foreground">
                  Final details and review your application
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Credentials & Insurance</Label>
                  
                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox 
                      id="insurance"
                      checked={formData.insurance}
                      onCheckedChange={(checked) => setFormData({...formData, insurance: !!checked})}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="insurance" className="font-medium cursor-pointer">
                        I have general liability insurance
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Required for all pros on the platform
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox 
                      id="license"
                      checked={formData.license}
                      onCheckedChange={(checked) => setFormData({...formData, license: !!checked})}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="license" className="font-medium cursor-pointer">
                        I have required local licenses
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        We'll verify during onboarding
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Warranty Period (days)</Label>
                  <RadioGroup 
                    value={formData.warrantyDays}
                    onValueChange={(value) => setFormData({...formData, warrantyDays: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="14" id="14d" />
                      <Label htmlFor="14d" className="font-normal cursor-pointer">14 days</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30" id="30d" />
                      <Label htmlFor="30d" className="font-normal cursor-pointer">30 days (recommended)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="45" id="45d" />
                      <Label htmlFor="45d" className="font-normal cursor-pointer">45 days</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Summary */}
                <Card className="p-6 bg-muted/30 space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Application Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Business:</span>
                      <span className="font-medium">{formData.businessName || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{formData.city || "—"}, {formData.zipCode || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Services:</span>
                      <span className="font-medium">{formData.services.length} selected</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">{formData.experience || "—"} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Warranty:</span>
                      <span className="font-medium">{formData.warrantyDays} days</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex gap-2">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-1 text-sm">
                      <p className="font-medium">What happens next?</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• We'll review your application within 2-3 business days</li>
                        <li>• Background check and credential verification</li>
                        <li>• Phone interview with our team</li>
                        <li>• Account setup and training</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                  Back
                </Button>
                <Button onClick={handleSubmit} size="lg" className="flex-1">
                  Submit Application
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProSignup;
