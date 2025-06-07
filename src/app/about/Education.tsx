"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TerminalDialog } from "@/components/ui/terminal-dialog";

const EDUCATION_DATA = [
  {
    triggerContent: {
      title: "PBD in Data Analytics",
      subtitle: "Douglas College",
      date: "Sept 2019 - Dev 2021",
    },
    dialogContent: {
      title: "PBD in Data Analytics",
      subtitle: "Douglas College",
      date: "Sept 2019 - Dec 2021",
      items: [
        "Specialized in Data Analytics",
        "Research focus on Data Visualization",
        "RStudio, Python, SQL, Tableau, Power BI, System Design, Data Engineering, Operating System",
      ],
    },
  },
  {
    triggerContent: {
      title: "Bachelor of Science in Computer Science",
      subtitle: "Ahsanullah University of Science and Technology",
      date: "Jul 2013 - Sept 2018",
    },
    dialogContent: {
      title: "Bachelor of Science in Computer Science",
      subtitle: "Ahsanullah University of Science and Technology",
      date: "Jul 2013 - Sept 2018",
      items: [
        "Major in Software Engineering",
        "Course work: Data Structure, Algorithm, Computer Architecture, Computer Network, Operating System, Database Management System, Software Engineering, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Robotics, Computer Graphics, Computer Security",
        "Organized and participated in various programming competitions and hackathons",
      ],
    },
  },
];

const EducationSection = () => {
  return (
    <Card className="shadow-md mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Education
        </h2>
        <div className="space-y-2">
          {EDUCATION_DATA.map((education, index) => (
            <TerminalDialog
              key={index}
              triggerContent={education.triggerContent}
              dialogContent={education.dialogContent}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationSection;
