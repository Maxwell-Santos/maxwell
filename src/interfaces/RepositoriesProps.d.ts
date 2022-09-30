export interface ProjectProps {
  id: number;
  name: string;
  html_url: string;
  homepage?: string;
  languages_url: string;
}

export interface ProjectWithImageProps {
  id: number;
  name: string;
  html_url: string;
  homepage?: string;
  languages_url: string;
  img?: any;
}
