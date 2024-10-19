
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pepper-hot` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pepper-hot?s=regular pepper-hot}
 * @preview ![pepper-hot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjYuMTE5IDEzMS45MjhDNDg2LjI5MSA5My45IDQ4NC40MTIgNDYuMzQ2IDQ1OS4zODkgMTAuMjU0QzQ1NC43NDYgMy41ODYgNDQ3LjM2MyAwIDQzOS44MzIgMEM0MzUuMTMxIDAgNDMwLjM3MyAxLjM5NiA0MjYuMTg2IDQuMzE2QzQxNS40MTggMTEuODk1IDQxMi43NSAyNi44NjUgNDIwLjI4OSAzNy43MjVDNDMzLjQxOCA1Ni42MzcgNDM0LjY3MiA4MC41MiA0MjYuNTMzIDEwMS4zNTJDNDAzLjIwNSA4OC4xNzIgMzc2LjgzNCA4MCAzNDguMzg5IDgwQzMxMi41NzYgODAgMjc4LjI2NCA5Mi4xNyAyNDkuMTMxIDExNS4xOEMyNDIuOTUxIDEyMC4wNjEgMjM5LjU0OSAxMjcuNjk1IDI0MC4wNDkgMTM1LjU2MkMyNDAuNTQ3IDE0My40NDcgMjQ0Ljg4NSAxNTAuNTggMjUxLjY0MyAxNTQuNjQ4TDI5Ni42MTMgMTgxLjcxMVYyNzIuMjIxQzI5Ni42MTMgMjg1LjQ4NiAzMDcuMzUgMjk2LjI0OCAzMjAuNTgyIDI5Ni4yNDhINDEyLjE5NUw0NDUuMTgyIDM0Mi4wMzVDNDQ5LjY5MSAzNDguMzA5IDQ1Ni45MzIgMzUyIDQ2NC42MDkgMzUyQzQ2NC44MTMgMzUyIDQ2NS4wMTYgMzUyIDQ2NS4yMTkgMzUxLjk4NEM0NzMuMTI5IDM1MS43OTcgNDgwLjQzMiAzNDcuNjgyIDQ4NC43MjUgMzQxLjAzM0M1MDIuNTc0IDMxMy40MDggNTEyIDI4MS4zMDkgNTEyIDI0OC4xOTNDNTEyIDIwMy4wMzUgNDk0LjM4OSAxNjIuMTcyIDQ2Ni4xMTkgMTMxLjkyOFpNNDE5LjIxOSAzNjAuNzRDNDIwLjQ1NSAzNjIuNDU5IDQyMi4wNTMgMzYzLjgwNyA0MjMuNDYxIDM2NS4zNTdDMzU2LjAyMyA0MzguMzM2IDIzMi40MDggNTEyIDczLjMxMiA1MTJDMzIuODkxIDUxMiAwIDQ3OC43NCAwIDQzNy44NjVTMzIuODkxIDM2My43MyA3My4zMTIgMzYzLjczQzE0NSAzNjMuNzMgMTc1LjY3MiAyOTYuMDU5IDIwNS4zNDQgMjMwLjYzMUMyMTMuNzk5IDIxMS45NzcgMjIyLjE2IDE5NC43NTYgMjMxLjA5NCAxNzguOTAyQzIzMi40NzkgMTc5LjkyMiAyMzMuNjUgMTgxLjE2OCAyMzUuMTM5IDE4Mi4wNjRMMjY0LjYxMyAxOTkuODAxVjIxNy43NjRDMjU5LjQzOSAyMjguMTk1IDI1NC4yNzkgMjM5LjE3MiAyNDguOTg0IDI1MC44NTVDMjE2LjM3NSAzMjIuNzYyIDE3NS43OTcgNDEyLjI3IDczLjMxMiA0MTIuMjdDNTkuMzU5IDQxMi4yNyA0OCA0MjMuNzU2IDQ4IDQzNy44NjVTNTkuMzU5IDQ2My40NjEgNzMuMzEyIDQ2My40NjFDMjE3LjY3OCA0NjMuNDYxIDMzMC44NzkgMzk0LjM4NyAzODguODc5IDMzMS40MkgzOTguMDk2TDQxOS4yMTkgMzYwLjc0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PepperHot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M466.119 131.928C486.291 93.9 484.412 46.346 459.389 10.254C454.746 3.586 447.363 0 439.832 0C435.131 0 430.373 1.396 426.186 4.316C415.418 11.895 412.75 26.865 420.289 37.725C433.418 56.637 434.672 80.52 426.533 101.352C403.205 88.172 376.834 80 348.389 80C312.576 80 278.264 92.17 249.131 115.18C242.951 120.061 239.549 127.695 240.049 135.562C240.547 143.447 244.885 150.58 251.643 154.648L296.613 181.711V272.221C296.613 285.486 307.35 296.248 320.582 296.248H412.195L445.182 342.035C449.691 348.309 456.932 352 464.609 352C464.813 352 465.016 352 465.219 351.984C473.129 351.797 480.432 347.682 484.725 341.033C502.574 313.408 512 281.309 512 248.193C512 203.035 494.389 162.172 466.119 131.928ZM419.219 360.74C420.455 362.459 422.053 363.807 423.461 365.357C356.023 438.336 232.408 512 73.312 512C32.891 512 0 478.74 0 437.865S32.891 363.73 73.312 363.73C145 363.73 175.672 296.059 205.344 230.631C213.799 211.977 222.16 194.756 231.094 178.902C232.479 179.922 233.65 181.168 235.139 182.064L264.613 199.801V217.764C259.439 228.195 254.279 239.172 248.984 250.855C216.375 322.762 175.797 412.27 73.312 412.27C59.359 412.27 48 423.756 48 437.865S59.359 463.461 73.312 463.461C217.678 463.461 330.879 394.387 388.879 331.42H398.096L419.219 360.74Z" />
        </Icon>
    </>
}