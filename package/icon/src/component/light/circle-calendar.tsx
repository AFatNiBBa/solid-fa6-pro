
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-calendar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=light circle-calendar}
 * @preview ![circle-calendar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTI4SDMyMFYxMTJDMzIwIDEwMy4xNjQgMzEyLjgzNiA5NiAzMDQgOTZTMjg4IDEwMy4xNjQgMjg4IDExMlYxMjhIMjI0VjExMkMyMjQgMTAzLjE2NCAyMTYuODM2IDk2IDIwOCA5NlMxOTIgMTAzLjE2NCAxOTIgMTEyVjEyOEgxNzZDMTQ5LjQ5IDEyOCAxMjggMTQ5LjQ5IDEyOCAxNzZWMzM2QzEyOCAzNjIuNTEgMTQ5LjQ5IDM4NCAxNzYgMzg0SDMzNkMzNjIuNTEgMzg0IDM4NCAzNjIuNTEgMzg0IDMzNlYxNzZDMzg0IDE0OS40OSAzNjIuNTEgMTI4IDMzNiAxMjhaTTM1MiAzMzZDMzUyIDM0NC44MzYgMzQ0LjgzNiAzNTIgMzM2IDM1MkgxNzZDMTY3LjE2NCAzNTIgMTYwIDM0NC44MzYgMTYwIDMzNlYyMjRIMzUyVjMzNlpNMzUyIDE5MkgxNjBWMTc2QzE2MCAxNjcuMTY0IDE2Ny4xNjQgMTYwIDE3NiAxNjBIMzM2QzM0NC44MzYgMTYwIDM1MiAxNjcuMTY0IDM1MiAxNzZWMTkyWk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleCalendar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M336 128H320V112C320 103.164 312.836 96 304 96S288 103.164 288 112V128H224V112C224 103.164 216.836 96 208 96S192 103.164 192 112V128H176C149.49 128 128 149.49 128 176V336C128 362.51 149.49 384 176 384H336C362.51 384 384 362.51 384 336V176C384 149.49 362.51 128 336 128ZM352 336C352 344.836 344.836 352 336 352H176C167.164 352 160 344.836 160 336V224H352V336ZM352 192H160V176C160 167.164 167.164 160 176 160H336C344.836 160 352 167.164 352 176V192ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}