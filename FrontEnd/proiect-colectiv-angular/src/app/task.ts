import { Grade } from "./grade";

export interface Task {
    id: number;
    name: string;
    description: string;
    isCompleted: boolean;
    activity: number;
    studentId: number;

    //to resolve
    grade: number;
    feedback: string;
}
