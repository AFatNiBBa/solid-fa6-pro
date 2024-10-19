
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-v` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=regular square-v}
 * @preview ![square-v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMzM4LjczNCAxMzAuNTMxQzMyNi44NzUgMTI0LjY0MSAzMTIuNDY5IDEyOS40MDYgMzA2LjUzMSAxNDEuMjY2TDIyNCAzMDYuMzI4TDE0MS40NjkgMTQxLjI2NkMxMzUuNTQ3IDEyOS40MDYgMTIxLjE4OCAxMjQuNjQxIDEwOS4yNjYgMTMwLjUzMUM5Ny40MDYgMTM2LjQ2OSA5Mi42MDkgMTUwLjg3NSA5OC41MzEgMTYyLjczNEwyMDIuNTMxIDM3MC43MzRDMjA2LjU5NCAzNzguODU5IDIxNC45MDYgMzg0IDIyNCAzODRTMjQxLjQwNiAzNzguODU5IDI0NS40NjkgMzcwLjczNEwzNDkuNDY5IDE2Mi43MzRDMzU1LjM5MSAxNTAuODc1IDM1MC41OTQgMTM2LjQ2OSAzMzguNzM0IDEzMC41MzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareV(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM338.734 130.531C326.875 124.641 312.469 129.406 306.531 141.266L224 306.328L141.469 141.266C135.547 129.406 121.188 124.641 109.266 130.531C97.406 136.469 92.609 150.875 98.531 162.734L202.531 370.734C206.594 378.859 214.906 384 224 384S241.406 378.859 245.469 370.734L349.469 162.734C355.391 150.875 350.594 136.469 338.734 130.531Z" />
        </Icon>
    </>
}