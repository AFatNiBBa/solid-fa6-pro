
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gopuram` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gopuram?s=thin gopuram}
 * @preview ![gopuram](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDMyVjUwNEMzMjAgNTA4LjQxOCAzMTYuNDE4IDUxMiAzMTIgNTEySDMxMkMzMDcuNTgyIDUxMiAzMDQgNTA4LjQxOCAzMDQgNTA0VjQzMkMzMDQgNDIzLjE2MyAyOTYuODM3IDQxNiAyODggNDE2SDIyNEMyMTUuMTYzIDQxNiAyMDggNDIzLjE2MyAyMDggNDMyVjUwNEMyMDggNTA4LjQxOCAyMDQuNDE4IDUxMiAyMDAgNTEySDIwMEMxOTUuNTgyIDUxMiAxOTIgNTA4LjQxOCAxOTIgNTA0VjQzMkMxOTIgNDE0LjMyNyAyMDYuMzI3IDQwMCAyMjQgNDAwSDI4OEMzMDUuNjczIDQwMCAzMjAgNDE0LjMyNyAzMjAgNDMyWk0xNiA1MDRDMTYgNTA4LjQxOCAxMi40MTggNTEyIDggNTEySDhDMy41ODIgNTEyIDAgNTA4LjQxOCAwIDUwNFYzODRDMCAzNjYuMzI4IDE0LjMyNiAzNTIgMzIgMzUyVjI1NkMzMiAyMzguMzI4IDQ2LjMyNiAyMjQgNjQgMjI0VjE0NEM2NCAxMjYuMzI4IDc4LjMyNiAxMTIgOTYgMTEyVjhDOTYgMy41OTQgOTkuNTc4IDAgMTA0IDBTMTEyIDMuNTk0IDExMiA4VjM2LjkwNkMxMTYuNzc3IDM0LjA3IDEyMi4wNDMgMzIgMTI4IDMySDE5MlY4QzE5MiAzLjU5NCAxOTUuNTc4IDAgMjAwIDBTMjA4IDMuNTk0IDIwOCA4VjMySDMwNFY4QzMwNCAzLjU5NCAzMDcuNTc4IDAgMzEyIDBTMzIwIDMuNTk0IDMyMCA4VjMySDM4NEMzODkuOTU3IDMyIDM5NS4yMjMgMzQuMDcgNDAwIDM2LjkwNlY4QzQwMCAzLjU5NCA0MDMuNTc4IDAgNDA4IDBTNDE2IDMuNTk0IDQxNiA4VjExMkM0MzMuNjc0IDExMiA0NDggMTI2LjMyOCA0NDggMTQ0VjIyNEM0NjUuNjc0IDIyNCA0ODAgMjM4LjMyOCA0ODAgMjU2VjM1MkM0OTcuNjc0IDM1MiA1MTIgMzY2LjMyOCA1MTIgMzg0VjUwNEM1MTIgNTA4LjQxOCA1MDguNDE4IDUxMiA1MDQgNTEySDUwNEM0OTkuNTgyIDUxMiA0OTYgNTA4LjQxOCA0OTYgNTA0VjM4NEM0OTYgMzc1LjE2MyA0ODguODM3IDM2OCA0ODAgMzY4SDQxNlY1MDRDNDE2IDUwOC40MTggNDEyLjQxOCA1MTIgNDA4IDUxMkg0MDhDNDAzLjU4MiA1MTIgNDAwIDUwOC40MTggNDAwIDUwNFYzNjhIMTEyVjUwNEMxMTIgNTA4LjQxOCAxMDguNDE4IDUxMiAxMDQgNTEySDEwNEM5OS41ODIgNTEyIDk2IDUwOC40MTggOTYgNTA0VjM2OEgzMkMyMy4xNjMgMzY4IDE2IDM3NS4xNjMgMTYgMzg0VjUwNFpNMjg4IDMwNEMyODggMjk1LjE3NiAyODAuODIyIDI4OCAyNzIgMjg4SDI0MEMyMzEuMTc4IDI4OCAyMjQgMjk1LjE3NiAyMjQgMzA0VjM1MkgyODhWMzA0Wk0zODQgMjQwSDE0NFYzNTJIMjA4VjMwNEMyMDggMjg2LjMyOCAyMjIuMzI2IDI3MiAyNDAgMjcySDI3MkMyODkuNjc0IDI3MiAzMDQgMjg2LjMyOCAzMDQgMzA0VjM1MkgzODRWMjQwWk0yODggMTkyVjIyNEgzMzZWMTI4SDE3NlYyMjRIMjI0VjE5MkMyMjQgMTc0LjMyOCAyMzguMzI2IDE2MCAyNTYgMTYwUzI4OCAxNzQuMzI4IDI4OCAxOTJaTTI1NiAxNzZDMjQ3LjE3OCAxNzYgMjQwIDE4My4xNzYgMjQwIDE5MlYyMjRIMjcyVjE5MkMyNzIgMTgzLjE3NiAyNjQuODIyIDE3NiAyNTYgMTc2Wk00MDAgMjQwVjM1Mkg0NjRWMjU2QzQ2NCAyNDcuMTc2IDQ1Ni44MjIgMjQwIDQ0OCAyNDBINDAwWk0zNTIgMTI4VjIyNEg0MzJWMTQ0QzQzMiAxMzUuMTc2IDQyNC44MjIgMTI4IDQxNiAxMjhIMzUyWk0xMTIgMTEySDQwMFY2NEM0MDAgNTUuMTc2IDM5Mi44MjIgNDggMzg0IDQ4SDEyOEMxMTkuMTc4IDQ4IDExMiA1NS4xNzYgMTEyIDY0VjExMlpNODAgMjI0SDE2MFYxMjhIOTZDODcuMTc4IDEyOCA4MCAxMzUuMTc2IDgwIDE0NFYyMjRaTTQ4IDM1MkgxMjhWMjQwSDY0QzU1LjE3OCAyNDAgNDggMjQ3LjE3NiA0OCAyNTZWMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Gopuram(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M320 432V504C320 508.418 316.418 512 312 512H312C307.582 512 304 508.418 304 504V432C304 423.163 296.837 416 288 416H224C215.163 416 208 423.163 208 432V504C208 508.418 204.418 512 200 512H200C195.582 512 192 508.418 192 504V432C192 414.327 206.327 400 224 400H288C305.673 400 320 414.327 320 432ZM16 504C16 508.418 12.418 512 8 512H8C3.582 512 0 508.418 0 504V384C0 366.328 14.326 352 32 352V256C32 238.328 46.326 224 64 224V144C64 126.328 78.326 112 96 112V8C96 3.594 99.578 0 104 0S112 3.594 112 8V36.906C116.777 34.07 122.043 32 128 32H192V8C192 3.594 195.578 0 200 0S208 3.594 208 8V32H304V8C304 3.594 307.578 0 312 0S320 3.594 320 8V32H384C389.957 32 395.223 34.07 400 36.906V8C400 3.594 403.578 0 408 0S416 3.594 416 8V112C433.674 112 448 126.328 448 144V224C465.674 224 480 238.328 480 256V352C497.674 352 512 366.328 512 384V504C512 508.418 508.418 512 504 512H504C499.582 512 496 508.418 496 504V384C496 375.163 488.837 368 480 368H416V504C416 508.418 412.418 512 408 512H408C403.582 512 400 508.418 400 504V368H112V504C112 508.418 108.418 512 104 512H104C99.582 512 96 508.418 96 504V368H32C23.163 368 16 375.163 16 384V504ZM288 304C288 295.176 280.822 288 272 288H240C231.178 288 224 295.176 224 304V352H288V304ZM384 240H144V352H208V304C208 286.328 222.326 272 240 272H272C289.674 272 304 286.328 304 304V352H384V240ZM288 192V224H336V128H176V224H224V192C224 174.328 238.326 160 256 160S288 174.328 288 192ZM256 176C247.178 176 240 183.176 240 192V224H272V192C272 183.176 264.822 176 256 176ZM400 240V352H464V256C464 247.176 456.822 240 448 240H400ZM352 128V224H432V144C432 135.176 424.822 128 416 128H352ZM112 112H400V64C400 55.176 392.822 48 384 48H128C119.178 48 112 55.176 112 64V112ZM80 224H160V128H96C87.178 128 80 135.176 80 144V224ZM48 352H128V240H64C55.178 240 48 247.176 48 256V352Z" />
        </Icon>
    </>
}