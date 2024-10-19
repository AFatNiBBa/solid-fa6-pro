
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `text` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=thin text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgNDBWMTIwQzQzMiAxMjQuNDIyIDQyOC40MjIgMTI4IDQyNCAxMjhTNDE2IDEyNC40MjIgNDE2IDEyMFY0OEgyMzJWNDY0SDMxMkMzMTYuNDIyIDQ2NCAzMjAgNDY3LjU3OCAzMjAgNDcyUzMxNi40MjIgNDgwIDMxMiA0ODBIMTM2QzEzMS41NzggNDgwIDEyOCA0NzYuNDIyIDEyOCA0NzJTMTMxLjU3OCA0NjQgMTM2IDQ2NEgyMTZWNDhIMzJWMTIwQzMyIDEyNC40MjIgMjguNDIyIDEyOCAyNCAxMjhTMTYgMTI0LjQyMiAxNiAxMjBWNDBDMTYgMzUuNTc4IDE5LjU3OCAzMiAyNCAzMkg0MjRDNDI4LjQyMiAzMiA0MzIgMzUuNTc4IDQzMiA0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Text(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 40V120C432 124.422 428.422 128 424 128S416 124.422 416 120V48H232V464H312C316.422 464 320 467.578 320 472S316.422 480 312 480H136C131.578 480 128 476.422 128 472S131.578 464 136 464H216V48H32V120C32 124.422 28.422 128 24 128S16 124.422 16 120V40C16 35.578 19.578 32 24 32H424C428.422 32 432 35.578 432 40Z" />
        </Icon>
    </>
}