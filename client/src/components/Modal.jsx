import React from 'react'

function Modal({idName, title, buttonTitle}) {
  return (
    <div className="modal fade text-black" id={idName} tabIndex="-1"
      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-0">
          <div className="modal-header d-flex w-100">

            <div className="d-flex w-50 justify-content-start">
              <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
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
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter new task title" />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button onClick={(event) => submitEdit(event)} type="button" className="btn btn-primary">Add</button>
            </div>
            {/* <label type="text" value="Title" />
                      <input onChange={(event) => setTitle(event.target.value)} type="text" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal