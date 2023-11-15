import { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Post {
  _id: string;
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  content?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}
