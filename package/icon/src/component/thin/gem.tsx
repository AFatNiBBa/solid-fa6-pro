
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gem` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=thin gem}
 * @preview ![gem](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTAuNCAxOTUuMjAzTDM5MC40MDMgMzUuMjAzQzM4OC44NzIgMzMuMTg4IDM4Ni41MjggMzIgMzgzLjk5NyAzMkgxMjguMDAzQzEyNS40NzIgMzIgMTIzLjEyOCAzMy4xODggMTIxLjU5NyAzNS4yMDNMMS42IDE5NS4yMDNDLTAuNzEzIDE5OC4yNjYgLTAuNDk0IDIwMi41NDcgMi4xIDIwNS4zOTFMMjUwLjA5NCA0NzcuMzkxQzI1MS41OTQgNDc5LjA0NyAyNTMuNzUgNDgwIDI1NiA0ODBTMjYwLjQwNiA0NzkuMDQ3IDI2MS45MDYgNDc3LjM5MUw1MDkuOSAyMDUuMzkxQzUxMi40OTQgMjAyLjU0NyA1MTIuNzEzIDE5OC4yNjYgNTEwLjQgMTk1LjIwM1pNMzgzLjc5NiA1My4wNjRMNDg3Ljk5NSAxOTJIMjcyLjY1TDM4My43OTYgNTMuMDY0Wk0yNTYgMTg3LjE4OEwxNDQuNjUzIDQ4SDM2Ny4zNDdMMjU2IDE4Ny4xODhaTTEyOC4yMDQgNTMuMDY0TDIzOS4zNSAxOTJIMjQuMDA1TDEyOC4yMDQgNTMuMDY0Wk0yNTYgNDYwLjEyNUwyNi4xMyAyMDhINDg1Ljg3TDI1NiA0NjAuMTI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Gem(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M510.4 195.203L390.403 35.203C388.872 33.188 386.528 32 383.997 32H128.003C125.472 32 123.128 33.188 121.597 35.203L1.6 195.203C-0.713 198.266 -0.494 202.547 2.1 205.391L250.094 477.391C251.594 479.047 253.75 480 256 480S260.406 479.047 261.906 477.391L509.9 205.391C512.494 202.547 512.713 198.266 510.4 195.203ZM383.796 53.064L487.995 192H272.65L383.796 53.064ZM256 187.188L144.653 48H367.347L256 187.188ZM128.204 53.064L239.35 192H24.005L128.204 53.064ZM256 460.125L26.13 208H485.87L256 460.125Z" />
        </Icon>
    </>
}