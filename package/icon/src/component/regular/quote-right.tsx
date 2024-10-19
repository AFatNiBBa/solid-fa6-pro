
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `quote-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/quote-right?s=regular quote-right}
 * @preview ![quote-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWMTkyQzAgMjI3LjM0NiAyOC42NTQgMjU2IDY0IDI1NkgxNjBDMTY1LjU1OSAyNTYgMTcwLjg1NyAyNTUuMDY4IDE3NiAyNTMuNzM2VjMyOEMxNzYgMzg1LjM0NCAxMjkuMzQ0IDQzMiA3MiA0MzJINTZDNDIuNzUgNDMyIDMyIDQ0Mi43NSAzMiA0NTZTNDIuNzUgNDgwIDU2IDQ4MEg3MkMxNTUuODEyIDQ4MCAyMjQgNDExLjgxMiAyMjQgMzI4Vjk2QzIyNCA2MC42NTQgMTk1LjM0NiAzMiAxNjAgMzJaTTE3NiAxOTJDMTc2IDIwMC44MjIgMTY4LjgyMiAyMDggMTYwIDIwOEg2NEM1NS4xNzggMjA4IDQ4IDIwMC44MjIgNDggMTkyVjk2QzQ4IDg3LjE3OCA1NS4xNzggODAgNjQgODBIMTYwQzE2OC44MjIgODAgMTc2IDg3LjE3OCAxNzYgOTZWMTkyWk00NDggMzJIMzUyQzMxNi42NTQgMzIgMjg4IDYwLjY1NCAyODggOTZWMTkyQzI4OCAyMjcuMzQ2IDMxNi42NTQgMjU2IDM1MiAyNTZINDQ4QzQ1My41NTkgMjU2IDQ1OC44NTcgMjU1LjA2OCA0NjQgMjUzLjczNlYzMjhDNDY0IDM4NS4zNDQgNDE3LjM0NCA0MzIgMzYwIDQzMkgzNDRDMzMwLjc1IDQzMiAzMjAgNDQyLjc1IDMyMCA0NTZTMzMwLjc1IDQ4MCAzNDQgNDgwSDM2MEM0NDMuODEyIDQ4MCA1MTIgNDExLjgxMiA1MTIgMzI4Vjk2QzUxMiA2MC42NTQgNDgzLjM0NiAzMiA0NDggMzJaTTQ2NCAxOTJDNDY0IDIwMC44MjIgNDU2LjgyMiAyMDggNDQ4IDIwOEgzNTJDMzQzLjE3OCAyMDggMzM2IDIwMC44MjIgMzM2IDE5MlY5NkMzMzYgODcuMTc4IDM0My4xNzggODAgMzUyIDgwSDQ0OEM0NTYuODIyIDgwIDQ2NCA4Ny4xNzggNDY0IDk2VjE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function QuoteRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M160 32H64C28.654 32 0 60.654 0 96V192C0 227.346 28.654 256 64 256H160C165.559 256 170.857 255.068 176 253.736V328C176 385.344 129.344 432 72 432H56C42.75 432 32 442.75 32 456S42.75 480 56 480H72C155.812 480 224 411.812 224 328V96C224 60.654 195.346 32 160 32ZM176 192C176 200.822 168.822 208 160 208H64C55.178 208 48 200.822 48 192V96C48 87.178 55.178 80 64 80H160C168.822 80 176 87.178 176 96V192ZM448 32H352C316.654 32 288 60.654 288 96V192C288 227.346 316.654 256 352 256H448C453.559 256 458.857 255.068 464 253.736V328C464 385.344 417.344 432 360 432H344C330.75 432 320 442.75 320 456S330.75 480 344 480H360C443.812 480 512 411.812 512 328V96C512 60.654 483.346 32 448 32ZM464 192C464 200.822 456.822 208 448 208H352C343.178 208 336 200.822 336 192V96C336 87.178 343.178 80 352 80H448C456.822 80 464 87.178 464 96V192Z" />
        </Icon>
    </>
}