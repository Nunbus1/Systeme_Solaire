//
// Created by bapti on 24/06/2022.
//

#ifndef PROJET_POINT_H
#define PROJET_POINT_H

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>

#define G 6.67418400e-11
#define MS 1.989e30
#define MT 5.972e24
#define TIME 14400

///structure du vecteur position de la planete
typedef struct vector
{
    double vX; // vecteur X
    double vY; // vecteur Y
    double vZ; // vecteur Z
}Vector;

/// structure du vecteur vitesse de la planete
typedef struct coord
{
    double cX; // Coordonne X
    double cY; // Coordonne Y
}Coord;

///structure de Point
typedef struct point
{
    Vector r; // Vecteur Position
    Vector v; // Vecteur Vitesse
    int time; // Temps
}Point;


///--------------------------------------------Fonction------------------------------------------------

Vector add(Vector a, Vector b);   // Fontion d'addition de vecteur
Vector sous(Vector a, Vector b);  // Fontion de soustractio de vecteur
Vector mult(Vector a, double b);  // Fontion de multiplication de vecteur
double norme(Vector a); // Fontion de calcule de norme

#endif //PROJET_POINT_H
