import { Layout, GoBackButton, Resume } from "@components/Layout";
import { FormContainer, FormFieldText, NewText, TimeLabel, TimeSection } from "./styles";
import { Button } from "@components/Form/Button";
import { Input } from "@components/Form/Input";
import { useState } from "react";
import { DatePicker } from "@components/DatePicker";

export function NewMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date>(new Date);


  function handleConfirm() {
    setName('');
    console.log('confirm');
  }

  return (
    <Layout >
      <GoBackButton />
      <NewText>
        Nova Refeição
      </NewText>
      <Resume>
        <FormContainer showsVerticalScrollIndicator={false}>
          <FormFieldText>
            Nome
          </FormFieldText>
          <Input value={name} onChangeText={setName} style={{ maxHeight: 48, marginBottom: 24 }} />
          <FormFieldText>
            Descrição
          </FormFieldText>
          <Input value={description} onChangeText={setDescription} style={{ maxHeight: 120, marginBottom: 24 }} />

          <TimeSection>
            <TimeLabel>
              <FormFieldText>
                Data
              </FormFieldText>

              <DatePicker type="date" />
            </TimeLabel>


            <TimeLabel>
              <FormFieldText>
                Hora
              </FormFieldText>

              <DatePicker type="time" />
            </TimeLabel>

          </TimeSection>
        </FormContainer>
        <Button title="Cadastrar refeição" onPress={handleConfirm} />
      </Resume>
    </Layout>
  )
}