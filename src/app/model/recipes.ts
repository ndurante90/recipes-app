export type Recipe = {
   id: string;
   name?: string;
   category?: string;
   description?: string;
   creationDate?: Date;
   difficult?: number;
   imagePath?: string;
}