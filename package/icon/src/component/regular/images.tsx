
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `images` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/images?s=regular images}
 * @preview ![images](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJIMTYwLjAwNEMxMjQuNjU2IDMyIDk2LjAwNCA2MC42NTIgOTYuMDA0IDk2VjMyMEM5Ni4wMDQgMzU1LjM0NiAxMjQuNjU2IDM4NCAxNjAuMDA0IDM4NEg1MTJDNTQ3LjM0OCAzODQgNTc2IDM1NS4zNDYgNTc2IDMyMFY5NkM1NzYgNjAuNjUyIDU0Ny4zNDggMzIgNTEyIDMyWk01MjggMzIwQzUyOCAzMjguODIyIDUyMC44MjIgMzM2IDUxMiAzMzZINDk2TDM4Ni42NTQgMTc1LjEyNUMzODMuNjg2IDE3MC42NzIgMzc4LjY4OSAxNjggMzczLjM0MiAxNjhDMzY3Ljk5IDE2OCAzNjIuOTk0IDE3MC42NzIgMzYwLjAyOSAxNzUuMTI1TDI5Ny4yODUgMjY5LjIzNEwyNzQuOTM0IDIzOC41NzRDMjcxLjkxOCAyMzQuNDQxIDI2Ny4xMTMgMjMyIDI2Mi4wMDIgMjMyQzI1Ni44OTMgMjMyIDI1Mi4wODggMjM0LjQ0MSAyNDkuMDcyIDIzOC41NzRMMTc2IDMzNkgxNjAuMDA0QzE1MS4xODIgMzM2IDE0NC4wMDQgMzI4LjgyMiAxNDQuMDA0IDMyMFY5NkMxNDQuMDA0IDg3LjE3OCAxNTEuMTgyIDgwIDE2MC4wMDQgODBINTEyQzUyMC44MjIgODAgNTI4IDg3LjE3OCA1MjggOTZWMzIwWk00OC4wMDIgNDAwVjk2QzIxLjQ5IDk2IDAgMTE3LjQ5MiAwIDE0NFY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQuMDAyIDQ4MEg0MzIuMDEyQzQ1OC41MjEgNDgwIDQ4MC4wMTQgNDU4LjUwOCA0ODAuMDE0IDQzMkg4MC4wMDJDNjIuMzI4IDQzMiA0OC4wMDIgNDE3LjY3MiA0OC4wMDIgNDAwWk0yMjQgMTEyQzIwNi4zMjggMTEyIDE5MiAxMjYuMzI4IDE5MiAxNDRTMjA2LjMyOCAxNzYgMjI0IDE3NkMyNDEuNjc4IDE3NiAyNTYuMDAyIDE2MS42NzIgMjU2LjAwMiAxNDRTMjQxLjY3OCAxMTIgMjI0IDExMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Images(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 32H160.004C124.656 32 96.004 60.652 96.004 96V320C96.004 355.346 124.656 384 160.004 384H512C547.348 384 576 355.346 576 320V96C576 60.652 547.348 32 512 32ZM528 320C528 328.822 520.822 336 512 336H496L386.654 175.125C383.686 170.672 378.689 168 373.342 168C367.99 168 362.994 170.672 360.029 175.125L297.285 269.234L274.934 238.574C271.918 234.441 267.113 232 262.002 232C256.893 232 252.088 234.441 249.072 238.574L176 336H160.004C151.182 336 144.004 328.822 144.004 320V96C144.004 87.178 151.182 80 160.004 80H512C520.822 80 528 87.178 528 96V320ZM48.002 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64.002 480H432.012C458.521 480 480.014 458.508 480.014 432H80.002C62.328 432 48.002 417.672 48.002 400ZM224 112C206.328 112 192 126.328 192 144S206.328 176 224 176C241.678 176 256.002 161.672 256.002 144S241.678 112 224 112Z" />
        </Icon>
    </>
}