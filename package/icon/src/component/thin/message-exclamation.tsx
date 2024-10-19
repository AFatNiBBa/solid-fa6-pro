
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-exclamation` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-exclamation?s=thin message-exclamation}
 * @preview ![message-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuOTM3IDI1NS45NzlDMjYwLjM0NCAyNTUuOTc5IDI2My45MzcgMjUyLjM4NiAyNjMuOTM3IDI0Ny45OFYxMDMuOTkyQzI2My45MzcgOTkuNTg2IDI2MC4zNDQgOTUuOTkyIDI1NS45MzcgOTUuOTkyUzI0Ny45MzcgOTkuNTg2IDI0Ny45MzcgMTAzLjk5MlYyNDcuOThDMjQ3LjkzNyAyNTIuMzg2IDI1MS41MzEgMjU1Ljk3OSAyNTUuOTM3IDI1NS45NzlaTTI1NiAyODcuOTc3QzI0Ny4xNzggMjg3Ljk3NyAyNDAgMjk1LjE1NiAyNDAgMzAzLjk3NlMyNDcuMTc4IDMxOS45NzQgMjU2IDMxOS45NzRTMjcyIDMxMi43OTUgMjcyIDMwMy45NzZTMjY0LjgyMiAyODcuOTc3IDI1NiAyODcuOTc3Wk00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk1VjM1MS45NzJDMCAzODcuMjE5IDI4Ljc1IDQxNS45NjcgNjQgNDE1Ljk2N0gxNjBWNDk5Ljk2QzE2MCA1MDcuMDMyIDE2NS45MiA1MTIgMTcyLjE3OCA1MTJDMTc0LjU0NyA1MTIgMTc2Ljk2MyA1MTEuMjg3IDE3OS4xMjUgNTA5LjcwOUwzMDQgNDE1Ljk2N0g0NDhDNDgzLjI1IDQxNS45NjcgNTEyIDM4Ny4yMTkgNTEyIDM1MS45NzJWNjMuOTk1QzUxMiAyOC43NDggNDgzLjI1IDAgNDQ4IDBaTTQ5NiAzNTEuOTcyQzQ5NiAzNzguNDM2IDQ3NC40NjcgMzk5Ljk2OCA0NDggMzk5Ljk2OEgyOTguNjYyTDI5NC4zOTUgNDAzLjE3M0wxNzYgNDkyLjA1MlYzOTkuOTY4SDY0QzM3LjUzMyAzOTkuOTY4IDE2IDM3OC40MzYgMTYgMzUxLjk3MlY2My45OTVDMTYgMzcuNTMgMzcuNTMzIDE1Ljk5OSA2NCAxNS45OTlINDQ4QzQ3NC40NjcgMTUuOTk5IDQ5NiAzNy41MyA0OTYgNjMuOTk1VjM1MS45NzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MessageExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M255.937 255.979C260.344 255.979 263.937 252.386 263.937 247.98V103.992C263.937 99.586 260.344 95.992 255.937 95.992S247.937 99.586 247.937 103.992V247.98C247.937 252.386 251.531 255.979 255.937 255.979ZM256 287.977C247.178 287.977 240 295.156 240 303.976S247.178 319.974 256 319.974S272 312.795 272 303.976S264.822 287.977 256 287.977ZM448 0H64C28.75 0 0 28.748 0 63.995V351.972C0 387.219 28.75 415.967 64 415.967H160V499.96C160 507.032 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.972V63.995C512 28.748 483.25 0 448 0ZM496 351.972C496 378.436 474.467 399.968 448 399.968H298.662L294.395 403.173L176 492.052V399.968H64C37.533 399.968 16 378.436 16 351.972V63.995C16 37.53 37.533 15.999 64 15.999H448C474.467 15.999 496 37.53 496 63.995V351.972Z" />
        </Icon>
    </>
}