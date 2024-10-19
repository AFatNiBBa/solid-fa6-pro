
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `turn-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=light turn-down}
 * @preview ![turn-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTguMDAyIDM2Ni40MDZDMzE0LjE4OSAzNTcuNjU2IDMwNS41NDkgMzUyIDI5Ni4wMDIgMzUySDIwOFY4MEMyMDggMzUuODc1IDE3Mi4xMDkgMCAxMjggMEwxNiAwQzcuMTU2IDAgMCA3LjE1NiAwIDE2UzcuMTU2IDMyIDE2IDMySDEyOEMxNTQuNDY5IDMyIDE3NiA1My41MzEgMTc2IDgwVjM1Mkg4OC4wMDJDNzguNDU1IDM1MiA2OS44MTQgMzU3LjY1NiA2Ni4wMDIgMzY2LjQwNlM2My45MjQgMzg1LjM0NCA3MC40MDggMzkyLjMyOEwxNzQuNDA4IDUwNC4zMjhDMTc5LjE1OCA1MDkuNDQzIDE4NS41OCA1MTIgMTkyLjAwMiA1MTJTMjA0Ljg0NiA1MDkuNDQzIDIwOS41OTYgNTA0LjMyOEwzMTMuNTk2IDM5Mi4zMjhDMzIwLjA4IDM4NS4zNDQgMzIxLjgxNCAzNzUuMTU2IDMxOC4wMDIgMzY2LjQwNlpNMjc3LjY2IDM4NEwxOTIuMDAyIDQ3Ni4yNDhMMTA2LjM0NCAzODRIMjc3LjY2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TurnDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M318.002 366.406C314.189 357.656 305.549 352 296.002 352H208V80C208 35.875 172.109 0 128 0L16 0C7.156 0 0 7.156 0 16S7.156 32 16 32H128C154.469 32 176 53.531 176 80V352H88.002C78.455 352 69.814 357.656 66.002 366.406S63.924 385.344 70.408 392.328L174.408 504.328C179.158 509.443 185.58 512 192.002 512S204.846 509.443 209.596 504.328L313.596 392.328C320.08 385.344 321.814 375.156 318.002 366.406ZM277.66 384L192.002 476.248L106.344 384H277.66Z" />
        </Icon>
    </>
}