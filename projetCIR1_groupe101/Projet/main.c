
#include "Library/fichier.h"


int main() {

    FILE *fp = fopen("valeur.json", "w+");
    fprintf(fp,"{");
    List li = new_List();

    double ms = 1.989e30;
    double mt = 5.972e24;
    double mj = 1.8986e27;

    if(fp == NULL)
    {
        printf("erreur d'ouverture de fichier\n");
        exit(1);
    }

    Point next;

    /******************** Point de la mercure ****************/
    Vector pos_Me = {4.6* pow(10,10),0,0};
    Vector vit_Me = {0, 5.898 * pow(10,4),0};
    Point currentPoint_Me = {pos_Me,vit_Me,0};

    /******************** Point de la Venus ****************/
    Vector pos_V = {1.07476* pow(10,11),0,0};
    Vector vit_V = {0, 3.52643 * pow(10,4),0};
    Point currentPoint_V = {pos_V,vit_V,0};

    /******************** Point de la mars ****************/
    Vector pos_Ma = {2.06655* pow(10,11),0,0};
    Vector vit_Ma = {0, 2.6503 * pow(10,4),0};
    Point currentPoint_Ma = {pos_Ma,vit_Ma,0};

    /******************** Point de la terre ****************/
    Vector pos_T = {1.47* pow(10,11),0,0};
    Vector vit_T = {0, 3.028629 * pow(10,4),0};
    Point currentPoint_T = {pos_T,vit_T,0};

    /******************** Point de la Lune ******************/

    Vector pos_L = {3.56410* pow(10,8),0,0};
    Vector vit_L = {0, 1.052 * pow(10,3),0};
    Point currentPoint_L = {pos_L,vit_L,0};

    /******************** Point de la Jupiter ******************/

    Vector pos_J = {7.40680* pow(10,12),0,0};
    Vector vit_J = {0, 1.3714 * pow(10,5),0};
    Point currentPoint_J = {pos_J,vit_J,0};

    /******************** Point de la Io ******************/

    Vector pos_I = {4.218* pow(10,8),0,0};
    Vector vit_I = {0, 1.7 * pow(10,4),0};
    Point currentPoint_I = {pos_I,vit_I,0};

    /******************** Point de la Europe ******************/

    Vector pos_E = {6.64792* pow(10,8),0,0};
    Vector vit_E = {0, 1.3743 * pow(10,4),0};
    Point currentPoint_E = {pos_E,vit_E,0};

    /******************** Point de la Ganymede ******************/

    Vector pos_G = {1.069* pow(10,9),0,0};
    Vector vit_G = {0, 1.0879 * pow(10,4),0};
    Point currentPoint_G = {pos_G,vit_G,0};

    /******************** Point de la Callisto ******************/

    Vector pos_C = {1.868* pow(10,9),0,0};
    Vector vit_C = {0, 8.203 * pow(10,3),0};
    Point currentPoint_C = {pos_C,vit_C,0};

    /******************** Point de la Saturne *******************/

    Vector pos_Sa = {1.349* pow(10,13),0,0};
    Vector vit_Sa = {0, 1.0182 * pow(10,5),0};
    Point currentPoint_Sa = {pos_Sa,vit_Sa,0};

    /******************** Point de la Uranus ********************/

    Vector pos_U = {2.735* pow(10,13),0,0};
    Vector vit_U = {0, 7.129 * pow(10,4),0};
    Point currentPoint_U = {pos_U,vit_U,0};

    /******************** Point de la Neptnue ********************/

    Vector pos_Ne = {4.459* pow(10,13),0,0};
    Vector vit_Ne = {0, 5.479 * pow(10,4),0};
    Point currentPoint_Ne = {pos_Ne,vit_Ne,0};


    li = readFile(fp, currentPoint_Me, li,"mercure-euler", ms,false);
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_Me, li,"mercure-euler-asimetric", ms,true);
///----------------------------------------------------------------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_V, li,"venus-euler", ms,false);
    fprintf(fp, "],\n");

    li = readFile(fp, currentPoint_V, li,"venus-euler-asimetric", ms,true);
///----------------------------------------------------------------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_Ma, li,"mars-euler", ms,false);
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_Ma, li,"mars-euler-asimetric", ms,true);
    ///----------------------------------------------------------------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_T, li,"terre-euler",ms,false);
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_T, li,"terre-euler-asimetric",ms,true);
    ///----------------------------------------------------------------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_L, li,"lune-euler-asimetric",mt,true);
    ///----------------------------------------------------------------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_J, li,"jupiter-euler",ms,false);
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_J, li,"jupiter-euler-asimetric",ms,true);
    ///------------------------------- Satelite de Io ---------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_I, li,"Io-euler-asimetric",mj,true);
    ///------------------------------- Satelite de Europe ---------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_E, li,"Europe-euler-asimetric",mj,true);
    ///------------------------------- Satelite de Ganymede ---------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_G, li,"Ganymede-euler-asimetric",mj,true);
    ///------------------------------- Satelite de Callisto ---------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_C, li,"Callisto-euler-asimetric",mj,true);
    ///----------------------------------------------------------------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_Sa, li,"saturne-euler",ms,false);
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_Sa, li,"saturne-euler-asimetric",ms,true);
    ///----------------------------------------------------------------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_U, li,"uranus-euler",ms,false);
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_U, li,"uranus-euler-asimetric",ms,true);
    ///----------------------------------------------------------------------------------------------
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_Ne, li,"neptune-euler",ms,false);
    fprintf(fp, "],\n");
    li = readFile(fp, currentPoint_Ne, li,"neptune-euler-asimetric",ms,true);

    //energiePo(li);
    fprintf(fp,"]\n}");

    li = clear_list(li);
    fclose(fp);

    return 0;
}
