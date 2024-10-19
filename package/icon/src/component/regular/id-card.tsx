
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `id-card` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/id-card?s=regular id-card}
 * @preview ![id-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMzQ0SDQ2NEM0NzcuMjUgMzQ0IDQ4OCAzMzMuMjUgNDg4IDMyMFM0NzcuMjUgMjk2IDQ2NCAyOTZIMzY4QzM1NC43NSAyOTYgMzQ0IDMwNi43NSAzNDQgMzIwUzM1NC43NSAzNDQgMzY4IDM0NFpNMjA4IDMyMEMyNDMuMzQ2IDMyMCAyNzIgMjkxLjM0NiAyNzIgMjU2QzI3MiAyMjAuNjUyIDI0My4zNDYgMTkyIDIwOCAxOTJTMTQ0IDIyMC42NTIgMTQ0IDI1NkMxNDQgMjkxLjM0NiAxNzIuNjU0IDMyMCAyMDggMzIwWk01MTIgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM0NiA0ODAgNTc2IDQ1MS4zNDYgNTc2IDQxNlY5NkM1NzYgNjAuNjU0IDU0Ny4zNDYgMzIgNTEyIDMyWk01MjggNDE2QzUyOCA0MjQuODIyIDUyMC44MjIgNDMyIDUxMiA0MzJIMzIwQzMyMCAzODcuODE2IDI4NC4xODQgMzUyIDI0MCAzNTJIMTc2QzEzMS44MTYgMzUyIDk2IDM4Ny44MTYgOTYgNDMySDY0QzU1LjE3OCA0MzIgNDggNDI0LjgyMiA0OCA0MTZWMTYwSDUyOFY0MTZaTTM2OCAyNjRINDY0QzQ3Ny4yNSAyNjQgNDg4IDI1My4yNSA0ODggMjQwUzQ3Ny4yNSAyMTYgNDY0IDIxNkgzNjhDMzU0Ljc1IDIxNiAzNDQgMjI2Ljc1IDM0NCAyNDBTMzU0Ljc1IDI2NCAzNjggMjY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function IdCard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M368 344H464C477.25 344 488 333.25 488 320S477.25 296 464 296H368C354.75 296 344 306.75 344 320S354.75 344 368 344ZM208 320C243.346 320 272 291.346 272 256C272 220.652 243.346 192 208 192S144 220.652 144 256C144 291.346 172.654 320 208 320ZM512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.654 547.346 32 512 32ZM528 416C528 424.822 520.822 432 512 432H320C320 387.816 284.184 352 240 352H176C131.816 352 96 387.816 96 432H64C55.178 432 48 424.822 48 416V160H528V416ZM368 264H464C477.25 264 488 253.25 488 240S477.25 216 464 216H368C354.75 216 344 226.75 344 240S354.75 264 368 264Z" />
        </Icon>
    </>
}