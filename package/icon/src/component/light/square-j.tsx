
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-j` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-j?s=light square-j}
 * @preview ![square-j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzA0IDEyOEMyOTUuMTU2IDEyOCAyODggMTM1LjE1NiAyODggMTQ0VjI5My4zMjhDMjg4IDMyNS42ODggMjU5LjI4MSAzNTIgMjI0IDM1MlMxNjAgMzI1LjY4OCAxNjAgMjkzLjMyOFYyNzJDMTYwIDI2My4xNTYgMTUyLjg0NCAyNTYgMTQ0IDI1NlMxMjggMjYzLjE1NiAxMjggMjcyVjI5My4zMjhDMTI4IDM0My4zMjggMTcxLjA2MiAzODQgMjI0IDM4NFMzMjAgMzQzLjMyOCAzMjAgMjkzLjMyOFYxNDRDMzIwIDEzNS4xNTYgMzEyLjg0NCAxMjggMzA0IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareJ(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM304 128C295.156 128 288 135.156 288 144V293.328C288 325.688 259.281 352 224 352S160 325.688 160 293.328V272C160 263.156 152.844 256 144 256S128 263.156 128 272V293.328C128 343.328 171.062 384 224 384S320 343.328 320 293.328V144C320 135.156 312.844 128 304 128Z" />
        </Icon>
    </>
}