export const Loanmodel = {
    type: "object",
    title: "Loan Details",
    properties: {
      creditScore: {
        type: "number",
        title: "Credit Score",
        minimum: 300,
        maximum: 900,
      },
      requiredLoanAmount: {
        type: "number",
        title: "Required Loan Amount",
        minimum: 50000,
        maximum: 500000,
      },
      guarantors: {
        type: "array",
        title: "Guarantors",
        items: {
          type: "object",
          properties: {
            name: {
              type: "string",
              title: "Name",
            },
            panNumber: {
              type: "string",
              title: "PAN Number",
              pattern: "^[A-Z]{5}[0-9]{4}[A-Z]{1}$",
              description: "Enter a valid PAN (e.g., ABCDE1234F)",
            },
            relationship: {
              type: "string",
              title: "Relationship with Applicant",
              enum: ["Father", "Mother", "Brother", "Sister", "Spouse", "Other"],
            },
            relationDescription: {
              type: "string",
              title: "Relation Description",
              description: "Specify the relationship if 'Other' is selected",
            },
          },
          required: ["name", "panNumber", "relationship"],
          dependencies: {
            relationship: {
              oneOf: [
                {
                  properties: {
                    relationship: {
                      const: "Other",
                    },
                    relationDescription: {
                      type: "string",
                    },
                  },
                  required: ["relationDescription"],
                },
                {
                  properties: {
                    relationship: {
                      enum: ["Father", "Mother", "Brother", "Sister", "Spouse"],
                    },
                  },
                },
              ],
            },
          },
        },
      },
      bankStatements: {
        type: "array",
        title: "Bank Statements",
        items: {
          type: "string",
          format: "data-url",
        },
      },
    },
    required: ["creditScore", "requiredLoanAmount"],
    dependencies: {
      creditScore: {
        oneOf: [
          {
            properties: {
              creditScore: {
                minimum: 700,
              },
            },
          },
          {
            properties: {
              creditScore: {
                maximum: 699,
              },
              guarantors: {
                minItems: 2,
                title: "Add at least 2 guarantors",
              },
              bankStatements: {
                minItems: 1,
                title: "Upload at least one bank statement",
              },
            },
            required: ["guarantors", "bankStatements"],
          },
        ],
      },
    },
  };