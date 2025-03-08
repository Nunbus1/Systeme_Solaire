cmake_minimum_required(VERSION 3.18)
project(Projet C)

set(CMAKE_C_STANDARD 99)

add_executable(Projet main.c point.c planete.c fichier.c liste_chainer.c)

target_link_libraries(Projet m)
