describe('Группа тестов', () => {
    beforeEach(() => {
        function addBlockApp() {
            const body = document.querySelector('body');
            const app = document.createElement('div');

            app.setAttribute('id', 'app');

            body.innerHTML = app;
        }

        return addBlockApp();
    });

    test('Проверяем что div с id app добавлен на страницу в body', () => {
        expect(beforeEach).toMatchSnapshot();
    });

    afterAll(() => {
        function deleteBlockApp() {
            const body = document.querySelector('body');
            const app = document.createElement('div');

            app.setAttribute('id', 'app');

            body.innerHTML = app;

            app.remove();
        }

        return deleteBlockApp();
    });

    test('Проверяем что div с id app удален со страницы из body', () => {
        expect(afterAll).toMatchSnapshot();
    });
});

describe('Тест событий', () => {
    let clickHandler;

    beforeAll(() => {
        clickHandler = jest.fn();
        const body = document.querySelector('body');
        const btn = document.createElement('button');

        body.innerHTML = btn;

        btn.addEventListener('click', clickHandler);
        btn.click();
    });

    test('Проверка вызова собыития по клику', () => {
        expect(clickHandler).toHaveBeenCalled();
    });
});

describe('Loader Test', () => {
    beforeEach(() => {
        function showLoader() {
            const body = document.querySelector('body');
            const loader = document.createElement('div');

            loader.setAttribute('id', 'loader');

            body.innerHTML = loader;

            loader.style.display = 'block';
        }

        return showLoader();
    });

    test('Проверяем что loader на странице', () => {
        expect(beforeEach).toMatchSnapshot();
    });

    afterAll(() => {
        function hideLoader() {
            const body = document.querySelector('body');
            const loader = document.createElement('div');

            loader.setAttribute('id', 'loader');

            body.innerHTML = loader;

            loader.style.display = 'none';
        }

        return hideLoader();
    });

    test('Проверяем что loader не на странице', () => {
        expect(afterAll).toMatchSnapshot();
    });
});
