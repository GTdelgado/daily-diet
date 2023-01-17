import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";
import { useState, useEffect } from "react";

type Props = TextInputProps & {
    value: string;
}

export function Input({ value, ...rest }: Props) {
    const [active, setActive] = useState(false);

    function handleOnBlur() {
        setActive(false);
    };

    function handleOnFocus() {
        setActive(true);
    };

    const { COLORS } = useTheme();
    return (
        <Container
            isActive={active}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={value}
            cursorColor={COLORS.GRAY_700}
            {...rest}
        />
    )
}