import React from 'react';
import { Users, Activity, Clock, BarChart3, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { doctorPatients, liveTherapies, analyticsData } from '@/data/dummyData';

const DoctorDashboard: React.FC = () => {
  const activePatients = doctorPatients.filter(p => p.therapyStatus === 'active').length;
  const activeTherapies = liveTherapies.filter(t => t.status === 'active').length;
  const lowCompliancePatients = doctorPatients.filter(p => p.compliance < 80);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-therapy-active';
      case 'pending': return 'text-therapy-pending';
      case 'completed': return 'text-therapy-completed';
      case 'cancelled': return 'text-therapy-cancelled';
      default: return 'text-muted-foreground';
    }
  };

  const getComplianceColor = (compliance: number) => {
    if (compliance >= 90) return 'text-success';
    if (compliance >= 75) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Patients</p>
                <p className="text-2xl font-bold">{analyticsData.totalPatients}</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Therapies</p>
                <p className="text-2xl font-bold">{activeTherapies}</p>
              </div>
              <Activity className="w-8 h-8 text-therapy-active" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-2xl font-bold">{analyticsData.completionRate}%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Compliance</p>
                <p className="text-2xl font-bold">{analyticsData.avgCompliance}%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Patient Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {doctorPatients.slice(0, 5).map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-calm rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium">{patient.name}</h4>
                        <p className="text-sm text-muted-foreground">{patient.condition}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${getComplianceColor(patient.compliance)}`}>
                      {patient.compliance}%
                    </div>
                    <Badge
                      variant={patient.therapyStatus === 'active' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {patient.therapyStatus}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Therapy Tracking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Live Therapy Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {liveTherapies.map((therapy) => (
                <div key={therapy.id} className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{therapy.name}</h4>
                    <Badge
                      variant={therapy.status === 'active' ? 'default' : 
                             therapy.status === 'pending' ? 'secondary' : 'outline'}
                    >
                      {therapy.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{therapy.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Room:</span>
                      <span>{therapy.room}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Therapist:</span>
                      <span>{therapy.therapist}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              Compliance Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lowCompliancePatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div>
                    <h4 className="font-medium">{patient.name}</h4>
                    <p className="text-sm text-muted-foreground">Compliance below threshold</p>
                  </div>
                  <div className="text-warning font-medium">
                    {patient.compliance}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Monthly Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.monthlyStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{stat.month}</span>
                    <span>{stat.patients} patients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={stat.satisfaction} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground w-12">
                      {stat.satisfaction}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;