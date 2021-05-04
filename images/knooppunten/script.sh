for d in */; do
    cd $d
    echo $d
    jpegoptim -m 50 *
    cd ..
done
