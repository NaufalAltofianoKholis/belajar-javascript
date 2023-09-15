  function halo(){
            alert("halo java script");
        }
        function waktu(){
            document.getElementById('waktu').innerHTML=Date();
        }
        function zodiak(){
            let tanggal=document.getElementById('tanggal').value;
            let bulan =document.getElementById('bulan').value ; 
            let zodiak ="tidak tahu";
            
            if(bulan==1){
             if(tanggal >0 && tanggal <20){
                zodiak="capricon";}
             if(tanggal >19 && tanggal <32){
                zodiak="capricon";}}
                
            if(bulan==2){
             if(tanggal >0 && tanggal <20){
                zodiak="aquarius";}
             if(tanggal >19 && tanggal <32){
                zodiak="aquarius";}}
                
            if(bulan==3){
             if(tanggal >0 && tanggal <20){
                zodiak="leo";}
             if(tanggal >19 && tanggal <32){
                zodiak="leo";}}
                

                document.getElementById('zodiak').innerHTML=zodiak;
            }
                
       function kali(){
        let a=document.getElementById('bil 1').value;
        let b=document.getElementById('bil 2').value;
        let hasil= a*b;
        document.getElementById('hasil').innerHTML=hasil;
       }

       function bagi(){
        let a=document.getElementById('bil 1').value;
        let b=document.getElementById('bil 2').value;
        let hasil= a/b;
        document.getElementById('hasil').innerHTML=hasil;
       }

       function jumlah(){
        let a=document.getElementById('bil 1').value;
        let b=document.getElementById('bil 2').value;
        let hasil= parseInt (a) + parseInt (b);
        document.getElementById('hasil').innerHTML=hasil;
       }
       
       function kurang(){
        let a=document.getElementById('bil 1').value;
        let b=document.getElementById('bil 2').value;
        let hasil= a-b;
        document.getElementById('hasil').innerHTML=hasil;
       }
       
       function nama(){
         document.getElementById('nama').innerHTML="Fian";
        }

        function nama2(){
           let namasaya = document.getElementById('input').value;
           document.getElementById('nama2').innerHTML=namasaya ;
        }

        let btn=document.getElementById('jam');

        btn.onclick=function(){
         document.getElementById('waktu').innerHTML=Date();
        }

        let isi=document.getElementById('ketik');
        let tampil=document.getElementById('waktu')
        isi.onmouseover=function(){
            tampil.innerHTML=isi.value;
        }

        let hari=document.getElementById('hari');
        hari.addEventListener("mouseover",coba);

        function coba(){
         alert("coba coba");
        }

        let rasi=document.getElementById('zodi');
        rasi.addEventListener("click",zodiak);