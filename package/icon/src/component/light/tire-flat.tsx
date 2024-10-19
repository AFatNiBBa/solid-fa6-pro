
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tire-flat` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tire-flat?s=light tire-flat}
 * @preview ![tire-flat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzUuNTEgNDE3LjU0NUM0OTguMjI3IDM3OS41MDQgNTEyIDMzNS41NTcgNTEyIDI4OEM1MTIgMTQ2LjYyNSAzOTcuMzc1IDMyIDI1NiAzMlMwIDE0Ni42MjUgMCAyODhDMCAzMzUuNTU3IDEzLjc3MyAzNzkuNTA0IDM2LjQ5IDQxNy41NDVDMTUuNTY4IDQyMi43MjMgMCA0NDEuNDc5IDAgNDY0QzAgNDkwLjUxIDIxLjQ5IDUxMiA0OCA1MTJINDY0QzQ5MC41MSA1MTIgNTEyIDQ5MC41MSA1MTIgNDY0QzUxMiA0NDEuNDc5IDQ5Ni40MzIgNDIyLjcyMyA0NzUuNTEgNDE3LjU0NVpNNDY0IDQ4MEg0OEMzOS4xNzggNDgwIDMyIDQ3Mi44MjIgMzIgNDY0UzM5LjE3OCA0NDggNDggNDQ4SDk2QzEwNC44MzYgNDQ4IDExMiA0NDAuODM2IDExMiA0MzJDMTEyIDQyMy4xNjIgMTA0LjgzNiA0MTYgOTYgNDE2SDcyLjc1NkM0Ny4xNjQgMzc5Ljc0MiAzMiAzMzUuNjg4IDMyIDI4OEMzMiAxNjQuNSAxMzIuNSA2NCAyNTYgNjRTNDgwIDE2NC41IDQ4MCAyODhDNDgwIDMzNS42ODggNDY0LjgzNiAzNzkuNzQyIDQzOS4yNDQgNDE2SDQxNkM0MDcuMTY0IDQxNiA0MDAgNDIzLjE2MiA0MDAgNDMyQzQwMCA0NDAuODM2IDQwNy4xNjQgNDQ4IDQxNiA0NDhINDY0QzQ3Mi44MjIgNDQ4IDQ4MCA0NTUuMTc4IDQ4MCA0NjRTNDcyLjgyMiA0ODAgNDY0IDQ4MFpNMjU2IDEyOEMxNjcuNjI1IDEyOCA5NiAxOTkuNjI1IDk2IDI4OFMxNjcuNjI1IDQ0OCAyNTYgNDQ4UzQxNiAzNzYuMzc1IDQxNiAyODhTMzQ0LjM3NSAxMjggMjU2IDEyOFpNMjU2IDE2MEMyNzguMzc1IDE2MCAyOTkgMTY2LjI1IDMxNy4zNzUgMTc2LjM3NUwyNzkuNzUgMjI4LjEyNUMyNzIuMzc1IDIyNS4xMjUgMjY0LjM3NSAyMjMuMzc1IDI1NiAyMjMuMzc1UzIzOS42MjUgMjI1LjEyNSAyMzIuMjUgMjI4LjEyNUwxOTQuNjI1IDE3Ni4zNzVDMjEzIDE2Ni4yNSAyMzMuNjI1IDE2MCAyNTYgMTYwWk0xMjggMjg4QzEyOCAyNTEuMjUgMTQzLjc1IDIxOC4zNzUgMTY4LjYyNSAxOTVMMjA2LjUgMjQ3QzE5Ny4yNSAyNTguMjUgMTkxLjM3NSAyNzIuMzc1IDE5MS4zNzUgMjg4QzE5MS4zNzUgMjg5LjM3NSAxOTEuNzUgMjkwLjYyNSAxOTEuODc1IDI5MkwxMzAuMzc1IDMxMkMxMjkgMzA0LjI1IDEyOCAyOTYuMjUgMTI4IDI4OFpNMjQwIDQxNC4zNzVDMTk2Ljc1IDQwOSAxNTkuMjUgMzgxLjc1IDE0MC41IDM0Mi4zNzVMMjAxLjYyNSAzMjIuNUMyMTAuMjUgMzM2LjEyNSAyMjMuODc1IDM0Ni4yNSAyNDAgMzUwLjM3NVY0MTQuMzc1Wk0yMjQgMjg4QzIyNCAyNzAuMjUgMjM4LjM3NSAyNTYgMjU2IDI1NlMyODggMjcwLjI1IDI4OCAyODhDMjg4IDMwNS42MjUgMjczLjYyNSAzMjAgMjU2IDMyMFMyMjQgMzA1LjYyNSAyMjQgMjg4Wk0yNzIgNDE0LjM3NVYzNTAuMzc1QzI4OC4xMjUgMzQ2LjI1IDMwMS43NSAzMzYuMTI1IDMxMC4zNzUgMzIyLjVMMzcxLjUgMzQyLjM3NUMzNTIuNzUgMzgxLjc1IDMxNS4yNSA0MDkgMjcyIDQxNC4zNzVaTTMyMC4xMjUgMjkyQzMyMC4yNSAyOTAuNjI1IDMyMC42MjUgMjg5LjM3NSAzMjAuNjI1IDI4OEMzMjAuNjI1IDI3Mi4zNzUgMzE0Ljc1IDI1OC4yNSAzMDUuNSAyNDdMMzQzLjM3NSAxOTVDMzY4LjI1IDIxOC4zNzUgMzg0IDI1MS4yNSAzODQgMjg4QzM4NCAyOTYuMjUgMzgzIDMwNC4yNSAzODEuNjI1IDMxMkwzMjAuMTI1IDI5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TireFlat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M475.51 417.545C498.227 379.504 512 335.557 512 288C512 146.625 397.375 32 256 32S0 146.625 0 288C0 335.557 13.773 379.504 36.49 417.545C15.568 422.723 0 441.479 0 464C0 490.51 21.49 512 48 512H464C490.51 512 512 490.51 512 464C512 441.479 496.432 422.723 475.51 417.545ZM464 480H48C39.178 480 32 472.822 32 464S39.178 448 48 448H96C104.836 448 112 440.836 112 432C112 423.162 104.836 416 96 416H72.756C47.164 379.742 32 335.688 32 288C32 164.5 132.5 64 256 64S480 164.5 480 288C480 335.688 464.836 379.742 439.244 416H416C407.164 416 400 423.162 400 432C400 440.836 407.164 448 416 448H464C472.822 448 480 455.178 480 464S472.822 480 464 480ZM256 128C167.625 128 96 199.625 96 288S167.625 448 256 448S416 376.375 416 288S344.375 128 256 128ZM256 160C278.375 160 299 166.25 317.375 176.375L279.75 228.125C272.375 225.125 264.375 223.375 256 223.375S239.625 225.125 232.25 228.125L194.625 176.375C213 166.25 233.625 160 256 160ZM128 288C128 251.25 143.75 218.375 168.625 195L206.5 247C197.25 258.25 191.375 272.375 191.375 288C191.375 289.375 191.75 290.625 191.875 292L130.375 312C129 304.25 128 296.25 128 288ZM240 414.375C196.75 409 159.25 381.75 140.5 342.375L201.625 322.5C210.25 336.125 223.875 346.25 240 350.375V414.375ZM224 288C224 270.25 238.375 256 256 256S288 270.25 288 288C288 305.625 273.625 320 256 320S224 305.625 224 288ZM272 414.375V350.375C288.125 346.25 301.75 336.125 310.375 322.5L371.5 342.375C352.75 381.75 315.25 409 272 414.375ZM320.125 292C320.25 290.625 320.625 289.375 320.625 288C320.625 272.375 314.75 258.25 305.5 247L343.375 195C368.25 218.375 384 251.25 384 288C384 296.25 383 304.25 381.625 312L320.125 292Z" />
        </Icon>
    </>
}