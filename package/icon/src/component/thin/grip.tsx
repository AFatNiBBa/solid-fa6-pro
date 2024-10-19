
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `grip` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip?s=thin grip}
 * @preview ![grip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTkyVjEyOEM0NDggMTEwLjMyNiA0MzMuNjcyIDk2IDQxNiA5NkgzNTJDMzM0LjMyOCA5NiAzMjAgMTEwLjMyNiAzMjAgMTI4VjE5MkMzMjAgMjA5LjY3NCAzMzQuMzI4IDIyNCAzNTIgMjI0SDQxNkM0MzMuNjcyIDIyNCA0NDggMjA5LjY3NCA0NDggMTkyWk0zNTIgMjA4QzM0My4xNzYgMjA4IDMzNiAyMDAuODIyIDMzNiAxOTJWMTI4QzMzNiAxMTkuMTc4IDM0My4xNzYgMTEyIDM1MiAxMTJINDE2QzQyNC44MjQgMTEyIDQzMiAxMTkuMTc4IDQzMiAxMjhWMTkyQzQzMiAyMDAuODIyIDQyNC44MjQgMjA4IDQxNiAyMDhIMzUyWk00NDggMzg0VjMyMEM0NDggMzAyLjMyNiA0MzMuNjcyIDI4OCA0MTYgMjg4SDM1MkMzMzQuMzI4IDI4OCAzMjAgMzAyLjMyNiAzMjAgMzIwVjM4NEMzMjAgNDAxLjY3NCAzMzQuMzI4IDQxNiAzNTIgNDE2SDQxNkM0MzMuNjcyIDQxNiA0NDggNDAxLjY3NCA0NDggMzg0Wk0zNTIgNDAwQzM0My4xNzYgNDAwIDMzNiAzOTIuODIyIDMzNiAzODRWMzIwQzMzNiAzMTEuMTc4IDM0My4xNzYgMzA0IDM1MiAzMDRINDE2QzQyNC44MjQgMzA0IDQzMiAzMTEuMTc4IDQzMiAzMjBWMzg0QzQzMiAzOTIuODIyIDQyNC44MjQgNDAwIDQxNiA0MDBIMzUyWk0yODggMzg0VjMyMEMyODggMzAyLjMyNiAyNzMuNjcyIDI4OCAyNTYgMjg4SDE5MkMxNzQuMzI4IDI4OCAxNjAgMzAyLjMyNiAxNjAgMzIwVjM4NEMxNjAgNDAxLjY3NCAxNzQuMzI4IDQxNiAxOTIgNDE2SDI1NkMyNzMuNjcyIDQxNiAyODggNDAxLjY3NCAyODggMzg0Wk0xOTIgNDAwQzE4My4xNzYgNDAwIDE3NiAzOTIuODIyIDE3NiAzODRWMzIwQzE3NiAzMTEuMTc4IDE4My4xNzYgMzA0IDE5MiAzMDRIMjU2QzI2NC44MjQgMzA0IDI3MiAzMTEuMTc4IDI3MiAzMjBWMzg0QzI3MiAzOTIuODIyIDI2NC44MjQgNDAwIDI1NiA0MDBIMTkyWk0yODggMTkyVjEyOEMyODggMTEwLjMyNiAyNzMuNjcyIDk2IDI1NiA5NkgxOTJDMTc0LjMyOCA5NiAxNjAgMTEwLjMyNiAxNjAgMTI4VjE5MkMxNjAgMjA5LjY3NCAxNzQuMzI4IDIyNCAxOTIgMjI0SDI1NkMyNzMuNjcyIDIyNCAyODggMjA5LjY3NCAyODggMTkyWk0xOTIgMjA4QzE4My4xNzYgMjA4IDE3NiAyMDAuODIyIDE3NiAxOTJWMTI4QzE3NiAxMTkuMTc4IDE4My4xNzYgMTEyIDE5MiAxMTJIMjU2QzI2NC44MjQgMTEyIDI3MiAxMTkuMTc4IDI3MiAxMjhWMTkyQzI3MiAyMDAuODIyIDI2NC44MjQgMjA4IDI1NiAyMDhIMTkyWk0xMjggMzg0VjMyMEMxMjggMzAyLjMyNiAxMTMuNjcyIDI4OCA5NiAyODhIMzJDMTQuMzI4IDI4OCAwIDMwMi4zMjYgMCAzMjBWMzg0QzAgNDAxLjY3NCAxNC4zMjggNDE2IDMyIDQxNkg5NkMxMTMuNjcyIDQxNiAxMjggNDAxLjY3NCAxMjggMzg0Wk0zMiA0MDBDMjMuMTc2IDQwMCAxNiAzOTIuODIyIDE2IDM4NFYzMjBDMTYgMzExLjE3OCAyMy4xNzYgMzA0IDMyIDMwNEg5NkMxMDQuODI0IDMwNCAxMTIgMzExLjE3OCAxMTIgMzIwVjM4NEMxMTIgMzkyLjgyMiAxMDQuODI0IDQwMCA5NiA0MDBIMzJaTTEyOCAxOTJWMTI4QzEyOCAxMTAuMzI2IDExMy42NzIgOTYgOTYgOTZIMzJDMTQuMzI4IDk2IDAgMTEwLjMyNiAwIDEyOFYxOTJDMCAyMDkuNjc0IDE0LjMyOCAyMjQgMzIgMjI0SDk2QzExMy42NzIgMjI0IDEyOCAyMDkuNjc0IDEyOCAxOTJaTTMyIDIwOEMyMy4xNzYgMjA4IDE2IDIwMC44MjIgMTYgMTkyVjEyOEMxNiAxMTkuMTc4IDIzLjE3NiAxMTIgMzIgMTEySDk2QzEwNC44MjQgMTEyIDExMiAxMTkuMTc4IDExMiAxMjhWMTkyQzExMiAyMDAuODIyIDEwNC44MjQgMjA4IDk2IDIwOEgzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Grip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 192V128C448 110.326 433.672 96 416 96H352C334.328 96 320 110.326 320 128V192C320 209.674 334.328 224 352 224H416C433.672 224 448 209.674 448 192ZM352 208C343.176 208 336 200.822 336 192V128C336 119.178 343.176 112 352 112H416C424.824 112 432 119.178 432 128V192C432 200.822 424.824 208 416 208H352ZM448 384V320C448 302.326 433.672 288 416 288H352C334.328 288 320 302.326 320 320V384C320 401.674 334.328 416 352 416H416C433.672 416 448 401.674 448 384ZM352 400C343.176 400 336 392.822 336 384V320C336 311.178 343.176 304 352 304H416C424.824 304 432 311.178 432 320V384C432 392.822 424.824 400 416 400H352ZM288 384V320C288 302.326 273.672 288 256 288H192C174.328 288 160 302.326 160 320V384C160 401.674 174.328 416 192 416H256C273.672 416 288 401.674 288 384ZM192 400C183.176 400 176 392.822 176 384V320C176 311.178 183.176 304 192 304H256C264.824 304 272 311.178 272 320V384C272 392.822 264.824 400 256 400H192ZM288 192V128C288 110.326 273.672 96 256 96H192C174.328 96 160 110.326 160 128V192C160 209.674 174.328 224 192 224H256C273.672 224 288 209.674 288 192ZM192 208C183.176 208 176 200.822 176 192V128C176 119.178 183.176 112 192 112H256C264.824 112 272 119.178 272 128V192C272 200.822 264.824 208 256 208H192ZM128 384V320C128 302.326 113.672 288 96 288H32C14.328 288 0 302.326 0 320V384C0 401.674 14.328 416 32 416H96C113.672 416 128 401.674 128 384ZM32 400C23.176 400 16 392.822 16 384V320C16 311.178 23.176 304 32 304H96C104.824 304 112 311.178 112 320V384C112 392.822 104.824 400 96 400H32ZM128 192V128C128 110.326 113.672 96 96 96H32C14.328 96 0 110.326 0 128V192C0 209.674 14.328 224 32 224H96C113.672 224 128 209.674 128 192ZM32 208C23.176 208 16 200.822 16 192V128C16 119.178 23.176 112 32 112H96C104.824 112 112 119.178 112 128V192C112 200.822 104.824 208 96 208H32Z" />
        </Icon>
    </>
}