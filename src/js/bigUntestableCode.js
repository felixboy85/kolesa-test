import { getItemsRequest, toggleFavoriteRequest } from './requests';
import { showLoader, hideLoader } from './loader';
import { errorShow, errorHide } from './errorsShowHide';
import catchError from './catchError';

export default () => {
    errorHide();
    showLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                errorShow();
            } else {
                const appElement = document.querySelector('#app');

                appElement.innerHTML = data.html;
                appElement.style.display = 'block';

                Array.from(appElement.querySelector('button')).forEach((button) => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();

                        e.currentTarget.textContent = 'Загрузка...';

                        toggleFavoriteRequest(e.currentTarget.dataset.id)
                            .then(({ data: buttonData }) => {
                                if (buttonData.result === 'set') {
                                    e.currentTarget.textContent = '🌝';
                                } else {
                                    e.currentTarget.textContent = '🌚';
                                }
                            });
                    });
                });
            }
        })
        .catch((e) => {
            catchError(e);
        })
        .finally(() => {
            hideLoader();
        });
};
