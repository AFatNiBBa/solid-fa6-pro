
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `temperature-full` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-full?s=light temperature-full}
 * @preview ![temperature-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgOTZDMjU2IDQzIDIxMy4wMDEgMCAxNjAuMDAxIDBTNjQuMDAyIDQzIDY0LjAwMiA5NlYyOTkuMzc1QzQ0LjI1MiAzMjEuNzUgMzIuMTI3IDM1MS4xMjUgMzIuMDAyIDM4My4zNzVDMzEuNjI3IDQ1My42MjUgODguNzUxIDUxMS41IDE1OS4xMjYgNTEyQzE1OS4zNzYgNTEyIDE1OS43NTEgNTEyIDE2MC4wMDEgNTEyQzIzMC43NSA1MTIgMjg4IDQ1NC43NSAyODggMzg0QzI4OCAzNTEuNSAyNzUuODc1IDMyMS44NzUgMjU2IDI5OS4zNzVWOTZaTTE2MC4wMDEgNDgwSDE1OS4zNzZDMTA2LjYyNiA0NzkuNjI1IDYzLjc1MiA0MzYuMjUgNjQuMDAyIDM4My41QzY0LjI1MiAzNDQgODYuNTAxIDMyMi4xMjUgOTYuMDAxIDMxMS41Vjk2Qzk2LjAwMSA2MC43NSAxMjQuNzUxIDMyIDE2MC4wMDEgMzJTMjI0IDYwLjc1IDIyNCA5NlYzMTEuNUMyMzMuMTI1IDMyMS44NzUgMjU2IDM0NC4xMjUgMjU2IDM4NEMyNTYgNDM2Ljg3NSAyMTIuODc2IDQ4MCAxNjAuMDAxIDQ4MFpNMjA4LjAwMSAzODRDMjA4LjAwMSA0MTAuNSAxODYuNTAxIDQzMiAxNjAuMDAxIDQzMlMxMTIuMDAxIDQxMC41IDExMi4wMDEgMzg0QzExMi4wMDEgMzYzLjEyNSAxMjUuMzc2IDM0NS4zNzUgMTQ0LjAwMSAzMzguNzVWOTZDMTQ0LjAwMSA4Ny4xMjUgMTUxLjEyNiA4MCAxNjAuMDAxIDgwUzE3Ni4wMDEgODcuMTI1IDE3Ni4wMDEgOTZWMzM4Ljc1QzE5NC42MjYgMzQ1LjM3NSAyMDguMDAxIDM2My4xMjUgMjA4LjAwMSAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TemperatureFull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M256 96C256 43 213.001 0 160.001 0S64.002 43 64.002 96V299.375C44.252 321.75 32.127 351.125 32.002 383.375C31.627 453.625 88.751 511.5 159.126 512C159.376 512 159.751 512 160.001 512C230.75 512 288 454.75 288 384C288 351.5 275.875 321.875 256 299.375V96ZM160.001 480H159.376C106.626 479.625 63.752 436.25 64.002 383.5C64.252 344 86.501 322.125 96.001 311.5V96C96.001 60.75 124.751 32 160.001 32S224 60.75 224 96V311.5C233.125 321.875 256 344.125 256 384C256 436.875 212.876 480 160.001 480ZM208.001 384C208.001 410.5 186.501 432 160.001 432S112.001 410.5 112.001 384C112.001 363.125 125.376 345.375 144.001 338.75V96C144.001 87.125 151.126 80 160.001 80S176.001 87.125 176.001 96V338.75C194.626 345.375 208.001 363.125 208.001 384Z" />
        </Icon>
    </>
}