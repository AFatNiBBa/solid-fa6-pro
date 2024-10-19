
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `traffic-light-go` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-go?s=thin traffic-light-go}
 * @preview ![traffic-light-go](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNjRDMTY1LjQ5IDY0IDE0NCA4NS40OSAxNDQgMTEyUzE2NS40OSAxNjAgMTkyIDE2MFMyNDAgMTM4LjUxIDI0MCAxMTJTMjE4LjUxIDY0IDE5MiA2NFpNMTkyIDE0NEMxNzQuMzU1IDE0NCAxNjAgMTI5LjY0NSAxNjAgMTEyUzE3NC4zNTUgODAgMTkyIDgwUzIyNCA5NC4zNTUgMjI0IDExMlMyMDkuNjQ1IDE0NCAxOTIgMTQ0Wk0xOTIgOTZDMTgzLjE2NCA5NiAxNzYgMTAzLjE2MiAxNzYgMTEyQzE3NiAxMjAuODM2IDE4My4xNjQgMTI4IDE5MiAxMjhTMjA4IDEyMC44MzYgMjA4IDExMkMyMDggMTAzLjE2MiAyMDAuODM2IDk2IDE5MiA5NlpNMTkyIDMyMEMxNjUuNDkgMzIwIDE0NCAzNDEuNDkgMTQ0IDM2OFMxNjUuNDkgNDE2IDE5MiA0MTZTMjQwIDM5NC41MSAyNDAgMzY4UzIxOC41MSAzMjAgMTkyIDMyMFpNMTkyIDQwMEMxNzQuMzU1IDQwMCAxNjAgMzg1LjY0NSAxNjAgMzY4UzE3NC4zNTUgMzM2IDE5MiAzMzZTMjI0IDM1MC4zNTUgMjI0IDM2OFMyMDkuNjQ1IDQwMCAxOTIgNDAwWk0zMjkuNDg0IDI4OC4yMDNDMzYzLjEwOSAyNzEuMzkxIDM4NCAyMzcuNTk0IDM4NCAyMDBDMzg0IDE5NS41NzggMzgwLjQyMiAxOTIgMzc2IDE5MkgzMjBWMTY0Ljk0NUwzMjkuNDg0IDE2MC4yMDNDMzYzLjEwOSAxNDMuMzkxIDM4NCAxMDkuNTk0IDM4NCA3MkMzODQgNjcuNTc4IDM4MC40MjIgNjQgMzc2IDY0SDMyMEMzMjAgMjguNjUyIDI5MS4zNDYgMCAyNTYgMEgxMjhDOTIuNjU0IDAgNjQgMjguNjUyIDY0IDY0SDhDMy41NzggNjQgMCA2Ny41NzggMCA3MkMwIDEwOS41OTQgMjAuODkxIDE0My4zOTEgNTQuNTE2IDE2MC4yMDNMNjQgMTY0Ljk0NVYxOTJIOEMzLjU3OCAxOTIgMCAxOTUuNTc4IDAgMjAwQzAgMjM3LjU5NCAyMC44OTEgMjcxLjM5MSA1NC41MTYgMjg4LjIwM0w2NCAyOTIuOTQ1VjMyMEg4QzMuNTc4IDMyMCAwIDMyMy41NzggMCAzMjhDMCAzNjUuNTk0IDIwLjg5MSAzOTkuMzkxIDU0LjUxNiA0MTYuMjAzQzY5Ljg4NyA0MjMuODg5IDY4LjA5NCA0MjMuMzYxIDcwLjkzMiA0MjMuNzQ4Qzg3LjcyNyA0NzQuODU0IDEzNS4yNzUgNTEyIDE5MiA1MTJTMjk2LjI3MyA0NzQuODU0IDMxMy4wNjggNDIzLjc0OEMzMTUuOTA2IDQyMy4zNjEgMzE0LjExNyA0MjMuODg3IDMyOS40ODQgNDE2LjIwM0MzNjMuMTA5IDM5OS4zOTEgMzg0IDM2NS41OTQgMzg0IDMyOEMzODQgMzIzLjU3OCAzODAuNDIyIDMyMCAzNzYgMzIwSDMyMFYyOTIuOTQ1TDMyOS40ODQgMjg4LjIwM1pNMzIwIDgwSDM2Ny42MjVDMzY1LjA0MyAxMDcuMTI5IDM0OS44NjkgMTMyLjExOSAzMjAgMTQ3LjA1NVY4MFpNMzIwIDIwOEgzNjcuNjI1QzM2NS4wNDMgMjM1LjEyOSAzNDkuODY5IDI2MC4xMTkgMzIwIDI3NS4wNTVWMjA4Wk0xNi4zNzUgODBINjRWMTQ3LjA1NUMzNC40MSAxMzIuMjYgMTguOTg2IDEwNy40MzQgMTYuMzc1IDgwWk0xNi4zNzUgMjA4SDY0VjI3NS4wNTVDMzQuNDEgMjYwLjI2IDE4Ljk4NiAyMzUuNDM0IDE2LjM3NSAyMDhaTTE2LjM3NSAzMzZINjRWMzg0QzY0IDM5MC44NzMgNjQuOTc5IDM5Ny40ODYgNjYuMDIxIDQwNC4wNjZDMzQuMTgyIDM4OC4xMzkgMTkuMDM1IDM2My45NDEgMTYuMzc1IDMzNlpNMzA0IDM4NEMzMDQgNDQ1Ljc1NiAyNTMuNzU4IDQ5NiAxOTIgNDk2UzgwIDQ0NS43NTYgODAgMzg0VjY0QzgwIDM3LjUzMyAxMDEuNTMzIDE2IDEyOCAxNkgyNTZDMjgyLjQ2NyAxNiAzMDQgMzcuNTMzIDMwNCA2NFYzODRaTTM2Ny42MjUgMzM2QzM2NC45ODQgMzYzLjczOCAzNTAuMDIxIDM4OC4wMzcgMzE3Ljk3OSA0MDQuMDY2QzMxOS4wMjEgMzk3LjQ4NiAzMjAgMzkwLjg3MyAzMjAgMzg0VjMzNkgzNjcuNjI1Wk0xOTIgMjI0QzE4My4xNjQgMjI0IDE3NiAyMzEuMTYyIDE3NiAyNDBDMTc2IDI0OC44MzYgMTgzLjE2NCAyNTYgMTkyIDI1NlMyMDggMjQ4LjgzNiAyMDggMjQwQzIwOCAyMzEuMTYyIDIwMC44MzYgMjI0IDE5MiAyMjRaTTE5MiAxOTJDMTY1LjQ5IDE5MiAxNDQgMjEzLjQ5IDE0NCAyNDBTMTY1LjQ5IDI4OCAxOTIgMjg4UzI0MCAyNjYuNTEgMjQwIDI0MFMyMTguNTEgMTkyIDE5MiAxOTJaTTE5MiAyNzJDMTc0LjM1NSAyNzIgMTYwIDI1Ny42NDUgMTYwIDI0MFMxNzQuMzU1IDIwOCAxOTIgMjA4UzIyNCAyMjIuMzU1IDIyNCAyNDBTMjA5LjY0NSAyNzIgMTkyIDI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TrafficLightGo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 64C165.49 64 144 85.49 144 112S165.49 160 192 160S240 138.51 240 112S218.51 64 192 64ZM192 144C174.355 144 160 129.645 160 112S174.355 80 192 80S224 94.355 224 112S209.645 144 192 144ZM192 96C183.164 96 176 103.162 176 112C176 120.836 183.164 128 192 128S208 120.836 208 112C208 103.162 200.836 96 192 96ZM192 320C165.49 320 144 341.49 144 368S165.49 416 192 416S240 394.51 240 368S218.51 320 192 320ZM192 400C174.355 400 160 385.645 160 368S174.355 336 192 336S224 350.355 224 368S209.645 400 192 400ZM329.484 288.203C363.109 271.391 384 237.594 384 200C384 195.578 380.422 192 376 192H320V164.945L329.484 160.203C363.109 143.391 384 109.594 384 72C384 67.578 380.422 64 376 64H320C320 28.652 291.346 0 256 0H128C92.654 0 64 28.652 64 64H8C3.578 64 0 67.578 0 72C0 109.594 20.891 143.391 54.516 160.203L64 164.945V192H8C3.578 192 0 195.578 0 200C0 237.594 20.891 271.391 54.516 288.203L64 292.945V320H8C3.578 320 0 323.578 0 328C0 365.594 20.891 399.391 54.516 416.203C69.887 423.889 68.094 423.361 70.932 423.748C87.727 474.854 135.275 512 192 512S296.273 474.854 313.068 423.748C315.906 423.361 314.117 423.887 329.484 416.203C363.109 399.391 384 365.594 384 328C384 323.578 380.422 320 376 320H320V292.945L329.484 288.203ZM320 80H367.625C365.043 107.129 349.869 132.119 320 147.055V80ZM320 208H367.625C365.043 235.129 349.869 260.119 320 275.055V208ZM16.375 80H64V147.055C34.41 132.26 18.986 107.434 16.375 80ZM16.375 208H64V275.055C34.41 260.26 18.986 235.434 16.375 208ZM16.375 336H64V384C64 390.873 64.979 397.486 66.021 404.066C34.182 388.139 19.035 363.941 16.375 336ZM304 384C304 445.756 253.758 496 192 496S80 445.756 80 384V64C80 37.533 101.533 16 128 16H256C282.467 16 304 37.533 304 64V384ZM367.625 336C364.984 363.738 350.021 388.037 317.979 404.066C319.021 397.486 320 390.873 320 384V336H367.625ZM192 224C183.164 224 176 231.162 176 240C176 248.836 183.164 256 192 256S208 248.836 208 240C208 231.162 200.836 224 192 224ZM192 192C165.49 192 144 213.49 144 240S165.49 288 192 288S240 266.51 240 240S218.51 192 192 192ZM192 272C174.355 272 160 257.645 160 240S174.355 208 192 208S224 222.355 224 240S209.645 272 192 272Z" />
        </Icon>
    </>
}