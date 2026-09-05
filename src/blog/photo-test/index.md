---
id: 3
title: photo-test
description: photo-test
date: 2026-09-05
tags:
  - photo
---

## Standard image

![Enpi](./img/enpi.jpg)

## Image with a title

![Mountain road](./img/007.png "Mountain road")

## Reference-style image

![Enpi reference][enpi]

## Linked image

[![Open the images page](./img/007.png "Open images")](/images)

## Image inside a paragraph

Text before the image ![Inline Enpi](./img/enpi.jpg) text after the image.

## Image width

![Enpi at 90% width](./img/enpi.jpg)(style: "width: 90%")

![Enpi at 640 by 400](./img/enpi.jpg)(width: 640, height: 400)

## Two images in one row

![Enpi](./img/enpi.jpg)(style: "display: inline-block; width: 49%; margin-block: 2rem; vertical-align: top;")
![Mountain road](./img/007.png)(style: "display: inline-block; width: 49%; margin-block: 2rem; vertical-align: top;")

[enpi]: ./img/enpi.jpg "Enpi reference"
