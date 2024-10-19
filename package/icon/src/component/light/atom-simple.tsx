
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `atom-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/atom-simple?s=light atom-simple}
 * @preview ![atom-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjYuODcxIDUzLjQ5NEM0MDAuMTIzIDI2Ljg2NyAzNTMuNDk4IDI0Ljg2NyAyOTUuNSA0OC4xMTdDMjcyLjI1MiA1Ny4zNjkgMjQ4LjEyNyA3MC43NDQgMjI0LjAwNCA4Ni42MTlDMTk5Ljg3OSA3MC43NDQgMTc1Ljc1NiA1Ny4zNjkgMTUyLjYzMSA0OC4xMTdDOTQuNTA3IDI0Ljg2NyA0Ny44ODQgMjYuODY3IDIxLjEzNCA1My40OTRDLTE3LjIzOSA5MS43NDQgLTEuNjE0IDE3MS40OTQgNTMuODg0IDI1NS45OTZDLTEuNjE0IDM0MC40OTggLTE3LjIzOSA0MjAuMjQ4IDIxLjEzNCA0NTguNUMzNS41MDkgNDcyLjg3NSA1NS42MzQgNDgwIDgwLjEzMiA0ODBDMTAxLjI1NyA0ODAgMTI1Ljc1NiA0NzQuNjI1IDE1Mi42MzEgNDY0QzE3NS43NTYgNDU0Ljc1IDE5OS44NzkgNDQxLjI1IDIyNC4wMDQgNDI1LjM3NUMyNDguMTI3IDQ0MS4yNSAyNzIuMjUyIDQ1NC43NSAyOTUuNSA0NjRDMzIyLjI1IDQ3NC42MjUgMzQ2LjYyNSA0ODAgMzY3Ljg3MyA0ODBDMzkyLjM3MyA0ODAgNDEyLjQ5NiA0NzIuODc1IDQyNi44NzEgNDU4LjVDNDY1LjI0NiA0MjAuMjQ4IDQ0OS42MjEgMzQwLjQ5OCAzOTMuOTk4IDI1NS45OTZDNDQ5LjYyMSAxNzEuNDk0IDQ2NS4yNDYgOTEuNzQ0IDQyNi44NzEgNTMuNDk0Wk0zMDcuMzc1IDc3Ljc0NEMzNTIuMTIzIDU5Ljk5NCAzODcuMzczIDU5LjM2OSA0MDQuMjQ4IDc2LjExOUM0MjcuMTIxIDk4Ljk5NCA0MTcuMTIxIDE1OC40OTQgMzc0LjI0OCAyMjcuNzQ2QzM1Ni44NzMgMjA0Ljc0NiAzMzcuODc1IDE4My4xMjEgMzE3LjM3NSAxNjIuNzQ0QzI5NyAxNDIuNjE5IDI3NS4yNTIgMTIzLjg2OSAyNTIuMjUyIDEwNi43NDRDMjcxLjAwMiA5NS4xMTkgMjg5LjUwMiA4NC44NjkgMzA3LjM3NSA3Ny43NDRaTTQzLjc1OSA3Ni4xMTlDNTIuMDA5IDY3Ljk5NCA2NC4zODIgNjMuOTk0IDgwLjI1NyA2My45OTRDOTcuMDA3IDYzLjk5NCAxMTcuNjMxIDY4LjYxOSAxNDAuNjMxIDc3Ljc0NEMxNTguNTA2IDg0Ljg2OSAxNzcuMTI5IDk1LjExOSAxOTUuNzU0IDEwNi43NDRDMTQ5LjUwNiAxNDEuMTE5IDEwOC41MDcgMTgxLjg3MSA3My43NTcgMjI3Ljc0NkMzMC44ODQgMTU4LjQ5NCAyMC44ODQgOTkuMTE5IDQzLjc1OSA3Ni4xMTlaTTE0MC42MzEgNDM0LjI1Qzk2LjAwNyA0NTIuMTI1IDYwLjc1NyA0NTIuNjI1IDQzLjc1OSA0MzUuODc1QzIwLjg4NCA0MTIuOTk4IDMwLjg4NCAzNTMuNDk4IDczLjc1NyAyODQuMjQ2QzkxLjEzMiAzMDcuMjQ4IDExMC4xMzIgMzI4Ljg3MyAxMzAuNjMxIDM0OS4yNDhDMTUxLjAwNiAzNjkuMzczIDE3Mi43NTYgMzg4LjEyMyAxOTUuNzU0IDQwNS4zNzNDMTc3LjEyOSA0MTYuODczIDE1OC41MDYgNDI3LjEyNSAxNDAuNjMxIDQzNC4yNVpNMTUzLjI1NiAzMjYuNjIzQzEzMS4yNTYgMzA0Ljc0OCAxMTEuMDA3IDI4MS4xMjEgOTIuODgyIDI1NS45OTZDMTExLjAwNyAyMzAuODcxIDEzMS4yNTYgMjA3LjI0NiAxNTMuMjU2IDE4NS4zNzFDMTc1LjEzMSAxNjMuNDk0IDE5OC44NzkgMTQzLjM2OSAyMjQuMDA0IDEyNS4yNDRDMjQ5LjEyNyAxNDMuMzY5IDI3Mi43NTIgMTYzLjQ5NCAyOTQuNzUgMTg1LjM3MUMzMTYuNzUgMjA3LjI0NiAzMzcgMjMwLjg3MSAzNTUuMTIzIDI1NS45OTZDMzM3IDI4MS4xMjEgMzE2Ljc1IDMwNC43NDggMjk0Ljc1IDMyNi42MjNDMjcyLjc1MiAzNDguNDk4IDI0OS4xMjcgMzY4LjYyMyAyMjQuMDA0IDM4Ni43NDhDMTk4Ljg3OSAzNjguNjIzIDE3NS4yNTYgMzQ4LjQ5OCAxNTMuMjU2IDMyNi42MjNaTTQwNC4yNDggNDM1Ljg3NUMzODcuMzczIDQ1Mi42MjUgMzUxLjk5OCA0NTIuMTI1IDMwNy4zNzUgNDM0LjI1QzI4OS41MDIgNDI3LjEyNSAyNzAuODc3IDQxNi44NzMgMjUyLjI1MiA0MDUuMzczQzI3NS4yNTIgMzg4LjEyMyAyOTcgMzY5LjM3MyAzMTcuMzc1IDM0OS4yNDhDMzM3Ljg3NSAzMjguODczIDM1Ni44NzMgMzA3LjI0OCAzNzQuMjQ4IDI4NC4yNDZDNDE3LjEyMSAzNTMuNDk4IDQyNy4xMjEgNDEyLjk5OCA0MDQuMjQ4IDQzNS44NzVaTTIyNCAyMzJDMjEwLjc1IDIzMiAyMDAgMjQyLjcyMyAyMDAgMjU2LjA2MkMxOTkuODc1IDI2OS4yNzcgMjEwLjc1IDI4MCAyMjQgMjgwQzIzMC4zNzUgMjgwIDIzNi41IDI3Ny41MDYgMjQxIDI3My4wMThTMjQ4IDI2Mi40MiAyNDggMjU2LjA2MkMyNDggMjQyLjg0OCAyMzcuMjUgMjMyIDIyNCAyMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function AtomSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M426.871 53.494C400.123 26.867 353.498 24.867 295.5 48.117C272.252 57.369 248.127 70.744 224.004 86.619C199.879 70.744 175.756 57.369 152.631 48.117C94.507 24.867 47.884 26.867 21.134 53.494C-17.239 91.744 -1.614 171.494 53.884 255.996C-1.614 340.498 -17.239 420.248 21.134 458.5C35.509 472.875 55.634 480 80.132 480C101.257 480 125.756 474.625 152.631 464C175.756 454.75 199.879 441.25 224.004 425.375C248.127 441.25 272.252 454.75 295.5 464C322.25 474.625 346.625 480 367.873 480C392.373 480 412.496 472.875 426.871 458.5C465.246 420.248 449.621 340.498 393.998 255.996C449.621 171.494 465.246 91.744 426.871 53.494ZM307.375 77.744C352.123 59.994 387.373 59.369 404.248 76.119C427.121 98.994 417.121 158.494 374.248 227.746C356.873 204.746 337.875 183.121 317.375 162.744C297 142.619 275.252 123.869 252.252 106.744C271.002 95.119 289.502 84.869 307.375 77.744ZM43.759 76.119C52.009 67.994 64.382 63.994 80.257 63.994C97.007 63.994 117.631 68.619 140.631 77.744C158.506 84.869 177.129 95.119 195.754 106.744C149.506 141.119 108.507 181.871 73.757 227.746C30.884 158.494 20.884 99.119 43.759 76.119ZM140.631 434.25C96.007 452.125 60.757 452.625 43.759 435.875C20.884 412.998 30.884 353.498 73.757 284.246C91.132 307.248 110.132 328.873 130.631 349.248C151.006 369.373 172.756 388.123 195.754 405.373C177.129 416.873 158.506 427.125 140.631 434.25ZM153.256 326.623C131.256 304.748 111.007 281.121 92.882 255.996C111.007 230.871 131.256 207.246 153.256 185.371C175.131 163.494 198.879 143.369 224.004 125.244C249.127 143.369 272.752 163.494 294.75 185.371C316.75 207.246 337 230.871 355.123 255.996C337 281.121 316.75 304.748 294.75 326.623C272.752 348.498 249.127 368.623 224.004 386.748C198.879 368.623 175.256 348.498 153.256 326.623ZM404.248 435.875C387.373 452.625 351.998 452.125 307.375 434.25C289.502 427.125 270.877 416.873 252.252 405.373C275.252 388.123 297 369.373 317.375 349.248C337.875 328.873 356.873 307.248 374.248 284.246C417.121 353.498 427.121 412.998 404.248 435.875ZM224 232C210.75 232 200 242.723 200 256.062C199.875 269.277 210.75 280 224 280C230.375 280 236.5 277.506 241 273.018S248 262.42 248 256.062C248 242.848 237.25 232 224 232Z" />
        </Icon>
    </>
}