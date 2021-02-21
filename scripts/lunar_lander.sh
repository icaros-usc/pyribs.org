#!/bin/bash
# Creates lunar-lander.mp4 and lunar-lander.gif from the online lunar lander
# video.
#
# Usage:
#   bash lunar_lander.sh

VIDEO_URL="https://raw.githubusercontent.com/icaros-usc/pyribs/master/docs/_static/imgs/lunar-lander-left.mp4"
VIDEO="lunar-lander.mp4"

# See https://gist.github.com/Vestride/278e13915894821e1d6f
ffmpeg -an -i "$VIDEO_URL" \
  -vf "crop=iw:ih-80:0:0" \
  -vcodec libx264 \
  -pix_fmt yuv420p \
  -profile:v baseline \
  -level 3 \
  "$VIDEO" \
  -y

ffmpeg -i "$VIDEO" \
  -filter_complex "scale=500:-1:flags=lanczos,palettegen" palette.png -y
ffmpeg -i "$VIDEO" -i palette.png \
  -filter_complex "scale=500:-1:flags=lanczos[x];[x][1:v]paletteuse" lunar-lander.gif -y

rm palette.png
