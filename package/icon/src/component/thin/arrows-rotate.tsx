
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrows-rotate` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-rotate?s=thin arrows-rotate}
 * @preview ![arrows-rotate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjMuNTMxIDI3Mi4wNjJDNDYzLjIxOSAyNzIuMDMxIDQ2Mi45MDYgMjcyIDQ2Mi42MjUgMjcyQzQ1OC41OTQgMjcyIDQ1NS4xNTYgMjc1IDQ1NC42ODcgMjc5LjA5NEM0NDMuMDk0IDM3OS45MzggMzU3LjY1NiA0NTYgMjU2IDQ1NkMxNzAuMTk3IDQ1NiA5NC4zNjUgNDAwLjQ0MSA2Ny4xMDkgMzIwSDE4NEMxODguNDA2IDMyMCAxOTIgMzE2LjQwNiAxOTIgMzEyUzE4OC40MDYgMzA0IDE4NCAzMDRINDhDNDMuNTk0IDMwNCA0MCAzMDcuNTk0IDQwIDMxMlY0NDBDNDAgNDQ0LjQwNiA0My41OTQgNDQ4IDQ4IDQ0OFM1NiA0NDQuNDA2IDU2IDQ0MFYzMzUuOTY5Qzg4LjQyOCA0MTYuOTE0IDE2Ny4yNDggNDcyIDI1NiA0NzJDMzY1LjgxMiA0NzIgNDU4LjA2MiAzODkuODQ0IDQ3MC41NjIgMjgwLjkwNkM0NzEuMDYyIDI3Ni41MzEgNDY3LjkzOCAyNzIuNTYyIDQ2My41MzEgMjcyLjA2MlpNNDY0IDY0QzQ1OS41OTQgNjQgNDU2IDY3LjU5NCA0NTYgNzJWMTc2LjAzMUM0MjMuNTcyIDk1LjA4NiAzNDQuNzUyIDQwIDI1NiA0MEMxNDYuMTg4IDQwIDUzLjkzOCAxMjIuMTU2IDQxLjQzOCAyMzEuMDk0QzQwLjkzOCAyMzUuNDY5IDQ0LjA2MiAyMzkuNDM4IDQ4LjQ2OSAyMzkuOTM4QzQ4Ljc4MSAyMzkuOTY5IDQ5LjA5NCAyNDAgNDkuMzc1IDI0MEM1My40MDYgMjQwIDU2Ljg0NCAyMzcgNTcuMzEzIDIzMi45MDZDNjguOTA2IDEzMi4wNjIgMTU0LjM0NCA1NiAyNTYgNTZDMzQxLjgwMyA1NiA0MTcuNjM1IDExMS41NTkgNDQ0Ljg5MSAxOTJIMzI4QzMyMy41OTQgMTkyIDMyMCAxOTUuNTk0IDMyMCAyMDBTMzIzLjU5NCAyMDggMzI4IDIwOEg0NjRDNDY4LjQwNiAyMDggNDcyIDIwNC40MDYgNDcyIDIwMFY3MkM0NzIgNjcuNTk0IDQ2OC40MDYgNjQgNDY0IDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowsRotate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M463.531 272.062C463.219 272.031 462.906 272 462.625 272C458.594 272 455.156 275 454.687 279.094C443.094 379.938 357.656 456 256 456C170.197 456 94.365 400.441 67.109 320H184C188.406 320 192 316.406 192 312S188.406 304 184 304H48C43.594 304 40 307.594 40 312V440C40 444.406 43.594 448 48 448S56 444.406 56 440V335.969C88.428 416.914 167.248 472 256 472C365.812 472 458.062 389.844 470.562 280.906C471.062 276.531 467.938 272.562 463.531 272.062ZM464 64C459.594 64 456 67.594 456 72V176.031C423.572 95.086 344.752 40 256 40C146.188 40 53.938 122.156 41.438 231.094C40.938 235.469 44.062 239.438 48.469 239.938C48.781 239.969 49.094 240 49.375 240C53.406 240 56.844 237 57.313 232.906C68.906 132.062 154.344 56 256 56C341.803 56 417.635 111.559 444.891 192H328C323.594 192 320 195.594 320 200S323.594 208 328 208H464C468.406 208 472 204.406 472 200V72C472 67.594 468.406 64 464 64Z" />
        </Icon>
    </>
}