function showTime(){
    let date = new Date();
    let h =  date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'Am';

    if(h == 0){
        h = 12
    }
    if(h > 12){
        h = h - 12
    }

    h = h < 10 ? '0' + h : h ;
    m = m < 10 ? '0' + m : m ;
    s = s < 10 ? '0' + s : s; 
    
    let watch = document.querySelector('.digitalwatch');
    watch.innerHTML = h + ' : ' + m + ' : ' + s + session;
    setTimeout(showTime,1000)
}
showTime()