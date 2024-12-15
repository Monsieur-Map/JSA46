//function update data on UI
function updateUI(name, img, bio) {
  //get element from HTML
  const name_element = document.getElementById("pokemon_name");
  const img_element = document.getElementById("pokemon_img");
  const bio_element = document.getElementById("pokemon_bio");
  // update data
  name_element.textContent = name; //name.toUpperCase(); cho tất cả chữ được viết in hoa
  img_element.src = img;
  bio_element.innerText = bio; //Có truyền mã (vd <h1> bruh <h1>), thường là URL
}
//function search
function search_pokemon(pokemon_name) {
  //get input value với tham số pokemon_name
  //set root url
  const root_url = "https://pokeapi.co/api/v2/pokemon/"; //trang web chính cần truy cập dữ liệu
  //Call API;
  const promise = fetch(root_url + pokemon_name.toLowerCase(), {
    method: "GET",
  });
  //request server dể thực hiện search
  promise
    .then(function (json) {
      // console.log(json);
      //Chuyển kiểu json -> js
      return json.json();
    })
    .then(function (pokemonData) {
      //Lấy dữ liệu theo loại
      const name = pokemonData.name;
      const image = pokemonData.sprites.other["official-artwork"].front_default;
      const bio = `Weight: ${pokemonData.weight}`;
      //Để dữ liệu vào UI
      updateUI(name, image, bio);
    })
    .catch(function (error) {
      alert("This pokemon is not found");
    });
}
search_pokemon("Munchlax");
//bắt sự kiên cho button search
document
  .getElementById("search_btn")
  .addEventListener("click", function (event) {
    //Không cho website load theo mặc định
    event.preventDefualt();
    //Lấy dữ liệu từ input
    const pokemon_name = document.getElementById("search_inp").value.trim();
    //Nếu không có dữ liệu nhận được (SEARCH KHÔNG ĐÚNG TÊN POKEMON CẦN TÌM KIẾM)
    if (!pokemon_name) {
      alert("Vui lòng đăng nhập tên nhân vật");
    } else {
      search_pokemon(pokemon_name);
    }
  });
