const catchError = (e) => {
    const errorElement = document.querySelector('#error');

    errorElement.innerHTML = e.message;
    errorElement.style.display = 'block';
};

export default catchError;
