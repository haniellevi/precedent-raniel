def count_nucleotides(dna_string):
    """
    Counts the frequency of each nucleotide in a DNA string.

    Args:
        dna_string: A string representing the DNA sequence.

    Returns:
        A dictionary where keys are nucleotides ('A', 'C', 'G', 'T')
        and values are their respective counts.
    """
    counts = {'A': 0, 'C': 0, 'G': 0, 'T': 0}
    for nucleotide in dna_string:
        if nucleotide in counts:
            counts[nucleotide] += 1
    return counts

def dna_to_rna(dna_string):
    """
    Transcribes a DNA string into an RNA string.

    Args:
        dna_string: A string representing the DNA sequence.

    Returns:
        A string representing the RNA sequence, where 'T' is replaced by 'U'.
    """
    return dna_string.replace('T', 'U')
