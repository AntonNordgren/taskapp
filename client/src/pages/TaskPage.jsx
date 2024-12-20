import React, { useState, useEffect } from 'react'

function TaskPage() {

  const [tasks, setTasks] = useState([
    { id: 0, title: "Study", done: false },
    { id: 1, title: "Cleaning", done: false },
  ])
  const [modalTitle, setModalTitle] = useState("")
  const [title, setTitle] = useState("")
  const [addTitle, setAddTitle] = useState("")
  const [currentDelete, setCurrentDelete] = useState(null)
  const [currentEdit, setCurrentEdit] = useState(null)
  const [currentTask, setCurrentTask] = useState(null)

  const [editTitle, setEditTitle] = useState("")

  useEffect(() => {
    console.log('Use Effect')

  }, [tasks])

  const handleEdit = (event, task) => {

    console.log("task id", task.id)

    setModalTitle(task.title)

    setCurrentEdit(task.id)

    setCurrentTask(task)

  }

  const handleAdd = (event) => {

    console.log('HandleAdd')

    console.log(addTitle)

    if(addTitle !== "") {
      setTasks([
        ...tasks,
        {id: tasks.length, title: addTitle, done: false}
      ])
    }
  }

  const handleDelete = (event, task) => {
    console.log('Handle Delete')
    console.log(task)

    setCurrentDelete(task.id)
  }

  const confirmDelete = () => {

    console.log(currentDelete)

    const newArray = tasks.filter(x => x.id !== currentDelete)

    console.log(newArray)

    setTasks(newArray)

  }

  const submitEdit = (event, task) => {

    console.log(currentTask)

    currentTask.title = editTitle

    let tasksCopy = [...tasks]

    // tasksCopy[currentTask.id].title = editTitle

    tasksCopy.splice(currentTask.id, 1, {id: currentTask.id, title: editTitle, done: false})

    console.log(tasksCopy)

    setTasks([
      ...tasksCopy
    ])

  }

  return (
    <div className="taskpage">
      <div className="task-div m-auto">

        <div className="m-auto">
          <div className="d-flex flex-row mt-3 mb-3">
            <div className="w-50 d-flex justify-content-start mx-3">
              <h3 className="text-start m-0">Your tasks</h3>
            </div>
            <div className="w-50 d-flex justify-content-end mx-3">

              {tasks.length !== 0 ? 
                <button className="custom-button custom-button-green" data-toggle="modal" data-target="#add-modal">Add</button>
              : null}

              <div className="modal fade text-black" id="add-modal" tabIndex="-1"
                role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content rounded-0">
                    <div className="modal-header d-flex w-100">

                      <div className="d-flex w-50 justify-content-start">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
                      </div>
                      <div className="d-flex w-50 justify-content-end">
                        <button type="button" className="custom-button
                              custom-button-red px-3 justify-content-end"
                          data-dismiss="modal" aria-label="Close">X</button>
                      </div>

                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label for="exampleInputPassword1">Title</label>
                        <input onChange={(event) => setAddTitle(event.target.value)} type="text" className="form-control" id="exampleInputPassword1"
                        placeholder="Enter new task title" />
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <button onClick={(event) => handleAdd(event)} data-dismiss="modal" type="button" className="btn btn-primary">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <table class="table table-dark m-auto">
            <tbody>

              {tasks.length !== 0 ? tasks.map(task => (
                <tr key={task.id} className="h-100 align-items-center">
                  <td className="h-100 d-flex w-100 p-3">

                    <div className="d-flex w-50 justify-content-start">
                      <span className="align-middle h-100 my-1 mx-2">{task.title}</span>

                    </div>

                    <div className="d-flex w-50 justify-content-end">
                      <button type="button" onClick={(event) => handleDelete(event, task)}
                        className="custom-button mx-2" data-toggle="modal" data-target="#delete-modal">
                        Delete
                      </button>
                      <button type="button" onClick={(event) => handleEdit(event, task)}
                        className="custom-button" data-toggle="modal" data-target="#edit-modal">
                        Edit
                      </button>
                    </div>

                    <div className="modal fade text-black" id="delete-modal" tabIndex="-1"
                      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-0">
                          <div className="modal-header d-flex w-100">

                            <div className="d-flex w-75 justify-content-start">
                              <h5 className="modal-title" id="exampleModalLabel">Delete {modalTitle}?</h5>
                            </div>
                            <div className="d-flex w-50 justify-content-end">
                              <button type="button" className="custom-button mx-2
                              custom-button-red px-3 justify-content-end"
                                data-dismiss="modal" aria-label="Close">No</button>
                              <button onClick={(event) => confirmDelete(event)}
                              type="button" className="btn btn-primary " data-dismiss="modal" aria-label="Close">Yes</button>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal fade text-black" id="edit-modal" tabIndex="-1"
                      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-0">
                          <div className="modal-header d-flex w-100">

                            <div className="d-flex w-50 justify-content-start">
                              <h5 className="modal-title" id="exampleModalLabel">Editing: {modalTitle}</h5>
                            </div>
                            <div className="d-flex w-50 justify-content-end">
                              <button type="button" className="custom-button
                              custom-button-red px-3 justify-content-end"
                                data-dismiss="modal" aria-label="Close">X</button>
                            </div>

                          </div>
                          <div className="modal-body">
                            <div className="form-group">
                              <label for="exampleInputPassword1">Title</label>
                              <input onChange={(event) => setEditTitle(event.target.value)}
                              type="text" className="form-control" id="exampleInputPassword1" placeholder="Edit title" />
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                              <button onClick={(event) => submitEdit(event, task)} type="button" className="btn btn-primary"
                              data-dismiss="modal" aria-label="Close">Edit</button>
                            </div>
                            {/* <label type="text" value="Title" />
                      <input onChange={(event) => setTitle(event.target.value)} type="text" /> */}
                          </div>
                        </div>
                      </div>
                    </div>

                  </td>
                </tr>

              )) :
              <>
                <div className="d-flex justify-content-center">
                  <button className="custom-button custom-button-green" data-toggle="modal" data-target="#add-modal">Add</button>
                </div>
              </>
              }
            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default TaskPage