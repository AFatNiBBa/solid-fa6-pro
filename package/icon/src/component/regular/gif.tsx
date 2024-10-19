
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gif` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gif?s=regular gif}
 * @preview ![gif](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM0NiA0ODAgNTc2IDQ1MS4zNDYgNTc2IDQxNlY5NkM1NzYgNjAuNjUyIDU0Ny4zNDYgMzIgNTEyIDMyWk01MjggNDE2QzUyOCA0MjQuODIyIDUyMC44MjIgNDMyIDUxMiA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDUxMkM1MjAuODIyIDgwIDUyOCA4Ny4xNzggNTI4IDk2VjQxNlpNNDY0IDE2NEgzNzZDMzY0Ljk1MyAxNjQgMzU2IDE3Mi45NTMgMzU2IDE4NFYzMjhDMzU2IDMzOS4wNDcgMzY0Ljk1MyAzNDggMzc2IDM0OFMzOTYgMzM5LjA0NyAzOTYgMzI4VjI3Nkg0NDhDNDU5LjA0NyAyNzYgNDY4IDI2Ny4wNDcgNDY4IDI1NlM0NTkuMDQ3IDIzNiA0NDggMjM2SDM5NlYyMDRINDY0QzQ3NS4wNDcgMjA0IDQ4NCAxOTUuMDQ3IDQ4NCAxODRTNDc1LjA0NyAxNjQgNDY0IDE2NFpNMzA0IDE2NEMyOTIuOTUzIDE2NCAyODQgMTcyLjk1MyAyODQgMTg0VjMyOEMyODQgMzM5LjA0NyAyOTIuOTUzIDM0OCAzMDQgMzQ4UzMyNCAzMzkuMDQ3IDMyNCAzMjhWMTg0QzMyNCAxNzIuOTUzIDMxNS4wNDcgMTY0IDMwNCAxNjRaTTI0MCAyNDRIMTgyLjgyOEMxNzEuNzgxIDI0NCAxNjIuODI4IDI1Mi45NTMgMTYyLjgyOCAyNjRTMTcxLjc4MSAyODQgMTgyLjgyOCAyODRIMjIwVjI5Ny43MzRDMTk5LjUzMSAzMTIuNDA2IDE2NC43OTcgMzEwLjM0NCAxNDcuMjM0IDI5Mi43NjZDMTM3LjQwNiAyODIuOTM4IDEzMiAyNjkuODkxIDEzMiAyNTZTMTM3LjQwNiAyMjkuMDYyIDE0Ny4yMzQgMjE5LjIzNEMxNjYuODkxIDE5OS41NjIgMTk5LjkzOCAxOTkuNTYyIDIxOS41OTQgMjE5LjIzNEMyMjcuMzkxIDIyNy4wNDcgMjQwLjA0NyAyMjcuMDQ3IDI0Ny44NzUgMjE5LjIzNEMyNTUuNjg4IDIxMS40MzggMjU1LjY4OCAxOTguNzY2IDI0Ny44NzUgMTkwLjk1M0MyMTMuMTI1IDE1Ni4yMDMgMTUzLjcwMyAxNTYuMTcyIDExOC45NTMgMTkwLjk1M0MxMDEuNTc4IDIwOC4zMjggOTIgMjMxLjQyMiA5MiAyNTZTMTAxLjU3OCAzMDMuNjcyIDExOC45NTMgMzIxLjA0N0MxMzYuMDYyIDMzOC4xNzIgMTYwLjcwMyAzNDggMTg2LjU0NyAzNDhDMjEyLjM3NSAzNDggMjM3LjAxNiAzMzguMTcyIDI1NC4xNDEgMzIxLjA0N0MyNTcuODkxIDMxNy4yOTcgMjYwIDMxMi4yMDMgMjYwIDMwNi45MDZWMjY0QzI2MCAyNTIuOTUzIDI1MS4wNDcgMjQ0IDI0MCAyNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Gif(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H512C520.822 80 528 87.178 528 96V416ZM464 164H376C364.953 164 356 172.953 356 184V328C356 339.047 364.953 348 376 348S396 339.047 396 328V276H448C459.047 276 468 267.047 468 256S459.047 236 448 236H396V204H464C475.047 204 484 195.047 484 184S475.047 164 464 164ZM304 164C292.953 164 284 172.953 284 184V328C284 339.047 292.953 348 304 348S324 339.047 324 328V184C324 172.953 315.047 164 304 164ZM240 244H182.828C171.781 244 162.828 252.953 162.828 264S171.781 284 182.828 284H220V297.734C199.531 312.406 164.797 310.344 147.234 292.766C137.406 282.938 132 269.891 132 256S137.406 229.062 147.234 219.234C166.891 199.562 199.938 199.562 219.594 219.234C227.391 227.047 240.047 227.047 247.875 219.234C255.688 211.438 255.688 198.766 247.875 190.953C213.125 156.203 153.703 156.172 118.953 190.953C101.578 208.328 92 231.422 92 256S101.578 303.672 118.953 321.047C136.062 338.172 160.703 348 186.547 348C212.375 348 237.016 338.172 254.141 321.047C257.891 317.297 260 312.203 260 306.906V264C260 252.953 251.047 244 240 244Z" />
        </Icon>
    </>
}