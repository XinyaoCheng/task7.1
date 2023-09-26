const planList = [
  {
      id: 0,
      name: 'Free',
      description: 'Basic plan for freelancers',
      maxJobs: 20,
      price: 'free',
      jobTypes: ['Freelance'],
      hasSubscription: false,
      hasPayment: false,
      viewApplicants: false,
      jobPush: false,
  },
  {
      id: 1,
      name: 'Pro',
      description: 'Enhanced plan for individuals and small businesses',
      maxJobs: 50,
      price: '10/month',
      jobTypes: ['Freelance', 'Employment'],
      hasSubscription: true,
      hasPayment: true,
      viewApplicants: true,
      jobPush: false,
  },
  {
      id: 2,
      name: 'Pro++',
      description: 'Premium plan for large businesses and power users',
      maxJobs: Infinity, // No limit on the number of jobs
      price: '15/month',
      jobTypes: ['Freelance', 'Employment'],
      hasSubscription: true,
      hasPayment: true,
      viewApplicants: true,
      jobPush: true,
  },
];
  
  export default planList;
  