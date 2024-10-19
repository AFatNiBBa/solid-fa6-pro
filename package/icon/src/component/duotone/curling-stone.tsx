
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `curling-stone` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=duotone curling-stone}
 * @preview ![curling-stone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMzg0QzAgNDM3LjAyIDQyLjk4IDQ4MCA5NiA0ODBINDgwQzUzMy4wMiA0ODAgNTc2IDQzNy4wMiA1NzYgMzg0VjM2OEgwVjM4NFpNNDgwIDIyNEg5NkM0Mi45OCAyMjQgMCAyNjYuOTggMCAzMjBWMzM2SDU3NlYzMjBDNTc2IDI2Ni45OCA1MzMuMDIgMjI0IDQ4MCAyMjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ4MCAyMjRIOTZDOTYgMTg4LjY1MiAxMjQuNjU0IDE2MCAxNjAgMTYwVjEyOEMxNjAgNzQuOTggMjAyLjk4IDMyIDI1NiAzMkg0MDBDNDA4LjgzNiAzMiA0MTYgMzkuMTY0IDQxNiA0OFY4MEM0MTYgODguODM2IDQwOC44MzYgOTYgNDAwIDk2SDI1NkMyMzguMzI2IDk2IDIyNCAxMTAuMzI4IDIyNCAxMjhWMTYwSDQxNkM0NTEuMzQ2IDE2MCA0ODAgMTg4LjY1MiA0ODAgMjI0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CurlingStone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M0 384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V368H0V384ZM480 224H96C42.98 224 0 266.98 0 320V336H576V320C576 266.98 533.02 224 480 224Z" />
            <path d="M480 224H96C96 188.652 124.654 160 160 160V128C160 74.98 202.98 32 256 32H400C408.836 32 416 39.164 416 48V80C416 88.836 408.836 96 400 96H256C238.326 96 224 110.328 224 128V160H416C451.346 160 480 188.652 480 224Z" />
        </Icon>
    </>
}