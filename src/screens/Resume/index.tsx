import { Container, Description, ExpandIcon, Percentage, InDiet, ResumeContainer, Sequence, GreaterText, MediunText, SmallText, InDietContainer } from "./styles";
import { dietSectionDTO } from "@components/dto/dietDTO";
import { getDailyDietList } from "@storage/dietStorage";
import { useState } from "react";
import { useEffect } from "react";

type Details = {
  greatherSequence: number;
  total: number;
  inDiet: number;
  outDiet: number;
  percentage: number;
}

export function Resume() {
  const [dietList, setDietList] = useState<dietSectionDTO[]>([])
  async function fetchDietList() {
    setDietList(await getDailyDietList())
  }

  function getDetails() {
    const detail: Details = {
      total: 0,
      greatherSequence: 0,
      inDiet: 0,
      outDiet: 0,
      percentage: 0,
    };

    let atual = {
      lastStatus: true,
      atualSequence: 0,
      bestSequence: 0,
    }

    dietList.forEach(dietSection => {
      detail.total += dietSection.data.length;

      dietSection.data.forEach(diet => {
        diet.inDiet ? detail.inDiet++ : detail.outDiet++;

        if (diet.inDiet === true && atual.lastStatus === true) {
          atual.atualSequence++;
          console.log(atual.atualSequence)
        } else {
          atual.bestSequence = atual.bestSequence > atual.atualSequence ? atual.bestSequence : atual.atualSequence;
          atual.atualSequence = 1;
        }

        atual.lastStatus = diet.inDiet;
      })
    })
    detail.greatherSequence = atual.bestSequence > atual.atualSequence ? atual.bestSequence : atual.atualSequence;
    
    detail.percentage = (detail.inDiet / detail.total * 100);
    return detail;
  }

  const detail = getDetails();


  useEffect(() => {
    fetchDietList();
    getDetails();
  }, []);

  return (
    <Container percentage={detail.percentage}>
      <Percentage>{detail.percentage.toFixed(2)}%</Percentage>
      <Description>das refeições dentro da dieta</Description>
      <ExpandIcon percentage={Number(detail.percentage)} />
      <ResumeContainer>
        <MediunText>Estatísticas gerais</MediunText>
        <Sequence >
          <GreaterText>{detail.greatherSequence}</GreaterText>
          <SmallText>melhor sequência de pratos dentro da dieta</SmallText>
        </Sequence>
        <Sequence >
          <GreaterText>{detail.total}</GreaterText>
          <SmallText>refeições registradas</SmallText>
        </Sequence>

        <InDietContainer>
          <InDiet inDiet={true}>
            <GreaterText>{detail.inDiet}</GreaterText>
            <SmallText>refeições dentro da dieta</SmallText>
          </InDiet>
          <InDiet inDiet={false}>
            <GreaterText>{detail.outDiet}</GreaterText>
            <SmallText>refeições fora da dieta</SmallText>
          </InDiet>
        </InDietContainer>
      </ResumeContainer>
    </Container>
  );
};