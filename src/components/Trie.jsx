class TrieNode {
constructor(){

    this.children = {};
    this.isEnd = false;
}

}

class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    insert (word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    serach (prefix){
        let node = this.root;
        for(let char of prefix){
            if (!node.children[char]) 
                return [];
            node = node.children[char];
        }
        return this.collectWords(node , prefix);
    }

    collectWords(node , prefix){
        let result =[];
        if(node.isEnd)
            result.push(prefix);
        for(let char  in node.children){
            result = result.concat(this.collectWords(node.children[char] , prefix + char))
        }
        return result;
    }
}

export default Trie ;