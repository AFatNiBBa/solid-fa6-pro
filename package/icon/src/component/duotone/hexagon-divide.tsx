
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hexagon-divide` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-divide?s=duotone hexagon-divide}
 * @preview ![hexagon-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNS44MjQgMjMzLjM2NUw0MDAuNDM3IDU0LjE2NkMzOTIuMzIyIDQwLjUxNiAzNzcuNTAyIDMyIDM2MS4zODcgMzJIMTUwLjYxM0MxMzQuNDk4IDMyIDExOS42NzggNDAuNTE2IDExMS41NjMgNTQuMTY2TDYuMTc2IDIzMy4zNjVDLTIuMDU5IDI0Ny4zNjUgLTIuMDU5IDI2NC42MzMgNi4xNzYgMjc4LjYzM0wxMTEuNTYzIDQ1Ny44MzJDMTE5LjY3OCA0NzEuNDgyIDEzNC40OTggNDgwIDE1MC42MTMgNDgwSDM2MS4zODdDMzc3LjUwMiA0ODAgMzkyLjMyMiA0NzEuNDgyIDQwMC40MzcgNDU3LjgzMkw1MDUuODI0IDI3OC42MzNDNTE0LjA1OSAyNjQuNjMzIDUxNC4wNTkgMjQ3LjM2NSA1MDUuODI0IDIzMy4zNjVaTTI1NiAxMjhDMjczLjY3NCAxMjggMjg4IDE0Mi4zMjYgMjg4IDE2MEMyODggMTc3LjY3MiAyNzMuNjc0IDE5MiAyNTYgMTkyUzIyNCAxNzcuNjcyIDIyNCAxNjBDMjI0IDE0Mi4zMjYgMjM4LjMyNiAxMjggMjU2IDEyOFpNMjU2IDM4NEMyMzguMzI2IDM4NCAyMjQgMzY5LjY3MiAyMjQgMzUyQzIyNCAzMzQuMzI2IDIzOC4zMjYgMzIwIDI1NiAzMjBTMjg4IDMzNC4zMjYgMjg4IDM1MkMyODggMzY5LjY3MiAyNzMuNjc0IDM4NCAyNTYgMzg0Wk0zNTEuOTk4IDI4MEgxNTkuOTk4QzE0Ni43OTcgMjgwIDEzNS45OTYgMjY5LjE5NyAxMzUuOTk2IDI1NkMxMzUuOTk2IDI0Mi43OTkgMTQ2Ljc5NyAyMzIgMTU5Ljk5OCAyMzJIMzUxLjk5OEMzNjUuMTk1IDIzMiAzNzUuOTk2IDI0Mi43OTkgMzc1Ljk5NiAyNTZDMzc1Ljk5NiAyNjkuMTk3IDM2NS4xOTUgMjgwIDM1MS45OTggMjgwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYuMDA0IDE5MkMyNzMuNjc4IDE5MiAyODguMDA0IDE3Ny42NzIgMjg4LjAwNCAxNjBDMjg4LjAwNCAxNDIuMzI2IDI3My42NzggMTI4IDI1Ni4wMDQgMTI4UzIyNC4wMDQgMTQyLjMyNiAyMjQuMDA0IDE2MEMyMjQuMDA0IDE3Ny42NzIgMjM4LjMzIDE5MiAyNTYuMDA0IDE5MlpNMjU2LjAwNCAzMjBDMjM4LjMzIDMyMCAyMjQuMDA0IDMzNC4zMjYgMjI0LjAwNCAzNTJDMjI0LjAwNCAzNjkuNjcyIDIzOC4zMyAzODQgMjU2LjAwNCAzODRTMjg4LjAwNCAzNjkuNjcyIDI4OC4wMDQgMzUyQzI4OC4wMDQgMzM0LjMyNiAyNzMuNjc4IDMyMCAyNTYuMDA0IDMyMFpNMzUyLjAwMiAyMzJIMTYwLjAwMkMxNDYuODAxIDIzMiAxMzYgMjQyLjc5OSAxMzYgMjU2QzEzNiAyNjkuMTk3IDE0Ni44MDEgMjgwIDE2MC4wMDIgMjgwSDM1Mi4wMDJDMzY1LjE5OSAyODAgMzc2IDI2OS4xOTcgMzc2IDI1NkMzNzYgMjQyLjc5OSAzNjUuMTk5IDIzMiAzNTIuMDAyIDIzMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HexagonDivide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M505.824 233.365L400.437 54.166C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.166L6.176 233.365C-2.059 247.365 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.482 134.498 480 150.613 480H361.387C377.502 480 392.322 471.482 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.365 505.824 233.365ZM256 128C273.674 128 288 142.326 288 160C288 177.672 273.674 192 256 192S224 177.672 224 160C224 142.326 238.326 128 256 128ZM256 384C238.326 384 224 369.672 224 352C224 334.326 238.326 320 256 320S288 334.326 288 352C288 369.672 273.674 384 256 384ZM351.998 280H159.998C146.797 280 135.996 269.197 135.996 256C135.996 242.799 146.797 232 159.998 232H351.998C365.195 232 375.996 242.799 375.996 256C375.996 269.197 365.195 280 351.998 280Z" />
            <path d="M256.004 192C273.678 192 288.004 177.672 288.004 160C288.004 142.326 273.678 128 256.004 128S224.004 142.326 224.004 160C224.004 177.672 238.33 192 256.004 192ZM256.004 320C238.33 320 224.004 334.326 224.004 352C224.004 369.672 238.33 384 256.004 384S288.004 369.672 288.004 352C288.004 334.326 273.678 320 256.004 320ZM352.002 232H160.002C146.801 232 136 242.799 136 256C136 269.197 146.801 280 160.002 280H352.002C365.199 280 376 269.197 376 256C376 242.799 365.199 232 352.002 232Z" />
        </Icon>
    </>
}