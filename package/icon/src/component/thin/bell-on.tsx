
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bell-on` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell-on?s=thin bell-on}
 * @preview ![bell-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzkuODc1IDIwOEM0NzkuODc1IDEzMC4yNSA0MjUuNSA2OC4xMjUgMzUyIDUyLjg3NVYzMkMzNTIgMTQuMzc1IDMzNy42MjUgMCAzMjAgMFMyODggMTQuMzc1IDI4OCAzMlY1Mi44NzVDMjE0LjUgNjguMTI1IDE2MC4xMjUgMTMwLjI1IDE2MC4xMjUgMjA4QzE2MC4xMjUgMzEwLjI1IDEyMy44NzUgMzQxLjUgMTA0LjYyNSAzNjIuMjVDOTguNjI1IDM2OC43NSA5NiAzNzYuNSA5NiAzODRDOTYuMTI1IDQwMC4zNzUgMTA5IDQxNiAxMjguMTI1IDQxNkg1MTEuODc1QzUzMSA0MTYgNTQzLjg3NSA0MDAuMzc1IDU0NCAzODRDNTQ0IDM3Ni41IDU0MS4zNzUgMzY4Ljc1IDUzNS4zNzUgMzYyLjI1QzUxNi4xMjUgMzQxLjUgNDc5Ljg3NSAzMTAuMjUgNDc5Ljg3NSAyMDhaTTUxMS44NzUgNDAwSDEyOC4xMjVDMTE4LjEwOSA0MDAgMTEyLjA2MSAzOTEuODAzIDExMiAzODRDMTEyIDM3Ny4wMjMgMTE1LjgyMiAzNzMuNjk1IDEyMC4wOTIgMzY5LjE2NkMxNDEuMDQ5IDM0Ny4wODggMTc2LjEyNSAzMTAuMTM3IDE3Ni4xMjUgMjA4QzE3Ni4xMjUgMTQzLjI3NyAyMTUuODQ0IDg0LjE4MiAzMDQgNjUuODk2VjMyQzMwNCAyMy4xNzggMzExLjE3OCAxNiAzMjAgMTZTMzM2IDIzLjE3OCAzMzYgMzJWNjUuODk2QzQyNC43NTIgODQuMzA1IDQ2My44NzUgMTQ0LjA2NiA0NjMuODc1IDIwOEM0NjMuODc1IDMxMC4xMzcgNDk4Ljk1MSAzNDcuMDg4IDUxOS45MDggMzY5LjE2NkM1MjMuNzg5IDM3My4yODUgNTI4IDM3Ni45MTQgNTI4IDM4My44NzdDNTI3LjkzOSAzOTEuODAzIDUyMS44OTEgNDAwIDUxMS44NzUgNDAwWk0zNzYgNDQwQzM3MS41OTQgNDQwIDM2OCA0NDMuNTc4IDM2OCA0NDhDMzY4IDQ3NC40NjkgMzQ2LjQ2OSA0OTYgMzIwIDQ5NlMyNzIgNDc0LjQ2OSAyNzIgNDQ4QzI3MiA0NDMuNTc4IDI2OC40MDYgNDQwIDI2NCA0NDBTMjU2IDQ0My41NzggMjU2IDQ0OEMyNTYgNDgzLjI5NyAyODQuNzE5IDUxMiAzMjAgNTEyUzM4NCA0ODMuMjk3IDM4NCA0NDhDMzg0IDQ0My41NzggMzgwLjQwNiA0NDAgMzc2IDQ0MFpNMTEyIDE4NEMxMTIgMTc5LjU3OCAxMDguNDIyIDE3NiAxMDQgMTc2SDhDMy41NzggMTc2IDAgMTc5LjU3OCAwIDE4NFMzLjU3OCAxOTIgOCAxOTJIMTA0QzEwOC40MjIgMTkyIDExMiAxODguNDIyIDExMiAxODRaTTYzMiAxNzZINTM2QzUzMS41NzggMTc2IDUyOCAxNzkuNTc4IDUyOCAxODRTNTMxLjU3OCAxOTIgNTM2IDE5Mkg2MzJDNjM2LjQyMiAxOTIgNjQwIDE4OC40MjIgNjQwIDE4NFM2MzYuNDIyIDE3NiA2MzIgMTc2Wk0xMTYuNDIyIDg3LjE1NkMxMTcuNTc4IDg3LjczNCAxMTguNzk3IDg4IDEyMCA4OEMxMjIuOTIyIDg4IDEyNS43NSA4Ni4zNzUgMTI3LjE1NiA4My41NzhDMTI5LjEyNSA3OS42MjUgMTI3LjUzMSA3NC44MjggMTIzLjU3OCA3Mi44NDRMNDMuNTc4IDMyLjg0NEMzOS42NTYgMzAuODkxIDM0Ljg0NCAzMi40ODQgMzIuODQ0IDM2LjQyMkMzMC44NzUgNDAuMzc1IDMyLjQ2OSA0NS4xNzIgMzYuNDIyIDQ3LjE1NkwxMTYuNDIyIDg3LjE1NlpNNTIwIDg4QzUyMS4yMDMgODggNTIyLjQyMiA4Ny43MzQgNTIzLjU3OCA4Ny4xNTZMNjAzLjU3OCA0Ny4xNTZDNjA3LjUzMSA0NS4xNzIgNjA5LjEyNSA0MC4zNzUgNjA3LjE1NiAzNi40MjJDNjA1LjE3MiAzMi40NjkgNjAwLjQwNiAzMC44NTkgNTk2LjQyMiAzMi44NDRMNTE2LjQyMiA3Mi44NDRDNTEyLjQ2OSA3NC44MjggNTEwLjg3NSA3OS42MjUgNTEyLjg0NCA4My41NzhDNTE0LjI1IDg2LjM3NSA1MTcuMDc4IDg4IDUyMCA4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BellOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M479.875 208C479.875 130.25 425.5 68.125 352 52.875V32C352 14.375 337.625 0 320 0S288 14.375 288 32V52.875C214.5 68.125 160.125 130.25 160.125 208C160.125 310.25 123.875 341.5 104.625 362.25C98.625 368.75 96 376.5 96 384C96.125 400.375 109 416 128.125 416H511.875C531 416 543.875 400.375 544 384C544 376.5 541.375 368.75 535.375 362.25C516.125 341.5 479.875 310.25 479.875 208ZM511.875 400H128.125C118.109 400 112.061 391.803 112 384C112 377.023 115.822 373.695 120.092 369.166C141.049 347.088 176.125 310.137 176.125 208C176.125 143.277 215.844 84.182 304 65.896V32C304 23.178 311.178 16 320 16S336 23.178 336 32V65.896C424.752 84.305 463.875 144.066 463.875 208C463.875 310.137 498.951 347.088 519.908 369.166C523.789 373.285 528 376.914 528 383.877C527.939 391.803 521.891 400 511.875 400ZM376 440C371.594 440 368 443.578 368 448C368 474.469 346.469 496 320 496S272 474.469 272 448C272 443.578 268.406 440 264 440S256 443.578 256 448C256 483.297 284.719 512 320 512S384 483.297 384 448C384 443.578 380.406 440 376 440ZM112 184C112 179.578 108.422 176 104 176H8C3.578 176 0 179.578 0 184S3.578 192 8 192H104C108.422 192 112 188.422 112 184ZM632 176H536C531.578 176 528 179.578 528 184S531.578 192 536 192H632C636.422 192 640 188.422 640 184S636.422 176 632 176ZM116.422 87.156C117.578 87.734 118.797 88 120 88C122.922 88 125.75 86.375 127.156 83.578C129.125 79.625 127.531 74.828 123.578 72.844L43.578 32.844C39.656 30.891 34.844 32.484 32.844 36.422C30.875 40.375 32.469 45.172 36.422 47.156L116.422 87.156ZM520 88C521.203 88 522.422 87.734 523.578 87.156L603.578 47.156C607.531 45.172 609.125 40.375 607.156 36.422C605.172 32.469 600.406 30.859 596.422 32.844L516.422 72.844C512.469 74.828 510.875 79.625 512.844 83.578C514.25 86.375 517.078 88 520 88Z" />
        </Icon>
    </>
}