import React from "react";
import CreatableSelect from "react-select/creatable";

export const InputFields = ({
  handleSubmit,
  state,
  handleChange,
  submit,
  isEmailValid,
  options,
  setValue,
  handleCreate,
}) => {
  return (
    <div className="col-4">
      <div className="border border-1 border-dark p-4 rounded-2 shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="form-group pb-2">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={state.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pb-2 ">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              value={state.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group pb-2">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
            />
            {submit && !isEmailValid && (
              <div className=" text-danger">Please check your email</div>
            )}
          </div>
          <div className="form-group pb-4">
            <label htmlFor="inputEmail4">Hobbies</label>
            <CreatableSelect
              isMulti
              options={options}
              onChange={(newValue) => setValue(newValue)}
              onCreateOption={handleCreate}
            />
          </div>
          <button type="submit" className="btn btn-primary d-block m-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
