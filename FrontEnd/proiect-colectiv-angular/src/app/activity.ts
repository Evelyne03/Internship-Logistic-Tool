import { Task } from "./task";

export interface Activity {
    id: number;
    name: string;
    description: string;
    team_id: number;
    tasks: Task[];
}
