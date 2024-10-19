
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `users-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/users-slash?s=solid users-slash}
 * @preview ![users-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTYwQzU1Ni4xODQgMTYwIDU5MiAxMjQuMTgyIDU5MiA4MFM1NTYuMTg0IDAgNTEyIDBDNDY3LjgyIDAgNDMyIDM1LjgxOCA0MzIgODBTNDY3LjgyIDE2MCA1MTIgMTYwWk00OTAuMDggMTkyQzQ3Ny4yNzkgMTkyIDQ2NS4xOTUgMTk1LjAzNyA0NTQuMjIxIDIwMC4yNEM0NTQuODM0IDIwNS40NzUgNDU1LjgxNCAyMTAuNjA0IDQ1NS44MTQgMjE2QzQ1NS44MTQgMjQ5LjcxNSA0NDMuMDMzIDI4MC4yMTEgNDIyLjY1IDMwNEg2MjIuMzg1QzYzMi4xMTMgMzA0IDY0MCAyOTUuNjQxIDY0MCAyODUuMzMyQzY0MCAyMzMuNzg1IDYwMC41NjYgMTkyIDU1MS45MiAxOTJINDkwLjA4Wk0zOTYuNTY2IDI4NS41MDZDNDEzLjM3OSAyNjcuMTUgNDIzLjgxNCAyNDIuOTA2IDQyMy44MTQgMjE2QzQyMy44MTQgMTU4LjU2MiAzNzcuMjczIDExMiAzMTkuODU5IDExMkMyODMuOTI4IDExMiAyNTIuNzg5IDEzMC41MjcgMjM0LjI3IDE1OC4zMDNMMTkzLjEyMyAxMjYuMDUzQzIwMi40MzggMTEzLjA3NCAyMDggOTcuMjQgMjA4IDgwQzIwOCAzNS44MTggMTcyLjE4NCAwIDEyOCAwQzEwMy44MjggMCA4Mi41MjEgMTAuOTczIDY3Ljk1OSAyNy45NTFMMzguODE0IDUuMTA5QzM0LjQwOCAxLjY3MiAyOS4xODkgMCAyNC4wMzMgMEMxNi45MDggMCA5Ljg0NiAzLjE1NiA1LjEyNyA5LjE4OEMtMy4wNjEgMTkuNjI1IC0xLjI0OCAzNC43MTcgOS4xODkgNDIuODg5TDYwMS4xODYgNTA2Ljg4M0M2MTEuNjg2IDUxNS4wODYgNjI2Ljc0OCA1MTMuMjExIDYzNC44NzMgNTAyLjgwNUM2NDMuMDYxIDQ5Mi4zNjcgNjQxLjI0OCA0NzcuMjczIDYzMC44MTEgNDY5LjEwMkwzOTYuNTY2IDI4NS41MDZaTTI3MC4xMTMgMzUyQzE5MS42MzEgMzUyIDEyOCA0MTEuNjkzIDEyOCA0ODUuMzMyQzEyOCA1MDAuMDU5IDE0MC43MjcgNTEyIDE1Ni40MjIgNTEySDQ4My41NzhDNDk1LjE5NyA1MTIgNTA1LjEyMSA1MDUuNDE2IDUwOS41MjcgNDk2LjA0MUwzMjUuNzQ4IDM1MkgyNzAuMTEzWk0xODYuOTY5IDI0My4yMjdMMTIxLjYwNyAxOTJIODguMDhDMzkuNDM4IDE5MiAwIDIzMy43ODUgMCAyODUuMzMyQzAgMjk1LjY0MSA3Ljg4NyAzMDQgMTcuNjE1IDMwNEgyMTcuMDdDMjAyLjM1NyAyODYuODI4IDE5MS44MTIgMjY2LjA3NiAxODYuOTY5IDI0My4yMjdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UsersSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM490.08 192C477.279 192 465.195 195.037 454.221 200.24C454.834 205.475 455.814 210.604 455.814 216C455.814 249.715 443.033 280.211 422.65 304H622.385C632.113 304 640 295.641 640 285.332C640 233.785 600.566 192 551.92 192H490.08ZM396.566 285.506C413.379 267.15 423.814 242.906 423.814 216C423.814 158.562 377.273 112 319.859 112C283.928 112 252.789 130.527 234.27 158.303L193.123 126.053C202.438 113.074 208 97.24 208 80C208 35.818 172.184 0 128 0C103.828 0 82.521 10.973 67.959 27.951L38.814 5.109C34.408 1.672 29.189 0 24.033 0C16.908 0 9.846 3.156 5.127 9.188C-3.061 19.625 -1.248 34.717 9.189 42.889L601.186 506.883C611.686 515.086 626.748 513.211 634.873 502.805C643.061 492.367 641.248 477.273 630.811 469.102L396.566 285.506ZM270.113 352C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H483.578C495.197 512 505.121 505.416 509.527 496.041L325.748 352H270.113ZM186.969 243.227L121.607 192H88.08C39.438 192 0 233.785 0 285.332C0 295.641 7.887 304 17.615 304H217.07C202.357 286.828 191.812 266.076 186.969 243.227Z" />
        </Icon>
    </>
}