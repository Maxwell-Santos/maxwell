export interface ProjectProps {
  id: number;
  name: string;
  html_url: string;
  homepage?: string;
  languages_url: string;
  type: "mobile-first" | "web";
}

export interface ProjectWithImageProps extends ProjectProps{
  img?: any;
}
