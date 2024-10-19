
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-e` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-e?s=thin square-e}
 * @preview ![square-e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNMzEyIDE0NEMzMTYuNDIyIDE0NCAzMjAgMTQwLjQyMiAzMjAgMTM2UzMxNi40MjIgMTI4IDMxMiAxMjhIMTM2QzEzMS41NzggMTI4IDEyOCAxMzEuNTc4IDEyOCAxMzZWMzc2QzEyOCAzODAuNDIyIDEzMS41NzggMzg0IDEzNiAzODRIMzEyQzMxNi40MjIgMzg0IDMyMCAzODAuNDIyIDMyMCAzNzZTMzE2LjQyMiAzNjggMzEyIDM2OEgxNDRWMjY0SDI2NEMyNjguNDIyIDI2NCAyNzIgMjYwLjQyMiAyNzIgMjU2UzI2OC40MjIgMjQ4IDI2NCAyNDhIMTQ0VjE0NEgzMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareE(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM312 144C316.422 144 320 140.422 320 136S316.422 128 312 128H136C131.578 128 128 131.578 128 136V376C128 380.422 131.578 384 136 384H312C316.422 384 320 380.422 320 376S316.422 368 312 368H144V264H264C268.422 264 272 260.422 272 256S268.422 248 264 248H144V144H312Z" />
        </Icon>
    </>
}