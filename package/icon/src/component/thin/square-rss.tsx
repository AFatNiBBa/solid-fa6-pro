
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-rss` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-rss?s=thin square-rss}
 * @preview ![square-rss](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgMzIwQzg1LjQ5IDMyMCA2NCAzNDEuNDkgNjQgMzY4Uzg1LjQ5IDQxNiAxMTIgNDE2UzE2MCAzOTQuNTEgMTYwIDM2OFMxMzguNTEgMzIwIDExMiAzMjBaTTExMiA0MDBDOTQuMzU1IDQwMCA4MCAzODUuNjQ1IDgwIDM2OFM5NC4zNTUgMzM2IDExMiAzMzZTMTQ0IDM1MC4zNTUgMTQ0IDM2OFMxMjkuNjQ1IDQwMCAxMTIgNDAwWk03Mi41MzEgMTkyLjAzMUM2OC4wOTQgMTkxLjUgNjQuMzQ0IDE5NS4wMzEgNjQuMDMxIDE5OS40NjlDNjMuNzE5IDIwMy44NzUgNjcuMDYzIDIwNy42ODggNzEuNDY5IDIwNy45NjlDMTc4LjUgMjE1LjI4MSAyNjQuNzE5IDMwMS41IDI3Mi4wMzEgNDA4LjUzMUMyNzIuMzEyIDQxMi43ODEgMjc1LjgxMiA0MTYgMjgwIDQxNkMyODAuMTg4IDQxNiAyODAuMzQ0IDQxNiAyODAuNTMxIDQxNS45NjlDMjg0LjkzOCA0MTUuNjg3IDI4OC4yODEgNDExLjg3NSAyODcuOTY5IDQwNy40NjlDMjgwLjE1NiAyOTIuNDY5IDE4Ny41MzEgMTk5Ljg0NCA3Mi41MzEgMTkyLjAzMVpNNzIuMzc1IDk2QzY4LjIxOSA5Ni4zMTIgNjQuMjE5IDk5LjIxOSA2NCAxMDMuNjI1UzY3LjE4OCAxMTEuNzgxIDcxLjYyNSAxMTJDMjMyLjg0NCAxMTkuNzUgMzYwLjI1IDI0Ny4xNTYgMzY4IDQwOC4zNzVDMzY4LjIxOSA0MTIuNjU2IDM3MS43NSA0MTYgMzc2IDQxNkgzNzYuMzc1QzM4MC44MTIgNDE1Ljc4MSAzODQuMjE5IDQxMi4wMzEgMzg0IDQwNy42MjVDMzc1Ljg0NCAyMzguMTI1IDI0MS44NzUgMTA0LjE1NiA3Mi4zNzUgOTZaTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ4IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0OCAzMiAzODQgMzJaTTQzMiA0MTZDNDMyIDQ0Mi40NjcgNDEwLjQ2NyA0NjQgMzg0IDQ2NEg2NEMzNy41MzMgNDY0IDE2IDQ0Mi40NjcgMTYgNDE2Vjk2QzE2IDY5LjUzMyAzNy41MzMgNDggNjQgNDhIMzg0QzQxMC40NjcgNDggNDMyIDY5LjUzMyA0MzIgOTZWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareRss(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M112 320C85.49 320 64 341.49 64 368S85.49 416 112 416S160 394.51 160 368S138.51 320 112 320ZM112 400C94.355 400 80 385.645 80 368S94.355 336 112 336S144 350.355 144 368S129.645 400 112 400ZM72.531 192.031C68.094 191.5 64.344 195.031 64.031 199.469C63.719 203.875 67.063 207.688 71.469 207.969C178.5 215.281 264.719 301.5 272.031 408.531C272.312 412.781 275.812 416 280 416C280.188 416 280.344 416 280.531 415.969C284.938 415.687 288.281 411.875 287.969 407.469C280.156 292.469 187.531 199.844 72.531 192.031ZM72.375 96C68.219 96.312 64.219 99.219 64 103.625S67.188 111.781 71.625 112C232.844 119.75 360.25 247.156 368 408.375C368.219 412.656 371.75 416 376 416H376.375C380.812 415.781 384.219 412.031 384 407.625C375.844 238.125 241.875 104.156 72.375 96ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416Z" />
        </Icon>
    </>
}