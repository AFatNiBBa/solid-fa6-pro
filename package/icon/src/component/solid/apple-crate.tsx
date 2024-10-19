
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `apple-crate` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/apple-crate?s=solid apple-crate}
 * @preview ![apple-crate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTguMjUgMTkyLjAwMUg0NzhDNDgzLjI1IDE1Mi41MDEgNDcyLjg3NSA4OS4zNzYgNDI0LjEyNSA4MC42MjZDNDA2IDc3LjYyNiAzNzIuMjUgODYuNzUxIDM1MS42MjUgOTguMjUxQzMzNC42MjUgODguNzUxIDMwOS4yNSA4MS4zNzYgMjkwLjUgODAuNTAxQzI5Mi4zNzUgODIuNzUxIDI5NC4zNzUgODQuNjI2IDI5NiA4Ny4xMjZDMzE2Ljg3NSAxMTcuMjUxIDMyMS43NSAxNTkuMzc2IDMxOC4yNSAxOTIuMDAxWk0yMTAuNSA1MC41MDFDMjIxLjg3NSAzOC4yNTEgMjI1IDE4LjUwMSAyMjMuNzUgMC4yNTFDMjEwLjg3NSAtMC42MjQgMTg4LjEyNSAwLjEyNiAxNzMuNzUgMTMuNTAxQzE1Ny4yNSAzMC4xMjYgMTYwIDU5Ljg3NiAxNjAuNSA2My43NTFDMTc5IDY1LjAwMSAxOTguMjUgNjEuODc2IDIxMC41IDUwLjUwMVpNNDAyLjI1IDUwLjUwMUM0MTMuNSAzOC4yNTEgNDE2LjYyNSAxOC41MDEgNDE1LjUgMC4yNTFDNDAyLjUgLTAuNjI0IDM3OS43NSAwLjEyNiAzNjUuMzc1IDEzLjUwMUMzNDguODc1IDMwLjEyNiAzNTEuNjI1IDU5Ljg3NiAzNTIuMjUgNjMuNzUxQzM3MC42MjUgNjUuMDAxIDM5MCA2MS44NzYgNDAyLjI1IDUwLjUwMVpNMjg2LjI1IDE5Mi4wMDFDMjkxLjUgMTUyLjUwMSAyODEuMTI1IDg5LjM3NiAyMzIuNSA4MC42MjZDMjE0LjM3NSA3Ny42MjYgMTgwLjYyNSA4Ni43NTEgMTYwIDk4LjI1MUMxMzkuMzc1IDg2Ljc1MSAxMDUuNjI1IDc3LjYyNiA4Ny41IDgwLjYyNkMzOC44NzUgODkuMzc2IDI4LjUgMTUyLjg3NiAzMy43NSAxOTIuMDAxSDI4Ni4yNVpNNDk2IDIyNC4wMDFIMTZDNy4xMjUgMjI0LjAwMSAwIDIzMS4xMjYgMCAyNDAuMDAxVjM1Mi4wMDFINTEyVjI0MC4wMDFDNTEyIDIzMS4xMjYgNTA0Ljg3NSAyMjQuMDAxIDQ5NiAyMjQuMDAxWk02NCAzMDQuMDAxQzU1LjEyNSAzMDQuMDAxIDQ4IDI5Ni44NzYgNDggMjg4LjAwMVM1NS4xMjUgMjcyLjAwMSA2NCAyNzIuMDAxUzgwIDI3OS4xMjYgODAgMjg4LjAwMVM3Mi44NzUgMzA0LjAwMSA2NCAzMDQuMDAxWk00NDggMzA0LjAwMUM0MzkuMTI1IDMwNC4wMDEgNDMyIDI5Ni44NzYgNDMyIDI4OC4wMDFTNDM5LjEyNSAyNzIuMDAxIDQ0OCAyNzIuMDAxUzQ2NCAyNzkuMTI2IDQ2NCAyODguMDAxUzQ1Ni44NzUgMzA0LjAwMSA0NDggMzA0LjAwMVpNMCA0OTYuMDAxQzAgNTA0Ljg3NiA3LjEyNSA1MTIuMDAxIDE2IDUxMi4wMDFINDk2QzUwNC44NzUgNTEyLjAwMSA1MTIgNTA0Ljg3NiA1MTIgNDk2LjAwMVYzODQuMDAxSDBWNDk2LjAwMVpNNDQ4IDQzMi4wMDFDNDU2Ljg3NSA0MzIuMDAxIDQ2NCA0MzkuMTI2IDQ2NCA0NDguMDAxUzQ1Ni44NzUgNDY0LjAwMSA0NDggNDY0LjAwMVM0MzIgNDU2Ljg3NiA0MzIgNDQ4LjAwMVM0MzkuMTI1IDQzMi4wMDEgNDQ4IDQzMi4wMDFaTTY0IDQzMi4wMDFDNzIuODc1IDQzMi4wMDEgODAgNDM5LjEyNiA4MCA0NDguMDAxUzcyLjg3NSA0NjQuMDAxIDY0IDQ2NC4wMDFTNDggNDU2Ljg3NiA0OCA0NDguMDAxUzU1LjEyNSA0MzIuMDAxIDY0IDQzMi4wMDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function AppleCrate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M318.25 192.001H478C483.25 152.501 472.875 89.376 424.125 80.626C406 77.626 372.25 86.751 351.625 98.251C334.625 88.751 309.25 81.376 290.5 80.501C292.375 82.751 294.375 84.626 296 87.126C316.875 117.251 321.75 159.376 318.25 192.001ZM210.5 50.501C221.875 38.251 225 18.501 223.75 0.251C210.875 -0.624 188.125 0.126 173.75 13.501C157.25 30.126 160 59.876 160.5 63.751C179 65.001 198.25 61.876 210.5 50.501ZM402.25 50.501C413.5 38.251 416.625 18.501 415.5 0.251C402.5 -0.624 379.75 0.126 365.375 13.501C348.875 30.126 351.625 59.876 352.25 63.751C370.625 65.001 390 61.876 402.25 50.501ZM286.25 192.001C291.5 152.501 281.125 89.376 232.5 80.626C214.375 77.626 180.625 86.751 160 98.251C139.375 86.751 105.625 77.626 87.5 80.626C38.875 89.376 28.5 152.876 33.75 192.001H286.25ZM496 224.001H16C7.125 224.001 0 231.126 0 240.001V352.001H512V240.001C512 231.126 504.875 224.001 496 224.001ZM64 304.001C55.125 304.001 48 296.876 48 288.001S55.125 272.001 64 272.001S80 279.126 80 288.001S72.875 304.001 64 304.001ZM448 304.001C439.125 304.001 432 296.876 432 288.001S439.125 272.001 448 272.001S464 279.126 464 288.001S456.875 304.001 448 304.001ZM0 496.001C0 504.876 7.125 512.001 16 512.001H496C504.875 512.001 512 504.876 512 496.001V384.001H0V496.001ZM448 432.001C456.875 432.001 464 439.126 464 448.001S456.875 464.001 448 464.001S432 456.876 432 448.001S439.125 432.001 448 432.001ZM64 432.001C72.875 432.001 80 439.126 80 448.001S72.875 464.001 64 464.001S48 456.876 48 448.001S55.125 432.001 64 432.001Z" />
        </Icon>
    </>
}