import { useEffect, useState } from 'react';
import { _View, ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import ProductCard,{Product}from './component/ProductCard';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=> {
    fetch("https://6abb785db2118ed7abb8a8dd.mockapi.io/products")
    .then((res) => res.json())
    .then((data) =>{
      setProducts(data);
      setLoading(false);
    })
    .catch((err)=> {
      console.error(err);
      setLoading(false);
    })
  },[]);

  const handleSelect = (id: string)=> {
    const selectItem = products.find((p)=>p.id===id);
    if ((selectItem)){
      window.alert("San pham da chon", selectItem.name);
    }
  };
  return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
          <Text style={styles.textHeader}>
            Product App
          </Text>
        {loading ? (
          <ActivityIndicator size="large"/>
        ):(
          <FlatList
          data={products}
          keyExtractor={(item)=> item.id.toString()}
          renderItem={({item})=> (
           <ProductCard product={item} onSelect={handleSelect} />
          )}
          />
          
        )}
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:16
  },
textHeader:{
  fontSize:22,
  fontWeight:'bold',
  color:'#0f172a',
  alignItems:'center',
  textAlign:'center',
},
name:{
  fontSize: 16,
  fontWeight: "bold",
  marginBottom:4,
},
item:{
  flex:1,
  padding: 12,
  marginBottom: 10,
  borderWidth:1,
  borderColor:"#ccc",
  borderRadius:6,

}
});
