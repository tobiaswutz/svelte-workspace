export const load = ({ fetch }: { fetch: any }) => {

    const fetchTasks = async () => {
        const res = await fetch('/api/tasks')
        const data = await res.json()
        return data.tasks
    }

    return {
        tasks: fetchTasks()
    }
}