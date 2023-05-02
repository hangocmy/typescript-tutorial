class MyMap<K, V>{
    constructor(initialKey: K, initialValue: V){
        //do something
    }

    get(key: K): V{
        //do something
    }
    set(key: K, value: V): void{
        //do something
    }
    merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1>{
        //do something
    }
    static of<K,V>(k: K, v: V): MyMap<K, V>{
        //do something
    }
}

interface MyMap<K, V>{
    get(key: K): V;
    set(key: K, value: V): void;
}

let a = new MyMap<string, number>('k', 1); //MyMap<string, number>
let b = new MyMap('k', true) //MyMap<string, number>

a.get('k')
b.set('k', false)