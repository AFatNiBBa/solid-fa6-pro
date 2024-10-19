
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bus?s=thin bus}
 * @preview ![bus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMzkyQzQzOC4wNyAzOTIgNDU2IDM3NC4wOSA0NTYgMzUyUzQzOC4wNyAzMTIgNDE2IDMxMlMzNzYgMzI5LjkxIDM3NiAzNTJTMzkzLjkzIDM5MiA0MTYgMzkyWk00MTYgMzI4QzQyOS4yMzQgMzI4IDQ0MCAzMzguNzY2IDQ0MCAzNTJDNDQwIDM2NS4yMzIgNDI5LjIzNCAzNzYgNDE2IDM3NlMzOTIgMzY1LjIzMiAzOTIgMzUyQzM5MiAzMzguNzY2IDQwMi43NjYgMzI4IDQxNiAzMjhaTTI0IDEyOEgzMkMzNi40MDYgMTI4IDQwIDEyNC40MjIgNDAgMTIwUzM2LjQwNiAxMTIgMzIgMTEySDI0QzEwLjc4MSAxMTIgMCAxMjIuNzY2IDAgMTM2VjI0OEMwIDI2MS4yMzQgMTAuNzgxIDI3MiAyNCAyNzJIMzJDMzYuNDA2IDI3MiA0MCAyNjguNDIyIDQwIDI2NFMzNi40MDYgMjU2IDMyIDI1NkgyNEMxOS41OTQgMjU2IDE2IDI1Mi40MDYgMTYgMjQ4VjEzNkMxNiAxMzEuNTk0IDE5LjU5NCAxMjggMjQgMTI4Wk01NTIgMTEySDU0NEM1MzkuNTk0IDExMiA1MzYgMTE1LjU3OCA1MzYgMTIwUzUzOS41OTQgMTI4IDU0NCAxMjhINTUyQzU1Ni40MDYgMTI4IDU2MCAxMzEuNTk0IDU2MCAxMzZWMjQ4QzU2MCAyNTIuNDA2IDU1Ni40MDYgMjU2IDU1MiAyNTZINTQ0QzUzOS41OTQgMjU2IDUzNiAyNTkuNTc4IDUzNiAyNjRTNTM5LjU5NCAyNzIgNTQ0IDI3Mkg1NTJDNTY1LjIxOSAyNzIgNTc2IDI2MS4yMzQgNTc2IDI0OFYxMzZDNTc2IDEyMi43NjYgNTY1LjIxOSAxMTIgNTUyIDExMlpNMjg4IDBDMTYzLjE4OCAwIDY0IDM1LjIwMyA2NCA4MFY0MTZDNjQgNDMzLjY3MiA3OC4zNDQgNDQ4IDk2IDQ0OEgxMTJWNTA0QzExMiA1MDguNDE4IDExNS41ODIgNTEyIDEyMCA1MTJTMTI4IDUwOC40MTggMTI4IDUwNFY0NDhINDQ4VjUwNEM0NDggNTA4LjQxOCA0NTEuNTgyIDUxMiA0NTYgNTEyUzQ2NCA1MDguNDE4IDQ2NCA1MDRWNDQ4SDQ4Ni40MDZDNTAyLjQwNiA0NDggNTEyIDQzNS4yMDMgNTEyIDQyMi40MDZWODBDNTEyIDM1LjIwMyA0MTIuODEyIDAgMjg4IDBaTTgwIDExMkgyODBWMjU2SDgwVjExMlpNNDk2IDQyMi40MDZDNDk2IDQyNS43MjUgNDkzLjk5NiA0MzIgNDg2LjQwNiA0MzJIOTZDODcuMTc2IDQzMiA4MCA0MjQuODIyIDgwIDQxNlYyNzJINDk2VjQyMi40MDZaTTQ5NiAyNTZIMjk2VjExMkg0OTZWMjU2Wk00OTYgOTZIODBWODBDODAgNTMuMjc1IDE1OS4xMjkgMTYgMjg4IDE2UzQ5NiA1My4yNzUgNDk2IDgwVjk2Wk0xNjAgMzkyQzE4Mi4wNyAzOTIgMjAwIDM3NC4wOSAyMDAgMzUyUzE4Mi4wNyAzMTIgMTYwIDMxMlMxMjAgMzI5LjkxIDEyMCAzNTJTMTM3LjkzIDM5MiAxNjAgMzkyWk0xNjAgMzI4QzE3My4yMzQgMzI4IDE4NCAzMzguNzY2IDE4NCAzNTJDMTg0IDM2NS4yMzIgMTczLjIzNCAzNzYgMTYwIDM3NlMxMzYgMzY1LjIzMiAxMzYgMzUyQzEzNiAzMzguNzY2IDE0Ni43NjYgMzI4IDE2MCAzMjhaTTM2MCA0OEgyMTZDMjExLjU3OCA0OCAyMDggNTEuNTc4IDIwOCA1NlMyMTEuNTc4IDY0IDIxNiA2NEgzNjBDMzY0LjQyMiA2NCAzNjggNjAuNDIyIDM2OCA1NlMzNjQuNDIyIDQ4IDM2MCA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M416 392C438.07 392 456 374.09 456 352S438.07 312 416 312S376 329.91 376 352S393.93 392 416 392ZM416 328C429.234 328 440 338.766 440 352C440 365.232 429.234 376 416 376S392 365.232 392 352C392 338.766 402.766 328 416 328ZM24 128H32C36.406 128 40 124.422 40 120S36.406 112 32 112H24C10.781 112 0 122.766 0 136V248C0 261.234 10.781 272 24 272H32C36.406 272 40 268.422 40 264S36.406 256 32 256H24C19.594 256 16 252.406 16 248V136C16 131.594 19.594 128 24 128ZM552 112H544C539.594 112 536 115.578 536 120S539.594 128 544 128H552C556.406 128 560 131.594 560 136V248C560 252.406 556.406 256 552 256H544C539.594 256 536 259.578 536 264S539.594 272 544 272H552C565.219 272 576 261.234 576 248V136C576 122.766 565.219 112 552 112ZM288 0C163.188 0 64 35.203 64 80V416C64 433.672 78.344 448 96 448H112V504C112 508.418 115.582 512 120 512S128 508.418 128 504V448H448V504C448 508.418 451.582 512 456 512S464 508.418 464 504V448H486.406C502.406 448 512 435.203 512 422.406V80C512 35.203 412.812 0 288 0ZM80 112H280V256H80V112ZM496 422.406C496 425.725 493.996 432 486.406 432H96C87.176 432 80 424.822 80 416V272H496V422.406ZM496 256H296V112H496V256ZM496 96H80V80C80 53.275 159.129 16 288 16S496 53.275 496 80V96ZM160 392C182.07 392 200 374.09 200 352S182.07 312 160 312S120 329.91 120 352S137.93 392 160 392ZM160 328C173.234 328 184 338.766 184 352C184 365.232 173.234 376 160 376S136 365.232 136 352C136 338.766 146.766 328 160 328ZM360 48H216C211.578 48 208 51.578 208 56S211.578 64 216 64H360C364.422 64 368 60.422 368 56S364.422 48 360 48Z" />
        </Icon>
    </>
}