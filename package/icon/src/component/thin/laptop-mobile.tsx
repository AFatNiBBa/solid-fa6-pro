
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `laptop-mobile` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=thin laptop-mobile}
 * @preview ![laptop-mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQgMzA0QzM0OC40MTggMzA0IDM1MiAzMDAuNDE4IDM1MiAyOTZTMzQ4LjQxOCAyODggMzQ0IDI4OEg4MFY0OEM4MCAzMC4zMjYgOTQuMzI4IDE2IDExMiAxNkg0NjRDNDgxLjY3NCAxNiA0OTYgMzAuMzI2IDQ5NiA0OFY4OEM0OTYgOTIuNDE4IDQ5OS41ODIgOTYgNTA0IDk2UzUxMiA5Mi40MTggNTEyIDg4VjQ4QzUxMiAyMS41IDQ5MC41IDAuMTI1IDQ2NC4xMjUgMEgxMTEuODc1Qzg1LjUgMC4xMjUgNjQgMjEuNSA2NCA0OFYyODhIMTZDNy4xNjQgMjg4IDAgMjk1LjE2NCAwIDMwNFYzMjBDMC4xMjUgMzU1LjI1IDI4LjYyNSAzODMuODc1IDYzLjg3NSAzODRIMzQ0QzM0OC40MTggMzg0IDM1MiAzODAuNDE4IDM1MiAzNzZTMzQ4LjQxOCAzNjggMzQ0IDM2OEg2My45MzJDMzcuNTk2IDM2Ny45MDYgMTYuMDk0IDM0Ni4zNDggMTYgMzIwVjMwNEgzNDRaTTYwNCAxMjhINDIwQzQwMC4xMjUgMTI4IDM4NCAxNDQuMTI1IDM4NCAxNjRWNDc2QzM4NCA0OTUuODc1IDQwMC4xMjUgNTEyIDQyMCA1MTJINjA0QzYyMy44NzUgNTEyIDY0MCA0OTUuODc1IDY0MCA0NzZWMTY0QzY0MCAxNDQuMTI1IDYyMy44NzUgMTI4IDYwNCAxMjhaTTYyNCA0NzZDNjI0IDQ4Ny4wMjcgNjE1LjAyOSA0OTYgNjA0IDQ5Nkg0MjBDNDA4Ljk3MyA0OTYgNDAwIDQ4Ny4wMjcgNDAwIDQ3NlYxNjRDNDAwIDE1Mi45NzMgNDA4Ljk3MyAxNDQgNDIwIDE0NEg2MDRDNjE1LjAyOSAxNDQgNjI0IDE1Mi45NzMgNjI0IDE2NFY0NzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LaptopMobile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M344 304C348.418 304 352 300.418 352 296S348.418 288 344 288H80V48C80 30.326 94.328 16 112 16H464C481.674 16 496 30.326 496 48V88C496 92.418 499.582 96 504 96S512 92.418 512 88V48C512 21.5 490.5 0.125 464.125 0H111.875C85.5 0.125 64 21.5 64 48V288H16C7.164 288 0 295.164 0 304V320C0.125 355.25 28.625 383.875 63.875 384H344C348.418 384 352 380.418 352 376S348.418 368 344 368H63.932C37.596 367.906 16.094 346.348 16 320V304H344ZM604 128H420C400.125 128 384 144.125 384 164V476C384 495.875 400.125 512 420 512H604C623.875 512 640 495.875 640 476V164C640 144.125 623.875 128 604 128ZM624 476C624 487.027 615.029 496 604 496H420C408.973 496 400 487.027 400 476V164C400 152.973 408.973 144 420 144H604C615.029 144 624 152.973 624 164V476Z" />
        </Icon>
    </>
}