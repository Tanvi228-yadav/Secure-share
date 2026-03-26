// Sample data for testing

const sampleData = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      role: 'admin',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'doctor',
      email: 'jane.smith@example.com'
    },
    {
      id: 3,
      name: 'Sam Wilson',
      role: 'nurse',
      email: 'sam.wilson@example.com'
    },
    {
      id: 4,
      name: 'Emily Johnson',
      role: 'patient',
      email: 'emily.johnson@example.com'
    }
  ],
  medicalFiles: [
    {
      id: 1,
      userId: 4,
      fileName: 'emily_medical_history.pdf',
      createdAt: '2026-01-15T08:00:00Z'
    },
    {
      id: 2,
      userId: 4,
      fileName: 'emily_lab_results.png',
      createdAt: '2026-01-20T09:30:00Z'
    }
  ],
  sharedLinks: [
    {
      id: 1,
      fileId: 1,
      sharedWith: [2, 3],
      expiresAt: '2026-12-15T00:00:00Z'
    },
    {
      id: 2,
      fileId: 2,
      sharedWith: [2],
      expiresAt: '2026-06-20T00:00:00Z'
    }
  ],
  accessLogs: [
    {
      id: 1,
      userId: 2,
      fileId: 1,
      accessedAt: '2026-01-16T10:00:00Z'
    },
    {
      id: 2,
      userId: 3,
      fileId: 1,
      accessedAt: '2026-01-17T11:15:00Z'
    },
    {
      id: 3,
      userId: 4,
      fileId: 1,
      accessedAt: '2026-01-18T12:30:00Z'
    }
  ]
};

export default sampleData;