// 1. Khai báo thông tin thẻ
const cards = [
    { name: "cat", img: "https://via.placeholder.com/100?text=Cat" },
    { name: "dog", img: "https://via.placeholder.com/100?text=Dog" },
    { name: "fish", img: "https://via.placeholder.com/100?text=Fish" },
    { name: "bird", img: "https://via.placeholder.com/100?text=Bird" },
    { name: "cat", img: "https://via.placeholder.com/100?text=Cat" },
    { name: "dog", img: "https://via.placeholder.com/100?text=Dog" },
    { name: "fish", img: "https://via.placeholder.com/100?text=Fish" },
    { name: "bird", img: "https://via.placeholder.com/100?text=Bird" }
  ];
  
  // Tạo biến
  let shuffledCards = [];
  let firstCard = null;
  let secondCard = null;
  let score = 0;
  
  // Sắp xếp thẻ (dùng hàm Math.random)
  function shuffleCards() {
    shuffledCards = cards.sort(() => Math.random() - 0.5);
  }
  
  // Tạo một bảng chứa thẻ
  function createBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';  // Xóa nội dung cũ
    shuffledCards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.name = card.name;
  
      const cardImage = document.createElement('img');
      cardImage.src = card.img;
      cardElement.appendChild(cardImage);
  
      cardElement.addEventListener('click', () => flipCard(cardElement));
      gameBoard.appendChild(cardElement);
    });
  }
  
  // 5. Lật thẻ khi người dùng click
  function flipCard(card) {
    if (firstCard && secondCard) return;  // Chỉ xử lý nếu chưa chọn 2 thẻ
    if (card.classList.contains('flipped')) 
        return; 
        
        card.classList.add('flipped');
  
    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      checkMatch();
    }
  }
  
  // 6. Kiểm tra nếu 2 thẻ giống nhau
  function checkMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  
    if (isMatch) {
      setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';
        resetTurn();
        updateScore();
      }, 500);  // Delay khi xóa thẻ
    } else {
        alert("Nước đi tồi quá!")//Cảnh báo đã làm sai
      setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetTurn();
      }, 1000);  // Delay khi lật lại thẻ
    }
  }
  
  // 7. Reset lượt chơi
  function resetTurn() {
    firstCard = null;
    secondCard = null;
  }
  
  // 8. Cập nhật điểm số
  function updateScore() {
    score += 1;
    document.getElementById('score').textContent = score;
  }
  
  // Khởi tạo trò chơi
  function newGame() {
    shuffleCards();
    createBoard();
  }
  
  // Reset trò chơi
  document.getElementById('reset-btn').addEventListener('click', () => {
    score = 0;
    document.getElementById('score').textContent = score;
    newGame();
  });
  
  // Bắt đầu trò chơi khi tải trang

  newGame();
  