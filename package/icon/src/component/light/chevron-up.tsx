
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=light chevron-up}
 * @preview ![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDMuNzQ5IDMzMC44NDRDNDQwLjYwOCAzMzQuMjgxIDQzNi4zMTEgMzM2IDQzMS45OTkgMzM2QzQyOC4xMDggMzM2IDQyNC4yMTggMzM0LjU5NCA0MjEuMTQgMzMxLjc1TDIyMy45OTkgMTQ5Ljc4MUwyNi44NTggMzMxLjc1QzIwLjM1OCAzMzcuNzUgMTAuMjE4IDMzNy4zNzUgNC4yNDkgMzMwLjg0NEMtMS43NTEgMzI0LjM0NCAtMS4zNDUgMzE0LjI1IDUuMTQgMzA4LjI1TDIxMy4xNCAxMTYuMjVDMjE5LjI5NiAxMTAuNTYyIDIyOC43MDIgMTEwLjU2MiAyMzQuODU4IDExNi4yNUw0NDIuODU4IDMwOC4yNUM0NDkuMzQzIDMxNC4yNSA0NDkuNzQ5IDMyNC4zNDQgNDQzLjc0OSAzMzAuODQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M443.749 330.844C440.608 334.281 436.311 336 431.999 336C428.108 336 424.218 334.594 421.14 331.75L223.999 149.781L26.858 331.75C20.358 337.75 10.218 337.375 4.249 330.844C-1.751 324.344 -1.345 314.25 5.14 308.25L213.14 116.25C219.296 110.562 228.702 110.562 234.858 116.25L442.858 308.25C449.343 314.25 449.749 324.344 443.749 330.844Z" />
        </Icon>
    </>
}