
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volume-low` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume-low?s=regular volume-low}
 * @preview ![volume-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTIuNTYyIDE4MS45NDFDNDA4LjA5NCAxNzguMzEyIDQwMi43MDUgMTc2LjU0MSAzOTcuMzU5IDE3Ni41NDFDMzkwLjQxIDE3Ni41NDEgMzgzLjUyOSAxNzkuNTM1IDM3OC44MTIgMTg1LjM0OEMzNzAuNDA2IDE5NS41OTggMzcxLjkwNiAyMTAuNzIzIDM4Mi4xODggMjE5LjEyOUMzOTMuNSAyMjguMzc5IDQwMCAyNDEuODE0IDQwMCAyNTYuMDAyUzM5My41IDI4My42MjcgMzgyLjE4OCAyOTIuODc3QzM3MS45MDYgMzAxLjI4MyAzNzAuNDA2IDMxNi40MDggMzc4LjgxMiAzMjYuNjU4QzM4My41MzEgMzMyLjQ3MSAzOTAuNDM3IDMzNS40NzEgMzk3LjM3NSAzMzUuNDcxQzQwMi43MTkgMzM1LjQ3MSA0MDguMTI1IDMzMy42ODkgNDEyLjU2MiAzMzAuMDY0QzQzNS4wOTQgMzExLjYyNyA0NDggMjg0LjY1OCA0NDggMjU2LjAwMkM0NDggMjI3LjM0OCA0MzUuMDk0IDIwMC4zNzkgNDEyLjU2MiAxODEuOTQxWk0zMDEuMTA5IDM0LjgxOEMyOTYuOTA4IDMyLjkyMiAyOTIuNDQzIDMxLjk5OCAyODguMDE0IDMxLjk5OEMyODAuMzE2IDMxLjk5OCAyNzIuNzE1IDM0Ljc4MyAyNjYuNzM0IDQwLjFMMTMxLjg0IDE2MC4wMDRINDhDMjEuNDkgMTYwLjAwNCAwIDE4MS40OTYgMCAyMDguMDA0VjMwNC4wMDJDMCAzMzAuNTEgMjEuNDkgMzUyLjAwMiA0OCAzNTIuMDAySDEzMS44NEwyNjYuNzM0IDQ3MS45MDZDMjcyLjcxOSA0NzcuMjE5IDI4MC4zMTIgNDgwIDI4OCA0ODBDMjkyLjQzOCA0ODAgMjk2LjkwNiA0NzkuMDk0IDMwMS4xMDkgNDc3LjE4OEMzMTIuNjA5IDQ3Mi4wMzEgMzIwIDQ2MC41OTQgMzIwIDQ0OFY2NC4wMDZDMzIwIDUxLjQxMiAzMTIuNjA5IDM5Ljk3NSAzMDEuMTA5IDM0LjgxOFpNMjcyIDQxMi4zNjVMMTUwLjA5IDMwNC4wMDJINDhWMjA4LjAwNEgxNTAuMDlMMjcyIDk5LjY0MVY0MTIuMzY1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function VolumeLow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M412.562 181.941C408.094 178.312 402.705 176.541 397.359 176.541C390.41 176.541 383.529 179.535 378.812 185.348C370.406 195.598 371.906 210.723 382.188 219.129C393.5 228.379 400 241.814 400 256.002S393.5 283.627 382.188 292.877C371.906 301.283 370.406 316.408 378.812 326.658C383.531 332.471 390.437 335.471 397.375 335.471C402.719 335.471 408.125 333.689 412.562 330.064C435.094 311.627 448 284.658 448 256.002C448 227.348 435.094 200.379 412.562 181.941ZM301.109 34.818C296.908 32.922 292.443 31.998 288.014 31.998C280.316 31.998 272.715 34.783 266.734 40.1L131.84 160.004H48C21.49 160.004 0 181.496 0 208.004V304.002C0 330.51 21.49 352.002 48 352.002H131.84L266.734 471.906C272.719 477.219 280.312 480 288 480C292.438 480 296.906 479.094 301.109 477.188C312.609 472.031 320 460.594 320 448V64.006C320 51.412 312.609 39.975 301.109 34.818ZM272 412.365L150.09 304.002H48V208.004H150.09L272 99.641V412.365Z" />
        </Icon>
    </>
}