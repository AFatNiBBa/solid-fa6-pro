
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flag-checkered` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-checkered?s=light flag-checkered}
 * @preview ![flag-checkered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzIuNSAwQzQ2NS41IDAgNDU4LjI1IDEuNSA0NTEuMjUgNC42MjVDNDAwLjc1IDI3LjI1IDM2My41IDM0Ljg3NSAzMzIuMjUgMzQuODc1QzI2Ni4xMjUgMzQuODc1IDIyNy43NSAwLjM3NSAxNTEuMzc1IDAuMzc1QzExOS43NSAwLjM3NSA4MS4yNSA2Ljg3NSAzMiAyMy42MjVWMTZDMzIgNy4yNSAyNC43NSAwIDE2IDBTMCA3LjI1IDAgMTZWNDk2QzAgNTA0Ljc5NyA3LjE5OSA1MTIgMTYgNTEyUzMyIDUwNC43OTcgMzIgNDk2VjQwMy42MjVDNzYuMjUgMzg3Ljc1IDExMy42MjUgMzgxLjYyNSAxNDYuNSAzODEuNjI1QzIyNy43NSAzODEuNjI1IDI4NC4yNSA0MTYgMzY1LjYyNSA0MTZDNDAwLjg3NSA0MTYgNDQwLjc1IDQwOS41IDQ4OS4yNSAzOTFDNTAzLjI1IDM4NS42MjUgNTEyLjEyNSAzNzMuMTI1IDUxMi4xMjUgMzU5Ljc1VjMzLjM3NUM1MTIgMTMgNDkzLjM3NSAwIDQ3Mi41IDBaTTQ2NC4yNSAzMy43NUM0NzMuNjI1IDI5LjYyNSA0NzkuODc1IDMzLjI1IDQ3OS44NzUgMzkuMzc1Vjk5Ljc2NkM0NDkuODM4IDEwOS40MjYgNDIzLjg1NyAxMTQuNjYgNDAwLjEyNSAxMTcuMzUyVjU2Ljk4NEM0MjAuMTk5IDUxLjU1NSA0NDEuMjczIDQ0LjA3IDQ2NC4yNSAzMy43NVpNNDc5Ljg3NSAxODcuNzY2QzQ0OS44MzggMTk3LjQyNiA0MjMuODU3IDIwMi42NiA0MDAuMTI1IDIwNS4zNTJWMTQ5LjcxOUM0MjMuODc5IDE0Ny4xNTYgNDQ5Ljk3MyAxNDIuMTk1IDQ3OS44NzUgMTMzLjE5NVYxODcuNzY2Wk00NzkuODc1IDI3NS41MjNDNDQ5LjgzOCAyODUuMTg0IDQyMy44NTcgMjkwLjQxOCA0MDAuMTI1IDI5My4xMDlWMjM3LjcxOUM0MjMuODc5IDIzNS4xNTYgNDQ5Ljk3MyAyMzAuMTk1IDQ3OS44NzUgMjIxLjE5NVYyNzUuNTIzWk0zNjguMTI1IDIwNy40MDZDMzMyLjYxNyAyMDcuNzg5IDMwMi4yMjMgMjAyLjEyNSAyNzIuMTI1IDE5NS4xNzJWMTQwLjE4OEMzMDAuNzQ4IDE0Ni43MDMgMzMxLjM2NyAxNTIuMjE5IDM2OC4xMjUgMTUxLjcxMVYyMDcuNDA2Wk0yNDAuMTI1IDE4Ny44MTJDMjEwLjkzNiAxODEuMjk3IDE4MC4wOCAxNzYuMTQxIDE0NC4xMjUgMTc2LjU0N1YxMjAuNDg0QzE3OS42MzMgMTIwLjEyNSAyMTAuMDEgMTI1LjgxMiAyNDAuMTI1IDEzMi43NzNWMTg3LjgxMlpNMjQwLjEyNSAyMjAuNzczVjI3NS41N0MyMTAuOTM2IDI2OS4wNTUgMTgwLjA4IDI2My44OTggMTQ0LjEyNSAyNjQuMzA1VjIwOC40ODRDMTc5LjYzMyAyMDguMTI1IDIxMC4wMSAyMTMuODEyIDI0MC4xMjUgMjIwLjc3M1pNMjcyLjEyNSAyMjguMTg4QzMwMC43NDggMjM0LjcwMyAzMzEuMzY3IDI0MC4yMTkgMzY4LjEyNSAyMzkuNzExVjI5NS4xNjRDMzMyLjYxNyAyOTUuNTQ3IDMwMi4yMjMgMjg5Ljg4MyAyNzIuMTI1IDI4Mi45M1YyMjguMTg4Wk0zNjguMTI1IDYzLjc5N1YxMTkuNDA2QzMzMi42MTcgMTE5Ljc4OSAzMDIuMjIzIDExNC4xMjUgMjcyLjEyNSAxMDcuMTcyVjU4LjY4OEMyOTAuMjExIDYzLjMzNiAzMDkuNDUxIDY2Ljg3NSAzMzIuMTI1IDY2Ljg3NUMzNDMuODM4IDY2Ljg3NSAzNTUuODY1IDY1LjY2IDM2OC4xMjUgNjMuNzk3Wk0yNDAuMTI1IDQ5LjQ3N1Y5OS44MTJDMjEwLjkzNiA5My4yOTcgMTgwLjA4IDg4LjE0MSAxNDQuMTI1IDg4LjU0N1YzMi43ODlDMTQ2LjQ1NyAzMi43MTEgMTQ4Ljk2NyAzMi4zNzUgMTUxLjI1IDMyLjM3NUMxODUuNzk3IDMyLjM3NSAyMTIuODA3IDQwLjkwMiAyNDAuMTI1IDQ5LjQ3N1pNMzEuODc1IDM2OS4zNzVWNTcuMjVDNjEuMzIgNDYuNTI3IDg3Ljc4MSAzOS43MjcgMTEyLjEyNSAzNS45MzhWOTAuNDM4Qzg4LjA3MiA5Mi45NDUgNjEuODkzIDk3LjgyNCAzMi4xMjUgMTA2Ljc4OVYxNDAuMTI1QzYyLjI4NyAxMzAuNDM3IDg4LjMzNiAxMjUuMjExIDExMi4xMjUgMTIyLjUyM1YxNzguNDM4Qzg4LjA3MiAxODAuOTQ1IDYxLjg5MyAxODUuODI0IDMyLjEyNSAxOTQuNzg5VjIyOC4xMjVDNjIuMjg3IDIxOC40MzcgODguMzM2IDIxMy4yMTEgMTEyLjEyNSAyMTAuNTIzVjI2Ni4xOTlDODguMDcyIDI2OC43MDMgNjEuODkzIDI3My41ODIgMzIuMTI1IDI4Mi41NDdWMzE1Ljg4M0M2Mi4yODcgMzA2LjE5NSA4OC4zMzYgMzAwLjk2OSAxMTIuMTI1IDI5OC4yODVWMzUxLjcwM0M4Ni4yMTkgMzU0LjQ5MiA1OS42NDMgMzYwLjIwMyAzMS44NzUgMzY5LjM3NVpNMTQ2LjM3NSAzNDkuNjI1QzE0NS42MzEgMzQ5LjYyNSAxNDQuODY5IDM0OS43MTkgMTQ0LjEyNSAzNDkuNzI3VjI5Ni4yNUMxNzkuNjMzIDI5NS44OTEgMjEwLjAxIDMwMS41NzQgMjQwLjEyNSAzMDguNTMxVjM2Mi4wNjZDMjExLjQ5IDM1NS4zMzYgMTgxLjM0IDM0OS42MjUgMTQ2LjM3NSAzNDkuNjI1Wk0zNjUuNSAzODRDMzMyLjE4MiAzODQgMzAyLjM3OSAzNzcuMjc3IDI3Mi4xMjUgMzY5LjgxMlYzMTUuOTQ1QzMwMC43NDggMzIyLjQ2MSAzMzEuMzY3IDMyNy45NzcgMzY4LjEyNSAzMjcuNDY5VjM4My44ODNDMzY3LjI0OCAzODMuODkxIDM2Ni4zNzUgMzg0IDM2NS41IDM4NFpNNDc5Ljg3NSAzNTkuNUM0NzkuMjgxIDM2MS40NzcgNDQyLjgxNCAzNzUuNDk2IDQwMC4xMjUgMzgxLjM0NFYzMjUuNDc3QzQyMy44NzkgMzIyLjkxNCA0NDkuOTczIDMxNy45NTMgNDc5Ljg3NSAzMDguOTUzVjM1OS41WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FlagCheckered(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M472.5 0C465.5 0 458.25 1.5 451.25 4.625C400.75 27.25 363.5 34.875 332.25 34.875C266.125 34.875 227.75 0.375 151.375 0.375C119.75 0.375 81.25 6.875 32 23.625V16C32 7.25 24.75 0 16 0S0 7.25 0 16V496C0 504.797 7.199 512 16 512S32 504.797 32 496V403.625C76.25 387.75 113.625 381.625 146.5 381.625C227.75 381.625 284.25 416 365.625 416C400.875 416 440.75 409.5 489.25 391C503.25 385.625 512.125 373.125 512.125 359.75V33.375C512 13 493.375 0 472.5 0ZM464.25 33.75C473.625 29.625 479.875 33.25 479.875 39.375V99.766C449.838 109.426 423.857 114.66 400.125 117.352V56.984C420.199 51.555 441.273 44.07 464.25 33.75ZM479.875 187.766C449.838 197.426 423.857 202.66 400.125 205.352V149.719C423.879 147.156 449.973 142.195 479.875 133.195V187.766ZM479.875 275.523C449.838 285.184 423.857 290.418 400.125 293.109V237.719C423.879 235.156 449.973 230.195 479.875 221.195V275.523ZM368.125 207.406C332.617 207.789 302.223 202.125 272.125 195.172V140.188C300.748 146.703 331.367 152.219 368.125 151.711V207.406ZM240.125 187.812C210.936 181.297 180.08 176.141 144.125 176.547V120.484C179.633 120.125 210.01 125.812 240.125 132.773V187.812ZM240.125 220.773V275.57C210.936 269.055 180.08 263.898 144.125 264.305V208.484C179.633 208.125 210.01 213.812 240.125 220.773ZM272.125 228.188C300.748 234.703 331.367 240.219 368.125 239.711V295.164C332.617 295.547 302.223 289.883 272.125 282.93V228.188ZM368.125 63.797V119.406C332.617 119.789 302.223 114.125 272.125 107.172V58.688C290.211 63.336 309.451 66.875 332.125 66.875C343.838 66.875 355.865 65.66 368.125 63.797ZM240.125 49.477V99.812C210.936 93.297 180.08 88.141 144.125 88.547V32.789C146.457 32.711 148.967 32.375 151.25 32.375C185.797 32.375 212.807 40.902 240.125 49.477ZM31.875 369.375V57.25C61.32 46.527 87.781 39.727 112.125 35.938V90.438C88.072 92.945 61.893 97.824 32.125 106.789V140.125C62.287 130.437 88.336 125.211 112.125 122.523V178.438C88.072 180.945 61.893 185.824 32.125 194.789V228.125C62.287 218.437 88.336 213.211 112.125 210.523V266.199C88.072 268.703 61.893 273.582 32.125 282.547V315.883C62.287 306.195 88.336 300.969 112.125 298.285V351.703C86.219 354.492 59.643 360.203 31.875 369.375ZM146.375 349.625C145.631 349.625 144.869 349.719 144.125 349.727V296.25C179.633 295.891 210.01 301.574 240.125 308.531V362.066C211.49 355.336 181.34 349.625 146.375 349.625ZM365.5 384C332.182 384 302.379 377.277 272.125 369.812V315.945C300.748 322.461 331.367 327.977 368.125 327.469V383.883C367.248 383.891 366.375 384 365.5 384ZM479.875 359.5C479.281 361.477 442.814 375.496 400.125 381.344V325.477C423.879 322.914 449.973 317.953 479.875 308.953V359.5Z" />
        </Icon>
    </>
}