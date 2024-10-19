
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cart-flatbed-suitcase` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-suitcase?s=duotone cart-flatbed-suitcase}
 * @preview ![cart-flatbed-suitcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCA0OEM0ODAgMjEuNSA0NTguNSAwIDQzMiAwSDMzNkMzMDkuNSAwIDI4OCAyMS41IDI4OCA0OFYzMjBINDgwVjQ4Wk00MzIgOTZIMzM2VjQ4SDQzMlY5NlpNMjI0IDMyMEgyNTZWOTZIMjI0QzIwNi4zNzUgOTYgMTkyIDExMC4zNzUgMTkyIDEyOFYyODhDMTkyIDMwNS42MjUgMjA2LjM3NSAzMjAgMjI0IDMyMFpNNTc2IDI4OFYxMjhDNTc2IDExMC4zNzUgNTYxLjYyNSA5NiA1NDQgOTZINTEyVjMyMEg1NDRDNTYxLjYyNSAzMjAgNTc2IDMwNS42MjUgNTc2IDI4OFpNMjUzLjEyNSA0NDhDMjU0Ljc1IDQ1MyAyNTYgNDU4LjM3NSAyNTYgNDY0QzI1NiA0OTAuNSAyMzQuNSA1MTIgMjA4IDUxMlMxNjAgNDkwLjUgMTYwIDQ2NEMxNjAgNDU4LjM3NSAxNjEuMTI1IDQ1MyAxNjIuODc1IDQ0OEgyNTMuMTI1Wk01NDEuMjUgNDQ4QzU0Mi44NzUgNDUzIDU0NC4xMjUgNDU4LjM3NSA1NDQuMTI1IDQ2NEM1NDQuMTI1IDQ5MC41IDUyMi42MjUgNTEyIDQ5Ni4xMjUgNTEyUzQ0OC4xMjUgNDkwLjUgNDQ4LjEyNSA0NjRDNDQ4LjEyNSA0NTguMzc1IDQ0OS4yNSA0NTMgNDUxIDQ0OEg1NDEuMjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUxMiA5Nkg0ODBWMzIwSDUxMlY5NlpNMjg4IDk2SDI1NlYzMjBIMjg4Vjk2Wk02MjQgMzg0SDEyOFYxNkMxMjggNy4yNSAxMjAuNzUgMCAxMTIgMEgxNkM3LjI1IDAgMCA3LjI1IDAgMTZWNDhDMCA1Ni43NSA3LjI1IDY0IDE2IDY0SDY0VjQzMkM2NCA0NDAuNzUgNzEuMjUgNDQ4IDgwIDQ0OEg2MjRDNjMyLjc1IDQ0OCA2NDAgNDQwLjc1IDY0MCA0MzJWNDAwQzY0MCAzOTEuMjUgNjMyLjc1IDM4NCA2MjQgMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CartFlatbedSuitcase(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M480 48C480 21.5 458.5 0 432 0H336C309.5 0 288 21.5 288 48V320H480V48ZM432 96H336V48H432V96ZM224 320H256V96H224C206.375 96 192 110.375 192 128V288C192 305.625 206.375 320 224 320ZM576 288V128C576 110.375 561.625 96 544 96H512V320H544C561.625 320 576 305.625 576 288ZM253.125 448C254.75 453 256 458.375 256 464C256 490.5 234.5 512 208 512S160 490.5 160 464C160 458.375 161.125 453 162.875 448H253.125ZM541.25 448C542.875 453 544.125 458.375 544.125 464C544.125 490.5 522.625 512 496.125 512S448.125 490.5 448.125 464C448.125 458.375 449.25 453 451 448H541.25Z" />
            <path d="M512 96H480V320H512V96ZM288 96H256V320H288V96ZM624 384H128V16C128 7.25 120.75 0 112 0H16C7.25 0 0 7.25 0 16V48C0 56.75 7.25 64 16 64H64V432C64 440.75 71.25 448 80 448H624C632.75 448 640 440.75 640 432V400C640 391.25 632.75 384 624 384Z" />
        </Icon>
    </>
}