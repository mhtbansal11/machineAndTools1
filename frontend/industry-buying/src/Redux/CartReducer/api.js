// https://rune-veil-mantis.glitch.me/carts
import axios from "axios";

export const GetCartDataApi = async () => {
  try {
    const response = await axios.get(
      `https://industrybuying.onrender.com/cart`
    );
    return response.data;
  } catch (er) {
    console.log(er);
  }
};

export const DelCartItemApi = async (id) => {
  try {
    let response = await axios.delete(
      `https://industrybuying.onrender.com/cart/${id}`
    );
    return response;
  } catch (er) {
    console.log(er);
  }
};

export const AddToCartApi = async (el) => {
  try {
    let response = await axios.post(
      `https://industrybuying.onrender.com/cart`,
      { ...el }
    );
    return response.data;
  } catch (er) {
    console.log(er);
  }
};
export const updateappicart=async(id,el)=>{
    try{
let data= await axios.patch(  `https://industrybuying.onrender.com/cart/${id}`,{...el});
return data;
    }
    catch(er){
        console.log(er)
    }
}