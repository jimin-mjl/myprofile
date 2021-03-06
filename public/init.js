const contents = document.querySelector(".contents"),
saying = document.querySelector(".saying");

const job = document.querySelector(".story_job"),
lan = document.querySelector(".story_lan"),
ai = document.querySelector(".story_AI"),
movie = document.querySelector(".story_movie"),
book = document.querySelector(".story_book"),
hobby = document.querySelector(".story_hobby"),
drink = document.querySelector(".story_drink"),
add = document.querySelector(".add_story");

const photo1 = document.querySelector(".illustration1"),
photo2 = document.querySelector(".illustration2"),
photo3 = document.querySelector(".illustration3");

function handleJob() {
    saying.style.display = "none";
    contents.style.display = "grid";
    photo1.style.backgroundImage = "url('https://pbs.twimg.com/profile_images/960980981892214785/KaSVZO2q_400x400.jpg')";
    photo2.style.backgroundImage = "url('https://assets.dailyrapfacts.com/BACKEND.png')";
    photo3.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/vector-global-web-service-icon-isolated-black-flat-design-concept-162780794.jpg')";
}

function handleLan() {
    saying.style.display = "none";
    contents.style.display = "grid";
    photo1.style.backgroundImage = "url('https://www.miltonmarketing.com/wp-content/uploads/2018/04/Javascript_logo-1170x850.jpg')";
    photo2.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXz294_oR7i9wBoKKvK4DprypJBg0OKzwOyg&usqp=CAU')";
    photo3.style.backgroundImage = "url('https://hackernoon.com/images/z2xg2bpo.jpg')";
}

function handleAI() {
    saying.style.display = "none";
    contents.style.display = "grid";
    photo1.style.backgroundImage = "url('https://cdn.inflearn.com/public/files/courses/325806/3550090c-f665-48b1-a016-018120c3a35b/325806-1.png')";
    photo2.style.backgroundImage = "url('https://image.freepik.com/free-vector/teamwork-concept-landing-page_52683-18752.jpg')";
    photo3.style.backgroundImage = "url('https://cdn0.iconfinder.com/data/icons/life-skill-solid-self-improvement/512/effective_growth-512.png')";
}

function handleMovie() {
    saying.style.display = "none";
    contents.style.display = "grid";
    photo1.style.backgroundImage = "url('https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F190581104CF77C3923')";
    photo2.style.backgroundImage = "url('https://www.ibs.re.kr/dext5data/2016/10/20161026_161059385_94498.jpg')";
    photo3.style.backgroundImage = "url('https://i.pinimg.com/originals/e3/32/df/e332dfa29df6ef4fd892907490d33e02.png')";
}

function handleBook() {
    saying.style.display = "none";
    contents.style.display = "grid";
    photo1.style.backgroundImage = "url('https://file3.instiz.net/data/file3/2019/10/06/0/e/d/0edf6ac013c2206e6ab6cee9811271e1.jpg')";
    photo2.style.backgroundImage = "url('https://image.yes24.com/Goods/33175244/L')";
    photo3.style.backgroundImage = "url('https://newsimg.hankookilbo.com/cms/articlerelease/2020/10/21/d5d26e31-fcad-42fa-a0fe-cb8e6d2eb402.jpg')";
}

function handleHobby() {
    saying.style.display = "none";
    contents.style.display = "grid";
    photo1.style.backgroundImage = "url('https://the-bibliofile.com/wp-content/uploads/detectivenovelsblogimage.jpg')";
    photo2.style.backgroundImage = "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-bestscifi-netflix-1594931664.jpg?crop=0.503xw:1.00xh;0.247xw,0&resize=640:*')";
    photo3.style.backgroundImage = "url('https://www.bigw.com.au/medias/sys_master/images/images/h5b/he2/13046655549470.jpg')";
}

function handleDrink() {
    saying.style.display = "block";
    contents.style.display = "none";
}

function handleAdd() {
    saying.style.display = "none";
    contents.style.display = "none";
}

function init(){
    job.addEventListener("click", handleJob);
    lan.addEventListener("click", handleLan);
    ai.addEventListener("click", handleAI);
    movie.addEventListener("click", handleMovie);
    book.addEventListener("click", handleBook);
    hobby.addEventListener("click", handleHobby);
    drink.addEventListener("click", handleDrink);
    add.addEventListener("click", handleAdd);
}

init();