
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flashlight` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=duotone flashlight}
 * @preview ![flashlight](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMC4xMjUgMTQ5LjI1TDM4NCAxNjBIMzJDMTQuMzc1IDE2MCAwIDE3NC4zNzUgMCAxOTJWMzIwQzAgMzM3LjYyNSAxNC4zNzUgMzUyIDMyIDM1MkgzODRMNDAwLjEyNSAzNjIuNzVDNDQzLjI1IDM5MS41IDUxMiA0MTYgNTc2IDQxNlY5NkM1MTIgOTYgNDQzLjI1IDEyMC41IDQwMC4xMjUgMTQ5LjI1Wk0yODggMjg4SDI1NkMyMzguMzc1IDI4OCAyMjQgMjczLjYyNSAyMjQgMjU2UzIzOC4zNzUgMjI0IDI1NiAyMjRIMjg4QzMwNS42MjUgMjI0IDMyMCAyMzguMzc1IDMyMCAyNTZTMzA1LjYyNSAyODggMjg4IDI4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjA4IDk2SDU3NlY0MTZINjA4QzYyNS42MjUgNDE2IDY0MCA0MDEuNjI1IDY0MCAzODRWMTI4QzY0MCAxMTAuMzc1IDYyNS42MjUgOTYgNjA4IDk2Wk0yODggMjI0SDI1NkMyMzguMzc1IDIyNCAyMjQgMjM4LjM3NSAyMjQgMjU2UzIzOC4zNzUgMjg4IDI1NiAyODhIMjg4QzMwNS42MjUgMjg4IDMyMCAyNzMuNjI1IDMyMCAyNTZTMzA1LjYyNSAyMjQgMjg4IDIyNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Flashlight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M400.125 149.25L384 160H32C14.375 160 0 174.375 0 192V320C0 337.625 14.375 352 32 352H384L400.125 362.75C443.25 391.5 512 416 576 416V96C512 96 443.25 120.5 400.125 149.25ZM288 288H256C238.375 288 224 273.625 224 256S238.375 224 256 224H288C305.625 224 320 238.375 320 256S305.625 288 288 288Z" />
            <path d="M608 96H576V416H608C625.625 416 640 401.625 640 384V128C640 110.375 625.625 96 608 96ZM288 224H256C238.375 224 224 238.375 224 256S238.375 288 256 288H288C305.625 288 320 273.625 320 256S305.625 224 288 224Z" />
        </Icon>
    </>
}