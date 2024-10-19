
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-trend-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-trend-up?s=solid arrow-trend-up}
 * @preview ![arrow-trend-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMTI4VjI4OEM1NzYgMzA1LjY3MiA1NjEuNjg4IDMyMCA1NDQgMzIwUzUxMiAzMDUuNjcyIDUxMiAyODhWMjA1LjI1TDM0Mi42MjUgMzc0LjYyNUMzMzYuMzc1IDM4MC44NzUgMzI4LjE4OCAzODQgMzIwIDM4NFMzMDMuNjI1IDM4MC44NzUgMjk3LjM3NSAzNzQuNjI1TDE5MiAyNjkuMjVMNTQuNjI1IDQwNi42MjVDNDguMzc1IDQxMi44NzUgNDAuMTg4IDQxNiAzMiA0MTZDMTMuNzIxIDQxNiAwIDQwMS4wNTMgMCAzODRDMCAzNzUuODEyIDMuMTI1IDM2Ny42MjUgOS4zNzUgMzYxLjM3NUwxNjkuMzc1IDIwMS4zNzVDMTc1LjYyNSAxOTUuMTI1IDE4My44MTIgMTkyIDE5MiAxOTJTMjA4LjM3NSAxOTUuMTI1IDIxNC42MjUgMjAxLjM3NUwzMjAgMzA2Ljc1TDQ2Ni43NSAxNjBIMzg0QzM2Ni4zMTIgMTYwIDM1MiAxNDUuNjcyIDM1MiAxMjhTMzY2LjMxMiA5NiAzODQgOTZINTQ0QzU2MC43NzUgOTYgNTc2IDEwOS4zNzIgNTc2IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowTrendUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M576 128V288C576 305.672 561.688 320 544 320S512 305.672 512 288V205.25L342.625 374.625C336.375 380.875 328.188 384 320 384S303.625 380.875 297.375 374.625L192 269.25L54.625 406.625C48.375 412.875 40.188 416 32 416C13.721 416 0 401.053 0 384C0 375.812 3.125 367.625 9.375 361.375L169.375 201.375C175.625 195.125 183.812 192 192 192S208.375 195.125 214.625 201.375L320 306.75L466.75 160H384C366.312 160 352 145.672 352 128S366.312 96 384 96H544C560.775 96 576 109.372 576 128Z" />
        </Icon>
    </>
}