
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `memo` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/memo?s=solid memo}
 * @preview ![memo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMEg2NEMyOC42NTQgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzIwQzM1NS4zNDYgNTEyIDM4NCA0ODMuMzQ2IDM4NCA0NDhWNjRDMzg0IDI4LjY1MiAzNTUuMzQ2IDAgMzIwIDBaTTIwOCAzNTJIODBDNzEuMTY0IDM1MiA2NCAzNDQuODM2IDY0IDMzNlM3MS4xNjQgMzIwIDgwIDMyMEgyMDhDMjE2LjgzOCAzMjAgMjI0IDMyNy4xNjQgMjI0IDMzNlMyMTYuODM4IDM1MiAyMDggMzUyWk0zMDQgMjU2SDgwQzcxLjE2NCAyNTYgNjQgMjQ4LjgzNiA2NCAyNDBTNzEuMTY0IDIyNCA4MCAyMjRIMzA0QzMxMi44MzggMjI0IDMyMCAyMzEuMTY0IDMyMCAyNDBTMzEyLjgzOCAyNTYgMzA0IDI1NlpNMzA0IDE2MEg4MEM3MS4xNjQgMTYwIDY0IDE1Mi44MzYgNjQgMTQ0UzcxLjE2NCAxMjggODAgMTI4SDMwNEMzMTIuODM4IDEyOCAzMjAgMTM1LjE2NCAzMjAgMTQ0UzMxMi44MzggMTYwIDMwNCAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Memo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V64C384 28.652 355.346 0 320 0ZM208 352H80C71.164 352 64 344.836 64 336S71.164 320 80 320H208C216.838 320 224 327.164 224 336S216.838 352 208 352ZM304 256H80C71.164 256 64 248.836 64 240S71.164 224 80 224H304C312.838 224 320 231.164 320 240S312.838 256 304 256ZM304 160H80C71.164 160 64 152.836 64 144S71.164 128 80 128H304C312.838 128 320 135.164 320 144S312.838 160 304 160Z" />
        </Icon>
    </>
}