
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `closed-captioning` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/closed-captioning?s=duotone closed-captioning}
 * @preview ![closed-captioning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTIgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDUxMkM1NDcuMzQ2IDQ4MCA1NzYgNDUxLjM0NiA1NzYgNDE2Vjk2QzU3NiA2MC42NTIgNTQ3LjM0NiAzMiA1MTIgMzJaTTE2OC42MDkgMjg5LjkzOEMxODcuMjk3IDMwOC42NTYgMjE3Ljc5NyAzMDguNjU2IDIzNi40ODQgMjg5LjkzOEMyNDUuODU5IDI4MC41NjIgMjYxLjA0NyAyODAuNTYyIDI3MC40MjIgMjg5LjkzOFMyNzkuNzk3IDMxNC41IDI3MC40MjIgMzIzLjg3NUMyNTEuNzAzIDM0Mi41OTQgMjI3LjE0MSAzNTEuOTUzIDIwMi41NDcgMzUxLjk1M1MxNTMuMzkxIDM0Mi41OTQgMTM0LjY3MiAzMjMuODc1QzExNi41NDcgMzA1Ljc1IDEwNi41NDcgMjgxLjY0MSAxMDYuNTQ3IDI1NlMxMTYuNTQ3IDIwNi4yNSAxMzQuNjcyIDE4OC4xMjVDMTcyLjEwOSAxNTAuNjg2IDIzMi45ODQgMTUwLjY4NiAyNzAuNDIyIDE4OC4xMjVDMjc5Ljc5NyAxOTcuNSAyNzkuNzk3IDIxMi42ODcgMjcwLjQyMiAyMjIuMDYyUzI0NS44NTkgMjMxLjQzOCAyMzYuNDg0IDIyMi4wNjJDMjE3Ljc5NyAyMDMuMzQ0IDE4Ny4yOTcgMjAzLjM0NCAxNjguNjA5IDIyMi4wNjJDMTU5LjU0NyAyMzEuMTI1IDE1NC41NDcgMjQzLjE4OCAxNTQuNTQ3IDI1NlMxNTkuNTQ3IDI4MC44NzUgMTY4LjYwOSAyODkuOTM4Wk0zNjAuNjA5IDI4OS45MzhDMzc5LjI5NyAzMDguNjU2IDQwOS43OTcgMzA4LjY1NiA0MjguNDg0IDI4OS45MzhDNDM3Ljg1OSAyODAuNTYyIDQ1My4wNDcgMjgwLjU2MiA0NjIuNDIyIDI4OS45MzhTNDcxLjc5NyAzMTQuNSA0NjIuNDIyIDMyMy44NzVDNDQzLjcwMyAzNDIuNTk0IDQxOS4xNDEgMzUxLjk1MyAzOTQuNTQ3IDM1MS45NTNTMzQ1LjM5MSAzNDIuNTk0IDMyNi42NzIgMzIzLjg3NUMzMDguNTQ3IDMwNS43NSAyOTguNTQ3IDI4MS42NDEgMjk4LjU0NyAyNTZTMzA4LjU0NyAyMDYuMjUgMzI2LjY3MiAxODguMTI1QzM2NC4xMDkgMTUwLjY4NiA0MjQuOTg0IDE1MC42ODYgNDYyLjQyMiAxODguMTI1QzQ3MS43OTcgMTk3LjUgNDcxLjc5NyAyMTIuNjg3IDQ2Mi40MjIgMjIyLjA2MlM0MzcuODU5IDIzMS40MzggNDI4LjQ4NCAyMjIuMDYyQzQwOS43OTcgMjAzLjM0NCAzNzkuMjk3IDIwMy4zNDQgMzYwLjYwOSAyMjIuMDYyQzM1MS41NDcgMjMxLjEyNSAzNDYuNTQ3IDI0My4xODggMzQ2LjU0NyAyNTZTMzUxLjU0NyAyODAuODc1IDM2MC42MDkgMjg5LjkzOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjM2LjkzNyAyMjIuMDYyQzI0Ni4zMTIgMjMxLjQzNyAyNjEuNDk5IDIzMS40MzcgMjcwLjg3NCAyMjIuMDYyUzI4MC4yNDkgMTk3LjUgMjcwLjg3NCAxODguMTI1QzIzMy40MzcgMTUwLjY4NyAxNzIuNTYyIDE1MC42ODcgMTM1LjEyNSAxODguMTI1QzExNyAyMDYuMjUgMTA3IDIzMC4zNTkgMTA3IDI1NlMxMTcgMzA1Ljc1IDEzNS4xMjUgMzIzLjg3NUMxNTMuODQ0IDM0Mi41OTQgMTc4LjQwNiAzNTEuOTU0IDIwMyAzNTEuOTU0QzIyNy41OTMgMzUxLjk1NCAyNTIuMTU2IDM0Mi41OTQgMjcwLjg3NCAzMjMuODc1QzI4MC4yNDkgMzE0LjUgMjgwLjI0OSAyOTkuMzEzIDI3MC44NzQgMjg5LjkzOEMyNjEuNDk5IDI4MC41NjMgMjQ2LjMxMiAyODAuNTYzIDIzNi45MzcgMjg5LjkzOEMyMTguMjUgMzA4LjY1NyAxODcuNzUgMzA4LjY1NyAxNjkuMDYyIDI4OS45MzhDMTYwIDI4MC44NzUgMTU1IDI2OC44MTMgMTU1IDI1NlMxNjAgMjMxLjEyNSAxNjkuMDYyIDIyMi4wNjJDMTg3Ljc1IDIwMy4zNDMgMjE4LjI1IDIwMy4zNDMgMjM2LjkzNyAyMjIuMDYyWk00MjguOTM3IDIyMi4wNjJDNDM4LjMxMiAyMzEuNDM3IDQ1My40OTkgMjMxLjQzNyA0NjIuODc0IDIyMi4wNjJTNDcyLjI0OSAxOTcuNSA0NjIuODc0IDE4OC4xMjVDNDI1LjQzNyAxNTAuNjg3IDM2NC41NjIgMTUwLjY4NyAzMjcuMTI1IDE4OC4xMjVDMzA5IDIwNi4yNSAyOTkgMjMwLjM1OSAyOTkgMjU2UzMwOSAzMDUuNzUgMzI3LjEyNSAzMjMuODc1QzM0NS44NDQgMzQyLjU5NCAzNzAuNDA2IDM1MS45NTQgMzk1IDM1MS45NTRTNDQ0LjE1NiAzNDIuNTk0IDQ2Mi44NzQgMzIzLjg3NUM0NzIuMjQ5IDMxNC41IDQ3Mi4yNDkgMjk5LjMxMyA0NjIuODc0IDI4OS45MzhDNDUzLjQ5OSAyODAuNTYzIDQzOC4zMTIgMjgwLjU2MyA0MjguOTM3IDI4OS45MzhDNDEwLjI1IDMwOC42NTcgMzc5Ljc1IDMwOC42NTcgMzYxLjA2MiAyODkuOTM4QzM1MiAyODAuODc1IDM0NyAyNjguODEzIDM0NyAyNTZTMzUyIDIzMS4xMjUgMzYxLjA2MiAyMjIuMDYyQzM3OS43NSAyMDMuMzQzIDQxMC4yNSAyMDMuMzQzIDQyOC45MzcgMjIyLjA2MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ClosedCaptioning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM168.609 289.938C187.297 308.656 217.797 308.656 236.484 289.938C245.859 280.562 261.047 280.562 270.422 289.938S279.797 314.5 270.422 323.875C251.703 342.594 227.141 351.953 202.547 351.953S153.391 342.594 134.672 323.875C116.547 305.75 106.547 281.641 106.547 256S116.547 206.25 134.672 188.125C172.109 150.686 232.984 150.686 270.422 188.125C279.797 197.5 279.797 212.687 270.422 222.062S245.859 231.438 236.484 222.062C217.797 203.344 187.297 203.344 168.609 222.062C159.547 231.125 154.547 243.188 154.547 256S159.547 280.875 168.609 289.938ZM360.609 289.938C379.297 308.656 409.797 308.656 428.484 289.938C437.859 280.562 453.047 280.562 462.422 289.938S471.797 314.5 462.422 323.875C443.703 342.594 419.141 351.953 394.547 351.953S345.391 342.594 326.672 323.875C308.547 305.75 298.547 281.641 298.547 256S308.547 206.25 326.672 188.125C364.109 150.686 424.984 150.686 462.422 188.125C471.797 197.5 471.797 212.687 462.422 222.062S437.859 231.438 428.484 222.062C409.797 203.344 379.297 203.344 360.609 222.062C351.547 231.125 346.547 243.188 346.547 256S351.547 280.875 360.609 289.938Z" />
            <path d="M236.937 222.062C246.312 231.437 261.499 231.437 270.874 222.062S280.249 197.5 270.874 188.125C233.437 150.687 172.562 150.687 135.125 188.125C117 206.25 107 230.359 107 256S117 305.75 135.125 323.875C153.844 342.594 178.406 351.954 203 351.954C227.593 351.954 252.156 342.594 270.874 323.875C280.249 314.5 280.249 299.313 270.874 289.938C261.499 280.563 246.312 280.563 236.937 289.938C218.25 308.657 187.75 308.657 169.062 289.938C160 280.875 155 268.813 155 256S160 231.125 169.062 222.062C187.75 203.343 218.25 203.343 236.937 222.062ZM428.937 222.062C438.312 231.437 453.499 231.437 462.874 222.062S472.249 197.5 462.874 188.125C425.437 150.687 364.562 150.687 327.125 188.125C309 206.25 299 230.359 299 256S309 305.75 327.125 323.875C345.844 342.594 370.406 351.954 395 351.954S444.156 342.594 462.874 323.875C472.249 314.5 472.249 299.313 462.874 289.938C453.499 280.563 438.312 280.563 428.937 289.938C410.25 308.657 379.75 308.657 361.062 289.938C352 280.875 347 268.813 347 256S352 231.125 361.062 222.062C379.75 203.343 410.25 203.343 428.937 222.062Z" />
        </Icon>
    </>
}