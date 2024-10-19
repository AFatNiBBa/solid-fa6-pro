
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `meter-bolt` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meter-bolt?s=regular meter-bolt}
 * @preview ![meter-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzguODAzIDM2My42NzJDNjM2LjA2NiAzNTYuNjQxIDYyOS4xMDQgMzUyIDYyMS4zMzggMzUySDU1Ni4zMjRMNjA2LjQ5OCAyNDkuMDk4QzYwOS45MjQgMjQxLjM4MSA2MDcuMzM2IDIzMi4zOTggNjAwLjI5OSAyMjcuNDU5QzU5My4xODggMjIyLjQ4NCA1ODMuNTYyIDIyMi45MjQgNTc3LjAzNyAyMjguNDYxTDQyMi4zNzcgMzUyLjQ0N0M0MTYuNTA0IDM1Ny4zODcgNDE0LjQ2MyAzNjUuMzE0IDQxNy4xOTcgMzcyLjMyOEM0MTkuOTM0IDM3OS4zNTkgNDI2Ljg5NiAzODQgNDM0LjY2MiAzODRINDk5LjY3Nkw0NDkuNTAyIDQ4Ni45MTZDNDQ2LjA3NiA0OTQuNjMzIDQ0OC42NjQgNTAzLjYxNSA0NTUuNzAxIDUwOC41NTVDNDU4Ljk4NCA1MTAuODU3IDQ2Mi44NDggNTEyIDQ2Ni42NzYgNTEyQzQ3MS4wODggNTEyIDQ3NS40NjMgNTEwLjUwNiA0NzguOTYzIDUwNy41NTNMNjMzLjYyMyAzODMuNTUzQzYzOS40OTYgMzc4LjYxMyA2NDEuNTM3IDM3MC42ODYgNjM4LjgwMyAzNjMuNjcyWk0zOTAuODc3IDM5Mi40NTNDMzU2LjE3NiA0MjYuNzU2IDMwOC41MzMgNDQ4IDI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRDMzYxLjg3MSA2NCA0NDguMDAyIDE1MC4xMzEgNDQ4LjAwMiAyNTZDNDQ4LjAwMiAyNzAuMDg0IDQ0Ni4zNzcgMjgzLjc4MSA0NDMuNDg0IDI5Ny4wMUw0OTUuOTQ5IDI1NC45NTdDNDk1LjM4MSAxMjIuODkzIDM4OC4xOTkgMTYgMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NkMzMjUuOTM5IDQ5NiAzODguNjkxIDQ2NS45IDQzMi41NTcgNDE4LjE3QzQxNC45NzEgNDE3LjQxMiAzOTkuMzYzIDQwNy40NDkgMzkwLjg3NyAzOTIuNDUzWk0zMjguMDAyIDEyOEMzMTkuMTY0IDEyOCAzMTIgMTM1LjE2MiAzMTIgMTQ0VjIwOEMzMTIgMjE2LjgzNiAzMTkuMTY0IDIyNCAzMjguMDAyIDIyNEgzNDQuMDAyQzM1Mi44MzggMjI0IDM2MC4wMDIgMjE2LjgzNiAzNjAuMDAyIDIwOFYxNDRDMzYwLjAwMiAxMzUuMTYyIDM1Mi44MzggMTI4IDM0NC4wMDIgMTI4SDMyOC4wMDJaTTE2OCAxMjhDMTU5LjE2NCAxMjggMTUyIDEzNS4xNjIgMTUyIDE0NFYyMDhDMTUyIDIxNi44MzYgMTU5LjE2NCAyMjQgMTY4IDIyNEgxODRDMTkyLjgzNiAyMjQgMjAwIDIxNi44MzYgMjAwIDIwOFYxNDRDMjAwIDEzNS4xNjIgMTkyLjgzNiAxMjggMTg0IDEyOEgxNjhaTTI0OCAxMjhDMjM5LjE2NCAxMjggMjMyIDEzNS4xNjIgMjMyIDE0NFYyMDhDMjMyIDIxNi44MzYgMjM5LjE2NCAyMjQgMjQ4IDIyNEgyNjRDMjcyLjgzNiAyMjQgMjgwIDIxNi44MzYgMjgwIDIwOFYxNDRDMjgwIDEzNS4xNjIgMjcyLjgzNiAxMjggMjY0IDEyOEgyNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MeterBolt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M638.803 363.672C636.066 356.641 629.104 352 621.338 352H556.324L606.498 249.098C609.924 241.381 607.336 232.398 600.299 227.459C593.188 222.484 583.562 222.924 577.037 228.461L422.377 352.447C416.504 357.387 414.463 365.314 417.197 372.328C419.934 379.359 426.896 384 434.662 384H499.676L449.502 486.916C446.076 494.633 448.664 503.615 455.701 508.555C458.984 510.857 462.848 512 466.676 512C471.088 512 475.463 510.506 478.963 507.553L633.623 383.553C639.496 378.613 641.537 370.686 638.803 363.672ZM390.877 392.453C356.176 426.756 308.533 448 256 448C150.131 448 64 361.869 64 256S150.131 64 256 64C361.871 64 448.002 150.131 448.002 256C448.002 270.084 446.377 283.781 443.484 297.01L495.949 254.957C495.381 122.893 388.199 16 256 16C123.451 16 16 123.451 16 256S123.451 496 256 496C325.939 496 388.691 465.9 432.557 418.17C414.971 417.412 399.363 407.449 390.877 392.453ZM328.002 128C319.164 128 312 135.162 312 144V208C312 216.836 319.164 224 328.002 224H344.002C352.838 224 360.002 216.836 360.002 208V144C360.002 135.162 352.838 128 344.002 128H328.002ZM168 128C159.164 128 152 135.162 152 144V208C152 216.836 159.164 224 168 224H184C192.836 224 200 216.836 200 208V144C200 135.162 192.836 128 184 128H168ZM248 128C239.164 128 232 135.162 232 144V208C232 216.836 239.164 224 248 224H264C272.836 224 280 216.836 280 208V144C280 135.162 272.836 128 264 128H248Z" />
        </Icon>
    </>
}