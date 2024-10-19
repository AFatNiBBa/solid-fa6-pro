
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `castle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=thin castle}
 * @preview ![castle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggMTYwSDU3NkM1NTguMzI2IDE2MCA1NDQgMTc0LjMyNiA1NDQgMTkyVjIyNEg1MTJWMzJDNTEyIDE0LjMyNiA0OTcuNjc0IDAgNDgwIDBINDQwQzQyMi4zMjYgMCA0MDggMTQuMzI2IDQwOCAzMlY2NEgzNzZWMzJDMzc2IDE0LjMyNiAzNjEuNjc0IDAgMzQ0IDBIMjk2QzI3OC4zMjYgMCAyNjQgMTQuMzI2IDI2NCAzMlY2NEgyMzJWMzJDMjMyIDE0LjMyNiAyMTcuNjc0IDAgMjAwIDBIMTYwQzE0Mi4zMjYgMCAxMjggMTQuMzI2IDEyOCAzMlYyMjRIOTZWMTkyQzk2IDE3NC4zMjYgODEuNjc0IDE2MCA2NCAxNjBIMzJDMTQuMzI2IDE2MCAwIDE3NC4zMjYgMCAxOTJWNDQ4QzAgNDgzLjM0NiAyOC42NTQgNTEyIDY0IDUxMkg1NzZDNjExLjM0NiA1MTIgNjQwIDQ4My4zNDYgNjQwIDQ0OFYxOTJDNjQwIDE3NC4zMjYgNjI1LjY3NCAxNjAgNjA4IDE2MFpNMTQ0IDMyQzE0NCAyMy4xNzggMTUxLjE3OCAxNiAxNjAgMTZIMjAwQzIwOC44MjIgMTYgMjE2IDIzLjE3OCAyMTYgMzJWODBIMjgwVjMyQzI4MCAyMy4xNzggMjg3LjE3OCAxNiAyOTYgMTZIMzQ0QzM1Mi44MjIgMTYgMzYwIDIzLjE3OCAzNjAgMzJWODBINDI0VjMyQzQyNCAyMy4xNzggNDMxLjE3OCAxNiA0NDAgMTZINDgwQzQ4OC44MjIgMTYgNDk2IDIzLjE3OCA0OTYgMzJWMjI0SDE0NFYzMlpNMjU2IDQ5NlYzODRDMjU2IDM0OC42NTQgMjg0LjY1NCAzMjAgMzIwIDMyMFMzODQgMzQ4LjY1NCAzODQgMzg0VjQ5NkgyNTZaTTYyNCA0NDhDNjI0IDQ3NC40NjcgNjAyLjQ2NyA0OTYgNTc2IDQ5Nkg0MDBWMzg0QzQwMCAzMzkuODg5IDM2NC4xMTEgMzA0IDMyMCAzMDRTMjQwIDMzOS44ODkgMjQwIDM4NFY0OTZINjRDMzcuNTMzIDQ5NiAxNiA0NzQuNDY3IDE2IDQ0OFYxOTJDMTYgMTgzLjE3OCAyMy4xNzggMTc2IDMyIDE3Nkg2NEM3Mi44MjIgMTc2IDgwIDE4My4xNzggODAgMTkyVjI0MEg1NjBWMTkyQzU2MCAxODMuMTc4IDU2Ny4xNzggMTc2IDU3NiAxNzZINjA4QzYxNi44MjIgMTc2IDYyNCAxODMuMTc4IDYyNCAxOTJWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Castle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 160H576C558.326 160 544 174.326 544 192V224H512V32C512 14.326 497.674 0 480 0H440C422.326 0 408 14.326 408 32V64H376V32C376 14.326 361.674 0 344 0H296C278.326 0 264 14.326 264 32V64H232V32C232 14.326 217.674 0 200 0H160C142.326 0 128 14.326 128 32V224H96V192C96 174.326 81.674 160 64 160H32C14.326 160 0 174.326 0 192V448C0 483.346 28.654 512 64 512H576C611.346 512 640 483.346 640 448V192C640 174.326 625.674 160 608 160ZM144 32C144 23.178 151.178 16 160 16H200C208.822 16 216 23.178 216 32V80H280V32C280 23.178 287.178 16 296 16H344C352.822 16 360 23.178 360 32V80H424V32C424 23.178 431.178 16 440 16H480C488.822 16 496 23.178 496 32V224H144V32ZM256 496V384C256 348.654 284.654 320 320 320S384 348.654 384 384V496H256ZM624 448C624 474.467 602.467 496 576 496H400V384C400 339.889 364.111 304 320 304S240 339.889 240 384V496H64C37.533 496 16 474.467 16 448V192C16 183.178 23.178 176 32 176H64C72.822 176 80 183.178 80 192V240H560V192C560 183.178 567.178 176 576 176H608C616.822 176 624 183.178 624 192V448Z" />
        </Icon>
    </>
}