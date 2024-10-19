
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stopwatch` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=thin stopwatch}
 * @preview ![stopwatch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQuMDgyIDE3MS4yM0w0MjEuNjU2IDEzMy42NTZDNDI0Ljc4MSAxMzAuNTMxIDQyNC43ODEgMTI1LjQ2OSA0MjEuNjU2IDEyMi4zNDRTNDEzLjQ2OSAxMTkuMjE5IDQxMC4zNDQgMTIyLjM0NEwzNzMuMzExIDE1OS4zNzVDMzM3LjI0MiAxMjIuMTQ4IDI4Ny40MTIgOTguNTE2IDIzMiA5Ni40MDZWMTZIMjg4QzI5Mi40MjIgMTYgMjk2IDEyLjQwNiAyOTYgOFMyOTIuNDIyIDAgMjg4IDBIMTYwQzE1NS41NzggMCAxNTIgMy41OTQgMTUyIDhTMTU1LjU3OCAxNiAxNjAgMTZIMjE2Vjk2LjQwNkMxMDQuODYzIDEwMC42NDEgMTYgMTkxLjgyOCAxNiAzMDRDMTYgNDE4Ljg3NSAxMDkuMTI1IDUxMiAyMjQgNTEyUzQzMiA0MTguODc1IDQzMiAzMDRDNDMyIDI1My41MTYgNDEzLjk5NCAyMDcuMjU0IDM4NC4wODIgMTcxLjIzWk0yMjQgNDk2QzExOC4xMzEgNDk2IDMyIDQwOS44NjcgMzIgMzA0UzExOC4xMzEgMTEyIDIyNCAxMTJTNDE2IDE5OC4xMzMgNDE2IDMwNFMzMjkuODY5IDQ5NiAyMjQgNDk2Wk0yMjQgMTg0QzIxOS41NzggMTg0IDIxNiAxODcuNTk0IDIxNiAxOTJWMzIwQzIxNiAzMjQuNDA2IDIxOS41NzggMzI4IDIyNCAzMjhTMjMyIDMyNC40MDYgMjMyIDMyMFYxOTJDMjMyIDE4Ny41OTQgMjI4LjQyMiAxODQgMjI0IDE4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Stopwatch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384.082 171.23L421.656 133.656C424.781 130.531 424.781 125.469 421.656 122.344S413.469 119.219 410.344 122.344L373.311 159.375C337.242 122.148 287.412 98.516 232 96.406V16H288C292.422 16 296 12.406 296 8S292.422 0 288 0H160C155.578 0 152 3.594 152 8S155.578 16 160 16H216V96.406C104.863 100.641 16 191.828 16 304C16 418.875 109.125 512 224 512S432 418.875 432 304C432 253.516 413.994 207.254 384.082 171.23ZM224 496C118.131 496 32 409.867 32 304S118.131 112 224 112S416 198.133 416 304S329.869 496 224 496ZM224 184C219.578 184 216 187.594 216 192V320C216 324.406 219.578 328 224 328S232 324.406 232 320V192C232 187.594 228.422 184 224 184Z" />
        </Icon>
    </>
}