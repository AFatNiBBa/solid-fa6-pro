
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `florin-sign` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/florin-sign?s=thin florin-sign}
 * @preview ![florin-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDBDMzg0IDQ0LjQwNiAzODAuNDIyIDQ4IDM3NiA0OEgzMjkuMzI4QzMwMS4wMTYgNDggMjc1LjU5NCA2NC4zNDQgMjY2LjA5NCA4OC42MjVMMjAzLjcyMSAyNDhIMzQ0QzM0OC40MjIgMjQ4IDM1MiAyNTEuNTk0IDM1MiAyNTZTMzQ4LjQyMiAyNjQgMzQ0IDI2NEgxOTcuNDU5TDEzMi44MTMgNDI5LjE4OEMxMjAuOTIyIDQ1OS41OTQgODkuNTE2IDQ4MCA1NC42NzIgNDgwSDhDMy41NzggNDgwIDAgNDc2LjQwNiAwIDQ3MlMzLjU3OCA0NjQgOCA0NjRINTQuNjcyQzgyLjk4NCA0NjQgMTA4LjQwNiA0NDcuNjU2IDExNy45MDYgNDIzLjM3NUwxODAuMjc5IDI2NEg0MEMzNS41NzggMjY0IDMyIDI2MC40MDYgMzIgMjU2UzM1LjU3OCAyNDggNDAgMjQ4SDE4Ni41NDFMMjUxLjE4NyA4Mi44MTJDMjYzLjA3OCA1Mi40MDYgMjk0LjQ4NCAzMiAzMjkuMzI4IDMySDM3NkMzODAuNDIyIDMyIDM4NCAzNS41OTQgMzg0IDQwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FlorinSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 40C384 44.406 380.422 48 376 48H329.328C301.016 48 275.594 64.344 266.094 88.625L203.721 248H344C348.422 248 352 251.594 352 256S348.422 264 344 264H197.459L132.813 429.188C120.922 459.594 89.516 480 54.672 480H8C3.578 480 0 476.406 0 472S3.578 464 8 464H54.672C82.984 464 108.406 447.656 117.906 423.375L180.279 264H40C35.578 264 32 260.406 32 256S35.578 248 40 248H186.541L251.187 82.812C263.078 52.406 294.484 32 329.328 32H376C380.422 32 384 35.594 384 40Z" />
        </Icon>
    </>
}