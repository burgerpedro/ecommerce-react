import React,{useState} from "react";


export const DataContext = React.createContext(null)


export const Data = (props) => {
    
    const[lista,setLista] = useState([
      
    ])

    const adicionarLista = (produto) => {
        const itemObject = [...lista];
        const item = itemObject.find((p) => p.id === produto.id);
        if (!item) {
    
          itemObject.push({
            id: produto.id,
            imagemUrl: produto.imagemUrl,
            nome: produto.nome,
            valorUnitario: produto.valorUnitario,
            descricao: produto.descricao,
            quantidade: 1,
    
          });
        } 
    
        setLista(itemObject);
        alert("Produto adicionado ao Carrinho")
      }
    

      const aumentarItem = (produto) =>{
        const itemObject = [...lista];
        const item = itemObject.find((p) => p.id === produto.id);
      
        if (item) {
          item.quantidade = item.quantidade + 1;
          setLista(itemObject);
          
        }
       }

       const diminuirItem = (produto) =>{
        const itemObject = [...lista];
        const item = itemObject.find((p) => p.id === produto.id);
      
        if (item ) {
          item.quantidade = item.quantidade - 1;
          setLista(itemObject);
          
        }
       }

       function removalItem(produto) {
        const itemObject = [...lista];
        const arrayFiltrado = itemObject.filter((p) => p.id !== produto.id);
    
        setLista(arrayFiltrado);
      }


    return(
        
       
        <DataContext.Provider value={{lista,adicionarLista, aumentarItem,diminuirItem,removalItem}}>
            {props.children}
        </DataContext.Provider>
    
    )
}