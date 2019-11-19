let state = {
    lists: ["list 1", "list 2", "list 3","list 4"],
    tasks: []
}

for(let i = 0; i < 5; i++){
    state.tasks.push({
        id: "task " + i,
        title: "test task " + i,
        "listId": "list 1"
    })
}

export default state