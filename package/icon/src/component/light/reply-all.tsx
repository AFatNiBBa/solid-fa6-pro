
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `reply-all` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/reply-all?s=light reply-all}
 * @preview ![reply-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMjI0LjAwM0gxODguMTk5TDM0Ni4yNSA5Mi4yOUMzNTMuMDMxIDg2LjYzMyAzNTMuOTM4IDc2LjU0IDM0OC4yODEgNjkuNzU5QzM0Mi41OTQgNjIuOTQ2IDMzMi41IDYyLjA3MSAzMjUuNzUgNjcuNzI3TDEzMy43NSAyMjcuNzIyQzEzMC4wOTQgMjMwLjc1MyAxMjggMjM1LjI1MyAxMjggMjQwLjAwM1MxMzAuMDk0IDI0OS4yNTIgMTMzLjc1IDI1Mi4yODRMMzI1Ljc1IDQxMi4yODJDMzI4Ljc1IDQxNC43ODIgMzMyLjM3NSA0MTYgMzM2IDQxNkMzNDAuNTYyIDQxNiAzNDUuMTI1IDQxNC4wMzIgMzQ4LjI4MSA0MTAuMjVDMzUzLjkzOCA0MDMuNDY5IDM1My4wMzEgMzkzLjM3NiAzNDYuMjUgMzg3LjcyTDE4OC4xOTkgMjU2LjAwMkg0MDBDNDc5LjQwNiAyNTYuMDAyIDU0NCAzMjAuNTk1IDU0NCA0MDAuMDAxVjQzMkM1NDQgNDQwLjg0NCA1NTEuMTU2IDQ0OCA1NjAgNDQ4UzU3NiA0NDAuODQ0IDU3NiA0MzJWNDAwLjAwMUM1NzYgMzAyLjk3MSA0OTcuMDMxIDIyNC4wMDMgNDAwIDIyNC4wMDNaTTQxIDI0MC4wMDNMMjE4LjI1IDkyLjI4NkMyMjUuMDMxIDg2LjYzIDIyNS45MzggNzYuNTM2IDIyMC4yODEgNjkuNzU1QzIxNC42MjUgNjIuOTQyIDIwNC41MzEgNjIuMDY3IDE5Ny43NSA2Ny43MjRMNS43NSAyMjcuNzIyQzIuMDk0IDIzMC43NTMgMCAyMzUuMjUzIDAgMjQwLjAwM1MyLjA5NCAyNDkuMjUyIDUuNzUgMjUyLjI4NEwxOTcuNzUgNDEyLjI4MkMyMDAuNzUgNDE0Ljc4MiAyMDQuMzc1IDQxNiAyMDggNDE2QzIxMi41NjIgNDE2IDIxNy4xMjUgNDE0LjAzMiAyMjAuMjgxIDQxMC4yNUMyMjUuOTM4IDQwMy40NjkgMjI1LjAzMSAzOTMuMzc2IDIxOC4yNSAzODcuNzJMNDEgMjQwLjAwM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ReplyAll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M400 224.003H188.199L346.25 92.29C353.031 86.633 353.938 76.54 348.281 69.759C342.594 62.946 332.5 62.071 325.75 67.727L133.75 227.722C130.094 230.753 128 235.253 128 240.003S130.094 249.252 133.75 252.284L325.75 412.282C328.75 414.782 332.375 416 336 416C340.562 416 345.125 414.032 348.281 410.25C353.938 403.469 353.031 393.376 346.25 387.72L188.199 256.002H400C479.406 256.002 544 320.595 544 400.001V432C544 440.844 551.156 448 560 448S576 440.844 576 432V400.001C576 302.971 497.031 224.003 400 224.003ZM41 240.003L218.25 92.286C225.031 86.63 225.938 76.536 220.281 69.755C214.625 62.942 204.531 62.067 197.75 67.724L5.75 227.722C2.094 230.753 0 235.253 0 240.003S2.094 249.252 5.75 252.284L197.75 412.282C200.75 414.782 204.375 416 208 416C212.562 416 217.125 414.032 220.281 410.25C225.938 403.469 225.031 393.376 218.25 387.72L41 240.003Z" />
        </Icon>
    </>
}