
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brake-warning` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=light brake-warning}
 * @preview ![brake-warning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMzJDMTk2LjI4OSAzMiA5NiAxMzIuMjg5IDk2IDI1NlMxOTYuMjg5IDQ4MCAzMjAgNDgwQzQ0My43MTMgNDgwIDU0NCAzNzkuNzExIDU0NCAyNTZTNDQzLjcxMyAzMiAzMjAgMzJaTTMyMCA0NDhDMjE0LjEzMSA0NDggMTI4IDM2MS44NjkgMTI4IDI1NlMyMTQuMTMxIDY0IDMyMCA2NFM1MTIgMTUwLjEzMSA1MTIgMjU2UzQyNS44NjkgNDQ4IDMyMCA0NDhaTTMyMCAzMjhDMzA2Ljc0NiAzMjggMjk2IDMzOC43NDYgMjk2IDM1MlMzMDYuNzQ2IDM3NiAzMjAgMzc2QzMzMy4yNTYgMzc2IDM0NCAzNjUuMjU0IDM0NCAzNTJTMzMzLjI1NiAzMjggMzIwIDMyOFpNMzIwIDI4OEMzMjguODQ0IDI4OCAzMzYgMjgwLjg0NCAzMzYgMjcyVjE0NEMzMzYgMTM1LjE1NiAzMjguODQ0IDEyOCAzMjAgMTI4UzMwNCAxMzUuMTU2IDMwNCAxNDRWMjcyQzMwNCAyODAuODQ0IDMxMS4xNTYgMjg4IDMyMCAyODhaTTkwLjI1IDY3LjcwM0M4My41IDYyLjA5NCA3My40MDYgNjIuOTUzIDY3LjcxOSA2OS43NUMyNC4wMzEgMTIyLjE0MSAwIDE4OC4yODEgMCAyNTZTMjQuMDMxIDM4OS44NTkgNjcuNzE5IDQ0Mi4yNUM3MC44NzUgNDQ2LjA0NyA3NS40MzggNDQ4IDgwIDQ0OEM4My42MjUgNDQ4IDg3LjI1IDQ0Ni43ODEgOTAuMjUgNDQ0LjI5N0M5Ny4wMzEgNDM4LjYyNSA5Ny45MzggNDI4LjU0NyA5Mi4yODEgNDIxLjc1QzUzLjQwNiAzNzUuMTA5IDMyIDMxNi4yNSAzMiAyNTZTNTMuNDA2IDEzNi44OTEgOTIuMjgxIDkwLjI1Qzk3LjkzOCA4My40NTMgOTcuMDMxIDczLjM3NSA5MC4yNSA2Ny43MDNaTTU3Mi4yODEgNjkuNzVDNTY2LjYyNSA2Mi45MjIgNTU2LjUgNjIuMDk0IDU0OS43NSA2Ny43MDNDNTQyLjk2OSA3My4zNzUgNTQyLjA2MiA4My40NTMgNTQ3LjcxOSA5MC4yNUM1ODYuNTk0IDEzNi44OTEgNjA4IDE5NS43NSA2MDggMjU2UzU4Ni41OTQgMzc1LjEwOSA1NDcuNzE5IDQyMS43NUM1NDIuMDYyIDQyOC41NDcgNTQyLjk2OSA0MzguNjI1IDU0OS43NSA0NDQuMjk3QzU1Mi43NSA0NDYuNzgxIDU1Ni4zNzUgNDQ4IDU2MCA0NDhDNTY0LjU2MiA0NDggNTY5LjEyNSA0NDYuMDQ3IDU3Mi4yODEgNDQyLjI1QzYxNS45NjkgMzg5Ljg1OSA2NDAgMzIzLjcxOSA2NDAgMjU2UzYxNS45NjkgMTIyLjE0MSA1NzIuMjgxIDY5Ljc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BrakeWarning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M320 32C196.289 32 96 132.289 96 256S196.289 480 320 480C443.713 480 544 379.711 544 256S443.713 32 320 32ZM320 448C214.131 448 128 361.869 128 256S214.131 64 320 64S512 150.131 512 256S425.869 448 320 448ZM320 328C306.746 328 296 338.746 296 352S306.746 376 320 376C333.256 376 344 365.254 344 352S333.256 328 320 328ZM320 288C328.844 288 336 280.844 336 272V144C336 135.156 328.844 128 320 128S304 135.156 304 144V272C304 280.844 311.156 288 320 288ZM90.25 67.703C83.5 62.094 73.406 62.953 67.719 69.75C24.031 122.141 0 188.281 0 256S24.031 389.859 67.719 442.25C70.875 446.047 75.438 448 80 448C83.625 448 87.25 446.781 90.25 444.297C97.031 438.625 97.938 428.547 92.281 421.75C53.406 375.109 32 316.25 32 256S53.406 136.891 92.281 90.25C97.938 83.453 97.031 73.375 90.25 67.703ZM572.281 69.75C566.625 62.922 556.5 62.094 549.75 67.703C542.969 73.375 542.062 83.453 547.719 90.25C586.594 136.891 608 195.75 608 256S586.594 375.109 547.719 421.75C542.062 428.547 542.969 438.625 549.75 444.297C552.75 446.781 556.375 448 560 448C564.562 448 569.125 446.047 572.281 442.25C615.969 389.859 640 323.719 640 256S615.969 122.141 572.281 69.75Z" />
        </Icon>
    </>
}