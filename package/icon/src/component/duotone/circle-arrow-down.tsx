
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-arrow-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down?s=duotone circle-arrow-down}
 * @preview ![circle-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDIgMTYgMTYgMTIzLjQyMiAxNiAyNTZTMTIzLjQyIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZTMzg4LjU4IDE2IDI1NiAxNlpNMzgyLjYyNSAzMDIuNjI1TDI3OC42NDYgNDA2LjYwMkMyNzAuNjY0IDQxNC42MDIgMjYwLjkgNDE2IDI1NiA0MTZDMjUxLjExOSA0MTYgMjQxLjM0NiA0MTQuNjA5IDIzMy4zNTQgNDA2LjYwMkwxMjkuMzc1IDMwMi42MjVDMTE2Ljg3NSAyOTAuMTI1IDExNi44NzUgMjY5Ljg3NSAxMjkuMzc1IDI1Ny4zNzVTMTYyLjEyNSAyNDQuODc1IDE3NC42MjUgMjU3LjM3NUwyMjQgMzA2Ljc1VjEyOEMyMjQgMTEwLjMxMiAyMzguMzI4IDk2IDI1NiA5NlMyODggMTEwLjMxMiAyODggMTI4VjMwNi43NUwzMzcuMzc1IDI1Ny4zNzVDMzQ5Ljg3NSAyNDQuODc1IDM3MC4xMjUgMjQ0Ljg3NSAzODIuNjI1IDI1Ny4zNzVTMzk1LjEyNSAyOTAuMTI1IDM4Mi42MjUgMzAyLjYyNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzgyLjYyNSAzMDIuNjI1TDI3OC42NDYgNDA2LjYwMkMyNzAuNjY0IDQxNC42MDIgMjYwLjkgNDE2IDI1NiA0MTZDMjUxLjExOSA0MTYgMjQxLjM0NiA0MTQuNjA5IDIzMy4zNTQgNDA2LjYwMkwxMjkuMzc1IDMwMi42MjVDMTE2Ljg3NSAyOTAuMTI1IDExNi44NzUgMjY5Ljg3NSAxMjkuMzc1IDI1Ny4zNzVTMTYyLjEyNSAyNDQuODc1IDE3NC42MjUgMjU3LjM3NUwyMjQgMzA2Ljc1VjEyOEMyMjQgMTEwLjMxMiAyMzguMzI4IDk2IDI1NiA5NlMyODggMTEwLjMxMiAyODggMTI4VjMwNi43NUwzMzcuMzc1IDI1Ny4zNzVDMzQ5Ljg3NSAyNDQuODc1IDM3MC4xMjUgMjQ0Ljg3NSAzODIuNjI1IDI1Ny4zNzVTMzk1LjEyNSAyOTAuMTI1IDM4Mi42MjUgMzAyLjYyNVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CircleArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.42 16 16 123.422 16 256S123.42 496 256 496S496 388.578 496 256S388.58 16 256 16ZM382.625 302.625L278.646 406.602C270.664 414.602 260.9 416 256 416C251.119 416 241.346 414.609 233.354 406.602L129.375 302.625C116.875 290.125 116.875 269.875 129.375 257.375S162.125 244.875 174.625 257.375L224 306.75V128C224 110.312 238.328 96 256 96S288 110.312 288 128V306.75L337.375 257.375C349.875 244.875 370.125 244.875 382.625 257.375S395.125 290.125 382.625 302.625Z" />
            <path d="M382.625 302.625L278.646 406.602C270.664 414.602 260.9 416 256 416C251.119 416 241.346 414.609 233.354 406.602L129.375 302.625C116.875 290.125 116.875 269.875 129.375 257.375S162.125 244.875 174.625 257.375L224 306.75V128C224 110.312 238.328 96 256 96S288 110.312 288 128V306.75L337.375 257.375C349.875 244.875 370.125 244.875 382.625 257.375S395.125 290.125 382.625 302.625Z" />
        </Icon>
    </>
}