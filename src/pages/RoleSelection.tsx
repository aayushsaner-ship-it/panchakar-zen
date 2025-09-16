import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserCheck, Activity, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-wellness flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
            <Activity className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Panchakarma Portal
          </h1>
          <p className="text-xl text-white/90">
            Welcome to your wellness journey. Choose your role to continue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Patient Role */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-healing rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Patient Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center mb-6">
                Access your personal wellness journey with therapy schedules, progress tracking, and real-time updates.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Today's therapy schedule</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Real-time therapy status</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Progress charts & notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>AI wellness assistant</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6"
                onClick={() => navigate('/patient')}
              >
                Enter as Patient
              </Button>
            </CardContent>
          </Card>

          {/* Doctor Role */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-calm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Doctor Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center mb-6">
                Comprehensive patient management with live tracking, analytics, and schedule coordination.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Patient compliance monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Live therapy room tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Schedule management tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Advanced analytics dashboard</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6"
                onClick={() => navigate('/doctor')}
              >
                Enter as Doctor
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 text-sm">
            Demo version with sample data • Experience the full Panchakarma management system
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;