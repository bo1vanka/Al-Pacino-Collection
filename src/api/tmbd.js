const api_key = "86e61ed67f1db6a4bd295adb5b1fda0e";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ru-RU`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка при получении данных: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    if (data.results && data.results.length > 0) {
      data.results.forEach((movie) => {
        console.log(movie.title);
      });
    } else {
      console.log("Нет популярных фильмов");
    }
  })
  .catch((error) => console.error("Ошибка:", error));
