"use client";

import { useState } from 'react';

// Assume the Python functions are available somehow (e.g., via an API)
// For this example, let's mock them
const count_nucleotides = async (dna: string): Promise<{[key: string]: number}> => {
  // In a real scenario, this would call the Python backend
  console.log("Mock calling count_nucleotides with:", dna);
  const counts: {[key: string]: number} = {'A': 0, 'C': 0, 'G': 0, 'T': 0};
  for (const nucleotide of dna.toUpperCase()) {
    if (nucleotide in counts) {
      counts[nucleotide]++;
    }
  }
  return counts;
};

const dna_to_rna = async (dna: string): Promise<string> => {
  // In a real scenario, this would call the Python backend
  console.log("Mock calling dna_to_rna with:", dna);
  return dna.toUpperCase().replace(/T/g, 'U');
};


export default function DnaPage() {
  const [dnaInput, setDnaInput] = useState<string>('');
  const [nucleotideCounts, setNucleotideCounts] = useState<{[key: string]: number} | null>(null);
  const [rnaOutput, setRnaOutput] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleCountNucleotides = async () => {
    setError('');
    if (!dnaInput.match(/^[ACGTacgt]*$/)) {
      setError("Invalid DNA sequence. Only A, C, G, T are allowed.");
      setNucleotideCounts(null);
      return;
    }
    try {
      const result = await count_nucleotides(dnaInput);
      setNucleotideCounts(result);
    } catch (err) {
      setError("Error counting nucleotides.");
      console.error(err);
    }
  };

  const handleDnaToRna = async () => {
    setError('');
    if (!dnaInput.match(/^[ACGTacgt]*$/)) {
      setError("Invalid DNA sequence. Only A, C, G, T are allowed.");
      setRnaOutput('');
      return;
    }
    try {
      const result = await dna_to_rna(dnaInput);
      setRnaOutput(result);
    } catch (err) {
      setError("Error converting DNA to RNA.");
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Meu DNA</h1>

      <div className="mb-6">
        <label htmlFor="dnaInput" className="block text-sm font-medium text-gray-700 mb-1">
          Enter DNA Sequence:
        </label>
        <input
          type="text"
          id="dnaInput"
          value={dnaInput}
          onChange={(e) => setDnaInput(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="e.g., AGCTTAG"
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button
          onClick={handleCountNucleotides}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Count Nucleotides
        </button>
        <button
          onClick={handleDnaToRna}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert DNA to RNA
        </button>
      </div>

      {nucleotideCounts && (
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Nucleotide Counts:</h2>
          <pre className="bg-white p-2 rounded">{JSON.stringify(nucleotideCounts, null, 2)}</pre>
        </div>
      )}

      {rnaOutput && (
        <div className="bg-gray-100 p-4 rounded-md mt-4">
          <h2 className="text-lg font-semibold mb-2">RNA Output:</h2>
          <p className="bg-white p-2 rounded break-all">{rnaOutput}</p>
        </div>
      )}
    </div>
  );
}
