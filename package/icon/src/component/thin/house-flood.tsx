
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `house-flood` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-flood?s=thin house-flood}
 * @preview ![house-flood](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzUuOTg2IDUwMy42NjRDNTc1Ljk4NiA0OTkuNTI3IDU3Mi44MTEgNDk2LjAxNSA1NjguNjE3IDQ5NS43MDNDNTEyLjcwOCA0OTEuMzQ3IDQ4OS45OTkgNDQ4LjIzNCA0NzkuOTkyIDQ0OC4yMzRINDc5Ljk2MUM0NzEuNzczIDQ0OC4yMzQgNDQyLjM2MSA0OTUuODAyIDM4NC41NTUgNDk2SDM4NC4yMTFDMzI3LjEwNyA0OTYgMjk1LjY2MiA0NDguMjM0IDI4Ny45OTMgNDQ4LjIzNEgyODcuOTYyQzI3OS43NzMgNDQ4LjIzNCAyNTAuMzYxIDQ5NS44MDIgMTkyLjU1NiA0OTZIMTkyLjIxMkMxMzUuMTA3IDQ5NiAxMDMuNjYyIDQ0OC4yMzQgOTUuOTkzIDQ0OC4yMzRIOTUuOTYyQzkzLjcxMiA0NDguMjM0IDkxLjU4NyA0NDkuMTg3IDkwLjA1NiA0NTAuODU5QzM5LjQ0MiA1MDYuNjY5IDAgNDg3LjQzNCAwIDUwMy42ODVDMCA1MDQuMDE4IC0wLjA0MyA1MTEuNzA3IDguMjg3IDUxMS43MDdDMTEuMzA4IDUxMS43MDcgNTMuNTMxIDUxMC44MDQgOTYuMDI1IDQ2Ny44MjhDMTI0LjkzMSA0OTYuNzY2IDE1OC4wMjQgNTEyIDE5Mi4yMTIgNTEySDE5Mi41ODdDMjI2LjcxMiA1MTEuODkxIDI1OS41NTUgNDk2LjY1NiAyODguMDI0IDQ2Ny44NDRDMzE2LjkzIDQ5Ni43NjYgMzUwLjAyNCA1MTIgMzg0LjIxMSA1MTJIMzg0LjU4NkM0MTguNzExIDUxMS44OTEgNDUxLjU1NSA0OTYuNjU2IDQ4MC4wMjQgNDY3Ljg0NEM1MjMuMTQyIDUxMC45ODggNTY1LjQ4NyA1MTEuNzE1IDU2OC41MzQgNTExLjcxNUM1NzMuMTQ3IDUxMS43MTUgNTc1Ljk4NiA1MDcuOTc1IDU3NS45ODYgNTAzLjY2NFpNMjQ3Ljk5NSAxOTEuOTk5QzIzNC43NjEgMTkxLjk5OSAyMjMuOTk1IDIwMi43OCAyMjMuOTk1IDIxNS45OTlWMjk1Ljk5OUMyMjMuOTk1IDMwOS4yMTggMjM0Ljc2MSAzMTkuOTk5IDI0Ny45OTUgMzE5Ljk5OUgzMjcuOTk1QzM0MS4yMjkgMzE5Ljk5OSAzNTEuOTk1IDMwOS4yMTggMzUxLjk5NSAyOTUuOTk5VjIxNS45OTlDMzUxLjk5NSAyMDIuNzggMzQxLjIyOSAxOTEuOTk5IDMyNy45OTUgMTkxLjk5OUgyNDcuOTk1Wk0zMzUuOTk1IDIxNS45OTlWMjk1Ljk5OUMzMzUuOTk1IDMwMC40MDYgMzMyLjQwMSAzMDMuOTk5IDMyNy45OTUgMzAzLjk5OUgyNDcuOTk1QzI0My41ODkgMzAzLjk5OSAyMzkuOTk1IDMwMC40MDYgMjM5Ljk5NSAyOTUuOTk5VjIxNS45OTlDMjM5Ljk5NSAyMTEuNTkzIDI0My41ODkgMjA3Ljk5OSAyNDcuOTk1IDIwNy45OTlIMzI3Ljk5NUMzMzIuNDAxIDIwNy45OTkgMzM1Ljk5NSAyMTEuNTkzIDMzNS45OTUgMjE1Ljk5OVpNNy45NjkgMjYzLjk4NkM5Ljg2NSAyNjMuOTg2IDExLjc3MyAyNjMuMzE4IDEzLjMxIDI2MS45ODRMNjMuOTk3IDIxNy44MlY0MDhDNjMuOTk3IDQxMi40MjIgNjcuNTc5IDQxNiA3MS45OTcgNDE2Qzc2LjQxNSA0MTYgNzkuOTk3IDQxMi40MjIgNzkuOTk3IDQwOFYyMDMuNTkzTDI4Ny45OTcgMTguNzAyTDQ5NS45OTYgMjAzLjU5M1Y0MDhDNDk1Ljk5NiA0MTIuNDIyIDQ5OS41NzggNDE2IDUwMy45OTYgNDE2UzUxMS45OTYgNDEyLjQyMiA1MTEuOTk2IDQwOFYyMTcuODJMNTYyLjY4NCAyNjEuOTg0QzU2NC4yMTUgMjYzLjMyNyA1NjYuMDkgMjYzLjk5OSA1NjcuOTk2IDI2My45OTlDNTcyLjQ1NCAyNjMuOTk5IDU3NS45OTQgMjYwLjM2MSA1NzUuOTk0IDI1NS45ODlDNTc1Ljk5NCAyNTMuNzg2IDU3NS4wODkgMjUxLjU5NCA1NzMuMzA5IDI1MC4wMTVMNTExLjk5OCAxOTUuNzFWNDcuOTk5QzUxMS45OTggMzkuMTYzIDUwNC44MzQgMzEuOTk5IDQ5NS45OTggMzEuOTk5SDM5OS45OThDMzkxLjE2MyAzMS45OTkgMzgzLjk5OSAzOS4xNjMgMzgzLjk5OSA0Ny45OTlWODIuMzQzTDI5My4zMDkgMi4wMTRDMjkxLjc5MyAwLjY3MiAyODkuODk1IDAuMDAyIDI4Ny45OTcgMC4wMDJTMjg0LjIwMSAwLjY3MiAyODIuNjg0IDIuMDE0TDIuNjg1IDI1MC4wMTVDMC45MDUgMjUxLjU5NCAwIDI1My43ODYgMCAyNTUuOTg5QzAgMjYwLjMxIDMuNDc5IDI2My45ODYgNy45NjkgMjYzLjk4NlpNMzk5Ljk5OCA0Ny45OTlINDk1Ljk5OFYxODEuNTM4TDM5OS45OTggOTYuNTE0VjQ3Ljk5OVogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function HouseFlood(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M575.986 503.664C575.986 499.527 572.811 496.015 568.617 495.703C512.708 491.347 489.999 448.234 479.992 448.234H479.961C471.773 448.234 442.361 495.802 384.555 496H384.211C327.107 496 295.662 448.234 287.993 448.234H287.962C279.773 448.234 250.361 495.802 192.556 496H192.212C135.107 496 103.662 448.234 95.993 448.234H95.962C93.712 448.234 91.587 449.187 90.056 450.859C39.442 506.669 0 487.434 0 503.685C0 504.018 -0.043 511.707 8.287 511.707C11.308 511.707 53.531 510.804 96.025 467.828C124.931 496.766 158.024 512 192.212 512H192.587C226.712 511.891 259.555 496.656 288.024 467.844C316.93 496.766 350.024 512 384.211 512H384.586C418.711 511.891 451.555 496.656 480.024 467.844C523.142 510.988 565.487 511.715 568.534 511.715C573.147 511.715 575.986 507.975 575.986 503.664ZM247.995 191.999C234.761 191.999 223.995 202.78 223.995 215.999V295.999C223.995 309.218 234.761 319.999 247.995 319.999H327.995C341.229 319.999 351.995 309.218 351.995 295.999V215.999C351.995 202.78 341.229 191.999 327.995 191.999H247.995ZM335.995 215.999V295.999C335.995 300.406 332.401 303.999 327.995 303.999H247.995C243.589 303.999 239.995 300.406 239.995 295.999V215.999C239.995 211.593 243.589 207.999 247.995 207.999H327.995C332.401 207.999 335.995 211.593 335.995 215.999ZM7.969 263.986C9.865 263.986 11.773 263.318 13.31 261.984L63.997 217.82V408C63.997 412.422 67.579 416 71.997 416C76.415 416 79.997 412.422 79.997 408V203.593L287.997 18.702L495.996 203.593V408C495.996 412.422 499.578 416 503.996 416S511.996 412.422 511.996 408V217.82L562.684 261.984C564.215 263.327 566.09 263.999 567.996 263.999C572.454 263.999 575.994 260.361 575.994 255.989C575.994 253.786 575.089 251.594 573.309 250.015L511.998 195.71V47.999C511.998 39.163 504.834 31.999 495.998 31.999H399.998C391.163 31.999 383.999 39.163 383.999 47.999V82.343L293.309 2.014C291.793 0.672 289.895 0.002 287.997 0.002S284.201 0.672 282.684 2.014L2.685 250.015C0.905 251.594 0 253.786 0 255.989C0 260.31 3.479 263.986 7.969 263.986ZM399.998 47.999H495.998V181.538L399.998 96.514V47.999Z " />
        </Icon>
    </>
}