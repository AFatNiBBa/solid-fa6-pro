
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `books-medical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/books-medical?s=duotone books-medical}
 * @preview ![books-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MC4wMDIgMEg5NkM3OC4zNzUgMCA2NCAxNC4zNzUgNjQgMzJWOTZIMTkyLjAwMlYzMkMxOTIuMDAyIDE0LjM3NSAxNzcuNjI3IDAgMTYwLjAwMiAwWk02NCA0ODBDNjQgNDk3LjYyNSA3OC4zNzUgNTEyIDk2IDUxMkgxNjAuMDAyQzE3Ny42MjcgNTEyIDE5Mi4wMDIgNDk3LjYyNSAxOTIuMDAyIDQ4MFY0MTZINjRWNDgwWk0yMjQuMDAyIDQ4MEMyMjQuMDAyIDQ5Ny42MjUgMjM4LjM3NyA1MTIgMjU2LjAwNCA1MTJIMzIwLjAwNEMzMzcuNjIzIDUxMiAzNTEuOTg4IDQ5Ny42NDEgMzUyIDQ4MC4wMTZWNDE2SDIyNC4wMDJWNDgwWk0zMzcuMDgyIDU2LjcwM0MzMzMuNTA4IDQzLjI5NyAzMzkuMjQ0IDI5LjgwNSAzNTAuMDQ1IDIyLjM1OUMzNDUuODkxIDkuNSAzMzQuMjE1IDAgMzIwLjAwNCAwSDI1Ni4wMDRDMjM4LjM3NyAwIDIyNC4wMDIgMTQuMzc1IDIyNC4wMDIgMzJWOTZIMzQ3LjU2MUwzMzcuMDgyIDU2LjcwM1pNNTUwLjI1MiAzNjIuODA1TDQyNy41MiAzOTUuODQ4TDQzNS43NCA0MjYuNjhMNTU4LjQ3NSAzOTMuNjMzTDU1MC4yNTIgMzYyLjgwNVpNNDc2LjI2IDg1LjMyTDM1My41MjUgMTE4LjM2N0wzNjEuNzQ4IDE0OS4xOTVMNDg0LjQ4IDExNi4xNTZMNDc2LjI2IDg1LjMyWk0yMjQuMDAyIDM4NEgzNTJWMTI4SDIyNC4wMDJWMzg0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik03OS45OTggMzUySDExMS45OTZDMTIwLjgzMiAzNTIgMTI3Ljk5NiAzNDQuODM2IDEyNy45OTYgMzM2VjI4OC4wMDRIMTc1Ljk5NEMxODQuODMgMjg4LjAwNCAxOTEuOTk0IDI4MC44NCAxOTEuOTk0IDI3Mi4wMDRWMjQwLjAwNEMxOTEuOTk0IDIzMS4xNjggMTg0LjgzIDIyNC4wMDQgMTc1Ljk5NCAyMjQuMDA0SDEyNy45OTZWMTc2LjAwOEMxMjcuOTk2IDE2Ny4xNzIgMTIwLjgzMiAxNjAuMDA4IDExMS45OTYgMTYwLjAwOEg3OS45OThDNzEuMTYyIDE2MC4wMDggNjMuOTk4IDE2Ny4xNzIgNjMuOTk4IDE3Ni4wMDhWMjI0LjAwNEgxNkM3LjE2NCAyMjQuMDA0IDAgMjMxLjE2OCAwIDI0MC4wMDRWMjcyLjAwNEMwIDI4MC44NCA3LjE2NCAyODguMDA0IDE2IDI4OC4wMDRINjMuOTk4VjMzNkM2My45OTggMzQ0LjgzNiA3MS4xNjIgMzUyIDc5Ljk5OCAzNTJaTTIyNC4wMDIgNDE2SDM1MlYzODRIMjI0LjAwMlY0MTZaTTY0IDQxNkgxOTIuMDAyVjM4NEg2NFY0MTZaTTY0IDEyOEgxOTIuMDAyVjk2SDY0VjEyOFpNNTc0LjkxOCA0NTUuMjk3TDU1OC40NzUgMzkzLjYzM0w0MzUuNzQgNDI2LjY4TDQ1Mi4xODQgNDg4LjM0NEM0NTYuNzExIDUwNS4zMiA0NzQuMTg4IDUxNS40NjEgNDkxLjA4OCA1MTAuOTE0TDU1Mi40NTUgNDk0LjM5MUM1NjkuMzU1IDQ4OS44MzYgNTc5LjQ0NSA0NzIuMjczIDU3NC45MTggNDU1LjI5N1pNNDg0LjQ4IDExNi4xNTZMMzYxLjc0OCAxNDkuMTk1TDQyNy41MiAzOTUuODQ4TDU1MC4yNTIgMzYyLjgwNUw0ODQuNDggMTE2LjE1NlpNNDU5LjgxNiAyMy42NTZDNDU1LjI4OSA2LjY4IDQzNy44MTIgLTMuNDYxIDQyMC45MTIgMS4wODZMMzU5LjU0NSAxNy42MDlDMzQyLjY0NSAyMi4xNjQgMzMyLjU1NSAzOS43MjcgMzM3LjA4MiA1Ni43MDNMMzQ3LjU2MSA5NkgyMjQuMDAyVjEyOEgzNTJWMTEyLjY0OEwzNTMuNTI1IDExOC4zNjdMNDc2LjI2IDg1LjMyTDQ1OS44MTYgMjMuNjU2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BooksMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M160.002 0H96C78.375 0 64 14.375 64 32V96H192.002V32C192.002 14.375 177.627 0 160.002 0ZM64 480C64 497.625 78.375 512 96 512H160.002C177.627 512 192.002 497.625 192.002 480V416H64V480ZM224.002 480C224.002 497.625 238.377 512 256.004 512H320.004C337.623 512 351.988 497.641 352 480.016V416H224.002V480ZM337.082 56.703C333.508 43.297 339.244 29.805 350.045 22.359C345.891 9.5 334.215 0 320.004 0H256.004C238.377 0 224.002 14.375 224.002 32V96H347.561L337.082 56.703ZM550.252 362.805L427.52 395.848L435.74 426.68L558.475 393.633L550.252 362.805ZM476.26 85.32L353.525 118.367L361.748 149.195L484.48 116.156L476.26 85.32ZM224.002 384H352V128H224.002V384Z" />
            <path d="M79.998 352H111.996C120.832 352 127.996 344.836 127.996 336V288.004H175.994C184.83 288.004 191.994 280.84 191.994 272.004V240.004C191.994 231.168 184.83 224.004 175.994 224.004H127.996V176.008C127.996 167.172 120.832 160.008 111.996 160.008H79.998C71.162 160.008 63.998 167.172 63.998 176.008V224.004H16C7.164 224.004 0 231.168 0 240.004V272.004C0 280.84 7.164 288.004 16 288.004H63.998V336C63.998 344.836 71.162 352 79.998 352ZM224.002 416H352V384H224.002V416ZM64 416H192.002V384H64V416ZM64 128H192.002V96H64V128ZM574.918 455.297L558.475 393.633L435.74 426.68L452.184 488.344C456.711 505.32 474.188 515.461 491.088 510.914L552.455 494.391C569.355 489.836 579.445 472.273 574.918 455.297ZM484.48 116.156L361.748 149.195L427.52 395.848L550.252 362.805L484.48 116.156ZM459.816 23.656C455.289 6.68 437.812 -3.461 420.912 1.086L359.545 17.609C342.645 22.164 332.555 39.727 337.082 56.703L347.561 96H224.002V128H352V112.648L353.525 118.367L476.26 85.32L459.816 23.656Z" />
        </Icon>
    </>
}