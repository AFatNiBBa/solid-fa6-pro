
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `water-arrow-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/water-arrow-up?s=duotone water-arrow-up}
 * @preview ![water-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0OS43OTUgNDQ1LjY4OEM1MTguNTYxIDQzOS45NjkgNTAyLjk1MSA0MjUuNjI1IDUwMi42NyA0MjUuMzc1QzQ5MC40NTEgNDEzLjE4OCA0NzAuMzU3IDQxMy4yNSA0NTcuNzY0IDQyNUM0NTYuNzY0IDQyNS45MzggNDMyLjYyMyA0NDggMzg0LjAyOSA0NDhTMzExLjI5NSA0MjUuOTM4IDMxMC42NTQgNDI1LjM3NUMyOTguNDM2IDQxMy4xMjUgMjc4LjM1NyA0MTMuMjUgMjY1Ljc2NCA0MjVDMjY0Ljc2NCA0MjUuOTM4IDI0MC42MjMgNDQ4IDE5Mi4wMjkgNDQ4UzExOS4yOTUgNDI1LjkzOCAxMTguNjU0IDQyNS4zNzVDMTA2LjQzNiA0MTMuMTI1IDg2LjM3MyA0MTMuMjE5IDczLjc2NCA0MjUuMDMxQzczLjEwNyA0MjUuNjI1IDU3LjQ5OCA0MzkuOTY5IDI2LjI2NCA0NDUuNjg4QzguODg5IDQ0OC44NzUgLTIuNjI3IDQ2NS41MzEgMC41NDUgNDgyLjkwNkMzLjczMiA1MDAuMjgxIDIwLjMyNiA1MTIgMzcuNzk1IDUwOC42MjVDNjMuMTIzIDUwNCA4Mi41MTQgNDk1LjMxMiA5NS45ODIgNDg3LjM3NUMxMTUuNDgyIDQ5OC45MDYgMTQ3LjQ1MSA1MTIgMTkyLjAyOSA1MTJDMjM2LjU3NiA1MTIgMjY4LjUxNCA0OTguOTM4IDI4OC4wMjkgNDg3LjQwNkMzMDcuNTQ1IDQ5OC45MzggMzM5LjQ4MiA1MTIgMzg0LjAyOSA1MTJDNDI4LjYwNyA1MTIgNDYwLjU3NiA0OTguOTA2IDQ4MC4wNzYgNDg3LjM3NUM0OTMuNTQ1IDQ5NS4zMTMgNTEyLjkzNiA1MDQgNTM4LjI2NCA1MDguNjI1QzU1NS44MjYgNTEyIDU3Mi4zMjYgNTAwLjI4MSA1NzUuNTE0IDQ4Mi45MDZDNTc4LjY4NiA0NjUuNTMxIDU2Ny4xNyA0NDguODc1IDU0OS43OTUgNDQ1LjY4OFpNMzcuNzc1IDM4MC40NDVDNjMuMTA0IDM3NS44MiA4Mi40OTQgMzY3LjEzMyA5NS45NjMgMzU5LjE5NUMxMTUuNDYzIDM3MC43MjcgMTQ3LjQzMiAzODMuODIgMTkyLjAxIDM4My44MkMyMzYuNTU3IDM4My44MiAyNjguNDk0IDM3MC43NTggMjg4LjAxIDM1OS4yMjdDMzA3LjUyNSAzNzAuNzU4IDMzOS40NjMgMzgzLjgyIDM4NC4wMSAzODMuODJDNDI4LjU4OCAzODMuODIgNDYwLjU1NyAzNzAuNzI3IDQ4MC4wNTcgMzU5LjE5NUM0OTMuNTI1IDM2Ny4xMzMgNTEyLjkxNiAzNzUuODIgNTM4LjI0NCAzODAuNDQ1QzU1NS44MDcgMzgzLjgyIDU3Mi4zMDcgMzcyLjEwMiA1NzUuNDk0IDM1NC43MjdDNTc4LjY2NiAzMzcuMzUyIDU2Ny4xNSAzMjAuNjk1IDU0OS43NzUgMzE3LjUwOEM1MTguNTQxIDMxMS43ODkgNTAyLjkzMiAyOTcuNDQ1IDUwMi42NSAyOTcuMTk1QzQ5MC40MzIgMjg1LjAwOCA0NzAuMzM4IDI4NS4wNyA0NTcuNzQ0IDI5Ni44MkM0NTYuNzQ0IDI5Ny43NTggNDMyLjYwNCAzMTkuODIgMzg0LjAxIDMxOS44MlMzMTEuMjc1IDI5Ny43NTggMzEwLjYzNSAyOTcuMTk1QzI5OC40MTYgMjg0Ljk0NSAyNzguMzM4IDI4NS4wNyAyNjUuNzQ0IDI5Ni44MkMyNjQuNzQ0IDI5Ny43NTggMjQwLjYwNCAzMTkuODIgMTkyLjAxIDMxOS44MlMxMTkuMjc1IDI5Ny43NTggMTE4LjYzNSAyOTcuMTk1QzEwNi40MTYgMjg0Ljk0NSA4Ni4zNTQgMjg1LjAzOSA3My43NDQgMjk2Ljg1MkM3My4wODggMjk3LjQ0NSA1Ny40NzkgMzExLjc4OSAyNi4yNDQgMzE3LjUwOEM4Ljg2OSAzMjAuNjk1IC0yLjY0NiAzMzcuMzUyIDAuNTI1IDM1NC43MjdDMy43MTMgMzcyLjEwMiAyMC4zMDcgMzgzLjgyIDM3Ljc3NSAzODAuNDQ1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMDcuOTg4IDdDMzA2LjUyOSA1LjgzOCAzMDQuODIyIDUuMjU0IDMwMy4yMjggNC4zNzlDMzAxLjk2MiAzLjY3OCAzMDAuODQzIDIuODQ0IDI5OS40OCAyLjMxNkMyOTUuNzc1IDAuODg3IDI5MS45MjEgMCAyODguMDAzIDBTMjgwLjIzMiAwLjg4NyAyNzYuNTI3IDIuMzE2QzI3NS4xNjQgMi44NDQgMjc0LjA0NCAzLjY3OCAyNzIuNzc5IDQuMzc5QzI3MS4xODUgNS4yNTQgMjY5LjQ3OCA1LjgzOCAyNjguMDE5IDdMMTg4LjAxOSA3MUMxNzQuMjA2IDgyLjA2MiAxNzEuOTcyIDEwMi4xODggMTgzLjAxOSAxMTZDMTk0LjAzNSAxMjkuODEyIDIxNC4yMDYgMTMyLjAzMSAyMjcuOTg4IDEyMUwyNTYuMDAzIDk4LjU3OFYxOTJDMjU2LjAwMyAyMDkuNjg4IDI3MC4zMzEgMjI0IDI4OC4wMDMgMjI0UzMyMC4wMDMgMjA5LjY4OCAzMjAuMDAzIDE5MlY5OC41NzhMMzQ4LjAxOSAxMjFDMzYxLjc4NSAxMzIuMDMxIDM4MS45NDEgMTI5Ljc1IDM5Mi45ODggMTE2QzQwNC4wMzUgMTAyLjE4OCA0MDEuOCA4Mi4wNjIgMzg3Ljk4OCA3MUwzMDcuOTg4IDdaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WaterArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M549.795 445.688C518.561 439.969 502.951 425.625 502.67 425.375C490.451 413.188 470.357 413.25 457.764 425C456.764 425.938 432.623 448 384.029 448S311.295 425.938 310.654 425.375C298.436 413.125 278.357 413.25 265.764 425C264.764 425.938 240.623 448 192.029 448S119.295 425.938 118.654 425.375C106.436 413.125 86.373 413.219 73.764 425.031C73.107 425.625 57.498 439.969 26.264 445.688C8.889 448.875 -2.627 465.531 0.545 482.906C3.732 500.281 20.326 512 37.795 508.625C63.123 504 82.514 495.312 95.982 487.375C115.482 498.906 147.451 512 192.029 512C236.576 512 268.514 498.938 288.029 487.406C307.545 498.938 339.482 512 384.029 512C428.607 512 460.576 498.906 480.076 487.375C493.545 495.313 512.936 504 538.264 508.625C555.826 512 572.326 500.281 575.514 482.906C578.686 465.531 567.17 448.875 549.795 445.688ZM37.775 380.445C63.104 375.82 82.494 367.133 95.963 359.195C115.463 370.727 147.432 383.82 192.01 383.82C236.557 383.82 268.494 370.758 288.01 359.227C307.525 370.758 339.463 383.82 384.01 383.82C428.588 383.82 460.557 370.727 480.057 359.195C493.525 367.133 512.916 375.82 538.244 380.445C555.807 383.82 572.307 372.102 575.494 354.727C578.666 337.352 567.15 320.695 549.775 317.508C518.541 311.789 502.932 297.445 502.65 297.195C490.432 285.008 470.338 285.07 457.744 296.82C456.744 297.758 432.604 319.82 384.01 319.82S311.275 297.758 310.635 297.195C298.416 284.945 278.338 285.07 265.744 296.82C264.744 297.758 240.604 319.82 192.01 319.82S119.275 297.758 118.635 297.195C106.416 284.945 86.354 285.039 73.744 296.852C73.088 297.445 57.479 311.789 26.244 317.508C8.869 320.695 -2.646 337.352 0.525 354.727C3.713 372.102 20.307 383.82 37.775 380.445Z" />
            <path d="M307.988 7C306.529 5.838 304.822 5.254 303.228 4.379C301.962 3.678 300.843 2.844 299.48 2.316C295.775 0.887 291.921 0 288.003 0S280.232 0.887 276.527 2.316C275.164 2.844 274.044 3.678 272.779 4.379C271.185 5.254 269.478 5.838 268.019 7L188.019 71C174.206 82.062 171.972 102.188 183.019 116C194.035 129.812 214.206 132.031 227.988 121L256.003 98.578V192C256.003 209.688 270.331 224 288.003 224S320.003 209.688 320.003 192V98.578L348.019 121C361.785 132.031 381.941 129.75 392.988 116C404.035 102.188 401.8 82.062 387.988 71L307.988 7Z" />
        </Icon>
    </>
}