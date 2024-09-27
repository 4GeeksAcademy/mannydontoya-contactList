import React from "react";
export const Modal = (props) => {
return (
    <div className="modal" tabIndex="-1" role="dialog" style={{display: (props.show) ? 'inline-block' : 'none'}}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Are you sure?</h5>
                    { (props.onClose) ?
                        <button onClick={() => props.onClose()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        :''
                    }
                </div>
                <div className="modal-body">
                    <p>If you delete this thing the entire universe will go down!</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Oh no!</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Yes baby!</button>
                </div>
            </div>
        </div>
    </div>
);
}