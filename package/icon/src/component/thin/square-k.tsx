
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-k` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-k?s=thin square-k}
 * @preview ![square-k](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0OCA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDggMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNMzE3Ljg1OSAxMzAuNTQ3QzMxNC44NTkgMTI3LjM0NCAzMDkuNzk3IDEyNy4xMDkgMzA2LjU0NyAxMzAuMTQxTDE0NCAyODEuMjczVjEzNkMxNDQgMTMxLjU3OCAxNDAuNDIyIDEyOCAxMzYgMTI4UzEyOCAxMzEuNTc4IDEyOCAxMzZWMzc2QzEyOCAzODAuNDIyIDEzMS41NzggMzg0IDEzNiAzODRTMTQ0IDM4MC40MjIgMTQ0IDM3NlYzMDMuMTMzTDIwMy43MzIgMjQ3LjU5NEwzMDUuNjQxIDM4MC44NTlDMzA3LjIxOSAzODIuOTIyIDMwOS41OTQgMzg0IDMxMiAzODRDMzEzLjcwMyAzODQgMzE1LjQwNiAzODMuNDY5IDMxNi44NTkgMzgyLjM1OUMzMjAuMzc1IDM3OS42NzIgMzIxLjAzMSAzNzQuNjU2IDMxOC4zNTkgMzcxLjE0MUwyMTUuNTEgMjM2LjY0NUwzMTcuNDUzIDE0MS44NTlDMzIwLjY4OCAxMzguODQ0IDMyMC44NzUgMTMzLjc4MSAzMTcuODU5IDEzMC41NDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareK(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM317.859 130.547C314.859 127.344 309.797 127.109 306.547 130.141L144 281.273V136C144 131.578 140.422 128 136 128S128 131.578 128 136V376C128 380.422 131.578 384 136 384S144 380.422 144 376V303.133L203.732 247.594L305.641 380.859C307.219 382.922 309.594 384 312 384C313.703 384 315.406 383.469 316.859 382.359C320.375 379.672 321.031 374.656 318.359 371.141L215.51 236.645L317.453 141.859C320.688 138.844 320.875 133.781 317.859 130.547Z" />
        </Icon>
    </>
}