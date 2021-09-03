using System;
using entidades;

namespace Teste{
    class Program{
        //método pra não deixar o programa se suicidar sozinho.
        public static void Pause(){
            Console.WriteLine("Aperte ENTER para encerrar o programa");
            Console.ReadLine();
        }

        //programa :O
        static void Main(string[] args){
            //testezinho
            dollynho dolly = new dollynho(5, true, "Fidel Castro is dead.");
            Console.WriteLine("John pipis");
            Console.WriteLine("...");
            Console.WriteLine("...");
            Console.WriteLine("...");
            if(dolly.queimando == true){
                Console.WriteLine(dolly.result);
                Console.WriteLine("...");
                Console.WriteLine("...");
                Console.WriteLine("...");
            }
            Pause();
        }
    }
}
