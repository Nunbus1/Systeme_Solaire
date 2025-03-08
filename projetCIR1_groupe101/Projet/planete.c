

#include "Library/planete.h"

/***************************************************************
 *                                                             *
 *                      Fonction de calcul                     *
 *                                                             *
 * *************************************************************/

Vector accelaration(Point a, double planetParent)
{
    double c = -G * planetParent;
    Vector acc;

    c = c / pow(norme(a.r),3) ;

    acc = mult(a.r, c);

    return acc;
}

Vector position(Point a)
{
    Vector pos;
    pos = add(a.r, mult(a.v, TIME));

    return pos;
}

Vector vitesse(Point a, Point b, double planetParent){
    Vector vit;
    Vector acc = accelaration(b, planetParent);

    vit = add(a.v, mult(acc, TIME));

    return vit;
}

Point nextPointAsimetric(Point a, double planetParent)
{

    Point next = {0};

    Vector pos = position(a);
    next.r = pos;
    Vector vit = vitesse(a, next, planetParent);
    next.v = vit;

    return next;
}

Point nextPoint(Point a, double planetParent)
{

    Point next = {0};

    Vector pos = position(a);
    next.r = pos;
    Vector vit = vitesse(a, a, planetParent);
    next.v = vit;

    return next;
}

void debugTest(Point a)
{
    printf("[[%e,%e,%e],[%e,%e,%e],%d]\n",
           a.r.vX, a.r.vY, a.r.vZ,
           a.v.vX, a.v.vY, a.v.vZ,
           a.time);
}

int calculRevolution(int a, Point planet, Coord passage1, Coord passage2, char nom[32])
{
        if(passage1.cX > planet.r.vX && passage2.cX < planet.r.vX && passage1.cY < planet.r.vY && passage2.cY > planet.r.vY)
        {
            printf("%s : %d seconde\n", nom, planet.time * TIME);
            printf("soit %.2f jour\n", (float)(planet.time * TIME)/(3600*24));
            return 1;
        }

    return 0;
}

void energiePo(List li)
{
    for (int i = 0; i < 30; ++i) {
         double ep = (G*MT*MS)/(pow(norme(li->a.r),2));
         double es = MT* pow(norme(li->a.v),2);

        printf("[%lf] ",ep+es);
        li = li->next;
    }
}