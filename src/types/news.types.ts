export interface IPostList {
  author: string;
  comment_text: string;
  created_at: string;
  num_comments: string | null;
  objectID: string;
  points: number | null;
  story_id: number;
  story_text: string | null;
  story_title: string;
  story_url: string;
  title: string | null;
  url: string | null;
  _highlightResult: any;
  _tags: any[];
  isFav?: boolean;
}