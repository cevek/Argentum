class Atom {

}
module z {
    module d.e.f {
        //a[1] = new Atom()

        class B {
            activeRoute = new Atom();
            a:Atom;
            b:any;

            doIt(atom) {
                return atom;
            }

            fuck(a) {
                //a = new Atom();
                //a.b["hetllo"].c[2].d = this.doIt(new Atom());
               /* for (var i = 0; i < 1; i++) {
                    //this.b[i] = this.doIt(new Atom());
                }*/
            }
        }
    }
}