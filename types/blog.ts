export interface BlogMetadata {
    title: string;
    date: string;
    category: string;
    summary: string;
    image: string;
  }
  
  export interface BlogPost {
    metadata: BlogMetadata;
    slug: string;
    content: string;
  }