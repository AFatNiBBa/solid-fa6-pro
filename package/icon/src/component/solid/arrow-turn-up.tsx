
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-turn-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=solid arrow-turn-up}
 * @preview ![arrow-turn-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDEuMTg3IDE3OS44NDRDMzI2LjA3OCAxOTUuOTY5IDMwMC43NjYgMTk2Ljc4MSAyODQuNjQxIDE4MS42ODhMMjMyIDEzMi4zNFY0NzJDMjMyIDQ5NC4wOTQgMjE0LjA5NCA1MTIgMTkyIDUxMkg0MEMxNy45MDYgNTEyIDAgNDk0LjA5NCAwIDQ3MlMxNy45MDYgNDMyIDQwIDQzMkgxNTJWMTMyLjM0TDk5LjM1OSAxODEuNjg4QzgzLjIzNCAxOTYuNzgxIDU3LjkyMiAxOTUuOTY5IDQyLjgxMiAxNzkuODQ0QzI3LjcwMyAxNjMuNzUgMjguNTMxIDEzOC40MzggNDQuNjQxIDEyMy4zMTJMMTY0LjY0MSAxMC44MTJDMTcyLjMyOCAzLjU5NCAxODIuMTcyIDAgMTkyIDBTMjExLjY3MiAzLjU5NCAyMTkuMzU5IDEwLjgxMkwzMzkuMzU5IDEyMy4zMTJDMzU1LjQ2OSAxMzguNDM4IDM1Ni4yOTcgMTYzLjc1IDM0MS4xODcgMTc5Ljg0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowTurnUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M341.187 179.844C326.078 195.969 300.766 196.781 284.641 181.688L232 132.34V472C232 494.094 214.094 512 192 512H40C17.906 512 0 494.094 0 472S17.906 432 40 432H152V132.34L99.359 181.688C83.234 196.781 57.922 195.969 42.812 179.844C27.703 163.75 28.531 138.438 44.641 123.312L164.641 10.812C172.328 3.594 182.172 0 192 0S211.672 3.594 219.359 10.812L339.359 123.312C355.469 138.438 356.297 163.75 341.187 179.844Z" />
        </Icon>
    </>
}