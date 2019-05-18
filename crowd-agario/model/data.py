"""
python2.7 data.py --images data/right
processes raw footage data to be fed into model
"""

from __future__ import print_function
from imutils.object_detection import non_max_suppression
from imutils import paths
import numpy as np
import argparse
import imutils
import cv2
import os
import shutil


def detect_from_image():
    # construct the argument parse and parse the arguments
    ap = argparse.ArgumentParser()
    ap.add_argument("-i", "--images", required=True, help="path to images directory")
    args = vars(ap.parse_args())

    # initialize the HOG descriptor/person detector
    hog = cv2.HOGDescriptor()
    hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

    # clear generated images w bounding boxes
    shutil.rmtree('data/out/')
    os.mkdir('data/out/')

    # loop over the image paths
    for imagePath in paths.list_images(args["images"]):
        print('image path is: ' + imagePath)
        # load the image and resize it to (1) reduce detection time
        # and (2) improve detection accuracy
        image = cv2.imread(imagePath)
        # flipped = cv2.flip(image, flipCode=-1)
        # image = flipped
        # cv2.imwrite('flipped-{}'.format(os.path.basename(imagePath)), image)
        image = imutils.resize(image, width=min(1000, image.shape[1]))
        orig = image.copy()

        # detect people in the image
        (rects, weights) = hog.detectMultiScale(image, winStride=(4, 4),
                                                padding=(8, 8), scale=1.45)

        # draw the original bounding boxes
        for (x, y, w, h) in rects:
            cv2.rectangle(orig, (x, y), (x + w, y + h), (0, 0, 255), 2)

        # apply non-maxima suppression to the bounding boxes using a
        # fairly large overlap threshold to try to maintain overlapping
        # boxes that are still people
        rects = np.array([[x, y, x + w, y + h] for (x, y, w, h) in rects])
        pick = non_max_suppression(rects, probs=None, overlapThresh=0.65)

        # draw the final bounding boxes
        for (xA, yA, xB, yB) in pick:
            cv2.rectangle(image, (xA, yA), (xB, yB), (0, 255, 0), 2)
            cv2.imwrite('data/out/original-{}'.format(os.path.basename(imagePath)), orig)
            cv2.imwrite('data/out/post-nms-{}'.format(os.path.basename(imagePath)), image)

        # show some information on the number of bounding boxes
        filename = imagePath[imagePath.rfind("/") + 1:]
        print("[INFO] {}: {} original boxes, {} after suppression".format(
            filename, len(rects), len(pick)))

        # show the output images
        # cv2.imshow("Before NMS", orig)
        # cv2.imshow("After NMS", image)
        # cv2.waitKey(0)


def extract_images_from_video(src, target):
    print('extracting images from video')
    cam = cv2.VideoCapture(src)
    counter = 0
    while True:
        counter = counter + 1
        ret, img = cam.read()
        if type(img) == type(None):
            print('error extracting images from video')
            break
        target_path = os.path.join(target, 'frame-{}.jpg'.format(counter))
        flipped = cv2.flip(img, flipCode=-1)
        print(target_path)
        cv2.imwrite(target_path, flipped)
        if (0xFF & cv2.waitKey(5) == 27) or img.size == 0:
            print('done extracting images from video')
            break


def main():
    # extract_images_from_video('data/right.MOV', 'data/right/')
    detect_from_image()
    pass


if __name__ == '__main__':
    main()
