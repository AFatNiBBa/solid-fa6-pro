
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `solar-system` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/solar-system?s=regular solar-system}
 * @preview ![solar-system](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDAxIDE5Mi4wMDRDMjIwLjYyNiAxOTIuMDA0IDE5Mi4wMDEgMjIwLjYyNyAxOTIuMDAxIDI1NkMxOTIuMDAxIDI5MS4zNzEgMjIwLjYyNiAzMTkuOTk0IDI1Ni4wMDEgMzE5Ljk5NFMzMjAuMDAxIDI5MS4zNzEgMzIwLjAwMSAyNTZDMzIwLjAwMSAyMjAuNjI3IDI5MS4zNzYgMTkyLjAwNCAyNTYuMDAxIDE5Mi4wMDRaTTI1Ni4wMDEgMjcyQzI0Ny4xNjUgMjcyIDI0MC4wMDEgMjY0LjgzNiAyNDAuMDAxIDI1NkMyNDAuMDAxIDI0Ny4xNjIgMjQ3LjE2NSAyNDAgMjU2LjAwMSAyNDBTMjcyLjAwMSAyNDcuMTYyIDI3Mi4wMDEgMjU2QzI3Mi4wMDEgMjY0LjgzNiAyNjQuODM3IDI3MiAyNTYuMDAxIDI3MlpNNDcwLjM3NiAzOTUuOTg4QzQ4MS43NTEgNDE5LjQ4NiA0NzUuMTI2IDQ0Ny44NTkgNDU0LjYyNiA0NjQuMTA3UzQwNS4xMjYgNDgwLjIzIDM4NC43NTEgNDYzLjg1N1MzNTguMDAxIDQxOS4yMzYgMzY5LjM3NiAzOTUuNjEzQzM4MC44NzYgMzcyLjExNSA0MDcuMTI2IDM1OS42MTUgNDMyLjYyNiAzNjUuNjE1QzQ4Mi4zNzYgMjg1LjM3MyA0NzIuNjI2IDE3OC41MDYgNDAzLjEyNiAxMDguODg3QzM0My4yNTEgNDkuMTQzIDI1My4xMjYgMzEuNTE4IDE3NS4xMjYgNjQuMzkxQzE3MC44NzYgNTEuMjY2IDE2My43NTEgMzkuNTE4IDE1NC4xMjYgMjkuNzY4QzE1Mi4xMjYgMjcuNjQzIDE0OS43NTEgMjYuMTQzIDE0Ny42MjYgMjQuMzk1QzI0NS4xMjYgLTIxLjYwMiAzNjAuODc2IC0xLjM1NCA0MzcuMDAxIDc1LjAxNEM1MjQuMjUxIDE2Mi4yNTggNTM1LjM3NiAyOTYuNjIxIDQ3MC4zNzYgMzk1Ljk4OFpNMzU3Ljg3NiA0ODIuMjNDMzU5Ljg3NiA0ODQuMzU1IDM2Mi4yNTEgNDg1Ljg1NSAzNjQuMzc2IDQ4Ny42MDVDMjY2Ljg3NiA1MzMuNjAyIDE1MS4xMjYgNTEzLjM1NCA3NS4wMDEgNDM2Ljk4NEMtMTIuMjQ5IDM0OS43NDIgLTIzLjM3NCAyMTUuMzc3IDQxLjYyNiAxMTYuMDEyQzMwLjI1MSA5Mi41MTQgMzYuODc2IDY0LjE0MSA1Ny4zNzYgNDcuODkzQzc3Ljg3NiAzMS42NDMgMTA2Ljg3NiAzMS43NjggMTI3LjI1MSA0OC4xNDNDMTQ3LjYyNiA2NC41MTYgMTU0LjAwMSA5Mi43NjQgMTQyLjYyNiAxMTYuMzg3QzEzMS4xMjYgMTM5Ljg4NSAxMDQuODc2IDE1Mi4zODMgNzkuMzc2IDE0Ni4zODNDMjkuNjI2IDIyNi42MjcgMzkuMzc2IDMzMy40OTIgMTA4Ljg3NiA0MDMuMTEzQzE2OC43NTEgNDYyLjg1NyAyNTguODc2IDQ4MC40OCAzMzYuODc2IDQ0Ny42MDlDMzQxLjEyNiA0NjAuNzMyIDM0OC4yNTEgNDcyLjQ4MiAzNTcuODc2IDQ4Mi4yM1pNMzkxLjc1MSAxMjAuMjZDMzc1LjEyNiAxMDMuNjM3IDM0OS43NTEgMTAyLjYzNyAzMzEuMDAxIDExNS41MTJDMzA3LjUwMSAxMDMuMDEyIDI4MS44NzYgOTYuMDE0IDI1Ni4wMDEgOTYuMDE0QzE4My42MjYgOTYuMDE0IDEyMC4yNTEgMTQ0LjYzMyAxMDEuNTAxIDIxNC42MjdDODIuNzUxIDI4NC40OTggMTEzLjI1MSAzNTguMzY1IDE3Ni4wMDEgMzk0LjYxM0MyMzguNzUxIDQzMC43MzQgMzE4LjAwMSA0MjAuMzYxIDM2OS4xMjYgMzY5LjExNUM0MjAuMTI2IDMxOC4xMTkgNDI4Ljc1MSAyNDEuNSAzOTYuNTAxIDE4MS4wMDZDNDA5LjM3NiAxNjIuMjU4IDQwOC4zNzYgMTM2Ljg4NSAzOTEuNzUxIDEyMC4yNlpNMzM1LjI1MSAzMzUuMjQyQzI5NC4zNzYgMzc2Ljg2NSAyMjguMzc2IDM4MC4yMzggMTgzLjM3NiAzNDMuMTE3UzEyOS4yNTEgMjQwLjUgMTYyLjUwMSAxOTIuNTA0QzE5NS42MjYgMTQ0LjUwOCAyNjAuMDAxIDEyOS44ODUgMzEwLjc1MSAxNTguNzU4QzMxMS43NTEgMTY5LjUwNiAzMTUuNzUxIDE4MC4wMDYgMzIzLjg3NiAxODguMTMxQzMzMi4wMDEgMTk2LjI1NCAzNDIuNTAxIDIwMC4yNTQgMzUzLjEyNiAyMDEuMjU0QzM3Ny4xMjYgMjQ0IDM3MS41MDEgMjk4Ljg3MSAzMzUuMjUxIDMzNS4yNDJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SolarSystem(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.001 192.004C220.626 192.004 192.001 220.627 192.001 256C192.001 291.371 220.626 319.994 256.001 319.994S320.001 291.371 320.001 256C320.001 220.627 291.376 192.004 256.001 192.004ZM256.001 272C247.165 272 240.001 264.836 240.001 256C240.001 247.162 247.165 240 256.001 240S272.001 247.162 272.001 256C272.001 264.836 264.837 272 256.001 272ZM470.376 395.988C481.751 419.486 475.126 447.859 454.626 464.107S405.126 480.23 384.751 463.857S358.001 419.236 369.376 395.613C380.876 372.115 407.126 359.615 432.626 365.615C482.376 285.373 472.626 178.506 403.126 108.887C343.251 49.143 253.126 31.518 175.126 64.391C170.876 51.266 163.751 39.518 154.126 29.768C152.126 27.643 149.751 26.143 147.626 24.395C245.126 -21.602 360.876 -1.354 437.001 75.014C524.251 162.258 535.376 296.621 470.376 395.988ZM357.876 482.23C359.876 484.355 362.251 485.855 364.376 487.605C266.876 533.602 151.126 513.354 75.001 436.984C-12.249 349.742 -23.374 215.377 41.626 116.012C30.251 92.514 36.876 64.141 57.376 47.893C77.876 31.643 106.876 31.768 127.251 48.143C147.626 64.516 154.001 92.764 142.626 116.387C131.126 139.885 104.876 152.383 79.376 146.383C29.626 226.627 39.376 333.492 108.876 403.113C168.751 462.857 258.876 480.48 336.876 447.609C341.126 460.732 348.251 472.482 357.876 482.23ZM391.751 120.26C375.126 103.637 349.751 102.637 331.001 115.512C307.501 103.012 281.876 96.014 256.001 96.014C183.626 96.014 120.251 144.633 101.501 214.627C82.751 284.498 113.251 358.365 176.001 394.613C238.751 430.734 318.001 420.361 369.126 369.115C420.126 318.119 428.751 241.5 396.501 181.006C409.376 162.258 408.376 136.885 391.751 120.26ZM335.251 335.242C294.376 376.865 228.376 380.238 183.376 343.117S129.251 240.5 162.501 192.504C195.626 144.508 260.001 129.885 310.751 158.758C311.751 169.506 315.751 180.006 323.876 188.131C332.001 196.254 342.501 200.254 353.126 201.254C377.126 244 371.501 298.871 335.251 335.242Z" />
        </Icon>
    </>
}