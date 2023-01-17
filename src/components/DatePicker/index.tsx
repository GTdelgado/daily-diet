import { Input } from "@components/Form/Input";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from 'react';
import { Pressable } from "react-native";
import { useTheme } from 'styled-components'

type Props = {
  type: 'date' | 'time';
}

export function DatePicker({ type }: Props) {
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState(false);

  function handleShow(show: boolean) {
    setShow(show)
  }

  const { COLORS } = useTheme();

  return (
    <>
      {show && <RNDateTimePicker
        value={new Date()}
        onChange={(evt, selectedDate) => {
          handleShow(false)
          selectedDate && setDate(selectedDate);
        }}
        mode={type}
        onTouchCancel={() => handleShow(false)}
        display="spinner"
      />
      }
      <Pressable
        onPress={() => handleShow(true)}
      >
        <Input editable={false} value={date ? (type === "date" ? date.toLocaleDateString() : `${String(date.getHours()).padStart(2, '0')}:${date.getMinutes()}`) : ''} />
      </Pressable>
    </>
  )
}