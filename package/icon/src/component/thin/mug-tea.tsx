
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mug-tea` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mug-tea?s=thin mug-tea}
 * @preview ![mug-tea](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgNjRINTZDNDkuNjI1IDY0IDQzLjUgNjYuNSAzOSA3MVMzMiA4MS42MjUgMzIgODhWMzUyQzMyIDQwNSA3NSA0NDggMTI4IDQ0OEgzMjBDMzczIDQ0OCA0MTYgNDA1IDQxNiAzNTJWMjg4SDQ2NEM1MjUuNzUgMjg4IDU3NiAyMzcuNzUgNTc2IDE3NlM1MjUuNzUgNjQgNDY0IDY0Wk00MDAgMzUyQzQwMCAzOTYuMTExIDM2NC4xMTEgNDMyIDMyMCA0MzJIMTI4QzgzLjg4OSA0MzIgNDggMzk2LjExMSA0OCAzNTJWODhDNDggODIuODcxIDUyLjE3MiA4MCA1NiA4MEgxNTJWMTIwTDEwNS4zNzMgMTY2LjYyN0M5OS4zNzEgMTcyLjYyOSA5NiAxODAuNzY4IDk2IDE4OS4yNTRWMjU2Qzk2IDI3My42NzQgMTEwLjMyOCAyODggMTI4IDI4OEgxOTJDMjA5LjY3NCAyODggMjI0IDI3My42NzQgMjI0IDI1NlYxODkuMjU0QzIyNCAxODAuNzY4IDIyMC42MjkgMTcyLjYyOSAyMTQuNjI5IDE2Ni42MjdMMTY4IDEyMFY4MEg0MDBWMzUyWk0xNjAgMTM0LjYyN0wyMDMuMzEyIDE3Ny45MzlDMjA2LjMzNiAxODAuOTYzIDIwOCAxODQuOTggMjA4IDE4OS4yNTRWMjU2QzIwOCAyNjQuODIyIDIwMC44MjIgMjcyIDE5MiAyNzJIMTI4QzExOS4xNzggMjcyIDExMiAyNjQuODIyIDExMiAyNTZWMTg5LjI1NEMxMTIgMTg0Ljk4IDExMy42NjYgMTgwLjk2MyAxMTYuNjg2IDE3Ny45NDFMMTYwIDEzNC42MjdaTTQ2NCAyNzJINDE2VjgwSDQ2NEM1MTYuOTM4IDgwIDU2MCAxMjMuMDYyIDU2MCAxNzZTNTE2LjkzOCAyNzIgNDY0IDI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MugTea(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M464 64H56C49.625 64 43.5 66.5 39 71S32 81.625 32 88V352C32 405 75 448 128 448H320C373 448 416 405 416 352V288H464C525.75 288 576 237.75 576 176S525.75 64 464 64ZM400 352C400 396.111 364.111 432 320 432H128C83.889 432 48 396.111 48 352V88C48 82.871 52.172 80 56 80H152V120L105.373 166.627C99.371 172.629 96 180.768 96 189.254V256C96 273.674 110.328 288 128 288H192C209.674 288 224 273.674 224 256V189.254C224 180.768 220.629 172.629 214.629 166.627L168 120V80H400V352ZM160 134.627L203.312 177.939C206.336 180.963 208 184.98 208 189.254V256C208 264.822 200.822 272 192 272H128C119.178 272 112 264.822 112 256V189.254C112 184.98 113.666 180.963 116.686 177.941L160 134.627ZM464 272H416V80H464C516.938 80 560 123.062 560 176S516.938 272 464 272Z" />
        </Icon>
    </>
}