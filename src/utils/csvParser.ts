import Papa from 'papaparse';

export interface CSVProduct {
  href: string;
  src: string;
  title: string;
  caption: string;
  captionHref: string;
  price: string;
  loadedSrc?: string;
}

export const parseProductCSV = async (csvPath: string): Promise<CSVProduct[]> => {
  try {
    const response = await fetch(csvPath);
    const csvText = await response.text();
    
    const result = Papa.parse<any>(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    return result.data.map((row: any) => ({
      href: row['block href'] || '',
      src: row['block src'] || row['loaded src'] || '',
      title: row['product-card__title'] || '',
      caption: row['caption'] || '',
      captionHref: row['caption href'] || '',
      price: row['price__regular'] || '',
      loadedSrc: row['loaded src'] || row['block src'] || '',
    }));
  } catch (error) {
    console.error('Error parsing CSV:', error);
    return [];
  }
};
