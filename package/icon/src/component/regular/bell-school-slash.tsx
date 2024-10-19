
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bell-school-slash` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school-slash?s=regular bell-school-slash}
 * @preview ![bell-school-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzAuODEyIDQ2OS4xMDlMNTcwLjMyNiA0MjEuNzAzQzU3My43NCA0MTUuMTYgNTc1Ljk5OSA0MDcuOTE0IDU3NS45OTkgNDAwQzU3NS45OTkgMzczLjQ5MiA1NTQuNTA5IDM1MiA1MjcuOTk5IDM1MkM1MTUuOTQzIDM1MiA1MDUuMDU2IDM1Ni42MDIgNDk2LjYyNiAzNjMuOTM4TDQ0NC42NTQgMzIzLjIwM0M0NzMuNzUxIDI3OS44NDQgNDg3LjIxIDIyNS4xODggNDc2LjA4MSAxNjcuMjU4QzQ2MC4zNzIgODUuNDg0IDM5NC41NjQgMTkuNDg0IDMxMi43NjMgMy44OTFDMjM2LjE0OCAtMTAuNzExIDE2NS42MDkgMTcuNDUzIDExOS4yNjEgNjguMTY4TDM4LjgxMiA1LjExM0MyOC4zNDMgLTMuMDU5IDEzLjMxMiAtMS4yNDYgNS4xMDkgOS4xOTFDLTMuMDYzIDE5LjYyOSAtMS4yMzUgMzQuNzIzIDkuMTg3IDQyLjg5NUw2MDEuMTg3IDUwNi44OTFDNjA1LjU5MyA1MTAuMzI4IDYxMC43OTYgNTEyIDYxNS45ODQgNTEyQzYyMy4xMDkgNTEyIDYzMC4xNTYgNTA4Ljg0NCA2MzQuODkgNTAyLjgxMkM2NDMuMDYyIDQ5Mi4zNzUgNjQxLjIzNCA0NzcuMjgxIDYzMC44MTIgNDY5LjEwOVpNMzE3LjI0IDIyMy4zMzZMMjQ2LjE4NSAxNjcuNjQ4QzI1My42NTIgMTYyLjg1OSAyNjIuNDc2IDE2MCAyNzEuOTk5IDE2MEMyOTguNDk5IDE2MCAzMTkuOTk5IDE4MS41IDMxOS45OTkgMjA4QzMxOS45OTkgMjEzLjM5OCAzMTguODg4IDIxOC41IDMxNy4yNCAyMjMuMzM2Wk00MjYuMjQ1IDI1MS40NjFDNDIyLjIxOCAyNjYuNjYgNDE1Ljc0NCAyODAuOTQ5IDQwNy4zOTggMjk0LjAwNEwzNTYuMDA1IDI1My43MjNDMzY2LjI1NSAyMzUuMDc4IDM3MC42OTMgMjEyLjgwNSAzNjYuMjEyIDE4OS4yMDNDMzU5LjA3OSAxNTEuNjQ1IDMyOC4zNTUgMTIwLjkyMiAyOTAuNzk0IDExMy43ODlDMjU4LjYwMSAxMDcuNjc2IDIyOC43MjYgMTE3Ljg0NCAyMDcuNDk1IDEzNy4zMjRMMTU2LjIxOCA5Ny4xMzNDMTc1Ljc2NSA3Ni41NTUgMjAwLjY2NSA2MS4xMzMgMjI4LjUzOCA1My43NUMzNTAuMTc1IDIxLjUyMyA0NTguNDc4IDEyOS44MjQgNDI2LjI0NSAyNTEuNDYxWk00NjMuOTk5IDQ2NEg0MTMuNzFDNDE1LjA1NiA0NTguODUyIDQxNS45OTkgNDUzLjU1NSA0MTUuOTk5IDQ0OFY0MjIuMjg1TDMzMi4xNTggMzU2LjU3QzMyNi43MDMgMzU4LjcyNyAzMjEuMTczIDM2MC43MzQgMzE1LjQ2IDM2Mi4yNDZDMjAwLjgxNCAzOTIuNjI1IDk4LjEzIDI5OC4xNDEgMTEzLjY4MyAxODUuMzM2TDcxLjgxOCAxNTIuNTIzQzY2LjkwOCAxNzAuMjI3IDYzLjk5OSAxODguNzUgNjMuOTk5IDIwOEM2My45OTkgMjY2Ljc1IDg4LjYyNCAzMTkuODc1IDEyNy45OTkgMzU3Ljc1VjQ0OEMxMjcuOTk5IDQ4My4xOTkgMTU2LjggNTEyIDE5MS45OTkgNTEySDQ2My45OTlDNDgxLjczIDUxMiA0OTguMDcyIDUwNi41IDUxMS44ODYgNDk3LjQzOEw0NjguMzc2IDQ2My4zMzZDNDY2Ljg5NiA0NjMuNSA0NjUuNTIzIDQ2NCA0NjMuOTk5IDQ2NFpNMzY3Ljk5OSA0NDhDMzY3Ljk5OSA0NTYuODM2IDM2MC44MzUgNDY0IDM1MS45OTkgNDY0SDE5MS45OTlDMTgzLjE2MyA0NjQgMTc1Ljk5OSA0NTYuODM2IDE3NS45OTkgNDQ4VjM5Mi4zNzVDMjA0Ljc0OSA0MDcuMzc1IDIzNy4zNzQgNDE2IDI3MS45OTkgNDE2UzMzOS4yNDkgNDA3LjM3NSAzNjcuOTk5IDM5Mi4zNzVWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BellSchoolSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M630.812 469.109L570.326 421.703C573.74 415.16 575.999 407.914 575.999 400C575.999 373.492 554.509 352 527.999 352C515.943 352 505.056 356.602 496.626 363.938L444.654 323.203C473.751 279.844 487.21 225.188 476.081 167.258C460.372 85.484 394.564 19.484 312.763 3.891C236.148 -10.711 165.609 17.453 119.261 68.168L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM317.24 223.336L246.185 167.648C253.652 162.859 262.476 160 271.999 160C298.499 160 319.999 181.5 319.999 208C319.999 213.398 318.888 218.5 317.24 223.336ZM426.245 251.461C422.218 266.66 415.744 280.949 407.398 294.004L356.005 253.723C366.255 235.078 370.693 212.805 366.212 189.203C359.079 151.645 328.355 120.922 290.794 113.789C258.601 107.676 228.726 117.844 207.495 137.324L156.218 97.133C175.765 76.555 200.665 61.133 228.538 53.75C350.175 21.523 458.478 129.824 426.245 251.461ZM463.999 464H413.71C415.056 458.852 415.999 453.555 415.999 448V422.285L332.158 356.57C326.703 358.727 321.173 360.734 315.46 362.246C200.814 392.625 98.13 298.141 113.683 185.336L71.818 152.523C66.908 170.227 63.999 188.75 63.999 208C63.999 266.75 88.624 319.875 127.999 357.75V448C127.999 483.199 156.8 512 191.999 512H463.999C481.73 512 498.072 506.5 511.886 497.438L468.376 463.336C466.896 463.5 465.523 464 463.999 464ZM367.999 448C367.999 456.836 360.835 464 351.999 464H191.999C183.163 464 175.999 456.836 175.999 448V392.375C204.749 407.375 237.374 416 271.999 416S339.249 407.375 367.999 392.375V448Z" />
        </Icon>
    </>
}