using System;

namespace Teste{
    class Program{
        public static void Pause(){
            Console.WriteLine("Aperte ENTER para encerrar o programa");
            Console.ReadLine();
        }
        static void Main(string[] args){
            Console.WriteLine("Bom dia");
            Pause();
        }
    }
}
