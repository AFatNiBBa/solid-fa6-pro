
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `image` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/image?s=duotone image}
 * @preview ![image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5MiAwIDgwVjQzMkMwIDQ1OC41MDggMjEuNDkgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUxIDQ4MCA1MTIgNDU4LjUwOCA1MTIgNDMyVjgwQzUxMiA1My40OTIgNDkwLjUxIDMyIDQ2NCAzMlpNMTEyIDk2QzEzOC41MSA5NiAxNjAgMTE3LjQ5MiAxNjAgMTQ0UzEzOC41MSAxOTIgMTEyIDE5MlM2NCAxNzAuNTA4IDY0IDE0NFM4NS40OSA5NiAxMTIgOTZaTTQ0Ni4xMjEgNDA3LjU1MUM0NDMuMzM2IDQxMi43NTQgNDM3LjkxNCA0MTYgNDMyLjAxNCA0MTZIODIuMDEzQzc1Ljk5MiA0MTYgNzAuNDggNDEyLjYyMSA2Ny43NTIgNDA3LjI1QzY1LjAyMSA0MDEuODgzIDY1LjUzNyAzOTUuNDM4IDY5LjA4NiAzOTAuNTc0TDEzOS4wODYgMjk0LjU3NEMxNDIuMDk4IDI5MC40NDEgMTQ2LjkwMiAyODggMTUyLjAxNCAyODhTMTYxLjkzIDI5MC40NDEgMTY0Ljk0MSAyOTQuNTc0TDE5Ny4zOTYgMzM5LjA4NkwyOTAuNzAxIDE5OS4xMjVDMjkzLjY2OCAxOTQuNjcyIDI5OC42NjQgMTkyIDMwNC4wMTQgMTkyUzMxNC4zNTkgMTk0LjY3MiAzMTcuMzI2IDE5OS4xMjVMNDQ1LjMyNiAzOTEuMTI1QzQ0OC42IDM5Ni4wMzUgNDQ4LjkwNCA0MDIuMzQ4IDQ0Ni4xMjEgNDA3LjU1MVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ2LjEwOCA0MDcuNTUxQzQ0My4zMjMgNDEyLjc1NCA0MzcuOTAxIDQxNiA0MzIgNDE2SDgyQzc1Ljk3OSA0MTYgNzAuNDY3IDQxMi42MjEgNjcuNzM5IDQwNy4yNUM2NS4wMDggNDAxLjg4MyA2NS41MjQgMzk1LjQzOCA2OS4wNzMgMzkwLjU3NEwxMzkuMDczIDI5NC41NzRDMTQyLjA4NCAyOTAuNDQxIDE0Ni44ODkgMjg4IDE1MiAyODhTMTYxLjkxNiAyOTAuNDQxIDE2NC45MjggMjk0LjU3NEwxOTcuMzgzIDMzOS4wODZMMjkwLjY4OCAxOTkuMTI1QzI5My42NTUgMTk0LjY3MiAyOTguNjUxIDE5MiAzMDQgMTkyUzMxNC4zNDYgMTk0LjY3MiAzMTcuMzEzIDE5OS4xMjVMNDQ1LjMxMyAzOTEuMTI1QzQ0OC41ODYgMzk2LjAzNSA0NDguODkxIDQwMi4zNDggNDQ2LjEwOCA0MDcuNTUxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Image(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M464 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H464C490.51 480 512 458.508 512 432V80C512 53.492 490.51 32 464 32ZM112 96C138.51 96 160 117.492 160 144S138.51 192 112 192S64 170.508 64 144S85.49 96 112 96ZM446.121 407.551C443.336 412.754 437.914 416 432.014 416H82.013C75.992 416 70.48 412.621 67.752 407.25C65.021 401.883 65.537 395.438 69.086 390.574L139.086 294.574C142.098 290.441 146.902 288 152.014 288S161.93 290.441 164.941 294.574L197.396 339.086L290.701 199.125C293.668 194.672 298.664 192 304.014 192S314.359 194.672 317.326 199.125L445.326 391.125C448.6 396.035 448.904 402.348 446.121 407.551Z" />
            <path d="M446.108 407.551C443.323 412.754 437.901 416 432 416H82C75.979 416 70.467 412.621 67.739 407.25C65.008 401.883 65.524 395.438 69.073 390.574L139.073 294.574C142.084 290.441 146.889 288 152 288S161.916 290.441 164.928 294.574L197.383 339.086L290.688 199.125C293.655 194.672 298.651 192 304 192S314.346 194.672 317.313 199.125L445.313 391.125C448.586 396.035 448.891 402.348 446.108 407.551Z" />
        </Icon>
    </>
}