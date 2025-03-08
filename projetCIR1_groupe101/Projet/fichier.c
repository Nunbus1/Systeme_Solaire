//
// Created by bapti on 24/06/2022.
//

#include "Library/fichier.h"

List readFile(FILE *f, Point a, List li, char nom[32], double planetParent, Bool isAsimetric)
{
    Point currentPoint = a;
    int isCalculRevolution = 0;
    Coord passage1;
    Coord passage2;
    double inc = 76.68;

    fprintf(f,"\"%s\" : [", nom);
    fprintf(f,"[[%e, %e, %e],[%e, %e, %e], %d]",
            currentPoint.r.vX, currentPoint.r.vY, currentPoint.r.vZ,
            currentPoint.v.vX, currentPoint.v.vY, currentPoint.v.vZ,
            currentPoint.time);


    for (int i = 1; i < 30000; ++i) {
        Point next = {0};

        if(isAsimetric)
        {
            next = nextPointAsimetric(currentPoint,planetParent);
        } else
        {
            next = nextPoint(currentPoint, planetParent);
        }

        currentPoint = next;
        currentPoint.time = i;


        /// Ce qui est en commentair permet de verifier les valeur de position
        /// en calcul sa periode de revolution
        /*if(isCalculRevolution == 0)
        {
            if(isAsimetric)
            {
                if(i == 3)
                {
                    passage1.cX = currentPoint.r.vX;
                    passage1.cY = currentPoint.r.vY;
                }

                if(i == 10)
                {
                    passage2.cX = currentPoint.r.vX;
                    passage2.cY = currentPoint.r.vY;
                }

                if(i>10)
                    isCalculRevolution =  calculRevolution(i,currentPoint,passage1,passage2,nom);
            }
        }
        */

        printFile(f, currentPoint);

        //li = push_back_list(li, currentPoint);
    }

    return li;
}


void printFile(FILE *f,Point a)
{
    fprintf(f,",\n[[%e, %e, %e],[%e, %e, %e], %d]",
            a.r.vX, a.r.vY, a.r.vZ,
            a.v.vX, a.v.vY, a.v.vZ,
            a.time);
}
