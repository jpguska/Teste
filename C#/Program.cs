using System;

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
            Console.WriteLine("John pipis");
            Pause();
        }
    }
}
