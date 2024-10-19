
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-5` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-5?s=duotone square-5}
 * @preview ![square-5](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0NiAzMiAzODQgMzJaTTI0MC45NTMgMzg0SDE5MS4zNTlDMTYzLjEyNSAzODQgMTM4LjE1NiAzNjYgMTI5LjIzNCAzMzkuMjE5QzEyNS4wNDcgMzI2LjYyNSAxMzEuODQ0IDMxMy4wMzEgMTQ0LjQyMiAzMDguODQ0QzE1Ni45NTMgMzA0Ljc4MSAxNzAuNTc4IDMxMS40NjkgMTc0Ljc2NiAzMjQuMDMxQzE3Ny4xNTYgMzMxLjE4OCAxODMuODEyIDMzNiAxOTEuMzU5IDMzNkgyNDAuOTUzQzI1OC4wNzggMzM2IDI3MiAzMjIuMDYyIDI3MiAzMDQuOTM4QzI3MiAyODkuMTg4IDI2MC4yMTkgMjc1LjkzOCAyNDQuNTk0IDI3NC4xMjVMMTU3LjIwMyAyNjMuODQ0QzE1MC41NzggMjYzLjA2MiAxNDQuNTk0IDI1OS41NjIgMTQwLjY0MSAyNTQuMTg4QzEzNi43MDMgMjQ4LjgxMiAxMzUuMTcyIDI0Mi4wNjIgMTM2LjQyMiAyMzUuNTMxTDE1My4xNTYgMTQ3LjUzMUMxNTUuMzEyIDEzNi4xODggMTY1LjIwMyAxMjggMTc2LjczNCAxMjhIMjgwQzI5My4yNSAxMjggMzA0IDEzOC43NSAzMDQgMTUyUzI5My4yNSAxNzYgMjgwIDE3NkgxOTYuNTk0TDE4OC4zOTEgMjE5LjE4OEwyNTAuMTg3IDIyNi40MzhDMjg5Ljk4NCAyMzEuMTI1IDMyMCAyNjQuODQ0IDMyMCAzMDQuOTM4QzMyMCAzNDguNTMxIDI4NC41NDcgMzg0IDI0MC45NTMgMzg0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMjAuMDAyIDMwNC45MzhDMzIwLjAwMiAzNDguNTMxIDI4NC41NDggMzg0IDI0MC45NTUgMzg0SDE5MS4zNjFDMTYzLjEyNyAzODQgMTM4LjE1OCAzNjYgMTI5LjIzNiAzMzkuMjE5QzEyNS4wNDggMzI2LjYyNSAxMzEuODQ1IDMxMy4wMzEgMTQ0LjQyNCAzMDguODQ0QzE1Ni45NTUgMzA0Ljc4MSAxNzAuNTggMzExLjQ2OSAxNzQuNzY3IDMyNC4wMzFDMTc3LjE1OCAzMzEuMTg4IDE4My44MTQgMzM2IDE5MS4zNjEgMzM2SDI0MC45NTVDMjU4LjA4IDMzNiAyNzIuMDAyIDMyMi4wNjIgMjcyLjAwMiAzMDQuOTM4QzI3Mi4wMDIgMjg5LjE4OCAyNjAuMjIgMjc1LjkzOCAyNDQuNTk1IDI3NC4xMjVMMTU3LjIwNSAyNjMuODQ0QzE1MC41OCAyNjMuMDYyIDE0NC41OTUgMjU5LjU2MiAxNDAuNjQyIDI1NC4xODhDMTM2LjcwNSAyNDguODEyIDEzNS4xNzMgMjQyLjA2MiAxMzYuNDIzIDIzNS41MzFMMTUzLjE1OCAxNDcuNTMxQzE1NS4zMTQgMTM2LjE4OCAxNjUuMjA1IDEyOCAxNzYuNzM2IDEyOEgyODAuMDAyQzI5My4yNTIgMTI4IDMwNC4wMDIgMTM4Ljc1IDMwNC4wMDIgMTUyUzI5My4yNTIgMTc2IDI4MC4wMDIgMTc2SDE5Ni41OTVMMTg4LjM5MiAyMTkuMTg4TDI1MC4xODkgMjI2LjQzOEMyODkuOTg2IDIzMS4xMjUgMzIwLjAwMiAyNjQuODQ0IDMyMC4wMDIgMzA0LjkzOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Square_5(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM240.953 384H191.359C163.125 384 138.156 366 129.234 339.219C125.047 326.625 131.844 313.031 144.422 308.844C156.953 304.781 170.578 311.469 174.766 324.031C177.156 331.188 183.812 336 191.359 336H240.953C258.078 336 272 322.062 272 304.938C272 289.188 260.219 275.938 244.594 274.125L157.203 263.844C150.578 263.062 144.594 259.562 140.641 254.188C136.703 248.812 135.172 242.062 136.422 235.531L153.156 147.531C155.312 136.188 165.203 128 176.734 128H280C293.25 128 304 138.75 304 152S293.25 176 280 176H196.594L188.391 219.188L250.187 226.438C289.984 231.125 320 264.844 320 304.938C320 348.531 284.547 384 240.953 384Z" />
            <path d="M320.002 304.938C320.002 348.531 284.548 384 240.955 384H191.361C163.127 384 138.158 366 129.236 339.219C125.048 326.625 131.845 313.031 144.424 308.844C156.955 304.781 170.58 311.469 174.767 324.031C177.158 331.188 183.814 336 191.361 336H240.955C258.08 336 272.002 322.062 272.002 304.938C272.002 289.188 260.22 275.938 244.595 274.125L157.205 263.844C150.58 263.062 144.595 259.562 140.642 254.188C136.705 248.812 135.173 242.062 136.423 235.531L153.158 147.531C155.314 136.188 165.205 128 176.736 128H280.002C293.252 128 304.002 138.75 304.002 152S293.252 176 280.002 176H196.595L188.392 219.188L250.189 226.438C289.986 231.125 320.002 264.844 320.002 304.938Z" />
        </Icon>
    </>
}