import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  inStock: boolean

}
export interface ProductCardProps{
    product: Product;
    layout: 'row' | 'tile';
    onSelect: (id: string) => void;
}
const ProductCard: React.FC<ProductCardProps>=({product, onSelect})=> {
    return (
        <TouchableOpacity style={styles.card}
        onPress={()=>onSelect(product.id)}>
         <Image source={{uri: product.image}} style={styles.img}/>
          <View style={styles.info}>
                       <Text>{product.name}</Text>
                       <Text>Loai: {product.category}</Text>
                        <Text>Gia: {product.price}</Text>
                       <Text>Diem: {Number(product.rating).toFixed(1)}</Text>
                       <Text>{product.inStock ? "còn hàng ✅ ":"hết hàng ❌"}</Text>
                     </View>

</TouchableOpacity>
      
       
    );
}
const styles = StyleSheet.create({
  card:{
    flexDirection:'row',
    padding:10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    alignItems:'center',

  },
  img:{
    width: 70,
    height: 100,
    backgroundColor: "#eee",
    borderRadius: 4,
  },
  info:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  }
});

export default React.memo(ProductCard);
