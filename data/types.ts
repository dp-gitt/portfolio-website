export type Project = {
  id: string | number;
  title: string;
  description?: string; // Short summary for the card
  longDescription?: string; // Detailed text for the Modal
  imageUrl?: string[]; // Array of strings: ["/projects/a.png", "/projects/b.png"]
  tags?: string[]; 
  thumbnailUrl?: string,
  githubUrl?: string;
};