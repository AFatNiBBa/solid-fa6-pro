
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-phone` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=regular square-phone}
 * @preview ![square-phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDIuNTQ5IDMwMy42MjdMMjg4LjMwNSAyODAuMzc3QzI4MS45MTQgMjc3LjYxMSAyNzQuNDA2IDI3OS40NzEgMjcwLjA2MiAyODQuODYxTDI0OC4wMzkgMzExLjc2OEMyMTMuNDE0IDI5NC43NjggMTg1LjI2NiAyNjYuNjI3IDE2OC4yNzMgMjMyLjAxOEwxOTUuMTg4IDIwOS45NjlDMjAwLjU2MyAyMDUuNTc4IDIwMi4zOTggMTk4LjE0MSAxOTkuNjggMTkxLjc1TDE3Ni40MTQgMTM3LjQ2OUMxNzMuMzY3IDEzMC41MTYgMTY1LjgyOCAxMjYuNzAzIDE1OC40ODQgMTI4LjQwNkwxMDguMTA3IDE0MC4wMzFDMTAwLjk4MiAxNDEuNjU2IDk1Ljk5OCAxNDcuOTIyIDk1Ljk5OCAxNTUuMjVDOTUuOTk4IDI4MS4zOTMgMTk4LjYxNyAzODQuMDAyIDMyNC43NDIgMzg0LjAwMkMzMzIuMDc4IDM4NC4wMDIgMzM4LjM0NiAzNzkuMDE4IDMzOS45NzkgMzcxLjg5M0wzNTEuNjA0IDMyMS41MDJDMzUzLjI5MSAzMTQuMjA1IDM0OS41MDIgMzA2LjYyNyAzNDIuNTQ5IDMwMy42MjdaTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTYgMCA5NlY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NCA0NDggNDE2Vjk2QzQ0OCA2MC42NTYgNDE5LjM0NiAzMiAzODQgMzJaTTQwMCA0MTZDNDAwIDQyNC44MiAzOTIuODIyIDQzMiAzODQgNDMySDY0QzU1LjE3OCA0MzIgNDggNDI0LjgyIDQ4IDQxNlY5NkM0OCA4Ny4xOCA1NS4xNzggODAgNjQgODBIMzg0QzM5Mi44MjIgODAgNDAwIDg3LjE4IDQwMCA5NlY0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquarePhone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M342.549 303.627L288.305 280.377C281.914 277.611 274.406 279.471 270.062 284.861L248.039 311.768C213.414 294.768 185.266 266.627 168.273 232.018L195.188 209.969C200.563 205.578 202.398 198.141 199.68 191.75L176.414 137.469C173.367 130.516 165.828 126.703 158.484 128.406L108.107 140.031C100.982 141.656 95.998 147.922 95.998 155.25C95.998 281.393 198.617 384.002 324.742 384.002C332.078 384.002 338.346 379.018 339.979 371.893L351.604 321.502C353.291 314.205 349.502 306.627 342.549 303.627ZM384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM400 416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416Z" />
        </Icon>
    </>
}