import { Description, Percentage, InDiet, Sequence, GreaterText, MediunText, SmallText, InDietContainer } from "./styles";
import { dietSectionDTO } from "@components/dto/dietDTO";
import { getDailyDietList } from "@storage/dietStorage";
import { useState, useEffect } from "react";
import { Layout, GoBackButton, Resume } from "@components/Layout";

type Details = {
  greatherSequence: number;
  total: number;
  inDiet: number;
  outDiet: number;
  percentage: number;
}

export function ResumeList() {
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
    <Layout percentage={detail.percentage}>
      <GoBackButton percentage={detail.percentage}/>
      <Percentage>{detail.percentage.toFixed(2)}%</Percentage>
      <Description>das refeições dentro da dieta</Description>
      <Resume>
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
      </Resume>
    </Layout>
  );
};