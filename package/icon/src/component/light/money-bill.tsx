
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `money-bill` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill?s=light money-bill}
 * @preview ![money-bill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMTQ0QzIzNS4wNjIgMTQ0IDE5MiAxOTQuMjUgMTkyIDI1NlMyMzUuMDYyIDM2OCAyODggMzY4UzM4NCAzMTcuNzUgMzg0IDI1NlMzNDAuOTM4IDE0NCAyODggMTQ0Wk0yODggMzM2QzI1Mi43MDMgMzM2IDIyNCAzMDAuMTA5IDIyNCAyNTZTMjUyLjcwMyAxNzYgMjg4IDE3NlMzNTIgMjExLjg5MSAzNTIgMjU2UzMyMy4yOTcgMzM2IDI4OCAzMzZaTTUxMiA2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTIgMCAxMjhWMzg0QzAgNDE5LjM0NiAyOC42NTQgNDQ4IDY0IDQ0OEg1MTJDNTQ3LjM0OCA0NDggNTc2IDQxOS4zNDYgNTc2IDM4NFYxMjhDNTc2IDkyLjY1MiA1NDcuMzQ4IDY0IDUxMiA2NFpNMzIgMTI4QzMyIDExMC4zNTUgNDYuMzU1IDk2IDY0IDk2SDk2Qzk2IDEzMS4yOTcgNjcuMjk3IDE2MCAzMiAxNjBWMTI4Wk02NCA0MTZDNDYuMzU1IDQxNiAzMiA0MDEuNjQ1IDMyIDM4NFYzNTJDNjcuMjk3IDM1MiA5NiAzODAuNzAzIDk2IDQxNkg2NFpNNTQ0IDM4NEM1NDQgNDAxLjY0NSA1MjkuNjQ1IDQxNiA1MTIgNDE2SDQ4MEM0ODAgMzgwLjcwMyA1MDguNzAzIDM1MiA1NDQgMzUyVjM4NFpNNTQ0IDMyMEM0OTEuMDYyIDMyMCA0NDggMzYzLjA2MiA0NDggNDE2SDEyOEMxMjggMzYzLjA2MiA4NC45MzggMzIwIDMyIDMyMFYxOTJDODQuOTM4IDE5MiAxMjggMTQ4LjkzOCAxMjggOTZINDQ4QzQ0OCAxNDguOTM4IDQ5MS4wNjIgMTkyIDU0NCAxOTJWMzIwWk01NDQgMTYwQzUwOC43MDMgMTYwIDQ4MCAxMzEuMjk3IDQ4MCA5Nkg1MTJDNTI5LjY0NSA5NiA1NDQgMTEwLjM1NSA1NDQgMTI4VjE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MoneyBill(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 144C235.062 144 192 194.25 192 256S235.062 368 288 368S384 317.75 384 256S340.938 144 288 144ZM288 336C252.703 336 224 300.109 224 256S252.703 176 288 176S352 211.891 352 256S323.297 336 288 336ZM512 64H64C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 64 448H512C547.348 448 576 419.346 576 384V128C576 92.652 547.348 64 512 64ZM32 128C32 110.355 46.355 96 64 96H96C96 131.297 67.297 160 32 160V128ZM64 416C46.355 416 32 401.645 32 384V352C67.297 352 96 380.703 96 416H64ZM544 384C544 401.645 529.645 416 512 416H480C480 380.703 508.703 352 544 352V384ZM544 320C491.062 320 448 363.062 448 416H128C128 363.062 84.938 320 32 320V192C84.938 192 128 148.938 128 96H448C448 148.938 491.062 192 544 192V320ZM544 160C508.703 160 480 131.297 480 96H512C529.645 96 544 110.355 544 128V160Z" />
        </Icon>
    </>
}