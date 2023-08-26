import { statusValues, priorityValues } from './task.enum'

export interface Task {
    _id: string,
    title: string,
    description: string,
    status: statusValues,
    priority: priorityValues,
    createdAt: string,
    updatedAt: string,
}

export interface MappedTask {
    id: string,
    title: string,
    description: string,
    status: statusValues,
    priority: priorityValues,
    createdAt: string,
    updatedAt: string,
}