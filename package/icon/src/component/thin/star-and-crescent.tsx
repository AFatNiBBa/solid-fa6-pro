
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-and-crescent` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-and-crescent?s=thin star-and-crescent}
 * @preview ![star-and-crescent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDMuNTAyIDIxMy44NzVMNDI3LjEyNyAyMDIuNzVMMzkyLjg3NyAxMzMuNUMzOTEuMTI3IDEyOS44NzUgMzg3LjUwMiAxMjggMzg0LjAwMiAxMjhTMzc2Ljg3NyAxMjkuODc1IDM3NS4wMDIgMTMzLjVMMzQwLjg3NyAyMDIuNzVMMjY0LjUwMiAyMTMuODc1QzI1Ni4zNzcgMjE1IDI1My4xMjcgMjI1LjEyNSAyNTkuMDAyIDIzMC44NzVMMzE0LjI1MiAyODQuNzVMMzAxLjI1MiAzNjAuNzVDMzAwLjEyNyAzNjcuMjUgMzA1LjI1MiAzNzIuNSAzMTEuMDAyIDM3Mi41QzMxMi41MDIgMzcyLjUgMzE0LjEyNyAzNzIuMTI1IDMxNS42MjcgMzcxLjI1TDM4NC4wMDIgMzM1LjM3NUw0NTIuMjUyIDM3MS4yNUM0NTMuODc3IDM3Mi4xMjUgNDU1LjM3NyAzNzIuNSA0NTcuMDAyIDM3Mi41QzQ2Mi43NTIgMzcyLjUgNDY3Ljg3NyAzNjcuMjUgNDY2Ljc1MiAzNjAuNzVMNDUzLjc1MiAyODQuNzVMNTA5LjAwNCAyMzAuODc1QzUxNC44NzkgMjI1LjEyNSA1MTEuNjI5IDIxNSA1MDMuNTAyIDIxMy44NzVaTTQzNi41NjQgMjc5LjE2Mkw0NDguOTI2IDM1MS40MjZMMzg0LjAxIDMxNy4zMDNMMzE5LjA4NiAzNTEuMzgxTDMzMS40NDEgMjc5LjE2MkwyNzguOTE0IDIyNy45NDNMMzUxLjUxIDIxNy4zNzFMMzgzLjk0OSAxNTEuNTM3TDQxNi41MSAyMTcuMzcxTDQ4OS4wOSAyMjcuOTQzTDQzNi41NjQgMjc5LjE2MlpNMzQwLjUwMiA0NjYuMzc1QzMzOS4wMDIgNDY2LjM3NSAzMzMuNjI3IDQ2Ni44NzUgMzMxLjI1MiA0NjYuODc1QzIxNS4wMDIgNDY2Ljg3NSAxMjAuNTAyIDM3Mi4yNSAxMjAuNTAyIDI1NlMyMTUuMDAyIDQ1LjEyNSAzMzEuMjUyIDQ1LjEyNUMzMzMuNjI3IDQ1LjEyNSAzMzkuMDAyIDQ1LjYyNSAzNDAuNTAyIDQ1LjYyNUMzNDcuNjI3IDQ1LjYyNSAzNTMuNzUyIDQwLjYyNSAzNTUuMjUyIDMzLjYyNUMzNTYuNjI3IDI2LjM3NSAzNTIuNjI3IDE5LjEyNSAzNDUuNzUyIDE2LjVDMzE2LjYyNyA1LjUgMjg2LjM3NyAwIDI1Ni4wMDIgMEMxMTQuODc3IDAgMCAxMTQuODc1IDAgMjU2UzExNC44NzcgNTEyIDI1Ni4wMDIgNTEyQzI4Ni4yNTIgNTEyIDMxNi4yNTIgNTA2LjUgMzQ1LjM3NyA0OTUuNjI1QzM1MS4yNTIgNDkzLjYyNSAzNTUuNjI3IDQ4OCAzNTUuNjI3IDQ4MS4zNzVDMzU1LjYyNyA0NzMuMzc1IDM0OS4yNTIgNDY2LjM3NSAzNDAuNTAyIDQ2Ni4zNzVaTTI1Ni4wMDIgNDk2QzEyMy42NjQgNDk2IDE2IDM4OC4zMzYgMTYgMjU2UzEyMy42NjQgMTYgMjU2LjAwMiAxNkMyODIuNDQ1IDE2IDMwOC42MDQgMjAuNDM5IDMzMy44NTkgMjkuMjA3QzMzMi44NTUgMjkuMTU2IDMzMS45NDcgMjkuMTI1IDMzMS4yNTIgMjkuMTI1QzIwNi4yMjEgMjkuMTI1IDEwNC41MDIgMTMwLjkgMTA0LjUwMiAyNTZTMjA2LjIyMSA0ODIuODc1IDMzMS4yNTIgNDgyLjg3NUMzMzEuOTI0IDQ4Mi44NzUgMzMyLjc5NSA0ODIuODQ2IDMzMy43NTggNDgyLjc5OUMzMDguMzQgNDkxLjU2MSAyODIuMjE1IDQ5NiAyNTYuMDAyIDQ5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function StarAndCrescent(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M503.502 213.875L427.127 202.75L392.877 133.5C391.127 129.875 387.502 128 384.002 128S376.877 129.875 375.002 133.5L340.877 202.75L264.502 213.875C256.377 215 253.127 225.125 259.002 230.875L314.252 284.75L301.252 360.75C300.127 367.25 305.252 372.5 311.002 372.5C312.502 372.5 314.127 372.125 315.627 371.25L384.002 335.375L452.252 371.25C453.877 372.125 455.377 372.5 457.002 372.5C462.752 372.5 467.877 367.25 466.752 360.75L453.752 284.75L509.004 230.875C514.879 225.125 511.629 215 503.502 213.875ZM436.564 279.162L448.926 351.426L384.01 317.303L319.086 351.381L331.441 279.162L278.914 227.943L351.51 217.371L383.949 151.537L416.51 217.371L489.09 227.943L436.564 279.162ZM340.502 466.375C339.002 466.375 333.627 466.875 331.252 466.875C215.002 466.875 120.502 372.25 120.502 256S215.002 45.125 331.252 45.125C333.627 45.125 339.002 45.625 340.502 45.625C347.627 45.625 353.752 40.625 355.252 33.625C356.627 26.375 352.627 19.125 345.752 16.5C316.627 5.5 286.377 0 256.002 0C114.877 0 0 114.875 0 256S114.877 512 256.002 512C286.252 512 316.252 506.5 345.377 495.625C351.252 493.625 355.627 488 355.627 481.375C355.627 473.375 349.252 466.375 340.502 466.375ZM256.002 496C123.664 496 16 388.336 16 256S123.664 16 256.002 16C282.445 16 308.604 20.439 333.859 29.207C332.855 29.156 331.947 29.125 331.252 29.125C206.221 29.125 104.502 130.9 104.502 256S206.221 482.875 331.252 482.875C331.924 482.875 332.795 482.846 333.758 482.799C308.34 491.561 282.215 496 256.002 496Z" />
        </Icon>
    </>
}