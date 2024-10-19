
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star?s=solid star}
 * @preview ![star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTYuNzQgMTcuODA1TDM4Mi4xNzEgMTUwLjE5Nkw1MjguNTMyIDE3MS40OTFDNTU0Ljc5OCAxNzUuMjg3IDU2NS4zMTcgMjA3LjU4MSA1NDYuMjgzIDIyNi4wNzhMNDQwLjM3MSAzMjkuMDY3TDQ2NS40MTcgNDc0LjU1MUM0NjkuOTI1IDUwMC44NiA0NDIuMTg3IDUyMC40NTIgNDE4LjkyNiA1MDguMjVMMjg4IDQzOS41NTVMMTU3LjA3NCA1MDguMjVDMTMzLjgxMyA1MjAuNTQ2IDEwNi4wNzUgNTAwLjg2IDExMC41ODMgNDc0LjU1MUwxMzUuNjI5IDMyOS4wNjdMMjkuNzE3IDIyNi4wNzhDMTAuNjgzIDIwNy41ODEgMjEuMjAyIDE3NS4yODcgNDcuNDY4IDE3MS40OTFMMTkzLjgyOSAxNTAuMTk2TDI1OS4yNiAxNy44MDVDMjcxLjA2MyAtNi4wODMgMzA1LjAzMSAtNS43ODYgMzE2Ljc0IDE3LjgwNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Star(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M316.74 17.805L382.171 150.196L528.532 171.491C554.798 175.287 565.317 207.581 546.283 226.078L440.371 329.067L465.417 474.551C469.925 500.86 442.187 520.452 418.926 508.25L288 439.555L157.074 508.25C133.813 520.546 106.075 500.86 110.583 474.551L135.629 329.067L29.717 226.078C10.683 207.581 21.202 175.287 47.468 171.491L193.829 150.196L259.26 17.805C271.063 -6.083 305.031 -5.786 316.74 17.805Z" />
        </Icon>
    </>
}