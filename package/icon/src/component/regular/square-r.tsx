
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-r` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-r?s=regular square-r}
 * @preview ![square-r](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMzM2IDIwOEMzMzYgMTYzLjg5MSAzMDAuMTI1IDEyOCAyNTYgMTI4SDE1MkMxMzguNzUgMTI4IDEyOCAxMzguNzUgMTI4IDE1MlYzNjBDMTI4IDM3My4yNSAxMzguNzUgMzg0IDE1MiAzODRTMTc2IDM3My4yNSAxNzYgMzYwVjI4OEgyMjEuOTY5TDI4NC41OTQgMzc0LjEwOUMyODkuMjgxIDM4MC41NzggMjk2LjU5NCAzODQgMzA0LjAzMSAzODRDMzA4LjkwNiAzODQgMzEzLjg0NCAzODIuNTE2IDMxOC4xMjUgMzc5LjQwNkMzMjguODQ0IDM3MS42MDkgMzMxLjIxOSAzNTYuNjA5IDMyMy40MDYgMzQ1Ljg5MUwyNzguNjQxIDI4NC4zMzhDMzExLjY4OCAyNzQuNSAzMzYgMjQ0LjE5NSAzMzYgMjA4Wk0yNTYgMjQwSDE3NlYxNzZIMjU2QzI3My42NTYgMTc2IDI4OCAxOTAuMzU5IDI4OCAyMDhTMjczLjY1NiAyNDAgMjU2IDI0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareR(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM336 208C336 163.891 300.125 128 256 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384S176 373.25 176 360V288H221.969L284.594 374.109C289.281 380.578 296.594 384 304.031 384C308.906 384 313.844 382.516 318.125 379.406C328.844 371.609 331.219 356.609 323.406 345.891L278.641 284.338C311.688 274.5 336 244.195 336 208ZM256 240H176V176H256C273.656 176 288 190.359 288 208S273.656 240 256 240Z" />
        </Icon>
    </>
}