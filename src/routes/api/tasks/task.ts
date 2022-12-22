export type Status = 'todo' | 'in-progress' | 'done'

export interface Task {
    id: string
    name: string
    description: string
}