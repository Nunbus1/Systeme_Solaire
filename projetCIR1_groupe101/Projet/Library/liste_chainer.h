//
// Created by bapti on 24/06/2022.
//

#ifndef PROJET_LISTE_CHAINER_H
#define PROJET_LISTE_CHAINER_H

#include "point.h"
#include "planete.h"


typedef enum {
    false,
    true
}Bool;

typedef struct ListElement
{
    Point a;
    struct ListElement * next;

}ListElement, *List;

List new_List();
Bool is_empty_List(List li);
int list_length(List li);
void print_list(List li);
List push_back_list(List li, Point a);
List push_front_list(List li, Point a);
List pop_back_list(List li);
List pop_front_list(List li);
List clear_list(List li);

#endif //PROJET_LISTE_CHAINER_H
