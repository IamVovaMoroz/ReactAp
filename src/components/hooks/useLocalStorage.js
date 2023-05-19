import {useState, useEffect} from "react"

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      // Передаем ленивую загрузку записи из локального хранилища в состояние.
      // Используем оператор nullish coalescing (??) для проверки наличия записи в хранилище.
      // Если запись отсутствует, возвращаем defaultValue.
      return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });
  
    // Функция будет использовать useEffect для записи состояния в локальное хранилище
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
      // Зависимостью для useEffect является состояние state, чтобы реагировать на его изменения.
    }, [key, state]);
  
    // Возвращаем состояние и функцию для его обновления
    return [state, setState];
  };

  export default useLocalStorage