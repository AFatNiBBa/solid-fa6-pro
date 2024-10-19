
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scanner-gun` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-gun?s=thin scanner-gun}
 * @preview ![scanner-gun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMzJIMTEyQzUwLjE0NSAzMiAwIDgyLjE0NSAwIDE0NEMwIDE5Mi40MTggMzAuODk4IDIzMy4yNzMgNzMuOTEyIDI0OC45MDhMNy41IDM2My45NjlDLTcuODU5IDM5MC42MjUgMS4zNDQgNDI0Ljk2OSAyOC4wNDcgNDQwLjVMODMuNDIyIDQ3Mi41QzkyLjIzNCA0NzcuNTYyIDEwMS44NDQgNDc5Ljk2OSAxMTEuMzI4IDQ3OS45NjlDMTMwLjczNCA0NzkuOTY5IDE0OS42MjUgNDY5LjkwNiAxNTkuOTY5IDQ1MS45MzdMMjczLjAzNyAyNTZIMzIwQzMzNy42NzQgMjU2IDM1MiAyNDEuNjcyIDM1MiAyMjRWNjRDMzUyIDQ2LjMyNiAzMzcuNjc0IDMyIDMyMCAzMlpNMTQ2LjEwOSA0NDMuOTM4QzE0MC43ODEgNDUzLjIxOSAxMzIuMTQxIDQ1OS44NDQgMTIxLjgxMyA0NjIuNjI1QzExMS41IDQ2NS4zMTMgMTAwLjY3MiA0NjMuOTY5IDkxLjQyMiA0NTguNjI1TDM2LjA3OCA0MjYuNjU2QzE2Ljk4NCA0MTUuNTMxIDEwLjM5MSAzOTEgMjEuMzU5IDM3MS45NjlMODkuNTg2IDI1My43NEM5Ni44MyAyNTUuMjExIDEwNC4zMjIgMjU2IDExMiAyNTZIMjU0LjU3NkwxNDYuMTA5IDQ0My45MzhaTTMzNiAyMjRDMzM2IDIzMi44MjIgMzI4LjgyMiAyNDAgMzIwIDI0MEgxMTJDNTkuMDY2IDI0MCAxNiAxOTYuOTM0IDE2IDE0NEMxNiA5MS4wNjQgNTkuMDY2IDQ4IDExMiA0OEgzMjBDMzI4LjgyMiA0OCAzMzYgNTUuMTc4IDMzNiA2NFYyMjRaTTQyNCA0OEg1NjhDNTcyLjQyMiA0OCA1NzYgNDQuNDIyIDU3NiA0MFM1NzIuNDIyIDMyIDU2OCAzMkg0MjRDNDE5LjU3OCAzMiA0MTYgMzUuNTc4IDQxNiA0MFM0MTkuNTc4IDQ4IDQyNCA0OFpNNTY4IDQ2NEg0MjRDNDE5LjU3OCA0NjQgNDE2IDQ2Ny41NzggNDE2IDQ3MlM0MTkuNTc4IDQ4MCA0MjQgNDgwSDU2OEM1NzIuNDIyIDQ4MCA1NzYgNDc2LjQyMiA1NzYgNDcyUzU3Mi40MjIgNDY0IDU2OCA0NjRaTTU2OCA4MEg0MjRDNDE5LjU3OCA4MCA0MTYgODMuNTc4IDQxNiA4OFM0MTkuNTc4IDk2IDQyNCA5Nkg1NjhDNTcyLjQyMiA5NiA1NzYgOTIuNDIyIDU3NiA4OFM1NzIuNDIyIDgwIDU2OCA4MFpNNTY4IDEyOEg0MjRDNDE5LjU3OCAxMjggNDE2IDEzMS41NzggNDE2IDEzNlM0MTkuNTc4IDE0NCA0MjQgMTQ0SDU2OEM1NzIuNDIyIDE0NCA1NzYgMTQwLjQyMiA1NzYgMTM2UzU3Mi40MjIgMTI4IDU2OCAxMjhaTTU2OCAzNzZINDI0QzQxOS41NzggMzc2IDQxNiAzNzkuNTc4IDQxNiAzODRTNDE5LjU3OCAzOTIgNDI0IDM5Mkg1NjhDNTcyLjQyMiAzOTIgNTc2IDM4OC40MjIgNTc2IDM4NFM1NzIuNDIyIDM3NiA1NjggMzc2Wk01NjggMTkySDQyNEM0MTkuNTc4IDE5MiA0MTYgMTk1LjU3OCA0MTYgMjAwUzQxOS41NzggMjA4IDQyNCAyMDhINTY4QzU3Mi40MjIgMjA4IDU3NiAyMDQuNDIyIDU3NiAyMDBTNTcyLjQyMiAxOTIgNTY4IDE5MlpNNTY4IDMyMEg0MjRDNDE5LjU3OCAzMjAgNDE2IDMyMy41NzggNDE2IDMyOFM0MTkuNTc4IDMzNiA0MjQgMzM2SDU2OEM1NzIuNDIyIDMzNiA1NzYgMzMyLjQyMiA1NzYgMzI4UzU3Mi40MjIgMzIwIDU2OCAzMjBaTTU2OCAyNzJINDI0QzQxOS41NzggMjcyIDQxNiAyNzUuNTc4IDQxNiAyODBTNDE5LjU3OCAyODggNDI0IDI4OEg1NjhDNTcyLjQyMiAyODggNTc2IDI4NC40MjIgNTc2IDI4MFM1NzIuNDIyIDI3MiA1NjggMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ScannerGun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M320 32H112C50.145 32 0 82.145 0 144C0 192.418 30.898 233.273 73.912 248.908L7.5 363.969C-7.859 390.625 1.344 424.969 28.047 440.5L83.422 472.5C92.234 477.562 101.844 479.969 111.328 479.969C130.734 479.969 149.625 469.906 159.969 451.937L273.037 256H320C337.674 256 352 241.672 352 224V64C352 46.326 337.674 32 320 32ZM146.109 443.938C140.781 453.219 132.141 459.844 121.813 462.625C111.5 465.313 100.672 463.969 91.422 458.625L36.078 426.656C16.984 415.531 10.391 391 21.359 371.969L89.586 253.74C96.83 255.211 104.322 256 112 256H254.576L146.109 443.938ZM336 224C336 232.822 328.822 240 320 240H112C59.066 240 16 196.934 16 144C16 91.064 59.066 48 112 48H320C328.822 48 336 55.178 336 64V224ZM424 48H568C572.422 48 576 44.422 576 40S572.422 32 568 32H424C419.578 32 416 35.578 416 40S419.578 48 424 48ZM568 464H424C419.578 464 416 467.578 416 472S419.578 480 424 480H568C572.422 480 576 476.422 576 472S572.422 464 568 464ZM568 80H424C419.578 80 416 83.578 416 88S419.578 96 424 96H568C572.422 96 576 92.422 576 88S572.422 80 568 80ZM568 128H424C419.578 128 416 131.578 416 136S419.578 144 424 144H568C572.422 144 576 140.422 576 136S572.422 128 568 128ZM568 376H424C419.578 376 416 379.578 416 384S419.578 392 424 392H568C572.422 392 576 388.422 576 384S572.422 376 568 376ZM568 192H424C419.578 192 416 195.578 416 200S419.578 208 424 208H568C572.422 208 576 204.422 576 200S572.422 192 568 192ZM568 320H424C419.578 320 416 323.578 416 328S419.578 336 424 336H568C572.422 336 576 332.422 576 328S572.422 320 568 320ZM568 272H424C419.578 272 416 275.578 416 280S419.578 288 424 288H568C572.422 288 576 284.422 576 280S572.422 272 568 272Z" />
        </Icon>
    </>
}