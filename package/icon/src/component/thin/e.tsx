
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `e` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=thin e}
 * @preview ![e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDcyQzMyMCA0NzYuNDA2IDMxNi40MjIgNDgwIDMxMiA0ODBIOEMzLjU3OCA0ODAgMCA0NzYuNDA2IDAgNDcyVjQwQzAgMzUuNTk0IDMuNTc4IDMyIDggMzJIMzEyQzMxNi40MjIgMzIgMzIwIDM1LjU5NCAzMjAgNDBTMzE2LjQyMiA0OCAzMTIgNDhIMTZWMjQ4SDI0OEMyNTIuNDIyIDI0OCAyNTYgMjUxLjU5NCAyNTYgMjU2UzI1Mi40MjIgMjY0IDI0OCAyNjRIMTZWNDY0SDMxMkMzMTYuNDIyIDQ2NCAzMjAgNDY3LjU5NCAzMjAgNDcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function E(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 472C320 476.406 316.422 480 312 480H8C3.578 480 0 476.406 0 472V40C0 35.594 3.578 32 8 32H312C316.422 32 320 35.594 320 40S316.422 48 312 48H16V248H248C252.422 248 256 251.594 256 256S252.422 264 248 264H16V464H312C316.422 464 320 467.594 320 472Z" />
        </Icon>
    </>
}