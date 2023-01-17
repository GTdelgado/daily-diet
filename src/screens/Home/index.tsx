import { Header } from "@components/Header";
import { Container, ListSection, Text } from "./styles";
import { Percent } from "@components/Percent";
import { Button } from "@components/Form/Button";
import { Card } from "@components/Card";
import { dietSectionDTO } from "@components/dto/dietDTO";
import { useState } from "react";
import { SectionList } from "react-native";
import { useEffect } from "react";
import { addDietToList, getDailyDietList } from "@storage/dietStorage";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [dietList, setDietList] = useState<dietSectionDTO[]>([])

  const {navigate} = useNavigation();

  async function fetchDietList(){
    setDietList(await getDailyDietList())
  }

  useEffect(() => {
    fetchDietList();
  }, []);

  async function handleNewMeal() {
    navigate('new');
    fetchDietList();
  }

  return (
    <Container>
      <Header />
      <Percent percentage={40.86} />

      <Text>Refeições</Text>

      <Button title="Nova refeição" withIcon onPress={handleNewMeal}/>

      <SectionList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        sections={dietList}
        keyExtractor={dietCard => dietCard.date}
        renderItem={({ item }) => (
          <Card hour={`${new Date(item.date).getHours()}:${new Date(item.date).getMinutes()}`} title={item.title} isInDiet={item.inDiet}/>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ListSection>{title}</ListSection>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

    </Container>
  )
}