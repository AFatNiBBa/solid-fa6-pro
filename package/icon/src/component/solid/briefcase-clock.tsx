
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `briefcase-clock` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-clock?s=solid briefcase-clock}
 * @preview ![briefcase-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjI0QzQxNi4zNzUgMjI0IDM1MiAyODguMzc1IDM1MiAzNjhTNDE2LjM3NSA1MTIgNDk2IDUxMlM2NDAgNDQ3LjYyNSA2NDAgMzY4UzU3NS42MjUgMjI0IDQ5NiAyMjRaTTU0NCAzODRINDg5Ljc1QzQ4NC4zNzUgMzg0IDQ4MCAzNzkuNjI1IDQ4MCAzNzQuMjVWMzA0QzQ4MCAyOTUuMTYyIDQ4Ny4xNjQgMjg4IDQ5NiAyODhDNTA0LjgzOCAyODggNTEyIDI5NS4xNjIgNTEyIDMwNFYzNTJINTQ0QzU1Mi44MzggMzUyIDU2MCAzNTkuMTYyIDU2MCAzNjhDNTYwIDM3Ni44MzYgNTUyLjgzOCAzODQgNTQ0IDM4NFpNMzIwLjk3NSAzNTJIMjA4QzE5OS4xNTYgMzUyIDE5MiAzNDQuODQ0IDE5MiAzMzZWMjg4SDBWNDMyQzAgNDU3LjU5NCAyMi40MDYgNDgwIDQ4IDQ4MEgzNjAuMjM0QzMzNS4xMDIgNDQ5LjU2OCAzMjAgNDEwLjU0OSAzMjAgMzY4QzMyMCAzNjIuNTgyIDMyMC40ODggMzU3LjI4OSAzMjAuOTc1IDM1MlpNNDk2IDE5MkM1MDEuNDAyIDE5MiA1MDYuNzIzIDE5Mi4zMyA1MTIgMTkyLjgwN1YxNDRDNTEyIDExOC40MDYgNDg5LjU5NCA5NiA0NjQgOTZIMzg0VjQ4QzM4NCAyMi40MDYgMzYxLjU5NCAwIDMzNiAwSDE3NkMxNTAuNDA2IDAgMTI4IDIyLjQwNiAxMjggNDhWOTZINDhDMjIuNDA2IDk2IDAgMTE4LjQwNiAwIDE0NFYyNTZIMzYwLjIzMkMzOTIuNTE0IDIxNi45MTIgNDQxLjM0OCAxOTIgNDk2IDE5MlpNMzM2IDk2SDE3NlY0OEgzMzZWOTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BriefcaseClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M496 224C416.375 224 352 288.375 352 368S416.375 512 496 512S640 447.625 640 368S575.625 224 496 224ZM544 384H489.75C484.375 384 480 379.625 480 374.25V304C480 295.162 487.164 288 496 288C504.838 288 512 295.162 512 304V352H544C552.838 352 560 359.162 560 368C560 376.836 552.838 384 544 384ZM320.975 352H208C199.156 352 192 344.844 192 336V288H0V432C0 457.594 22.406 480 48 480H360.234C335.102 449.568 320 410.549 320 368C320 362.582 320.488 357.289 320.975 352ZM496 192C501.402 192 506.723 192.33 512 192.807V144C512 118.406 489.594 96 464 96H384V48C384 22.406 361.594 0 336 0H176C150.406 0 128 22.406 128 48V96H48C22.406 96 0 118.406 0 144V256H360.232C392.514 216.912 441.348 192 496 192ZM336 96H176V48H336V96Z" />
        </Icon>
    </>
}