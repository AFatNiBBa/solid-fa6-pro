
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-clock` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-clock?s=regular user-clock}
 * @preview ![user-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjI0QzQxNi4zNzUgMjI0IDM1MiAyODguMzc1IDM1MiAzNjhTNDE2LjM3NSA1MTIgNDk2IDUxMlM2NDAgNDQ3LjYyNSA2NDAgMzY4UzU3NS42MjUgMjI0IDQ5NiAyMjRaTTU0NCAzODRINDg5Ljc1QzQ4NC4zNzUgMzg0IDQ4MCAzNzkuNjI1IDQ4MCAzNzQuMjVWMzA0QzQ4MCAyOTUuMTY0IDQ4Ny4xNjQgMjg4IDQ5NiAyODhDNTA0LjgzOCAyODggNTEyIDI5NS4xNjQgNTEyIDMwNFYzNTJINTQ0QzU1Mi44MzggMzUyIDU2MCAzNTkuMTY0IDU2MCAzNjhTNTUyLjgzOCAzODQgNTQ0IDM4NFpNMjI0IDI1NkMyOTQuNjkzIDI1NiAzNTIgMTk4LjY5MSAzNTIgMTI4QzM1MiA1Ny4zMDcgMjk0LjY5MyAwIDIyNCAwUzk2IDU3LjMwNyA5NiAxMjhDOTYgMTk4LjY5MSAxNTMuMzA3IDI1NiAyMjQgMjU2Wk0yMjQgNDhDMjY4LjExMSA0OCAzMDQgODMuODg3IDMwNCAxMjhDMzA0IDE3Mi4xMTEgMjY4LjExMSAyMDggMjI0IDIwOFMxNDQgMTcyLjExMSAxNDQgMTI4QzE0NCA4My44ODcgMTc5Ljg4OSA0OCAyMjQgNDhaTTM5NS4wMDIgNTEySDMyQzE0LjMyNiA1MTIgMCA0OTcuNjcyIDAgNDgwQzAgMzgyLjc5NyA3OC43OTcgMzA0IDE3NiAzMDRIMjcyQzI5MS44NjUgMzA0IDMxMC44ODkgMzA3LjQ0MSAzMjguNzAxIDMxMy41MDhDMzIzLjczOCAzMjguNzUyIDMyMC45MTQgMzQ0LjkyIDMyMC4zMTggMzYxLjY3NEMzMDUuMzc3IDM1NS41NDcgMjg5LjEyMyAzNTIgMjcyIDM1MkgxNzZDMTEwLjg0IDM1MiA1Ni44OTUgNDAwLjk0NSA0OC45OTQgNDY0SDM0OC42QzM2MC44NzkgNDgyLjgxNCAzNzYuNjQ1IDQ5OS4xIDM5NS4wMDIgNTEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M496 224C416.375 224 352 288.375 352 368S416.375 512 496 512S640 447.625 640 368S575.625 224 496 224ZM544 384H489.75C484.375 384 480 379.625 480 374.25V304C480 295.164 487.164 288 496 288C504.838 288 512 295.164 512 304V352H544C552.838 352 560 359.164 560 368S552.838 384 544 384ZM224 256C294.693 256 352 198.691 352 128C352 57.307 294.693 0 224 0S96 57.307 96 128C96 198.691 153.307 256 224 256ZM224 48C268.111 48 304 83.887 304 128C304 172.111 268.111 208 224 208S144 172.111 144 128C144 83.887 179.889 48 224 48ZM395.002 512H32C14.326 512 0 497.672 0 480C0 382.797 78.797 304 176 304H272C291.865 304 310.889 307.441 328.701 313.508C323.738 328.752 320.914 344.92 320.318 361.674C305.377 355.547 289.123 352 272 352H176C110.84 352 56.895 400.945 48.994 464H348.6C360.879 482.814 376.645 499.1 395.002 512Z" />
        </Icon>
    </>
}