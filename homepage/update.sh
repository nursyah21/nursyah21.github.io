#!/bin/bash
git pull

cd secret && bash gen.sh && cd ..
cd lyrics && bash gen.sh && cd ..
cd surah && bash gen.sh && cd ..

commit="update"
[[ -n "$1" ]] && commit="$1"

git add .;
git commit -m "$commit";
echo "git push" |sh
