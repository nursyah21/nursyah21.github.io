#!/bin/bash

cp /sdcard/countdown.html /sdcard/.newTime.js /sdcard/buy.txt /sdcard/study.txt .


buy_summary(){

count=`cat buy.txt|wc -l|awk '{print $1}'`

c=0
while read i;do
      b=`echo $i|sed 's/rb//'|awk '{print $2}'`
      n=$((n+$b))
      c=$((c+1))
      if [ $count -eq $c ];then
         printf "total:%drb\n\n" "$n">.tempbuy
      fi
done<buy.txt
}

cat .index.html>index.html 

mv .newTime.js newTime.js
cat countdown.html|sed 's/.newTime/newTime/' >.i
mv .i countdown.html

##add entry
ls *|grep -v "sh$\|index.html\|js$"|while read i;do printf "<a href=\"%s\">%s</a><br>" "$i" "$i";done >>index.html

echo "</body></html>" >> index.html


cat study.txt|tac>.i
mv .i study.txt

buy_summary

tac buy.txt>>.tempbuy
mv .tempbuy buy.txt

exit












