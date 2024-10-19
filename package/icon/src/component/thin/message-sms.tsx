
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-sms` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-sms?s=thin message-sms}
 * @preview ![message-sms](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggLTAuMDAySDY0QzI4Ljc1IC0wLjAwMiAwIDI4Ljc0NiAwIDYzLjk5MlYzNTEuOTY5QzAgMzg3LjIxNyAyOC43NSA0MTUuOTY1IDY0IDQxNS45NjVIMTYwVjQ5OS45NTdDMTYwIDUwNy4wMjkgMTY1LjkyIDUxMS45OTggMTcyLjE3OCA1MTEuOTk4QzE3NC41NDcgNTExLjk5OCAxNzYuOTYzIDUxMS4yODUgMTc5LjEyNSA1MDkuNzA3TDMwNCA0MTUuOTY1SDQ0OEM0ODMuMjUgNDE1Ljk2NSA1MTIgMzg3LjIxNyA1MTIgMzUxLjk2OVY2My45OTJDNTEyIDI4Ljc0NiA0ODMuMjUgLTAuMDAyIDQ0OCAtMC4wMDJaTTQ5NiAzNTEuOTY5QzQ5NiAzNzguNDM0IDQ3NC40NjcgMzk5Ljk2NSA0NDggMzk5Ljk2NUgyOTguNjYyTDI5NC4zOTUgNDAzLjE3TDE3NiA0OTIuMDUxVjM5OS45NjVINjRDMzcuNTMzIDM5OS45NjUgMTYgMzc4LjQzNCAxNiAzNTEuOTY5VjYzLjk5MkMxNiAzNy41MjcgMzcuNTMzIDE1Ljk5NiA2NCAxNS45OTZINDQ4QzQ3NC40NjcgMTUuOTk2IDQ5NiAzNy41MjcgNDk2IDYzLjk5MlYzNTEuOTY5Wk0xMzguMTg4IDIwMC4yODFMMTM0IDE5OS4wNjJDMTE1LjU2MiAxOTMuNjg4IDExMC42ODggMTg5LjQzOCAxMTIuMjgxIDE4MC4xODhDMTE0LjE1NiAxNjkuMjUgMTI4LjkwNiAxNjYuNjI1IDE0Mi45MzggMTY4LjcxOUMxNDYuNzE5IDE2OS4zMTMgMTUxLjMxMyAxNzAuNTYzIDE1Ny4zNzUgMTcyLjY1NkMxNjEuNTk0IDE3NC4xNTYgMTY2LjEyNSAxNzEuOTA2IDE2Ny41NjMgMTY3LjcxOVMxNjYuNzgxIDE1OC45NjkgMTYyLjYyNSAxNTcuNTMxQzE1NS41OTQgMTU1LjEyNSAxNTAuMTI1IDE1My42NTYgMTQ1LjQwNiAxNTIuOTA2QzExOS40MzggMTQ4LjkzOCA5OS43NSAxNTguNzE5IDk2LjUzMSAxNzcuNDY5QzkyLjA2MyAyMDMuNDY5IDExNi40MDYgMjEwLjU5NCAxMjkuNSAyMTQuNDM3TDEzMy44MTIgMjE1LjY1NkMxNTUuMTU2IDIyMS43ODEgMTYxLjUzMSAyMjUuMzQ0IDE1OS43MTkgMjM1Ljc4MUMxNTcuODEyIDI0Ni43NSAxNDIuOTM3IDI0OS4zNzUgMTI5LjA2MiAyNDcuMjgxQzEyMy4wNjIgMjQ2LjM3NSAxMTUuOTM4IDI0My43ODEgMTA5LjYyNSAyNDEuNTMxTDEwNi42ODggMjQwLjQ2OUMxMDIuMzc1IDIzOC45NjkgOTcuOTA2IDI0MS4xNTYgOTYuNDY5IDI0NS4zMTJDOTQuOTY5IDI0OS40NjkgOTcuMTU2IDI1NC4wNjIgMTAxLjMxMyAyNTUuNTMxTDEwNC4yMTkgMjU2LjU2MkMxMTEuMTg4IDI1OS4wOTQgMTE5LjA5NCAyNjEuOTM4IDEyNi41OTQgMjYzLjA5NEMxMzAuNSAyNjMuNjg4IDEzNC4yNSAyNjQgMTM3Ljg0NCAyNjRDMTU4LjEyNSAyNjQgMTcyLjcxOSAyNTQuNDY5IDE3NS40NjkgMjM4LjUzMUMxODAuMDMxIDIxMi4yNSAxNTUuODQ0IDIwNS4zNDQgMTM4LjE4OCAyMDAuMjgxWk0zMDYuNTMxIDE1Mi40MDZDMzAzLjI1IDE1MS4zMTIgMjk5LjY1NiAxNTIuNDY5IDI5Ny41OTQgMTU1LjE4OEwyNTYgMjEwLjY1NkwyMTQuNDA2IDE1NS4xODhDMjEyLjM0NCAxNTIuNDY5IDIwOC43NSAxNTEuMjgxIDIwNS40NjkgMTUyLjQwNkMyMDIuMjE5IDE1My41IDIwMCAxNTYuNTYyIDIwMCAxNjBWMjU2QzIwMCAyNjAuNDA2IDIwMy41OTQgMjY0IDIwOCAyNjRTMjE2IDI2MC40MDYgMjE2IDI1NlYxODRMMjQ5LjU5NCAyMjguODEyQzI1Mi42NTYgMjMyLjgxMiAyNTkuMzQ0IDIzMi44MTIgMjYyLjQwNiAyMjguODEyTDI5NiAxODRWMjU2QzI5NiAyNjAuNDA2IDI5OS41OTQgMjY0IDMwNCAyNjRTMzEyIDI2MC40MDYgMzEyIDI1NlYxNjBDMzEyIDE1Ni41NjIgMzA5Ljc4MSAxNTMuNSAzMDYuNTMxIDE1Mi40MDZaTTM3OC4xODggMjAwLjI4MUwzNzQgMTk5LjA2MkMzNTUuNTYyIDE5My42ODcgMzUwLjY4OCAxODkuNDM4IDM1Mi4yODEgMTgwLjE4N0MzNTQuMTg4IDE2OS4yNSAzNjguOTY5IDE2Ni42MjUgMzgyLjkzOCAxNjguNzE5QzM4Ni43MTkgMTY5LjMxMiAzOTEuMzEzIDE3MC41NjIgMzk3LjM3NSAxNzIuNjU2QzQwMS41NjMgMTc0LjE1NiA0MDYuMTI1IDE3MS45MDYgNDA3LjU2MyAxNjcuNzE5UzQwNi43ODEgMTU4Ljk2OSA0MDIuNjI1IDE1Ny41MzFDMzk1LjU5NCAxNTUuMTI1IDM5MC4xMjUgMTUzLjY1NiAzODUuNDA2IDE1Mi45MDZDMzU5LjQwNiAxNDguOTM4IDMzOS43NSAxNTguNzE5IDMzNi41MzEgMTc3LjQ2OUMzMzIuMDYzIDIwMy40NjkgMzU2LjQwNiAyMTAuNTk0IDM2OS41IDIxNC40MzdMMzczLjgxMiAyMTUuNjU2QzM5NS4xNTYgMjIxLjc4MSA0MDEuNTMxIDIyNS4zNDQgMzk5LjcxOSAyMzUuNzgxQzM5Ny44MTIgMjQ2Ljc1IDM4Mi45MzcgMjQ5LjM3NSAzNjkuMDYyIDI0Ny4yODFDMzYzLjA2MiAyNDYuMzc1IDM1NS45MzggMjQzLjc4MSAzNDkuNjI1IDI0MS41MzFMMzQ2LjY4NyAyNDAuNDY5QzM0Mi40MDYgMjM4Ljk2OSAzMzcuOTM3IDI0MS4xNTYgMzM2LjQ2OSAyNDUuMzEyQzMzNC45NjkgMjQ5LjQ2OSAzMzcuMTU2IDI1NC4wNjIgMzQxLjMxMiAyNTUuNTMxTDM0NC4yMTkgMjU2LjU2MkMzNTEuMTg3IDI1OS4wOTQgMzU5LjA5NCAyNjEuOTM3IDM2Ni41OTQgMjYzLjA5NEMzNzAuNSAyNjMuNjg4IDM3NC4yNSAyNjQgMzc3Ljg0NCAyNjRDMzk4LjEyNSAyNjQgNDEyLjcxOSAyNTQuNDY5IDQxNS40NjkgMjM4LjUzMUM0MjAuMDMxIDIxMi4yNSAzOTUuODQ0IDIwNS4zNDQgMzc4LjE4OCAyMDAuMjgxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageSms(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 -0.002H64C28.75 -0.002 0 28.746 0 63.992V351.969C0 387.217 28.75 415.965 64 415.965H160V499.957C160 507.029 165.92 511.998 172.178 511.998C174.547 511.998 176.963 511.285 179.125 509.707L304 415.965H448C483.25 415.965 512 387.217 512 351.969V63.992C512 28.746 483.25 -0.002 448 -0.002ZM496 351.969C496 378.434 474.467 399.965 448 399.965H298.662L294.395 403.17L176 492.051V399.965H64C37.533 399.965 16 378.434 16 351.969V63.992C16 37.527 37.533 15.996 64 15.996H448C474.467 15.996 496 37.527 496 63.992V351.969ZM138.188 200.281L134 199.062C115.562 193.688 110.688 189.438 112.281 180.188C114.156 169.25 128.906 166.625 142.938 168.719C146.719 169.313 151.313 170.563 157.375 172.656C161.594 174.156 166.125 171.906 167.563 167.719S166.781 158.969 162.625 157.531C155.594 155.125 150.125 153.656 145.406 152.906C119.438 148.938 99.75 158.719 96.531 177.469C92.063 203.469 116.406 210.594 129.5 214.437L133.812 215.656C155.156 221.781 161.531 225.344 159.719 235.781C157.812 246.75 142.937 249.375 129.062 247.281C123.062 246.375 115.938 243.781 109.625 241.531L106.688 240.469C102.375 238.969 97.906 241.156 96.469 245.312C94.969 249.469 97.156 254.062 101.313 255.531L104.219 256.562C111.188 259.094 119.094 261.938 126.594 263.094C130.5 263.688 134.25 264 137.844 264C158.125 264 172.719 254.469 175.469 238.531C180.031 212.25 155.844 205.344 138.188 200.281ZM306.531 152.406C303.25 151.312 299.656 152.469 297.594 155.188L256 210.656L214.406 155.188C212.344 152.469 208.75 151.281 205.469 152.406C202.219 153.5 200 156.562 200 160V256C200 260.406 203.594 264 208 264S216 260.406 216 256V184L249.594 228.812C252.656 232.812 259.344 232.812 262.406 228.812L296 184V256C296 260.406 299.594 264 304 264S312 260.406 312 256V160C312 156.562 309.781 153.5 306.531 152.406ZM378.188 200.281L374 199.062C355.562 193.687 350.688 189.438 352.281 180.187C354.188 169.25 368.969 166.625 382.938 168.719C386.719 169.312 391.313 170.562 397.375 172.656C401.563 174.156 406.125 171.906 407.563 167.719S406.781 158.969 402.625 157.531C395.594 155.125 390.125 153.656 385.406 152.906C359.406 148.938 339.75 158.719 336.531 177.469C332.063 203.469 356.406 210.594 369.5 214.437L373.812 215.656C395.156 221.781 401.531 225.344 399.719 235.781C397.812 246.75 382.937 249.375 369.062 247.281C363.062 246.375 355.938 243.781 349.625 241.531L346.687 240.469C342.406 238.969 337.937 241.156 336.469 245.312C334.969 249.469 337.156 254.062 341.312 255.531L344.219 256.562C351.187 259.094 359.094 261.937 366.594 263.094C370.5 263.688 374.25 264 377.844 264C398.125 264 412.719 254.469 415.469 238.531C420.031 212.25 395.844 205.344 378.188 200.281Z" />
        </Icon>
    </>
}