export interface Note{
    id:number;
    title:string;
    content:string;
    pinned: boolean;
    lastModified:string;
    tags:string[];
}