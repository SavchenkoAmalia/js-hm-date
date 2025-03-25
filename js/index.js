const hb = document.querySelector('.birthday');


function timer(params) {
  const now = new Date();
  const birthDay = new Date(2025, 4, 26);
  console.log(now);
  console.log(birthDay);
  const diff = birthDay - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  let time = `До дня народження залишилось: ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`
  console.log(time);
  hb.innerHTML = time;
  
//   console.log(days);
//   console.log(hours);
//   console.log(minutes);
//   console.log(seconds);
}

setInterval(() => {
    timer()
}, 1000);

