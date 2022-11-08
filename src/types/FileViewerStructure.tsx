export default interface fileViewerStructure {
    id:string;
    name:string;
    extension?:string;
    children?:fileViewerStructure[]
}