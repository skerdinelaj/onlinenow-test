import React from 'react'

export const InputResults = ({submit, state, value}) => {
  return (
    <div className="col-8">
          <div className="border border-1 border-dark p-4 rounded-2 shadow-lg">
            <div className="row">
              <div className="col-6">First name: {submit && state.name}</div>
              <div className="col-6">Last name: {submit && state.lastName}</div>
              <div className="col-12 pt-2">Email: {submit && state.email}</div>
              <div className="col-2 py-2">Hobbies:</div>
              {submit && (
                <ul className="list-group list-group-flush col-10">
                  {Array.isArray(value)
                    ? value.map((hobbie) => (
                        <li key={hobbie.label} className="list-group-item">
                          {hobbie.label}
                        </li>
                      ))
                    : ""}
                </ul>
              )}
            </div>
          </div>
        </div>
  )
}
