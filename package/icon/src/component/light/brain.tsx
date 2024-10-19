
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brain` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brain?s=light brain}
 * @preview ![brain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjg4QzUxMiAyNjMuODU3IDUwMi45OTggMjQxLjA4IDQ4Ny4xNjIgMjIzLjY1MkM0ODcuNzIxIDIxOS43OTkgNDg4IDIxNS45MSA0ODggMjEyQzQ4OCAxODIuMzcxIDQ3Mi4xMDQgMTU1LjY2NiA0NDcuOTkyIDE0MC43MjlDNDQ3Ljk5OCAxNDAuMzIgNDQ4IDEzOS45MSA0NDggMTM5LjVDNDQ4IDEwOC43NzMgNDMxLjY0MyA4MS40MzIgNDA2LjE5NyA2Ni42MzlDMzk4LjE3NiAyOC42MjMgMzY0LjM2NyAwIDMyNCAwQzI5Ni4wNzIgMCAyNzEuMjgxIDEzLjcwMyAyNTYgMzQuNzM2QzI0MC43MTkgMTMuNzAzIDIxNS45MjggMCAxODggMEMxNDcuNjMzIDAgMTEzLjgyNiAyOC42MjMgMTA1LjgwNSA2Ni42MzlDODIuMzYzIDgwLjI2NiA2Ni42MzUgMTA0LjU0MyA2NC4zMDEgMTMyLjMwM0MzOS44OTYgMTQ3LjIxNSAyNCAxNzQuMTAyIDI0IDIwNEMyNCAyMTAuMjk1IDI0LjcwNSAyMTYuNTIgMjYuMDg2IDIyMi41ODJDOS41ODggMjQwLjEyNyAwIDI2My40NTcgMCAyODhDMCAzMTYuNjAyIDEyLjQ5OCAzNDIuODc3IDMzLjM4MSAzNjAuNzQ2QzMyLjQ2NyAzNjUuNzgzIDMyIDM3MC44ODUgMzIgMzc2QzMyIDQyNC4wODIgNzAuNzYgNDYzLjI4MSAxMTguNjc2IDQ2My45OUMxMzEuMDQzIDQ5Mi4yMjUgMTU5LjI1NiA1MTIgMTkyIDUxMkMyMTguMTQxIDUxMiAyNDEuMzkzIDQ5OS4zOTggMjU2IDQ3OS45NDlDMjcwLjYwNyA0OTkuMzk4IDI5My44NTkgNTEyIDMyMCA1MTJDMzUyLjc0NiA1MTIgMzgwLjk1OSA0OTIuMjI1IDM5My4zMjQgNDYzLjk5QzQ0MS4yNCA0NjMuMjgxIDQ4MCA0MjQuMDgyIDQ4MCAzNzZDNDgwIDM3MC44ODUgNDc5LjUzNSAzNjUuNzgzIDQ3OC42MTkgMzYwLjc0NkM0OTkuNTA0IDM0Mi44NzcgNTEyIDMxNi42MDIgNTEyIDI4OFpNMjQwIDQzMkMyNDAgNDU4LjUxIDIxOC41MSA0ODAgMTkyIDQ4MFMxNDQgNDU4LjUxIDE0NCA0MzJDMTQ0IDQyOS45NzMgMTQ0LjM1MiA0MjguMDQxIDE0NC41OTYgNDI2LjA4QzEzNy4xNDMgNDI5Ljc1IDEyOC44NjkgNDMyIDEyMCA0MzJDODkuMDcyIDQzMiA2NCA0MDYuOTI4IDY0IDM3NkM2NCAzNjUuNDYzIDY3LjA4OCAzNTUuNzE3IDcyLjE0OCAzNDcuMjk5QzQ4LjYzOSAzMzcuODMgMzIgMzE0Ljg5OCAzMiAyODhDMzIgMjY0LjEyNyA0NS4yMjUgMjQzLjU1NSA2NC41OTggMjMyLjU1M0M1OS4xOTEgMjI0LjM1MiA1NiAyMTQuNTU3IDU2IDIwNEM1NiAxNzguNzE1IDc0LjA2MSAxNTcuNjg4IDk3Ljk3NyAxNTMuMDFDOTYuODE2IDE0OC42NzQgOTYgMTQ0LjIwMSA5NiAxMzkuNUM5NiAxMTQuNjY2IDExMy4yODkgOTMuOTg0IDEzNi40NTUgODguNTIxQzEzNi4zMjIgODcuMDA4IDEzNiA4NS41NDkgMTM2IDg0QzEzNiA1NS4yODEgMTU5LjI4MSAzMiAxODggMzJTMjQwIDU1LjI4MSAyNDAgODRWNDMyWk00MzkuODUyIDM0Ny4yOTlDNDQ0LjkxMiAzNTUuNzE3IDQ0OCAzNjUuNDYzIDQ0OCAzNzZDNDQ4IDQwNi45MjggNDIyLjkyOCA0MzIgMzkyIDQzMkMzODMuMTMxIDQzMiAzNzQuODU3IDQyOS43NSAzNjcuNDA0IDQyNi4wOEMzNjcuNjQ4IDQyOC4wNDEgMzY4IDQyOS45NzMgMzY4IDQzMkMzNjggNDU4LjUxIDM0Ni41MSA0ODAgMzIwIDQ4MFMyNzIgNDU4LjUxIDI3MiA0MzJWODRDMjcyIDU1LjI4MSAyOTUuMjgxIDMyIDMyNCAzMlMzNzYgNTUuMjgxIDM3NiA4NEMzNzYgODUuNTQ5IDM3NS42NzggODcuMDA4IDM3NS41NDUgODguNTIxQzM5OC43MTEgOTMuOTg0IDQxNiAxMTQuNjY2IDQxNiAxMzkuNUM0MTYgMTQ3LjA4IDQxNC4zMjQgMTU0LjI0MiA0MTEuNDM0IDE2MC43NUM0MzYuNiAxNjQuMzg1IDQ1NiAxODUuODI4IDQ1NiAyMTJDNDU2IDIyMC4wNDcgNDU0LjAxOCAyMjcuNTcyIDQ1MC43NTYgMjM0LjM3M0M0NjguMzIyIDI0NS43ODEgNDgwIDI2NS40OSA0ODAgMjg4QzQ4MCAzMTQuODk4IDQ2My4zNjEgMzM3LjgzIDQzOS44NTIgMzQ3LjI5OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Brain(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 288C512 263.857 502.998 241.08 487.162 223.652C487.721 219.799 488 215.91 488 212C488 182.371 472.104 155.666 447.992 140.729C447.998 140.32 448 139.91 448 139.5C448 108.773 431.643 81.432 406.197 66.639C398.176 28.623 364.367 0 324 0C296.072 0 271.281 13.703 256 34.736C240.719 13.703 215.928 0 188 0C147.633 0 113.826 28.623 105.805 66.639C82.363 80.266 66.635 104.543 64.301 132.303C39.896 147.215 24 174.102 24 204C24 210.295 24.705 216.52 26.086 222.582C9.588 240.127 0 263.457 0 288C0 316.602 12.498 342.877 33.381 360.746C32.467 365.783 32 370.885 32 376C32 424.082 70.76 463.281 118.676 463.99C131.043 492.225 159.256 512 192 512C218.141 512 241.393 499.398 256 479.949C270.607 499.398 293.859 512 320 512C352.746 512 380.959 492.225 393.324 463.99C441.24 463.281 480 424.082 480 376C480 370.885 479.535 365.783 478.619 360.746C499.504 342.877 512 316.602 512 288ZM240 432C240 458.51 218.51 480 192 480S144 458.51 144 432C144 429.973 144.352 428.041 144.596 426.08C137.143 429.75 128.869 432 120 432C89.072 432 64 406.928 64 376C64 365.463 67.088 355.717 72.148 347.299C48.639 337.83 32 314.898 32 288C32 264.127 45.225 243.555 64.598 232.553C59.191 224.352 56 214.557 56 204C56 178.715 74.061 157.688 97.977 153.01C96.816 148.674 96 144.201 96 139.5C96 114.666 113.289 93.984 136.455 88.521C136.322 87.008 136 85.549 136 84C136 55.281 159.281 32 188 32S240 55.281 240 84V432ZM439.852 347.299C444.912 355.717 448 365.463 448 376C448 406.928 422.928 432 392 432C383.131 432 374.857 429.75 367.404 426.08C367.648 428.041 368 429.973 368 432C368 458.51 346.51 480 320 480S272 458.51 272 432V84C272 55.281 295.281 32 324 32S376 55.281 376 84C376 85.549 375.678 87.008 375.545 88.521C398.711 93.984 416 114.666 416 139.5C416 147.08 414.324 154.242 411.434 160.75C436.6 164.385 456 185.828 456 212C456 220.047 454.018 227.572 450.756 234.373C468.322 245.781 480 265.49 480 288C480 314.898 463.361 337.83 439.852 347.299Z" />
        </Icon>
    </>
}