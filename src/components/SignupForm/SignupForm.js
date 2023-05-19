// import useLocalStorage from '../../hooks/useLocalStorage';


// export default function SignupForm() {
//   const [email, setEmail] = useLocalStorage('email', '');
//   const [password, setPassword] = useLocalStorage('password', '');



//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;

//       case 'password':
//         setPassword(value);
//         break;

//       default:
//         return;
//     }
//   };

//   return (
//     <form className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span>Почта</span>
//         <input
//           type="email"
//           name="email"
//           onChange={handleChange}
//           value={email}
//         />
//       </label>

//       <label className={styles.label}>
//         <span>Пароль</span>
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </label>

//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// }
import styles from './SignupForm.module.css';
import useLocalStorage from "../hooks/useLocalStorage"
//1) для работы с хуками импортируем их из реакта: import {useState} from "react"
import {useEffect, useState} from "react"
export default function SignupForm() {


    // Запись из локал сторедж в инпут формы

    // Обьявляем State перед return. const [email, ...] первый элемент  email деструктуризируем с массива, первоначальное значение ставил с LOcalStorage, или пустую строку

// const [email, setEmail] = useState(()=>  JSON.parse(window.localStorage.getItem('email')) ?? "")

// const [email, setEmail] = useState(()=>{ return JSON.parse(window.localStorage.getItem('email')) ?? ""})  тоже самое, ленивая инициализация только 1 раз при первом ренедере. Не будет обращения каждый раз к локал сторадж. Функция + ссылка на функцию
// отдельный хук для каждого св-ва

// const [password, setPassword] =  useState(()=>{ return JSON.parse(window.localStorage.getItem('password')) ?? ""})

// Делаем 1 функцию для записи в локал сторедж и с локал сторедж в инпут
// передаём дефолтное значение ключ (email, password)

// принимает useLocalStorage key(email, password) и value - значение которое будем получать из инпут и записывать в инпут с локал сторедж
// const useLocalStorage = (key, defaultValue) => {
//     const [state, setState] = useState(() => {
//       // Передаем ленивую загрузку записи из локального хранилища в состояние.
//       // Используем оператор nullish coalescing (??) для проверки наличия записи в хранилище.
//       // Если запись отсутствует, возвращаем defaultValue.
//       return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//     });
  
//     // Функция будет использовать useEffect для записи состояния в локальное хранилище
//     useEffect(() => {
//       window.localStorage.setItem(key, JSON.stringify(state));
//       // Зависимостью для useEffect является состояние state, чтобы реагировать на его изменения.
//     }, [key, state]);
  
//     // Возвращаем состояние и функцию для его обновления
//     return [state, setState];
//   };


// const [email, setEmail] = useState(()=>  JSON.parse(window.localStorage.getItem('email')) ?? "")
const [email, setEmail] = useLocalStorage("email", "")

// const [password, setPassword] =  useState(()=>{ return JSON.parse(window.localStorage.getItem('password')) ?? ""})
const [password, setPassword] =  useLocalStorage("password", "")

// Добавляем хуки на счётчик изменений 
const [emailChangeCount, setEmailChangeCount] = useState(0);
const [passwordChangeCount, setPasswordChangeCount] = useState(0);

// Делаем 1 handleChange для всех элементов инпут формы 

 const handleChange = event => {
    const {name, value} = event.target;
   console.log(name)
// в switch приходит event.target.name. В зависимости от того какой case 'email'или  case 'password':, записываем 
    switch (name) {
      case 'email':
        setEmail(value);
        setEmailChangeCount((prevCount) => prevCount + 1);
        break;

      case 'password':
        setPassword(value);
        setPasswordChangeCount((prevCount) => prevCount + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    console.log('вызываем useEffect');
    // console.log('Количество изменений email:', emailChangeCount);
    // console.log('Количество изменений password:', passwordChangeCount);
    const TotalChanges = emailChangeCount + passwordChangeCount
    // console.log(`Всего Changes ${TotalChanges}`)
  }, [email, password, emailChangeCount, passwordChangeCount]);



//   запись в локал сторедж
//   useEffect(() => {
//     console.log("добавляем в локао сторедж email")
//     window.localStorage.setItem("email", JSON.stringify(email))
//   },[email])

//   useEffect(() => {
//     console.log("добавляем в локао сторедж password")
//     window.localStorage.setItem("password", JSON.stringify(password))
//   },[password])


    return (
      <form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <span>Почта</span>
          <input
            type="email"
            name="email"

        //   функция внутри функции это локальная переменная значения state. Задает значение или принимает значение с input
            onChange={handleChange }
      


         
            value={email}
           
          />
        </label>

<label className={styles.label}>
  <span>Пароль</span>
  <input
    type="password"
    name="password"
    onChange={handleChange }
    value={password}
  />
</label> 

        <button type="submit">Зарегистрироваться</button>
      </form>
    );

}