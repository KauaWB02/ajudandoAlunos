const validateGraduationFields = (request, response, next) => {
    const { body } = request;
  
    if (body.name === undefined) {
      return response.status(400).json({ message: 'The field "name" is required' });
    }

    if (body.name === '') {
        return response.status(400).json({ message: 'The field "name" cannot be empty' });
    }

    if (body.description === undefined) {
        return response.status(400).json({ message: 'The field "description" is required' });
    }
  
    if (body.description === '') {
      return response.status(400).json({ message: 'description cannot be empty' });
    }

    if (body.created_at === undefined) {
        return response.status(400).json({ message: 'The field "created_at" is required' });
    }

    if (body.created_at === '') {
        return response.status(400).json({ message: 'created_at cannot be empty' });
    }
  
    next();
};

module.exports = {
    validateGraduationFields
};