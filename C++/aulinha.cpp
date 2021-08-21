#include <iostream>
#include "headers/cu.h"

int main(){
    Colonia Brasil(100000000000000.00, 10000);
    
    std::cout << "O Brasil tem " << Brasil.getOuro() << " de ouro e " << Brasil.getColonos() << "colonos";


    return 0;
}