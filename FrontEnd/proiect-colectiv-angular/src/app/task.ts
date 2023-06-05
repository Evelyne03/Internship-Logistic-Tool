export interface Task {
    id: number;
    name: string;
    description: string;
    iCompleted: boolean;
    activityId: number;
    userId: number;
}
