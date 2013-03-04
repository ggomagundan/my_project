   function makse(){
     var txt = trim($('#url').val());
     if(txt.substr(0,16) == 'http://youtu.be/'){
       var urls = txt.split('/');
       var shared = urls[3];
       var result_url = "<object height='480' width='640'><param name='movie' value='http://www.youtube.com/v/"+shared+"?version=3&hl=ko_kr'><param name='allowfullscreen' value='true'><param name='allowscriptaccess' value='always'><embed src='http://www.youtube.com/v/"+shared +"?version=3&hl=ko_kr' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' height='480' width='640'></object>";
       alert(result_url);
       $('#result').val(result_url);
     }else{
       alert('http://youtu.be/xxxxxx 와 같은 형식의 URL을 입력해주세요 ');
     }
   }

   function trim(str) {
     return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
   }

   String.prototype.trim = function() {
     return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
   }



