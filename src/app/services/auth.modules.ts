export interface User {
    uid: string;
    name:string;
    email: string;
    orderedItems:object;
    phone?:number;
    photoURL?: string;
    displayName?: string;
}