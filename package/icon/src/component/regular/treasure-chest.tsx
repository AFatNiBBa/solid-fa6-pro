
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `treasure-chest` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=regular treasure-chest}
 * @preview ![treasure-chest](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJIMTI4QzU3LjMwOCAzMiAwIDg5LjMwOCAwIDE2MFY0MTZDMCA0NTEuMiAyOC44IDQ4MCA2NCA0ODBINTEyQzU0Ny4yIDQ4MCA1NzYgNDUxLjIgNTc2IDQxNlYxNjBDNTc2IDg5LjMwOCA1MTguNjkyIDMyIDQ0OCAzMlpNOTYgNDMySDY0QzU1LjE2MyA0MzIgNDggNDI0LjgzNyA0OCA0MTZWMjg4SDk2VjQzMlpNOTYgMjQwSDQ4VjE2MEM0OCAxMjcuMjUgNjcuNzUgOTkuMTI1IDk2IDg2Ljc1VjI0MFpNNDMyIDQzMkgxNDRWMjg4SDIyNFYzMjBDMjI0IDMzNy42NzMgMjM4LjMyNyAzNTIgMjU2IDM1MkgzMjBDMzM3LjY3MyAzNTIgMzUyIDMzNy42NzMgMzUyIDMyMFYyODhINDMyVjQzMlpNMjcyIDI4OFYyNTZDMjcyIDI0Ny4xMjUgMjc5LjEyNSAyNDAgMjg4IDI0MFMzMDQgMjQ3LjEyNSAzMDQgMjU2VjI4OEMzMDQgMjk2Ljg3NSAyOTYuODc1IDMwNCAyODggMzA0UzI3MiAyOTYuODc1IDI3MiAyODhaTTQzMiAyNDBIMzUyVjIyNEMzNTIgMjA2LjMyNyAzMzcuNjczIDE5MiAzMjAgMTkySDI1NkMyMzguMzI3IDE5MiAyMjQgMjA2LjMyNyAyMjQgMjI0VjI0MEgxNDRWODBINDMyVjI0MFpNNTEyIDQzMkg0ODBWMjg4SDUyOFY0MTZDNTI4IDQyNC44MzcgNTIwLjgzNyA0MzIgNTEyIDQzMlpNNTI4IDI0MEg0ODBWODYuNzVDNTA4LjI1IDk5LjEyNSA1MjggMTI3LjI1IDUyOCAxNjBWMjQwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TreasureChest(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M448 32H128C57.308 32 0 89.308 0 160V416C0 451.2 28.8 480 64 480H512C547.2 480 576 451.2 576 416V160C576 89.308 518.692 32 448 32ZM96 432H64C55.163 432 48 424.837 48 416V288H96V432ZM96 240H48V160C48 127.25 67.75 99.125 96 86.75V240ZM432 432H144V288H224V320C224 337.673 238.327 352 256 352H320C337.673 352 352 337.673 352 320V288H432V432ZM272 288V256C272 247.125 279.125 240 288 240S304 247.125 304 256V288C304 296.875 296.875 304 288 304S272 296.875 272 288ZM432 240H352V224C352 206.327 337.673 192 320 192H256C238.327 192 224 206.327 224 224V240H144V80H432V240ZM512 432H480V288H528V416C528 424.837 520.837 432 512 432ZM528 240H480V86.75C508.25 99.125 528 127.25 528 160V240Z" />
        </Icon>
    </>
}