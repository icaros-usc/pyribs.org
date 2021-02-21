#!/bin/bash
# Creates lunar-lander.gif from the online lunar lander video.
#
# Usage:
#   bash lunar_lander_gif.sh

VIDEO_URL="https://raw.githubusercontent.com/icaros-usc/pyribs/master/docs/_static/imgs/lunar-lander-left.mp4 "
VIDEO="lunar-lander.mp4"

ffmpeg -i "$VIDEO_URL" -vf "crop=iw:ih-80:0:0" "$VIDEO" -y

ffmpeg -i "$VIDEO" \
  -filter_complex "scale=500:-1:flags=lanczos,palettegen" palette.png -y
ffmpeg -i "$VIDEO" -i palette.png \
  -filter_complex "scale=500:-1:flags=lanczos[x];[x][1:v]paletteuse" lunar-lander.gif -y

rm palette.png "$VIDEO"
