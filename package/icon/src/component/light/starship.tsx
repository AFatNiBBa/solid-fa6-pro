
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `starship` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=light starship}
 * @preview ![starship](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNjRDMzY0LjEyNSA2NCAyOTIuODc1IDExNy44NzUgMjY2Ljc1IDE5M0wyMTQuODc1IDE5Ny43NUwxNTkgMTYwSDIwNi4zNzVDMjMyLjg3NSAxNjAgMjU0LjM3NSAxMzguNSAyNTQuMzc1IDExMlMyMzIuODc1IDY0IDIwNi4zNzUgNjRIMzJDMTQuMzc1IDY0IDAgNzguMzc1IDAgOTZWMTI4QzAgMTQ1LjYyNSAxNC4zNzUgMTYwIDMyIDE2MEgxMDEuNzVMMTY0LjYyNSAyMDIuMzc1TDE0Mi4zNzUgMjA0LjVDMTE2IDIwNyA5NiAyMjkuMTI1IDk2IDI1NlMxMTYgMzA1IDE0Mi4zNzUgMzA3LjVMMTY0LjYyNSAzMDkuNjI1TDEwMS43NSAzNTJIMzJDMTQuMzc1IDM1MiAwIDM2Ni4zNzUgMCAzODRWNDE2QzAgNDMzLjYyNSAxNC4zNzUgNDQ4IDMyIDQ0OEgyMDYuMzc1QzIzMi44NzUgNDQ4IDI1NC4zNzUgNDI2LjUgMjU0LjM3NSA0MDBTMjMyLjg3NSAzNTIgMjA2LjM3NSAzNTJIMTU5TDIxNC44NzUgMzE0LjI1TDI2Ni43NSAzMTlDMjkyLjg3NSAzOTQuMTI1IDM2NC4xMjUgNDQ4IDQ0OCA0NDhDNTU0IDQ0OCA2NDAgMzYyIDY0MCAyNTZDNjQwIDE1MCA1NTQgNjQgNDQ4IDY0Wk0zMiAxMjhWOTZIMjA2LjM3NUMyMTUuMjUgOTYgMjIyLjM3NSAxMDMuMTI1IDIyMi4zNzUgMTEyUzIxNS4yNSAxMjggMjA2LjM3NSAxMjhIMzJaTTIwNi4zNzUgMzg0QzIxNS4yNSAzODQgMjIyLjM3NSAzOTEuMTI1IDIyMi4zNzUgNDAwUzIxNS4yNSA0MTYgMjA2LjM3NSA0MTZIMzJWMzg0SDIwNi4zNzVaTTI1OC42MjUgMjg2LjEyNUwxNDUuMzc1IDI3NS42MjVDMTM1LjUgMjc0Ljc1IDEyOCAyNjYuMjUgMTI4IDI1NkMxMjggMjQ1Ljc1IDEzNS41IDIzNy4yNSAxNDUuMzc1IDIzNi4zNzVMMjU4LjYyNSAyMjUuODc1QzI1NyAyMzUuODc1IDI1Ni4xMjUgMjQ1Ljg3NSAyNTYgMjU2QzI1Ni4xMjUgMjY2LjEyNSAyNTcgMjc2LjEyNSAyNTguNjI1IDI4Ni4xMjVaTTQ0OCA0MTZDMzU5LjYyNSA0MTYgMjg4IDM0NC4zNzUgMjg4IDI1NlMzNTkuNjI1IDk2IDQ0OCA5NlM2MDggMTY3LjYyNSA2MDggMjU2UzUzNi4zNzUgNDE2IDQ0OCA0MTZaTTQ0OCAxOTJDNDEyLjYyNSAxOTIgMzg0IDIyMC42MjUgMzg0IDI1NlM0MTIuNjI1IDMyMCA0NDggMzIwUzUxMiAyOTEuMzc1IDUxMiAyNTZTNDgzLjM3NSAxOTIgNDQ4IDE5MlpNNDQ4IDI4OEM0MzAuMzc1IDI4OCA0MTYgMjczLjYyNSA0MTYgMjU2UzQzMC4zNzUgMjI0IDQ0OCAyMjRTNDgwIDIzOC4zNzUgNDgwIDI1NlM0NjUuNjI1IDI4OCA0NDggMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Starship(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M448 64C364.125 64 292.875 117.875 266.75 193L214.875 197.75L159 160H206.375C232.875 160 254.375 138.5 254.375 112S232.875 64 206.375 64H32C14.375 64 0 78.375 0 96V128C0 145.625 14.375 160 32 160H101.75L164.625 202.375L142.375 204.5C116 207 96 229.125 96 256S116 305 142.375 307.5L164.625 309.625L101.75 352H32C14.375 352 0 366.375 0 384V416C0 433.625 14.375 448 32 448H206.375C232.875 448 254.375 426.5 254.375 400S232.875 352 206.375 352H159L214.875 314.25L266.75 319C292.875 394.125 364.125 448 448 448C554 448 640 362 640 256C640 150 554 64 448 64ZM32 128V96H206.375C215.25 96 222.375 103.125 222.375 112S215.25 128 206.375 128H32ZM206.375 384C215.25 384 222.375 391.125 222.375 400S215.25 416 206.375 416H32V384H206.375ZM258.625 286.125L145.375 275.625C135.5 274.75 128 266.25 128 256C128 245.75 135.5 237.25 145.375 236.375L258.625 225.875C257 235.875 256.125 245.875 256 256C256.125 266.125 257 276.125 258.625 286.125ZM448 416C359.625 416 288 344.375 288 256S359.625 96 448 96S608 167.625 608 256S536.375 416 448 416ZM448 192C412.625 192 384 220.625 384 256S412.625 320 448 320S512 291.375 512 256S483.375 192 448 192ZM448 288C430.375 288 416 273.625 416 256S430.375 224 448 224S480 238.375 480 256S465.625 288 448 288Z" />
        </Icon>
    </>
}