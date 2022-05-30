//<img src='https://cdn.dribbble.com/users/234969/screenshots/5404808/medallion_burst_animation.gif'/>

var pircing = document.getElementById('pircing'),
keyframes  = document.getElementById('keyframes'),
    contador=1;


    function cambio()
    {
        if(contador==1)
            {
                keyframes.classList.add('from')
                contador=1;

            }
           else{keyframes.classList.add('to')
                contador=1;}
           } 
     





    pircing.addEventListener('click',cambio,true)
