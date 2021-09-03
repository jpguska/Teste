using System;

namespace entidades{
    public class dollynho{
        public int dollynhos;
        public bool queimando;
        public string result;

        public dollynho(){}
        public dollynho(int dollynhos, bool queimando, string result){
            this.dollynhos = dollynhos;
            this.queimando = queimando;
            this.result = result;
        }
    }
}