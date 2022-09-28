<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tic Tac Toe</title>
    
    <style type="text/css">
    	body {
		  margin: 0;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		}

		.game {
		  width: 100vw;
		  height: 100vw;
		  margin: 0 auto;
		  background-color: #34495e;
		  color: #fff;
		  display: grid;
		  grid-template: repeat(3, 1fr) / repeat(3, 1fr)
		}

		.game>div {
		  border: 6px solid #2c3e50;
		  font-family: Helvetica;
		  font-weight: bold;
		  font-size: 4em;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		}

		.btn {
		  border: 5px solid #2c3e50;
		  background-color: #34495e;
		  color: white;
		  margin-top: 10px;
		  padding: 10px 20px
		}

		.game > div.winner {
		  background: yellow;
		}

		.game > div.winner > span {
		  color: blue;
		}

		@media (min-width: 600px) {
		  .game {
		    width: 600px;
		    height: 600px;
		    border-radius: 10px;
		    border: 6px solid #2c3e50;
		  }

		  .game>div {
		    border-radius: 2px;
		  }
		}

		@media (min-width: 1024px) {
		  .btn {
		    cursor: pointer
		  }
		}
    </style>
</head>
	<body>
	    
	    <div class='game'></div>
	    <button class="btn" 
	    		onclick="tic_tac_toe.restart()" 
	    		title="Restart this game">Restart</button>

		<script type="text/javascript">
			// TIC TAC TOE
			const tic_tac_toe = {

			    // ATTRIBUTES
			    board: ['','','','','','','','',''],
			    symbols: {
			                options: ['O','X'],
			                turn_index: 0,
			                change(){
			                    this.turn_index = ( this.turn_index === 0 ? 1:0 );
			                }
			            },
			    container_element: null,
			    gameover: false,
			    winning_sequences: [
			                        [0,1,2],
			                        [3,4,5],
			                        [6,7,8],
			                        [0,3,6],
			                        [1,4,7],
			                        [2,5,8],
			                        [0,4,8],
			                        [2,4,6]
			                    ],

			    // FUNCTIONS
			    init(container) {
			        this.container_element = container;
			    },

			    make_play(position) {
			        if (this.gameover || this.board[position] !== '') return false;

			        const currentSymbol = this.symbols.options[this.symbols.turn_index];
			        this.board[position] = currentSymbol;
			        this.draw();

			        const winning_sequences_index = this.check_winning_sequences(currentSymbol);
			        if (this.is_game_over()){
			            this.game_is_over();
			        }
			        if (winning_sequences_index >= 0) {
			            this.game_is_over();
			            this.stylize_winner_sequence(this.winning_sequences[winning_sequences_index]);
			        } else {
			            this.symbols.change();
			        }

			        return true;
			    },

			    stylize_winner_sequence(winner_sequence) {
			        winner_sequence.forEach((position) => {
			          this
			            .container_element
			            .querySelector(`div:nth-child(${position + 1})`)
			            .classList.add('winner');
			        });
			      },

			    check_winning_sequences(symbol) {

			        for ( i in this.winning_sequences ) {
			            if (this.board[ this.winning_sequences[i][0] ] == symbol  &&
			                this.board[ this.winning_sequences[i][1] ] == symbol &&
			                this.board[ this.winning_sequences[i][2] ] == symbol) {
			                console.log('winning sequences INDEX:' + i);
			                return i;
			            }
			        };
			        return -1;
			    },

			    game_is_over() {
			        this.gameover = true;
			        console.log('GAME OVER');
			    },

			    is_game_over() {
			        return !this.board.includes('');
			    },

			    start() {
			        this.board.fill('');
			        this.draw();
			        this.gameover = false;       
			    },

			    restart() {
			        if (this.is_game_over() || this.gameover) {
			            this.start();
			            console.log('this game has been restarted!')
			        } else if (confirm('Are you sure you want to restart this game?')) {
			            this.start();
			            console.log('this game has been restarted!')
			        }
			    },

			    draw() {
			        this.container_element.innerHTML = this.board.map((element, index) => `<div onclick="tic_tac_toe.make_play('${index}')"> ${element} </div>`).reduce((content, current) => content + current);
			    },
			};
		</script>
		<script>
	        tic_tac_toe.init( document.querySelector('.game') );
	        tic_tac_toe.start();
	    </script>
	</body>
</html>