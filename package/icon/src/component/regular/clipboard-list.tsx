
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clipboard-list` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-list?s=regular clipboard-list}
 * @preview ![clipboard-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDQgMjQ4QzkwLjc0NiAyNDggODAgMjU4Ljc0NiA4MCAyNzJTOTAuNzQ2IDI5NiAxMDQgMjk2QzExNy4yNTYgMjk2IDEyOCAyODUuMjU0IDEyOCAyNzJTMTE3LjI1NiAyNDggMTA0IDI0OFpNMTA0IDM0NEM5MC43NDYgMzQ0IDgwIDM1NC43NDYgODAgMzY4UzkwLjc0NiAzOTIgMTA0IDM5MkMxMTcuMjU2IDM5MiAxMjggMzgxLjI1NCAxMjggMzY4UzExNy4yNTYgMzQ0IDEwNCAzNDRaTTI4OCAzNTJIMTc2QzE2Ny4xNTYgMzUyIDE2MCAzNTkuMTU2IDE2MCAzNjhTMTY3LjE1NiAzODQgMTc2IDM4NEgyODhDMjk2Ljg0NCAzODQgMzA0IDM3Ni44NDQgMzA0IDM2OFMyOTYuODQ0IDM1MiAyODggMzUyWk0zMjAgNjRIMjcwLjM4N0MyNjIuOTczIDI3LjQ4NCAyMzAuNzAxIDAgMTkyIDBTMTIxLjAyNyAyNy40ODQgMTEzLjYxMyA2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTYgMCAxMjhWNDQ4QzAgNDgzLjM0NCAyOC42NTQgNTEyIDY0IDUxMkgzMjBDMzU1LjM0NiA1MTIgMzg0IDQ4My4zNDQgMzg0IDQ0OFYxMjhDMzg0IDkyLjY1NiAzNTUuMzQ2IDY0IDMyMCA2NFpNMTkyIDQ4QzIwNS4yMzQgNDggMjE2IDU4Ljc2NiAyMTYgNzJTMjA1LjIzNCA5NiAxOTIgOTZTMTY4IDg1LjIzNCAxNjggNzJTMTc4Ljc2NiA0OCAxOTIgNDhaTTMzNiA0NDhDMzM2IDQ1Ni44MiAzMjguODIyIDQ2NCAzMjAgNDY0SDY0QzU1LjE3OCA0NjQgNDggNDU2LjgyIDQ4IDQ0OFYxMjhDNDggMTE5LjE4IDU1LjE3OCAxMTIgNjQgMTEySDgyLjI2NEM4MC45MzIgMTE3LjE0MSA4MCAxMjIuNDQxIDgwIDEyOFYxNDRDODAgMTUyLjgzNiA4Ny4xNjQgMTYwIDk2IDE2MEgyODhDMjk2LjgzNiAxNjAgMzA0IDE1Mi44MzYgMzA0IDE0NFYxMjhDMzA0IDEyMi40NDEgMzAzLjA2OCAxMTcuMTQxIDMwMS43MzYgMTEySDMyMEMzMjguODIyIDExMiAzMzYgMTE5LjE4IDMzNiAxMjhWNDQ4Wk0yODggMjU2SDE3NkMxNjcuMTU2IDI1NiAxNjAgMjYzLjE1NiAxNjAgMjcyUzE2Ny4xNTYgMjg4IDE3NiAyODhIMjg4QzI5Ni44NDQgMjg4IDMwNCAyODAuODQ0IDMwNCAyNzJTMjk2Ljg0NCAyNTYgMjg4IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ClipboardList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M104 248C90.746 248 80 258.746 80 272S90.746 296 104 296C117.256 296 128 285.254 128 272S117.256 248 104 248ZM104 344C90.746 344 80 354.746 80 368S90.746 392 104 392C117.256 392 128 381.254 128 368S117.256 344 104 344ZM288 352H176C167.156 352 160 359.156 160 368S167.156 384 176 384H288C296.844 384 304 376.844 304 368S296.844 352 288 352ZM320 64H270.387C262.973 27.484 230.701 0 192 0S121.027 27.484 113.613 64H64C28.654 64 0 92.656 0 128V448C0 483.344 28.654 512 64 512H320C355.346 512 384 483.344 384 448V128C384 92.656 355.346 64 320 64ZM192 48C205.234 48 216 58.766 216 72S205.234 96 192 96S168 85.234 168 72S178.766 48 192 48ZM336 448C336 456.82 328.822 464 320 464H64C55.178 464 48 456.82 48 448V128C48 119.18 55.178 112 64 112H82.264C80.932 117.141 80 122.441 80 128V144C80 152.836 87.164 160 96 160H288C296.836 160 304 152.836 304 144V128C304 122.441 303.068 117.141 301.736 112H320C328.822 112 336 119.18 336 128V448ZM288 256H176C167.156 256 160 263.156 160 272S167.156 288 176 288H288C296.844 288 304 280.844 304 272S296.844 256 288 256Z" />
        </Icon>
    </>
}