
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `underline` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=duotone underline}
 * @preview ![underline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzMiAzMkM0MzIgNDkuNjg4IDQxNy42ODggNjQgNDAwIDY0SDM4NFYyMjRDMzg0IDMxMi4yMTkgMzEyLjIxOSAzODQgMjI0IDM4NFM2NCAzMTIuMjE5IDY0IDIyNFY2NEg0OEMzMC4zMTIgNjQgMTYgNDkuNjg4IDE2IDMyUzMwLjMxMiAwIDQ4IDBIMTYwQzE3Ny42ODggMCAxOTIgMTQuMzEyIDE5MiAzMlMxNzcuNjg4IDY0IDE2MCA2NEgxNDRWMjI0QzE0NCAyNjguMTI1IDE3OS44NzUgMzA0IDIyNCAzMDRTMzA0IDI2OC4xMjUgMzA0IDIyNFY2NEgyODhDMjcwLjMxMiA2NCAyNTYgNDkuNjg4IDI1NiAzMlMyNzAuMzEyIDAgMjg4IDBINDAwQzQxNy42ODggMCA0MzIgMTQuMzEyIDQzMiAzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDE2IDUxMkgzMkMxNC4zMTIgNTEyIDAgNDk3LjY4OCAwIDQ4MFMxNC4zMTIgNDQ4IDMyIDQ0OEg0MTZDNDMzLjY4OCA0NDggNDQ4IDQ2Mi4zMTIgNDQ4IDQ4MFM0MzMuNjg4IDUxMiA0MTYgNTEyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Underline(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M432 32C432 49.688 417.688 64 400 64H384V224C384 312.219 312.219 384 224 384S64 312.219 64 224V64H48C30.312 64 16 49.688 16 32S30.312 0 48 0H160C177.688 0 192 14.312 192 32S177.688 64 160 64H144V224C144 268.125 179.875 304 224 304S304 268.125 304 224V64H288C270.312 64 256 49.688 256 32S270.312 0 288 0H400C417.688 0 432 14.312 432 32Z" />
            <path d="M416 512H32C14.312 512 0 497.688 0 480S14.312 448 32 448H416C433.688 448 448 462.312 448 480S433.688 512 416 512Z" />
        </Icon>
    </>
}