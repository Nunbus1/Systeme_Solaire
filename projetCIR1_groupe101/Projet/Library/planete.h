//
// Created by bapti on 23/06/2022.
//

#ifndef PROJET_PLANETE_H
#define PROJET_PLANETE_H

#include "point.h"
#include "liste_chainer.h"

///--------------------------------------------

Vector accelaration(Point a, double planetParent); /// Point a et la position de la planete a l'instan T
Vector position(Point a);      /// planetParent est la masse de la planet sur la quelle elle tourne
Vector vitesse(Point a, Point b, double planetParent);
Point nextPoint(Point a, double planetParent);
Point nextPointAsimetric(Point a, double planetParent);
int calculRevolution(int a, Point planet, Coord passage1, Coord passage2 , char nom[32]);
void energiePo(List li);

void vectorTest();
void debugTest(Point a);

#endif //PROJET_PLANETE_H
