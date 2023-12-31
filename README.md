# form-vk-and-smiles

<summary>Форма содержит следующие элементы:</summary>

- выпадающий список с выбором башни (А или Б)
- выпадающий список с выбором этажа (с 1 по 10)
- выпадающий список с выбором переговорки. На каждом этаже 10 переговорок
- выбор даты и интервала времени 
- поле ввода комментария
- смайлики
- кнопка "Отправить" (по нажатию - выводить в консоль данные формы в виде json)
- кнопка "Очистить" (по нажатию очищает форму)



![alt text](https://github.com/AskarSaliakhov/form-vk-and-smiles/blob/main/screenshots/screen1.png)
![alt text](https://github.com/AskarSaliakhov/form-vk-and-smiles/blob/main/screenshots/screen2.png)
![alt text](https://github.com/AskarSaliakhov/form-vk-and-smiles/blob/main/screenshots/screen3.png)
![alt text](https://github.com/AskarSaliakhov/form-vk-and-smiles/blob/main/screenshots/screen4.png)
![alt text](https://github.com/AskarSaliakhov/form-vk-and-smiles/blob/main/screenshots/screen5.png)
![alt text](https://github.com/AskarSaliakhov/form-vk-and-smiles/blob/main/screenshots/screen6.png)
![alt text](https://github.com/AskarSaliakhov/form-vk-and-smiles/blob/main/screenshots/screen7.png)
![alt text](https://github.com/AskarSaliakhov/form-vk-and-smiles/blob/main/screenshots/screen8.png)
![alt text](https://github.com/AskarSaliakhov/form-vk-and-smiles/blob/main/screenshots/screen9.png)


# Особенности
- При нажатии на смайлик в комментарии ввода справа открывается выпадающий интерфейс выбора смайлика для вставки в поле комментария
- Можно выделить часть текста и заменить на выбранный смайлик
- Можно вставить смайлик на любую позиции в комментарии
- Если не выбраны обязательные элементы (этаж, переговорная комната, дата и время), то не заполненные элементы подсветятся красным
- Время начала встречи всегда раньше времени окончания, нельзя назначить время на прошлую дату

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
