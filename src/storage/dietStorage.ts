import { dietDTO, dietSectionDTO } from '@components/dto/dietDTO';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_LIST } from "./storageConfig";


export async function getDailyDietList(){
  try {
    const storage = await AsyncStorage.getItem(DIET_LIST);

    const dietList: dietSectionDTO[] = storage ? JSON.parse(storage) : []
    
    return dietList;
  } catch (error) {
    throw error;
  }
}

export async function addDietToList(diet: dietDTO) {
  try {
    const storage = await AsyncStorage.getItem(DIET_LIST);

    const dietList: dietSectionDTO[] = storage ? JSON.parse(storage) : []
    
    let haveDate = false;

    dietList.forEach(dietSection => {
      if(dietSection.title ==  new Date(diet.date).toLocaleDateString()){
        haveDate = true;
        dietSection.data = [diet, ...dietSection.data]
      }
    })

    if(!haveDate) {
      dietList.push({
        title: new Date().toLocaleDateString(),
        data: [diet]
      })
    }

    await AsyncStorage.setItem(DIET_LIST, JSON.stringify(dietList));
  } catch (error) {
    throw error;
  }
}

export async function removeDietFromList(dietDate: string){
  try {
    const storage = await AsyncStorage.getItem(DIET_LIST);

    const dietList: dietSectionDTO[] = storage ? JSON.parse(storage) : []
    
    dietList.forEach(dietSection => {
      dietSection.data = dietSection.data.filter(diet => diet.date !== dietDate)
    })

    await AsyncStorage.setItem(DIET_LIST, JSON.stringify(dietList));
  } catch (error) {
    throw error;
  }
}