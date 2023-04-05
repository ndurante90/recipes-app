export type Recipe = {
   id: string;
   name?: string;
   category?: string;
   description?: string;
   creationDate?: Date;
   peopleNumber?: number;
   difficulty?: number;
   ingredients?: any;
   imagePath?: string;
}
