// Dummy data for Panchakarma Portal

export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  compliance: number;
  therapyStatus: 'active' | 'pending' | 'completed' | 'cancelled';
  nextSession: string;
  avatar?: string;
}

export interface Therapy {
  id: string;
  name: string;
  time: string;
  duration: number;
  room: string;
  therapist: string;
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  description: string;
}

export interface Schedule {
  time: string;
  therapy: string;
  therapist: string;
  room: string;
  status: 'upcoming' | 'current' | 'completed';
}

export interface Notification {
  id: string;
  type: 'therapy' | 'appointment' | 'reminder' | 'system';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export interface ProgressData {
  week: string;
  wellness: number;
  energy: number;
  stress: number;
}

// Patient dummy data
export const patientSchedule: Schedule[] = [
  { time: '09:00', therapy: 'Abhyanga', therapist: 'Dr. Priya', room: 'Room 1', status: 'completed' },
  { time: '10:00', therapy: 'Swedana', therapist: 'Dr. Raj', room: 'Room 2', status: 'completed' },
  { time: '11:00', therapy: 'Shirodhara', therapist: 'Dr. Meera', room: 'Room 3', status: 'current' },
  { time: '12:30', therapy: 'Consultation', therapist: 'Dr. Kumar', room: 'Cabin 1', status: 'upcoming' },
  { time: '14:00', therapy: 'Panchakarma Diet', therapist: 'Nutritionist', room: 'Dining', status: 'upcoming' },
  { time: '15:30', therapy: 'Nasya', therapist: 'Dr. Anita', room: 'Room 4', status: 'upcoming' },
];

export const patientNotifications: Notification[] = [
  {
    id: '1',
    type: 'therapy',
    title: 'Shirodhara Session Starting',
    message: 'Your Shirodhara therapy will begin in 5 minutes in Room 3',
    time: '2 mins ago',
    read: false
  },
  {
    id: '2',
    type: 'reminder',
    title: 'Hydration Reminder',
    message: 'Remember to drink warm water as advised',
    time: '30 mins ago',
    read: false
  },
  {
    id: '3',
    type: 'appointment',
    title: 'Tomorrow\'s Schedule Ready',
    message: 'Your schedule for tomorrow has been prepared',
    time: '2 hours ago',
    read: true
  }
];

export const patientProgress: ProgressData[] = [
  { week: 'Week 1', wellness: 65, energy: 60, stress: 75 },
  { week: 'Week 2', wellness: 72, energy: 68, stress: 65 },
  { week: 'Week 3', wellness: 78, energy: 75, stress: 55 },
  { week: 'Week 4', wellness: 85, energy: 82, stress: 45 },
];

// Doctor dummy data
export const doctorPatients: Patient[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    age: 45,
    condition: 'Stress & Anxiety',
    compliance: 92,
    therapyStatus: 'active',
    nextSession: '11:30 AM'
  },
  {
    id: '2',
    name: 'Priya Patel',
    age: 38,
    condition: 'Digestive Issues',
    compliance: 88,
    therapyStatus: 'active',
    nextSession: '02:00 PM'
  },
  {
    id: '3',
    name: 'Amit Kumar',
    age: 52,
    condition: 'Joint Pain',
    compliance: 76,
    therapyStatus: 'pending',
    nextSession: '09:00 AM'
  },
  {
    id: '4',
    name: 'Sunita Devi',
    age: 41,
    condition: 'Insomnia',
    compliance: 95,
    therapyStatus: 'active',
    nextSession: '10:15 AM'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    age: 49,
    condition: 'Hypertension',
    compliance: 68,
    therapyStatus: 'completed',
    nextSession: 'Complete'
  }
];

export const liveTherapies: Therapy[] = [
  {
    id: '1',
    name: 'Shirodhara',
    time: '11:00 - 12:00',
    duration: 60,
    room: 'Room 3',
    therapist: 'Dr. Meera',
    status: 'active',
    description: 'Continuous oil pouring therapy'
  },
  {
    id: '2',
    name: 'Abhyanga',
    time: '11:30 - 12:30',
    duration: 60,
    room: 'Room 1',
    therapist: 'Dr. Priya',
    status: 'active',
    description: 'Full body oil massage'
  },
  {
    id: '3',
    name: 'Swedana',
    time: '12:00 - 12:45',
    duration: 45,
    room: 'Room 2',
    therapist: 'Dr. Raj',
    status: 'pending',
    description: 'Herbal steam therapy'
  },
  {
    id: '4',
    name: 'Nasya',
    time: '10:30 - 11:00',
    duration: 30,
    room: 'Room 4',
    therapist: 'Dr. Anita',
    status: 'completed',
    description: 'Nasal administration therapy'
  }
];

export const analyticsData = {
  totalPatients: 85,
  activeTherapies: 12,
  completionRate: 89,
  avgCompliance: 84,
  monthlyStats: [
    { month: 'Jan', patients: 65, satisfaction: 88 },
    { month: 'Feb', patients: 72, satisfaction: 90 },
    { month: 'Mar', patients: 78, satisfaction: 89 },
    { month: 'Apr', patients: 85, satisfaction: 92 },
  ]
};