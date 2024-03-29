const validation = (error) => {
  const errors = {};

  if (error.name.length < 2) {
    errors.name = "Minimum two characters";
  }
  if (error.name.length > 20) {
    errors.name = "Maximum 20 characters";
  }
  if (/[^a-zA-Z0-9\s]+/.test(error.name)) {
    errors.name = "Invalid characters";
  }

  if (!/^(http|https):\/\/[^ "]+$/.test(error.background_image)) {
    errors.background_image = "The image is not a valid URL";
  }

  if (!/^[a-zA-Z,\s]*$/.test(error.description)) {
    errors.description = "The description is invalid";
  }
  if (error.description.length < 10) {
    errors.description = "The description is very short";
  }

  if (error.description.length > 120) {
    errors.description = "Description should be less than or equal to 120 characters";
  }

  if (!/^(1(\.0)?|[2-4](\.\d+)?|5(\.0)?)$/.test(error.rating)) {
    errors.rating = "Must be decimal between 1-5";
  }

  if (error.platforms.length < 1) {
    errors.platforms = "Select an option";
  }

  if (error.released) {
    const currentDate = new Date();
    const selectedDate = new Date(error.released);
    if (selectedDate > currentDate) {
      errors.released = "The release date cannot be in the future";
    }
  }

  if (error.genres.length < 1) {
    errors.genres = "Minimun one genres";
  }

  // Verificar si existen errores
  const existErrors = Object.keys(errors).length > 0;

  return { existErrors, errors };
};

export default validation;
