
interface Job {
    title: string;
    location: string;
    jobType: string;
    company: string;
    daysAgo: number;
  }
  
export const featuredJobs: Job[] = [
    { title: "Swift Developer", location: "Bangalore", jobType: "Full time", company: "Apple", daysAgo: 5 },
    { title: "Java Developer", location: "Bangalore", jobType: "Full time", company: "Google", daysAgo: 3 },
    { title: "Node Developer", location: "Cochin", jobType: "Full time", company: "TCS", daysAgo: 6 },
    { title: "C++ Developer", location: "Bangalore", jobType: "Full time", company: "Google", daysAgo: 5 },
    { title: "Cloud Engineer", location: "Bangalore", jobType: "Full time", company: "Apple", daysAgo: 5 },
    { title: "React Developer", location: "Bangalore", jobType: "Full time", company: "TCS", daysAgo: 5 },
  ];