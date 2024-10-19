
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wrench-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=duotone wrench-simple}
 * @preview ![wrench-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAxNzIuNDQ1QzM4NCAyNDMuNDYxIDM0NS4zMDMgMzA1LjIzIDI4OCAzMzguNDUzVjM1Mkg5NlYzMzguNDUzQzM4LjY5NyAzMDUuMjMgMCAyNDMuNDYxIDAgMTcyLjQ0NUMwIDk4LjAzNSA0Mi40IDMzLjY3MiAxMDQuMzA1IDEuODI4QzExNS4wNyAtMy43MTEgMTI4IDMuOTkyIDEyOCAxNi4xMDJWMTU5Ljk2OUwxOTIgMjIzLjk3M0wyNTYgMTU5Ljk2OVYxNi4xMDJDMjU2IDMuOTkyIDI2OC45MyAtMy43MTEgMjc5LjY5NSAxLjgyOEMzNDEuNiAzMy42NzIgMzg0IDk4LjAzNSAzODQgMTcyLjQ0NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNOTYgNDYzLjk5MlYzNTJIMjg4VjQ2My45OTJDMjg4IDQ5MC41MDggMjY2LjUxIDUxMiAyNDAgNTEySDE0NEMxMTcuNDkgNTEyIDk2IDQ5MC41MDggOTYgNDYzLjk5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function WrenchSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M384 172.445C384 243.461 345.303 305.23 288 338.453V352H96V338.453C38.697 305.23 0 243.461 0 172.445C0 98.035 42.4 33.672 104.305 1.828C115.07 -3.711 128 3.992 128 16.102V159.969L192 223.973L256 159.969V16.102C256 3.992 268.93 -3.711 279.695 1.828C341.6 33.672 384 98.035 384 172.445Z" />
            <path d="M96 463.992V352H288V463.992C288 490.508 266.51 512 240 512H144C117.49 512 96 490.508 96 463.992Z" />
        </Icon>
    </>
}