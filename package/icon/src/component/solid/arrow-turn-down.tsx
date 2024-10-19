
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-turn-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=solid arrow-turn-down}
 * @preview ![arrow-turn-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzkuMzU5IDM4OC42ODhMMjE5LjM1OSA1MDEuMTg4QzIxMS42NzIgNTA4LjQwNiAyMDEuODI4IDUxMiAxOTIgNTEyUzE3Mi4zMjggNTA4LjQwNiAxNjQuNjQxIDUwMS4xODhMNDQuNjQxIDM4OC42ODhDMjguNTMxIDM3My41NjMgMjcuNzAzIDM0OC4yNSA0Mi44MTIgMzMyLjE1NkM1Ny45MjIgMzE2LjAzMSA4My4yMzQgMzE1LjIxOSA5OS4zNTkgMzMwLjMxMkwxNTIgMzc5LjY2VjgwSDQwQzE3LjkwNiA4MCAwIDYyLjA5NCAwIDQwUzE3LjkwNiAwIDQwIDBIMTkyQzIxNC4wOTQgMCAyMzIgMTcuOTA2IDIzMiA0MFYzNzkuNjZMMjg0LjY0MSAzMzAuMzEyQzMwMC43NjYgMzE1LjIxOSAzMjYuMDc4IDMxNi4wMzEgMzQxLjE4NyAzMzIuMTU2QzM1Ni4yOTcgMzQ4LjI1IDM1NS40NjkgMzczLjU2MiAzMzkuMzU5IDM4OC42ODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowTurnDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M339.359 388.688L219.359 501.188C211.672 508.406 201.828 512 192 512S172.328 508.406 164.641 501.188L44.641 388.688C28.531 373.563 27.703 348.25 42.812 332.156C57.922 316.031 83.234 315.219 99.359 330.312L152 379.66V80H40C17.906 80 0 62.094 0 40S17.906 0 40 0H192C214.094 0 232 17.906 232 40V379.66L284.641 330.312C300.766 315.219 326.078 316.031 341.187 332.156C356.297 348.25 355.469 373.562 339.359 388.688Z" />
        </Icon>
    </>
}