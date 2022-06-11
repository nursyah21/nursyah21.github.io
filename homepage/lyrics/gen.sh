#!/bin/bash

! [ -f lyrics_.txt ] && {
  echo "generate lyrics html"
  echo "bash gen.sh #require lyrics_.txt"
  exit
}

cat .index.html>index.html 

##add sticky
echo "<div id=\"top\"></div><div class=\"back\"><a href=\"#top\">lyrics</a></div>" >> index.html

##add list lyrics
n=1;cat lyrics_.txt|grep .h3|sed 's/\.h3//'|while read i;do 
printf "<a href=\"#%d\">%d. %s</a><br>" $n $n "$i"
#echo "<a href=\"#$n\">$n. $i</a><br>"
n=$((n+1));
done>>index.html


##add lyrics
n=1
cat lyrics_.txt| sed -e 's/.*h3/<h3>&/' -e 's/\.h3/<\/h3>/'| sed -e 's/$/<br>/'|sed -e 's/===.*<br>/<hr><hr>/' -e 's/h3><br>/h3>/'| while read i;do
  if [[ "$i" == "<hr><hr>" ]];then
     echo $i|sed "s/hr><hr>/hr id=\"$n\"><hr><br>/"
     n=$(($n+1))
  else
     echo "$i"
  fi
done>> index.html 


echo "</body></html>" >> index.html


exit













