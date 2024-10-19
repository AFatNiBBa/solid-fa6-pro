
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ruler-triangle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=duotone ruler-triangle}
 * @preview ![ruler-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMi42MjUgNDU3LjM3OUw0NDkuNjYgNDA0LjQxOEw0MjYuNzQ2IDQyNy4zMzRDNDIwLjUyMyA0MzMuNTU1IDQxMC4zNDIgNDMzLjU1NSA0MDQuMTE5IDQyNy4zMzRDMzk3Ljg5NSA0MjEuMTA5IDM5Ny44OTYgNDEwLjkyOCA0MDQuMTE5IDQwNC43MDNMNDI3LjAzMSAzODEuNzkxTDM2OS42NTggMzI0LjQyMkwzNDYuNzQ4IDM0Ny4zMzRDMzQwLjUyMyAzNTMuNTU1IDMzMC4zNDQgMzUzLjU1NyAzMjQuMTE5IDM0Ny4zMzRDMzE3Ljg5NSAzNDEuMTA5IDMxNy44OTYgMzMwLjkyOCAzMjQuMTE5IDMyNC43MDNMMzQ3LjAyNyAzMDEuNzk1TDI4OS42NTQgMjQ0LjQyNkwyNjYuNzQ4IDI2Ny4zMzRDMjYwLjUyNSAyNzMuNTU1IDI1MC4zNDIgMjczLjU1NyAyNDQuMTIxIDI2Ny4zMzRDMjM3Ljg5NiAyNjEuMTA5IDIzNy44OTYgMjUwLjkyOCAyNDQuMTIxIDI0NC43MDVMMjY3LjAyNSAyMjEuNzk5TDIwOS42NSAxNjQuNDNMMTg2Ljc0NiAxODcuMzM0QzE4MC41MjUgMTkzLjU1NSAxNzAuMzQyIDE5My41NTcgMTY0LjEyMSAxODcuMzM0QzE1Ny44OTUgMTgxLjEwOSAxNTcuODk2IDE3MC45MjggMTY0LjEyMSAxNjQuNzA1TDE4Ny4wMjMgMTQxLjgwM0wxMjkuNjQ4IDg0LjQzNEwxMDYuNzQ4IDEwNy4zMzRDMTAwLjUyNSAxMTMuNTU1IDkwLjM0MiAxMTMuNTU3IDg0LjEyMSAxMDcuMzM0Qzc3Ljg5NiAxMDEuMTExIDc3Ljg5OCA5MC45MjggODQuMTIxIDg0LjcwNUwxMDcuMDIgNjEuODA3TDU0LjYyNSA5LjQxNkM0NS40NTMgMC4yMjggMzEuNzAzIC0yLjU1MyAxOS43NSAyLjQ3OEM3Ljc5NyA3LjQxNiAwIDE5LjEwMyAwIDMyLjAzOVY0ODAuMDAyQzAgNDk3LjY4OSAxNC4zMjggNTEyIDMyIDUxMkg0ODBDNDkyLjkzOCA1MTIgNTA0LjYwOSA1MDQuMjE5IDUwOS41NjIgNDkyLjI1MkM1MTQuNTE2IDQ4MC4yODMgNTExLjc4MSA0NjYuNTM1IDUwMi42MjUgNDU3LjM3OVpNMTI4IDM4NC4wMVYyNTYuMDIxTDI1NiAzODQuMDFIMTI4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MjYuNTc4IDM4MS43OTFMNDAzLjY2NiA0MDQuNzAzQzM5Ny40NDMgNDEwLjkyOCAzOTcuNDQxIDQyMS4xMDkgNDAzLjY2NiA0MjcuMzM0QzQwOS44ODggNDMzLjU1NSA0MjAuMDcgNDMzLjU1NSA0MjYuMjkzIDQyNy4zMzRMNDQ5LjIwNyA0MDQuNDE4TDQyNi41NzggMzgxLjc5MVpNMTYzLjY2OCAxNjQuNzA1QzE1Ny40NDMgMTcwLjkyOCAxNTcuNDQxIDE4MS4xMDkgMTYzLjY2OCAxODcuMzM0QzE2OS44ODggMTkzLjU1NyAxODAuMDcyIDE5My41NTUgMTg2LjI5MyAxODcuMzM0TDIwOS4xOTcgMTY0LjQzTDE4Ni41NyAxNDEuODAzTDE2My42NjggMTY0LjcwNVpNODMuNjY4IDg0LjcwNUM3Ny40NDUgOTAuOTI4IDc3LjQ0MyAxMDEuMTExIDgzLjY2OCAxMDcuMzM0Qzg5Ljg4OCAxMTMuNTU3IDEwMC4wNzIgMTEzLjU1NSAxMDYuMjk1IDEwNy4zMzRMMTI5LjE5NSA4NC40MzRMMTA2LjU2NiA2MS44MDdMODMuNjY4IDg0LjcwNVpNMjQzLjY2OCAyNDQuNzA1QzIzNy40NDMgMjUwLjkyOCAyMzcuNDQzIDI2MS4xMDkgMjQzLjY2OCAyNjcuMzM0QzI0OS44ODggMjczLjU1NyAyNjAuMDcyIDI3My41NTUgMjY2LjI5NSAyNjcuMzM0TDI4OS4yMDEgMjQ0LjQyNkwyNjYuNTcyIDIyMS43OTlMMjQzLjY2OCAyNDQuNzA1Wk0zMjMuNjY2IDMyNC43MDNDMzE3LjQ0MyAzMzAuOTI4IDMxNy40NDEgMzQxLjEwOSAzMjMuNjY2IDM0Ny4zMzRDMzI5Ljg5IDM1My41NTcgMzQwLjA3IDM1My41NTUgMzQ2LjI5NSAzNDcuMzM0TDM2OS4yMDUgMzI0LjQyMkwzNDYuNTc0IDMwMS43OTVMMzIzLjY2NiAzMjQuNzAzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RulerTriangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M502.625 457.379L449.66 404.418L426.746 427.334C420.523 433.555 410.342 433.555 404.119 427.334C397.895 421.109 397.896 410.928 404.119 404.703L427.031 381.791L369.658 324.422L346.748 347.334C340.523 353.555 330.344 353.557 324.119 347.334C317.895 341.109 317.896 330.928 324.119 324.703L347.027 301.795L289.654 244.426L266.748 267.334C260.525 273.555 250.342 273.557 244.121 267.334C237.896 261.109 237.896 250.928 244.121 244.705L267.025 221.799L209.65 164.43L186.746 187.334C180.525 193.555 170.342 193.557 164.121 187.334C157.895 181.109 157.896 170.928 164.121 164.705L187.023 141.803L129.648 84.434L106.748 107.334C100.525 113.555 90.342 113.557 84.121 107.334C77.896 101.111 77.898 90.928 84.121 84.705L107.02 61.807L54.625 9.416C45.453 0.228 31.703 -2.553 19.75 2.478C7.797 7.416 0 19.103 0 32.039V480.002C0 497.689 14.328 512 32 512H480C492.938 512 504.609 504.219 509.562 492.252C514.516 480.283 511.781 466.535 502.625 457.379ZM128 384.01V256.021L256 384.01H128Z" />
            <path d="M426.578 381.791L403.666 404.703C397.443 410.928 397.441 421.109 403.666 427.334C409.888 433.555 420.07 433.555 426.293 427.334L449.207 404.418L426.578 381.791ZM163.668 164.705C157.443 170.928 157.441 181.109 163.668 187.334C169.888 193.557 180.072 193.555 186.293 187.334L209.197 164.43L186.57 141.803L163.668 164.705ZM83.668 84.705C77.445 90.928 77.443 101.111 83.668 107.334C89.888 113.557 100.072 113.555 106.295 107.334L129.195 84.434L106.566 61.807L83.668 84.705ZM243.668 244.705C237.443 250.928 237.443 261.109 243.668 267.334C249.888 273.557 260.072 273.555 266.295 267.334L289.201 244.426L266.572 221.799L243.668 244.705ZM323.666 324.703C317.443 330.928 317.441 341.109 323.666 347.334C329.89 353.557 340.07 353.555 346.295 347.334L369.205 324.422L346.574 301.795L323.666 324.703Z" />
        </Icon>
    </>
}