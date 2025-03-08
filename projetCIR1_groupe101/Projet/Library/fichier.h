//
// Created by bapti on 24/06/2022.
//

#ifndef PROJET_FICHIER_H
#define PROJET_FICHIER_H

#include "point.h"
#include "planete.h"
#include "liste_chainer.h"

List readFile(FILE *f, Point a, List li, char nom[32], double planetParent, Bool isAsimetric);
void printFile(FILE *f,Point a);

#endif //PROJET_FICHIER_H
