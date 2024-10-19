
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `crosshairs` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs?s=solid crosshairs}
 * @preview ![crosshairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMjI0QzIzOC4zMjYgMjI0IDIyNCAyMzguMzI2IDIyNCAyNTZDMjI0IDI3My42NzIgMjM4LjMyNiAyODggMjU2IDI4OFMyODggMjczLjY3MiAyODggMjU2QzI4OCAyMzguMzI2IDI3My42NzQgMjI0IDI1NiAyMjRaTTQ4MCAyMjRINDcwLjk5MkM0NTYuOTM5IDEyOC43MjEgMzgxLjQ1MyA1NC45ODIgMjg4IDQxLjAzN1YzMkMyODggMTQuMzI2IDI3My42NzQgMCAyNTYgMFMyMjQgMTQuMzI2IDIyNCAzMlY0MS4wMzdDMTMwLjU0NyA1NC45ODIgNTUuMDYxIDEyOC43MjEgNDEuMDA4IDIyNEgzMkMxNC4zMjYgMjI0IDAgMjM4LjMyNiAwIDI1NkMwIDI3My42NzIgMTQuMzI2IDI4OCAzMiAyODhINDAuOTNDNTQuNjA5IDM4My41MTggMTI4LjQ4MiA0NTcuMzkxIDIyNCA0NzEuMDdWNDgwQzIyNCA0OTcuNjcyIDIzOC4zMjYgNTEyIDI1NiA1MTJTMjg4IDQ5Ny42NzIgMjg4IDQ4MFY0NzEuMDdDMzgzLjUxOCA0NTcuMzkxIDQ1Ny4zOTEgMzgzLjUxOCA0NzEuMDcgMjg4SDQ4MEM0OTcuNjc0IDI4OCA1MTIgMjczLjY3MiA1MTIgMjU2QzUxMiAyMzguMzI2IDQ5Ny42NzQgMjI0IDQ4MCAyMjRaTTM2NC44MDEgMzY0Ljc5OUMzNDIuNjg5IDM4Ni45MSAzMTUuODgzIDQwMC43NDQgMjg4IDQwNi43NzNWMzg0QzI4OCAzNjYuMzI2IDI3My42NzQgMzUyIDI1NiAzNTJTMjI0IDM2Ni4zMjYgMjI0IDM4NFY0MDYuNDY5QzE5Ni44MTEgNDAwLjMxOCAxNzEuMDkyIDM4Ni42MzkgMTUwLjQgMzY0Ljc5OUMxMjkuNDUzIDM0Mi42ODkgMTE1LjkyMiAzMTUuODgzIDEwOS44MjYgMjg4SDEyOEMxNDUuNjc0IDI4OCAxNjAgMjczLjY3MiAxNjAgMjU2QzE2MCAyMzguMzI2IDE0NS42NzQgMjI0IDEyOCAyMjRIMTA5LjUyM0MxMTUuMjkxIDE5Ni44MTEgMTI4LjU2MSAxNzEuMDkyIDE1MC40IDE1MC40QzE3MS42NTIgMTMwLjI2NiAxOTcuMjg5IDExNy4yMTcgMjI0IDExMC43ODdWMTI4QzIyNCAxNDUuNjcyIDIzOC4zMjYgMTYwIDI1NiAxNjBTMjg4IDE0NS42NzIgMjg4IDEyOFYxMDguNTg4QzMxNi40IDExMy45MzkgMzQzLjI4MyAxMjcuNjg4IDM2NC44MDEgMTUwLjRDMzg1LjIyMSAxNzAuODIgMzk4LjgyNCAxOTYuMjA3IDQwNS4yMzQgMjI0SDM4NEMzNjYuMzI2IDIyNCAzNTIgMjM4LjMyNiAzNTIgMjU2QzM1MiAyNzMuNjcyIDM2Ni4zMjYgMjg4IDM4NCAyODhINDA2LjYwNEM0MDAuNzM0IDMxNi4yOTMgMzg2LjM2MSAzNDMuMjM4IDM2NC44MDEgMzY0Ljc5OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Crosshairs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 224C238.326 224 224 238.326 224 256C224 273.672 238.326 288 256 288S288 273.672 288 256C288 238.326 273.674 224 256 224ZM480 224H470.992C456.939 128.721 381.453 54.982 288 41.037V32C288 14.326 273.674 0 256 0S224 14.326 224 32V41.037C130.547 54.982 55.061 128.721 41.008 224H32C14.326 224 0 238.326 0 256C0 273.672 14.326 288 32 288H40.93C54.609 383.518 128.482 457.391 224 471.07V480C224 497.672 238.326 512 256 512S288 497.672 288 480V471.07C383.518 457.391 457.391 383.518 471.07 288H480C497.674 288 512 273.672 512 256C512 238.326 497.674 224 480 224ZM364.801 364.799C342.689 386.91 315.883 400.744 288 406.773V384C288 366.326 273.674 352 256 352S224 366.326 224 384V406.469C196.811 400.318 171.092 386.639 150.4 364.799C129.453 342.689 115.922 315.883 109.826 288H128C145.674 288 160 273.672 160 256C160 238.326 145.674 224 128 224H109.523C115.291 196.811 128.561 171.092 150.4 150.4C171.652 130.266 197.289 117.217 224 110.787V128C224 145.672 238.326 160 256 160S288 145.672 288 128V108.588C316.4 113.939 343.283 127.688 364.801 150.4C385.221 170.82 398.824 196.207 405.234 224H384C366.326 224 352 238.326 352 256C352 273.672 366.326 288 384 288H406.604C400.734 316.293 386.361 343.238 364.801 364.799Z" />
        </Icon>
    </>
}