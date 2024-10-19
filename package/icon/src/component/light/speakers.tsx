
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `speakers` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=light speakers}
 * @preview ![speakers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMTkyQzQ5OS4zNzUgMTkyIDUyOCAxNjMuMzc1IDUyOCAxMjhTNDk5LjM3NSA2NCA0NjQgNjRTNDAwIDkyLjYyNSA0MDAgMTI4UzQyOC42MjUgMTkyIDQ2NCAxOTJaTTQ2NCA5NkM0ODEuNjI1IDk2IDQ5NiAxMTAuMzc1IDQ5NiAxMjhTNDgxLjYyNSAxNjAgNDY0IDE2MFM0MzIgMTQ1LjYyNSA0MzIgMTI4UzQ0Ni4zNzUgOTYgNDY0IDk2Wk00NjQgMzEyQzQ1MC43ODEgMzEyIDQ0MCAzMjIuNzgxIDQ0MCAzMzZTNDUwLjc4MSAzNjAgNDY0IDM2MFM0ODggMzQ5LjIxOSA0ODggMzM2UzQ3Ny4yMTkgMzEyIDQ2NCAzMTJaTTU3NiAwSDM1MkMzMTYuNjU0IDAgMjg4IDI4LjY1MiAyODggNjRWNDQ4QzI4OCA0ODMuMzQ2IDMxNi42NTQgNTEyIDM1MiA1MTJINTc2QzYxMS4zNDYgNTEyIDY0MCA0ODMuMzQ2IDY0MCA0NDhWNjRDNjQwIDI4LjY1MiA2MTEuMzQ2IDAgNTc2IDBaTTYwOCA0NDhDNjA4IDQ2NS42NzIgNTkzLjY3NCA0ODAgNTc2IDQ4MEgzNTJDMzM0LjMyNiA0ODAgMzIwIDQ2NS42NzIgMzIwIDQ0OFY2NEMzMjAgNDYuMzI2IDMzNC4zMjYgMzIgMzUyIDMySDU3NkM1OTMuNjc0IDMyIDYwOCA0Ni4zMjYgNjA4IDY0VjQ0OFpNNDY0IDIyNEM0MDIuMTI1IDIyNCAzNTIgMjc0LjEyNSAzNTIgMzM2UzQwMi4xMjUgNDQ4IDQ2NCA0NDhTNTc2IDM5Ny44NzUgNTc2IDMzNlM1MjUuODc1IDIyNCA0NjQgMjI0Wk00NjQgNDE2QzQxOS44NzUgNDE2IDM4NCAzODAuMTI1IDM4NCAzMzZTNDE5Ljg3NSAyNTYgNDY0IDI1NlM1NDQgMjkxLjg3NSA1NDQgMzM2UzUwOC4xMjUgNDE2IDQ2NCA0MTZaTTE1MiAzMzZDMTUyIDM0OS4yMTkgMTYyLjc4MSAzNjAgMTc2IDM2MFMyMDAgMzQ5LjIxOSAyMDAgMzM2UzE4OS4yMTkgMzEyIDE3NiAzMTJTMTUyIDMyMi43ODEgMTUyIDMzNlpNMjQwIDEyOEMyNDAgOTIuNjI1IDIxMS4zNzUgNjQgMTc2IDY0UzExMiA5Mi42MjUgMTEyIDEyOFMxNDAuNjI1IDE5MiAxNzYgMTkyUzI0MCAxNjMuMzc1IDI0MCAxMjhaTTE0NCAxMjhDMTQ0IDExMC4zNzUgMTU4LjM3NSA5NiAxNzYgOTZTMjA4IDExMC4zNzUgMjA4IDEyOFMxOTMuNjI1IDE2MCAxNzYgMTYwUzE0NCAxNDUuNjI1IDE0NCAxMjhaTTI1NiAxNkMyNTYgNy4xNjIgMjQ4LjgzNiAwIDI0MCAwSDY0QzI4LjY1NCAwIDAgMjguNjUyIDAgNjRWNDQ4QzAgNDgzLjM0NiAyOC42NTQgNTEyIDY0IDUxMkgyNDBDMjQ4LjgzNiA1MTIgMjU2IDUwNC44MzYgMjU2IDQ5NkMyNTYgNDg3LjE2MiAyNDguODM2IDQ4MCAyNDAgNDgwSDY0QzQ2LjMyNiA0ODAgMzIgNDY1LjY3MiAzMiA0NDhWNjRDMzIgNDYuMzI2IDQ2LjMyNiAzMiA2NCAzMkgyNDBDMjQ4LjgzNiAzMiAyNTYgMjQuODM2IDI1NiAxNlpNMjQyLjM3NSAyNjQuODU5QzI0Ny4yODEgMjU3LjUxNiAyNDUuMjgxIDI0Ny41NzggMjM3LjkzOCAyNDIuNjg4QzIxOS41NjIgMjMwLjQ1MyAxOTguMTU2IDIyNCAxNzYgMjI0QzExNC4yNSAyMjQgNjQgMjc0LjI1IDY0IDMzNlMxMTQuMjUgNDQ4IDE3NiA0NDhDMTk4LjE1NiA0NDggMjE5LjU2MiA0NDEuNTQ3IDIzNy45MzggNDI5LjMxMkMyNDUuMjgxIDQyNC40MjIgMjQ3LjI4MSA0MTQuNDg0IDI0Mi4zNzUgNDA3LjE0MUMyMzcuNDY5IDM5OS43MzQgMjI3LjUzMSAzOTcuNzgxIDIyMC4xODggNDAyLjY4N0MyMDcuMDk0IDQxMS4zOTEgMTkxLjgxMiA0MTYgMTc2IDQxNkMxMzEuODc1IDQxNiA5NiAzODAuMTA5IDk2IDMzNlMxMzEuODc1IDI1NiAxNzYgMjU2QzE5MS44MTIgMjU2IDIwNy4wOTQgMjYwLjYwOSAyMjAuMTg4IDI2OS4zMTJDMjI3LjU2MiAyNzQuMjE5IDIzNy41IDI3Mi4yNjYgMjQyLjM3NSAyNjQuODU5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Speakers(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M464 192C499.375 192 528 163.375 528 128S499.375 64 464 64S400 92.625 400 128S428.625 192 464 192ZM464 96C481.625 96 496 110.375 496 128S481.625 160 464 160S432 145.625 432 128S446.375 96 464 96ZM464 312C450.781 312 440 322.781 440 336S450.781 360 464 360S488 349.219 488 336S477.219 312 464 312ZM576 0H352C316.654 0 288 28.652 288 64V448C288 483.346 316.654 512 352 512H576C611.346 512 640 483.346 640 448V64C640 28.652 611.346 0 576 0ZM608 448C608 465.672 593.674 480 576 480H352C334.326 480 320 465.672 320 448V64C320 46.326 334.326 32 352 32H576C593.674 32 608 46.326 608 64V448ZM464 224C402.125 224 352 274.125 352 336S402.125 448 464 448S576 397.875 576 336S525.875 224 464 224ZM464 416C419.875 416 384 380.125 384 336S419.875 256 464 256S544 291.875 544 336S508.125 416 464 416ZM152 336C152 349.219 162.781 360 176 360S200 349.219 200 336S189.219 312 176 312S152 322.781 152 336ZM240 128C240 92.625 211.375 64 176 64S112 92.625 112 128S140.625 192 176 192S240 163.375 240 128ZM144 128C144 110.375 158.375 96 176 96S208 110.375 208 128S193.625 160 176 160S144 145.625 144 128ZM256 16C256 7.162 248.836 0 240 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H240C248.836 512 256 504.836 256 496C256 487.162 248.836 480 240 480H64C46.326 480 32 465.672 32 448V64C32 46.326 46.326 32 64 32H240C248.836 32 256 24.836 256 16ZM242.375 264.859C247.281 257.516 245.281 247.578 237.938 242.688C219.562 230.453 198.156 224 176 224C114.25 224 64 274.25 64 336S114.25 448 176 448C198.156 448 219.562 441.547 237.938 429.312C245.281 424.422 247.281 414.484 242.375 407.141C237.469 399.734 227.531 397.781 220.188 402.687C207.094 411.391 191.812 416 176 416C131.875 416 96 380.109 96 336S131.875 256 176 256C191.812 256 207.094 260.609 220.188 269.312C227.562 274.219 237.5 272.266 242.375 264.859Z" />
        </Icon>
    </>
}