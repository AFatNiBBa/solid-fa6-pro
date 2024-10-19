
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-pdf` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-pdf?s=light file-pdf}
 * @preview ![file-pdf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTYgMCA2NFY0NDhDMCA0ODMuMzQ0IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NCAzODQgNDQ4VjE3MC41MDhDMzg0IDE1My41MzUgMzc3LjI1OCAxMzcuMjU4IDM2NS4yNTYgMTI1LjI1NFpNMjI0IDM0LjA3OEMyMjguNDc3IDM1LjY0MSAyMzIuNjY2IDM3LjkyMiAyMzYuMTE5IDQxLjM3NUwzNDIuNjI3IDE0Ny44NzlDMzQ2LjA4IDE1MS4zMzIgMzQ4LjM1NyAxNTUuNTIzIDM0OS45MjQgMTYwSDI0MEMyMzEuMTg4IDE2MCAyMjQgMTUyLjgyOCAyMjQgMTQ0VjM0LjA3OFpNMzUyIDQ0OEMzNTIgNDY1LjY0NSAzMzcuNjQ1IDQ4MCAzMjAgNDgwSDY0QzQ2LjM1NSA0ODAgMzIgNDY1LjY0NSAzMiA0NDhWNjRDMzIgNDYuMzU1IDQ2LjM1NSAzMiA2NCAzMkgxOTJWMTQ0QzE5MiAxNzAuNDY5IDIxMy41MzEgMTkyIDI0MCAxOTJIMzUyVjQ0OFpNMjAyLjczIDI4OS4xMjlDMjEyLjc5NSAyNTcuNDQ1IDIxMy4zMzQgMjMyLjA5IDIxMy4zMzQgMjI3LjA4MkMyMTMuMzM0IDIwNy43MzggMTk3LjM4MyAxOTIgMTc3Ljc3NyAxOTJTMTQyLjIyMyAyMDcuNzM4IDE0Mi4yMjMgMjI3LjA4MkMxNDIuMjIzIDIyNy4zOTEgMTQyLjM5NiAyNTYuNjg4IDE1Ni44MjIgMjkxLjA4NkMxNDkuNDI2IDMxMC43MTEgMTQwLjQ4OCAzMzAuNDE0IDEzMC4xODggMzQ5Ljc4OUMxMDcuMzkzIDM2MC4xOTUgODguNTggMzcyLjY0MSA3NC4yMTUgMzg2LjgyQzY3LjUzNyAzOTMuNDA2IDY0IDQwMi40NDEgNjQgNDEyLjk0NUM2NCA0MzIuMjczIDc5LjkyNiA0NDggOTkuNSA0NDhDMTEwLjgzNCA0NDggMTIxLjU1NSA0NDIuNjI1IDEyOC4xNzggNDMzLjYyMUMxMzQuNTE2IDQyNS4wMzkgMTQ2Ljg2NSA0MDcuNDU3IDE2MC40ODYgMzgzLjQyNkMxNzcuNTQxIDM3Ni44MDEgMTk2Ljg5NiAzNzEuMjUgMjE4LjE2IDM2Ni44OTFDMjMwLjIzMiAzNzQuODUyIDI2MC4wMzkgMzkyLjk0NSAyODEuNjY2IDM5Mi45NDVDMzAzLjE2MiAzOTIuOTQ1IDMyMCAzNzYuMDIgMzIwIDM1NC40MTRDMzIwIDMzMy4xNTYgMzAyLjQ1NSAzMTUuODU5IDI4MC44ODkgMzE1Ljg1OUMyNjQuODMyIDMxNS44NTkgMjQwLjM4MyAzMTkuNTE2IDIyOC42NzYgMzIxLjQyNkMyMTguMzM2IDMxMi4xOTUgMjA5LjYzOSAzMDEuMzcxIDIwMi43MyAyODkuMTI5Wk0xMDUuMjY0IDQxNi43NUMxMDEuODQ4IDQyMS40MTQgOTIuNDQ1IDQxOS42NDEgOTIuNDQ1IDQxMS41QzkyLjQ0NSA0MDkuNzc3IDkzLjA4NCA0MDguMTk1IDk0LjE5NSA0MDcuMDgyQzEwMy43MDkgMzk3LjY2NCAxMTUuMjIzIDM4OS42NDEgMTI3Ljc5MSAzODIuODA1QzExNy44NzUgMzk5LjE5NSAxMDkuNTcgNDEwLjkxNCAxMDUuMjY0IDQxNi43NVpNMTc3Ljc3NyAyMjAuNDQ1QzE4MS42OTUgMjIwLjQ0NSAxODQuODg5IDIyMy40MTQgMTg0Ljg4OSAyMjcuMDgyQzE4NC44ODkgMjQyLjY5NSAxODAuNTI3IDI2Mi44NTkgMTc4LjgwNSAyNzAuMjVDMTcwLjk0NSAyNDcuMTA5IDE3MC42NjYgMjI4Ljg1OSAxNzAuNjY2IDIyNy4wODJDMTcwLjY2NiAyMjMuNDE0IDE3My44NjEgMjIwLjQ0NSAxNzcuNzc3IDIyMC40NDVaTTE2MC42OCAzNTIuOTE0QzE2Ny42MTEgMzM5LjE2NCAxNzQuNTcgMzIzLjkxNCAxODEuMDE0IDMwNy40MTRDMTg3LjczNiAzMTguNTI3IDE5Ni4yNzcgMzI5LjY2NCAyMDcuMTY2IDMzOS45NzNDMTkyLjM4OSAzNDMuMTY0IDE3Ni40NzMgMzQ3LjM5MSAxNjAuNjggMzUyLjkxNFpNMjgwLjg4OSAzNDQuMzA1QzI4Ni43NjQgMzQ0LjMwNSAyOTEuNTU1IDM0OC44MzIgMjkxLjU1NSAzNTUuMTY0QzI5MS41NTUgMzYwLjMwNSAyODcuMTI1IDM2NC41IDI4MS42NjYgMzY0LjVDMjcyLjg1NyAzNjQuNSAyNTEuNDMyIDM1NC4yNDIgMjQxLjQ4NiAzNDguMzA1QzI0Mi4xMjEgMzQ4LjIwNyAyNjguMDQzIDM0NC4zMDUgMjgwLjg4OSAzNDQuMzA1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FilePdf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.656 0 64V448C0 483.344 28.654 512 64 512H320C355.348 512 384 483.344 384 448V170.508C384 153.535 377.258 137.258 365.256 125.254ZM224 34.078C228.477 35.641 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.078ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM202.73 289.129C212.795 257.445 213.334 232.09 213.334 227.082C213.334 207.738 197.383 192 177.777 192S142.223 207.738 142.223 227.082C142.223 227.391 142.396 256.688 156.822 291.086C149.426 310.711 140.488 330.414 130.188 349.789C107.393 360.195 88.58 372.641 74.215 386.82C67.537 393.406 64 402.441 64 412.945C64 432.273 79.926 448 99.5 448C110.834 448 121.555 442.625 128.178 433.621C134.516 425.039 146.865 407.457 160.486 383.426C177.541 376.801 196.896 371.25 218.16 366.891C230.232 374.852 260.039 392.945 281.666 392.945C303.162 392.945 320 376.02 320 354.414C320 333.156 302.455 315.859 280.889 315.859C264.832 315.859 240.383 319.516 228.676 321.426C218.336 312.195 209.639 301.371 202.73 289.129ZM105.264 416.75C101.848 421.414 92.445 419.641 92.445 411.5C92.445 409.777 93.084 408.195 94.195 407.082C103.709 397.664 115.223 389.641 127.791 382.805C117.875 399.195 109.57 410.914 105.264 416.75ZM177.777 220.445C181.695 220.445 184.889 223.414 184.889 227.082C184.889 242.695 180.527 262.859 178.805 270.25C170.945 247.109 170.666 228.859 170.666 227.082C170.666 223.414 173.861 220.445 177.777 220.445ZM160.68 352.914C167.611 339.164 174.57 323.914 181.014 307.414C187.736 318.527 196.277 329.664 207.166 339.973C192.389 343.164 176.473 347.391 160.68 352.914ZM280.889 344.305C286.764 344.305 291.555 348.832 291.555 355.164C291.555 360.305 287.125 364.5 281.666 364.5C272.857 364.5 251.432 354.242 241.486 348.305C242.121 348.207 268.043 344.305 280.889 344.305Z" />
        </Icon>
    </>
}