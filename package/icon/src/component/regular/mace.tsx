
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mace` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=regular mace}
 * @preview ![mace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDAuMTIzIDIwOS43ODVMNDE5LjM2OSAxODQuMTIxQzQwNS43NzUgMTM5LjAxNiAzNzAuMjQ0IDEwMy44OTggMzI1LjAyMSA5MS4xOTlMMjk3LjY5OSAxMC43MDNDMjk1LjUxNCA0LjE4IDI5MS44MyAxLjA1MSAyODggMEMyODQuMTcgMS4wNTEgMjgwLjQ4NiA0LjE4IDI3OC4zMDEgMTAuNzAzTDI1MC45NzkgOTEuMTk5QzIwNS43NTYgMTAzLjg5OCAxNzAuMjI1IDEzOS4wMTYgMTU2LjYzMSAxODQuMTIxTDc1Ljg3NyAyMDkuNzg1QzYwLjEzMSAyMTQuNzgxIDU5Ljk5NiAyMjguMjg5IDc1Ljc0MiAyMzMuNTU1TDE1NS44MjQgMjYwLjk3N0MxNjAuMDMzIDI3Ni4wNzggMTY2LjkxIDI4OS45NTcgMTc1LjYxMSAzMDIuNDUzTDcuMDMxIDQ3MS4wMzFDLTIuMzQ0IDQ4MC40MDYgLTIuMzQ0IDQ5NS41OTQgNy4wMzEgNTA0Ljk2OUMxMS43MTkgNTA5LjY1NiAxNy44NDQgNTEyIDI0IDUxMlMzNi4yODEgNTA5LjY1NiA0MC45NjkgNTA0Ljk2OUwyMDkuNTE4IDMzNi40MjJDMjIxLjI5OSAzNDQuNjggMjM0LjI4NyAzNTEuMzU5IDI0OC40MjIgMzU1LjY0OEwyNzMuOTk0IDQzNi42ODhDMjc2LjkwMiA0NDUuOTIyIDI4Mi42MzEgNDQ5LjE0MSAyODggNDQ3LjY0OEMyOTMuMzY5IDQ0OS4xNDEgMjk5LjA5OCA0NDUuOTIyIDMwMi4wMDYgNDM2LjY4OEwzMjcuNTc4IDM1NS42NDhDMzcyLjUzMSAzNDIuMDA4IDQwNy41MjUgMzA2LjM1MiA0MjAuMTc2IDI2MC45NzdMNTAwLjI1OCAyMzMuNTU1QzUxNi4wMDQgMjI4LjI4OSA1MTUuODY5IDIxNC43ODEgNTAwLjEyMyAyMDkuNzg1Wk0yODggMzEyQzIzOS41MzEgMzEyIDIwMCAyNzIuNDY5IDIwMCAyMjRDMjAwIDE3NS41MjcgMjM5LjUzMSAxMzYgMjg4IDEzNlMzNzYgMTc1LjUyNyAzNzYgMjI0QzM3NiAyNzIuNDY5IDMzNi40NjkgMzEyIDI4OCAzMTJaTTI4OCAxOTJDMjcwLjMyNiAxOTIgMjU2IDIwNi4zMjggMjU2IDIyNFMyNzAuMzI2IDI1NiAyODggMjU2UzMyMCAyNDEuNjcyIDMyMCAyMjRTMzA1LjY3NCAxOTIgMjg4IDE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mace(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M500.123 209.785L419.369 184.121C405.775 139.016 370.244 103.898 325.021 91.199L297.699 10.703C295.514 4.18 291.83 1.051 288 0C284.17 1.051 280.486 4.18 278.301 10.703L250.979 91.199C205.756 103.898 170.225 139.016 156.631 184.121L75.877 209.785C60.131 214.781 59.996 228.289 75.742 233.555L155.824 260.977C160.033 276.078 166.91 289.957 175.611 302.453L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.844 512 24 512S36.281 509.656 40.969 504.969L209.518 336.422C221.299 344.68 234.287 351.359 248.422 355.648L273.994 436.688C276.902 445.922 282.631 449.141 288 447.648C293.369 449.141 299.098 445.922 302.006 436.688L327.578 355.648C372.531 342.008 407.525 306.352 420.176 260.977L500.258 233.555C516.004 228.289 515.869 214.781 500.123 209.785ZM288 312C239.531 312 200 272.469 200 224C200 175.527 239.531 136 288 136S376 175.527 376 224C376 272.469 336.469 312 288 312ZM288 192C270.326 192 256 206.328 256 224S270.326 256 288 256S320 241.672 320 224S305.674 192 288 192Z" />
        </Icon>
    </>
}