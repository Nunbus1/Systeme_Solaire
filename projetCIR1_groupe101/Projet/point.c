//
// Created by bapti on 24/06/2022.
//

#include "Library/point.h"

/***************************************************************
 *                                                             *
 *                      Fonction de calcul                     *
 *                                                             *
 * *************************************************************/


Vector add(Vector a, Vector b) //addition de vecteur
{
    Vector add;
    add.vX = a.vX + b.vX;
    add.vY = a.vY + b.vY;
    add.vZ = a.vZ + b.vZ;

    return add;
}

Vector sous(Vector a, Vector b) //Soustration de vecteur
{
    Vector sous;
    sous.vX = a.vX - b.vX;
    sous.vY = a.vY - b.vY;
    sous.vZ = a.vZ - b.vZ;

    return sous;
}

Vector mult(Vector a, double b) //Multiplication de vecteur
{
    Vector mult;

    mult.vX = a.vX * b;
    mult.vY = a.vY * b;
    mult.vZ = a.vZ * b;

    return mult;
}

double norme(Vector a) //Calcule de norme
{
    double norme;
    norme = (a.vX * a.vX) + (a.vY * a.vY) + (a.vZ * a.vZ);

    return sqrt(norme);
}


void vectorTest() // fonction pour teste le fonction si dessus
{
    Vector test_A = {1,2,3};
    Vector test_B = {1,1,1};

    double adt = norme(test_A);

    //printf("%.2f %.2f %.2f",adt.vX, adt.vY, adt.vZ);
    printf("%f", adt);
}