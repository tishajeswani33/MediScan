import { Medicine } from '../types/Medicine';

// Mock data for demonstration - in a real app, this would come from a backend API
const mockMedicines: Medicine[] = [
  {
    id: 'paracetamol-500mg',
    name: 'Paracetamol',
    form: 'Tablet',
    strength: '500mg',
    purpose: 'Paracetamol is used to relieve mild to moderate pain and reduce fever. It\'s commonly used to treat headaches, toothaches, backaches, menstrual cramps, minor arthritis pain, colds, and flu symptoms.',
    benefits: [
      'Fast-acting pain relief',
      'Effectively reduces fever',
      'Generally well-tolerated',
      'Can be taken with most other medications',
      'Suitable for most people including pregnant women'
    ],
    ingredients: ['Paracetamol 500mg', 'Maize starch', 'Potassium sorbate'],
    categories: ['Analgesic', 'Antipyretic'],
    conditions: [
      'Headache',
      'Fever',
      'Toothache',
      'Muscle pain',
      'Arthritis',
      'Common cold',
      'Flu'
    ],
    warnings: [
      'Do not exceed the stated dose',
      'Do not take with other paracetamol-containing products',
      'Not recommended for children under 12 years unless advised by doctor',
      'Consult doctor if symptoms persist for more than 3 days'
    ],
    sideEffects: {
      common: [
        'Generally well-tolerated when taken as directed',
        'Rarely causes side effects at recommended doses'
      ],
      serious: [
        'Allergic reactions (rash, itching, swelling)',
        'Unusual bleeding or bruising',
        'Yellowing of skin or eyes (jaundice)',
        'Dark urine or clay-colored stools'
      ]
    },
    overdoseEffects: 'Paracetamol overdose can cause severe liver damage, which may initially show no symptoms but can be fatal. If overdose is suspected, seek immediate medical attention. Symptoms may include nausea, vomiting, sweating, and pain in the upper abdomen.',
    dosage: {
      description: 'Take with a full glass of water. Can be taken with or without food.',
      ageGroups: [
        {
          group: 'Adults and children over 12 years',
          dosage: '1-2 tablets (500-1000mg) every 4-6 hours as needed',
          notes: 'Maximum 8 tablets (4000mg) in 24 hours'
        },
        {
          group: 'Children 6-12 years',
          dosage: '½-1 tablet (250-500mg) every 4-6 hours as needed',
          notes: 'Maximum 4 tablets (2000mg) in 24 hours'
        },
        {
          group: 'Not recommended for children under 6 years',
          dosage: 'Consult a doctor'
        }
      ]
    },
    administration: 'Swallow tablets whole with water. Do not crush or chew unless specifically instructed. Can be taken with or without food.',
    storage: {
      temperature: 'Store at room temperature (15-25°C)',
      instructions: 'Keep in a dry place away from direct sunlight. Keep out of reach of children.'
    },
    expiryDate: '2025-06-30',
    disposal: 'Return unused or expired medicine to a pharmacy for safe disposal. Do not flush down the toilet or throw in household trash.'
  },
  {
    id: 'ibuprofen-200mg',
    name: 'Ibuprofen',
    form: 'Tablet',
    strength: '200mg',
    purpose: 'Ibuprofen is used to relieve pain, reduce inflammation, and lower fever. It\'s commonly used for headaches, dental pain, menstrual cramps, muscle aches, arthritis, and minor injuries.',
    benefits: [
      'Reduces inflammation',
      'Provides effective pain relief',
      'Helps reduce fever',
      'Long-lasting effect',
      'Anti-inflammatory properties help with swelling'
    ],
    ingredients: ['Ibuprofen 200mg', 'Microcrystalline cellulose', 'Hypromellose'],
    categories: ['Analgesic', 'Anti-inflammatory', 'NSAID'],
    conditions: [
      'Headache',
      'Dental pain',
      'Menstrual pain',
      'Muscle aches',
      'Arthritis',
      'Sports injuries',
      'Inflammation'
    ],
    warnings: [
      'Do not use if you have had an allergic reaction to ibuprofen or other NSAIDs',
      'Do not use if you have had stomach ulcers or bleeding',
      'Consult doctor before use if you have heart, kidney, or liver problems',
      'Not recommended during the last trimester of pregnancy'
    ],
    sideEffects: {
      common: [
        'Stomach upset, heartburn, or nausea',
        'Mild headache or dizziness',
        'Mild rash or itching'
      ],
      serious: [
        'Stomach pain, black stools, or vomiting blood (signs of bleeding)',
        'Allergic reactions including skin blistering',
        'Swelling of face, lips, or throat',
        'Difficulty breathing',
        'Chest pain or heart palpitations'
      ]
    },
    overdoseEffects: 'Ibuprofen overdose can cause stomach pain, nausea, vomiting, drowsiness, black stools, and breathing difficulties. In severe cases, it can lead to kidney failure, coma, and death. Seek immediate medical attention if overdose is suspected.',
    dosage: {
      description: 'Take with food or milk to reduce stomach upset. Take the lowest effective dose for the shortest duration.',
      ageGroups: [
        {
          group: 'Adults and children over 12 years',
          dosage: '1-2 tablets (200-400mg) every 4-6 hours as needed',
          notes: 'Maximum 6 tablets (1200mg) in 24 hours'
        },
        {
          group: 'Children 6-12 years',
          dosage: '½-1 tablet (100-200mg) every 6-8 hours as needed',
          notes: 'Maximum 3 tablets (600mg) in 24 hours'
        },
        {
          group: 'Not recommended for children under 6 years',
          dosage: 'Consult a doctor'
        }
      ]
    },
    administration: 'Take with or after food with a full glass of water. Swallow tablets whole; do not crush or chew unless specifically formulated as chewable tablets.',
    storage: {
      temperature: 'Store below 25°C',
      instructions: 'Keep in the original container to protect from moisture and light. Keep out of sight and reach of children.'
    },
    expiryDate: '2025-03-15',
    disposal: 'Return unused or expired medicine to a pharmacy for safe disposal. Do not flush down the toilet or throw in household trash.'
  },
  {
    id: 'amoxicillin-500mg',
    name: 'Amoxicillin',
    form: 'Capsule',
    strength: '500mg',
    purpose: 'Amoxicillin is an antibiotic used to treat a wide range of bacterial infections, including respiratory tract infections, ear infections, urinary tract infections, skin infections, and dental infections.',
    benefits: [
      'Broad-spectrum antibiotic coverage',
      'Effectively treats many bacterial infections',
      'Generally well-tolerated',
      'Can be taken with or without food',
      'Available in multiple forms for different needs'
    ],
    ingredients: ['Amoxicillin trihydrate equivalent to 500mg amoxicillin', 'Magnesium stearate', 'Gelatin capsule shell'],
    categories: ['Antibiotic', 'Penicillin'],
    conditions: [
      'Respiratory infections',
      'Ear infections',
      'Urinary tract infections',
      'Skin infections',
      'Dental infections',
      'Strep throat'
    ],
    warnings: [
      'Do not use if allergic to penicillin antibiotics',
      'Take the full course as prescribed, even if you feel better',
      'May reduce the effectiveness of hormonal contraceptives',
      'May cause diarrhea, which can be severe or persistent'
    ],
    sideEffects: {
      common: [
        'Diarrhea or loose stools',
        'Nausea or vomiting',
        'Stomach pain or discomfort',
        'Skin rash'
      ],
      serious: [
        'Severe allergic reaction (anaphylaxis)',
        'Severe skin reactions with blistering',
        'Severe, persistent diarrhea (possibly indicating C. difficile infection)',
        'Unusual bleeding or bruising',
        'Yellowing of skin or eyes (jaundice)'
      ]
    },
    overdoseEffects: 'Amoxicillin overdose may cause kidney problems, seizures, or severe gastrointestinal symptoms. Though generally not life-threatening, any suspected overdose should be treated as a medical emergency.',
    dosage: {
      description: 'Take at regular intervals, as prescribed by your doctor. Complete the full course of treatment.',
      ageGroups: [
        {
          group: 'Adults and children over 40kg',
          dosage: '500mg three times daily or as prescribed',
          notes: 'Higher doses may be prescribed for severe infections'
        },
        {
          group: 'Children 20-40kg',
          dosage: '250mg three times daily or as prescribed',
          notes: 'Dose adjusted based on age and weight'
        },
        {
          group: 'Children under 20kg',
          dosage: 'Determined by doctor based on weight'
        }
      ]
    },
    administration: 'Take with or without food at evenly spaced intervals throughout the day. Swallow capsules whole with water. Do not chew or crush.',
    storage: {
      temperature: 'Store below 25°C',
      instructions: 'Keep in the original container in a dry place. Once dispensed, use within 14 days.'
    },
    expiryDate: '2024-12-10',
    disposal: 'Return unused or expired antibiotics to a pharmacy for safe disposal. Do not flush down the toilet or throw in household trash.'
  }
];

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
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For demo purposes, return a random medicine ID
  const index = Math.floor(Math.random() * mockMedicines.length);
  return mockMedicines[index].id;
};

// Function to get medicine details
export const getMedicineDetails = async (id: string): Promise<Medicine> => {
  // Simulate API call delay
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

// Function to search medicines
export const searchMedicines = async (
  query: string, 
  filters?: { categories?: string[], forms?: string[] }
): Promise<Medicine[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const bookmarkedIds = getBookmarkedIds();
  
  let results = mockMedicines.filter(medicine => {
    const matchesQuery = medicine.name.toLowerCase().includes(query.toLowerCase()) ||
                         medicine.ingredients.some(ing => ing.toLowerCase().includes(query.toLowerCase())) ||
                         medicine.conditions.some(condition => condition.toLowerCase().includes(query.toLowerCase()));
    
    // Apply category filter if provided
    const matchesCategory = !filters?.categories?.length || 
                          medicine.categories.some(cat => 
                            filters.categories?.includes(cat));
    
    // Apply form filter if provided
    const matchesForm = !filters?.forms?.length || 
                        filters.forms.includes(medicine.form);
    
    return matchesQuery && matchesCategory && matchesForm;
  });
  
  // Add bookmark information
  results = results.map(medicine => ({
    ...medicine,
    isBookmarked: bookmarkedIds.includes(medicine.id)
  }));
  
  return results;
};

// Function to toggle bookmark status
export const toggleBookmark = async (id: string): Promise<boolean> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const bookmarkedIds = getBookmarkedIds();
  
  if (bookmarkedIds.includes(id)) {
    // Remove bookmark
    const updated = bookmarkedIds.filter(bookmarkId => bookmarkId !== id);
    saveBookmarkedIds(updated);
    return false;
  } else {
    // Add bookmark
    saveBookmarkedIds([...bookmarkedIds, id]);
    return true;
  }
};

// Function to get all bookmarked medicines
export const getBookmarkedMedicines = async (): Promise<Medicine[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const bookmarkedIds = getBookmarkedIds();
  
  return mockMedicines
    .filter(medicine => bookmarkedIds.includes(medicine.id))
    .map(medicine => ({
      ...medicine,
      isBookmarked: true
    }));
};