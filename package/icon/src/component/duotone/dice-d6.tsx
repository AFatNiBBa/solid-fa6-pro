
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dice-d6` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=duotone dice-d6}
 * @preview ![dice-d6](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQyNi4zMjggMTE3LjE2M0M0MjYuMzI4IDExOS45ODggNDI0Ljk3NyAxMjIuODEgNDIyLjI3NyAxMjQuNDExTDIyNC4xNTIgMjQyLjU2NUwyNi4wMjcgMTI0LjQxMUMyMy4zNDQgMTIyLjgxIDIyIDExOS45ODggMjIgMTE3LjE2M0MyMiAxMTQuMzYzIDIzLjMyIDExMS41NjEgMjUuOTY1IDEwOS45NDNMMTkxLjkzNCA5LjA3QzIwMS44ODcgMy4wMjMgMjEzLjAyIDAgMjI0LjE1MiAwUzI0Ni40MTggMy4wMjMgMjU2LjM3MSA5LjA3TDQyMi4zNCAxMDkuOTQzQzQyNSAxMTEuNTYxIDQyNi4zMjggMTE0LjM2MyA0MjYuMzI4IDExNy4xNjNaICIgY2xhc3M9ImZhLXNlY29uZGFyeSI+PC9wYXRoPjxwYXRoIGQ9Ik03Ljk5NCAxNTMuNDc5QzkuMzIgMTUzLjQ3OSAxMC42ODEgMTUzLjgzIDExLjk2OSAxNTQuNTk4TDIwOCAyNzEuNDdWNDk1LjI3N0MyMDggNTA1LjAxOCAyMDAuMzQ0IDUxMS45ODYgMTkxLjk4OCA1MTEuOTg2QzE4OS4zIDUxMS45ODYgMTg2LjUzOSA1MTEuMjY1IDE4My45MzggNTA5LjY4M0wzMS43ODEgNDE3LjIxN0MxMi4xMjUgNDA1LjI3OSAwIDM4My4zMTEgMCAzNTkuNTNWMTYxLjg0OEMwIDE1Ni45NjEgMy44MTcgMTUzLjQ3OSA3Ljk5NCAxNTMuNDc5Wk00NDAuMDA2IDE1My40NzlDNDQ0LjE4MyAxNTMuNDc5IDQ0OCAxNTYuOTYxIDQ0OCAxNjEuODQ4VjM1OS41M0M0NDggMzgzLjI4IDQzNS44NzUgNDA1LjI3OSA0MTYuMjE5IDQxNy4yMTdMMjY0LjA2MiA1MDkuNzE0QzI2MS40NjkgNTExLjI4NCAyNTguNzE3IDUxMiAyNTYuMDM3IDUxMkMyNDcuNjcxIDUxMiAyNDAgNTA1LjAyOCAyNDAgNDk1LjI3N1YyNzEuNDdMNDM2LjAzMSAxNTQuNTk4QzQzNy4zMTkgMTUzLjgzIDQzOC42OCAxNTMuNDc5IDQ0MC4wMDYgMTUzLjQ3OVogIiBjbGFzcz0iZmEtcHJpbWFyeSI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiceD6(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M426.328 117.163C426.328 119.988 424.977 122.81 422.277 124.411L224.152 242.565L26.027 124.411C23.344 122.81 22 119.988 22 117.163C22 114.363 23.32 111.561 25.965 109.943L191.934 9.07C201.887 3.023 213.02 0 224.152 0S246.418 3.023 256.371 9.07L422.34 109.943C425 111.561 426.328 114.363 426.328 117.163Z " />
            <path d="M7.994 153.479C9.32 153.479 10.681 153.83 11.969 154.598L208 271.47V495.277C208 505.018 200.344 511.986 191.988 511.986C189.3 511.986 186.539 511.265 183.938 509.683L31.781 417.217C12.125 405.279 0 383.311 0 359.53V161.848C0 156.961 3.817 153.479 7.994 153.479ZM440.006 153.479C444.183 153.479 448 156.961 448 161.848V359.53C448 383.28 435.875 405.279 416.219 417.217L264.062 509.714C261.469 511.284 258.717 512 256.037 512C247.671 512 240 505.028 240 495.277V271.47L436.031 154.598C437.319 153.83 438.68 153.479 440.006 153.479Z " />
        </Icon>
    </>
}