
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `highlighter` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=solid highlighter}
 * @preview ![highlighter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjQuNjI1IDIzOS45OTZDMTEzLjg3NSAyNDkuNDk4IDEwOS42MjUgMjY0LjM3MyAxMTMuODc1IDI3OC4xMjNMMTI2Ljg3NSAzMjAuODczTDc2IDM3MS44NzNMMTcyLjEyNSA0NjguMTIzTDIyMyA0MTcuMjQ4TDI2NS43NTIgNDMwLjI0OEMyNzkuNTAyIDQzNC40OTggMjk0LjM3NyA0MzAuMjQ4IDMwMy44NzcgNDE5LjQ5OEwzMzkuNTAyIDM3Ny44NzNMMTY2LjEyNSAyMDQuNDk2TDEyNC42MjUgMjM5Ljk5NlpNNTI3Ljg3NyA3OS4yNDZMNDY0Ljc1MiAxNi4xMjFDNDQ0LjI1MiAtNC4zNzkgNDExLjM3NyAtNS41MDQgMzg5LjYyNyAxMy43NDZMMTkwLjUgMTgzLjYyMUwzNjAuMzc3IDM1My40OThMNTMwLjI1MiAxNTQuMzcxQzU0OS41MDIgMTMyLjYyMSA1NDguMzc3IDk5Ljc0NiA1MjcuODc3IDc5LjI0NlpNNzEuNDgyIDQwOS42MTdMNi40MDQgNDc0Ljg0OEMtNy4yNzYgNDg4LjU1NyAyLjQxMiA1MTIgMjEuNzU2IDUxMkg5NC4yOTVDOTguNTI3IDUxMiAxMDIuNTg4IDUxMC4zMTQgMTA1LjU4MiA1MDcuMzEyTDEzNy42MDkgNDc1LjIxMUw3MS40ODIgNDA5LjYxN1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Highlighter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M124.625 239.996C113.875 249.498 109.625 264.373 113.875 278.123L126.875 320.873L76 371.873L172.125 468.123L223 417.248L265.752 430.248C279.502 434.498 294.377 430.248 303.877 419.498L339.502 377.873L166.125 204.496L124.625 239.996ZM527.877 79.246L464.752 16.121C444.252 -4.379 411.377 -5.504 389.627 13.746L190.5 183.621L360.377 353.498L530.252 154.371C549.502 132.621 548.377 99.746 527.877 79.246ZM71.482 409.617L6.404 474.848C-7.276 488.557 2.412 512 21.756 512H94.295C98.527 512 102.588 510.314 105.582 507.312L137.609 475.211L71.482 409.617Z" />
        </Icon>
    </>
}