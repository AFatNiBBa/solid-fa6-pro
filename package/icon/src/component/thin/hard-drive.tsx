
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hard-drive` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=thin hard-drive}
 * @preview ![hard-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjUyIDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0OCAyOC42NTIgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0OCA0ODAgNTEyIDQ1MS4zNDggNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDggMzIgNDQ4IDMyWk00OTYgNDE2QzQ5NiA0NDIuNDY5IDQ3NC40NjkgNDY0IDQ0OCA0NjRINjRDMzcuNTMxIDQ2NCAxNiA0NDIuNDY5IDE2IDQxNlYzNTJDMTYgMzI1LjUzMSAzNy41MzEgMzA0IDY0IDMwNEg0NDhDNDc0LjQ2OSAzMDQgNDk2IDMyNS41MzEgNDk2IDM1MlY0MTZaTTQ5NiAzMTAuMDdDNDg0LjI3IDI5Ni42NTIgNDY3LjIyNyAyODggNDQ4IDI4OEg2NEM0NC43NzMgMjg4IDI3LjczIDI5Ni42NTIgMTYgMzEwLjA3Vjk2QzE2IDY5LjUzMSAzNy41MzEgNDggNjQgNDhINDQ4QzQ3NC40NjkgNDggNDk2IDY5LjUzMSA0OTYgOTZWMzEwLjA3Wk0zMjAgMzUyQzMwMi4zMjggMzUyIDI4OCAzNjYuMzI4IDI4OCAzODRTMzAyLjMyOCA0MTYgMzIwIDQxNlMzNTIgNDAxLjY3MiAzNTIgMzg0UzMzNy42NzIgMzUyIDMyMCAzNTJaTTMyMCA0MDBDMzExLjE3NiA0MDAgMzA0IDM5Mi44MjQgMzA0IDM4NFMzMTEuMTc2IDM2OCAzMjAgMzY4UzMzNiAzNzUuMTc2IDMzNiAzODRTMzI4LjgyNCA0MDAgMzIwIDQwMFpNNDE2IDM1MkMzOTguMzI4IDM1MiAzODQgMzY2LjMyOCAzODQgMzg0UzM5OC4zMjggNDE2IDQxNiA0MTZTNDQ4IDQwMS42NzIgNDQ4IDM4NFM0MzMuNjcyIDM1MiA0MTYgMzUyWk00MTYgNDAwQzQwNy4xNzYgNDAwIDQwMCAzOTIuODI0IDQwMCAzODRTNDA3LjE3NiAzNjggNDE2IDM2OFM0MzIgMzc1LjE3NiA0MzIgMzg0UzQyNC44MjQgNDAwIDQxNiA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HardDrive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.652 32 0 60.652 0 96V416C0 451.348 28.652 480 64 480H448C483.348 480 512 451.348 512 416V96C512 60.652 483.348 32 448 32ZM496 416C496 442.469 474.469 464 448 464H64C37.531 464 16 442.469 16 416V352C16 325.531 37.531 304 64 304H448C474.469 304 496 325.531 496 352V416ZM496 310.07C484.27 296.652 467.227 288 448 288H64C44.773 288 27.73 296.652 16 310.07V96C16 69.531 37.531 48 64 48H448C474.469 48 496 69.531 496 96V310.07ZM320 352C302.328 352 288 366.328 288 384S302.328 416 320 416S352 401.672 352 384S337.672 352 320 352ZM320 400C311.176 400 304 392.824 304 384S311.176 368 320 368S336 375.176 336 384S328.824 400 320 400ZM416 352C398.328 352 384 366.328 384 384S398.328 416 416 416S448 401.672 448 384S433.672 352 416 352ZM416 400C407.176 400 400 392.824 400 384S407.176 368 416 368S432 375.176 432 384S424.824 400 416 400Z" />
        </Icon>
    </>
}