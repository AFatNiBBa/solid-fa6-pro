
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `down-left-and-up-right-to-center` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-left-and-up-right-to-center?s=duotone down-left-and-up-right-to-center}
 * @preview ![down-left-and-up-right-to-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIxNiAyNzJINzkuOTk4QzY3LjA2IDI3MiA1NS4zNzMgMjc5Ljc5NyA1MC40MzUgMjkxLjc1QzQ1LjQ2NiAzMDMuNzE4IDQ4LjIxNiAzMTcuNDY4IDU3LjM3MyAzMjYuNjI0TDg3LjQzNiAzNTYuNjg2TDkuMzcyIDQzNC43NTNDLTMuMTIzIDQ0Ny4yNDggLTMuMTI0IDQ2Ny41MDcgOS4zNyA0ODAuMDAzTDMxLjk5IDUwMi42MjZDNDQuNDg3IDUxNS4xMjQgNjQuNzUgNTE1LjEyNSA3Ny4yNDcgNTAyLjYyN0wxNTUuMzExIDQyNC41NjFMMTg1LjM3NCA0NTQuNjIzQzE5MS40OTkgNDYwLjc0OCAxOTkuNjg3IDQ2My45OTggMjA3Ljk5OSA0NjMuOTk4QzIxMi4xMjUgNDYzLjk5OCAyMTYuMjgxIDQ2My4yMDEgMjIwLjI1IDQ2MS41NkMyMzIuMjE4IDQ1Ni42MDcgMjQwIDQ0NC45MzUgMjQwIDQzMS45OThWMjk2QzI0MCAyODIuNzQ1IDIyOS4yNTUgMjcyIDIxNiAyNzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI3MiAyMTZWODAuMDAyQzI3MiA2Ny4wNjUgMjc5Ljc4MSA1NS4zOTMgMjkxLjc1IDUwLjQ0QzMwMy43NSA0NS41MzMgMzE3LjQ2OSA0OC4yMzcgMzI2LjYyNiA1Ny4zNzdMMzU2LjY4OCA4Ny40MzlMNDM0Ljc1MiA5LjM3M0M0NDcuMjUgLTMuMTI1IDQ2Ny41MTMgLTMuMTI0IDQ4MC4wMSA5LjM3NEw1MDIuNjI4IDMxLjk5M0M1MTUuMTI0IDQ0LjQ5IDUxNS4xMjQgNjQuNzUxIDUwMi42MjcgNzcuMjQ4TDQyNC41NjQgMTU1LjMxNEw0NTQuNjI3IDE4NS4zNzZDNDYzLjc4MyAxOTQuNTMyIDQ2Ni41MzMgMjA4LjI4MiA0NjEuNTY1IDIyMC4yNUM0NTYuNjI3IDIzMi4yMDMgNDQ0LjkzOSAyNDAgNDMyLjAwMiAyNDBIMjk2QzI4Mi43NDUgMjQwIDI3MiAyMjkuMjU1IDI3MiAyMTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DownLeftAndUpRightToCenter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M216 272H79.998C67.06 272 55.373 279.797 50.435 291.75C45.466 303.718 48.216 317.468 57.373 326.624L87.436 356.686L9.372 434.753C-3.123 447.248 -3.124 467.507 9.37 480.003L31.99 502.626C44.487 515.124 64.75 515.125 77.247 502.627L155.311 424.561L185.374 454.623C191.499 460.748 199.687 463.998 207.999 463.998C212.125 463.998 216.281 463.201 220.25 461.56C232.218 456.607 240 444.935 240 431.998V296C240 282.745 229.255 272 216 272Z" />
            <path d="M272 216V80.002C272 67.065 279.781 55.393 291.75 50.44C303.75 45.533 317.469 48.237 326.626 57.377L356.688 87.439L434.752 9.373C447.25 -3.125 467.513 -3.124 480.01 9.374L502.628 31.993C515.124 44.49 515.124 64.751 502.627 77.248L424.564 155.314L454.627 185.376C463.783 194.532 466.533 208.282 461.565 220.25C456.627 232.203 444.939 240 432.002 240H296C282.745 240 272 229.255 272 216Z" />
        </Icon>
    </>
}