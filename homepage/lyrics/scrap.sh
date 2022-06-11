if [ "$#" -eq 0 ];then
  echo "support uta-net.com"
  echo "bash scrap.sh <link>"
  exit
fi

wget -O .i $@

cat .i|grep -e "title>" -e kashi_area|tr '<>' '\n'|grep -v 'br /\|/div\|kashi_area'|grep -v title|grep -v title > .temp

text="`cat .temp|sed -n 2p`"
n="`echo $text|tr ' ' '\n'|wc -l`"
n=$(($n-3))

echo "======================" > .temp2

i=1
while true;do
   echo "$text"|awk -v i=$i '{printf $i" "}'
   [ $i -eq $n ] && {
       printf ".h3" 
       break
   }
   i=$(($i+1))
done>>.temp2

printf "\n\n" >>.temp2

n="`cat .temp|wc -l`"
n=$(($n-4))

cat .temp|tail -n $n>>.temp2

cat lyrics_.txt >> .temp2
mv .temp2 lyrics_.txt
rm .temp

exit
