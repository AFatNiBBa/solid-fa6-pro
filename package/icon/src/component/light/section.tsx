
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `section` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/section?s=light section}
 * @preview ![section](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDMuOTM0IDM0Mi41OTZDMjMwLjg5MyAzMjkuNTY2IDI0OS4yNTYgMzA4LjY2MiAyNTQuMjY0IDI4MC42NTRDMjY4LjQ0OCAyMDEuMTg4IDE5Mi45MDUgMTgwLjI1OCAxMzIuMjAyIDE2My40MkwxMTcuNDg3IDE1OS4zMjhDNTQuMzE3IDE0MS4zMDUgMjUuNjA2IDEyNS4yNDggMzMuMTk4IDgyLjc2NkM0MS42OTYgMzUuMDM1IDEwMy40OTEgMjcuMSAxNTQuMTY1IDM0LjY5MUMxNjguMzE3IDM2Ljg0NiAxODUuMDYzIDQxLjI1MiAyMDYuODcgNDguNTYxQzIxNS4zMDUgNTEuNTI3IDIyNC4zMDMgNDYuODczIDIyNy4xMTQgMzguNTAyQzIyOS45MjYgMzAuMTMxIDIyNS40MjggMjEuMDcyIDIxNy4wNTUgMTguMjZDMTkzLjQ2NyAxMC4zMjYgMTc1LjAwNSA1LjQ4NCAxNTguOTQ2IDMuMDc4QzczLjgxMSAtOS45NzkgMTIuMDc5IDE5LjE5NyAxLjcwNiA3Ny4xNDNDLTcuMDc0IDEyNi4yMTcgMTkuMzIzIDE1My4wNDEgNTEuNDA5IDE2OS40MDhDMjQuNjE2IDE4Mi4zOTEgNi42OTIgMjAzLjQ1MSAxLjcwNiAyMzEuMzYxQy0xMi4zMjIgMzA5LjgzIDYzLjQ3MSAzMzEuNDE2IDEwOC43NDEgMzQ0LjI4NUwxMjMuNjQzIDM0OC40NzFDMTkwLjcxNyAzNjcuMDU5IDIzMS4zOTUgMzgwLjg5NiAyMjIuNzcyIDQyOS4yNTJDMjE0LjI3NCA0NzYuOTgyIDE1Mi4yNiA0ODUuMDEgMTAxLjc0MyA0NzcuMjk1Qzc5LjgxMSA0NzQuMTA5IDU0LjUwNSA0NjUuMjY4IDMyLjE5OCA0NTcuNDU5TDIxLjIzMyA0NTMuNjQ4QzEyLjc5OCA0NTAuNzczIDMuNzY4IDQ1NS4yMDkgMC44OTUgNDYzLjU1MUMtMS45OCA0NzEuOTIyIDIuNDU2IDQ4MS4wMTIgMTAuNzk4IDQ4My44ODdMMjEuNjM5IDQ4Ny42NjZDNDUuMjg4IDQ5NS45NDMgNzIuMTI2IDUwNS4zMTQgOTcuMDI0IDUwOC45MzdDMTEwLjQ4OSA1MTEgMTIzLjMzMSA1MTIgMTM1LjUxNCA1MTJDMjAwLjQwMyA1MTIgMjQ1LjU0OCA0ODMuNjY4IDI1NC4yNjQgNDM0Ljg3NUMyNjIuODk5IDM4Ni40OTQgMjM4LjIxNyAzNTkuODY5IDIwMy45MzQgMzQyLjU5NlpNMzMuMTk4IDIzNi45ODRDMzguMDkyIDIwOS42NDEgNjMuMDIgMTkyLjQ1OSAxMDAuOTYyIDE4Ny44MzJDMTAzLjYyNCAxODguNjA0IDEwNi4yNDUgMTg5LjM1NSAxMDguNzQxIDE5MC4wNjZMMTIzLjY0MyAxOTQuMjUyQzE5MC43MTcgMjEyLjgzOCAyMzEuMzk1IDIyNi42NzYgMjIyLjc3MiAyNzUuMDMxQzIxNy44OTcgMzAyLjI2NiAxOTMuMjA4IDMxOS42NzggMTU1LjUwMyAzMjQuMjY2QzE0Ny42MzkgMzIxLjkyMiAxMzkuODAzIDMxOS43NSAxMzIuMjAyIDMxNy42NDFMMTE3LjQ4NyAzMTMuNTQ5QzU1LjY2MSAyOTUuOTMgMjUuNjM3IDI3OS4yNSAzMy4xOTggMjM2Ljk4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Section(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M203.934 342.596C230.893 329.566 249.256 308.662 254.264 280.654C268.448 201.188 192.905 180.258 132.202 163.42L117.487 159.328C54.317 141.305 25.606 125.248 33.198 82.766C41.696 35.035 103.491 27.1 154.165 34.691C168.317 36.846 185.063 41.252 206.87 48.561C215.305 51.527 224.303 46.873 227.114 38.502C229.926 30.131 225.428 21.072 217.055 18.26C193.467 10.326 175.005 5.484 158.946 3.078C73.811 -9.979 12.079 19.197 1.706 77.143C-7.074 126.217 19.323 153.041 51.409 169.408C24.616 182.391 6.692 203.451 1.706 231.361C-12.322 309.83 63.471 331.416 108.741 344.285L123.643 348.471C190.717 367.059 231.395 380.896 222.772 429.252C214.274 476.982 152.26 485.01 101.743 477.295C79.811 474.109 54.505 465.268 32.198 457.459L21.233 453.648C12.798 450.773 3.768 455.209 0.895 463.551C-1.98 471.922 2.456 481.012 10.798 483.887L21.639 487.666C45.288 495.943 72.126 505.314 97.024 508.937C110.489 511 123.331 512 135.514 512C200.403 512 245.548 483.668 254.264 434.875C262.899 386.494 238.217 359.869 203.934 342.596ZM33.198 236.984C38.092 209.641 63.02 192.459 100.962 187.832C103.624 188.604 106.245 189.355 108.741 190.066L123.643 194.252C190.717 212.838 231.395 226.676 222.772 275.031C217.897 302.266 193.208 319.678 155.503 324.266C147.639 321.922 139.803 319.75 132.202 317.641L117.487 313.549C55.661 295.93 25.637 279.25 33.198 236.984Z" />
        </Icon>
    </>
}