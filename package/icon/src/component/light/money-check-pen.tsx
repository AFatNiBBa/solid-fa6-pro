
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `money-check-pen` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-check-pen?s=light money-check-pen}
 * @preview ![money-check-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjUuOTQxIDQyLjE5OUw1OTcuODA5IDE0LjA2MkM1ODguNDM2IDQuNjg5IDU3Ni4xNTIgMC4wMDIgNTYzLjg2NyAwLjAwMlM1MzkuMjk5IDQuNjg5IDUyOS45MjYgMTQuMDYyTDM1NC40MDggMTg5LjU4OEMzNDUuNDczIDE5OC41MjMgMzM5LjM4MyAyMDkuOTA0IDMzNi45MDQgMjIyLjI5NUwzMjAuMjQgMzA1LjY0MUMzMTguNzI1IDMxMy4yMjUgMzI0LjYxOSAzMjAgMzMxLjk2MyAzMjBDMzMyLjc0OCAzMjAgMzMzLjU0OSAzMTkuOTIyIDMzNC4zNjEgMzE5Ljc2TDQxNy43MTEgMzAzLjA4OEM0MzAuMSAzMDAuNjA5IDQ0MS40NzcgMjk0LjUyMSA0NTAuNDEgMjg1LjU4OEw2MjUuOTM5IDExMC4wODJDNjQ0LjY4NiA5MS4zMzggNjQ0LjY4OCA2MC45NDUgNjI1Ljk0MSA0Mi4xOTlaTTQyNy43ODMgMjYyLjk2MUM0MjMuMzAzIDI2Ny40NDEgNDE3LjY0OCAyNzAuNDY3IDQxMS40MzYgMjcxLjcwOUwzNTcuNTAyIDI4Mi40OThMMzY4LjI4MyAyMjguNTcyQzM2OS41MjcgMjIyLjM1NCAzNzIuNTUzIDIxNi42OTcgMzc3LjAzNyAyMTIuMjE1TDQ5MS4zMDcgOTcuOTM2TDU0Mi4wNjYgMTQ4LjY5NUw0MjcuNzgzIDI2Mi45NjFaTTYwMy4zMTQgODcuNDUzTDU2NC42OTEgMTI2LjA3TDUxMy45MzIgNzUuMzExTDU1Mi41NTUgMzYuNjg4QzU1Ni42MzEgMzIuNjExIDU2MS4zOTMgMzIuMDAyIDU2My44NjcgMzIuMDAyUzU3MS4xMDQgMzIuNjExIDU3NS4xOCAzNi42ODhMNjAzLjMxNCA2NC44MjZDNjA3LjM5MyA2OC45MDQgNjA4IDczLjY2NCA2MDggNzYuMTQxQzYwOCA3OC42MTUgNjA3LjM5MSA4My4zNzcgNjAzLjMxNCA4Ny40NTNaTTU5MiAyMDhDNTgzLjE2NCAyMDggNTc2IDIxNS4xNjIgNTc2IDIyNFY0NDhDNTc2IDQ2NS42NzIgNTYxLjY3NCA0ODAgNTQ0IDQ4MEg5NkM3OC4zMjYgNDgwIDY0IDQ2NS42NzIgNjQgNDQ4VjE5MkM2NCAxNzQuMzI2IDc4LjMyNiAxNjAgOTYgMTYwSDMyMEMzMjguODM2IDE2MCAzMzYgMTUyLjgzNiAzMzYgMTQ0QzMzNiAxMzUuMTYyIDMyOC44MzYgMTI4IDMyMCAxMjhIOTZDNjAuNjU0IDEyOCAzMiAxNTYuNjUyIDMyIDE5MlY0NDhDMzIgNDgzLjM0NiA2MC42NTQgNTEyIDk2IDUxMkg1NDRDNTc5LjM0NiA1MTIgNjA4IDQ4My4zNDYgNjA4IDQ0OFYyMjRDNjA4IDIxNS4xNjIgNjAwLjgzNiAyMDggNTkyIDIwOFpNMTEyIDI4OEgyNzJDMjgwLjgzNiAyODggMjg4IDI4MC44MzYgMjg4IDI3MkMyODggMjYzLjE2MiAyODAuODM2IDI1NiAyNzIgMjU2SDExMkMxMDMuMTY0IDI1NiA5NiAyNjMuMTYyIDk2IDI3MkM5NiAyODAuODM2IDEwMy4xNjQgMjg4IDExMiAyODhaTTExMiAzODRINTI4QzUzNi44MzYgMzg0IDU0NCAzNzYuODM2IDU0NCAzNjhDNTQ0IDM1OS4xNjIgNTM2LjgzNiAzNTIgNTI4IDM1MkgxMTJDMTAzLjE2NCAzNTIgOTYgMzU5LjE2MiA5NiAzNjhDOTYgMzc2LjgzNiAxMDMuMTY0IDM4NCAxMTIgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MoneyCheckPen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M625.941 42.199L597.809 14.062C588.436 4.689 576.152 0.002 563.867 0.002S539.299 4.689 529.926 14.062L354.408 189.588C345.473 198.523 339.383 209.904 336.904 222.295L320.24 305.641C318.725 313.225 324.619 320 331.963 320C332.748 320 333.549 319.922 334.361 319.76L417.711 303.088C430.1 300.609 441.477 294.521 450.41 285.588L625.939 110.082C644.686 91.338 644.688 60.945 625.941 42.199ZM427.783 262.961C423.303 267.441 417.648 270.467 411.436 271.709L357.502 282.498L368.283 228.572C369.527 222.354 372.553 216.697 377.037 212.215L491.307 97.936L542.066 148.695L427.783 262.961ZM603.314 87.453L564.691 126.07L513.932 75.311L552.555 36.688C556.631 32.611 561.393 32.002 563.867 32.002S571.104 32.611 575.18 36.688L603.314 64.826C607.393 68.904 608 73.664 608 76.141C608 78.615 607.391 83.377 603.314 87.453ZM592 208C583.164 208 576 215.162 576 224V448C576 465.672 561.674 480 544 480H96C78.326 480 64 465.672 64 448V192C64 174.326 78.326 160 96 160H320C328.836 160 336 152.836 336 144C336 135.162 328.836 128 320 128H96C60.654 128 32 156.652 32 192V448C32 483.346 60.654 512 96 512H544C579.346 512 608 483.346 608 448V224C608 215.162 600.836 208 592 208ZM112 288H272C280.836 288 288 280.836 288 272C288 263.162 280.836 256 272 256H112C103.164 256 96 263.162 96 272C96 280.836 103.164 288 112 288ZM112 384H528C536.836 384 544 376.836 544 368C544 359.162 536.836 352 528 352H112C103.164 352 96 359.162 96 368C96 376.836 103.164 384 112 384Z" />
        </Icon>
    </>
}