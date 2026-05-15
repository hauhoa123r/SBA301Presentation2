const jobService = {
    findAll: async()=>{
        // call api to get all 
        
        const jobs = [
            {
                id: 1,
                title: "Software Engineer",
                company: "Google",
                location: "Mountain View, CA",
                salary: "$120,000 - $150,000",
                description: "We are looking for a Software Engineer to join our team. You will be responsible for developing high-quality software solutions that meet our customers' needs.",
                requirements: [
                    "Bachelor's degree in Computer Science or related field",
                    "3+ years of experience in software development",
                    "Proficiency in Java, Python, or C++",
                    "Experience with cloud technologies (AWS, Azure, GCP) is a plus"
                ]
            },
            {
                id: 2,
                title: "Data Scientist",
                company: "Facebook",
                location: "Menlo Park, CA",
                salary: "$110,000 - $140,000",
                description: "We are seeking a Data Scientist to analyze large datasets and provide insights that will help drive our business decisions. You will work closely with cross-functional teams to identify opportunities for leveraging data to drive business solutions.",
                requirements: [
                    "Master's degree in Data Science, Statistics, or related field",
                    "2+ years of experience in data science or analytics",
                    "Proficiency in Python, R, or SQL",
                    "Experience with machine learning algorithms and techniques"
                ]
            }
        ];

        return jobs;
    }
}
export default jobService;