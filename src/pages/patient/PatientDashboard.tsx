import React from 'react';
import { Clock, Bell, Activity, MessageCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { patientSchedule, patientNotifications } from '@/data/dummyData';

const PatientDashboard: React.FC = () => {
  const currentTime = new Date().getHours();
  const currentSession = patientSchedule.find(s => s.status === 'current');
  const upcomingSession = patientSchedule.find(s => s.status === 'upcoming');
  const unreadNotifications = patientNotifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-healing rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Good Morning, Rajesh!</h2>
        <p className="text-white/90">Today is Day 15 of your Panchakarma journey. Keep up the excellent progress!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {patientSchedule.map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border"
                  style={{
                    backgroundColor: session.status === 'current' ? 'hsl(var(--therapy-active) / 0.1)' :
                                   session.status === 'completed' ? 'hsl(var(--muted))' : 'transparent'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium w-16">{session.time}</div>
                    <div>
                      <div className="font-medium">{session.therapy}</div>
                      <div className="text-sm text-muted-foreground">
                        {session.therapist} • {session.room}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={session.status === 'current' ? 'default' : 
                           session.status === 'completed' ? 'secondary' : 'outline'}
                  >
                    {session.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications & Status */}
        <div className="space-y-6">
          {/* Current Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Current Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentSession ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-therapy-active/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="w-8 h-8 text-therapy-active" />
                  </div>
                  <h3 className="font-semibold">{currentSession.therapy}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {currentSession.room} with {currentSession.therapist}
                  </p>
                  <Badge variant="secondary" className="bg-therapy-active/20 text-therapy-active">
                    In Progress
                  </Badge>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <Clock className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No active session</p>
                  {upcomingSession && (
                    <p className="text-sm">Next: {upcomingSession.therapy} at {upcomingSession.time}</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </div>
                {unreadNotifications > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {unreadNotifications}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {patientNotifications.slice(0, 3).map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg border ${!notification.read ? 'bg-accent/50' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-medium">{notification.title}</h4>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Progress & Chatbot */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              This Week's Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Wellness Score</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Energy Level</span>
                  <span>82%</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Stress Reduction</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chatbot Widget */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Ayurvedic Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Assistant:</p>
                <p className="text-sm">
                  Great progress with your Shirodhara session! Remember to rest for 30 minutes after each therapy. 
                  How are you feeling today?
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Ask Question
                </Button>
                <Button size="sm" className="flex-1">
                  Report Issue
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;