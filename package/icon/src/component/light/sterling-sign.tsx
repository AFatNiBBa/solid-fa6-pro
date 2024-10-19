
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sterling-sign` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sterling-sign?s=light sterling-sign}
 * @preview ![sterling-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDY0QzMyMCA0NzIuODQ0IDMxMi44NDQgNDgwIDMwNCA0ODBIMTZDMTAuNDY5IDQ4MCA1LjMxMiA0NzcuMTI1IDIuMzc1IDQ3Mi40MDZDLTAuNTMxIDQ2Ny42ODggLTAuNzgxIDQ2MS43OTcgMS42ODggNDU2Ljg0NEMyNy45MTYgNDA0LjQxNCA0Mi42OTMgMzQ2LjUyNyA0Ni4zOTggMjg4SDE2QzcuMTU2IDI4OCAwIDI4MC44NDQgMCAyNzJTNy4xNTYgMjU2IDE2IDI1Nkg0OFYxNjAuMjk3QzQ4IDg5LjU0NyAxMDUuNTYyIDMyIDE3Ni4yODEgMzJDMTk5LjkzOCAzMiAyMjMuMTU2IDM4LjQyMiAyNDMuNDA2IDUwLjU5NEwyOTYuMjE5IDgyLjI4MUMzMDMuODEyIDg2LjgyOCAzMDYuMjgxIDk2LjY1NiAzMDEuNzE5IDEwNC4yMzRDMjk3LjE1NiAxMTEuODU5IDI4Ny4zMTIgMTE0LjI1IDI3OS43ODEgMTA5LjcxOUwyMjYuOTY5IDc4LjAzMUMyMTEuNjU2IDY4Ljg1OSAxOTQuMTI1IDY0IDE3Ni4yODEgNjRDMTIzLjE4OCA2NCA4MCAxMDcuMjAzIDgwIDE2MC4yOTdWMjU2SDI0MEMyNDguODQ0IDI1NiAyNTYgMjYzLjE1NiAyNTYgMjcyUzI0OC44NDQgMjg4IDI0MCAyODhINzguNTgyQzc1LjMzNiAzNDIuOTc1IDYyLjk2OSAzOTcuNDY5IDQxLjA5NCA0NDhIMzA0QzMxMi44NDQgNDQ4IDMyMCA0NTUuMTU2IDMyMCA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SterlingSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 464C320 472.844 312.844 480 304 480H16C10.469 480 5.312 477.125 2.375 472.406C-0.531 467.688 -0.781 461.797 1.688 456.844C27.916 404.414 42.693 346.527 46.398 288H16C7.156 288 0 280.844 0 272S7.156 256 16 256H48V160.297C48 89.547 105.562 32 176.281 32C199.938 32 223.156 38.422 243.406 50.594L296.219 82.281C303.812 86.828 306.281 96.656 301.719 104.234C297.156 111.859 287.312 114.25 279.781 109.719L226.969 78.031C211.656 68.859 194.125 64 176.281 64C123.188 64 80 107.203 80 160.297V256H240C248.844 256 256 263.156 256 272S248.844 288 240 288H78.582C75.336 342.975 62.969 397.469 41.094 448H304C312.844 448 320 455.156 320 464Z" />
        </Icon>
    </>
}