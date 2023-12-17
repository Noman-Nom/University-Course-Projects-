const Validation = (values) => {
//   console.log( "values = ", values)
  let error = {};

  const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const password_pattern = /^(?=.*[a-zA-Z]).{6,}$/;

  if (values.name === "") {
    error.name = "name Should not be empty";
  
  } else {
    error.name = "";
  }


  if (values.email === "") {
    error.email = "Email Should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't Match";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.password = "password Should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = " Password Didn't Match";
  } else {
    error.password = "";
  }

  return error;
};

export default Validation;
