export interface Medicine {
  id: string;
  name: string;
  form: string;
  strength: string;
  purpose: string;
  benefits: string[];
  ingredients: string[];
  categories: string[];
  warnings: string[];
  sideEffects: {
    common: string[];
    serious: string[];
  };
  overdoseEffects: string;
  dosage: {
    description: string;
    ageGroups: {
      group: string;
      dosage: string;
      notes?: string;
    }[];
  };
  administration: string;
  storage: {
    temperature: string;
    instructions: string;
  };
  expiryDate: string;
  disposal: string;
  isBookmarked?: boolean;
  conditions: string[];
}