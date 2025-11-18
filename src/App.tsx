import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { 
  Users, 
  Shield, 
  Award, 
  Star, 
  MapPin, 
  Clock, 
  ArrowRight,
  CheckCircle,
  TrendingDown,
  Car,
  Smartphone,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `linear-gradient(135deg, #C4F0F0 0%, #E0FFFF 50%, #ffffff 100%)`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge 
                  className="rounded-full px-4 py-1.5" 
                  style={{ backgroundColor: '#C4F0F0', color: '#000000' }}
                >
                  🚗 Smart Carpooling Platform
                </Badge>
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  CarPool Lanka – Smart Carpooling for Sri Lankan Urban Life
                </h1>
                <p 
                  className="text-lg md:text-xl text-gray-700"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Reduce traffic congestion with AI-powered ride matching. 
                  Join thousands of Sri Lankan commuters saving time, money, 
                  and building a greener future together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 text-lg"
                  style={{ 
                    backgroundColor: '#000000', 
                    color: '#ffffff' 
                  }}
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 text-lg border-2"
                  style={{ 
                    borderColor: '#C4F0F0',
                    color: '#000000'
                  }}
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download App
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl" style={{ fontFamily: 'Quicksand, sans-serif' }}>10K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl" style={{ fontFamily: 'Quicksand, sans-serif' }}>50K+</div>
                  <div className="text-sm text-gray-600">Rides Shared</div>
                </div>
                <div>
                  <div className="text-3xl" style={{ fontFamily: 'Quicksand, sans-serif' }}>4.8★</div>
                  <div className="text-sm text-gray-600">User Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://res.cloudinary.com/dnhmaovth/image/upload/v1763478910/WhatsApp_Image_2025-11-18_at_20.37.19_ffaf4978_maaiyf.jpg"
                  alt="Happy people carpooling"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div 
                className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(196, 240, 240, 0.9)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-black text-white p-3 rounded-full">
                    <TrendingDown className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl" style={{ fontFamily: 'Quicksand, sans-serif' }}>30%</div>
                    <div className="text-sm">Traffic Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              The Traffic Crisis in Sri Lankan Cities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our urban centers are suffering from severe congestion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#E0FFFF' }}
                >
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="text-5xl mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  70-80%
                </h3>
                <p className="text-gray-600">
                  Single-occupancy vehicles during rush hours in Colombo
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#C4F0F0' }}
                >
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-5xl mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  2+ hrs
                </h3>
                <p className="text-gray-600">
                  Wasted daily in traffic jams for average commuters
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-3xl">
              <CardContent className="p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#E0FFFF' }}
                >
                  <TrendingDown className="h-8 w-8" />
                </div>
                <h3 className="text-5xl mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  40%
                </h3>
                <p className="text-gray-600">
                  Reduction possible through efficient carpooling systems
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Problem Image */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1742277712272-aecf17e3accb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHRyYWZmaWMlMjBjb2xvbWJvJTIwY2l0eXxlbnwxfHx8fDE3NjM0Nzc2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Urban traffic congestion"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge 
              className="rounded-full px-4 py-1.5 mb-4" 
              style={{ backgroundColor: '#E0FFFF', color: '#000000' }}
            >
              Features
            </Badge>
            <h2 
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Why Choose CarPool Lanka?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A smart, safe, and culturally progressive way to commute
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-none shadow-lg rounded-3xl hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#C4F0F0' }}
                >
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  Real-Time AI Matching
                </h3>
                <p className="text-gray-600">
                  Advanced algorithm matches you with riders going your way, 
                  optimizing routes and timing for maximum convenience.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-none shadow-lg rounded-3xl hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#E0FFFF' }}
                >
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  Verified & Trusted Profiles
                </h3>
                <p className="text-gray-600">
                  Every user is verified with government ID and mobile number. 
                  Build trust through our community validation system.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-none shadow-lg rounded-3xl hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#C4F0F0' }}
                >
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  Rewarding Gamification
                </h3>
                <p className="text-gray-600">
                  Earn points for every ride shared, unlock badges, and get 
                  rewards from partner businesses across Sri Lanka.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-none shadow-lg rounded-3xl hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#E0FFFF' }}
                >
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  Community Ratings
                </h3>
                <p className="text-gray-600">
                  Transparent rating system ensures quality rides. Rate and 
                  review every trip for continuous improvement.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-none shadow-lg rounded-3xl hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#C4F0F0' }}
                >
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  Cultural Positioning
                </h3>
                <p className="text-gray-600">
                  Designed for Sri Lankan values - building community, 
                  respecting traditions, and embracing smart progress.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-none shadow-lg rounded-3xl hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#E0FFFF' }}
                >
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  In-App Communication
                </h3>
                <p className="text-gray-600">
                  Secure messaging to coordinate pickups, share arrival times, 
                  and build lasting carpool relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: '#E0FFFF' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              How It Works
            </h2>
            <p className="text-xl text-gray-700">
              Three simple steps to start carpooling
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
                    style={{ backgroundColor: '#C4F0F0', fontFamily: 'Quicksand, sans-serif' }}
                  >
                    1
                  </div>
                  <div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: '#E0FFFF' }}
                  >
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    Find Your Match
                  </h3>
                  <p className="text-gray-600">
                    Enter your route and schedule. Our AI finds the perfect 
                    carpool partners near you.
                  </p>
                </div>
                {/* Connector Line - Desktop Only */}
                <div className="hidden md:block absolute top-1/4 left-full w-12 h-0.5 bg-gray-300" style={{ transform: 'translateX(-50%)' }} />
              </div>

              {/* Step 2 */}
              <div className="relative text-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
                    style={{ backgroundColor: '#C4F0F0', fontFamily: 'Quicksand, sans-serif' }}
                  >
                    2
                  </div>
                  <div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: '#E0FFFF' }}
                  >
                    <Car className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    Share the Ride
                  </h3>
                  <p className="text-gray-600">
                    Connect with verified riders. Coordinate pickup times and 
                    locations through in-app chat.
                  </p>
                </div>
                {/* Connector Line - Desktop Only */}
                <div className="hidden md:block absolute top-1/4 left-full w-12 h-0.5 bg-gray-300" style={{ transform: 'translateX(-50%)' }} />
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
                    style={{ backgroundColor: '#C4F0F0', fontFamily: 'Quicksand, sans-serif' }}
                  >
                    3
                  </div>
                  <div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: '#E0FFFF' }}
                  >
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    Earn Rewards
                  </h3>
                  <p className="text-gray-600">
                    Complete your trip, rate your experience, and earn points 
                    redeemable for discounts and perks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Trust Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge 
              className="rounded-full px-4 py-1.5 mb-4" 
              style={{ backgroundColor: '#C4F0F0', color: '#000000' }}
            >
              Trusted Community
            </Badge>
            <h2 
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of happy commuters across Sri Lanka
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <Card className="border-none shadow-lg rounded-3xl">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "CarPool Lanka changed my daily commute from Nugegoda to Fort. 
                  I save money, time, and made great friends along the way!"
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: '#C4F0F0', fontFamily: 'Quicksand, sans-serif' }}
                  >
                    SA
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Quicksand, sans-serif' }}>Sandun Alwis</div>
                    <div className="text-sm text-gray-500">Software Engineer, Colombo</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-none shadow-lg rounded-3xl">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Finally a carpooling app that understands Sri Lankan culture. 
                  The verification process made me feel secure from day one."
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: '#E0FFFF', fontFamily: 'Quicksand, sans-serif' }}
                  >
                    NF
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Quicksand, sans-serif' }}>Nishadi Fernando</div>
                    <div className="text-sm text-gray-500">Teacher, Kandy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-none shadow-lg rounded-3xl">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The rewards system is brilliant! I've earned enough points 
                  for free fuel vouchers. Smart savings for smart commuters."
                </p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: '#C4F0F0', fontFamily: 'Quicksand, sans-serif' }}
                  >
                    RP
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Quicksand, sans-serif' }}>Rohan Perera</div>
                    <div className="text-sm text-gray-500">Banker, Colombo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: '#E0FFFF' }}
              >
                <Shield className="h-10 w-10" />
              </div>
              <div style={{ fontFamily: 'Quicksand, sans-serif' }}>100% Verified</div>
              <div className="text-sm text-gray-500">All Users</div>
            </div>

            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: '#C4F0F0' }}
              >
                <CheckCircle className="h-10 w-10" />
              </div>
              <div style={{ fontFamily: 'Quicksand, sans-serif' }}>99% Success</div>
              <div className="text-sm text-gray-500">Match Rate</div>
            </div>

            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: '#E0FFFF' }}
              >
                <Star className="h-10 w-10" />
              </div>
              <div style={{ fontFamily: 'Quicksand, sans-serif' }}>4.8/5.0</div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>

            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: '#C4F0F0' }}
              >
                <Users className="h-10 w-10" />
              </div>
              <div style={{ fontFamily: 'Quicksand, sans-serif' }}>10K+</div>
              <div className="text-sm text-gray-500">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="py-20"
        style={{ 
          background: `linear-gradient(135deg, #C4F0F0 0%, #E0FFFF 100%)` 
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Join CarPool Lanka Today
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Be part of the smart commuting revolution. Save money, reduce 
            traffic, and make Sri Lanka greener one ride at a time.
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="rounded-full px-8 text-lg"
              style={{ backgroundColor: '#000000', color: '#ffffff' }}
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Download on App Store
            </Button>
            <Button 
              size="lg" 
              className="rounded-full px-8 text-lg"
              style={{ backgroundColor: '#000000', color: '#ffffff' }}
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Get it on Google Play
            </Button>
          </div>


          {/* Social Icons */}
          <div className="flex gap-4 justify-center">
            <button 
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <Facebook className="h-5 w-5" />
            </button>
            <button 
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <Twitter className="h-5 w-5" />
            </button>
            <button 
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <Instagram className="h-5 w-5" />
            </button>
            <button 
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <Linkedin className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h3 
                className="text-2xl mb-4"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                CarPool Lanka
              </h3>
              <p className="text-gray-600 text-sm">
                Smart carpooling for Sri Lankan urban life. 
                Reduce traffic, save money, build community.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Support
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Trust & Safety</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center text-sm text-gray-500">
            <p>© 2025 CarPool Lanka. All rights reserved. Built with ❤️ in Sri Lanka.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
