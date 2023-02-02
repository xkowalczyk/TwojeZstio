export async function checkItemAS(key){
    let context = this;
    try {
       let value = await AsyncStorage.getItem(key);
       if (value != null){
            return true;
       }
       else {
            return false;    
    }
    } catch (error) {
      // Error retrieving data
    }
}