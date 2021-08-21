#include <iostream>

class Colonia{

    public:
    //foco
    Colonia(float ouro, int colonos);

    void Portugal(float qtd){
        ouro -= qtd;
    }
    float getOuro(){
        return ouro;
    }
    int getColonos(){
        return colonos;
    }


    private:
    float ouro;
    int colonos;
};//acabou a classe

Colonia::Colonia(float ouro, int colonos){
    this->ouro = ouro;
    this->colonos = colonos;
}
