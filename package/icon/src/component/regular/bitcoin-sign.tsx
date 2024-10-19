
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bitcoin-sign` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=regular bitcoin-sign}
 * @preview ![bitcoin-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjEuNDM4IDIzNy4zNDRDMjc3LjkzOCAyMTguOTM4IDI4OCAxOTQuNjI1IDI4OCAxNjhDMjg4IDExNi4xMzUgMjQ5LjcyMSA3My4zODUgMjAwIDY1LjYxOVYyNEMyMDAgMTAuNzUgMTg5LjI1IDAgMTc2IDBTMTUyIDEwLjc1IDE1MiAyNFY2NEgxMDRWMjRDMTA0IDEwLjc1IDkzLjI1IDAgODAgMFM1NiAxMC43NSA1NiAyNFY2NEgyNEMxMC43NSA2NCAwIDc0Ljc1IDAgODhWNDI0QzAgNDM2LjUzMSA5LjYyNSA0NDYuOTM4IDIyLjEyNSA0NDcuOTM4QzI5LjUgNDQ4LjQ5NCA0MS4yNzkgNDQ4Ljc0IDU2IDQ0OC43N1Y0ODhDNTYgNTAxLjI1IDY2Ljc1IDUxMiA4MCA1MTJTMTA0IDUwMS4yNSAxMDQgNDg4VjQ0OC4zODdDMTE3LjE2NCA0NDguMjA1IDEzMS4wNzYgNDQ3Ljk4NCAxNDUuNjU2IDQ0Ny43NUMxNDcuNzY0IDQ0Ny43MTcgMTQ5Ljg4NSA0NDcuNjg2IDE1MiA0NDcuNjUyVjQ4OEMxNTIgNTAxLjI1IDE2Mi43NSA1MTIgMTc2IDUxMlMyMDAgNTAxLjI1IDIwMCA0ODhWNDQ2Ljk2N0MyMDMuMTgyIDQ0Ni45MjggMjA2LjUwNCA0NDYuODc3IDIwOS42MjUgNDQ2Ljg0NEMyNzAuNSA0NDYuMjE5IDMyMCAzOTYuMjE5IDMyMCAzMzUuNDM4QzMyMCAyOTMuMTI1IDI5Ni4yODEgMjU2LjIxOSAyNjEuNDM4IDIzNy4zNDRaTTQ4IDExMkgxODRDMjE0Ljg3NSAxMTIgMjQwIDEzNy4xMjUgMjQwIDE2OFMyMTQuODc1IDIyNCAxODQgMjI0SDQ4VjExMlpNMjA5LjEyNSAzOTguODQ0QzE4OC41MzEgMzk5LjA2MiAxNjYuNDY5IDM5OS40MDYgMTQ0Ljg3NSAzOTkuNzVDMTA5IDQwMC4zNDQgNzIuMjUgNDAwLjgxMiA0OCA0MDAuNzVWMjcySDIwOC41NjJDMjQzLjUzMSAyNzIgMjcyIDMwMC40NjkgMjcyIDMzNS40MzhDMjcyIDM3MC4wMzEgMjQzLjc4MSAzOTguNDY5IDIwOS4xMjUgMzk4Ljg0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BitcoinSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M261.438 237.344C277.938 218.938 288 194.625 288 168C288 116.135 249.721 73.385 200 65.619V24C200 10.75 189.25 0 176 0S152 10.75 152 24V64H104V24C104 10.75 93.25 0 80 0S56 10.75 56 24V64H24C10.75 64 0 74.75 0 88V424C0 436.531 9.625 446.938 22.125 447.938C29.5 448.494 41.279 448.74 56 448.77V488C56 501.25 66.75 512 80 512S104 501.25 104 488V448.387C117.164 448.205 131.076 447.984 145.656 447.75C147.764 447.717 149.885 447.686 152 447.652V488C152 501.25 162.75 512 176 512S200 501.25 200 488V446.967C203.182 446.928 206.504 446.877 209.625 446.844C270.5 446.219 320 396.219 320 335.438C320 293.125 296.281 256.219 261.438 237.344ZM48 112H184C214.875 112 240 137.125 240 168S214.875 224 184 224H48V112ZM209.125 398.844C188.531 399.062 166.469 399.406 144.875 399.75C109 400.344 72.25 400.812 48 400.75V272H208.562C243.531 272 272 300.469 272 335.438C272 370.031 243.781 398.469 209.125 398.844Z" />
        </Icon>
    </>
}