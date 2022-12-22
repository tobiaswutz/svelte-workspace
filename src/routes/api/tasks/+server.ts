import type { Status, Task } from "./task"

export const GET = async () => {


    const tasks: { status: Status, tasks: Task[] }[] = [{ status: 'todo', tasks: [] }, { status: 'in-progress', tasks: [] }, { status: 'done', tasks: [] }]


    tasks.forEach((task) => {
        task.tasks.push({ id: '1', name: 'Task 1', description: 'Description 1' })
        task.tasks.push({ id: '2', name: 'Task 2', description: 'Description 2' })
        task.tasks.push({ id: '3', name: 'Task 3', description: 'Description 3' })
    })



    return new Response(JSON.stringify({ tasks: tasks }), { status: 200 })
}



