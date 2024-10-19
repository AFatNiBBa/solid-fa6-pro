
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `music-note` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=light music-note}
 * @preview ![music-note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDEuOTk5IDEuNjExTDIxMy4zNzUgMzMuNDg3QzIwMC43NSAzNy43MzcgMTkyIDQ5Ljk4NyAxOTIgNjMuOTg4VjM3Ni4xMjFDMTcxLjYyNSAzNjEuMjQ2IDE0My4zNzUgMzUxLjk5NiAxMTIgMzUxLjk5NkM1MC4xMjUgMzUxLjk5NiAwIDM4Ny44NzIgMCA0MzEuOTk4UzUwLjEyNSA1MTIgMTEyIDUxMlMyMjQgNDc2LjEyNCAyMjQgNDMxLjk5OFYxOTEuOTkxTDM2Mi4xMjUgMTU2LjYxNUMzNzUuMTI1IDE1Mi4yNCAzODQgMTM5Ljk5IDM4NCAxMjYuMjRWMzEuOTg3QzM4NCAyMS43MzcgMzc5IDEyLjExMSAzNzAuNzUgNi4xMTFDMzYyLjM3NSAwLjExMSAzNTEuNzUgLTEuNjM5IDM0MS45OTkgMS42MTFaTTExMiA0NzkuOTk5QzY0Ljg3NSA0NzkuOTk5IDMyIDQ1NC43NDggMzIgNDMxLjk5OFM2NC44NzUgMzgzLjk5NyAxMTIgMzgzLjk5N1MxOTIgNDA5LjI0NyAxOTIgNDMxLjk5OFMxNTkuMTI1IDQ3OS45OTkgMTEyIDQ3OS45OTlaTTM1MiAxMjYuMjRMMjI0IDE1OC4yNFY2My45ODhIMjIzLjVWNjMuODYzTDM1MiAzMS45ODdWMTI2LjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MusicNote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M341.999 1.611L213.375 33.487C200.75 37.737 192 49.987 192 63.988V376.121C171.625 361.246 143.375 351.996 112 351.996C50.125 351.996 0 387.872 0 431.998S50.125 512 112 512S224 476.124 224 431.998V191.991L362.125 156.615C375.125 152.24 384 139.99 384 126.24V31.987C384 21.737 379 12.111 370.75 6.111C362.375 0.111 351.75 -1.639 341.999 1.611ZM112 479.999C64.875 479.999 32 454.748 32 431.998S64.875 383.997 112 383.997S192 409.247 192 431.998S159.125 479.999 112 479.999ZM352 126.24L224 158.24V63.988H223.5V63.863L352 31.987V126.24Z" />
        </Icon>
    </>
}