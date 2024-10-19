
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clone` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=duotone clone}
 * @preview ![clone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiAzODRWNDQ4QzM1MiA0ODMuMzQ2IDMyMy4zNDggNTEyIDI4OCA1MTJINjRDMjguNjU0IDUxMiAwIDQ4My4zNDYgMCA0NDhWMjI0QzAgMTg4LjY1MiAyOC42NTQgMTYwIDY0IDE2MEgxMjhWMzA0QzEyOCAzNDguMTgyIDE2My44MTggMzg0IDIwOCAzODRIMzUyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MTIgNjRWMjg4QzUxMiAzMjMuMzQ2IDQ4My4zNDYgMzUyIDQ0OCAzNTJIMjI0QzE4OC42NTQgMzUyIDE2MCAzMjMuMzQ2IDE2MCAyODhWNjRDMTYwIDI4LjY1MiAxODguNjU0IDAgMjI0IDBINDQ4QzQ4My4zNDYgMCA1MTIgMjguNjUyIDUxMiA2NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Clone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M352 384V448C352 483.346 323.348 512 288 512H64C28.654 512 0 483.346 0 448V224C0 188.652 28.654 160 64 160H128V304C128 348.182 163.818 384 208 384H352Z" />
            <path d="M512 64V288C512 323.346 483.346 352 448 352H224C188.654 352 160 323.346 160 288V64C160 28.652 188.654 0 224 0H448C483.346 0 512 28.652 512 64Z" />
        </Icon>
    </>
}