
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `barcode-scan` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-scan?s=thin barcode-scan}
 * @preview ![barcode-scan](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIgMjQ4SDhDMy41NzggMjQ4IDAgMjUxLjU3OCAwIDI1NlMzLjU3OCAyNjQgOCAyNjRINjMyQzYzNi40MjIgMjY0IDY0MCAyNjAuNDIyIDY0MCAyNTZTNjM2LjQyMiAyNDggNjMyIDI0OFpNMjY0IDQwQzI2NCAzNS41NzggMjYwLjQyMiAzMiAyNTYgMzJTMjQ4IDM1LjU3OCAyNDggNDBWMTkySDI2NFY0MFpNODAgNDBDODAgMzUuNTc4IDc2LjQyMiAzMiA3MiAzMlM2NCAzNS41NzggNjQgNDBWMTkySDgwVjQwWk0xMjggNDBDMTI4IDM1LjU3OCAxMjQuNDIyIDMyIDEyMCAzMlMxMTIgMzUuNTc4IDExMiA0MFYxOTJIMTI4VjQwWk0xOTIgNDBDMTkyIDM1LjU3OCAxODguNDIyIDMyIDE4NCAzMlMxNzYgMzUuNTc4IDE3NiA0MFYxOTJIMTkyVjQwWk0zMzYgNDBDMzM2IDM1LjU3OCAzMzIuNDIyIDMyIDMyOCAzMlMzMjAgMzUuNTc4IDMyMCA0MFYxOTJIMzM2VjQwWk0zODQgNDBDMzg0IDM1LjU3OCAzODAuNDIyIDMyIDM3NiAzMlMzNjggMzUuNTc4IDM2OCA0MFYxOTJIMzg0VjQwWk01MjggNDBDNTI4IDM1LjU3OCA1MjQuNDIyIDMyIDUyMCAzMlM1MTIgMzUuNTc4IDUxMiA0MFYxOTJINTI4VjQwWk01NzYgNDBDNTc2IDM1LjU3OCA1NzIuNDIyIDMyIDU2OCAzMlM1NjAgMzUuNTc4IDU2MCA0MFYxOTJINTc2VjQwWk00NjQgNDBDNDY0IDM1LjU3OCA0NjAuNDIyIDMyIDQ1NiAzMlM0NDggMzUuNTc4IDQ0OCA0MFYxOTJINDY0VjQwWk0zMjAgNDcyQzMyMCA0NzYuNDIyIDMyMy41NzggNDgwIDMyOCA0ODBTMzM2IDQ3Ni40MjIgMzM2IDQ3MlYzMjBIMzIwVjQ3MlpNNTEyIDQ3MkM1MTIgNDc2LjQyMiA1MTUuNTc4IDQ4MCA1MjAgNDgwUzUyOCA0NzYuNDIyIDUyOCA0NzJWMzIwSDUxMlY0NzJaTTY0IDQ3MkM2NCA0NzYuNDIyIDY3LjU3OCA0ODAgNzIgNDgwUzgwIDQ3Ni40MjIgODAgNDcyVjMyMEg2NFY0NzJaTTU2MCA0NzJDNTYwIDQ3Ni40MjIgNTYzLjU3OCA0ODAgNTY4IDQ4MFM1NzYgNDc2LjQyMiA1NzYgNDcyVjMyMEg1NjBWNDcyWk0zNjggNDcyQzM2OCA0NzYuNDIyIDM3MS41NzggNDgwIDM3NiA0ODBTMzg0IDQ3Ni40MjIgMzg0IDQ3MlYzMjBIMzY4VjQ3MlpNNDQ4IDQ3MkM0NDggNDc2LjQyMiA0NTEuNTc4IDQ4MCA0NTYgNDgwUzQ2NCA0NzYuNDIyIDQ2NCA0NzJWMzIwSDQ0OFY0NzJaTTExMiA0NzJDMTEyIDQ3Ni40MjIgMTE1LjU3OCA0ODAgMTIwIDQ4MFMxMjggNDc2LjQyMiAxMjggNDcyVjMyMEgxMTJWNDcyWk0yNDggNDcyQzI0OCA0NzYuNDIyIDI1MS41NzggNDgwIDI1NiA0ODBTMjY0IDQ3Ni40MjIgMjY0IDQ3MlYzMjBIMjQ4VjQ3MlpNMTc2IDQ3MkMxNzYgNDc2LjQyMiAxNzkuNTc4IDQ4MCAxODQgNDgwUzE5MiA0NzYuNDIyIDE5MiA0NzJWMzIwSDE3NlY0NzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BarcodeScan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M632 248H8C3.578 248 0 251.578 0 256S3.578 264 8 264H632C636.422 264 640 260.422 640 256S636.422 248 632 248ZM264 40C264 35.578 260.422 32 256 32S248 35.578 248 40V192H264V40ZM80 40C80 35.578 76.422 32 72 32S64 35.578 64 40V192H80V40ZM128 40C128 35.578 124.422 32 120 32S112 35.578 112 40V192H128V40ZM192 40C192 35.578 188.422 32 184 32S176 35.578 176 40V192H192V40ZM336 40C336 35.578 332.422 32 328 32S320 35.578 320 40V192H336V40ZM384 40C384 35.578 380.422 32 376 32S368 35.578 368 40V192H384V40ZM528 40C528 35.578 524.422 32 520 32S512 35.578 512 40V192H528V40ZM576 40C576 35.578 572.422 32 568 32S560 35.578 560 40V192H576V40ZM464 40C464 35.578 460.422 32 456 32S448 35.578 448 40V192H464V40ZM320 472C320 476.422 323.578 480 328 480S336 476.422 336 472V320H320V472ZM512 472C512 476.422 515.578 480 520 480S528 476.422 528 472V320H512V472ZM64 472C64 476.422 67.578 480 72 480S80 476.422 80 472V320H64V472ZM560 472C560 476.422 563.578 480 568 480S576 476.422 576 472V320H560V472ZM368 472C368 476.422 371.578 480 376 480S384 476.422 384 472V320H368V472ZM448 472C448 476.422 451.578 480 456 480S464 476.422 464 472V320H448V472ZM112 472C112 476.422 115.578 480 120 480S128 476.422 128 472V320H112V472ZM248 472C248 476.422 251.578 480 256 480S264 476.422 264 472V320H248V472ZM176 472C176 476.422 179.578 480 184 480S192 476.422 192 472V320H176V472Z" />
        </Icon>
    </>
}