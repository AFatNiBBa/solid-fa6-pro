
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-paper` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-paper?s=solid hand-paper}
 * @preview ![hand-paper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZDNDMwLjMyOCA5NiA0MTYgMTEwLjMyOCA0MTYgMTI4VjI0MEM0MTYgMjQ4LjgzNiA0MDguODM2IDI1NiA0MDAgMjU2UzM4NCAyNDguODM2IDM4NCAyNDBWNjRDMzg0IDQ2LjMyOCAzNjkuNjcyIDMyIDM1MiAzMlMzMjAgNDYuMzI4IDMyMCA2NFYyNDBDMzIwIDI0OC44MzYgMzEyLjgzNiAyNTYgMzA0IDI1NlMyODggMjQ4LjgzNiAyODggMjQwVjMyQzI4OCAxNC4zMjggMjczLjY3MiAwIDI1NiAwUzIyNCAxNC4zMjggMjI0IDMyVjI0MEMyMjQgMjQ4LjgzNiAyMTYuODM2IDI1NiAyMDggMjU2UzE5MiAyNDguODM2IDE5MiAyNDBWNjRDMTkyIDQ2LjMyOCAxNzcuNjcyIDMyIDE2MCAzMlMxMjggNDYuMzI4IDEyOCA2NFYzNDMuNDM4TDY4LjI4MSAyODMuNzE5QzYwLjQ2OSAyNzUuOTA2IDUwLjIzNCAyNzIgNDAgMjcyQzE3LjE1MSAyNzIgMCAyOTAuNjgzIDAgMzEyQzAgMzIyLjIzNCAzLjkwNiAzMzIuNDY5IDExLjcxOSAzNDAuMjgxTDEyNC44NTkgNDUzLjQyMkMxNjIuNjI1IDQ5MS4yMDMgMjEyLjg1OSA1MTIgMjY2LjI4MSA1MTJIMzA0QzQwMS4wNDcgNTEyIDQ4MCA0MzMuMDQ3IDQ4MCAzMzZWMTI4QzQ4MCAxMTAuMzI4IDQ2NS42NzIgOTYgNDQ4IDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandPaper(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 96C430.328 96 416 110.328 416 128V240C416 248.836 408.836 256 400 256S384 248.836 384 240V64C384 46.328 369.672 32 352 32S320 46.328 320 64V240C320 248.836 312.836 256 304 256S288 248.836 288 240V32C288 14.328 273.672 0 256 0S224 14.328 224 32V240C224 248.836 216.836 256 208 256S192 248.836 192 240V64C192 46.328 177.672 32 160 32S128 46.328 128 64V343.438L68.281 283.719C60.469 275.906 50.234 272 40 272C17.151 272 0 290.683 0 312C0 322.234 3.906 332.469 11.719 340.281L124.859 453.422C162.625 491.203 212.859 512 266.281 512H304C401.047 512 480 433.047 480 336V128C480 110.328 465.672 96 448 96Z" />
        </Icon>
    </>
}