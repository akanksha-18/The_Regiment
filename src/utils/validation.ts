export const validateTaskForm = (values: {
    title: string;
    description: string;
    dueDate: string;
  }) => {
    const errors: Record<string, string> = {};
  
    if (!values.title.trim()) {
      errors.title = 'Title is required';
    }
  
    if (!values.description.trim()) {
      errors.description = 'Description is required';
    }
  
    if (!values.dueDate) {
      errors.dueDate = 'Due date is required';
    } else {
      const selectedDate = new Date(values.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
  
      if (selectedDate < today) {
        errors.dueDate = 'Due date cannot be in the past';
      }
    }
  
    return errors;
  };