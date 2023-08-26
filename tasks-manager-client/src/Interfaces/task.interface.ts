import { statusValues, priorityValues } from './task.enum'

export interface Task {
    _id: string,
    title: string,
    description?: string | null,
    status: statusValues,
    priority: priorityValues,
    createdAt: string,
    updatedAt: string,
    __v: number
}