'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload as UploadIcon, CheckCircle2, Info } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Upload = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Navigate to offers
      router.push("/offers");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step {step} of 3</span>
              <span className="text-sm text-muted-foreground">{Math.round((step / 3) * 100)}% complete</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary smooth-transition"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Photos */}
          {step === 1 && (
            <Card className="p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Upload photos</h1>
                <p className="text-muted-foreground">
                  Take or upload 2-3 photos to help us understand the issue
                </p>
              </div>

              <div className="space-y-4">
                {/* Photo prompts */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-3">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden border-2 border-primary hover:border-primary-hover smooth-transition cursor-pointer group relative">
                      <img 
                        src="/images/demo-door-context.jpg" 
                        alt="Context shot of door" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                        <Camera className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">1. Context shot</span>
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      </div>
                      <p className="text-xs text-muted-foreground">Full door from 5 feet back</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden border-2 border-primary hover:border-primary-hover smooth-transition cursor-pointer group relative">
                      <img 
                        src="/images/demo-door-closeup.jpg" 
                        alt="Close-up of door hardware issue" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                        <Camera className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">2. Close-up</span>
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      </div>
                      <p className="text-xs text-muted-foreground">Detail of the problem area</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden border-2 border-primary hover:border-primary-hover smooth-transition cursor-pointer group relative">
                      <img 
                        src="/images/demo-door-scale.jpg" 
                        alt="Scale reference with coin" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                        <Camera className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">3. Scale reference</span>
                        <CheckCircle2 className="h-4 w-4 text-success" />
                      </div>
                      <p className="text-xs text-muted-foreground">Add a coin or credit card</p>
                    </div>
                  </div>
                </div>

                {/* Upload area */}
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary smooth-transition cursor-pointer">
                  <UploadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Drag photos here or click to browse</p>
                  <p className="text-sm text-muted-foreground">Supports JPG, PNG, HEIC - Max 10MB per file</p>
                </div>

                {/* Tips */}
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex gap-2">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-1 text-sm">
                      <p className="font-medium">Tips for great photos:</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>- Use good lighting - natural light works best</li>
                        <li>- Hold camera steady to avoid blur</li>
                        <li>- Include the entire problem area</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <Button onClick={handleContinue} size="lg" className="w-full">
                Continue
              </Button>
            </Card>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <Card className="p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Tell us more</h1>
                <p className="text-muted-foreground">
                  Help us understand the issue better
                </p>
              </div>

              <div className="space-y-6">
                {/* Door type */}
                <div className="space-y-3">
                  <Label>Door type</Label>
                  <RadioGroup defaultValue="interior">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="interior" id="interior" />
                      <Label htmlFor="interior" className="font-normal cursor-pointer">Interior door</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="exterior" id="exterior" />
                      <Label htmlFor="exterior" className="font-normal cursor-pointer">Exterior door</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Handle type */}
                <div className="space-y-3">
                  <Label>Handle type</Label>
                  <RadioGroup defaultValue="lever">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lever" id="lever" />
                      <Label htmlFor="lever" className="font-normal cursor-pointer">Lever handle</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="knob" id="knob" />
                      <Label htmlFor="knob" className="font-normal cursor-pointer">Round knob</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Symptom */}
                <div className="space-y-3">
                  <Label>What's the problem-</Label>
                  <RadioGroup defaultValue="latch">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="latch" id="latch" />
                      <Label htmlFor="latch" className="font-normal cursor-pointer">Won't latch / doesn't close</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="loose" id="loose" />
                      <Label htmlFor="loose" className="font-normal cursor-pointer">Loose or wobbly handle</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="scraping" id="scraping" />
                      <Label htmlFor="scraping" className="font-normal cursor-pointer">Scraping floor or frame</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="off" id="off" />
                      <Label htmlFor="off" className="font-normal cursor-pointer">Door off alignment</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Access notes */}
                <div className="space-y-3">
                  <Label htmlFor="notes">Access notes (optional)</Label>
                  <Textarea 
                    id="notes"
                    placeholder="e.g., Pets at home, building entry code, parking instructions..."
                    className="resize-none"
                    rows={3}
                  />
                </div>
              </div>

              <Button onClick={handleContinue} size="lg" className="w-full">
                Continue
              </Button>
            </Card>
          )}

          {/* Step 3: Location & priority */}
          {step === 3 && (
            <Card className="p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Almost there</h1>
                <p className="text-muted-foreground">
                  Where should the pro come, and how soon-
                </p>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="space-y-3">
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address"
                    placeholder="123 Main St, Chicago, IL 60622"
                    defaultValue=""
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll share this with your chosen pro after booking
                  </p>
                </div>

                {/* Priority */}
                <div className="space-y-3">
                  <Label>When do you need this fixed-</Label>
                  <RadioGroup defaultValue="standard">
                    <Card className="p-4 cursor-pointer hover:border-primary smooth-transition">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="standard" id="standard" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="standard" className="font-medium cursor-pointer flex items-center justify-between">
                            <span>Standard (recommended)</span>
                            <Badge variant="secondary">Same day</Badge>
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Most pros can arrive today or tomorrow
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 cursor-pointer hover:border-primary smooth-transition">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="priority" id="priority" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="priority" className="font-medium cursor-pointer flex items-center justify-between">
                            <span>Priority</span>
                            <Badge variant="secondary" className="bg-secondary">60-120 min</Badge>
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Faster arrival, may cost 15-25% more
                          </p>
                        </div>
                      </div>
                    </Card>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-4">
                <Button onClick={handleContinue} size="lg" className="w-full">
                  See available pros
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By continuing, you agree to our Terms of Service and acknowledge that repairs are performed 
                  by independent professionals
                </p>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;
