
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-half-stroke` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-half-stroke?s=solid star-half-stroke}
 * @preview ![star-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjguNTMgMTcxLjQ5TDM4Mi4xNzEgMTUwLjE5NUwzMTYuNzM5IDE3LjgwNUMzMTAuODY2IDUuOTcxIDI5OS4zOTMgMCAyODcuOTI3IDBDMjc2LjUzMiAwIDI2NS4xNDEgNS44OTggMjU5LjI1OSAxNy44MDVMMTkzLjgyNyAxNTAuMTk1TDQ3LjQ2OCAxNzEuNDlDMjEuMjAyIDE3NS4yODcgMTAuNjgyIDIwNy41OCAyOS43MTggMjI2LjA3OEwxMzUuNjI4IDMyOS4wNjZMMTEwLjU4MyA0NzQuNTUxQzEwNy4wMTggNDk1LjM0NCAxMjMuNTk5IDUxMiAxNDIuMTkgNTEyQzE0Ny4xMjIgNTEyIDE1Mi4xOTYgNTEwLjgyOCAxNTcuMDczIDUwOC4yNUwyODcuOTk5IDQzOS41NTVMNDE4LjkyNSA1MDguMjVDNDIzLjc5IDUxMC44MDMgNDI4Ljg1IDUxMS45NjMgNDMzLjc3IDUxMS45NjNDNDUyLjM3OCA1MTEuOTYzIDQ2OC45ODEgNDk1LjM1NyA0NjUuNDE1IDQ3NC41NTFMNDQwLjM3IDMyOS4wNjZMNTQ2LjI4MiAyMjYuMDc4QzU2NS4zMTcgMjA3LjU4IDU1NC43OTggMTc1LjI4NyA1MjguNTMgMTcxLjQ5Wk00MDYuOTA3IDI5NC42NTRMMzg4Ljc3NCAzMTIuMjg1TDM5My4wNjUgMzM3LjIxMUw0MTIuNjA4IDQ1MC43M0wzMTAuMzAyIDM5Ny4wNDlMMjg3Ljk5OSAzODUuMzQ4VjY3Ljk4OEwzMzkuMTQgMTcxLjQ2M0wzNTAuMzA5IDE5NC4wNjZMMzc1LjI1OSAxOTcuNjk1TDQ4OS41MiAyMTQuMzJMNDA2LjkwNyAyOTQuNjU0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StarHalfStroke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M528.53 171.49L382.171 150.195L316.739 17.805C310.866 5.971 299.393 0 287.927 0C276.532 0 265.141 5.898 259.259 17.805L193.827 150.195L47.468 171.49C21.202 175.287 10.682 207.58 29.718 226.078L135.628 329.066L110.583 474.551C107.018 495.344 123.599 512 142.19 512C147.122 512 152.196 510.828 157.073 508.25L287.999 439.555L418.925 508.25C423.79 510.803 428.85 511.963 433.77 511.963C452.378 511.963 468.981 495.357 465.415 474.551L440.37 329.066L546.282 226.078C565.317 207.58 554.798 175.287 528.53 171.49ZM406.907 294.654L388.774 312.285L393.065 337.211L412.608 450.73L310.302 397.049L287.999 385.348V67.988L339.14 171.463L350.309 194.066L375.259 197.695L489.52 214.32L406.907 294.654Z" />
        </Icon>
    </>
}