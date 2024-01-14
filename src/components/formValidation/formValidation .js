function formValidation(component) {
  if (component.value && component.classList) {
      if (component.value.trim()) {
          component.classList.remove("required");
      } else {
          component.classList.add("required");
      }
  } else {
      console.error("Invalid component object. Make sure it has 'value' and 'classList' properties.");
  }
}

export default formValidation;
