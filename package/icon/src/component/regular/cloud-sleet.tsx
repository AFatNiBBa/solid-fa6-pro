
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-sleet` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-sleet?s=regular cloud-sleet}
 * @preview ![cloud-sleet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQuNzY0IDIxMkM1NDQuNzY0IDE1NC43NSA0OTkuODg5IDEwNy43NSA0NDMuNTE0IDEwNC4yNUM0MzAuMDEyIDYxLjc1IDM5MC43NjIgMzIgMzQ0Ljc2NCAzMkMzMzEuMjY0IDMyIDMxOC4wMTIgMzQuNjI1IDMwNS41MTQgMzkuNzVDMjgzLjAxNCAxNC41IDI1MS4xMzkgMCAyMTYuNzY0IDBDMTUyLjc2NCAwIDEwMC4zODkgNTAuMjUgOTcuMDE0IDExMy4zNzVDNTguMzg5IDEzMC4zNzUgMzIuNzY0IDE2OC41IDMyLjc2NCAyMTJDMzIuNzY0IDI3MS41IDgxLjEzOSAzMjAgMTQwLjc2NCAzMjBINDM2Ljc2NEM0OTYuMzg5IDMyMCA1NDQuNzY0IDI3MS41IDU0NC43NjQgMjEyWk04MC43NjQgMjEyQzgwLjc2NCAxODQgOTkuODg5IDE2MCAxMjcuMTM5IDE1My43NUwxNDcuODg5IDE0OC44NzVMMTQ1LjEzOSAxMjRDMTQ1LjAxNCAxMjIuNzUgMTQ0Ljc2NCAxMjEuMzc1IDE0NC43NjQgMTIwQzE0NC43NjQgODAuMjUgMTc3LjAxNCA0OCAyMTYuNzY0IDQ4QzI0Mi4wMTQgNDggMjY1LjAxNCA2MS4xMjUgMjc4LjEzOSA4My4xMjVMMjkxLjUxNCAxMDUuMjVMMzEyLjUxNCA5MC4yNUMzMjIuMTM5IDgzLjYyNSAzMzMuMjY0IDgwIDM0NC43NjQgODBDMzczLjM4OSA4MCAzOTcuMTM5IDEwMS43NSA0MDAuMDEyIDEzMC4zNzVMNDAyLjI2NCAxNTJINDM2Ljc2NEM0NjkuODg5IDE1MiA0OTYuNzY0IDE3OC44NzUgNDk2Ljc2NCAyMTJTNDY5Ljg4OSAyNzIgNDM2Ljc2NCAyNzJIMTQwLjc2NEMxMDcuNjM5IDI3MiA4MC43NjQgMjQ1LjEyNSA4MC43NjQgMjEyWk0xMTMuNDYxIDM1My45MzhDMTAxLjI3NCAzNDguNzE5IDg3LjE2NCAzNTQuMzQ0IDgxLjk0NiAzNjYuNTMxTDMzLjk0NiA0NzguNTMxQzI4LjcyNyA0OTAuNzE5IDM0LjM2NyA1MDQuODQ0IDQ2LjU1NSA1MTAuMDYzQzQ5LjYzMyA1MTEuMzc1IDUyLjgzNiA1MTIgNTUuOTkyIDUxMkM2NS4zMDUgNTEyIDc0LjE2NCA1MDYuNTYyIDc4LjA3MSA0OTcuNDY5TDEyNi4wNzEgMzg1LjQ2OUMxMzEuMjg5IDM3My4yODEgMTI1LjY0OSAzNTkuMTU2IDExMy40NjEgMzUzLjkzOFpNMzg1LjQ2MSAzNTMuOTM4QzM3My4yNDIgMzQ4LjcxOSAzNTkuMTggMzU0LjM0NCAzNTMuOTQ2IDM2Ni41MzFMMzA1Ljk0NiA0NzguNTMxQzMwMC43MjcgNDkwLjcxOSAzMDYuMzY3IDUwNC44NDQgMzE4LjU1NSA1MTAuMDYzQzMyMS42MzMgNTExLjM3NSAzMjQuODM2IDUxMiAzMjcuOTkyIDUxMkMzMzcuMzA1IDUxMiAzNDYuMTY0IDUwNi41NjIgMzUwLjA3MSA0OTcuNDY5TDM5OC4wNzEgMzg1LjQ2OUM0MDMuMjg5IDM3My4yODEgMzk3LjY0OSAzNTkuMTU2IDM4NS40NjEgMzUzLjkzOFpNNTIwLjAwOCAzOTJINTA0LjAwOFYzNzZDNTA0LjAwOCAzNjIuNzUgNDkzLjI1OCAzNTIgNDgwLjAwOCAzNTJTNDU2LjAwOCAzNjIuNzUgNDU2LjAwOCAzNzZWMzkySDQ0MC4wMDhDNDI2Ljc1OCAzOTIgNDE2LjAwOCA0MDIuNzUgNDE2LjAwOCA0MTZTNDI2Ljc1OCA0NDAgNDQwLjAwOCA0NDBINDU2LjAwOFY0NTZDNDU2LjAwOCA0NjkuMjUgNDY2Ljc1OCA0ODAgNDgwLjAwOCA0ODBTNTA0LjAwOCA0NjkuMjUgNTA0LjAwOCA0NTZWNDQwSDUyMC4wMDhDNTMzLjI1OCA0NDAgNTQ0LjAwOCA0MjkuMjUgNTQ0LjAwOCA0MTZTNTMzLjI1OCAzOTIgNTIwLjAwOCAzOTJaTTI2NC4wMDggMzkySDI0OC4wMDhWMzc2QzI0OC4wMDggMzYyLjc1IDIzNy4yNTggMzUyIDIyNC4wMDggMzUyUzIwMC4wMDggMzYyLjc1IDIwMC4wMDggMzc2VjM5MkgxODQuMDA4QzE3MC43NTggMzkyIDE2MC4wMDggNDAyLjc1IDE2MC4wMDggNDE2UzE3MC43NTggNDQwIDE4NC4wMDggNDQwSDIwMC4wMDhWNDU2QzIwMC4wMDggNDY5LjI1IDIxMC43NTggNDgwIDIyNC4wMDggNDgwUzI0OC4wMDggNDY5LjI1IDI0OC4wMDggNDU2VjQ0MEgyNjQuMDA4QzI3Ny4yNTggNDQwIDI4OC4wMDggNDI5LjI1IDI4OC4wMDggNDE2UzI3Ny4yNTggMzkyIDI2NC4wMDggMzkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CloudSleet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M544.764 212C544.764 154.75 499.889 107.75 443.514 104.25C430.012 61.75 390.762 32 344.764 32C331.264 32 318.012 34.625 305.514 39.75C283.014 14.5 251.139 0 216.764 0C152.764 0 100.389 50.25 97.014 113.375C58.389 130.375 32.764 168.5 32.764 212C32.764 271.5 81.139 320 140.764 320H436.764C496.389 320 544.764 271.5 544.764 212ZM80.764 212C80.764 184 99.889 160 127.139 153.75L147.889 148.875L145.139 124C145.014 122.75 144.764 121.375 144.764 120C144.764 80.25 177.014 48 216.764 48C242.014 48 265.014 61.125 278.139 83.125L291.514 105.25L312.514 90.25C322.139 83.625 333.264 80 344.764 80C373.389 80 397.139 101.75 400.012 130.375L402.264 152H436.764C469.889 152 496.764 178.875 496.764 212S469.889 272 436.764 272H140.764C107.639 272 80.764 245.125 80.764 212ZM113.461 353.938C101.274 348.719 87.164 354.344 81.946 366.531L33.946 478.531C28.727 490.719 34.367 504.844 46.555 510.063C49.633 511.375 52.836 512 55.992 512C65.305 512 74.164 506.562 78.071 497.469L126.071 385.469C131.289 373.281 125.649 359.156 113.461 353.938ZM385.461 353.938C373.242 348.719 359.18 354.344 353.946 366.531L305.946 478.531C300.727 490.719 306.367 504.844 318.555 510.063C321.633 511.375 324.836 512 327.992 512C337.305 512 346.164 506.562 350.071 497.469L398.071 385.469C403.289 373.281 397.649 359.156 385.461 353.938ZM520.008 392H504.008V376C504.008 362.75 493.258 352 480.008 352S456.008 362.75 456.008 376V392H440.008C426.758 392 416.008 402.75 416.008 416S426.758 440 440.008 440H456.008V456C456.008 469.25 466.758 480 480.008 480S504.008 469.25 504.008 456V440H520.008C533.258 440 544.008 429.25 544.008 416S533.258 392 520.008 392ZM264.008 392H248.008V376C248.008 362.75 237.258 352 224.008 352S200.008 362.75 200.008 376V392H184.008C170.758 392 160.008 402.75 160.008 416S170.758 440 184.008 440H200.008V456C200.008 469.25 210.758 480 224.008 480S248.008 469.25 248.008 456V440H264.008C277.258 440 288.008 429.25 288.008 416S277.258 392 264.008 392Z" />
        </Icon>
    </>
}