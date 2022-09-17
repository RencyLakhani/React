import React from 'react'

function alert(props) {
    return (
        props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong></strong>{props.alert.msg}
            </div>
        </div>
    )
}

export default alert

