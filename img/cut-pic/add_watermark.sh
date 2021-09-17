#!/bin/zsh
pics_bak="/old/blog/images/Backup"
if [ ! -d ./$pics_bak ]
then
    mkdir -p $pics_bak
fi

if [ $? -ne 0 ]
then
	echo "创建目录失败."
	exit 1
fi
pics=($(ls ./*/*.*g))
for image in $pics
do
	if [ -s $image ]
	then
        echo $image
        cp --parents $image $pics_bak # 原样备份原始图片及其目录
		width=$(identify -format %w $image)
        height=$(identify -format %h $image)
        wm_width=$(identify -format %w ./watermark.png)
        wm_height=$(identify -format %h ./watermark.png)
        x=$(( $width - 2*$wm_width ))
        y=$(( $height - $wm_height ))
		# #convert -background '#0008' -fill white -gravity center -size ${width}x30 caption:liveJQ $image +swap -gravity south -composite new-$image
		composite -watermark 40% -geometry +${x}+${y} watermark.png $image $image
		echo "为 $image 在 $x x $y 添加水印成功！"
	fi
done
