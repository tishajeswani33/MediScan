  import { Medicine } from '../types/Medicine';

// Comprehensive medicine database with categorization by diseases
const mockMedicines: Medicine[] = [
  // Antibiotics
  {
    id: 'augmentin-625',
    name: 'Augmentin 625',
    form: 'Tablet',
    strength: '625mg',
    purpose: 'Augmentin is a combination antibiotic containing Amoxicillin and Clavulanic acid. It treats various bacterial infections including respiratory, urinary, and skin infections.',
    benefits: [
      'Broad-spectrum antibiotic coverage',
      'Effective against resistant bacteria',
      'Treats multiple types of infections',
      'Well-established safety profile',
      'Rapid action against bacteria'
    ],
    ingredients: ['Amoxicillin 500mg', 'Clavulanic Acid 125mg'],
    categories: ['Antibiotic', 'Broad Spectrum'],
    conditions: [
      'Respiratory tract infections',
      'Urinary tract infections',
      'Skin infections',
      'Dental infections',
      'Sinusitis'
    ],
    warnings: [
      'Complete full course as prescribed',
      'Take with food',
      'May cause diarrhea',
      'Avoid if allergic to penicillins',
      'Tell doctor about any allergies'
    ],
    sideEffects: {
      common: [
        'Diarrhea',
        'Nausea',
        'Stomach pain',
        'Rash',
        'Yeast infection'
      ],
      serious: [
        'Severe allergic reactions',
        'Clostridium difficile infection',
        'Liver problems',
        'Stevens-Johnson syndrome',
        'Seizures'
      ]
    },
    overdoseEffects: 'Overdose may cause nausea, vomiting, diarrhea, and in severe cases, kidney problems or seizures. Seek immediate medical attention.',
    dosage: {
      description: 'Take one tablet twice daily with meals, 12 hours apart.',
      ageGroups: [
        {
          group: 'Adults and children over 12 years',
          dosage: '1 tablet every 12 hours',
          notes: 'Take with food'
        }
      ]
    },
    administration: 'Take with meals to reduce stomach upset. Complete the full course even if you feel better.',
    storage: {
      temperature: 'Store below 25°C',
      instructions: 'Keep away from moisture and light'
    },
    expiryDate: '2025-08-31',
    disposal: 'Return unused antibiotics to pharmacy for safe disposal.'
  },
  // Antivirals
  {
    id: 'tamiflu-75',
    name: 'Tamiflu',
    form: 'Capsule',
    strength: '75mg',
    purpose: 'Tamiflu (Oseltamivir) is an antiviral medication used to treat and prevent influenza A and B. It works by stopping the spread of flu virus in your body.',
    benefits: [
      'Reduces flu symptoms',
      'Shortens illness duration',
      'Prevents flu complications',
      'Can be used preventively',
      'Effective against multiple flu strains'
    ],
    ingredients: ['Oseltamivir Phosphate 75mg'],
    categories: ['Antiviral', 'Influenza Treatment'],
    conditions: [
      'Influenza A',
      'Influenza B',
      'Flu prevention',
      'Post-exposure prophylaxis',
      'Seasonal flu'
    ],
    warnings: [
      'Start within 48 hours of symptoms',
      'Complete full course',
      'Monitor for behavioral changes',
      'May cause nausea',
      'Not a substitute for flu vaccine'
    ],
    sideEffects: {
      common: [
        'Nausea',
        'Vomiting',
        'Diarrhea',
        'Headache',
        'Fatigue'
      ],
      serious: [
        'Behavioral changes',
        'Allergic reactions',
        'Skin reactions',
        'Confusion',
        'Seizures'
      ]
    },
    overdoseEffects: 'Overdose may cause nausea, vomiting, and neurological symptoms. Seek immediate medical attention.',
    dosage: {
      description: 'Take twice daily for 5 days for treatment, or as prescribed for prevention.',
      ageGroups: [
        {
          group: 'Adults and teenagers',
          dosage: '75mg twice daily',
          notes: 'Take with or without food'
        }
      ]
    },
    administration: 'Take with or without food. If nauseous, take with food.',
    storage: {
      temperature: 'Store below 25°C',
      instructions: 'Keep in original container'
    },
    expiryDate: '2025-12-31',
    disposal: 'Return unused medicine to pharmacy.'
  },
  // Gastrointestinal
  {
    id: 'pantoprazole-40',
    name: 'Pan 40',
    form: 'Tablet',
    strength: '40mg',
    purpose: 'Pan 40 (Pantoprazole) reduces stomach acid production. It treats acid reflux, ulcers, and other conditions where stomach acid needs to be reduced.',
    benefits: [
      'Reduces stomach acid',
      'Relieves heartburn',
      'Heals ulcers',
      'Prevents acid damage',
      'Once daily dosing'
    ],
    ingredients: ['Pantoprazole Sodium 40mg'],
    categories: ['Gastrointestinal', 'Proton Pump Inhibitor'],
    conditions: [
      'Acid reflux',
      'Gastric ulcers',
      'GERD',
      'Zollinger-Ellison syndrome',
      'Esophagitis'
    ],
    warnings: [
      'Take before first meal',
      'Do not crush or chew',
      'Long-term use risks',
      'May affect vitamin B12 absorption',
      'Tell doctor if pregnant'
    ],
    sideEffects: {
      common: [
        'Headache',
        'Nausea',
        'Diarrhea',
        'Stomach pain',
        'Gas'
      ],
      serious: [
        'Kidney problems',
        'Low magnesium',
        'Bone fractures',
        'Severe diarrhea',
        'Vitamin B12 deficiency'
      ]
    },
    overdoseEffects: 'Overdose symptoms include confusion, drowsiness, blurred vision, and rapid heartbeat. Seek immediate medical attention.',
    dosage: {
      description: 'Take one tablet daily before breakfast.',
      ageGroups: [
        {
          group: 'Adults',
          dosage: '40mg once daily',
          notes: 'Take before breakfast'
        }
      ]
    },
    administration: 'Take on empty stomach before breakfast. Swallow whole.',
    storage: {
      temperature: 'Store below 30°C',
      instructions: 'Protect from moisture'
    },
    expiryDate: '2025-07-31',
    disposal: 'Return unused medicine to pharmacy.'
  },
  // Hormonal
  {
    id: 'thyroxine-50',
    name: 'Thyronorm 50',
    form: 'Tablet',
    strength: '50mcg',
    purpose: 'Thyronorm (Levothyroxine) is used to treat hypothyroidism. It replaces the thyroid hormone that your body should naturally produce.',
    benefits: [
      'Replaces thyroid hormone',
      'Improves energy levels',
      'Regulates metabolism',
      'Helps maintain healthy weight',
      'Once daily dosing'
    ],
    ingredients: ['Levothyroxine Sodium 50mcg'],
    categories: ['Hormonal', 'Thyroid Hormone'],
    conditions: [
      'Hypothyroidism',
      'Thyroid hormone deficiency',
      'Goiter',
      'Thyroid cancer follow-up',
      'Hashimoto\'s disease'
    ],
    warnings: [
      'Take on empty stomach',
      'Wait before eating',
      'Regular monitoring needed',
      'Many drug interactions',
      'Not for weight loss'
    ],
    sideEffects: {
      common: [
        'Weight changes',
        'Appetite changes',
        'Headache',
        'Insomnia',
        'Tremors'
      ],
      serious: [
        'Chest pain',
        'Irregular heartbeat',
        'Severe headache',
        'Allergic reactions',
        'Bone loss'
      ]
    },
    overdoseEffects: 'Overdose can cause heart rhythm problems, chest pain, tremors, and seizures. Requires immediate medical attention.',
    dosage: {
      description: 'Take one tablet daily on empty stomach, preferably in the morning.',
      ageGroups: [
        {
          group: 'Adults',
          dosage: '50-200mcg once daily',
          notes: 'Take on empty stomach'
        }
      ]
    },
    administration: 'Take on empty stomach, 30-60 minutes before breakfast.',
    storage: {
      temperature: 'Store below 25°C',
      instructions: 'Protect from light and moisture'
    },
    expiryDate: '2025-06-30',
    disposal: 'Return unused medicine to pharmacy.'
  },
  // Respiratory
  {
    id: 'montelukast-10',
    name: 'Montair 10',
    form: 'Tablet',
    strength: '10mg',
    purpose: 'Montair (Montelukast) is used to prevent and treat asthma and allergy symptoms. It works by reducing inflammation in the airways.',
    benefits: [
      'Prevents asthma attacks',
      'Reduces allergy symptoms',
      'Once daily dosing',
      'Non-drowsy',
      'Improves breathing'
    ],
    ingredients: ['Montelukast Sodium 10mg'],
    categories: ['Respiratory', 'Anti-inflammatory'],
    conditions: [
      'Asthma',
      'Allergic rhinitis',
      'Exercise-induced bronchospasm',
      'Seasonal allergies',
      'Breathing difficulties'
    ],
    warnings: [
      'Not for acute attacks',
      'Monitor mood changes',
      'Continue other medications',
      'Regular check-ups needed',
      'Tell doctor if pregnant'
    ],
    sideEffects: {
      common: [
        'Headache',
        'Stomach pain',
        'Diarrhea',
        'Fatigue',
        'Mild rash'
      ],
      serious: [
        'Mood changes',
        'Behavior changes',
        'Liver problems',
        'Allergic reactions',
        'Sleep problems'
      ]
    },
    overdoseEffects: 'Overdose may cause headache, stomach pain, thirst, and drowsiness. Seek medical attention if suspected.',
    dosage: {
      description: 'Take one tablet daily in the evening.',
      ageGroups: [
        {
          group: 'Adults and teenagers',
          dosage: '10mg once daily',
          notes: 'Take in evening'
        }
      ]
    },
    administration: 'Take in the evening with or without food.',
    storage: {
      temperature: 'Store below 30°C',
      instructions: 'Keep away from moisture'
    },
    expiryDate: '2025-09-30',
    disposal: 'Return unused medicine to pharmacy.'
  },
  // Pain and Inflammation
  {
    id: 'diclofenac-50',
    name: 'Voveran 50',
    form: 'Tablet',
    strength: '50mg',
    purpose: 'Voveran (Diclofenac) is a non-steroidal anti-inflammatory drug (NSAID) used to treat pain, inflammation, and stiffness caused by various conditions.',
    benefits: [
      'Reduces pain',
      'Decreases inflammation',
      'Relieves arthritis symptoms',
      'Manages acute pain',
      'Reduces fever'
    ],
    ingredients: ['Diclofenac Sodium 50mg'],
    categories: ['Pain Relief', 'Anti-inflammatory', 'NSAID'],
    conditions: [
      'Arthritis',
      'Back pain',
      'Joint pain',
      'Muscle pain',
      'Post-operative pain'
    ],
    warnings: [
      'Take with food',
      'Avoid long-term use',
      'Risk of stomach bleeding',
      'Not for heart patients',
      'Avoid if allergic to NSAIDs'
    ],
    sideEffects: {
      common: [
        'Stomach pain',
        'Heartburn',
        'Nausea',
        'Dizziness',
        'Headache'
      ],
      serious: [
        'Stomach bleeding',
        'Heart problems',
        'Kidney problems',
        'Liver damage',
        'Severe allergic reactions'
      ]
    },
    overdoseEffects: 'Overdose can cause severe stomach pain, vomiting, bleeding, and kidney problems. Seek immediate medical attention.',
    dosage: {
      description: 'Take one tablet 2-3 times daily with food.',
      ageGroups: [
        {
          group: 'Adults',
          dosage: '50mg 2-3 times daily',
          notes: 'Take with food'
        }
      ]
    },
    administration: 'Take with food or milk to prevent stomach upset.',
    storage: {
      temperature: 'Store below 30°C',
      instructions: 'Keep away from moisture'
    },
    expiryDate: '2025-10-31',
    disposal: 'Return unused medicine to pharmacy.'
  }
];

// Enhanced recommendation system based on symptoms and conditions
const getRecommendationScore = (medicine: Medicine, symptoms: string[]): number => {
  let score = 0;
  
  // Check if medicine treats any of the symptoms
  symptoms.forEach(symptom => {
    // Check conditions
    if (medicine.conditions.some(condition => 
      condition.toLowerCase().includes(symptom.toLowerCase())
    )) {
      score += 2;
    }
    
    // Check categories
    if (medicine.categories.some(category =>
      category.toLowerCase().includes(symptom.toLowerCase())
    )) {
      score += 1.5;
    }
    
    // Check purpose
    if (medicine.purpose.toLowerCase().includes(symptom.toLowerCase())) {
      score += 1;
    }
  });
  
  // Additional scoring based on medicine properties
  if (medicine.warnings.length < 3) score += 0.5; // Prefer medicines with fewer warnings
  if (medicine.sideEffects.serious.length < 3) score += 0.5; // Prefer medicines with fewer serious side effects
  
  return score;
};

// Local storage keys
const BOOKMARKS_KEY = 'mediscan_bookmarks';

// Get bookmarked medicine IDs from local storage
const getBookmarkedIds = (): string[] => {
  const stored = localStorage.getItem(BOOKMARKS_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Save bookmarked medicine IDs to local storage
const saveBookmarkedIds = (ids: string[]): void => {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(ids));
};

// Function to scan medicine (mock implementation)
export const scanMedicine = async (imageData: string): Promise<string | null> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  const index = Math.floor(Math.random() * mockMedicines.length);
  return mockMedicines[index].id;
};

// Enhanced medicine details function
export const getMedicineDetails = async (id: string): Promise<Medicine> => {
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const bookmarkedIds = getBookmarkedIds();
  const medicine = mockMedicines.find(med => med.id === id);
  
  if (!medicine) {
    throw new Error('Medicine not found');
  }
  
  return {
    ...medicine,
    isBookmarked: bookmarkedIds.includes(id)
  };
};

// Enhanced search function with better matching
export const searchMedicines = async (
  query: string, 
  filters?: { categories?: string[], forms?: string[] }
): Promise<Medicine[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const bookmarkedIds = getBookmarkedIds();
  
  let results = mockMedicines.filter(medicine => {
    const searchTerms = query.toLowerCase().split(' ');
    
    const matchesQuery = searchTerms.every(term => 
      medicine.name.toLowerCase().includes(term) ||
      medicine.ingredients.some(ing => ing.toLowerCase().includes(term)) ||
      medicine.conditions.some(condition => condition.toLowerCase().includes(term)) ||
      medicine.categories.some(category => category.toLowerCase().includes(term))
    );
    
    const matchesCategory = !filters?.categories?.length || 
                          medicine.categories.some(cat => 
                            filters.categories?.includes(cat));
    
    const matchesForm = !filters?.forms?.length || 
                        filters.forms.includes(medicine.form);
    
    return matchesQuery && matchesCategory && matchesForm;
  });
  
  results = results.map(medicine => ({
    ...medicine,
    isBookmarked: bookmarkedIds.includes(medicine.id)
  }));
  
  return results;
};

// Enhanced recommendation system
export const getRecommendedMedicines = async (symptoms: string[]): Promise<Medicine[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const scoredMedicines = mockMedicines.map(medicine => ({
    medicine,
    score: getRecommendationScore(medicine, symptoms)
  }));
  
  // Sort by score and return top recommendations
  return scoredMedicines
    .sort((a, b) => b.score - a.score)
    .filter(({ score }) => score > 0) // Only return relevant recommendations
    .slice(0, 5)
    .map(({ medicine }) => medicine);
};

// Bookmark functions
export const toggleBookmark = async (id: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const bookmarkedIds = getBookmarkedIds();
  
  if (bookmarkedIds.includes(id)) {
    const updated = bookmarkedIds.filter(bookmarkId => bookmarkId !== id);
    saveBookmarkedIds(updated);
    return false;
  } else {
    saveBookmarkedIds([...bookmarkedIds, id]);
    return true;
  }
};

export const getBookmarkedMedicines = async (): Promise<Medicine[]> => {
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const bookmarkedIds = getBookmarkedIds();
  
  return mockMedicines
    .filter(medicine => bookmarkedIds.includes(medicine.id))
    .map(medicine => ({
      ...medicine,
      isBookmarked: true
    }));
};
