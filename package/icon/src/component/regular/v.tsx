
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `v` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/v?s=regular v}
 * @preview ![v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIuMDAzIDQ4MC4wMThDMTc5LjA4MSA0ODAuMDE4IDE2Ny40NCA0NzIuMjM3IDE2Mi40NzEgNDYwLjMzMUwyLjQ3MSA3Ni4zMzFDLTQuMzI2IDYwLjAxOCAzLjM3OCA0MS4yNjggMTkuNjkgMzQuNDg3QzM2LjA2NSAyNy42NzQgNTQuNzY4IDM1LjQyNCA2MS41MzQgNTEuNzA2TDE5Mi4wMDMgMzY0LjgzTDMyMi40NzEgNTEuNzA2QzMyOS4yMzcgMzUuNDI0IDM0Ny45NCAyNy42NDMgMzY0LjMxNSAzNC40ODdDMzgwLjYyOCA0MS4yNjggMzg4LjMzMSA2MC4wMTggMzgxLjUzNCA3Ni4zM0wyMjEuNTM0IDQ2MC4zM0MyMTYuNTY1IDQ3Mi4yMzcgMjA0LjkyNCA0ODAuMDE4IDE5Mi4wMDMgNDgwLjAxOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function V(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192.003 480.018C179.081 480.018 167.44 472.237 162.471 460.331L2.471 76.331C-4.326 60.018 3.378 41.268 19.69 34.487C36.065 27.674 54.768 35.424 61.534 51.706L192.003 364.83L322.471 51.706C329.237 35.424 347.94 27.643 364.315 34.487C380.628 41.268 388.331 60.018 381.534 76.33L221.534 460.33C216.565 472.237 204.924 480.018 192.003 480.018Z" />
        </Icon>
    </>
}