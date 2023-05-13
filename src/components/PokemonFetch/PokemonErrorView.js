import errorImage from './../error.jpg';

// Ожидаем какой то текст или сообщение ({ message })
//    <div role="alert">  это для читалок
// Рендерит дефолтную картинку   <img src={errorImage} width="240" alt="sadcat" />
//  и вставляет message
export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
}