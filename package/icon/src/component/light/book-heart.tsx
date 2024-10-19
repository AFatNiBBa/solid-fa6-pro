
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-heart` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-heart?s=light book-heart}
 * @preview ![book-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQuMDc4IDEzOS43NUMxODEuNDUzIDk2Ljc1IDE0Ny43MDMgMTEzLjYyNSAxMzMuODI4IDEyNS4yNUMxMDYuMzI4IDE0OC4yNSAxMDQuOTUzIDE4OS4zNzUgMTI5LjU3OCAyMTQuMjVMMjE0LjA3OCAyOTkuODc1QzIxOS41NzggMzA1LjM3NSAyMjguMzI4IDMwNS4zNzUgMjMzLjgyOCAyOTkuODc1TDMxOC41NzggMjE0LjI1QzM0My4yMDMgMTg5LjM3NSAzNDEuNzAzIDE0OC4yNSAzMTQuMjAzIDEyNS4yNUMzMDAuMzI4IDExMy42MjUgMjY2LjU3OCA5Ni43NSAyMjQuMDc4IDEzOS43NVpNMjk1Ljk1MyAxOTEuNzVMMjIzLjk1MyAyNjQuMzc1TDE1Mi4yMDMgMTkxLjc1QzE0MS44MjggMTgxLjM3NSAxMzkuODI4IDE2MS43NSAxNTQuMjAzIDE0OS43NUMxNjcuOTUzIDEzOC4yNSAxODUuNDUzIDE0Ni4zNzUgMTkyLjcwMyAxNTMuNUwyMjQuMDc4IDE4NS4yNUwyNTUuNDUzIDE1My41QzI2Mi41NzggMTQ2LjI1IDI4MC4wNzggMTM4LjI1IDI5My44MjggMTQ5Ljc1QzMwOC4yMDMgMTYxLjc1IDMwNi4yMDMgMTgxLjM3NSAyOTUuOTUzIDE5MS43NVpNNDQ4IDM2OFY0OEM0NDggMjEuNDkgNDI2LjUxIDAgNDAwIDBIODBDMzUuODE3IDAgMCAzNS44MTcgMCA4MFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDQzMkM0NDAuODQ0IDUxMiA0NDggNTA0Ljg0NCA0NDggNDk2UzQ0MC44NDQgNDgwIDQzMiA0ODBINDE2VjQxMy4wNTNDNDM0LjU4NCA0MDYuNDI2IDQ0OCAzODguODMyIDQ0OCAzNjhaTTM4NCA0ODBINjRDNDYuMzU5IDQ4MCAzMiA0NjUuNjQxIDMyIDQ0OFM0Ni4zNTkgNDE2IDY0IDQxNkgzODRWNDgwWk00MDAgMzg0SDY0QzUyLjI5MSAzODQgNDEuNDUxIDM4Ny4zODkgMzIgMzkyLjlWODBDMzIgNTMuNDkgNTMuNDkgMzIgODAgMzJINDAwQzQwOC44MzcgMzIgNDE2IDM5LjE2MyA0MTYgNDhWMzY4QzQxNiAzNzYuODM3IDQwOC44MzcgMzg0IDQwMCAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BookHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224.078 139.75C181.453 96.75 147.703 113.625 133.828 125.25C106.328 148.25 104.953 189.375 129.578 214.25L214.078 299.875C219.578 305.375 228.328 305.375 233.828 299.875L318.578 214.25C343.203 189.375 341.703 148.25 314.203 125.25C300.328 113.625 266.578 96.75 224.078 139.75ZM295.953 191.75L223.953 264.375L152.203 191.75C141.828 181.375 139.828 161.75 154.203 149.75C167.953 138.25 185.453 146.375 192.703 153.5L224.078 185.25L255.453 153.5C262.578 146.25 280.078 138.25 293.828 149.75C308.203 161.75 306.203 181.375 295.953 191.75ZM448 368V48C448 21.49 426.51 0 400 0H80C35.817 0 0 35.817 0 80V448C0 483.346 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.584 406.426 448 388.832 448 368ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H64C52.291 384 41.451 387.389 32 392.9V80C32 53.49 53.49 32 80 32H400C408.837 32 416 39.163 416 48V368C416 376.837 408.837 384 400 384Z" />
        </Icon>
    </>
}