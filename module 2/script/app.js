// Объектная игра   
 // обязательные переменные
 // 1. Глобальная переменная. Данные переменной, в которой хранятся текущие данные 2048, двузначный массив.
 // 2. Глобальные переменные хранят начало / конец и состояние текущего состояния игры, определяют две константы RUNNING \ GAMEOVER
 // 3. Глобальные переменные Общее количество строк и общее количество столбцов mRow, mCol
 // 4. Текущая строка и строка столбца, col
 var game = {
  data: [],
  state: 0,
  RUNNING: 1,
  GAMEOVER: 0,
  mRow: 5,
  mCol: 5,
  score: 0,
     // Метод инициализации window.onload () {} start row, col
  start: function () {
    this.data = [
      [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]
    ];
    this.score = 0;
    this.state = this.RUNNING;

    this.isGameStart();
  },

     // Оценка состояния игры и выполнение  метода isGameStart ()
  isGameStart: function () {
    if (!this.isFull()) {
      // alert("isGameStart....true")
      this.inint();
      return true;
    }

    for (var i = 0; i < this.mRow; i++) {
      for (var j = 0; j < this.mCol; j++) {
        if (j < this.mCol - 1) {
          if (this.data[i][j] == this.data[i][j + 1]) {
            this.inint();
            return true;
          }
        }
        if (i < this.mRow - 1) {
          if (this.data[i][j] == this.data[i + 1][j]) {
            this.inint();
            return true;
          }
        }
      }
    }
    return false;
  },
     // Игра запускается, инициализируем случайные числа
  inint: function () {
         // Запускаем игру, выбираем случайные 2 или 4 в случайном месте
    this.randomNum();
    this.randomNum();
         // Обновляем функцию страницы 2048
    this.updateView();
  },
     // Метод генерации случайных чисел 2, 4 randomNum ()
  randomNum: function () {
    if (!this.isFull()) {
      while (true) {
        // alert("isFull....false")
        var row = parseInt(Math.random() * this.mRow);
        var col = parseInt(Math.random() * this.mCol);
        if (this.data[row][col] == 0) {
          var num = Math.random() < 0.9 ? 2 : 4; //Math.random возвращает случайное число ?-в зависимости от условия, условие задает числло 0.9 (он дает понять с каким процентом показывать числа 2 или 4)
          this.data[row][col] = num;
          //alert("data[row][col]" + this.data[row][col]);
          break;
        }
      }
    }
  },
     // Метод обновления числа 2048 updateView ()
     // Обновляем представление, включая оценку того, окончена ли игра 
  updateView: function () {
    var div = document.getElementById("gameOver"); // переменная div равна Возврату ссылки на элемент по его id gameOver
    div.style.display = "none"; // здесь меняем стили и классы для элемента gameOver при помощи переменной div и тем самым делаем gameOver невили
    for (var i = 0; i < this.mRow; i++) {
      for (var j = 0; j < this.mCol; j++) {
        var divObj = document.getElementById("c" + i + j);
        var curr = this.data[i][j];
                 // Изменяем содержимое между начальным и конечным тегами div
        // alert("curr:"+curr)
        divObj.innerHTML = curr != 0 ? curr : "";
                 // Изменяем атрибут класса div
        divObj.className = curr != 0 ? "cell n" + curr : "cell";
      }
    }
         // массив данных не имеет нулевого значения, то есть в игре нет места
    if (this.data.toString().indexOf("0") == -1) {
             // Количество смежных равных
      var num = 0;
      for (var i = 0; i < this.mRow; i++) {
        for (var j = 0; j < this.mCol - 1; j++) {
          if (this.data[i][j] == this.data[i][j + 1]) {
            num++;
          }
        }
      }
      for (var i = 0; i < this.mCol; i++) {
        for (var j = 0; j < this.mRow - 1; j++) {
          if (this.data[j][i] == this.data[j+1][i]) {
            num++;
          }
        }
      }
             // При условии, что все значения не равны нулю
             // Количество соседних чисел вверх и вниз или влево и вправо равно нулю
      if (num == 0) {
        this.state == this.GAMEOVER
        var div = document.getElementById("gameOver");
        var span = document.getElementById("finalScore");
        span.innerHTML = this.score;
        div.style.display = "block";
        num = 1;
      }
    }
    var span = document.getElementById("score");
    span.innerHTML = this.score;
    var span = document.getElementById("finalScore");
    span.innerHTML = this.score;

  },
     // Метод определения провала игры isFull () Каждое число в массиве данных не равно нулю, и соседи не равны
     isFull: function() {
      for (var i = 0; i < this.mRow; i++) {
        for (var j = 0; j < this.mCol; j++) {
          if (this.score >= 10) {
            alert( `Вы выиграли, вашы баллы ${this.score} и ваше время --- миллисекунд` ); // далее нужно добавить придложение начать сначала или продолжить играть
            
      stopTimer();
            // при достижении победного значения, останавливает таймер
              init=0;
        
            


             
            
            let win_game = document.getElementById('win_game');
            // сделать окошко видимым и начать сначала, спрятав окошко
            win_game.style.display = "inline-block";
            win_game.style.opacity = 1;
              elem.onclick = function() {
                alert('Вы начинаете заново:)');
                game.start();
                stopTimer(); // обнулить таймер
                win_game.style.display = "none";
                
              };
 
                
              
            
            return true
            
          } else if (this.data[i][j] == 0) {
            return false 
          }
        }
      }
      return true;
    },
     // Сдвинуть игру вправо (влево вверх и вниз) method moveRight ()
  moveRight: function () {
    for (var i = 0; i < this.mRow; i++) {

      this.moveInRowRight(i);
    }
    this.randomNum();
    this.updateView();
  },

  moveLeft: function () {
    for (var i = 0; i < this.mRow; i++) {
      this.moveInRowLeft(i);
    }
    this.randomNum();
    this.updateView();
  },

     // белье
  moveInRowRight: function (nRow) {
    this.deteRight(nRow);
    this.moveRowRightO(nRow);
  },
  deteRight: function (nRow) {
    for (var i = this.mCol - 1; i > 0; i--) {
      for (var j = i - 1; j >= 0; j--) {
        if (this.data[nRow][i] != 0) {
          if (this.data[nRow][j] != 0) {
            if (this.data[nRow][i] == this.data[nRow][j]) {
              this.data[nRow][i] += this.data[nRow][j];
              this.data[nRow][j] = 0;
              this.score += this.data[nRow][i];
            } else
              break;
          }
        }
      }
    }
  },
  moveRowRightO: function (nRow) {
    for (var i = this.mCol - 1; i > 0; i--) {
      for (var j = i - 1; j >= 0; j--) {
                 // Если i равно нулю, а j равно нулю, продолжаем обход
                 // Если i равно нулю, а j не равно нулю, переместите j в i
                 // Если i не равно нулю, продолжаем цикл i + 1
        if (this.data[nRow][i] == 0) {
          if (this.data[nRow][j] != 0) {
            this.data[nRow][i] = this.data[nRow][j];
            this.data[nRow][j] = 0;
          }
        }
      }
    }
  },
  moveInRowLeft: function (nRow) {
    this.deleteLeft(nRow);
    this.moveRowLeftO(nRow);
  },
  deleteLeft: function (nRow) {
    for (var i = 0; i < this.mCol - 1; i++) {
      for (var j = i + 1; j < this.mCol; j++) {
                 // Когда i и j не равны нулю
                 // Если i и j равны, i = i + j, исключаем j
                 // Если они не равны, выходим из цикла. i + 1 продолжает цикл
        if (this.data[nRow][i] != 0) {
          if (this.data[nRow][j] != 0) {
            if (this.data[nRow][i] == this.data[nRow][j]) {
              this.data[nRow][i] += this.data[nRow][j];
              this.data[nRow][j] = 0;
              this.score += this.data[nRow][i];
            } else
              break;
          }
        }
      }
    }
  },
  moveRowLeftO: function (nRow) {
         // Начинаем обход слева и находим ненулевое число справа  
    for (var i = 0; i < this.mCol - 1; i++) {
      for (var j = i + 1; j < this.mCol; j++) {
                 // i-й равен нулю, заменяем первым ненулевым j и выходим из цикла
        if (this.data[nRow][i] == 0) {
          if (this.data[nRow][j] != 0) {
            this.data[nRow][i] = this.data[nRow][j];
            this.data[nRow][j] = 0;
          }
        }
      }
    }

  },
  moveUp: function () {
    for (var j = 0; j < this.mCol; j++) {
      this.moveInColUp(j);
    }
    this.randomNum();
    this.updateView();
  },
     // Проведите вниз, разбив на каждый столбец, чтобы скользить вниз
  moveDown: function () {
    for (var j = 0; j < this.mCol; j++) {
      this.moveInColDown(j);
    }
    this.randomNum();
    this.updateView();
  },
     // Добиваемся того, чтобы столбец nCol скользил вверх
  moveInColUp: function (nCol) {
         // Обратимся к слайду вниз
    this.deleteUp(nCol);
    this.moveColUpO(nCol);
  },
  deleteUp: function (nCol) {
    //alert("uuuup")
    for (var i = 0; i < this.mRow - 1; i++) {
      for (var j = i + 1; j < this.mRow; j++) {
                 // i-е число не равно нулю, а j не равно нулю
                 // Если i равно j, i * 2, исключаем j
        if (this.data[i][nCol] != 0) {
          if (this.data[j][nCol] != 0) {
            if (this.data[i][nCol] == this.data[j][nCol]) {
              this.data[i][nCol] += this.data[j][nCol];
              this.data[j][nCol] = 0;
              this.score += this.data[i][nCol];
            } else
              break;
          }
        }
      }
    }
  },
  moveColUpO: function (nCol) {
    for (var i = 0; i < this.mRow - 1; i++) {
      for (var j = i + 1; j < this.mRow; j++) {
        if (this.data[i][nCol] == 0) {
          if (this.data[j][nCol] != 0) {
            this.data[i][nCol] = this.data[j][nCol];
            this.data[j][nCol] = 0;
          }
        }
      }
    }
  },
     // Реализуем скольжение столбца nCol вниз
     // Разбиваем на две функции: удаление одинаковых чисел и скольжение вниз
  moveInColDown: function (nCol) {
         // Проведите вниз, чтобы удалить равные числа
    this.deleteDown(nCol);
         // Реализуем функцию скольжения вниз
    this.moveColDownO(nCol);
  },
  deleteDown: function (nCol) {
    for (var i = this.mRow - 1; i > 0; i--) {
      for (var j = i - 1; j >= 0; j--) {
                 // При условии, что i-й не равен нулю, а пройденный j не равен нулю
                 // Если два числа равны, i * 2, исключаем j
        if (this.data[i][nCol] != 0) {
          if (this.data[j][nCol] != 0) {
            if (this.data[i][nCol] == this.data[j][nCol]) {
              this.data[i][nCol] += this.data[j][nCol];
              this.data[j][nCol] = 0;
              this.score += this.data[i][nCol];
            } else
              break;
          }
        }
      }
    }
  },
  moveColDownO: function (nCol) {
    for (var i = this.mRow - 1; i > 0; i--) {
      for (var j = i - 1; j >= 0; j--) {
        if (this.data[i][nCol] == 0) {
          if (this.data[j][nCol] != 0) {
            this.data[i][nCol] = this.data[j][nCol];
            this.data[j][nCol] = 0;
          }
        }
      }
    }
  }
}

 // событие загрузки: автоматически выполняется при загрузке страницы
window.onload = function () {
     win_game.style.opacity = 0;
     game.start (); // После загрузки страницы автоматически запускаем игру
     // При нажатии кнопки клавиатуры срабатывает движение:
  document.onkeydown = function () {
         // Получаем номер клавиатуры в объекте события
         // Объект события: автоматически создается при возникновении события, инкапсулируя информацию о событии
    if (game.state == game.RUNNING) {
             // Шаг 1: получить объект события
      var e = window.event || arguments[0];
             // Стандарт IE DOM
             // Шаг 2: получение номера клавиатуры: e.keyCode
      if (e.keyCode == 37,96) {
        game.moveLeft();
      } else if (e.keyCode == 39) {
        game.moveRight();
      } else if (e.keyCode == 38) {
        game.moveUp();
      } else if (e.keyCode == 40) {
                 // скользить вниз
                 // Другие функции вверх, влево и вправо аналогичны реализации
                 // Думаем: а можно ли вытащить и сделать класс
        game.moveDown();
      }
             // Если вы нажмете левую кнопку, вызовите moveLeft
             // В противном случае, если вы нажмете правую кнопку, вызовите moveRight
    }
  }
}



// ТАЙМЕР
 //объявляем переменные
 var base = 60; 
 var timerInterval = null
 var dateObj,dh,dm,ds,ms; 
 var readout=''; 
 var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
 
 //функция для очистки поля
 function ClearСlock() { 
      stopTimer(); 
      h=1;m=1;tm=1;s=0;ts=0;ms=0; 
      init=0;
      readout='00:00:00.00'; 
      document.MyForm.stopwatch.value=readout; 
 } 
 
 //функция для старта секундомера
 function timerIntervalFn() { 
      var cdateObj = new Date(); 
      var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
      if (t>999) { s++; } 
      if (s>=(m*base)) { 
              ts=0; 
              m++; 
      } else { 
              ts=parseInt((ms/100)+s); 
              if(ts>=base) { ts=ts-((m-1)*base); } 
      } 
      if (m>(h*base)) { 
              tm=1; 
              h++; 
      } else { 
              tm=parseInt((ms/100)+m); 
              if(tm>=base) { tm=tm-((h-1)*base); } 
      } 
      ms = Math.round(t/10); 
      if (ms>99) {ms=0;} 
      if (ms==0) {ms='00';} 
      if (ms>0&&ms<=9) { ms = '0'+ms; } 
      if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
      dm=tm-1; 
      if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
      dh=h-1; 
      if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
      readout = dh + ':' + dm + ':' + ds + '.' + ms; 
      document.MyForm.stopwatch.value = readout;
 } 

function startTimer() {
  if (timerInterval !== null) {
    return
  }
  dateObj = new Date(); 
  timerInterval = setInterval(timerIntervalFn, 1)
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null
}


 
