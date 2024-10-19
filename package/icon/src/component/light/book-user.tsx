
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-user` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-user?s=light book-user}
 * @preview ![book-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzY4VjQ4QzQ0OCAyMS40OSA0MjYuNTEgMCA0MDAgMEg4MEMzNS44MTcgMCAwIDM1LjgxNyAwIDgwVjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJINDMyQzQ0MC44NDQgNTEyIDQ0OCA1MDQuODQ0IDQ0OCA0OTZTNDQwLjg0NCA0ODAgNDMyIDQ4MEg0MTZWNDEzLjA1M0M0MzQuNTg0IDQwNi40MjYgNDQ4IDM4OC44MzIgNDQ4IDM2OFpNMzg0IDQ4MEg2NEM0Ni4zNTkgNDgwIDMyIDQ2NS42NDEgMzIgNDQ4UzQ2LjM1OSA0MTYgNjQgNDE2SDM4NFY0ODBaTTQwMCAzODRINjRDNTIuMjkxIDM4NCA0MS40NTEgMzg3LjM4OSAzMiAzOTIuOVY4MEMzMiA1My40OSA1My40OSAzMiA4MCAzMkg0MDBDNDA4LjgzNyAzMiA0MTYgMzkuMTYzIDQxNiA0OFYzNjhDNDE2IDM3Ni44MzcgNDA4LjgzNyAzODQgNDAwIDM4NFpNMjU2IDI0MEgxOTJDMTQ3LjgxNiAyNDAgMTEyIDI3NS44MTYgMTEyIDMyMEMxMTIgMzI4LjgzNiAxMTkuMTY0IDMzNiAxMjggMzM2UzE0NCAzMjguODM2IDE0NCAzMjBDMTQ0IDI5My40OSAxNjUuNDkgMjcyIDE5MiAyNzJIMjU2QzI4Mi41MSAyNzIgMzA0IDI5My40OSAzMDQgMzIwQzMwNCAzMjguODM2IDMxMS4xNjQgMzM2IDMyMCAzMzZTMzM2IDMyOC44MzYgMzM2IDMyMEMzMzYgMjc1LjgxNiAzMDAuMTg0IDI0MCAyNTYgMjQwWk0yMjQgMjA4QzI1OS4zNDYgMjA4IDI4OCAxNzkuMzQ2IDI4OCAxNDRTMjU5LjM0NiA4MCAyMjQgODBTMTYwIDEwOC42NTQgMTYwIDE0NFMxODguNjU0IDIwOCAyMjQgMjA4Wk0yMjQgMTEyQzI0MS42NDUgMTEyIDI1NiAxMjYuMzU1IDI1NiAxNDRTMjQxLjY0NSAxNzYgMjI0IDE3NlMxOTIgMTYxLjY0NSAxOTIgMTQ0UzIwNi4zNTUgMTEyIDIyNCAxMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BookUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 368V48C448 21.49 426.51 0 400 0H80C35.817 0 0 35.817 0 80V448C0 483.346 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.584 406.426 448 388.832 448 368ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H64C52.291 384 41.451 387.389 32 392.9V80C32 53.49 53.49 32 80 32H400C408.837 32 416 39.163 416 48V368C416 376.837 408.837 384 400 384ZM256 240H192C147.816 240 112 275.816 112 320C112 328.836 119.164 336 128 336S144 328.836 144 320C144 293.49 165.49 272 192 272H256C282.51 272 304 293.49 304 320C304 328.836 311.164 336 320 336S336 328.836 336 320C336 275.816 300.184 240 256 240ZM224 208C259.346 208 288 179.346 288 144S259.346 80 224 80S160 108.654 160 144S188.654 208 224 208ZM224 112C241.645 112 256 126.355 256 144S241.645 176 224 176S192 161.645 192 144S206.355 112 224 112Z" />
        </Icon>
    </>
}