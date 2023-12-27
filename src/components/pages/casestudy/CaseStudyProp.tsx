// ClientInfo.js
import React from "react";

const CaseStudy = ({ heading, clientName, businessChallenges, solution, projectOutcomes, customerBenefits }:any) => {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-6xl font-bold mb-4">{heading}</h1>
        <h2 className="text-2xl font-semibold mb-2">The Client: {clientName}</h2>
  
        <div>
          <h2 className="text-2xl font-semibold mb-2">Business Challenges:</h2>
          <ul className="list-disc pl-6 mb-4">
            {businessChallenges.map((challenge:any, index:any) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <h2 className="text-2xl font-semibold mb-2">The Solution:</h2>
          <ul className="list-disc pl-6 mb-4">
            {solution.map((solutionPoint:any, index:any) => (
              <li key={index}>{solutionPoint}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <h2 className="text-2xl font-semibold mb-2">Project Outcomes:</h2>
          <ul className="list-disc pl-6 mb-4">
            {projectOutcomes.map((outcome:any, index:any) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <h2 className="text-2xl font-semibold mb-2">Customer Benefits:</h2>
          <ul className="list-disc pl-6 mb-4">
            {customerBenefits.map((benefit:any, index:any) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

export default CaseStudy;
