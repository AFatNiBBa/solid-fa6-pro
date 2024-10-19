
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ghost` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=regular ghost}
 * @preview ![ghost](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEMxOTAgMCAxODguMTI1IDAgMTg2LjEyNSAwLjEyNUM4MSAzLjI1IDAgOTQuODc1IDAgMjAwVjQ2NEMwIDQ3My42MjUgNy44NzUgNDgwIDE2LjEyNSA0ODBDMjAgNDgwIDI0IDQ3OC41IDI3LjM3NSA0NzUuMjVMNTIuMjUgNDU2Ljc1QzU1LjEyNSA0NTQuNjI1IDU4LjUgNDUzLjYyNSA2MS43NSA0NTMuNjI1QzY2LjI1IDQ1My42MjUgNzAuNjI1IDQ1NS4zNzUgNzMuNzUgNDU5TDExNi43NSA1MDcuMzc1QzExOS44NzUgNTEwLjUgMTIzLjg3NSA1MTIgMTI4IDUxMkMxMzIuMTI1IDUxMiAxMzYuMjUgNTEwLjUgMTM5LjM3NSA1MDcuMzc1TDE4MCA0NjEuNUMxODMuMjUgNDU3Ljg3NSAxODcuNjI1IDQ1Ni4xMjUgMTkyIDQ1Ni4xMjVTMjAwLjc1IDQ1Ny44NzUgMjA0IDQ2MS41TDI0NC42MjUgNTA3LjM3NUMyNDcuNzUgNTEwLjUgMjUxLjg3NSA1MTIgMjU2IDUxMkMyNjAuMTI1IDUxMiAyNjQuMTI1IDUxMC41IDI2Ny4yNSA1MDcuMzc1TDMxMC4yNSA0NTlDMzE1Ljc1IDQ1Mi43NSAzMjUuMTI1IDQ1MS43NSAzMzEuNzUgNDU2Ljc1TDM1Ni42MjUgNDc1LjI1QzM2MCA0NzguNSAzNjQgNDgwIDM2Ny44NzUgNDgwQzM3Ni4xMjUgNDgwIDM4NCA0NzMuNjI1IDM4NCA0NjRWMTkyQzM4NCA4Ni4wMDEgMjk4IDAgMTkyIDBaTTMzNiA0MDcuMTI1QzMzMS41IDQwNi4xMjUgMzI2Ljg3NSA0MDUuNjI1IDMyMi4yNSA0MDUuNjI1QzMwNCA0MDUuNjI1IDI4Ni41IDQxMy4zNzUgMjc0LjM3NSA0MjcuMTI1TDI1NiA0NDcuNzVMMjM5Ljg3NSA0MjkuNjI1QzIyNy43NSA0MTUuODc1IDIxMC4yNSA0MDguMTI1IDE5MiA0MDguMTI1UzE1Ni4yNSA0MTUuODc1IDE0NC4xMjUgNDI5LjYyNUwxMjggNDQ3Ljc1TDEwOS42MjUgNDI3LjEyNUM5Ny41IDQxMy4zNzUgODAgNDA1LjYyNSA2MS43NSA0MDUuNjI1QzU3LjEyNSA0MDUuNjI1IDUyLjUgNDA2LjEyNSA0OCA0MDcuMTI1VjIwMEM0OCAxMTguNSAxMTAuNjI1IDUwLjM3NSAxODcuNSA0OC4xMjVMMTkyIDQ4QzI3MS4zNzUgNDggMzM2IDExMi42MjUgMzM2IDE5MlY0MDcuMTI1Wk0xMjggMTYwQzExMC4zNzUgMTYwIDk2IDE3NC4zNzUgOTYgMTkyUzExMC4zNzUgMjI0IDEyOCAyMjRTMTYwIDIwOS42MjUgMTYwIDE5MlMxNDUuNjI1IDE2MCAxMjggMTYwWk0yNTYgMTYwQzIzOC4zNzUgMTYwIDIyNCAxNzQuMzc1IDIyNCAxOTJTMjM4LjM3NSAyMjQgMjU2IDIyNEMyNzMuNjI1IDIyNCAyODggMjA5LjYyNSAyODggMTkyUzI3My42MjUgMTYwIDI1NiAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Ghost(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C190 0 188.125 0 186.125 0.125C81 3.25 0 94.875 0 200V464C0 473.625 7.875 480 16.125 480C20 480 24 478.5 27.375 475.25L52.25 456.75C55.125 454.625 58.5 453.625 61.75 453.625C66.25 453.625 70.625 455.375 73.75 459L116.75 507.375C119.875 510.5 123.875 512 128 512C132.125 512 136.25 510.5 139.375 507.375L180 461.5C183.25 457.875 187.625 456.125 192 456.125S200.75 457.875 204 461.5L244.625 507.375C247.75 510.5 251.875 512 256 512C260.125 512 264.125 510.5 267.25 507.375L310.25 459C315.75 452.75 325.125 451.75 331.75 456.75L356.625 475.25C360 478.5 364 480 367.875 480C376.125 480 384 473.625 384 464V192C384 86.001 298 0 192 0ZM336 407.125C331.5 406.125 326.875 405.625 322.25 405.625C304 405.625 286.5 413.375 274.375 427.125L256 447.75L239.875 429.625C227.75 415.875 210.25 408.125 192 408.125S156.25 415.875 144.125 429.625L128 447.75L109.625 427.125C97.5 413.375 80 405.625 61.75 405.625C57.125 405.625 52.5 406.125 48 407.125V200C48 118.5 110.625 50.375 187.5 48.125L192 48C271.375 48 336 112.625 336 192V407.125ZM128 160C110.375 160 96 174.375 96 192S110.375 224 128 224S160 209.625 160 192S145.625 160 128 160ZM256 160C238.375 160 224 174.375 224 192S238.375 224 256 224C273.625 224 288 209.625 288 192S273.625 160 256 160Z" />
        </Icon>
    </>
}