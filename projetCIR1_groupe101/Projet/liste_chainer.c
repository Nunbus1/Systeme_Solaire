//
// Created by bapti on 24/06/2022.
//

#include "Library/planete.h"

List new_List(){
    return NULL;
}

Bool is_empty_List(List li){
    if(li == NULL)
        return true;

    return false;

}

int list_length(List li)
{
    int size = 0;

    if(!is_empty_List(li))
    {
        while (li != NULL)
        {
            ++size;
            li = li->next;
        }
    }

    return size;
}

void print_list(List li)
{
    if(is_empty_List(li))
    {
        printf("La liste est vide\n");
        return;
    }

    while (li != NULL)
    {
        debugTest(li->a);
        li = li->next;
    }
}

List push_back_list(List li, Point a)
{
    ListElement *element;

    element = malloc(sizeof(*element));

    if(element == NULL)
    {
        printf("Erreur : d'allocation dinamyque\n");
        exit(1);
    }

    element->a = a;

    element->next = NULL;

    if(is_empty_List(li))
    {
        return element;
    }

    ListElement *temp;
    temp = li;

    while (temp->next != NULL)
        temp = temp->next;

    temp->next = element;

    return li;
}

List pop_front_list(List li)
{
    ListElement *element;

    element = malloc(sizeof (*element));

    if(element == NULL)
    {
        printf("Erreur : d'allocation dinamyque\n");
        exit(1);
    }

    if(is_empty_List(li))
        return new_List();

    if(li->next == NULL)
    {
        free(li);
        return new_List();
    }

    element = li->next;

    free(li);
    li = NULL;

    return element;
}

List clear_list(List li)
{
    if(is_empty_List(li))
        return new_List();

    while (li != NULL)
        li = pop_front_list(li);

}