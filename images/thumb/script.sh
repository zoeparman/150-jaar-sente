for d in */; do
    cd $d
    echo $d
    convert "*.jpg[x500>]" -set filename:base "%[basename]" "%[filename:base].jpg"
    cd ..
done
