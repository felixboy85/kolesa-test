export const errorShow = () => {
    const errorElement = document.querySelector('#error');

    errorElement.innerHTML = 'Произошла ошибка, попробуйте ещё раз.';
    errorElement.style.display = 'block';
};

export const errorHide = () => {
    document.querySelector('#error').style.display = 'none';
};
