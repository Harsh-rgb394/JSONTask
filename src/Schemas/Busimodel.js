export const Busimodel = {
    type: "object",
    title: "Business Details",
    properties: {
      businessName: {
        type: "string",
        title: "Business Name",
      },
      gstin: {
        type: "string",
        title: "GSTIN",
        pattern: "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$",
        description: "Enter a valid GSTIN (e.g., 12ABCDE1234F1Z5)",
      },
      directors: {
        type: "array",
        title: "Directors",
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
            tags: {
              type: "array",
              title: "Tags",
              items: {
                type: "string",
                enum: ["Director", "Authorized Signatory"],
              },
              uniqueItems: true,
            },
          },
          required: ["name", "panNumber"],
        },
      },
    },
    required: ["businessName", "gstin", "directors"],
  };