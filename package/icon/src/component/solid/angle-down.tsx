
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=solid angle-down}
 * @preview ![angle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzEuNTE1IDIyOS4wNTVMMjE5LjUxNiAzNzMuMDMzQzIxMS43OTcgMzgwLjM0NCAyMDEuODkxIDM4NCAxOTIgMzg0UzE3Mi4yMDMgMzgwLjM0NCAxNjQuNDg0IDM3My4wMzNMMTIuNDg1IDIyOS4wNTVDLTMuNTQ2IDIxMy44NyAtNC4yMzMgMTg4LjU2MSAxMC45NyAxNzIuNTMyQzI2LjE1NyAxNTYuNDcyIDUxLjQ4NSAxNTUuNzg1IDY3LjUxNiAxNzEuMDAxTDE5MiAyODguOTIxTDMxNi40ODQgMTcxLjAwMUMzMzIuNDk5IDE1NS43NTQgMzU3LjgyNyAxNTYuNDQxIDM3My4wMyAxNzIuNTMyQzM4OC4yMzMgMTg4LjU2MSAzODcuNTQ2IDIxMy44NyAzNzEuNTE1IDIyOS4wNTVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function AngleDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M371.515 229.055L219.516 373.033C211.797 380.344 201.891 384 192 384S172.203 380.344 164.484 373.033L12.485 229.055C-3.546 213.87 -4.233 188.561 10.97 172.532C26.157 156.472 51.485 155.785 67.516 171.001L192 288.921L316.484 171.001C332.499 155.754 357.827 156.441 373.03 172.532C388.233 188.561 387.546 213.87 371.515 229.055Z" />
        </Icon>
    </>
}