
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `salad` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/salad?s=light salad}
 * @preview ![salad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTUuODI4IDI4OEgxNi4xNzJDNy4wNDkgMjg4IC0wLjY5OSAyOTUuNzUgMC4wNTEgMzA0Ljg3NUM2Ljc5OSAzODEuMjUgNTguMTY0IDQ0NC4yNSAxMjguMDI1IDQ2OC43NVY0ODBDMTI4LjE1IDQ5Ny43NSAxNDIuNTIxIDUxMiAxNjAuMjcgNTEySDM1Mi40OEMzNzAuMTA0IDUxMiAzODMuOTc1IDQ5Ny42MjUgMzgzLjk3NSA0ODBWNDY4LjVDNDUzLjQ2MSA0NDMuODc1IDUwNS4zMjYgMzgxIDUxMS45NDkgMzA0Ljg3NUM1MTIuNjk5IDI5NS43NSA1MDQuOTUxIDI4OCA0OTUuODI4IDI4OFpNMzczLjcyNyA0MzguMzc1TDM1MS45OCA0NDUuODc1VjQ4MEgxNjAuMDJWNDQ2TDEzOC43NzMgNDM4LjVDODUuMTU4IDQxOS43NSA0NS43OTEgMzc0LjI1IDM0LjY2OCAzMjBINDc3LjMzMkM0NjYuMjA5IDM3NC4xMjUgNDI3LjA5MiA0MTkuMzc1IDM3My43MjcgNDM4LjM3NVpNODQuNjg4IDE0OC42ODhDNzguNDM4IDE1NC45MzggNzguNDM4IDE2NS4wNjMgODQuNjg4IDE3MS4zMTJMMTY0LjY4OCAyNTEuMzEyQzE2Ny44MTIgMjU0LjQzOCAxNzEuOTA2IDI1NiAxNzYgMjU2UzE4NC4xODggMjU0LjQzOCAxODcuMzEyIDI1MS4zMTJDMTkzLjU2MiAyNDUuMDYyIDE5My41NjIgMjM0LjkzNyAxODcuMzEyIDIyOC42ODhMMTA3LjMxMiAxNDguNjg4QzEwMS4wNjIgMTQyLjQzOCA5MC45MzggMTQyLjQzOCA4NC42ODggMTQ4LjY4OFpNMjI0IDExMlYyNDBDMjI0IDI0OC44NDQgMjMxLjE1NiAyNTYgMjQwIDI1NlMyNTYgMjQ4Ljg0NCAyNTYgMjQwVjExMkMyNTYgMTAzLjE1NiAyNDguODQ0IDk2IDI0MCA5NlMyMjQgMTAzLjE1NiAyMjQgMTEyWk0yODggMjQwQzI4OCAyNDguODQ0IDI5NS4xNTYgMjU2IDMwNCAyNTZTMzIwIDI0OC44NDQgMzIwIDI0MEMzMjAgMTk1Ljg5MSAzNTUuODc1IDE2MCA0MDAgMTYwUzQ4MCAxOTUuODkxIDQ4MCAyNDBDNDgwIDI0OC44NDQgNDg3LjE1NiAyNTYgNDk2IDI1NlM1MTIgMjQ4Ljg0NCA1MTIgMjQwQzUxMiAxNzguMjUgNDYxLjc1IDEyOCA0MDAgMTI4UzI4OCAxNzguMjUgMjg4IDI0MFpNMjYuODc1IDI1NkMyOS4xODggMjU2IDMxLjUzMSAyNTUuNSAzMy43NSAyNTQuNDUzQzQxLjcxOSAyNTAuNjU2IDQ1LjEyNSAyNDEuMTA5IDQxLjMxMiAyMzMuMTI1QzM1LjEyNSAyMjAuMTI1IDMyIDIwNi4xODggMzIgMTkxLjY3MkMzMiAxMzguNTYyIDc1LjA2MiA5NS4zNDQgMTI4IDk1LjM0NEMxMzIuMTg4IDk1LjM0NCAxMzYuMjE5IDk2IDE0MS42ODggOTYuNzk3TDE1NC4xMjUgOTguNjA5TDE1OC44NDQgODYuOTY5QzE3Mi4zNDQgNTMuNTc4IDIwNC4yMTkgMzIgMjQwIDMyUzMwNy42NTYgNTMuNTc4IDMyMS4xNTYgODYuOTY5TDMyNy4zMTIgOTguNDIyTDMzOS43ODEgOTYuNTk0QzM1Ny41MzEgOTMuOTM4IDM3Ni41IDk2LjY1NiAzOTMuMDk0IDEwNC41OTRDNDAxLjEyNSAxMDguNDIyIDQxMC42MjUgMTA1LjA0NyA0MTQuNDM3IDk3LjA0N0M0MTguMjUgODkuMDc4IDQxNC44NzUgNzkuNTMxIDQwNi45MDYgNzUuNzE5QzM4Ny43NSA2Ni41NjMgMzY3LjE4NyA2MS42NzIgMzQ1LjU2MiA2My42NDFDMzI0LjkwNiAyNC42MDkgMjg0LjcxOSAwIDI0MCAwUzE1NS4wOTQgMjQuNjA5IDEzNC40MzggNjMuNjI1QzEzMi4zMTIgNjMuNDUzIDEzMC4xNTYgNjMuMzQ0IDEyOCA2My4zNDRDNTcuNDA2IDYzLjM0NCAwIDEyMC45MDYgMCAxOTEuNjcyQzAgMjEwLjk4NCA0LjE4OCAyMjkuNTQ3IDEyLjQzOCAyNDYuODc1QzE1LjE1NiAyNTIuNjQxIDIwLjkwNiAyNTYgMjYuODc1IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Salad(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M495.828 288H16.172C7.049 288 -0.699 295.75 0.051 304.875C6.799 381.25 58.164 444.25 128.025 468.75V480C128.15 497.75 142.521 512 160.27 512H352.48C370.104 512 383.975 497.625 383.975 480V468.5C453.461 443.875 505.326 381 511.949 304.875C512.699 295.75 504.951 288 495.828 288ZM373.727 438.375L351.98 445.875V480H160.02V446L138.773 438.5C85.158 419.75 45.791 374.25 34.668 320H477.332C466.209 374.125 427.092 419.375 373.727 438.375ZM84.688 148.688C78.438 154.938 78.438 165.063 84.688 171.312L164.688 251.312C167.812 254.438 171.906 256 176 256S184.188 254.438 187.312 251.312C193.562 245.062 193.562 234.937 187.312 228.688L107.312 148.688C101.062 142.438 90.938 142.438 84.688 148.688ZM224 112V240C224 248.844 231.156 256 240 256S256 248.844 256 240V112C256 103.156 248.844 96 240 96S224 103.156 224 112ZM288 240C288 248.844 295.156 256 304 256S320 248.844 320 240C320 195.891 355.875 160 400 160S480 195.891 480 240C480 248.844 487.156 256 496 256S512 248.844 512 240C512 178.25 461.75 128 400 128S288 178.25 288 240ZM26.875 256C29.188 256 31.531 255.5 33.75 254.453C41.719 250.656 45.125 241.109 41.312 233.125C35.125 220.125 32 206.188 32 191.672C32 138.562 75.062 95.344 128 95.344C132.188 95.344 136.219 96 141.688 96.797L154.125 98.609L158.844 86.969C172.344 53.578 204.219 32 240 32S307.656 53.578 321.156 86.969L327.312 98.422L339.781 96.594C357.531 93.938 376.5 96.656 393.094 104.594C401.125 108.422 410.625 105.047 414.437 97.047C418.25 89.078 414.875 79.531 406.906 75.719C387.75 66.563 367.187 61.672 345.562 63.641C324.906 24.609 284.719 0 240 0S155.094 24.609 134.438 63.625C132.312 63.453 130.156 63.344 128 63.344C57.406 63.344 0 120.906 0 191.672C0 210.984 4.188 229.547 12.438 246.875C15.156 252.641 20.906 256 26.875 256Z" />
        </Icon>
    </>
}