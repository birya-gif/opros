const questions = [
	{
		question: "Каким документом определяется порядок организации и производства работ на одном объекте нескольких подразделений одной организации, эксплуатирующей ОПО?",
		answers: ["Регламентом об организации безопасного производства работ, утвержденным руководителем этой организации.", "Положением о производственном контроле организации.", "Нарядом-допуском, оформленным техническим руководителем организации.", "Производственным заданием, выданным руководителем организации или лицом, его замещающим.", "Графиком взаимодействия, согласованным с вышестоящей организацией."],
		correct: 1,
	},
	
	{
		question: "Кем утверждается перечень работ, осуществляемых по наряду-допуску, порядок оформления нарядов-допусков, перечни должностей специалистов, имеющих право выдавать и утверждать наряды-допуски?",
		answers: [
			"Руководителем организации.",
			"Техническим руководителем организации.",
			"Специалистом по охране труда.",
			"Представителем территориальных органов Ростехнадзора.",
		],
		correct: 2,
	},
	{
		question: "По какому принципу должны быть идентифицированы ОПО при разведке и обустройстве нефтяных, газовых и газоконденсатных месторождений, содержащих сернистый водород и другие вредные вещества?",
		answers: [
			"По радиусам возможных выбросов и утечек паров и газов.",
			"По уровням потенциальной и реальной угроз безопасности работников.",
			"По наличию в технологическом процессе агрессивных компонентов, вызывающих коррозию металла.",
			"По классам опасности возможных выбросов и утечек паров и газов в атмосферу.",
		],
		correct: 4,
	},
	{
		question: "Что допускается в пределах территории буферной зоны?",
		answers: [
			"Функционирование спортивных сооружений, дошкольных, школьных, лечебно-профилактических и оздоровительных учреждений.",
			"Остановка и стоянка транзитного пассажирского железнодорожного и любого автомобильного транспорта на дорогах общего пользования.",
			"Строительство производственных и иных объектов, не связанных с разработкой месторождения.",
			"Размещение в вахтовых проселках рабочих, работающих на месторождении, при условии выполнения всех проектных решений по обустройству месторождения.",
		],
		correct: 4,
	},
	{
		question: "Какое требование установлено к освещению в зонах работ на открытых площадках в ночное время?",
		answers: [
			"Освещенность площадок должна составлять не менее 100 лк.",
			"Применение ручных светильников с аккумуляторами в ночное время  не допускается.",
			"Необходимо предусматривать стационарное аварийное или эвакуационное освещение.",
			"Необходимо предусматривать комбинированное освещение, используя для местного освещения галогенные лампы.",
		],
		correct: 3,
	},
	{
		question: "С учетом чего должен производиться выбор вида освещения производственных и вспомогательных помещений?",
		answers: [
			"С учетом максимального использования естественного освещения.",
			"С учетом минимального использования естественного освещения.",
			"С учетом режима экономии электроэнергии.",
			"С учетом оптимальной нагрузки на источники электроэнергии.",
		],
		correct: 1,
	},
	{
		question: "Чем должны оборудоваться объекты, для обслуживания которых требуется подъем рабочего на высоту?",
		answers: [
			"При подъеме на высоту до 1,0 м – ступенями, а на высоту выше 1,0 м – лестницами с перилами.",
			"При подъеме на высоту до 0,75 м – настилом с планками, а на высоту выше 0,75 м – ступенями.",
			"При подъеме на высоту до 1,5 м – ступенями, а на высоту выше 1,5 м – лестницами с перилами.",
			"При подъеме на высоту до 0,75 м – ступенями, а на высоту выше 0,75 м – лестницами с перилами.",
		],
		correct: 4,
	},
	{
		question: "Из каких материалов изготавливается настил для рабочих площадок, расположенных на высоте?",
		answers: [
			"Из металлических листов, исключающих возможность скольжения.",
			"Из досок толщиной не менее 40 мм.",
			"Из металлических листов, исключающих возможность скольжения, или из досок толщиной не менее 40 мм.",
			"Из пруткового (круглого) проката.",
			"При наличии перил на площадках допускается настил из гладких металлических листов.",
		],
		correct: 3,
	},
	{
		question: "С какой периодичностью следует испытывать предохранительные пояса и фалы статической нагрузкой?",
		answers: [
			"Не реже одного раза в год.",
			"Не реже одного раза в квартал.",
			"Не реже одного раза в три года.",
			"Не реже двух раз в год.",
		],
		correct: 4,
	},
	{
		question: "В каком случае допускается временное применение деревянных настилов из досок толщиной не менее 40 мм при ведении работ на пожаровзрывоопасных производствах (установках подготовки нефти, резервуарных парках)?",
		answers: [
			"В случае выполнения аварийно-спасательных работ.",
			"В случае ведения работ с лесов во время ремонта полностью остановленных оборудования и аппаратов.",
			"Временное применение деревянных настилов не допускается.",
			"В случае ликвидации утечек опасных жидкостей.",
			"В случае ввода в эксплуатацию нового оборудования и аппаратов.",
		],
		correct:2,
	},
	{
		question: "Где должны находиться запорные, отсекающие и предохранительные устройства, устанавливаемые на нагнетательном и всасывающем трубопроводах насоса или компрессора?",
		answers: [
			"На максимально приближенном расстоянии к насосу (компрессору).",
			"В помещении пульта управления насосами (компрессорами).",
			"На расстоянии не менее 100 диаметров трубопровода.",
			"Нормативными документами не регламентируется.",
		],
		correct: 1,
	},
	{
		question: "Каковы условия опрессовки технологических трубопроводов после их монтажа?",
		answers: [
			"В любом случае давление опрессовки должно составлять 1,1 рабочего давления.",
			"В любом случае давление опрессовки должно быть не менее 1,15 рабочего давления.",
			"Давление опрессовки должно быть равно рабочему давлению.",
			"Условия опрессовки устанавливаются проектной документацией, а также нормативно-техническими документами в области промышленной безопасности.",
		],
		correct: 4,
	},
	{
		question: "Кем определяются критерии вывода из эксплуатации оборудования, инструментов, контрольно-измерительных приборов?",
		answers: [
			"Организацией-изготовителем.",
			"Ростехнадзором или его территориальным органом.",
			"Эксплуатирующей организацией или ее структурным подразделением.",
			"Поставщиком оборудования.",
		],
		correct: 1,
	},
	{
		question: "Кем выполняются работы по определению возможности продления сроков безопасной эксплуатации технических устройств, оборудования и сооружений?",
		answers: [
			"Поставщиком оборудования.",
			"Экспертной организацией.",
			"Организацией-изготовителем.",
			"Территориальным органом Ростехнадзора.",
		],
		correct: 2,
	},
	{
		question: "Каким образом производится резка талевых канатов?",
		answers: [
			"С использованием электросварки, имеющей надежное заземление.",
			"С использованием специальных приспособлений и применением защитных очков (масок).",
			"С использованием любой технологической резки.",
			"Только с использованием разрывной машины.",
		],
		correct: 2,
	},
	{
		question: "От чего зависит частота осмотров каната?",
		answers: [
			"От характера и условий работы.",
			"От рекомендаций экспертных организаций.",
			"От требований, установленных в нормативных документах.",
			"От рекомендаций завода-изготовителя.",
		],
		correct: 1,
	},
	{
		question: "Какое напряжение должно применяться для питания переносных электрических светильников, используемых при работах в особо неблагоприятных условиях и наружных установках?",
		answers: [
			"Не выше 127 В.",
			"Не выше 50 В.",
			"Не выше 12 В.",
		],
		correct: 1,
	},
	{
		question: "Кто должен обслуживать электрооборудование установки?",
		answers: [
			"Электротехнический персонал с группой по электробезопасности не ниже III.",
			"Электротехнический персонал с группой по электробезопасности не ниже II.",
			"Электротехнический персонал, имеющий соответствующую квалификацию и допуск к работе.",
		],
		correct: 3,
	},
	{
		question: "Разрешается ли последовательное соединение между собой заземляющих устройств разных зданий, сооружений, установок при помощи одного заземляющего проводника?",
		answers: [
			"Допускается.",
			"Допускается при условии, что общее сопротивление заземляющего проводника не превышает 20 Ом.",
			"Не допускается.",
			"Не допускается, за исключением аппаратов или резервуаров, установленных  в одном обваловании.",
		],
		correct: 3,
	},
	
];
//находим элементы
const headerContainer=document.querySelector('#header');
const listContainer=document.querySelector('#list')
const submitBtn=document.querySelector('#submit')



//Переменные
let score=0;//количество правильных ответов
let questionIndex=0;//текущий вопрос





out_info();
clearPage();
shuffle(questions);
showQuestion();
submitBtn.onclick=checkAnswer;

function out_info(){
	clearPage();
	showResults();
	let my_time=setTimeout(out_info, 2000);
}



function clearPage(){
	headerContainer.innerHTML='';
	listContainer.innerHTML='';
}

function clearTime(){
	tmn.innerHTML = '';
}

function shuffle(questions){
	var j,temp;
	for (var i=questions.length-1;i>0,i--;)
	{
		j=Math.floor(Math.random()*(i+1));
		temp=questions[j];
		questions[j]=questions[i];
		questions[i]=temp;
	}
	return questions
};


function showQuestion(){
	



//вопрос
const headerTemplate='<h2 class="title">%title%</h2>';
const title=headerTemplate.replace('%title%', questions[questionIndex]['question']);
headerContainer.innerHTML=title;




//варианты ответов
let answerNumber=1;
for (answerText of questions[questionIndex]['answers']){
	

const questionTemplate=`
  <li>
     <label>
	    <input value="%number%" type="radio" class="answer" name="answer" />
	     <span>%answer%</span>
     </label>
  </li>`;
 
  const answerHTML=questionTemplate
  .replace('%answer%',answerText )
  .replace('%number%', answerNumber);



 listContainer.innerHTML=answerHTML+listContainer.innerHTML;
answerNumber++;
}
}


function checkAnswer(){
	
     //находим выбранную кнопку
	 const checkedRadio=listContainer.querySelector('input[type="radio"]:checked')
	 
	 
	 if (!checkedRadio){
		submitBtn.blur();
		return
	 }
//узнаем номер ответа пользователя
	 const userAnswer=parseInt(checkedRadio.value)
	 //если ответ верен
	 
	 if (userAnswer===questions[questionIndex]['correct']){
		score++;
console.log('score=',score)
	 }
	 if (questionIndex===10-1){
		clearPage();
		showResults();
		clearTime()
	 }else{
		questionIndex++;
		clearPage();
		shuffle(questions);
		showQuestion();
		clearTime()
	 }
	}
	
	
	
function showResults(){
		
		const resultsTemplate=`
		<h2 class="title">%title%</h2>
		<h3 class="summary">%message%</h3>
		<p class="result">%result%</p>
		`
		let title,message;
		if (score===questions.length){
			title='Поздравляем!'
			message='Вы ответили верно на все вопросы!'
		}else if ((score*100)/questions.length>=50){
			title='Неплохой результат!'
			message='Вы дали правильные ответы на более половины правильных ответов!'
		}else{
			title='Вам стоит постараться еще раз'
			message='Вы дали меньше половины правильных ответов!'
		}

		// результат

		let result=`${score} из 10`;

		const finalMessage=resultsTemplate
		.replace('%title%',title)
		.replace('%message%',message)
		.replace('%result%',result)
		headerContainer.innerHTML=finalMessage;
		submitBtn.blur();
	submitBtn.innerText='Попробовать снова';
	submitBtn.onclick= () => history.go();
	}











	const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 600;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}