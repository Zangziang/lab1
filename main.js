// Dữ liệu trận đấu
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard', 'Lucas', 'Hernandez', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
  
// 1. Tạo ra mảng cầu thủ cho mỗi đội
const [players1, players2] = game.players;

// 2. Phân chia Thủ môn và các cầu thủ khác
const [gk, ...fieldPlayers] = players1;

// 3. Tạo mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ
const allPlayers = [...players1, ...players2];

// 4. Tạo mảng 'players1Final' với cầu thủ ban đầu và thêm 3 cầu thủ thay người
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Tạo biến tỉ lệ kết quả trận đấu
const { team1, x: draw, team2 } = game.odds;

// 6. Viết hàm 'printGoals' in ra tên cầu thủ và số bàn thắng
const printGoals = function (...players) {
  players.forEach((player, i) => console.log(`Goal ${i + 1}: ${player}`));
};

// 7. In ra đội chiến thắng mà không sử dụng if/else hoặc toán tử 3 ngôi
game.odds.team1 < game.odds.team2 && console.log(`${game.team1} chiến thắng!`);
game.odds.team1 > game.odds.team2 && console.log(`${game.team2} chiến thắng!`);
// 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi
game.scored.forEach((player, i) => console.log(`Goal ${i + 1}: ${player}`));

// 2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
const average = sum / Object.values(game.odds).length;
console.log(`Trung bình tỉ lệ: ${average}`);

// 3. In ra console tỉ lệ cược theo định dạng yêu cầu
for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = game[team];
  console.log(`Tỉ lệ thắng của ${teamName}: ${odd}`);
}

// Thêm: Tạo đối tượng 'scorers'
const scorers = {};
game.scored.forEach(player => {
  scorers[player] = (scorers[player] || 0) + 1;
});
console.log(scorers);

