import unittest
from .dna import count_nucleotides, dna_to_rna

class TestDna(unittest.TestCase):

    def test_count_nucleotides(self):
        self.assertEqual(count_nucleotides("AGCT"), {'A': 1, 'G': 1, 'C': 1, 'T': 1})
        self.assertEqual(count_nucleotides("AAAA"), {'A': 4, 'G': 0, 'C': 0, 'T': 0})
        self.assertEqual(count_nucleotides(""), {'A': 0, 'G': 0, 'C': 0, 'T': 0})
        self.assertEqual(count_nucleotides("AGCTX"), {'A': 1, 'G': 1, 'C': 1, 'T': 1}) # X is not a nucleotide

    def test_dna_to_rna(self):
        self.assertEqual(dna_to_rna("GATTACA"), "GAUUACA")
        self.assertEqual(dna_to_rna(""), "")
        self.assertEqual(dna_to_rna("AGCT"), "AGCU")

if __name__ == '__main__':
    unittest.main()
