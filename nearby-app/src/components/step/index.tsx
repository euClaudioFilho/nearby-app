import { Text, View } from "react-native"
import { colors } from "@/styles/theme"

import { IconProps } from "@tabler/icons-react-native"
import { s } from "./styles"

type Props = {
    title: string
    description: string
    icon: React.ComponentType<IconProps>
}

export function Step(props: Props, { icon: Icon }: Props) {
    return (
        <View style={s.container}>
            <View style={s.details}>
                <Icon size={32} color={colors.red.base} />
                <Text style={s.title}>{props.title}</Text>
                <Text style={s.description}>{props.description}</Text>
            </View>
        </View>
    )
}