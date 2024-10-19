
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `airplay` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=regular airplay}
 * @preview ![airplay](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggMzJIODhDMzkuNDY5IDMyIDAgNzEuNDY5IDAgMTIwVjMyOEMwIDM3Ni41MzEgMzkuNDY5IDQxNiA4OCA0MTZDMTAxLjI1IDQxNiAxMTIgNDA1LjI1IDExMiAzOTJTMTAxLjI1IDM2OCA4OCAzNjhDNjUuOTM4IDM2OCA0OCAzNTAuMDYyIDQ4IDMyOFYxMjBDNDggOTcuOTM4IDY1LjkzOCA4MCA4OCA4MEg0ODhDNTEwLjA2MiA4MCA1MjggOTcuOTM4IDUyOCAxMjBWMzI4QzUyOCAzNTAuMDYyIDUxMC4wNjIgMzY4IDQ4OCAzNjhDNDc0Ljc1IDM2OCA0NjQgMzc4Ljc1IDQ2NCAzOTJTNDc0Ljc1IDQxNiA0ODggNDE2QzUzNi41MzEgNDE2IDU3NiAzNzYuNTMxIDU3NiAzMjhWMTIwQzU3NiA3MS40NjkgNTM2LjUzMSAzMiA0ODggMzJaTTMyMS45MTYgMjg2LjA2NkMzMDMuMjkxIDI2Ny4zMTIgMjcyLjc4OSAyNjcuMzEyIDI1NC4wMzcgMjg2LjA2NkwxNDIuMDMzIDM5OC4xMDJDMTEyLjAzMSA0MjguMjM0IDEzMy4yODEgNDgwIDE3Ni4wMzUgNDgwSDM5OS45MkM0NDIuNTQ3IDQ4MCA0NjQuMTc0IDQyOC4yMzQgNDMzLjc5NyAzOTguMTAyTDMyMS45MTYgMjg2LjA2NlpNMTc2LjAzNSA0MzEuOTg0TDI4OC4wMzkgMzE5Ljk1M0w0MDAuMDQ1IDQzMS45ODRIMTc2LjAzNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Airplay(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M488 32H88C39.469 32 0 71.469 0 120V328C0 376.531 39.469 416 88 416C101.25 416 112 405.25 112 392S101.25 368 88 368C65.938 368 48 350.062 48 328V120C48 97.938 65.938 80 88 80H488C510.062 80 528 97.938 528 120V328C528 350.062 510.062 368 488 368C474.75 368 464 378.75 464 392S474.75 416 488 416C536.531 416 576 376.531 576 328V120C576 71.469 536.531 32 488 32ZM321.916 286.066C303.291 267.312 272.789 267.312 254.037 286.066L142.033 398.102C112.031 428.234 133.281 480 176.035 480H399.92C442.547 480 464.174 428.234 433.797 398.102L321.916 286.066ZM176.035 431.984L288.039 319.953L400.045 431.984H176.035Z" />
        </Icon>
    </>
}