#!/bin/bash

cat .index.html>index.html 

##add surah
ls *mhtml|while read i;do printf "<a href=\"%s\">%s</a><br>" "$i" "$i";done >>index.html

echo "</body></html>" >> index.html

exit







